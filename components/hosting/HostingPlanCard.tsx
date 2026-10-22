"use client";

import React, { useState } from "react";
import { Check, Copy, ExternalLink, Mail, ShieldAlert, Sparkles, MessageSquareCode } from "lucide-react";
import { HostingPlan } from "@/lib/hostingData";

interface HostingPlanCardProps {
  plan: HostingPlan;
  onOpenBooking: (planName: string) => void;
}

export function HostingPlanCard({ plan, onOpenBooking }: HostingPlanCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(plan.couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case "Trending":
        return "bg-rose-500/10 text-rose-600 border-rose-200";
      case "New":
        return "bg-emerald-500/10 text-emerald-700 border-emerald-200";
      case "Developer Choice":
        return "bg-indigo-500/10 text-indigo-700 border-indigo-200";
      case "Best Value":
        return "bg-amber-500/10 text-amber-700 border-amber-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#FE5905]/40 hover:shadow-xl sm:p-6">
      
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-2">
          {plan.badge && (
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide ${getBadgeStyle(
                plan.badge
              )}`}
            >
              {plan.badge}
            </span>
          )}
          
          <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-bold text-[#FE5905]">
            {plan.discountBadge}
          </span>
        </div>

        {/* Plan Header */}
        <h3 className="mt-3 text-xl font-extrabold tracking-tight text-[#001A55]">
          {plan.name}
        </h3>
        
        <p className="text-xs font-medium text-slate-500 mt-0.5">
          {plan.subtitle}
        </p>

        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          {plan.description}
        </p>

        {/* Pricing Block */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-black text-slate-900 sm:text-3xl">
                {plan.startingPriceINR}
              </span>
              <span className="ml-1 text-xs font-semibold text-slate-400">
                / {plan.startingPriceUSD}
              </span>
            </div>

            {plan.renewalPriceINR && (
              <span className="text-[11px] text-slate-400">
                Renews at {plan.renewalPriceINR}
              </span>
            )}
          </div>

          {/* Email Benefit Highlight */}
          {plan.highlightEmail && (
            <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-800 border border-emerald-100/80">
              <Mail className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>{plan.freeEmail}</span>
            </div>
          )}
        </div>

        {/* Core Features List */}
        <div className="mt-5 space-y-2.5">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            What's Included:
          </p>
          <ul className="space-y-2 text-xs text-slate-700">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-4 w-4 shrink-0 text-emerald-600 mt-0.5" />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        
        {/* Copy Coupon Row */}
        <div className="mb-3 flex items-center justify-between rounded-lg bg-slate-50 px-2.5 py-1.5 border border-slate-200/60 text-xs">
          <span className="text-slate-500 font-medium">Checkout Code:</span>
          <button
            onClick={handleCopy}
            type="button"
            className="inline-flex items-center gap-1 font-mono font-bold text-[#FE5905] hover:text-orange-700 active:scale-95 transition-all"
            title="Click to copy coupon code"
          >
            <span>{plan.couponCode}</span>
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-slate-400" />
            )}
          </button>
        </div>

        {/* Primary CTA - Opens Referral Link */}
        <a
          href={plan.referralLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#001A55] px-4 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#FE5905] active:scale-95"
        >
          <span>Claim Deal &amp; Go to Plan</span>
          <ExternalLink className="h-4 w-4" />
        </a>

        {/* Secondary Free Developer Help CTA */}
        <button
          onClick={() => onOpenBooking(`Plan Advice: ${plan.name}`)}
          type="button"
          className="mt-2 w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-center text-xs font-semibold text-slate-500 hover:text-emerald-700 transition-colors"
        >
          <MessageSquareCode className="h-3.5 w-3.5 text-emerald-600" />
          <span>Need help deciding? Talk to a Developer Free</span>
        </button>

      </div>

    </div>
  );
}
