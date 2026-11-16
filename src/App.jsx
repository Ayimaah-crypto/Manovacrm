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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-indigo-500 flex flex-col">
        {/* Navbar stays persistent on every page */}
        <Navbar />

        {/* Main Route Switcher */}
        <main className="flex-grow">
          <Routes>
            {/* Home Landing Page (All sections combined) */}
            <Route 
              path="/" 
              element={
                <>
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
                </>
              } 
            />

            {/* Standalone Workflow Page Route */}
            <Route 
              path="/workflow" 
              element={
                <div className="pt-20">
                  <Workflow />
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}