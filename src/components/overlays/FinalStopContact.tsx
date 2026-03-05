"use client";

import { motion } from "framer-motion";

export default function FinalStopContact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full max-w-3xl pointer-events-auto text-center"
        >
            <div className="text-gray-500 text-sm font-mono tracking-widest uppercase mb-4 font-bold">Destination Reached</div>

            <h2 className="text-5xl md:text-7xl font-light text-gray-800 mb-10 leading-tight">
                Let’s Build <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600">Intelligent Systems</span> Together.
            </h2>

            <div className="flex flex-col md:flex-row items-start justify-center gap-12">
                {/* Contact Links Column */}
                <div className="flex flex-col gap-6 w-full md:w-1/3 text-left">
                    <a href="mailto:aniketpgaikwad17@gmail.com" className="group relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-3 bg-white/60 hover:bg-white/80 border border-white/40 px-8 py-4 rounded-full transition-all duration-300 shadow-md">
                            <span className="text-blue-600 group-hover:text-blue-700 font-mono font-bold">@</span>
                            <span className="text-gray-900 font-bold tracking-wide">Email Me</span>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/aniket-gaikwad-52b296323/" target="_blank" rel="noreferrer" className="group relative">
                        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative flex items-center gap-3 bg-white/60 hover:bg-white/80 border border-white/40 px-8 py-4 rounded-full transition-all duration-300 shadow-md">
                            <span className="text-emerald-600 font-bold font-mono">in</span>
                            <span className="text-gray-900 font-bold tracking-wide">LinkedIn</span>
                        </div>
                    </a>

                    <button className="group relative overflow-hidden rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 transition-transform duration-500 group-hover:scale-105" />
                        <div className="relative flex items-center justify-center gap-3 px-8 py-4">
                            <svg className="w-5 h-5 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            <span className="text-white font-bold tracking-widest uppercase text-sm">Resume</span>
                        </div>
                    </button>
                </div>

                {/* Form Column */}
                <div className="w-full md:w-2/3 bg-white/40 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-2xl text-left">
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white/60 border border-white/40 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Email</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white/60 border border-white/40 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 outline-none transition-all" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1">Message</label>
                            <textarea placeholder="Let's build something amazing..." rows={4} className="w-full bg-white/60 border border-white/40 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-xl px-4 py-3 outline-none transition-all resize-none" />
                        </div>
                        <button className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-bold tracking-widest uppercase transition-all shadow-lg active:scale-[0.98]">
                            Send Signal
                        </button>
                    </form>
                </div>
            </div>

            <div className="mt-20 text-gray-600 font-mono text-xs tracking-widest">
                SYSTEM REBOOT // 2026
            </div>
        </motion.div>
    );
}
