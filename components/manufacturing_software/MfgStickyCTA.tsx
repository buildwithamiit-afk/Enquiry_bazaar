"use client";

import React, { useState, useEffect } from "react";
import { PhoneCall, ArrowRight, Factory } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function MfgStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md transition-all sm:py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        
        {/* Left note (hidden on small mobile) */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-[#FE5905] border border-orange-100">
            <Factory className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-900">
              Manufacturing Software &amp; Catalog Development
            </div>
            <div className="text-[11px] text-slate-500">
              100% Code Ownership • Direct Technical Consultation
            </div>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex w-full md:w-auto items-center justify-between sm:justify-end gap-2">
          <a
            href="tel:+919696717305"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 shadow-2xs hover:bg-slate-50"
          >
            <PhoneCall className="h-3.5 w-3.5 text-[#FE5905]" />
            <span className="hidden sm:inline">Call:</span> +91 96967 17305
          </a>

          <a
            href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20am%20a%20factory%20owner%20and%20want%20to%20discuss%20custom%20software%2Fwebsite%20development."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-emerald-700 transition-colors"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => {
              const el = document.getElementById("contact-section");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#FE5905] px-3.5 py-1.5 text-xs font-medium text-white shadow-2xs hover:bg-[#ff6f26] transition-colors cursor-pointer"
          >
            <span>Get Proposal</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
