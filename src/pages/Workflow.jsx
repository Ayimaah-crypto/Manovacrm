import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Play,
    LayoutDashboard,
    MessageSquare,
    Receipt,
    Smartphone,
    Sparkles,
    CheckCircle2,
    Maximize2,
    ArrowLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WORKFLOW_MODULES = [
    {
        id: "dashboard",
        label: "Desktop Dashboard",
        icon: LayoutDashboard,
        url: "app.manovacrm.com/dashboard",
        title: "Complete Executive Overview",
        description:
            "Monitor active projects, track unpaid vs. paid invoices, and oversee team workload from one high-clarity command center.",
        videoSrc: "/videos/workflow-dashboard.mp4",
        posterSrc: "/src/assets/images/dashboard-poster.png",
        duration: "1:15",
        isMobile: false,
        highlights: [
            "Real-time revenue & invoice status counters",
            "Drag-and-drop Kanban sales & project pipelines",
        ],
    },
    {
        id: "chat",
        label: "TA Chat & Huddles",
        icon: MessageSquare,
        url: "app.manovacrm.com/ta-chat",
        title: "Built-in Team Messaging",
        description:
            "Keep project discussions organized in dedicated channels without jumping to external chat apps.",
        videoSrc: "/videos/workflow-chat.mp4",
        posterSrc: "/src/assets/images/chat-poster.png",
        duration: "0:55",
        isMobile: false,
        highlights: [
            "Instant file sharing & task tagging inside threads",
            "Direct messages & department channels",
        ],
    },
    {
        id: "billing",
        label: "Invoices & Proposals",
        icon: Receipt,
        url: "app.manovacrm.com/billing",
        title: "Automated Billing & Estimates",
        description:
            "Generate branded proposals, convert accepted quotes into invoices in one click, and track payments effortlessly.",
        videoSrc: "/videos/workflow-billing.mp4",
        posterSrc: "/src/assets/images/billing-poster.png",
        duration: "1:05",
        isMobile: false,
        highlights: [
            "One-click estimate-to-invoice conversion",
            "Automated recurring client subscriptions",
        ],
    },
    {
        id: "mobile",
        label: "Mobile Companion",
        icon: Smartphone,
        url: "m.manovacrm.com",
        title: "Full CRM Power on the Go",
        description:
            "Clock in on site, update client notes after meetings, and reply to team alerts straight from your phone.",
        videoSrc: "/videos/workflow-mobile.mp4",
        posterSrc: "/src/assets/images/mobile-poster.png",
        duration: "0:48",
        isMobile: true,
        highlights: [
            "Instant push notifications for approvals & leads",
            "Mobile timesheet clock-in & field updates",
        ],
    },
];

export default function WorkflowPage() {
    const [activeTab, setActiveTab] = useState(WORKFLOW_MODULES[0].id);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const currentModule =
        WORKFLOW_MODULES.find((mod) => mod.id === activeTab) || WORKFLOW_MODULES[0];

    const handleTabChange = (id) => {
        if (id === activeTab) return;
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsPlaying(false);
        setActiveTab(id);
    };

    const handlePlayClick = () => {
        setIsPlaying(true);
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play().catch(() => { });
            }
        }, 50);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
                videoRef.current.webkitRequestFullscreen();
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 overflow-x-hidden">
            <Navbar />

            <main className="pt-32 pb-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

                    {/* Back to Home Link */}
                    <div className="mb-8">
                        <Link
                            to="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Page Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-4">
                            <Sparkles className="h-3.5 w-3.5" /> Full Video Walkthrough
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            See Manova CRM{" "}
                            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                                in Action.
                            </span>
                        </h1>
                        <p className="mt-4 text-slate-400 text-base sm:text-lg">
                            Watch detailed feature breakdowns across desktop workspaces, mobile companions, billing, and team collaboration channels.
                        </p>
                    </div>

                    {/* Interactive Module Selector Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
                        {WORKFLOW_MODULES.map((mod) => {
                            const Icon = mod.icon;
                            const active = mod.id === activeTab;
                            return (
                                <button
                                    key={mod.id}
                                    onClick={() => handleTabChange(mod.id)}
                                    className={`flex items-center gap-2 rounded-2xl px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${active
                                            ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 border border-indigo-400/40"
                                            : "border border-white/10 bg-slate-900/80 text-slate-300 hover:border-white/25 hover:text-white"
                                        }`}
                                >
                                    <Icon className="h-4 w-4 shrink-0" />
                                    <span>{mod.label}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Expansive Widescreen Laptop Browser Window Frame */}
                    <div className="mx-auto max-w-6xl">
                        <div className="rounded-3xl border border-white/15 bg-slate-900/95 shadow-[0_35px_100px_-15px_rgba(79,70,229,0.45)] backdrop-blur-2xl overflow-hidden">
                            {/* Browser Top Chrome Bar */}
                            <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 sm:px-6 py-3.5">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                                </div>

                                <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-1.5 text-xs text-slate-400 font-mono">
                                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                    <span>https://{currentModule.url}</span>
                                </div>

                                <button
                                    onClick={handleFullscreen}
                                    title="Watch in Full Screen"
                                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
                                >
                                    <Maximize2 className="h-3.5 w-3.5" />
                                    <span className="hidden sm:inline">Full Screen</span>
                                </button>
                            </div>

                            {/* Large Video Stage */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentModule.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden"
                                >
                                    <video
                                        ref={videoRef}
                                        src={currentModule.videoSrc}
                                        poster={currentModule.posterSrc}
                                        controls={isPlaying}
                                        playsInline
                                        preload="metadata"
                                        onEnded={() => setIsPlaying(false)}
                                        className={`h-full ${currentModule.isMobile
                                                ? "w-auto max-w-full rounded-2xl border border-white/10 shadow-2xl my-4"
                                                : "w-full object-contain bg-slate-950"
                                            }`}
                                    />

                                    {!isPlaying && (
                                        <div
                                            onClick={handlePlayClick}
                                            className="group absolute inset-0 z-25 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-[2px] cursor-pointer transition-all hover:bg-slate-950/45 p-6 text-center"
                                        >
                                            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_70%)]" />

                                            <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_0_50px_rgba(79,70,229,0.75)] border border-indigo-400/50 group-hover:scale-110 group-hover:bg-indigo-500 transition-all duration-300">
                                                <Play className="h-9 w-9 sm:h-10 sm:w-10 fill-white ml-1" />
                                            </div>

                                            <div className="mt-5 max-w-md">
                                                <span className="inline-block rounded-full border border-white/15 bg-slate-900/90 px-3 py-1 text-xs font-semibold text-indigo-300 mb-2">
                                                    Tap to Play Walkthrough • {currentModule.duration}
                                                </span>
                                                <h3 className="text-xl sm:text-2xl font-bold text-white">
                                                    {currentModule.title}
                                                </h3>
                                                <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
                                                    Click anywhere on the screen to start video playback
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom Info Bar */}
                            <div className="border-t border-white/10 bg-slate-900/90 px-6 py-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                <div>
                                    <h4 className="text-base sm:text-lg font-bold text-white">
                                        {currentModule.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                                        {currentModule.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 shrink-0">
                                    {currentModule.highlights.map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-300"
                                        >
                                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}