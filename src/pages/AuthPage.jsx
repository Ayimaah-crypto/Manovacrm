import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, EyeOff, ArrowLeft, CheckCircle2 } from "lucide-react";

// Background image import
import authBgImage from "../assets/images/crm.jpg";

export default function AuthPage({ defaultMode = "signup" }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine mode from URL path or prop
  const [isSignUp, setIsSignUp] = useState(
    location.pathname.includes("login") ? false : defaultMode === "signup"
  );

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    teamSize: "1-5",
  });

  // Keep state synced if user navigates via browser buttons
  useEffect(() => {
    setIsSignUp(!location.pathname.includes("login"));
    setSubmitted(false);
  }, [location.pathname]);

  const toggleMode = () => {
    const nextIsSignUp = !isSignUp;
    setIsSignUp(nextIsSignUp);
    setSubmitted(false);
    navigate(nextIsSignUp ? "/signup" : "/login", { replace: true });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please check and try again.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white font-sans selection:bg-indigo-500 overflow-x-hidden flex flex-col justify-center">
      {/* Full-Bleed Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${authBgImage})`,
        }}
      />

      {/* Dark Atmospheric Gradient Overlay for Contrast & Readability */}
      <div className="fixed inset-0 z-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-950/85 backdrop-blur-[2px]" />

      {/* Floating Back to Home Button (Top Left Corner) */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/50 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md hover:border-white/30 hover:text-white transition-all shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Split Content Container - Tightened Gap */}
      <main className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4">
          {/* Left Column: Editorial Prompt & Outlined Mode Switcher */}
          <div className="lg:col-span-5 space-y-5 text-left pr-0 lg:pr-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSignUp ? "prompt-signup" : "prompt-login"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4 max-w-md"
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white drop-shadow-md">
                  {isSignUp ? "Already have an Account?" : "New to Manova CRM?"}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {isSignUp
                    ? "Sign in to access your active pipelines, client invoices, project boards, and Chat channels."
                    : "Create your workspace in seconds and unify your sales, projects, billing, and team communication."}
                </p>

                <div className="pt-1">
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="min-w-[170px] rounded-full border-2 border-white/80 bg-white/5 px-7 py-2.5 text-sm sm:text-base font-bold text-white backdrop-blur-md hover:bg-white hover:text-slate-950 transition-all cursor-pointer shadow-lg"
                  >
                    {isSignUp ? "Sign In" : "Create Account"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Frosted Glassmorphic Form Card */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <motion.div
              layout
              className="w-full max-w-md rounded-3xl border border-white/20 bg-slate-900/50 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.65)] backdrop-blur-2xl"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center space-y-4"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400">
                      <CheckCircle2 className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {isSignUp ? "Workspace Ready!" : "Authentication Verified"}
                    </h2>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto">
                      {isSignUp
                        ? `Welcome aboard, ${formData.firstName || "Team"}! Your Manova CRM environment is being provisioned.`
                        : "Redirecting you straight to your Manova CRM command center..."}
                    </p>
                    <div className="pt-3">
                      <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 transition-colors"
                      >
                        Return to Overview
                      </Link>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key={isSignUp ? "form-signup" : "form-login"}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-3.5"
                  >
                    {/* Form Header */}
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {isSignUp ? "Create an Account" : "Welcome Back"}
                      </h2>
                      <p className="mt-1 text-xs text-slate-300">
                        {isSignUp
                          ? "Set up your all-in-one CRM & project workspace"
                          : "Enter your credentials to access your workspace"}
                      </p>
                    </div>

                    {/* Registration-Only Fields */}
                    {isSignUp && (
                      <>
                        {/* First Name & Last Name Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <input
                              type="text"
                              name="firstName"
                              required
                              placeholder="First Name"
                              value={formData.firstName}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="lastName"
                              required
                              placeholder="Last Name"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Company / Workspace Name */}
                        <div>
                          <input
                            type="text"
                            name="companyName"
                            required
                            placeholder="Company or Organization Name"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                          />
                        </div>
                      </>
                    )}

                    {/* Work Email */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Work Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                      />
                    </div>

                    {/* Phone Number (Registration Only) */}
                    {isSignUp && (
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Phone / WhatsApp Number (+233 ...)"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                        />
                      </div>
                    )}

                    {/* Password Field */}
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        aria-label="Toggle Password Visibility"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* Confirm Password & Team Size (Registration Only) */}
                    {isSignUp ? (
                      <>
                        <div className="relative">
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            required
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 pr-10 text-xs sm:text-sm text-white placeholder-slate-300/70 backdrop-blur-md focus:border-indigo-400 focus:bg-white/15 focus:outline-none transition-all"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            aria-label="Toggle Confirm Password Visibility"
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>

                        <div>
                          <label className="block text-[11px] font-semibold text-slate-200 mb-1">
                            Select Team Size
                          </label>
                          <select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/15 bg-slate-900/80 px-3.5 py-2.5 text-xs sm:text-sm text-white backdrop-blur-md focus:border-indigo-400 focus:outline-none transition-all cursor-pointer"
                          >
                            <option value="1-5">1 – 5 Team Members</option>
                            <option value="6-20">6 – 20 Team Members</option>
                            <option value="21-50">21 – 50 Team Members</option>
                            <option value="50+">50+ Enterprise Team</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      /* Forgot Password & Remember Me (Sign In Only) */
                      <div className="flex items-center justify-between text-xs text-slate-300 pt-0.5">
                        <label className="inline-flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded border-white/20 bg-white/10 text-indigo-500 focus:ring-indigo-500"
                          />
                          <span>Keep me signed in</span>
                        </label>
                        <a
                          href="#forgot-password"
                          onClick={(e) => {
                            e.preventDefault();
                            alert("Password reset link feature coming soon.");
                          }}
                          className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors"
                        >
                          Forgot password?
                        </a>
                      </div>
                    )}

                    {/* Primary Pill Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-600/30 hover:from-indigo-500 hover:to-violet-500 transition-all cursor-pointer"
                      >
                        {isSignUp ? "Create Account" : "Sign In to Workspace"}
                      </button>
                    </div>

                    {/* Terms Notice */}
                    {isSignUp && (
                      <p className="text-center text-[10px] text-slate-300/80 pt-0.5">
                        By creating an account, you agree to our{" "}
                        <Link
                          to="/privacy-policy"
                          className="underline hover:text-white"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}