"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Stop3Experience() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-20%" }}
            className="w-full max-w-5xl pointer-events-auto"
        >
            <div className="text-emerald-600 text-sm font-mono tracking-widest uppercase mb-8 ml-4 font-bold">Milestone .03</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* ML Intern Card */}
                <motion.div variants={cardVariants as any} className="group relative bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 hover:border-emerald-400 transition-colors duration-500 shadow-xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0" />

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AI/ML Intern</h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-6" />

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1 font-bold">▹</span>
                            <span>Deep learning model optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1 font-bold">▹</span>
                            <span>Improved validation accuracy by <span className="text-emerald-700 font-bold">12–18%</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1 font-bold">▹</span>
                            <span>Reduced overfitting via regularization & cross-validation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1 font-bold">▹</span>
                            <span>Optimized training time by <span className="text-emerald-700 font-bold">~20%</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-emerald-500 mt-1 font-bold">▹</span>
                            <span>AWS EC2 GPU deployment</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Web Dev Card */}
                <motion.div variants={cardVariants as any} className="group relative bg-white/60 backdrop-blur-md p-8 rounded-2xl border border-white/60 hover:border-blue-400 transition-colors duration-500 shadow-xl overflow-hidden mt-12 md:mt-16">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -ml-10 -mt-10 transition-opacity group-hover:opacity-100 opacity-0" />

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Web Developer</h3>
                    <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/50 to-transparent mb-6" />

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1 font-bold">▹</span>
                            <span>Built responsive web applications</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1 font-bold">▹</span>
                            <span>Achieved <span className="text-blue-700 font-bold">98% client satisfaction</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-blue-500 mt-1 font-bold">▹</span>
                            <span>Performance-focused frontend engineering</span>
                        </li>
                    </ul>
                </motion.div>

            </div>
        </motion.div>
    );
}
