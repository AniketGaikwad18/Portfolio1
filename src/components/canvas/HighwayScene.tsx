"use client";

import { Environment, PerspectiveCamera, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// ─── Color Palettes ───────────────────────────────────────────────────────────
// Warm golden-green palette matching the reference image sunrise lighting
const FOLIAGE_COLORS = [
    "#8fbf3a", // warm lime green
    "#a5c83c", // bright yellow-green
    "#bcd45a", // light golden-green
    "#7aaa2e", // medium grass green
    "#96c933", // vivid spring green
    "#c4d94f", // sunny yellow-green
];

// ─── Stylized Tree (reference image style: puffy rounded canopy + thick trunk) ─
// Inspired by the cartoon/Pixar aesthetic from the reference:
// - Large sphere-cluster canopy that looks fluffy and rounded
// - Thick, warm-brown trunk clearly visible below the canopy
// - Wide root flare to ground the tree
function StylizedTree({ scale, color }: { scale: number; color: string }) {
    // Slightly darker shade for shadowed sphere undersides
    const shadowColor = color.replace(/^#/, '');
    const r = parseInt(shadowColor.slice(0, 2), 16);
    const g = parseInt(shadowColor.slice(2, 4), 16);
    const b = parseInt(shadowColor.slice(4, 6), 16);
    const darkerColor = `rgb(${Math.max(0, r - 30)},${Math.max(0, g - 28)},${Math.max(0, b - 15)})`;
    void darkerColor; // suppress unused warning — kept for future use

    return (
        <group scale={scale}>
            {/* Wide root flare — anchors tree to ground visually */}
            <mesh position={[0, 0.12, 0]} castShadow>
                <cylinderGeometry args={[0.55, 0.72, 0.24, 10]} />
                <meshStandardMaterial color="#7a4520" roughness={0.98} />
            </mesh>

            {/* Main trunk — thick, prominently visible */}
            <mesh position={[0, 1.3, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.28, 0.48, 2.4, 9]} />
                <meshStandardMaterial color="#7a4520" roughness={0.96} />
            </mesh>

            {/* Branch split left */}
            <mesh position={[-0.35, 2.6, 0.05]} rotation={[0, 0, 0.28]} castShadow>
                <cylinderGeometry args={[0.13, 0.22, 1.1, 7]} />
                <meshStandardMaterial color="#6d3c18" roughness={0.97} />
            </mesh>

            {/* Branch split right */}
            <mesh position={[0.32, 2.65, -0.05]} rotation={[0, 0, -0.24]} castShadow>
                <cylinderGeometry args={[0.12, 0.2, 1.0, 7]} />
                <meshStandardMaterial color="#6d3c18" roughness={0.97} />
            </mesh>

            {/* ── CANOPY — large overlapping sphere cluster ── */}
            {/* Central dominant sphere */}
            <mesh position={[0, 4.1, 0]} castShadow>
                <sphereGeometry args={[1.72, 12, 9]} />
                <meshStandardMaterial color={color} roughness={0.78} />
            </mesh>
            {/* Top center cap — makes canopy feel tall & full */}
            <mesh position={[0.05, 5.35, 0.05]} castShadow>
                <sphereGeometry args={[1.22, 11, 8]} />
                <meshStandardMaterial color={color} roughness={0.78} />
            </mesh>
            {/* Far left lobe */}
            <mesh position={[-1.45, 3.9, 0.1]} castShadow>
                <sphereGeometry args={[1.18, 11, 8]} />
                <meshStandardMaterial color={color} roughness={0.80} />
            </mesh>
            {/* Far right lobe */}
            <mesh position={[1.42, 4.0, -0.12]} castShadow>
                <sphereGeometry args={[1.14, 11, 8]} />
                <meshStandardMaterial color={color} roughness={0.80} />
            </mesh>
            {/* Front lobe */}
            <mesh position={[0.18, 3.7, 1.2]} castShadow>
                <sphereGeometry args={[1.05, 10, 8]} />
                <meshStandardMaterial color={color} roughness={0.82} />
            </mesh>
            {/* Back lobe */}
            <mesh position={[-0.15, 3.75, -1.15]} castShadow>
                <sphereGeometry args={[1.02, 10, 8]} />
                <meshStandardMaterial color={color} roughness={0.82} />
            </mesh>
            {/* Upper left sub-lobe */}
            <mesh position={[-0.88, 5.0, 0.3]} castShadow>
                <sphereGeometry args={[0.88, 10, 8]} />
                <meshStandardMaterial color={color} roughness={0.78} />
            </mesh>
            {/* Upper right sub-lobe */}
            <mesh position={[0.85, 5.1, -0.25]} castShadow>
                <sphereGeometry args={[0.82, 10, 8]} />
                <meshStandardMaterial color={color} roughness={0.78} />
            </mesh>
            {/* Bottom fill — hides trunk/canopy gap */}
            <mesh position={[0, 2.9, 0]} castShadow>
                <sphereGeometry args={[0.95, 10, 8]} />
                <meshStandardMaterial color={color} roughness={0.85} />
            </mesh>
        </group>
    );
}

// ─── Realistic EV Crossover Car ───────────────────────────────────────────────
function Car({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
    const body = "#1a7eb5";   // metallic teal-blue
    const mx = 0.72;        // metalness
    const rg = 0.18;        // roughness
    const glass = "#0b1826";   // dark window tint

    return (
        <group ref={groupRef} position={[0, 0.1, 0]}>

            {/* ── LOWER CHASSIS ── */}
            <mesh castShadow position={[0, 0.43, 0]}>
                <boxGeometry args={[2.08, 0.68, 4.5]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>

            {/* ── CABIN UPPER BODY ── */}
            <mesh castShadow position={[0, 1.1, -0.38]}>
                <boxGeometry args={[1.84, 0.6, 2.6]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>

            {/* ── ROOF ── */}
            <mesh castShadow position={[0, 1.42, -0.25]}>
                <boxGeometry args={[1.84, 0.07, 2.45]} />
                <meshStandardMaterial color={glass} roughness={0.1} metalness={0.25} />
            </mesh>

            {/* ── WINDSHIELD (front) ── */}
            <mesh position={[0, 0.94, -1.62]}>
                <boxGeometry args={[1.74, 0.56, 0.07]} />
                <meshStandardMaterial color={glass} transparent opacity={0.72} roughness={0.04} metalness={0.1} />
            </mesh>

            {/* ── REAR GLASS ── */}
            <mesh position={[0, 0.97, 1.02]}>
                <boxGeometry args={[1.74, 0.5, 0.07]} />
                <meshStandardMaterial color={glass} transparent opacity={0.68} roughness={0.04} metalness={0.1} />
            </mesh>

            {/* ── SIDE WINDOWS (left) ── */}
            <mesh position={[-0.925, 1.1, -0.52]}>
                <boxGeometry args={[0.06, 0.44, 1.02]} />
                <meshStandardMaterial color={glass} transparent opacity={0.72} roughness={0.04} />
            </mesh>
            <mesh position={[-0.925, 1.09, 0.58]}>
                <boxGeometry args={[0.06, 0.4, 0.92]} />
                <meshStandardMaterial color={glass} transparent opacity={0.65} roughness={0.04} />
            </mesh>

            {/* ── SIDE WINDOWS (right) ── */}
            <mesh position={[0.925, 1.1, -0.52]}>
                <boxGeometry args={[0.06, 0.44, 1.02]} />
                <meshStandardMaterial color={glass} transparent opacity={0.72} roughness={0.04} />
            </mesh>
            <mesh position={[0.925, 1.09, 0.58]}>
                <boxGeometry args={[0.06, 0.4, 0.92]} />
                <meshStandardMaterial color={glass} transparent opacity={0.65} roughness={0.04} />
            </mesh>

            {/* ── SIDE MIRRORS ── */}
            <mesh castShadow position={[-1.1, 0.97, -1.15]}>
                <boxGeometry args={[0.09, 0.14, 0.32]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>
            <mesh castShadow position={[1.1, 0.97, -1.15]}>
                <boxGeometry args={[0.09, 0.14, 0.32]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>

            {/* ── FRONT BUMPER ── */}
            <mesh castShadow position={[0, 0.34, -2.3]}>
                <boxGeometry args={[2.08, 0.26, 0.14]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>
            {/* Red lower accent */}
            <mesh castShadow position={[0, 0.15, -2.3]}>
                <boxGeometry args={[2.08, 0.18, 0.14]} />
                <meshStandardMaterial color="#c0392b" roughness={0.55} />
            </mesh>

            {/* ── REAR BUMPER ── */}
            <mesh castShadow position={[0, 0.34, 2.3]}>
                <boxGeometry args={[2.08, 0.26, 0.12]} />
                <meshStandardMaterial color={body} metalness={mx} roughness={rg} />
            </mesh>
            {/* Red lower accent */}
            <mesh castShadow position={[0, 0.15, 2.3]}>
                <boxGeometry args={[2.08, 0.18, 0.12]} />
                <meshStandardMaterial color="#c0392b" roughness={0.55} />
            </mesh>

            {/* ── FULL-WIDTH LED TAILLIGHT BAR ── */}
            <mesh position={[0, 0.74, 2.26]}>
                <boxGeometry args={[1.98, 0.1, 0.05]} />
                <meshStandardMaterial
                    color="#ff4422"
                    emissive="#ff2200"
                    emissiveIntensity={3}
                    toneMapped={false}
                />
            </mesh>

            {/* ── HEADLIGHTS ── */}
            <mesh position={[-0.72, 0.6, -2.27]}>
                <boxGeometry args={[0.55, 0.1, 0.05]} />
                <meshStandardMaterial color="#fff" emissive="#e0f0ff" emissiveIntensity={2} toneMapped={false} />
            </mesh>
            <mesh position={[0.72, 0.6, -2.27]}>
                <boxGeometry args={[0.55, 0.1, 0.05]} />
                <meshStandardMaterial color="#fff" emissive="#e0f0ff" emissiveIntensity={2} toneMapped={false} />
            </mesh>

            {/* ── WHEELS × 4 ── */}
            {([[-1.07, -1.38], [1.07, -1.38], [-1.07, 1.38], [1.07, 1.38]] as [number, number][]).map(
                ([wx, wz], idx) => (
                    <group key={idx}>
                        {/* Tyre */}
                        <mesh castShadow position={[wx, 0.4, wz]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.42, 0.42, 0.24, 32]} />
                            <meshStandardMaterial color="#111" roughness={0.96} />
                        </mesh>
                        {/* Rim */}
                        <mesh position={[wx > 0 ? wx + 0.13 : wx - 0.13, 0.4, wz]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.28, 0.28, 0.06, 10]} />
                            <meshStandardMaterial color="#aaaaaa" metalness={0.85} roughness={0.18} />
                        </mesh>
                        {/* Hub cap dot */}
                        <mesh position={[wx > 0 ? wx + 0.14 : wx - 0.14, 0.4, wz]} rotation={[0, 0, Math.PI / 2]}>
                            <cylinderGeometry args={[0.06, 0.06, 0.04, 8]} />
                            <meshStandardMaterial color="#333" metalness={0.5} roughness={0.3} />
                        </mesh>
                    </group>
                )
            )}

        </group>
    );
}

// ─── Main Scene ───────────────────────────────────────────────────────────────
export default function HighwayScene() {
    const scroll = useScroll();
    const carRef = useRef<THREE.Group>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    const ROAD_LENGTH = 1000;

    // Stable, deterministic tree list
    const trees = useMemo(() => {
        return Array.from({ length: 130 }, (_, i) => {
            const side = i % 2 === 0 ? 1 : -1;
            const x = side * (14 + Math.abs(Math.sin(i * 73.1)) * 26);
            const z = -(Math.abs(Math.sin(i * 137.5)) * 8 + (i / 130) * ROAD_LENGTH);
            // Scale range tuned for the larger StylizedTree canopy
            const scale = 0.5 + Math.abs(Math.sin(i * 31.7)) * 1.1;
            const colorIdx = Math.floor(Math.abs(Math.sin(i * 53.2)) * FOLIAGE_COLORS.length);
            const rotY = Math.sin(i * 43.7) * Math.PI;
            return { x, z, scale, colorIdx, rotY };
        });
    }, []);

    useFrame((state, delta) => {
        if (!scroll) return;
        const r1 = scroll.range(0, 1);
        const zPos = -(r1 * ROAD_LENGTH);

        if (carRef.current) {
            carRef.current.position.z = THREE.MathUtils.lerp(carRef.current.position.z, zPos, delta * 5);
            carRef.current.position.y = Math.sin(state.clock.elapsedTime * 10) * 0.02 + 0.1;
        }

        if (cameraRef.current && carRef.current) {
            const targetZ = carRef.current.position.z + 8;
            const targetY = carRef.current.position.y + 2;
            cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, targetZ, delta * 5);
            cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, targetY, delta * 5);
            cameraRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
        }
    });

    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 2, 8]} fov={45} />

            {/* ── LIGHTING ── */}
            <ambientLight intensity={1.1} />
            <directionalLight
                position={[20, 15, 10]}
                intensity={2.8}
                color="#ffebc2"
                castShadow
                shadow-mapSize={[2048, 2048]}
                shadow-bias={-0.0001}
            />
            {/* Sky / ground hemisphere */}
            <hemisphereLight args={["#87CEEB", "#52b788", 0.7]} />
            <Environment preset="dawn" background blur={0.6} />
            <fog attach="fog" args={["#c5e8f5", 35, 100]} />

            {/* ── GRASS GROUND ── */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, -ROAD_LENGTH / 2]} receiveShadow>
                <planeGeometry args={[300, ROAD_LENGTH + 200]} />
                <meshStandardMaterial color="#4caf50" roughness={0.95} />
            </mesh>

            {/* ── ASPHALT ROAD ── */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -ROAD_LENGTH / 2]} receiveShadow>
                <planeGeometry args={[10, ROAD_LENGTH + 200]} />
                <meshStandardMaterial color="#545454" roughness={0.92} metalness={0.04} />
            </mesh>

            {/* Road shoulders */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-6.6, -0.12, -ROAD_LENGTH / 2]}>
                <planeGeometry args={[3, ROAD_LENGTH + 200]} />
                <meshStandardMaterial color="#8a8a8a" roughness={0.95} />
            </mesh>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[6.6, -0.12, -ROAD_LENGTH / 2]}>
                <planeGeometry args={[3, ROAD_LENGTH + 200]} />
                <meshStandardMaterial color="#8a8a8a" roughness={0.95} />
            </mesh>

            {/* Center white line */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.09, -ROAD_LENGTH / 2]}>
                <planeGeometry args={[0.2, ROAD_LENGTH + 200]} />
                <meshStandardMaterial color="#ffffff" />
            </mesh>

            {/* ── TREES ── */}
            {trees.map((tree, i) => (
                <group key={`tree-${i}`} position={[tree.x, 0, tree.z]} rotation={[0, tree.rotY, 0]}>
                    <StylizedTree scale={tree.scale} color={FOLIAGE_COLORS[tree.colorIdx]} />
                </group>
            ))}

            {/* ── CAR ── */}
            <Car groupRef={carRef} />
        </>
    );
}
