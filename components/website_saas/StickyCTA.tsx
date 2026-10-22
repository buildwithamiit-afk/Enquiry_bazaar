"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling down past hero, hide when reaching bottom footer/CTA
      const scrolled = window.scrollY > 500;
      const notAtBottom = window.innerHeight + window.scrollY < document.body.offsetHeight - 500;
      setIsVisible(scrolled && notAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 z-50 md:hidden">
      <div className="bg-brand-ink border border-white/20 shadow-2xl rounded-2xl p-4 flex items-center justify-between animate-in slide-in-from-bottom-10 fade-in duration-300">
        <div>
          <div className="text-white font-bold text-lg">Website Plan</div>
          <div className="text-brand-blue font-semibold text-sm">Start at ₹149</div>
        </div>
        <button 
          onClick={() => {
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-brand-blue text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 active:scale-95 transition-transform"
        >
          Get My Website
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
