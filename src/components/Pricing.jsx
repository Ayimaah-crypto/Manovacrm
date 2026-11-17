import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Shield, Crown } from "lucide-react";

const PLANS = [
  {
    name: "Free Plan",
    tagline: "Free forever",
    icon: Zap,
    price: "0.00",
    popular: false,
    cta: "Get Started Free",
    features: [
      "1 Staff",
      "10 Contacts",
      "20 Invoices",
      "20 Creditnotes",
      "10 Tasks",
      "100 MB Storage",
      "10 Customers",
      "3 Contracts",
      "20 Estimates",
      "10 Projects",
      "10 Items",
    ],
  },
  {
    name: "Business",
    tagline: "For regular Businesses",
    icon: Sparkles,
    price: "1,500.00",
    popular: true,
    badge: "Most Popular",
    cta: "Start Business Plan",
    features: [
      "5 Staff",
      "100 Contacts",
      "500 Invoices",
      "200 Creditnotes",
      "400 Tasks",
      "10 GB Storage",
      "100 Customers",
      "300 Contracts",
      "500 Estimates",
      "400 Projects",
      "200 Items",
    ],
  },
  {
    name: "Unlimited",
    tagline: "Complete scale with all advanced tools & modules.",
    icon: Crown,
    price: "2,000.00",
    popular: false,
    cta: "Get Unlimited Access",
    features: [
      "Unlimited Staff, Customers & Contacts",
      "Unlimited Invoices, Estimates & Proposals",
      "Unlimited Creditnotes, Contracts & Projects",
      "Unlimited Tasks, Leads, Tickets & Items",
      "50 GB Storage & Database Backup",
      "API & CSV Export Manager",
      "HR Records & Timesheet Attendance Management",
      "OpenAI Integration & Perfex CRM Powerful Chat",
      "Paystack & Menu Setup Integration",
      "Staff Workload, Warehouse & Surveys",
      "Theme Style & Goals Management",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-white dark:bg-slate-950 py-24 text-slate-900 dark:text-white overflow-hidden border-t border-slate-200 dark:border-white/5 transition-colors duration-300"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[420px] w-[620px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Plans that scale{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 dark:from-indigo-400 dark:via-violet-400 dark:to-cyan-400 bg-clip-text text-transparent">
              with your ambition.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Choose the right tier for your team, from free starter tools to fully unlocked enterprise capabilities.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 backdrop-blur-xl transition-all ${
                  plan.popular
                    ? "border-2 border-indigo-600 dark:border-indigo-500 bg-slate-50 dark:bg-slate-900/95 lg:-translate-y-3"
                    : "border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/75 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 dark:bg-gradient-to-r dark:from-indigo-500 dark:to-violet-500 px-4 py-1 text-xs font-bold text-white">
                      <Sparkles className="h-3 w-3" /> {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl border ${
                          plan.popular
                            ? "bg-indigo-100 dark:bg-indigo-600/25 border-indigo-200 dark:border-indigo-500/40 text-indigo-600 dark:text-indigo-300"
                            : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{plan.tagline}</p>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-slate-200 dark:border-white/10 pb-6">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      ₵{plan.price}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">/ month</span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.popular
                              ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400"
                              : "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-4">
                  <Link
                    to="/signup"
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "border border-slate-300 dark:border-white/15 bg-white dark:bg-white/5 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-white/10"
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" /> Secure cloud hosting & daily backups
          </span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>Switch plans or cancel anytime</span>
          <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
          <span>Free data migration assistance</span>
        </div>
      </div>
    </section>
  );
}