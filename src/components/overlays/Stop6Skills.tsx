"use client";

import { motion } from "framer-motion";

const skills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn",
    "AWS EC2", "AWS S3", "Docker", "FastAPI", "SQL", "Git"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
};

export default function Stop6Skills() {
    return (
        <div className="w-full max-w-5xl pointer-events-auto">
            <div className="text-center mb-16">
                <div className="text-violet-600 text-sm font-mono tracking-widest uppercase mb-4 font-bold">Milestone .06</div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 mb-4 uppercase tracking-widest">
                    Technical Skills Tunnel
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group relative cursor-pointer"
                    >
                        {/* Holographic glowing ring */}
                        <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300" />
                        <div className="absolute inset-0 bg-fuchsia-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="relative bg-white/60 backdrop-blur-md border border-white/40 group-hover:border-fuchsia-400 px-8 py-4 rounded-xl shadow-lg transition-colors duration-300">
                            <span className="text-xl font-bold text-gray-800 group-hover:text-fuchsia-700 tracking-wide transition-colors">
                                {skill}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
