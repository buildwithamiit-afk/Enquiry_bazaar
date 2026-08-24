"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import { Check, X, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { whatsappCta, consultationCta } from "./content";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

interface ComparisonRow {
  parameter: string;
  category: string;
  portals: {
    text: string;
    tag: string;
  };
  enquiryBazaar: {
    text: string;
    tag: string;
  };
}

const comparisonData: ComparisonRow[] = [
  {
    parameter: "Lead Exclusivity",
    category: "Competition",
    portals: {
      text: "1 enquiry is forwarded to 8–10 competing suppliers in seconds, forcing an immediate price war.",
      tag: "Shared with 8+ Competitors",
    },
    enquiryBazaar: {
      text: "100% Exclusive. Every incoming phone call and WhatsApp RFQ comes directly and only to your team.",
      tag: "100% Exclusive to You",
    },
  },
  {
    parameter: "Profit Margins & Pricing",
    category: "Revenue",
    portals: {
      text: "Race to the bottom. Lowest quote takes the order, wiping out healthy factory margins.",
      tag: "Forced Price Wars",
    },
    enquiryBazaar: {
      text: "Full pricing power. Direct buyers judge you on manufacturing capability, ISO quality & trust.",
      tag: "High-Margin Deals",
    },
  },
  {
    parameter: "Buyer Intent & Deal Size",
    category: "Quality",
    portals: {
      text: "High call volume, but mostly retail consumers, single-piece buyers, and price checkers.",
      tag: "Retail & Single-Piece Calls",
    },
    enquiryBazaar: {
      text: "Targeted B2B procurement managers, institutional buyers, and long-term wholesale contracts.",
      tag: "Verified Bulk & OEM Buyers",
    },
  },
  {
    parameter: "Digital Asset Ownership",
    category: "Long-Term Value",
    portals: {
      text: "You rent a directory listing. The moment you stop paying annual packages, all inquiries stop.",
      tag: "Zero Ownership (Rented)",
    },
    enquiryBazaar: {
      text: "You own 100% of everything. Your Google #1 rankings, custom domain, website, and buyer list are yours forever.",
      tag: "Permanent Business Asset",
    },
  },
  {
    parameter: "Factory Brand Identity",
    category: "Trust & Credibility",
    portals: {
      text: "Reduced to a generic directory card. An ISO-certified manufacturer looks just like a middleman trader.",
      tag: "Generic Directory Card",
    },
    enquiryBazaar: {
      text: "Custom high-trust digital factory showcase featuring machinery video tours, certifications, and client proof.",
      tag: "Authority Factory Brand",
    },
  },
  {
    parameter: "Platform Commissions & Cuts",
    category: "Cost Structure",
    portals: {
      text: "Expensive recurring subscriptions (₹50,000 to ₹3,00,000+/year) with zero performance guarantee.",
      tag: "Heavy Recurring Fees",
    },
    enquiryBazaar: {
      text: "0% commission on orders. 100% of every deal revenue goes directly to your bank account.",
      tag: "0% Order Commission",
    },
  },
  {
    parameter: "Support & Execution",
    category: "Management",
    portals: {
      text: "Automated DIY portal. You are left alone to manage responses and fight bidding wars.",
      tag: "Self-Service (DIY)",
    },
    enquiryBazaar: {
      text: "Dedicated B2B Growth Specialists managing your Google rankings, website updates, and B2B ads daily.",
      tag: "Dedicated Manager Included",
    },
  },
];

export function PlatformComparison() {
  return (
    <section id="comparison" className={`relative bg-[#F8FAFC] py-16 sm:py-24 ${inter.className}`}>
      
      {/* Top & Bottom Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-xs">
            <Zap className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>THE HONEST COMPARISON</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.35rem] leading-tight ${montserrat.className}`}>
            Traditional B2B Portals <span className="text-slate-400 font-medium">vs</span> Our Direct Engine
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop renting shared leads that start price wars. See why top Indian manufacturers are shifting to their own dedicated direct buyer system.
          </p>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP TABLE VIEW (Visible on md and up) */}
        {/* ======================================================== */}
        <div className="mt-12 hidden md:block overflow-hidden rounded-[24px] border-2 border-slate-200 bg-white shadow-xl shadow-slate-200/60">
          
          {/* Table Header with 3 Sharp, Explicit Columns */}
          <div className="grid grid-cols-[1.1fr_1.45fr_1.65fr] border-b-2 border-slate-200">
            
            {/* Col 1 Header: Metrics */}
            <div className="flex flex-col justify-center px-6 py-5 bg-slate-100/90 border-r-2 border-slate-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
                Key Comparison Metric
              </span>
              <span className="text-[11px] font-medium text-slate-400 mt-0.5">
                Business &amp; Growth Factors
              </span>
            </div>
            
            {/* Col 2 Header: Traditional Portals */}
            <div className="px-6 py-5 bg-rose-50/80 border-r-2 border-slate-200">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  Shared Listing Model
                </span>
                <span className="rounded-md bg-rose-200/80 px-2 py-0.5 text-[11px] font-bold text-rose-800">
                  Rented Leads
                </span>
              </div>
              <h3 className={`mt-1.5 text-[17px] font-extrabold text-slate-900 ${montserrat.className}`}>
                IndiaMART / Justdial / Portals
              </h3>
            </div>

            {/* Col 3 Header: EnquiryBazaar Direct Setup */}
            <div className="px-6 py-5 bg-gradient-to-r from-[#1E5EFF] via-blue-600 to-indigo-600 text-white">
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-blue-100">
                  <Sparkles className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
                  Direct Acquisition Engine
                </span>
                <span className="rounded-full bg-emerald-400 px-2.5 py-0.5 text-[11px] font-extrabold text-[#0B1E3D] shadow-xs">
                  100% Owned
                </span>
              </div>
              <h3 className={`mt-1.5 text-[17px] font-extrabold text-white ${montserrat.className}`}>
                EnquiryBazaar Direct Setup
              </h3>
            </div>

          </div>

          {/* Table Body Rows with Solid Vertical Dividers */}
          <div className="divide-y-2 divide-slate-100">
            {comparisonData.map((row) => (
              <div
                key={row.parameter}
                className="grid grid-cols-[1.1fr_1.45fr_1.65fr] transition-colors hover:bg-slate-50/50"
              >
                
                {/* Col 1: Metric */}
                <div className="flex flex-col justify-center px-6 py-5 bg-slate-50/70 border-r-2 border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E5EFF]">
                    {row.category}
                  </span>
                  <span className={`text-[15px] font-bold text-[#0B1E3D] mt-0.5 ${montserrat.className}`}>
                    {row.parameter}
                  </span>
                </div>

                {/* Col 2: Traditional Portals */}
                <div className="flex flex-col justify-center px-6 py-5 bg-white border-r-2 border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                      <X className="h-3.5 w-3.5 stroke-[2.5]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13px] text-slate-700 leading-relaxed font-normal">
                        {row.portals.text}
                      </p>
                      <span className="mt-2 inline-flex self-start rounded bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-700 border border-rose-200/80">
                        {row.portals.tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Col 3: EnquiryBazaar Setup */}
                <div className="flex flex-col justify-center px-6 py-5 bg-blue-50/35">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[13.5px] font-semibold text-slate-900 leading-relaxed">
                        {row.enquiryBazaar.text}
                      </p>
                      <span className="mt-2 inline-flex self-start rounded-md bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-300">
                        {row.enquiryBazaar.tag}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ======================================================== */}
        {/* MOBILE CARD VIEW (Optimized for small screens) */}
        {/* ======================================================== */}
        <div className="mt-8 space-y-4 md:hidden">
          {comparisonData.map((row) => (
            <div
              key={row.parameter}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Metric Title Banner */}
              <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200">
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#1E5EFF]">
                  {row.category}
                </span>
                <h4 className={`text-sm font-bold text-[#0B1E3D] ${montserrat.className}`}>
                  {row.parameter}
                </h4>
              </div>

              {/* Two Divided Cards */}
              <div className="p-4 space-y-3">
                {/* Traditional Portals Card */}
                <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-rose-700">❌ Traditional Portals</span>
                    <span className="text-[10px] font-semibold text-rose-600 bg-rose-100 px-1.5 py-0.5 rounded">Rented</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {row.portals.text}
                  </p>
                </div>

                {/* EnquiryBazaar Card */}
                <div className="rounded-xl border-2 border-blue-500/40 bg-blue-50/60 p-3 shadow-xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-[#1E5EFF]">👑 EnquiryBazaar Setup</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">100% Owned</span>
                  </div>
                  <p className="text-xs font-medium text-slate-900 leading-relaxed">
                    {row.enquiryBazaar.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Impact Bottom Callout & Action Bar */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#0B1E3D] via-[#102B52] to-[#0B1E3D] p-6 sm:p-8 text-white shadow-xl shadow-slate-900/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-4 text-left">
              <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/30 text-[#1E5EFF]">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-bold text-white ${montserrat.className}`}>
                  Stop Competing on Price. Start Winning Direct High-Margin Bulk Orders.
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Get a complete digital presence that ranks #1 on Google and brings genuine procurement buyers directly to you.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto justify-start lg:justify-end">
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95"
              >
                <WhatsAppIcon className="h-5.5 w-5.5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={consultationCta.href}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#1E5EFF] px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600 active:scale-95"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
