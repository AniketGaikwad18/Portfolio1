"use client";

import { motion } from "framer-motion";

const certificates = [
    {
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "2025",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "AWS Certified Machine Learning",
        issuer: "Amazon Web Services",
        date: "2024",
        color: "from-orange-400 to-yellow-500"
    },
    {
        title: "TensorFlow Developer Certificate",
        issuer: "Google",
        date: "2024",
        color: "from-emerald-500 to-teal-600"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

export default function Stop7Certificates() {
    return (
        <div className="w-full max-w-5xl pointer-events-auto">
            <div className="text-left mb-16">
                <div className="text-emerald-600 text-sm font-mono tracking-widest uppercase mb-4 font-bold">Milestone .07</div>
                <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4 uppercase tracking-widest">
                    Verified Expertise
                </h2>
                <p className="text-gray-600 font-mono text-sm max-w-xl">
                    Validated credentials in Machine Learning, Cloud Architecture, and Software Development.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="group relative"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                        <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                            <div className={`w-12 h-1 bg-gradient-to-r ${cert.color} mb-6 rounded-full`} />
                            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-gray-500 font-medium mb-4">{cert.issuer}</p>
                            <div className="flex justify-between items-center mt-8">
                                <span className="text-gray-400 font-mono text-xs tracking-tighter">{cert.date} // VERIFIED</span>
                                <div className="text-emerald-600 group-hover:translate-x-2 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
