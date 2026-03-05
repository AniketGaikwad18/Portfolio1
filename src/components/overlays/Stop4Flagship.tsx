"use client";

import { motion } from "framer-motion";

export default function Stop4Flagship() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full max-w-4xl pointer-events-auto"
        >
            <div className="flex flex-col items-center justify-center text-center mb-12">
                <div className="text-purple-600 text-sm font-mono tracking-widest uppercase mb-4 font-bold">Milestone .04</div>
                <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 tracking-tighter mb-4">
                    FLAGSHIP PROJECT
                </h2>
                <p className="text-2xl text-gray-700 font-light">
                    CCTV-Based Chain Snatching Detection System
                </p>
            </div>

            {/* Holographic Panel */}
            <div className="relative group">
                {/* Neural Network Glow Effect behind box */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 blur-3xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 overflow-hidden">

                    {/* Subtle Grid overlay */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]" />
                                <span>Mask R-CNN with ResNet-FPN backbone</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,1)]" />
                                <span>Instance segmentation</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-300 shadow-[0_0_8px_rgba(252,165,165,1)]" />
                                <span>Custom COCO-format dataset</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,1)]" />
                                <span>Anchor tuning, IoU optimization</span>
                            </li>
                        </ul>

                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-center justify-between bg-white/60 p-3 rounded-lg border border-white/40 shadow-sm">
                                <span className="font-mono text-sm">mAP Improvement</span>
                                <span className="text-emerald-600 font-bold">62% → 85%</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]" />
                                <span>AWS EC2 deployment</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,1)]" />
                                <span>Real-time alert triggering</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-300 shadow-[0_0_8px_rgba(147,197,253,1)]" />
                                <span>S3 evidence storage</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
