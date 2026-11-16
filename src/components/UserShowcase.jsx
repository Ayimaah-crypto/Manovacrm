import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Video, Users, CheckCircle2 } from "lucide-react";
import busyVideo from "../assets/Videos/good.mp4";
import romeImg from "../assets/images/rome.jpg"; // Change extension to .png if your image is a PNG

export default function UserShowcase() {
    return (
        <section className="relative bg-slate-950 py-24 text-white overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-indigo-600/15 blur-[160px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-4">
                        <Sparkles className="h-3.5 w-3.5" /> Real Teams, Real Workflows
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        See Manova CRM{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            in action across teams.
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        From remote design huddles to field sales closures, watch how modern professionals rely on our workspace every single day.
                    </p>
                </div>

                {/* Animated Stacked Media Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* LEFT COLUMN: Rome Photo Background Card + Looping Busy Video Foreground Card */}
                    <div className="lg:col-span-7 relative min-h-[460px] sm:min-h-[520px] flex items-center justify-center">
                        
                        {/* Background Decorative Card Layer with Rome Image */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -5, y: 15 }}
                            whileInView={{ opacity: 0.9, rotate: -3, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="absolute left-4 sm:left-8 -top-4 sm:-top-6 w-68 sm:w-76 rounded-3xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-xl z-10"
                        >
                            <div className="aspect-[4/3] rounded-2xl bg-slate-900 overflow-hidden relative flex items-center justify-center border border-white/5">
                                <img 
                                    src={romeImg} 
                                    alt="Rome team huddle" 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded-xl border border-white/10 text-[10px] text-slate-300 font-semibold">
                                    #weekly-meetings huddle
                                </div>
                            </div>
                        </motion.div>

                        {/* Foreground Primary Interactive Looping Video Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-25 w-full max-w-[500px] rounded-3xl border border-white/20 bg-slate-900/95 p-4 shadow-[0_30px_80px_-15px_rgba(79,70,229,0.45)] backdrop-blur-2xl mt-16 sm:mt-20 ml-6 sm:ml-10"
                        >
                            <div className="relative aspect-[16/10] rounded-2xl bg-slate-950 overflow-hidden border border-white/10 flex items-center justify-center">
                                {/* Auto-Looping Local Busy Video */}
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={busyVideo} type="video/mp4" />
                                </video>
                            </div>

                            <div className="mt-4 flex items-center justify-between px-1">
                                <div>
                                    <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                        Volta Freight Operations <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                                    </p>
                                    <p className="text-xs text-slate-400">Live field tracking & proposal sync</p>
                                </div>
                                <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-[11px] font-semibold text-indigo-300 border border-indigo-500/30">
                                    Live Loop
                                </span>
                            </div>
                        </motion.div>

                        {/* Floating Top-Right Badge Card */}
                        <motion.div
                            initial={{ opacity: 0, rotate: 6, x: 20 }}
                            whileInView={{ opacity: 1, rotate: 4, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="absolute right-2 sm:right-4 bottom-4 w-56 sm:w-64 rounded-2xl border border-white/10 bg-slate-900/90 p-3.5 shadow-2xl backdrop-blur-xl z-30"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                    <Video className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold text-white">Instant Team Huddles</p>
                                    <p className="text-[10px] text-slate-400">Connected across Accra & UK</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Feature Highlights / Text Balance */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                            <h3 className="text-xl sm:text-2xl font-bold text-white">
                                Built to keep your entire team in sync
                            </h3>
                            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
                                Whether your team members are clocking in from the office, updating lead statuses on their mobile phones on the road, or reviewing financial reports on desktop, Manova CRM ensures zero lag.
                            </p>

                            <div className="mt-6 space-y-3 pt-6 border-t border-white/5">
                                {[
                                    "Instant push alerts for project updates & approvals",
                                    "Real-time Chat channels for fast collaboration",
                                    "Seamless switching between desktop dashboard & mobile app",
                                ].map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                                            <CheckCircle2 className="h-3.5 w-3.5" />
                                        </div>
                                        <span>{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}