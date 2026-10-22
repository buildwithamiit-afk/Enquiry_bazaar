"use client";

import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Cpu, Zap, Clock } from "lucide-react";

export function MfgHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[950px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(254,89,5,0.06),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#001A55 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-3.5 py-1.5 text-xs font-semibold text-[#FE5905] shadow-2xs">
              <Factory className="h-3.5 w-3.5" />
              <span>Dedicated Technology Partner for Manufacturers</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#001A55] sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
              Software, Websites &amp; Landing Pages Built for{" "}
              <span className="text-[#FE5905]">Factory Growth</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              Stop losing high-margin procurement contracts to slow quotation cycles or outdated websites. We build custom factory ERPs, digital technical catalogs, and high-converting B2B landing pages that bring serious wholesale buyers directly to your sales desk.
            </p>

            {/* Core Value Props (Zero em-dashes) */}
            <div className="mt-6 space-y-2.5 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>100% Code &amp; Data Ownership:</strong> Full source code handover with zero monthly software penalties.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Instant 45-Second Quotations:</strong> Auto-calculate raw material, wastage, and freight with branded GST PDFs.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Direct Bulk Buyer Inquiries:</strong> Inbound RFQs land straight on your sales WhatsApp with 0% commission.</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("contact-section")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#ff6f26] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection("estimator-section")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 cursor-pointer"
              >
                <Cpu className="h-4 w-4 text-[#FE5905]" />
                <span>Estimate Scope &amp; Timeline</span>
              </button>
            </div>

            {/* Founder Note */}
            <div className="mt-6 text-xs text-slate-500">
              Direct technical consultation led by <strong>Amit Pandey</strong> (Software Architect &amp; Founder).{" "}
              <a
                href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20am%20a%20factory%20owner%20and%20want%20to%20discuss%20custom%20software%2Fwebsite%20development."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#FE5905] hover:underline"
              >
                WhatsApp Direct &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Clean Software & Catalog Interface Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/50">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="ml-2 text-xs font-medium text-slate-400">factory-portal.app</span>
                </div>
                <span className="rounded-md bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-100">
                  Live Production OS
                </span>
              </div>

              {/* Metric Overview */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                  <span className="text-xs font-medium text-slate-500">Active Production Batches</span>
                  <div className="mt-1 text-xl font-bold text-slate-900">14 Orders</div>
                  <span className="text-[11px] text-emerald-600 font-medium">On Schedule</span>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                  <span className="text-xs font-medium text-slate-500">Quotation Speed</span>
                  <div className="mt-1 text-xl font-bold text-slate-900">45 Seconds</div>
                  <span className="text-[11px] text-slate-500">GST Landed PDF</span>
                </div>
              </div>

              {/* Sample Inbound Order Card */}
              <div className="mt-3.5 rounded-xl border border-slate-200 bg-white p-3.5">
                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Verified Corporate RFQ</span>
                  <span className="text-emerald-600 font-semibold">Wholesale Contract</span>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Precision Turned Flanges (SS 316L)
                </div>
                <div className="mt-1 text-xs text-slate-600 flex justify-between">
                  <span>Volume: 5,000 Units / Month</span>
                  <span>Destination: Maharashtra</span>
                </div>
              </div>

              {/* Feature Tags */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5 text-xs text-slate-600">
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Inventory Management</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Digital Catalog</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">WhatsApp Alerts</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">PO Tracking</span>
              </div>

              {/* Ownership Guarantee */}
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-800">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>You own 100% of your source code, database, and client data.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
