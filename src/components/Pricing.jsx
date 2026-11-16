import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Shield, Crown } from "lucide-react";

const PLANS = [
  {
    name: "Starter",
    tagline: "For solo founders & small teams getting organized.",
    icon: Zap,
    monthlyPrice: 29,
    annualPrice: 23,
    popular: false,
    cta: "Start Free Trial",
    features: [
      "Up to 5 team members",
      "Customer & lead directory (up to 1,000 contacts)",
      "Invoices, estimates & proposal tracking",
      "Chat channels & direct messaging",
      "Desktop & Mobile App sync",
      "Email & standard support",
    ],
  },
  {
    name: "Growth",
    tagline: "Everything fast-moving agencies & sales teams need.",
    icon: Sparkles,
    monthlyPrice: 79,
    annualPrice: 63,
    popular: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
    features: [
      "Up to 25 team members",
      "Unlimited customers, leads & pipelines",
      "Automated recurring billing & subscriptions",
      "Timesheet clock-in & clock-out tracking",
      "AI-powered task & follow-up suggestions",
      "Custom roles & granular permissions",
      "Priority 24/7 chat support",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom scale, security & dedicated onboarding.",
    icon: Crown,
    monthlyPrice: 199,
    annualPrice: 159,
    popular: false,
    cta: "Start Free Trial",
    features: [
      "Unlimited team members & workspaces",
      "Dedicated account manager & team training",
      "Custom domain & white-label client portal",
      "Advanced financial & BI reporting",
      "Custom API & webhook integrations",
      "SLA uptime guarantee & daily backups",
    ],
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      id="pricing"
      className="relative bg-slate-950 py-24 text-white overflow-hidden border-t border-white/5"
    >
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 h-[420px] w-[620px] rounded-full bg-indigo-600/15 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Plans that scale{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              with your ambition.
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Start with a 14-day free trial. No hidden setup fees—switch plans or cancel anytime.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/90 p-1.5 backdrop-blur">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                !isAnnual
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                isAnnual
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Annual
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 backdrop-blur-xl transition-all ${
                  plan.popular
                    ? "border-2 border-indigo-500 bg-slate-900/95 shadow-[0_25px_80px_-15px_rgba(79,70,229,0.45)] lg:-translate-y-3"
                    : "border border-white/10 bg-slate-900/75 shadow-2xl hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
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
                            ? "bg-indigo-600/25 border-indigo-500/40 text-indigo-300"
                            : "bg-white/5 border-white/10 text-slate-300"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-slate-400">{plan.tagline}</p>

                  {/* Price Display */}
                  <div className="mt-6 flex items-baseline gap-1.5 border-b border-white/10 pb-6">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      ₵{price}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">/ month</span>
                    {isAnnual && (
                      <span className="ml-auto text-xs text-slate-500 line-through">
                        ₵{plan.monthlyPrice}/mo
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.popular
                              ? "bg-indigo-500/20 text-indigo-400"
                              : "bg-emerald-500/15 text-emerald-400"
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
                        ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
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
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-emerald-400" /> 14-day free trial on all plans
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>No credit card required to start</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>Free data migration assistance</span>
        </div>
      </div>
    </section>
  );
}