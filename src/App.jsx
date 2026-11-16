import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero3D from "./components/Hero3D";
import FeaturesBento from "./components/FeaturesBento";
import PlatformShowcase from "./components/PlatformShowcase";
import WhyTeamsLoveUs from "./components/WhyTeamsLoveUs";
import Reviews from "./components/Reviews";
import UserShowcase from "./components/UserShowcase";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Workflow from "./pages/Workflow"; // Dedicated Workflow Page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Dedicated Privacy Policy Page
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 flex flex-col">
        {/* Main Route Switcher */}
        <main className="flex-grow">
          <Routes>
            {/* Home Landing Page (Includes Navbar & Footer) */}
            <Route
              path="/"
              element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <div className="flex-grow">
                    <div className="pt-20">
                      <Hero3D />
                    </div>
                    <FeaturesBento />
                    <PlatformShowcase />
                    <WhyTeamsLoveUs />
                    <UserShowcase />
                    <Reviews />
                    <Pricing />
                    <FAQ />
                  </div>
                  <Footer />
                </div>
              }
            />

            {/* Standalone Workflow Page (Includes Navbar & Footer) */}
            <Route
              path="/workflow"
              element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <div className="flex-grow pt-20">
                    <Workflow />
                  </div>
                  <Footer />
                </div>
              }
            />

            {/* Privacy Policy Page (Includes Navbar & Footer) */}
            <Route
              path="/privacy-policy"
              element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <div className="flex-grow pt-20">
                    <PrivacyPolicy />
                  </div>
                  <Footer />
                </div>
              }
            />

            {/* Standalone Auth Pages (NO Navbar, NO Footer - Full Screen Background) */}
            <Route path="/login" element={<AuthPage defaultMode="login" />} />
            <Route path="/signup" element={<AuthPage defaultMode="signup" />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}