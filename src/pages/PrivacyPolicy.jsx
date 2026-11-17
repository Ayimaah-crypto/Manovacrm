import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Lock,
    Eye,
    Database,
    Mail,
    MapPin,
    Phone,
    ArrowLeft,
    FileText,
} from "lucide-react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const POLICY_SECTIONS = [
    {
        id: "information-we-collect",
        icon: Database,
        title: "1. Information We Collect",
        content: [
            "Account & Workspace Information: When you register for a Manova CRM workspace, we collect your name, business email address, phone number, company name, and billing details.",
            "Client & Operational Data: Information you and your team upload into the CRM, including leads, customer records, project tasks, invoices, proposals, timesheets, and internal TA Chat messages.",
            "Technical & Usage Logs: Basic diagnostic data such as browser type, IP address, device identifiers, and session timestamps to keep your account secure and optimize platform speed.",
        ],
    },
    {
        id: "how-we-use-data",
        icon: Eye,
        title: "2. How We Use Your Information",
        content: [
            "To provision, maintain, and synchronize your Manova CRM workspace across desktop and mobile devices.",
            "To process subscription billing, generate invoices, and send essential transactional alerts or security notifications.",
            "To provide responsive technical onboarding and customer support through our Tema-based engineering team.",
            "We never sell, rent, or trade your business records or customer databases to third-party advertisers.",
        ],
    },
    {
        id: "data-security",
        icon: Lock,
        title: "3. Data Storage & Enterprise Security",
        content: [
            "All data transmitted between your browser or mobile app and Manova CRM servers is encrypted in transit using industry-standard TLS/SSL protocols.",
            "Workspace databases are logically isolated with role-based access permissions so only authorized members of your organization can view sensitive records.",
            "Automated daily cloud backups protect your business continuity against accidental deletion or hardware failure.",
        ],
    },
    {
        id: "your-rights",
        icon: FileText,
        title: "4. Your Rights & Data Protection Compliance",
        content: [
            "In accordance with the Ghana Data Protection Act, 2012 (Act 843) and international privacy standards, you retain full ownership of all business data uploaded to Manova CRM.",
            "You may request an export of your workspace records, update inaccurate account details, or request permanent deletion of your workspace at any time by contacting our support desk.",
        ],
    },
];

export default function PrivacyPolicy() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white font-sans selection:bg-indigo-500 overflow-x-hidden transition-colors duration-300">
            <Navbar />

            <main className="relative pt-32 pb-24">
                {/* Ambient Background Glow */}
                <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 h-[420px] w-[760px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[150px]" />

                <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
                    {/* Back to Home */}
                    <div className="mb-8">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4" /> Back to Home
                        </Link>
                    </div>

                    {/* Header */}
                    <div className="mb-12 border-b border-slate-200 dark:border-white/10 pb-10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-300 mb-4">
                            <ShieldCheck className="h-3.5 w-3.5" /> Legal & Data Governance
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Privacy{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                Policy
                            </span>
                        </h1>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                            Effective Date: November 16, 2026 • Operated by{" "}
                            <span className="text-slate-900 dark:text-white font-semibold">aPavone Concepts</span>
                        </p>
                        <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            At Manova CRM, protecting the confidentiality and integrity of your customer records, financial documents, and internal team communications is foundational to everything we build.
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-8">
                        {POLICY_SECTIONS.map((section) => {
                            const Icon = section.icon;
                            return (
                                <section
                                    key={section.id}
                                    className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                                            {section.title}
                                        </h2>
                                    </div>

                                    <ul className="space-y-3 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {section.content.map((paragraph, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                                                <span>{paragraph}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            );
                        })}

                        {/* Data Controller Contact Card */}
                        <section className="rounded-3xl border border-indigo-200 dark:border-indigo-500/25 bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 p-6 sm:p-8">
                            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                                5. Contact Our Data Protection Team
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                                If you have questions about this Privacy Policy, data exports, or security compliance, reach out to us directly:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/70 p-4">
                                    <MapPin className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">aPavone Concepts</p>
                                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">
                                            Old Medass Rd, Adjorkor Sowah St, Community 11, Tema, Ghana
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="tel:+233593108040"
                                    className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/70 p-4 hover:border-emerald-300 dark:hover:border-emerald-500/40 transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Phone / WhatsApp</p>
                                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">+233 59 310 8040</p>
                                    </div>
                                </a>

                                <a
                                    href="mailto:support@manovacrm.com"
                                    className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/70 p-4 hover:border-cyan-300 dark:hover:border-cyan-500/40 transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white">Privacy Inquiries</p>
                                        <p className="text-slate-500 dark:text-slate-400 mt-0.5">support@manovacrm.com</p>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* <Footer /> */}
        </div>
    );
}