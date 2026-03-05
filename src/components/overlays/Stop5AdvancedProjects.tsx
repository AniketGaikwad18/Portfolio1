"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Heart Disease Prediction",
        tech: "Logistic Regression, Random Forest",
        points: [
            "Feature engineering pipeline",
            "Confusion matrix & precision-recall evaluation",
            "Deployment-ready architecture"
        ],
        color: "from-rose-500/20 to-red-500/5",
        accent: "text-rose-400",
        border: "group-hover:border-rose-500/50"
    },
    {
        title: "Smart Ambulance Optimization",
        tech: "Real-time traffic routing, IoT",
        points: [
            "Real-time traffic-aware routing",
            "Optimization algorithm for response time",
            "IoT + GPS integration concept",
            "Emergency alert automation"
        ],
        color: "from-blue-500/20 to-cyan-500/5",
        accent: "text-blue-400",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "IoT Intelligent Monitoring",
        tech: "Edge computing, Cloud analytics",
        points: [
            "IoT sensors & Real-time streaming",
            "Edge preprocessing",
            "Cloud dashboard integration"
        ],
        color: "from-emerald-500/20 to-teal-500/5",
        accent: "text-emerald-400",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "Finance Management ML",
        tech: "Classification, Analytics",
        points: [
            "Expense categorization",
            "Logistic Reg, Decision Tree, Rand. Forest",
            "Pattern detection & visualization"
        ],
        color: "from-amber-500/20 to-orange-500/5",
        accent: "text-amber-400",
        border: "group-hover:border-amber-500/50"
    }
];

export default function Stop5AdvancedProjects() {
    return (
        <div className="w-full max-w-6xl pointer-events-auto">
            <div className="text-center mb-16">
                <div className="text-cyan-600 text-sm font-mono tracking-widest uppercase mb-4 font-bold">Milestone .05</div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-2">
                    Advanced ML & AI <span className="font-bold text-gray-900">Projects Zone</span>
                </h2>
                <p className="text-gray-600">Innovation Corridor Modules</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        className={`group relative bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/40 shadow-lg transition-all duration-500 cursor-pointer overflow-hidden ${proj.border}`}
                    >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:translate-x-2 transition-transform duration-300">
                                {proj.title}
                            </h3>
                            <p className={`${proj.accent} font-mono text-sm mb-6 font-bold`}>{proj.tech}</p>

                            <ul className="space-y-3 text-gray-700 text-sm font-medium">
                                {proj.points.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className={`${proj.accent} opacity-70 mt-1`}>+</span>
                                        <span>{pt}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
