import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Clock,
    Cpu,
    Layers,
    Lock,
    MessageSquare,
    ShieldCheck,
    Smartphone,
    Sparkles,
    UserCheck,
    Zap,
} from "lucide-react";

const BENEFITS = [
    {
        icon: Cpu,
        title: "AI-Powered Suggestions",
        description: "Smart automation that auto-suggests, prioritizes tasks, and drafts responses instantly to keep your pipeline moving.",
        gradient: "from-indigo-500 to-violet-500",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Scalable",
        description: "Enterprise-grade data security with encrypted databases, role-based permissions, and robust scaling for growing teams.",
        gradient: "from-violet-500 to-cyan-500",
    },
    {
        icon: UserCheck,
        title: "Task, Project & Role Assignment",
        description: "Seamlessly assign projects, delegate tasks, and define custom user roles with clear accountability across departments.",
        gradient: "from-cyan-500 to-blue-500",
    },
    {
        icon: Clock,
        title: "Timesheet Clock-In & Clock-Out",
        description: "Built-in time tracking allowing team members to clock in and clock out effortlessly for precise payroll and labor reporting.",
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        icon: Layers,
        title: "All-in-One Unified Workspace",
        description: "Say goodbye to tab overload. Manage invoices, estimates, customer directories, and projects in one central platform.",
        gradient: "from-blue-500 to-indigo-500",
    },
    {
        icon: MessageSquare,
        title: "Real-Time Chat Collaboration",
        description: "Keep your crew aligned with secure channels (`#weekly-meetings`, `social-media`) and direct messaging built right in.",
        gradient: "from-violet-500 to-pink-500",
    },
];

export default function WhyTeamsLoveUs() {
    return (
        <section className="relative bg-white dark:bg-slate-950 py-24 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[150px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
                        <Sparkles className="h-3.5 w-3.5" /> Why Teams Love Working With Us
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Engineered for speed,{" "}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                            trusted by modern teams.
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
                        Discover why fast-growing agencies and businesses choose Manova CRM to scale their daily operations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/85 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-500/50 transition-all group"
                            >
                                <div>
                                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Fully integrated
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}