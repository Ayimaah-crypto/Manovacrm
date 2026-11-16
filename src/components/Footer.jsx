import React from "react";
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

// Custom LinkedIn SVG Icon
function LinkedInIcon({ className = "h-4 w-4" }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Custom TikTok SVG Icon
function TikTokIcon({ className = "h-4 w-4" }) {
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
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyApps = [
    {
      name: "SalesBox Pro",
      tag: "POS & Inventory",
      href: "https://salesboxpro.com",
    },
    {
      name: "LinkedBuddy",
      tag: "Networking & Growth",
      href: "#",
    },
    {
      name: "KwansoTrack",
      tag: "Fleet & Logistics",
      href: "#",
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 pt-20 pb-12 text-white overflow-hidden">
      {/* Subtle Top Luminous Divider */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Ambient Footer Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[260px] bg-indigo-600/10 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Social Media (4 Cols) */}
          <div className="md:col-span-4 space-y-5">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-extrabold shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Manova <span className="text-indigo-400">CRM</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  By aPavone Concepts
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              All-in-one CRM, project workspace, and team communication hub engineered to keep growing businesses aligned from desktop to mobile.
            </p>

            {/* Social Links: Instagram, LinkedIn, TikTok */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90 text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-all"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-900/90 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links (2 Cols) */}
          <div className="md:col-span-2 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Platform
            </p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Desktop & Mobile
                </a>
              </li>
              <li>
                <a href="#workflows" className="hover:text-white transition-colors">
                  Team Workflows
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Work Apps by aPavone Concepts (3 Cols) */}
          <div className="md:col-span-3 space-y-3.5">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" /> More Apps by Us
            </p>
            <ul className="space-y-3">
              {companyApps.map((app) => (
                <li key={app.name}>
                  <a
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/60 px-3.5 py-2.5 hover:border-indigo-500/40 hover:bg-slate-900 transition-all"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                        {app.name}
                      </p>
                      <p className="text-[11px] text-slate-500">{app.tag}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Head Office & Contact Details (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Contact & Location
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-indigo-400">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-semibold text-white">aPavone Concepts</p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-0.5">
                    Old Medass Rd, Adjorkor Sowah St,
                    <br />
                    Community 11, Tema, Ghana
                  </p>
                </div>
              </div>

              <a
                href="tel:+233593108040"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-emerald-400 group-hover:border-emerald-500/40 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-slate-300 group-hover:text-white text-xs sm:text-sm font-medium">
                  +233 59 310 8040
                </span>
              </a>

              <a
                href="https://wa.me/233593108040"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group hover:text-white transition-colors"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-cyan-400 group-hover:border-cyan-500/40 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span className="text-slate-300 group-hover:text-white text-xs sm:text-sm font-medium">
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
            <span className="text-slate-300 font-medium">aPavone Concepts</span>. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Enterprise Cloud Security
            </span>
            <a
              href="/privacy-policy"
              className="text-slate-300 hover:text-indigo-400 font-medium transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}