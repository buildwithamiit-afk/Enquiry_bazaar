"use client";

import React, { useState } from "react";
import { Mail, Check, X, ArrowRight, Sparkles, DollarSign, ShieldCheck } from "lucide-react";
import { emailComparisonData, DEFAULT_COUPON_CODE } from "@/lib/hostingData";

interface EmailVsGoogleSavingsProps {
  onOpenBooking: (issue?: string) => void;
}

export function EmailVsGoogleSavings({ onOpenBooking }: EmailVsGoogleSavingsProps) {
  const [usersCount, setUsersCount] = useState<number>(5);

  const googleAnnualCost = usersCount * 650 * 12; // ₹650 per user per month
  const hostingerAnnualCost = 149 * 12; // ₹149 per month total for all up to 100 users
  const totalSavings = googleAnnualCost - hostingerAnnualCost;

  return (
    <section className="relative overflow-hidden bg-slate-900 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold text-emerald-300">
            <Mail className="h-3.5 w-3.5 text-emerald-400" />
            <span>Seeking Discount on Web Hosting &amp; Business Email?</span>
          </div>

          <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
            Why Pay Google Workspace When Hostinger Gives{" "}
            <span className="text-[#FE5905]">100 Free Emails</span>?
          </h2>

          <p className="mt-3 text-sm text-slate-300 sm:text-base">
            Google Workspace and Microsoft 365 charge per individual mailbox. With Hostinger's discounted Web Hosting, you get <strong>complete website hosting + up to 100 domain emails included free</strong>.
          </p>
        </div>

        {/* Live Savings Calculator Slider - Mobile First */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-7">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Number of Team Mailboxes
              </span>
              <p className="text-sm font-medium text-slate-300">
                (e.g., info@, sales@, hr@, support@)
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {[2, 5, 10, 20].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setUsersCount(num)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                    usersCount === num
                      ? "bg-[#FE5905] text-white shadow-md"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {num} Users
                </button>
              ))}
            </div>
          </div>

          {/* Cost Comparison Cards */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Google Workspace Box */}
            <div className="rounded-xl border border-red-500/20 bg-red-950/20 p-4 text-center sm:text-left">
              <div className="text-xs font-bold uppercase text-red-400">
                Google Workspace (₹650/user/mo)
              </div>
              <div className="mt-2 text-2xl font-black text-white sm:text-3xl">
                ₹{googleAnnualCost.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-medium text-slate-400">/year</span>
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Only email inboxes. Website hosting costs extra.
              </p>
            </div>

            {/* Hostinger Box */}
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/30 p-4 text-center sm:text-left">
              <div className="text-xs font-bold uppercase text-emerald-400">
                Hostinger Web Hosting + Free Email
              </div>
              <div className="mt-2 text-2xl font-black text-emerald-300 sm:text-3xl">
                ₹{hostingerAnnualCost.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-medium text-slate-300">/year</span>
              </div>
              <p className="mt-1 text-[11px] text-emerald-200">
                Includes website hosting + 100 free mailboxes + free domain!
              </p>
            </div>

          </div>

          {/* Big Savings Highlight */}
          <div className="mt-5 flex flex-col items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 p-4 border border-emerald-500/30 text-center sm:flex-row sm:text-left">
            <div>
              <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Your Annual Savings with Hostinger
              </div>
              <div className="text-xl font-extrabold text-white sm:text-2xl">
                Save ₹{totalSavings.toLocaleString("en-IN")} ($
                {Math.round(totalSavings / 85)}) Every Year
              </div>
            </div>

            <a
              href="https://www.hostinger.com/web-hosting?REFERRALCODE=ENQUIRYBAZAAR"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#FE5905] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition-all active:scale-95"
            >
              <span>Claim Web + Email Deal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        {/* Comparison Table for SEO & AI Crawlers */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-white/10 bg-white/5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Feature</th>
                  <th className="py-3.5 px-4 text-emerald-400">Hostinger (With Referral)</th>
                  <th className="py-3.5 px-4 text-slate-400">Google Workspace</th>
                  <th className="py-3.5 px-4 text-amber-400">Your Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {emailComparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 px-4 sm:px-6 font-medium text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 font-semibold text-emerald-300">{row.hostinger}</td>
                    <td className="py-3.5 px-4 text-slate-400">{row.googleWorkspace}</td>
                    <td className="py-3.5 px-4 font-semibold text-amber-300">{row.advantage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Free Setup Help Banner */}
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs text-slate-400 sm:text-sm">
            Confused about how to point DNS MX records or connect Outlook/iPhone?
          </p>
          <button
            onClick={() => onOpenBooking("Business Email & DNS Setup")}
            type="button"
            className="mt-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
          >
            Book Free 15-Min DNS &amp; Email Setup Guidance with Our Developer &rarr;
          </button>
        </div>

      </div>
    </section>
  );
}
