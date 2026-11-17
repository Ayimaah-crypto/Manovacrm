import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Sparkles } from "lucide-react";
import pcImage from "../assets/images/crm.png";
import mobileImage from "../assets/images/newphone.png";

export default function PlatformShowcase() {
    return (
        <section id="platformshowcase" className="relative bg-white dark:bg-slate-950 py-24 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-600/15 blur-[140px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
                        <Sparkles className="h-3.5 w-3.5" /> Unified Ecosystem
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Designed for Desktop & Mobile,{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            working in perfect harmony.
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                        Experience seamless real-time synchronization whether you are managing projects at your office desk or chatting with your team on the go.
                    </p>
                </div>

                {/* Animated Platform Showcase Container */}
                <div className="relative mt-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">
                    {/* PC Dashboard Mockup (Raising Up in 3D Perspective) */}
                    <motion.div
                        initial={{ opacity: 0, rotateX: 20, y: 60, scale: 0.94 }}
                        whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full lg:w-7/12 rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-slate-900/90 p-3 shadow-xl shadow-slate-200/50 dark:shadow-2xl dark:shadow-indigo-600/20 backdrop-blur"
                        style={{ perspective: "1200px" }}
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2 mb-3 px-2">
                            <div className="flex items-center gap-1.5">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">office.apavone.com/admin</span>
                            </div>
                            <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                                <Monitor className="h-3.5 w-3.5" /> PC Live
                            </span>
                        </div>

                        {/* PC Image Container */}
                        <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 aspect-video flex items-center justify-center border border-slate-200 dark:border-white/10">
                            <img
                                src={pcImage}
                                alt="Manova CRM PC Dashboard"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center text-slate-500 p-6 text-center">
                                <Monitor className="h-12 w-12 mb-2 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                                <p className="text-sm font-semibold text-slate-900 dark:text-white">PC Image Placeholder</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Place your PC image inside `src/assets/images/` and import it</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Mobile App Mockup (Pop Up Beside / Overlapping PC Mockup) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="w-72 sm:w-80 rounded-[2.5rem] border-[6px] border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 shadow-2xl shadow-slate-300 dark:shadow-indigo-600/30 lg:-ml-16 z-20"
                    >
                        <div className="mx-auto mb-2.5 h-4 w-20 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10" />

                        {/* Mobile Image Container */}
                        <div className="overflow-hidden rounded-[1.8rem] bg-slate-100 dark:bg-slate-900 aspect-[9/18] flex items-center justify-center border border-slate-200 dark:border-white/10">
                            <img
                                src={mobileImage}
                                alt="Manova CRM Mobile App"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center text-slate-500 p-4 text-center">
                                <Smartphone className="h-10 w-10 mb-2 text-violet-600 dark:text-violet-400 animate-pulse" />
                                <p className="text-xs font-semibold text-slate-900 dark:text-white">Mobile Screenshot Placeholder</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}