import React from "react";
import { motion } from "framer-motion";
import {
    BarChart3,
    Calendar,
    CheckCircle2,
    Clock,
    CreditCard,
    DollarSign,
    Hash,
    Lock,
    MessageSquare,
    Sparkles,
    TrendingUp,
    Users,
} from "lucide-react";

export default function FeaturesBento() {
    return (
        <section id="features" className="relative bg-white dark:bg-slate-950 py-24 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-violet-500/10 dark:bg-violet-600/10 blur-[140px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
                        <Sparkles className="h-3.5 w-3.5" /> Built for Power & Speed
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Everything your business needs,{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            all in one place.
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                        Replace fragmented software with a unified workspace designed for tracking invoices, managing customers, and coordinating teams.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* BENTO CARD 1: Financial & Invoice Overview with Animated Track Progress (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 dark:opacity-10 pointer-events-none">
                            <DollarSign className="h-36 w-36 text-indigo-600 dark:text-indigo-400" />
                        </div>

                        <div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 mb-6">
                                <BarChart3 className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold">Financial & Invoice Overview</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-lg">
                                Real-time breakdown of your estimates, proposals, and paid invoices with live status tracking and automated collection reminders.
                            </p>
                        </div>

                        {/* Animated Track Progress Bars */}
                        <div className="mt-8 space-y-4 rounded-2xl bg-white dark:bg-slate-950/70 p-4 border border-slate-200 dark:border-white/5">
                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-slate-700 dark:text-slate-300">Invoice Paid Rate</span>
                                    <span className="text-emerald-600 dark:text-emerald-400">98.52% (1,999 Paid)</span>
                                </div>
                                <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98.5%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-slate-700 dark:text-slate-300">Estimates Accepted</span>
                                    <span className="text-indigo-600 dark:text-indigo-400">53.87% (439 Accepted)</span>
                                </div>
                                <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "53.8%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-semibold mb-1.5">
                                    <span className="text-slate-700 dark:text-slate-300">Proposals Sent</span>
                                    <span className="text-cyan-600 dark:text-cyan-400">100% On Track</span>
                                </div>
                                <div className="h-2.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* BENTO CARD 2: Customer Directory & CRM (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 border border-violet-200 dark:border-violet-500/30 mb-6">
                                <Users className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold">Smart Customer Directory</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Maintain complete profiles for every client, track active contacts, and monitor engagement history instantly.
                            </p>
                        </div>

                        {/* Customer Stats Widget */}
                        <div className="mt-8 grid grid-cols-2 gap-3">
                            <div className="rounded-2xl bg-white dark:bg-slate-950/70 p-4 border border-slate-200 dark:border-white/5">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Total Customers</p>
                                <p className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">409</p>
                                <span className="inline-block mt-2 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">
                                    300 Active
                                </span>
                            </div>
                            <div className="rounded-2xl bg-white dark:bg-slate-950/70 p-4 border border-slate-200 dark:border-white/5">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Inactive Contacts</p>
                                <p className="text-2xl font-extrabold text-slate-700 dark:text-slate-300 mt-1">109</p>
                                <span className="inline-block mt-2 text-[10px] font-semibold text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                                    Archived
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* BENTO CARD 3: TA Chat & Team Collaboration (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-5 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 dark:bg-cyan-600/20 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/30 mb-6">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold">Chat Workspace</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                                Keep your team aligned with secure channels (`#weekly-meetings`, `social-media`) and direct messaging built right into your CRM.
                            </p>
                        </div>

                        {/* Chat Channels Preview */}
                        <div className="mt-8 space-y-2 rounded-2xl bg-white dark:bg-slate-950/70 p-3 border border-slate-200 dark:border-white/5">
                            <div className="flex items-center justify-between rounded-xl p-2.5 bg-indigo-50 dark:bg-indigo-600/20 border border-indigo-200 dark:border-indigo-500/30 text-xs">
                                <span className="flex items-center gap-2 font-semibold text-indigo-700 dark:text-indigo-300">
                                    <Hash className="h-3.5 w-3.5" /> weekly-meetings
                                </span>
                                <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-bold text-white">6 new</span>
                            </div>
                            <div className="flex items-center justify-between rounded-xl p-2.5 bg-slate-100 dark:bg-white/5 text-xs">
                                <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-300">
                                    <Lock className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" /> social-media
                                </span>
                                <span className="text-[10px] text-slate-500">🎬 Video</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* BENTO CARD 4: Project Calendar & Task Milestones (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-7 rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between relative overflow-hidden"
                    >
                        <div>
                            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-600/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 mb-6">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold">Interactive Project Calendar</h3>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 max-w-lg">
                                Plan deadlines, schedule project milestones, and coordinate tasks across your entire team with monthly and weekly calendar views.
                            </p>
                        </div>

                        {/* Mini Calendar Mock */}
                        <div className="mt-8 rounded-2xl bg-white dark:bg-slate-950/70 p-4 border border-slate-200 dark:border-white/5">
                            <div className="flex items-center justify-between mb-4 text-xs font-bold text-slate-700 dark:text-slate-300">
                                <span>November 2026</span>
                                <span className="text-indigo-600 dark:text-indigo-400">Active Schedule</span>
                            </div>
                            <div className="grid grid-cols-7 gap-1.5 text-center text-[11px]">
                                {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                                    <span key={i} className="text-slate-400 dark:text-slate-500 font-bold">{d}</span>
                                ))}
                                {Array.from({ length: 14 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-lg p-1.5 text-[10px] font-medium ${
                                            i === 12
                                                ? "bg-indigo-600 text-white font-bold"
                                                : i === 3 || i === 7 || i === 10
                                                ? "bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30"
                                                : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400"
                                        }`}
                                    >
                                        {i + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}