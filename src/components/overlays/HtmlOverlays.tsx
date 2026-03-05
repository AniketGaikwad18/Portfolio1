"use client";

import { Scroll } from "@react-three/drei";
import Stop1Summary from "./Stop1Summary";
import Stop2Education from "./Stop2Education";
import Stop3Experience from "./Stop3Experience";
import Stop4Flagship from "./Stop4Flagship";
import Stop5AdvancedProjects from "./Stop5AdvancedProjects";
import Stop6Skills from "./Stop6Skills";
import Stop7Certificates from "./Stop7Certificates";
import FinalStopContact from "./FinalStopContact";

export default function HtmlOverlays() {
    return (
        <Scroll html style={{ width: "100%", height: "100%" }}>
            {/* 
        The Scroll component creates an HTML layer linked to the 3D scroll canvas. 
        Each section takes up 100vh height by default, so we space them out.
        We have 8 pages total as defined in Experience.tsx.
      */}
            <div className="w-full text-white pointer-events-none">

                {/* Page 0: Intro / Stop 1 */}
                <section className="h-screen w-full flex items-center justify-start px-[10%]">
                    <Stop1Summary />
                </section>

                {/* Page 1: Stop 2 */}
                <section className="h-screen w-full flex items-center justify-end px-[10%]">
                    <Stop2Education />
                </section>

                {/* Page 2: Stop 3 */}
                <section className="h-screen w-full flex items-center justify-start px-[10%]">
                    <Stop3Experience />
                </section>

                {/* Page 3: Stop 4 */}
                <section className="h-screen w-full flex items-center justify-center px-[5%]">
                    <Stop4Flagship />
                </section>

                {/* Page 4 & 5: Stop 5 - Longer scroll zone */}
                <section className="h-[200vh] w-full flex items-center justify-center px-[10%] mb-32">
                    <Stop5AdvancedProjects />
                </section>

                {/* Page 6: Stop 6 */}
                <section className="h-screen w-full flex items-center justify-center px-[10%]">
                    <Stop6Skills />
                </section>

                {/* Page 7: Stop 7 - Certificates */}
                <section className="h-screen w-full flex items-center justify-start px-[10%]">
                    <Stop7Certificates />
                </section>

                {/* Page 8: Final Stop */}
                <section className="h-screen w-full flex items-center justify-center px-[10%]">
                    <FinalStopContact />
                </section>

            </div>
        </Scroll>
    );
}
