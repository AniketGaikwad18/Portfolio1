"use client";

import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HighwayScene from "./HighwayScene";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import HtmlOverlays from "../overlays/HtmlOverlays";

export default function Experience() {
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: [0, 2, 8], fov: 45 }}>
        <ScrollControls pages={9} damping={0.25}>
          <Suspense fallback={null}>
            <HighwayScene />
            <EffectComposer>
              <Bloom luminanceThreshold={0.8} luminanceSmoothing={0.5} height={300} intensity={0.8} />
            </EffectComposer>
          </Suspense>
          <HtmlOverlays />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
