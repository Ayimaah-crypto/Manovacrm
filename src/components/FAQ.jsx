import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  PhoneCall,
  MapPin,
  Sparkles,
  Clock,
  ArrowUpRight,
  Headphones,
} from "lucide-react";

const FAQS = [
  {
    question: "Can I use Manova CRM on both my computer and my phone?",
    answer:
      "Yes! Your entire workspace syncs in real time between the full Desktop Web Dashboard and our iOS/Android Mobile App. Updates to leads, invoices, timesheets, or TA Chat channels appear immediately across every device.",
  },
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You get full access to all Growth plan features for 14 days with zero upfront payment and no credit card required. At the end of your trial, you can pick the plan that best fits your team size.",
  },
  {
    question: "Can we migrate our existing customer list and invoices?",
    answer:
      "Absolutely. You can import existing customers, contacts, and leads in seconds using a simple CSV or Excel spreadsheet—or our onboarding team can help migrate your records for free.",
  },
  {
    question: "How do team roles, task assignments, and timesheets work?",
    answer:
      "Admins can create custom roles (e.g., Sales Rep, Project Manager, Accountant) with exact module permissions. Staff members can clock in and out directly from their dashboard while logging hours against assigned projects.",
  },
  {
    question: "Is our business and client data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest, protected by role-based access controls and automated daily cloud backups so your financial records and client communications remain safe.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section
      id="faq"
      className="relative bg-slate-950 py-24 text-white overflow-hidden border-t border-white/5"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[380px] w-[380px] rounded-full bg-indigo-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[340px] w-[340px] rounded-full bg-violet-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Questions & Direct Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Got questions?{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              We’ve got clear answers.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Everything you need to know about getting your team set up, or reach out directly to speak with a human.
          </p>
        </div>

        {/* Split Layout: Left = Interactive FAQ Accordion | Right = Direct Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT COLUMN: FAQ Accordion (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className={`rounded-2xl border transition-all backdrop-blur-xl ${
                    isOpen
                      ? "border-indigo-500/50 bg-slate-900/95 shadow-xl shadow-indigo-500/10"
                      : "border-white/10 bg-slate-900/70 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 border-indigo-500/40 bg-indigo-600/20 text-indigo-300"
                          : "border-white/10 bg-white/5 text-slate-400"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-white/5">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Direct Contact Information Card (No Form, 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-b from-slate-900/95 to-slate-900/80 p-7 sm:p-8 backdrop-blur-2xl shadow-[0_25px_80px_-15px_rgba(79,70,229,0.35)] relative overflow-hidden"
          >
            {/* Decorative Top Corner Glow */}
            <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-600/30 mb-5">
                <Headphones className="h-6 w-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Still have questions? Reach out to us.
              </h3>
              <p className="mt-2.5 text-sm text-slate-400 leading-relaxed">
                Want a custom walkthrough for your team or have questions about onboarding? Connect with us directly—no long forms required.
              </p>

              {/* Direct Contact Channels */}
              <div className="mt-7 space-y-3.5">
                {/* Email */}
                <a
                  href="mailto:hello@manovacrm.com"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 p-4 hover:border-indigo-500/40 hover:bg-slate-950 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Email Our Team</p>
                      <p className="text-sm font-bold text-white">info@manovacrm.com</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* WhatsApp / Live Chat */}
                <a
                  href="https://wa.me/233593108040"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 p-4 hover:border-emerald-500/40 hover:bg-slate-950 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">WhatsApp & Quick Chat</p>
                      <p className="text-sm font-bold text-white">+233 (0)  59 310 8040</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Phone Support */}
                <a
                  href="tel:+233505473130"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/75 p-4 hover:border-violet-500/40 hover:bg-slate-950 transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30">
                      <PhoneCall className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Direct Phone Line</p>
                      <p className="text-sm font-bold text-white">+233 (0) 50 547 3130</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Office Location & Support Hours Footer */}
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-indigo-400 shrink-0" />   Adjorkor Sowah St Community 11, Tema Ghana
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" /> Mon–Fri, 8am–6pm GMT
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}