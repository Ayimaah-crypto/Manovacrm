import React from "react";
import { motion } from "framer-motion";
import { Quote, Sparkles, Star, CheckCircle2 } from "lucide-react";

const REVIEWS = [
    {
        name: "Kwame Mensah",
        role: "Operations Director",
        company: "Volta Freight & Logistics",
        avatar: "KM",
        gradient: "from-indigo-500 to-violet-500",
        rating: 5,
        quote:
            "Moving our billing, estimates, and client follow-ups into Manova CRM cut our invoice turnaround time in half. Having a 98% paid rate is no longer guesswork—we track every cedi and dollar in real time.",
    },
    {
        name: "Abena Osei-Bonsu",
        role: "Founder & Creative Lead",
        company: "Studio Kente Digital",
        avatar: "AO",
        gradient: "from-violet-500 to-cyan-500",
        rating: 5,
        quote:
            "The built-in TA Chat channels and timesheet clock-in feature completely replaced three separate subscriptions for our agency. My team stays synced from their laptops or phones without missing a single deadline.",
    },
    {
        name: "Daniel Boateng",
        role: "Head of Sales",
        company: "Apex Solar Energy",
        avatar: "DB",
        gradient: "from-emerald-500 to-teal-500",
        rating: 5,
        quote:
            "Our field reps love the mobile sync. As soon as a site inspection is done, they log the lead, assign a role for the proposal team, and send the quote before even leaving the client's compound.",
    },
    
   
];

const TRUSTED_STATS = [
    { value: "4.9/5", label: "Average Team Rating" },
    { value: "98.5%", label: "On-Time Invoice Collection" },
    { value: "10,000+", label: "Tasks & Projects Tracked" },
    { value: "24/7", label: "Desktop & Mobile Sync" },
];

export default function Reviews() {
    return (
        <section
            id="reviews"
            className="relative bg-slate-950 py-24 text-white overflow-hidden border-t border-white/5"
        >
            {/* Ambient Glows */}
            <div className="pointer-events-none absolute top-24 right-1/4 h-[380px] w-[380px] rounded-full bg-indigo-600/15 blur-[140px]" />
            <div className="pointer-events-none absolute bottom-10 left-1/4 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[130px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 mb-4">
                        <Sparkles className="h-3.5 w-3.5" /> Trusted by Growing Teams
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Teams run faster when{" "}
                        <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            everything connects.
                        </span>
                    </h2>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        See how sales teams, agencies, and service businesses use Manova CRM to close deals, track time, and get paid faster.
                    </p>
                </div>

                {/* Social Proof Metrics Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 grid grid-cols-2 lg:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur-xl"
                >
                    {TRUSTED_STATS.map((stat) => (
                        <div key={stat.label} className="text-center px-2">
                            <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {REVIEWS.map((review, index) => (
                        <motion.div
                            key={review.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-900/80 p-6 sm:p-7 backdrop-blur-xl shadow-2xl hover:border-indigo-500/40 transition-all"
                        >
                            {/* Subtle Quote Watermark */}
                            <Quote className="absolute top-6 right-6 h-8 w-8 text-white/[0.04] group-hover:text-indigo-400/15 transition-colors" />

                            <div>
                                {/* Star Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: review.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>

                                {/* Quote Text */}
                                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                                    "{review.quote}"
                                </p>
                            </div>

                            {/* Reviewer Info */}
                            <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${review.gradient} text-xs font-extrabold text-white shadow-lg`}
                                    >
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white flex items-center gap-1.5">
                                            {review.name}
                                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                                        </p>
                                        <p className="text-xs text-slate-400">
                                            {review.role}, <span className="text-indigo-300">{review.company}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}