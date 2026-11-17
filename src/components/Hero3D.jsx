import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    Bell,
    Briefcase,
    CheckCircle2,
    CheckSquare,
    Clock,
    Hash,
    Lock,
    MessageSquare,
    Monitor,
    PhoneCall,
    Rocket,
    Search,
    Send,
    Smartphone,
    Sparkles,
    Users,
    Zap,
    Bookmark,
    Smile,
} from "lucide-react";

const SLIDES = [
    {
        id: "pc",
        label: "Desktop Workspace",
        icon: Monitor,
        badge: "PC & Web Platform",
        headlineStart: "Command your entire sales pipeline from ",
        headlineHighlight: "one desktop hub.",
        description:
            "Track leads across Kanban boards, automate recurring client billing, and get real-time revenue analytics without switching between ten different tabs.",
        ctaPrimary: "Try Desktop Free",
        ctaSecondary: "See Team Workflows",
        ctaSecondaryLink: "/workflow",
        floatingIcons: [
            { Icon: BarChart3, color: "text-indigo-600 dark:text-indigo-400", pos: "-top-8 right-8", delay: 0 },
            { Icon: Rocket, color: "text-violet-600 dark:text-violet-400", pos: "top-1/3 -right-6", delay: 0.4 },
            { Icon: Users, color: "text-cyan-600 dark:text-cyan-400", pos: "-bottom-6 right-16", delay: 0.8 },
        ],
    },
    {
        id: "mobile",
        label: "Mobile App",
        icon: Smartphone,
        badge: "iOS & Android Sync",
        headlineStart: "Close deals & reply to leads ",
        headlineHighlight: "anywhere you go.",
        description:
            "Your entire workspace in your pocket. Collaborate in team channels, get instant huddle alerts, and reply to direct messages on the move.",
        ctaPrimary: "Get Mobile Access",
        ctaSecondary: "See Team Workflows",
        ctaSecondaryLink: "/workflow",
        floatingIcons: [
            { Icon: Bell, color: "text-amber-500 dark:text-amber-400", pos: "-top-8 right-10", delay: 0.1 },
            { Icon: PhoneCall, color: "text-emerald-600 dark:text-emerald-400", pos: "top-1/3 -right-6", delay: 0.5 },
            { Icon: Zap, color: "text-indigo-600 dark:text-indigo-400", pos: "-bottom-6 right-14", delay: 0.9 },
        ],
    },
];

export default function Hero3D() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const currentSlide = SLIDES[activeIndex];

    return (
        <section
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative min-h-[90vh] overflow-hidden bg-white dark:bg-slate-950 pt-16 pb-24 text-slate-900 dark:text-white flex items-center transition-colors duration-300"
        >
            {/* Ambient Glows */}
            <div className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/20 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-[380px] w-[380px] rounded-full bg-violet-500/10 dark:bg-violet-600/15 blur-[130px]" />

            {/* Subtle Tech Grid Overlay */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6 w-full">
                {/* Top Platform Switcher Controls */}
                <div className="mb-12 flex flex-wrap items-center justify-between gap-4">
                    <div className="inline-flex items-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900/90 p-1.5 backdrop-blur">
                        {SLIDES.map((slide, idx) => {
                            const Icon = slide.icon;
                            const isActive = idx === activeIndex;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                        isActive
                                            ? "bg-indigo-600 text-white"
                                            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                    }`}
                                >
                                    <Icon className="h-4 w-4" />
                                    {slide.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Slide Progress Indicators */}
                    <div className="flex items-center gap-2">
                        {SLIDES.map((s, idx) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveIndex(idx)}
                                aria-label={`Switch to ${s.label}`}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === activeIndex
                                        ? "w-8 bg-indigo-600 dark:bg-indigo-500"
                                        : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Split Hero Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-10">
                    {/* LEFT COLUMN: 3D Raising CRM Device Stage */}
                    <div
                        className="lg:col-span-7 flex items-center justify-center min-h-[460px] sm:min-h-[520px]"
                        style={{ perspective: "1300px" }}
                    >
                        <AnimatePresence mode="wait">
                            {currentSlide.id === "pc" ? (
                                /* PC DASHBOARD 3D RISING STAGE */
                                <motion.div
                                    key="pc-mockup"
                                    initial={{ opacity: 0, rotateX: 28, y: 70, scale: 0.9 }}
                                    animate={{ opacity: 1, rotateX: 4, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotateX: -20, y: -50, scale: 0.92 }}
                                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ transformStyle: "preserve-3d" }}
                                    className="relative w-full"
                                >
                                    {/* Floating Stat Pill Rising Above */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 40, x: -20 }}
                                        animate={{ opacity: 1, y: -14, x: 0 }}
                                        transition={{ delay: 0.25, duration: 0.6 }}
                                        className="hidden sm:flex absolute -top-6 -left-3 z-30 items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900/95 px-4 py-3 backdrop-blur"
                                    >
                                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                                            <Users className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] text-slate-500 dark:text-slate-400">Invoices Awaiting</p>
                                            <p className="text-sm font-extrabold text-slate-900 dark:text-white">
                                                28 / 2027 <span className="text-xs text-emerald-600 dark:text-emerald-400">98.5% Paid</span>
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Main PC CRM Frame */}
                                    <div className="rounded-2xl border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-slate-900/90 p-3 backdrop-blur-xl">
                                        <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-2.5 mb-3 px-1">
                                            <div className="flex items-center gap-1.5">
                                                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                                <span className="ml-2 rounded bg-slate-200 dark:bg-slate-800 px-2.5 py-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                                                    office.apavone.com/admin
                                                </span>
                                            </div>
                                            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 dark:bg-indigo-500/15 px-2.5 py-0.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30">
                                                <Sparkles className="h-3 w-3" /> Manova CRM Live
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-12 gap-3 rounded-xl bg-white dark:bg-slate-950/80 p-3 border border-slate-200 dark:border-white/5">
                                            <div className="col-span-3 space-y-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5 text-[11px]">
                                                <div className="flex items-center gap-2 rounded bg-indigo-100 dark:bg-indigo-600/20 px-2 py-1.5 font-bold text-indigo-700 dark:text-indigo-300">
                                                    Dashboard
                                                </div>
                                                {["Customers", "Sales", "Expenses", "Accounting", "Projects", "Tasks", "Subscriptions"].map((m) => (
                                                    <div key={m} className="px-2 py-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition">
                                                        {m}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="col-span-9 space-y-3">
                                                <div className="grid grid-cols-3 gap-2">
                                                    <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5">
                                                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Invoices Awaiting</p>
                                                        <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">28 / 2027</p>
                                                    </div>
                                                    <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5">
                                                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Projects Active</p>
                                                        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">17 / 2056</p>
                                                    </div>
                                                    <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5">
                                                        <p className="text-[10px] text-slate-500 dark:text-slate-400">Tasks Pending</p>
                                                        <p className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-0.5">1 / 156</p>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-2.5">
                                                    <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5">
                                                        <p className="text-[11px] font-bold text-slate-900 dark:text-white mb-2">Invoice overview</p>
                                                        <div className="space-y-1.5 text-[10px] text-slate-600 dark:text-slate-400">
                                                            <div className="flex justify-between"><span>Draft</span><span>2</span></div>
                                                            <div className="flex justify-between"><span>Not Sent</span><span>19</span></div>
                                                            <div className="flex justify-between"><span>Unpaid</span><span className="text-rose-600 dark:text-rose-400 font-bold">3</span></div>
                                                            <div className="flex justify-between"><span>Paid</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">1999 (98.5%)</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-white/5">
                                                        <p className="text-[11px] font-bold text-slate-900 dark:text-white mb-2">Estimate overview</p>
                                                        <div className="space-y-1.5 text-[10px] text-slate-600 dark:text-slate-400">
                                                            <div className="flex justify-between"><span>Draft</span><span>316</span></div>
                                                            <div className="flex justify-between"><span>Not Sent</span><span>331</span></div>
                                                            <div className="flex justify-between"><span>Sent</span><span>2</span></div>
                                                            <div className="flex justify-between"><span>Accepted</span><span className="text-emerald-600 dark:text-emerald-400 font-bold">439 (53.8%)</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                /* MOBILE APP 3D RISING STAGE */
                                <motion.div
                                    key="mobile-mockup"
                                    initial={{ opacity: 0, rotateX: 30, rotateY: -12, y: 80, scale: 0.88 }}
                                    animate={{ opacity: 1, rotateX: 4, rotateY: 6, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotateX: -20, y: -50, scale: 0.9 }}
                                    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ transformStyle: "preserve-3d" }}
                                    className="relative flex items-center justify-center w-full"
                                >
                                    {/* Floating Left Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -30, y: 20 }}
                                        animate={{ opacity: 1, x: 0, y: -25 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="hidden sm:flex absolute left-2 md:left-6 top-14 z-30 w-56 items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900/95 p-3 backdrop-blur"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
                                            <Bell className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-900 dark:text-white">#weekly-meetings</p>
                                            <p className="text-[10px] text-indigo-600 dark:text-indigo-300">6 new CRM updates</p>
                                        </div>
                                    </motion.div>

                                    {/* Floating Right Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 30, y: 30 }}
                                        animate={{ opacity: 1, x: 0, y: 35 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="hidden sm:flex absolute right-2 md:right-6 bottom-16 z-30 w-52 items-center gap-2.5 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-900/95 p-3 backdrop-blur"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                        <div>
                                            <p className="text-[11px] font-bold text-slate-900 dark:text-white">Tasks & Approvals</p>
                                            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">Synced with PC live</p>
                                        </div>
                                    </motion.div>

                                    {/* Sleek Mobile Phone Bezel */}
                                    <div className="w-[295px] rounded-[2.6rem] border-[6px] border-slate-300 dark:border-slate-800 bg-slate-900 dark:bg-[#070d1f] p-3">
                                        <div className="mx-auto mb-2.5 h-4 w-24 rounded-full bg-slate-950 border border-slate-700 dark:border-white/10" />

                                        <div className="rounded-[1.9rem] bg-slate-50 dark:bg-[#0a1126] p-3 text-slate-900 dark:text-white border border-slate-200 dark:border-white/5 space-y-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-extrabold text-slate-950">
                                                        TA
                                                        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-300 ring-2 ring-slate-50 dark:ring-[#0a1126]" />
                                                    </div>
                                                    <span className="text-sm font-bold tracking-tight">Chat</span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400">
                                                    <Search className="h-3.5 w-3.5" />
                                                    <CheckSquare className="h-3.5 w-3.5" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-4 gap-1 text-[9px] font-medium text-slate-600 dark:text-slate-300">
                                                <div className="flex items-center justify-center gap-1 rounded-full bg-slate-200 dark:bg-white/5 py-1 px-1.5 border border-slate-300 dark:border-white/5">
                                                    <MessageSquare className="h-2.5 w-2.5 text-indigo-600 dark:text-indigo-400" /> Threads
                                                </div>
                                                <div className="flex items-center justify-center gap-1 rounded-full bg-slate-200 dark:bg-white/5 py-1 px-1.5 border border-slate-300 dark:border-white/5">
                                                    <Bookmark className="h-2.5 w-2.5 text-indigo-600 dark:text-indigo-400" /> Later
                                                </div>
                                                <div className="flex items-center justify-center gap-1 rounded-full bg-slate-200 dark:bg-white/5 py-1 px-1.5 border border-slate-300 dark:border-white/5">
                                                    <Send className="h-2.5 w-2.5 text-indigo-600 dark:text-indigo-400" /> Sched
                                                </div>
                                                <div className="flex items-center justify-center gap-1 rounded-full bg-slate-200 dark:bg-white/5 py-1 px-1.5 border border-slate-300 dark:border-white/5">
                                                    <PhoneCall className="h-2.5 w-2.5 text-indigo-600 dark:text-indigo-400" /> Calls
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    CHANNELS
                                                </p>
                                                {[
                                                    { name: "social-media", sub: "🎬 Video", locked: true },
                                                    { name: "weekly-meetings", sub: "🧠 No recordings reached...", locked: false, badge: "6" },
                                                    { name: "manovacrm-app-updates", sub: "- Milestones - Tasks...", locked: true },
                                                    { name: "announcements", sub: "🎧 started a huddle", locked: false },
                                                ].map((ch) => (
                                                    <div
                                                        key={ch.name}
                                                        className="flex items-center justify-between rounded-xl px-1.5 py-1 hover:bg-slate-200 dark:hover:bg-white/5 transition"
                                                    >
                                                        <div className="flex items-center gap-2 min-w-0">
                                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400">
                                                                {ch.locked ? <Lock className="h-3 w-3" /> : <Hash className="h-3 w-3" />}
                                                            </div>
                                                            <div className="truncate">
                                                                <p className={`text-[11px] truncate ${ch.badge ? "font-bold text-slate-900 dark:text-white" : "font-medium text-slate-700 dark:text-slate-200"}`}>
                                                                    {ch.name}
                                                                </p>
                                                                <p className="text-[9px] text-slate-500 dark:text-slate-400 truncate">{ch.sub}</p>
                                                            </div>
                                                        </div>
                                                        {ch.badge && (
                                                            <span className="ml-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-bold text-white">
                                                                {ch.badge}
                                                            </span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="space-y-1.5 pt-1 border-t border-slate-200 dark:border-white/5">
                                                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                                    DIRECT MESSAGES
                                                </p>
                                                <div className="flex items-center gap-2 rounded-xl px-1.5 py-1 bg-slate-200/60 dark:bg-white/5">
                                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-200 dark:bg-indigo-500/30 text-[10px] font-bold text-indigo-800 dark:text-indigo-200">
                                                        AM
                                                    </div>
                                                    <div className="truncate">
                                                        <p className="text-[11px] font-semibold text-slate-900 dark:text-white">Adwoa Mensah 🌴</p>
                                                        <p className="text-[9px] text-slate-500 dark:text-slate-400 truncate">You: Which would you prefer...</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-around border-t border-slate-200 dark:border-white/10 pt-2 text-slate-500 dark:text-slate-400">
                                                <div className="relative flex items-center gap-1 rounded-full bg-indigo-100 dark:bg-indigo-600/30 px-2.5 py-1 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300">
                                                    <MessageSquare className="h-3 w-3" /> Chat
                                                    <span className="absolute -top-1.5 -right-1 rounded-full bg-rose-500 px-1 text-[8px] font-bold text-white">6</span>
                                                </div>
                                                <CheckSquare className="h-3.5 w-3.5" />
                                                <Briefcase className="h-3.5 w-3.5" />
                                                <Clock className="h-3.5 w-3.5" />
                                                <div className="relative">
                                                    <Smile className="h-3.5 w-3.5" />
                                                    <span className="absolute -top-1.5 -right-2 rounded-full bg-rose-500 px-1 text-[8px] font-bold text-white">24</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* RIGHT COLUMN: Sliding Text & Floating Animated Icons */}
                    <div className="relative lg:col-span-5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide.id}
                                initial={{ opacity: 0, x: 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -60 }}
                                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                {currentSlide.floatingIcons.map(({ Icon, color, pos, delay }, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ y: [0, -10, 0], rotate: [-6, 6, -6] }}
                                        transition={{
                                            duration: 4 + i,
                                            delay,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                        className={`hidden sm:flex absolute ${pos} z-20 h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/90 backdrop-blur`}
                                    >
                                        <Icon className={`h-5 w-5 ${color}`} />
                                    </motion.div>
                                ))}

                                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-5">
                                    <Sparkles className="h-3.5 w-3.5" /> {currentSlide.badge}
                                </span>

                                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
                                    {currentSlide.headlineStart}
                                    <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                        {currentSlide.headlineHighlight}
                                    </span>
                                </h1>

                                <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {currentSlide.description}
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <Link
                                        to="/signup"
                                        className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-all cursor-pointer"
                                    >
                                        {currentSlide.ctaPrimary} <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to={currentSlide.ctaSecondaryLink}
                                        className="flex items-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10 transition-all cursor-pointer"
                                    >
                                        {currentSlide.ctaSecondary}
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}