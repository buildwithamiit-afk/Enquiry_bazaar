"use client";

import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { whatsappCta, consultationCta } from "./content";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export function FinalCTA() {
  return (
    <section id="book-free-consultation" className={`relative bg-white py-5 sm:py-8 ${inter.className}`}>
      
      {/* Background Accent Gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-Width Panoramic Slim Master CTA Card */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-r from-[#001A55] via-[#001A55] to-[#000F2E] px-6 py-6 sm:px-10 sm:py-7 lg:px-14 lg:py-7.5 text-center text-white shadow-xl shadow-orange-950/20">
          
          {/* Subtle Ambient Backdrops */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#FE5905]/20 blur-2xl"></div>
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-52 w-52 rounded-full bg-orange-400/15 blur-2xl"></div>

          <div className="relative z-10 mx-auto max-w-4xl">
            
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-orange-200 backdrop-blur-md shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span>START RECEIVING EXCLUSIVE RFQS THIS MONTH</span>
            </div>

            {/* Main Headline (Stretched Horizontally) */}
            <h2 className={`mt-2.5 text-lg font-extrabold tracking-tight text-white sm:text-2xl lg:text-[1.85rem] leading-[1.2] max-w-3xl mx-auto ${montserrat.className}`}>
              Ready to Stop Price Wars and Get Direct Bulk Buyers Every Month?
            </h2>

            {/* Subtext (Stretched Horizontally) */}
            <p className="mt-1.5 text-xs sm:text-[13.5px] text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Book a free 15-minute B2B growth strategy call. We will analyze your manufacturing keywords, assess your competition on Google, and outline your customized buyer acquisition roadmap.
            </p>

            {/* Value Pillars */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-[11.5px] sm:text-xs font-semibold text-slate-200">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                100% Free Strategy Session
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Zero Obligation
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                0% Commission on Orders
              </span>
            </div>

            {/* Dual High-Impact Action Buttons */}
            <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition-all hover:bg-emerald-500 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <a
                href="#hero"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-[#001A55] shadow-sm transition-all hover:bg-slate-100 active:scale-95"
              >
                <span>Book Free Discovery Call</span>
                <ArrowRight className="h-4 w-4 text-[#FE5905] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Micro Guarantee Note */}
            <p className="mt-2 text-[11px] text-slate-400">
              🔒 100% Confidential · Dedicated support tailored for Indian MSMEs
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
