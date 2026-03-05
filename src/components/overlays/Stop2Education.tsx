"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Stop2Education() {
    const [inView, setInView] = useState(false);
    const [cgpa, setCgpa] = useState(0);

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = 9.3;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCgpa(end);
                    clearInterval(timer);
                } else {
                    setCgpa(start);
                }
            }, 16);
            return () => clearInterval(timer);
        } else {
            // Delay zeroing the CGPA slightly to avoid synchronous setState warning inside the effect.
            // Alternatively, move this logic out of the effect completely, but setTimeout suffices for animation reset.
            const timeout = setTimeout(() => setCgpa(0), 0);
            return () => clearTimeout(timeout);
        }
    }, [inView]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            onViewportEnter={() => setInView(true)}
            onViewportLeave={() => setInView(false)}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
            className="max-w-xl bg-white/60 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-xl shadow-black/5 pointer-events-auto relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

            <div className="text-blue-600 text-sm font-mono tracking-widest uppercase mb-4">Milestone .02</div>

            <h2 className="text-4xl font-light mb-6 text-gray-800">
                B.E. in <span className="font-semibold text-gray-900">Artificial Intelligence</span> & Machine Learning
            </h2>

            <p className="text-lg text-gray-600 mb-8 border-l-2 border-gray-300 pl-4">
                Savitribai Phule Pune University
            </p>

            <div className="flex items-end gap-3">
                <span className="text-gray-500 font-mono">CGPA</span>
                <span className="text-6xl font-bold text-gray-900">
                    {cgpa.toFixed(1)}
                </span>
            </div>
        </motion.div>
    );
}
