"use client";

import { motion } from "framer-motion";

export default function Stop1Summary() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: false, margin: "-20%" }}
            className="max-w-2xl bg-white/60 backdrop-blur-md p-10 rounded-2xl border border-white/40 shadow-xl shadow-black/5 pointer-events-auto"
        >
            <div className="text-gray-500 font-mono tracking-widest uppercase mb-4 text-sm font-bold">
                Portfolio // Aniket Gaikwad
            </div>
            <h1 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">
                The Road to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Intelligent Systems</span>.
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Machine Learning Engineer specializing in <span className="text-gray-900 font-bold">Computer Vision</span> & <span className="text-gray-900 font-bold">Real-Time AI Systems</span>.
            </p>

            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Production-grade ML</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Cloud Deployment</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-gray-600 uppercase tracking-widest text-sm font-semibold">Performance Optimization</span>
                </div>
            </div>
        </motion.div>
    );
}
