"use client";

import React, { useState } from "react";
import { Copy, Check, Sparkles, ShieldCheck, Mail, Globe, Clock, ArrowRight, Zap } from "lucide-react";
import { DEFAULT_COUPON_CODE } from "@/lib/hostingData";

interface HostingHeroProps {
  onOpenBooking: (issue?: string) => void;
}

export function HostingHero({ onOpenBooking }: HostingHeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(DEFAULT_COUPON_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#001A55] to-slate-950 pt-10 pb-16 text-white sm:pt-14 sm:pb-20">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FE5905]/15 blur-3xl sm:h-[500px] sm:w-[500px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Live Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 shadow-sm backdrop-blur-md sm:text-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Verified Hostinger Referral Deals &amp; Discounts (2026)</span>
          </div>
        </div>

        {/* Main Heading & Value Prop */}
        <div className="mx-auto mt-5 max-w-4xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
            Get Maximum Discount on{" "}
            <span className="bg-gradient-to-r from-[#FE5905] via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Web Hosting &amp; Business Email
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg sm:leading-relaxed">
            Save up to <strong>75% + extra 20%</strong> with our verified plan referral links. 
            Get <strong>100 free professional email accounts</strong>, a free domain, and 
            an exclusive <strong className="text-emerald-400">Free 15-Minute 1-on-1 Developer Setup Call</strong> so you never get stuck.
          </p>
        </div>

        {/* 1-Tap Coupon Box - Mobile First */}
        <div className="mx-auto mt-7 max-w-md rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
          <div className="flex items-center justify-between text-xs text-slate-300 sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium">
              <Sparkles className="h-4 w-4 text-amber-400" />
              Universal Checkout Promo Code
            </span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-bold text-emerald-300">
              Tested Today
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2 rounded-xl bg-slate-950/80 p-2 sm:p-2.5 border border-slate-700/60">
            <div className="flex items-center gap-2 pl-2">
              <span className="font-mono text-lg font-black tracking-wider text-[#FE5905] sm:text-xl">
                {DEFAULT_COUPON_CODE}
              </span>
            </div>
            
            <button
              onClick={handleCopyCode}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#FE5905] to-orange-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:brightness-110 active:scale-95 sm:text-sm"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-200" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-2 text-center text-[11px] text-slate-400">
            Click any plan referral link below, then paste this code at checkout for maximum price reduction.
          </p>
        </div>

        {/* Key Quick Benefits Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Mail className="h-5 w-5 shrink-0 text-emerald-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">100 Free Emails</div>
              <div className="text-[11px] text-slate-400">Per domain included</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Globe className="h-5 w-5 shrink-0 text-blue-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Free Domain (.com/.in)</div>
              <div className="text-[11px] text-slate-400">Worth ₹800+ FREE</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <Clock className="h-5 w-5 shrink-0 text-amber-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">Free 15-Min Dev Call</div>
              <div className="text-[11px] text-slate-400">DNS &amp; Email Guidance</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-purple-400" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">30-Day Money Back</div>
              <div className="text-[11px] text-slate-400">100% Risk Free</div>
            </div>
          </div>
        </div>

        {/* Direct CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#plans-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FE5905] to-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:brightness-110 active:scale-95"
          >
            <span>Browse All 11 Verified Deals</span>
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            onClick={() => onOpenBooking("Choose Hosting Plan")}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-950/40 px-6 py-3.5 text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-900/40 active:scale-95"
          >
            <Zap className="h-4 w-4 text-emerald-400" />
            <span>Not Sure? Talk to a Developer (Free)</span>
          </button>
        </div>

      </div>
    </section>
  );
}
