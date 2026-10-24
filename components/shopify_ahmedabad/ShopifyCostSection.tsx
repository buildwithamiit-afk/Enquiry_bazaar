import React from "react";
import { 
  Check, 
  Clock, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  KeyRound
} from "lucide-react";
import { PRICING_PACKAGES } from "./shopifyData";

export function ShopifyCostSection() {
  return (
    <section id="packages" className="relative py-16 sm:py-24 bg-slate-900 text-white">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#FE5905]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-400/40 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-300">
            <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Structured Solution Packages</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Shopify Development Packages in Ahmedabad
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-300">
            Milestone-based, founder-led execution tailored to your product catalog size, custom theme requirements, and business workflows.
          </p>
        </div>

        {/* 4 Packages Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_PACKAGES.map((tier) => (
            <div
              key={tier.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 ${
                tier.popular
                  ? "border-2 border-[#FE5905] bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl shadow-orange-500/20"
                  : "border border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FE5905] px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                
                <p className="mt-1 text-xs text-slate-300 min-h-[32px] leading-snug">
                  {tier.bestFor}
                </p>

                {/* Scope & Milestone Box (No explicit price display) */}
                <div className="mt-5 border-y border-white/10 py-3.5 bg-white/[0.02] rounded-lg px-3">
                  <div className="text-sm font-bold text-orange-300 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#FE5905]" />
                    <span>{tier.priceRange}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    {tier.priceNote}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <Clock className="h-4 w-4 shrink-0 text-[#FE5905]" />
                  <span>Timeline: {tier.timeline}</span>
                </div>

                {/* Feature Bullet Points */}
                <div className="mt-5 space-y-2.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What&apos;s Included:
                  </div>
                  {tier.highlights.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-snug">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="#quote-form"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    tier.popular
                      ? "bg-[#FE5905] text-white hover:bg-[#ff6f26] shadow-lg shadow-orange-500/30"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Transparency & Value Delivery Box */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-7 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>Our Technical Commitment: 100% Scope Clarity &amp; Client Ownership</span>
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Every store build at EnquiryBazaar is architected with engineering rigor and complete commercial transparency:
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="rounded-lg bg-black/20 p-3.5 border border-white/5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <FileCheck2 className="h-3.5 w-3.5 text-[#FE5905]" />
                Fixed Milestone Scope
              </div>
              <div className="mt-1 text-slate-400 leading-relaxed">
                Clear deliverables, milestones, and launch dates agreed before starting. Zero surprise hourly retainers or hidden scope creep.
              </div>
            </div>

            <div className="rounded-lg bg-black/20 p-3.5 border border-white/5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <KeyRound className="h-3.5 w-3.5 text-emerald-400" />
                100% Asset Ownership
              </div>
              <div className="mt-1 text-slate-400 leading-relaxed">
                Store, custom theme code, domain, and customer database stay in your own Shopify account. Complete handover with zero vendor lock-in.
              </div>
            </div>

            <div className="rounded-lg bg-black/20 p-3.5 border border-white/5">
              <div className="font-bold text-white flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                1 Year Free Support
              </div>
              <div className="mt-1 text-slate-400 leading-relaxed">
                Every project includes 1 full year of dedicated post-launch support for bug fixes, speed checks, security monitoring, and staff training videos.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
