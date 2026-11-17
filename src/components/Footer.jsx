import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import manovaIcon from "../assets/images/manovaicon.png";
import manovaLogoText from "../assets/images/manovalogo.png";
import {
    ArrowUpRight,
    MapPin,
    Phone,
    MessageCircle,
    ShieldCheck,
    Layers,
} from "lucide-react";

// Custom Instagram SVG Icon
function InstagramIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    );
}

// Custom Facebook SVG Icon
function FacebookIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    );
}

// Custom Twitter / X SVG Icon
function TwitterIcon({ className = "h-4 w-4" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    );
}

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const location = useLocation();

    // Handles scrolling smoothly on Home, or routing back to Home + hash from subpages
    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate(`/#${sectionId}`);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const companyApps = [
        {
            name: "SalesBox Pro",
            tag: "POS & Inventory",
            href: "https://salesboxpro.com",
        },
        {
            name: "LinkedBuddy",
            tag: "Networking & Growth",
            href: "https://linkedbuddy.app",
        },
        {
            name: "KwansoTrack",
            tag: "Fleet & Logistics",
            href: "https://kwansotrack.com",
        },
    ];

    return (
        <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-white/10 pt-20 pb-12 text-slate-900 dark:text-white overflow-hidden transition-colors duration-300">
            {/* Subtle Top Luminous Divider */}
            <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            {/* Ambient Footer Glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[260px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[150px]" />

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200 dark:border-white/10">
                    {/* Column 1: Brand & Social Media (4 Cols) */}
                    <div className="md:col-span-4 space-y-5">
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-3 group"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                                <img
                                    src={manovaIcon}
                                    alt="Manova CRM Icon"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center">
                                    <img
                                        src={manovaLogoText}
                                        alt="Manova CRM"
                                        className="h-7 w-auto object-contain dark:brightness-200"
                                    />
                                </div>
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold mt-0.5">
                                    By aPavone Concepts
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
                            All-in-one CRM, project workspace, and team communication hub engineered to keep growing businesses aligned from desktop to mobile.
                        </p>

                        {/* Social Links: Instagram, Facebook, Twitter */}
                        <div className="flex items-center gap-3 pt-1">
                            <a
                                href="https://www.instagram.com/apavoneconcepts/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/90 text-slate-500 dark:text-slate-400 hover:text-pink-600 dark:hover:text-pink-400 hover:border-pink-300 dark:hover:border-pink-500/40 transition-all"
                            >
                                <InstagramIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="https://web.facebook.com/apavoneconcepts"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/90 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all"
                            >
                                <FacebookIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="https://x.com/ApavoneConcepts"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/90 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-300 dark:hover:border-sky-500/40 transition-all"
                            >
                                <TwitterIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Platform Links (2 Cols) */}
                    <div className="md:col-span-2 space-y-3.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            Platform
                        </p>
                        <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                            <li>
                                <a
                                    href="/#features"
                                    onClick={(e) => handleSectionClick(e, "features")}
                                    className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <Link
                                    to="/workflow"
                                    onClick={scrollToTop}
                                    className="hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    Team Workflows
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/#pricing"
                                    onClick={(e) => handleSectionClick(e, "pricing")}
                                    className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                                >
                                    Pricing Plans
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/#faq"
                                    onClick={(e) => handleSectionClick(e, "faq")}
                                    className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Other Work Apps by aPavone Concepts (3 Cols) */}
                    <div className="md:col-span-3 space-y-3.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5">
                            <Layers className="h-3.5 w-3.5" /> More Apps by Us
                        </p>
                        <ul className="space-y-3">
                            {companyApps.map((app) => (
                                <li key={app.name}>
                                    <a
                                        href={app.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex items-center justify-between rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/60 px-3.5 py-2.5 hover:border-indigo-500/40 hover:bg-white dark:hover:bg-slate-900 transition-all"
                                    >
                                        <div>
                                            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                                {app.name}
                                            </p>
                                            <p className="text-[11px] text-slate-500">{app.tag}</p>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 text-slate-400 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Head Office & Contact Details (3 Cols) */}
                    <div className="md:col-span-3 space-y-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                            Contact & Location
                        </p>

                        <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 text-indigo-600 dark:text-indigo-400">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">aPavone Concepts</p>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-0.5">
                                        Old Medass Rd, Adjorkor Sowah St,
                                        <br />
                                        Community 11, Tema, Ghana
                                    </p>
                                </div>
                            </div>

                            <a
                                href="tel:+233593108040"
                                className="flex items-center gap-3 group hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 group-hover:border-emerald-300 dark:group-hover:border-emerald-500/40 transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-xs sm:text-sm font-medium">
                                    +233 59 310 8040
                                </span>
                            </a>

                            <a
                                href="https://wa.me/233593108040"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 group hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/40 transition-colors">
                                    <MessageCircle className="h-4 w-4" />
                                </div>
                                <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white text-xs sm:text-sm font-medium">
                                    Chat on WhatsApp
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Legal & Privacy Policy Bar */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        © {currentYear}{" "}
                        <span className="text-slate-700 dark:text-slate-300 font-medium">aPavone Concepts</span>. All rights reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                        <span className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-400">
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" /> Enterprise Cloud Security
                        </span>
                        <Link
                            to="/privacy-policy"
                            onClick={scrollToTop}
                            className="text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/terms-of-service"
                            onClick={scrollToTop}
                            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}