import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [], );

  // Handle cross-page section navigation smoothly
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // If we're on another page (like /workflow), navigate home with the hash
      navigate(`/#${sectionId}`);
    } else {
      // If we're already home, scroll smoothly to the element
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-extrabold shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
              Manova <span className="text-indigo-400">CRM</span>
            </span>
            <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
              Workspace & ERP
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            onClick={(e) => handleSectionClick(e, "features")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="/#platformshowcase"
            onClick={(e) => handleSectionClick(e, "platformshowcase")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Platform
          </a>
          {/* Workflow is a dedicated separate page */}
          <Link
            to="/workflow"
            className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Workflow
          </Link>
          <a
            href="/#pricing"
            onClick={(e) => handleSectionClick(e, "pricing")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="/#faq"
            onClick={(e) => handleSectionClick(e, "faq")}
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/login"
            className="text-sm font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/#pricing"
            onClick={(e) => handleSectionClick(e, "pricing")}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all cursor-pointer"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl p-6 shadow-2xl md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="/#features"
              onClick={(e) => handleSectionClick(e, "features")}
              className="text-base font-medium text-slate-200 hover:text-indigo-400 transition-colors py-1 border-b border-white/5 cursor-pointer"
            >
              Features
            </a>
            <a
              href="/#platform"
              onClick={(e) => handleSectionClick(e, "platform")}
              className="text-base font-medium text-slate-200 hover:text-indigo-400 transition-colors py-1 border-b border-white/5 cursor-pointer"
            >
              Platform
            </a>
            <Link
              to="/workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-indigo-400 hover:text-indigo-300 transition-colors py-1 border-b border-white/5"
            >
              Workflow
            </Link>
            <a
              href="/#pricing"
              onClick={(e) => handleSectionClick(e, "pricing")}
              className="text-base font-medium text-slate-200 hover:text-indigo-400 transition-colors py-1 border-b border-white/5 cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleSectionClick(e, "faq")}
              className="text-base font-medium text-slate-200 hover:text-indigo-400 transition-colors py-1 border-b border-white/5 cursor-pointer"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="/login"
                className="flex items-center justify-center w-full rounded-xl border border-white/15 bg-white/5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all"
              >
                Sign In
              </a>
              <a
                href="/#pricing"
                onClick={(e) => handleSectionClick(e, "pricing")}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all cursor-pointer"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}