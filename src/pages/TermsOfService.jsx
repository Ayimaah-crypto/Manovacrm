import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
    FileText,
    ShieldAlert,
    CheckCircle2,
    Ban,
    CreditCard,
    Scale,
    Mail,
    MapPin,
    Phone,
    ArrowLeft,
} from "lucide-react";
import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

const TERMS_SECTIONS = [
    {
        id: "acceptance-of-terms",
        icon: FileText,
        title: "1. Acceptance of Terms",
        content: [
            "By accessing, registering for, or using Manova CRM (operated by aPavone Concepts in Community 11, Tema, Ghana), you agree to be bound by these Terms of Service.",
            "If you are entering into these terms on behalf of a company, agency, or other legal entity, you represent that you have the legal authority to bind that entity to this agreement.",
        ],
    },
    {
        id: "workspace-accounts",
        icon: CheckCircle2,
        title: "2. Workspace Accounts & Responsibilities",
        content: [
            "You are responsible for maintaining the confidentiality of your workspace login credentials and for all activities that occur under your account.",
            "You agree to provide accurate, current, and complete information during registration and keep your billing details up to date.",
            "Manova CRM reserves the right to suspend or terminate workspaces that violate security standards or engage in abusive platform usage.",
        ],
    },
    {
        id: "subscription-billing",
        icon: CreditCard,
        title: "3. Subscriptions, Fees & Refunds",
        content: [
            "Manova CRM offers a Free Plan alongside paid tiers (Business at ₵1,500.00/month and Unlimited at ₵2,000.00/month) as outlined on our pricing page.",
            "Paid subscriptions renew automatically on a monthly or annual basis unless canceled prior to the renewal date.",
            "All fees are exclusive of applicable local taxes unless stated otherwise. Refund eligibility is evaluated on a case-by-case basis by our billing support team.",
        ],
    },
    {
        id: "acceptable-use",
        icon: Ban,
        title: "4. Acceptable Use Policy",
        content: [
            "You agree not to misuse the Manova CRM platform, attempt unauthorized access to other tenant databases, or interfere with our server infrastructure.",
            "Uploading malicious code, automated web scraping without permission, or using the platform to transmit unlawful material is strictly prohibited.",
            "You retain full ownership of your data, but grant aPavone Concepts the necessary hosting and processing rights required to deliver the service.",
        ],
    },
    {
        id: "limitation-of-liability",
        icon: Scale,
        title: "5. Limitation of Liability",
        content: [
            "Manova CRM and aPavone Concepts provide the workspace software on an 'as-is' and 'as-available' basis without warranties of any kind, whether express or implied.",
            "To the maximum extent permitted by Ghanaian law, aPavone Concepts shall not be liable for any indirect, incidental, or consequential damages arising from service interruptions or data loss.",
        ],
    },
];

export default function TermsOfService() {
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
                            <ShieldAlert className="h-3.5 w-3.5" /> Legal Agreement
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Terms of{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
                                Service
                            </span>
                        </h1>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                            Effective Date: November 16, 2026 • Operated by{" "}
                            <span className="text-slate-900 dark:text-white font-semibold">aPavone Concepts</span>
                        </p>
                        <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                            Please review these Terms of Service carefully before establishing your Manova CRM workspace. These terms govern your subscription, platform access, and lawful use of our suite.
                        </p>
                    </div>

                    {/* Terms Sections */}
                    <div className="space-y-8">
                        {TERMS_SECTIONS.map((section) => {
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

                        {/* Contact & Support Card */}
                        <section className="rounded-3xl border border-indigo-200 dark:border-indigo-500/25 bg-gradient-to-br from-slate-50 to-indigo-50/50 dark:from-slate-900 dark:to-indigo-950/30 p-6 sm:p-8">
                            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                                6. Questions Regarding Our Terms?
                            </h2>
                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                                If you require clarification on any clause within our Terms of Service, our Tema support team is ready to assist you:
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
                                        <p className="font-semibold text-slate-900 dark:text-white">Legal & Support</p>
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