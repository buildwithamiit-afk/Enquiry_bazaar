"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import {
  Calculator,
  Star,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Share2,
  Copy,
  QrCode,
  ArrowRight,
  Info,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function GMBRatingCalculator() {
  const currentRatingInputId = useId();
  const currentReviewsInputId = useId();
  const targetRatingInputId = useId();
  const reviewPaceInputId = useId();

  const [currentRating, setCurrentRating] = useState<number>(3.4);
  const [currentReviews, setCurrentReviews] = useState<number>(25);
  const [targetRating, setTargetRating] = useState<number>(4.9);
  const [weeklyPace, setWeeklyPace] = useState<number>(3);
  const [copied, setCopied] = useState<boolean>(false);

  // Sanitized numerical inputs
  const safeCurrentRating = Math.min(Math.max(Number(currentRating) || 1.0, 1.0), 4.99);
  const safeCurrentReviews = Math.max(Number(currentReviews) || 1, 1);
  const safeTargetRating = Math.min(Math.max(Number(targetRating) || 1.1, 1.1), 4.95);

  // Calculation Core Formula:
  // (R_curr * N_curr + 5 * X) / (N_curr + X) = R_target
  // X = [N_curr * (R_target - R_curr)] / (5 - R_target)
  const calculateReviewsNeeded = (currRating: number, currCount: number, target: number) => {
    if (target <= currRating) return 0;
    const effectiveTarget = Math.min(target, 4.95);
    
    // Use precision-rounded numerators and denominators to eliminate IEEE 754 floating point issues
    const numerator = Math.round(currCount * (effectiveTarget - currRating) * 1000000) / 1000000;
    const denominator = Math.round((5 - effectiveTarget) * 1000000) / 1000000;
    const rawNeeded = numerator / denominator;
    
    // Round to 5 decimal places before Math.ceil so 375.00000000000136 becomes 375
    return Math.max(0, Math.ceil(Math.round(rawNeeded * 100000) / 100000));
  };

  const needed5StarReviews = calculateReviewsNeeded(safeCurrentRating, safeCurrentReviews, safeTargetRating);
  const newTotalReviews = safeCurrentReviews + needed5StarReviews;

  // Timeline calculation
  const totalWeeks = weeklyPace > 0 ? Math.ceil(needed5StarReviews / weeklyPace) : 0;
  const totalMonths = (totalWeeks / 4.33).toFixed(1);

  // 1-Star Review Impact Simulation:
  const ratingAfterOneStar = (
    (safeCurrentRating * safeCurrentReviews + 1) /
    (safeCurrentReviews + 1)
  ).toFixed(2);
  const dropAmount = (safeCurrentRating - Number(ratingAfterOneStar)).toFixed(2);
  const extraNeededAfterBad =
    calculateReviewsNeeded(Number(ratingAfterOneStar), safeCurrentReviews + 1, safeTargetRating) -
    needed5StarReviews;

  // Milestone stepping stones
  const milestones = [
    { target: 4.0, label: "4.0 ⭐ Trust Threshold" },
    { target: 4.5, label: "4.5 ⭐ Google 3-Pack Elite" },
    { target: 4.8, label: "4.8 ⭐ Market Leader" },
    { target: 4.9, label: "4.9 ⭐ Near Perfection" },
  ].map((m) => {
    const needed = calculateReviewsNeeded(safeCurrentRating, safeCurrentReviews, m.target);
    const alreadyReached = safeCurrentRating >= m.target;
    return {
      ...m,
      needed,
      alreadyReached,
    };
  });

  const handleCopySummary = () => {
    const summaryText = `Google Review Goal Summary (EnquiryBazaar.in):
• Current Rating: ${safeCurrentRating} ⭐ (${safeCurrentReviews} reviews)
• Target Rating: ${safeTargetRating} ⭐
• 5-Star Reviews Needed: ${needed5StarReviews} reviews
• Final Total Reviews: ${newTotalReviews}
• Projected Timeline (${weeklyPace} reviews/week): ~${totalWeeks} weeks (${totalMonths} months)
Calculate yours free at: https://enquirybazaar.in/tools/gmb-rating-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="relative isolate w-full max-w-full rounded-3xl border border-orange-100 bg-white p-3.5 shadow-xl sm:p-6 lg:p-8">
      {/* Main Grid: Form Inputs (Left) & Live Results Dashboard (Right) */}
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8 items-start">
        
        {/* Left Column: Interactive Inputs */}
        <div className="space-y-5 lg:col-span-6">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-6 shadow-xs">
            <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905]">
                <Calculator className="h-4 w-4" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                1. Enter Profile Stats
              </h3>
            </div>

            {/* Input 1: Current Rating */}
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label htmlFor={currentRatingInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Current Google Rating
                </label>
                <span className="flex items-center gap-1 text-sm font-black text-amber-500">
                  {safeCurrentRating.toFixed(1)} <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </span>
              </div>
              <div className="mt-2 flex items-center gap-3">
                <input
                  id={currentRatingInputId}
                  type="number"
                  step="0.1"
                  min="1.0"
                  max="4.9"
                  value={currentRating}
                  onChange={(e) => setCurrentRating(parseFloat(e.target.value) || 1.0)}
                  className="w-24 sm:w-28 rounded-xl border border-slate-300 bg-white px-2 sm:px-3 py-2 text-center text-lg font-black text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-xs"
                />
                <input
                  type="range"
                  min="1.0"
                  max="4.9"
                  step="0.1"
                  value={currentRating}
                  onChange={(e) => setCurrentRating(parseFloat(e.target.value))}
                  className="h-2 flex-1 cursor-pointer accent-[#FE5905]"
                />
              </div>
              {/* Quick Presets */}
              <div className="mt-2 flex flex-wrap items-center gap-1 text-xs">
                <span className="text-[11px] text-slate-400 mr-1">Presets:</span>
                {[3.0, 3.4, 3.8, 4.2, 4.4].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCurrentRating(preset)}
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold transition cursor-pointer ${
                      currentRating === preset
                        ? "bg-[#FE5905] text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {preset} ⭐
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Current Number of Reviews */}
            <div className="mt-5 border-t border-slate-200/60 pt-4">
              <div className="flex items-center justify-between">
                <label htmlFor={currentReviewsInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Total Reviews Today
                </label>
                <span className="text-xs font-bold text-slate-600">
                  {safeCurrentReviews} Reviews
                </span>
              </div>
              <input
                id={currentReviewsInputId}
                type="number"
                min="1"
                max="50000"
                value={currentReviews}
                onChange={(e) => setCurrentReviews(parseInt(e.target.value, 10) || 1)}
                placeholder="e.g. 25"
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-base font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20 shadow-xs"
              />
              <div className="mt-2 flex flex-wrap gap-1 text-xs">
                <span className="text-[11px] text-slate-400 mr-1">Presets:</span>
                {[10, 25, 50, 100, 250].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setCurrentReviews(count)}
                    className={`rounded-md px-2 py-0.5 text-xs font-semibold transition cursor-pointer ${
                      currentReviews === count
                        ? "bg-[#FE5905] text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Target Rating */}
            <div className="mt-5 border-t border-slate-200/60 pt-4">
              <div className="flex items-center justify-between">
                <label htmlFor={targetRatingInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Target Rating Goal
                </label>
                <span className="text-xs font-extrabold text-emerald-700">
                  Goal: {safeTargetRating.toFixed(1)} ⭐
                </span>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-1.5 sm:gap-2">
                {[4.5, 4.7, 4.8, 4.9].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setTargetRating(val)}
                    className={`flex flex-col items-center justify-center rounded-xl border py-2 text-xs font-extrabold transition-all cursor-pointer ${
                      targetRating === val
                        ? "border-[#FE5905] bg-[#FE5905] text-white shadow-sm ring-2 ring-orange-500/30"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-sm font-black">{val}</span>
                    <span className="text-[10px] opacity-80">Stars</span>
                  </button>
                ))}
              </div>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="text-xs text-slate-500">Custom Target:</span>
                <input
                  id={targetRatingInputId}
                  type="number"
                  step="0.05"
                  min="1.1"
                  max="4.95"
                  value={targetRating}
                  onChange={(e) => setTargetRating(parseFloat(e.target.value) || 4.5)}
                  className="w-20 rounded-lg border border-slate-300 bg-white px-2 py-1 text-xs font-bold text-slate-800 focus:border-[#FE5905] focus:outline-none shadow-xs"
                />
                <span className="text-[11px] text-slate-400">
                  (Max: 4.95 ⭐)
                </span>
              </div>
            </div>

            {/* Input 4: Expected Review Pace */}
            <div className="mt-5 border-t border-slate-200/60 pt-4">
              <div className="flex items-center justify-between">
                <label htmlFor={reviewPaceInputId} className="text-xs font-bold text-slate-700">
                  Weekly Collection Speed
                </label>
                <span className="text-xs font-black text-[#FE5905]">
                  {weeklyPace} reviews / wk
                </span>
              </div>
              <input
                id={reviewPaceInputId}
                type="range"
                min="1"
                max="20"
                value={weeklyPace}
                onChange={(e) => setWeeklyPace(parseInt(e.target.value, 10))}
                className="mt-2 h-2 w-full cursor-pointer accent-[#FE5905]"
              />
              <div className="mt-1 flex justify-between text-[11px] text-slate-400">
                <span>1/wk (Natural)</span>
                <span>5/wk (Active)</span>
                <span>15+/wk (Aggressive)</span>
              </div>
            </div>
          </div>

          {/* Educational Note Box */}
          <div className="flex items-start gap-2.5 rounded-2xl border border-blue-200 bg-blue-50/70 p-3.5 text-xs text-blue-900">
            <Info className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Why 4.9 and not 5.0?</strong> Once any profile gets a single non-5-star rating, reaching an exact 5.00 average requires infinite reviews. However, Google visually rounds ratings—scores above <strong>4.92+</strong> are displayed as full 5 stars on Google Search and Maps!
            </p>
          </div>
        </div>

        {/* Right Column: Live Results Dashboard (Sticky on Desktop) */}
        <div id="results-dashboard" className="space-y-5 lg:col-span-6 lg:sticky lg:top-24">
          
          {/* Main Hero Metric Card with Simple & Professional B2B UI */}
          <div className="rounded-2xl border-2 border-orange-500/80 bg-white p-5 sm:p-6 shadow-md shadow-orange-500/5">
            
            {/* Header: Title & Verified Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3.5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100/70 text-[#FE5905]">
                  <Calculator className="h-4 w-4" />
                </div>
                <h4 className="text-sm font-bold tracking-tight text-slate-900 uppercase">
                  Calculation Result
                </h4>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Mathematically Verified
              </span>
            </div>

            {safeTargetRating <= safeCurrentRating ? (
              <div className="mt-5 text-center py-6">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="mt-3 text-base font-bold text-slate-900">Target Already Achieved!</h4>
                <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
                  Your current rating of {safeCurrentRating} is already at or above your target of {safeTargetRating}. Set a higher target to calculate new reviews.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-4">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    To raise your rating from <strong className="text-slate-900 font-bold">{safeCurrentRating} ⭐</strong> to <strong className="text-emerald-700 font-bold">{safeTargetRating} ⭐</strong>, you need:
                  </p>
                  
                  {/* Clean, Impactful Hero Metric Box */}
                  <div className="mt-4 rounded-2xl bg-gradient-to-b from-orange-50/80 to-amber-50/30 border border-orange-200 p-5 sm:p-6 text-center shadow-xs">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-orange-200/60 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-orange-800">
                      You Need Exactly
                    </span>

                    <div className="my-2 flex items-center justify-center">
                      <span className="text-6xl sm:text-7xl font-black tracking-tight text-[#FE5905]">
                        {needed5StarReviews.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-1 text-amber-400 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base font-extrabold text-slate-900">
                      New 5-Star Reviews in a Row
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      (Must be continuous with 0 negative reviews in between)
                    </p>
                  </div>
                </div>

                {/* Sub-Metrics Grid */}
                <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:gap-3 text-left">
                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-3.5">
                    <span className="text-[11.5px] font-medium text-slate-500 flex items-center gap-1">
                      <TrendingUp className="h-3.5 w-3.5 text-emerald-600 shrink-0" /> New Total Reviews
                    </span>
                    <p className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                      {newTotalReviews.toLocaleString("en-IN")}{" "}
                      <span className="text-xs font-semibold text-emerald-600">
                        (+{needed5StarReviews})
                      </span>
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-3.5">
                    <span className="text-[11.5px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-amber-600 shrink-0" /> Projected Time
                    </span>
                    <p className="mt-1 text-lg sm:text-xl font-bold text-slate-900">
                      ~{totalMonths} Mo{" "}
                      <span className="text-xs font-normal text-slate-500">
                        ({totalWeeks} wks)
                      </span>
                    </p>
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={handleCopySummary}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition hover:bg-slate-800 active:scale-95 cursor-pointer"
              >
                {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Summary Report"}</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Google Review Goal: To get my Google Rating from ${safeCurrentRating} ⭐ to ${safeTargetRating} ⭐, I need ${needed5StarReviews} new 5-star reviews! Calculated using EnquiryBazaar: https://enquirybazaar.in/tools/gmb-rating-calculator`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100 active:scale-95"
              >
                <Share2 className="h-3.5 w-3.5 text-emerald-700" />
                <span>Share</span>
              </a>
            </div>
          </div>

          {/* Stepping Stones / Milestones Roadmap */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-[#FE5905]" />
              Rating Milestone Roadmap
            </h4>
            <p className="mt-1 text-xs text-slate-500">
              Reviews needed to unlock each tier from your current {safeCurrentRating} ⭐ score:
            </p>

            <div className="mt-3 space-y-2">
              {milestones.map((m) => (
                <div
                  key={m.target}
                  className={`flex items-center justify-between rounded-xl border p-2.5 text-xs transition ${
                    m.alreadyReached
                      ? "border-emerald-200 bg-emerald-50/60 text-emerald-800"
                      : m.target === safeTargetRating
                      ? "border-orange-300 bg-orange-50/90 text-orange-950 font-bold ring-1 ring-[#FE5905]"
                      : "border-slate-100 bg-slate-50 text-slate-700"
                  }`}
                >
                  <span className="font-semibold">{m.label}</span>
                  {m.alreadyReached ? (
                    <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Done
                    </span>
                  ) : (
                    <span className="font-bold text-slate-900">
                      +{m.needed} <span className="font-normal text-slate-500">reviews</span>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 1-Star Review Risk Warning */}
          <div className="rounded-2xl border border-red-200 bg-red-50/80 p-4 text-xs text-red-950">
            <div className="flex items-center gap-2 font-bold text-red-800">
              <AlertTriangle className="h-4 w-4 text-red-600 shrink-0" />
              <span>Risk: What if you get 1 bad (1-star) review?</span>
            </div>
            <p className="mt-1.5 text-slate-700 leading-relaxed">
              If your business gets just <strong>one 1-star review</strong>, your rating immediately drops from <strong className="text-slate-900">{safeCurrentRating}</strong> to <strong className="text-red-700">{ratingAfterOneStar}</strong> (-{dropAmount} stars). You will then need <strong className="text-red-700">+{extraNeededAfterBad} additional 5-star reviews</strong> just to recover!
            </p>
          </div>

          {/* Cross-Sell Card: Standee Generator & Growth Agency */}
          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-orange-50 p-4 sm:p-5 shadow-xs">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                  Next Step
                </span>
                <h4 className="mt-1.5 text-sm font-bold text-slate-900">
                  Collect These {needed5StarReviews} Reviews in Real Life
                </h4>
                <p className="mt-1 text-xs text-slate-600">
                  Generate your custom printable Google Review QR Standee for your dispatch boxes or front desk.
                </p>
              </div>
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
                <QrCode className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <Link
                href="/tools/google-review-qr-generator"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FE5905] px-3.5 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600"
              >
                <span>Make Free QR Standee</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <a
                href="https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20used%20your%20Google%20Rating%20Calculator.%20I%20need%20help%20optimizing%20my%20Google%20Business%20Profile%20and%20reputation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600/30 bg-emerald-600/10 px-3.5 py-2 text-xs font-bold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                <span>Talk to Growth Expert</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
