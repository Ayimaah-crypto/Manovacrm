import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import manovaIcon from "../assets/images/manovaicon.png";
import manovaLogoText from "../assets/images/manovalogo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle cross-page section navigation smoothly
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
    } else {
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
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 shadow-sm dark:shadow-2xl py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Brand Logo */}
       <Link to="/" className="flex items-center gap-2.5 group">
            {/* Icon Image Asset */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 group-hover:scale-105 transition-transform">
                <img 
                    src={manovaIcon} 
                    alt="Manova CRM Icon" 
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Logo Text / Wordmark Image Asset or Fallback */}
            <div className="flex flex-col">
                <div className="flex items-center">
                    <img 
                        src={manovaLogoText} 
                        alt="Manova CRM" 
                        className="h-6 w-auto object-contain dark:brightness-200"
                    />
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 tracking-wider uppercase font-semibold">
                    Workspace & ERP
                </span>
            </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#features"
            onClick={(e) => handleSectionClick(e, "features")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            Features
          </a>
          <a
            href="/#platformshowcase"
            onClick={(e) => handleSectionClick(e, "platformshowcase")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            Platform
          </a>
          <Link
            to="/workflow"
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
          >
            Workflow
          </Link>
          <a
            href="/#pricing"
            onClick={(e) => handleSectionClick(e, "pricing")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            Pricing
          </a>
          <a
            href="/#faq"
            onClick={(e) => handleSectionClick(e, "faq")}
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10 transition-all cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <Link
            to="/login"
            className="text-sm font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all cursor-pointer"
          >
            <span>Sign Up for Free</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Actions (Theme Toggle + Menu Button) */}
        <div className="flex items-center gap-2.5 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light/Dark Mode"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200 dark:border-white/10 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl p-6 shadow-2xl md:hidden">
          <nav className="flex flex-col space-y-4">
            <a
              href="/#features"
              onClick={(e) => handleSectionClick(e, "features")}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors py-1 border-b border-slate-100 dark:border-white/5 cursor-pointer"
            >
              Features
            </a>
            <a
              href="/#platformshowcase"
              onClick={(e) => handleSectionClick(e, "platformshowcase")}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors py-1 border-b border-slate-100 dark:border-white/5 cursor-pointer"
            >
              Platform
            </a>
            <Link
              to="/workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors py-1 border-b border-slate-100 dark:border-white/5"
            >
              Workflow
            </Link>
            <a
              href="/#pricing"
              onClick={(e) => handleSectionClick(e, "pricing")}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors py-1 border-b border-slate-100 dark:border-white/5 cursor-pointer"
            >
              Pricing
            </a>
            <a
              href="/#faq"
              onClick={(e) => handleSectionClick(e, "faq")}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 transition-colors py-1 border-b border-slate-100 dark:border-white/5 cursor-pointer"
            >
              FAQ
            </a>
            <div className="pt-4 flex flex-col gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 transition-all"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 hover:bg-indigo-500 transition-all cursor-pointer"
              >
                <span>Sign Up for Free</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}