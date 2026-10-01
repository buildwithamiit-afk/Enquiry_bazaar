"use client";

import React, { useState, useId, useRef, useEffect } from "react";
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
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function GMBRatingCalculator() {
  const currentRatingInputId = useId();
  const currentReviewsInputId = useId();
  const targetRatingInputId = useId();
  const reviewPaceInputId = useId();
  const predictReviewsInputId = useId();

  const [activeTab, setActiveTab] = useState<"needed" | "predict">("needed");
  
  const [currentRating, setCurrentRating] = useState<number | "">(3.4);
  const [currentReviews, setCurrentReviews] = useState<number | "">(25);
  
  // Tab 1 state
  const [targetRating, setTargetRating] = useState<number | "">(4.9);
  const [weeklyPace, setWeeklyPace] = useState<number>(3);
  
  // Tab 2 state
  const [predictReviews, setPredictReviews] = useState<number | "">(50);

  const [copied, setCopied] = useState<boolean>(false);
  const [isBadReviewOpen, setIsBadReviewOpen] = useState<boolean>(false);

  // Result section ref to scroll to
  const resultRef = useRef<HTMLDivElement>(null);

  // Sanitized numerical inputs
  const safeCurrentRating = Math.min(Math.max(Number(currentRating) || 1.0, 1.0), 5.0);
  const safeCurrentReviews = Math.max(Number(currentReviews) || 1, 1);
  const safeTargetRating = Math.min(Math.max(Number(targetRating) || 1.1, 1.1), 4.95);
  const safePredictReviews = Math.max(Number(predictReviews) || 0, 0);

  // Calculation Core Formula:
  // X = [N_curr * (R_target - R_curr)] / (5 - R_target)
  const calculateReviewsNeeded = (currRating: number, currCount: number, target: number) => {
    if (target <= currRating) return 0;
    const effectiveTarget = Math.min(target, 4.95); // Ensure it doesn't try to calculate exactly 5.0 if impossible easily
    
    // Use precision-rounded numerators and denominators to eliminate IEEE 754 floating point issues
    const numerator = Math.round(currCount * (effectiveTarget - currRating) * 1000000) / 1000000;
    const denominator = Math.round((5 - effectiveTarget) * 1000000) / 1000000;
    
    if (denominator <= 0) return 0;

    const rawNeeded = numerator / denominator;
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
  const extraNeededAfterBad =
    calculateReviewsNeeded(Number(ratingAfterOneStar), safeCurrentReviews + 1, safeTargetRating) -
    needed5StarReviews;

  // Milestone stepping stones
  const buildMilestones = () => {
    const targets = [4.0, 4.5, 4.7, 4.8, 4.9];
    let milestonesList = [];
    
    // Add current state
    milestonesList.push({
      target: safeCurrentRating,
      label: "Current",
      needed: 0,
      alreadyReached: true,
      total: safeCurrentReviews
    });
    
    for (const t of targets) {
      if (t > safeCurrentRating) {
        const needed = calculateReviewsNeeded(safeCurrentRating, safeCurrentReviews, t);
        milestonesList.push({
          target: t,
          label: "Rating Milestone",
          needed: needed,
          alreadyReached: false,
          total: safeCurrentReviews + needed
        });
      }
    }
    return milestonesList;
  };
  const milestones = buildMilestones();

  // Predict Rating Calculation
  const predictedRating = (
    (safeCurrentRating * safeCurrentReviews + 5 * safePredictReviews) /
    (safeCurrentReviews + safePredictReviews)
  ).toFixed(2);

  const handleCopySummary = () => {
    const summaryText = `Google Review Goal Summary:
• Current Rating: ${safeCurrentRating} ⭐ (${safeCurrentReviews} reviews)
• Target Rating: ${safeTargetRating} ⭐
• Additional 5-Star Reviews Needed: ${needed5StarReviews}
• Projected Timeline (${weeklyPace} reviews/week): ~${totalMonths} months
Calculate yours free at: https://enquirybazaar.in/tools/gmb-rating-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };
  
  const handleCalculateClick = () => {
    if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-sm">
      
      {/* Tabs */}
      <div className="flex p-1 mb-8 bg-slate-100 rounded-xl max-w-md mx-auto">
        <button
          onClick={() => setActiveTab("needed")}
          className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === "needed" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
        >
          Reviews Needed
        </button>
        <button
          onClick={() => setActiveTab("predict")}
          className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${activeTab === "predict" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
        >
          Predict Rating
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Interactive Inputs */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-5">
            {/* Input 1: Current Rating */}
            <div>
              <label htmlFor={currentRatingInputId} className="block text-sm font-bold text-slate-900 mb-2">
                Current Google Rating
              </label>
              <div className="relative">
                <input
                  id={currentRatingInputId}
                  type="number"
                  step="0.1"
                  min="1.0"
                  max="5.0"
                  value={currentRating}
                  onChange={(e) => setCurrentRating(e.target.value === "" ? "" : parseFloat(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20 pr-10"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">⭐</span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {[3.0, 3.4, 3.8, 4.2, 4.4].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCurrentRating(preset)}
                    className={`rounded-md px-3 py-1 text-sm font-medium transition ${
                      currentRating === preset
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Total Google Reviews */}
            <div>
              <label htmlFor={currentReviewsInputId} className="block text-sm font-bold text-slate-900 mb-2">
                Total Google Reviews
              </label>
              <input
                id={currentReviewsInputId}
                type="number"
                min="1"
                value={currentReviews}
                onChange={(e) => setCurrentReviews(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20"
              />
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {[10, 25, 50, 100, 250, 500].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setCurrentReviews(count)}
                    className={`rounded-md px-3 py-1 text-sm font-medium transition ${
                      currentReviews === count
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "needed" && (
              <>
                {/* Input 3: Target Rating */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                     <label htmlFor={targetRatingInputId} className="block text-sm font-bold text-slate-900">
                        Target Rating
                     </label>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[4.5, 4.7, 4.8, 4.9].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setTargetRating(val)}
                        className={`flex items-center justify-center rounded-xl border py-3 text-sm font-bold transition-all ${
                          targetRating === val
                            ? "border-[#FE5905] bg-[#FE5905] text-white ring-2 ring-orange-500/30"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        {val} ⭐
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-slate-600">Custom target:</span>
                    <input
                      id={targetRatingInputId}
                      type="number"
                      step="0.1"
                      min="1.1"
                      max="4.95"
                      value={targetRating}
                      onChange={(e) => setTargetRating(e.target.value === "" ? "" : parseFloat(e.target.value))}
                      className="w-24 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                    <span className="text-xs text-slate-400">Max: 4.95</span>
                  </div>
                </div>

                <button
                    onClick={handleCalculateClick}
                    className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 active:scale-95 lg:hidden"
                >
                    Calculate Reviews Needed
                </button>
              </>
            )}

            {activeTab === "predict" && (
                <div>
                    <label htmlFor={predictReviewsInputId} className="block text-sm font-bold text-slate-900 mb-2">
                        How many new 5-star reviews could you get?
                    </label>
                    <input
                        id={predictReviewsInputId}
                        type="number"
                        min="1"
                        value={predictReviews}
                        onChange={(e) => setPredictReviews(e.target.value === "" ? "" : parseInt(e.target.value, 10))}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    />
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {[10, 25, 50, 100].map((count) => (
                        <button
                            key={count}
                            type="button"
                            onClick={() => setPredictReviews(count)}
                            className={`rounded-md px-3 py-1 text-sm font-medium transition ${
                                predictReviews === count
                                ? "bg-slate-900 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                        >
                            +{count}
                        </button>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>

        {/* Right Column: Results */}
        <div ref={resultRef} className="lg:col-span-7 space-y-6 lg:pl-8 lg:border-l lg:border-slate-100">
          
          {activeTab === "needed" && (
              <>
              <div className="text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-2">To reach {safeTargetRating} ⭐</h3>
                <p className="text-slate-600 font-medium mb-6">You need approximately</p>
                
                <div className="inline-block px-12 py-8 bg-slate-50 border border-slate-100 rounded-3xl mb-8">
                    <div className="text-7xl font-black text-[#FE5905] mb-2 tracking-tight">
                        {safeTargetRating <= safeCurrentRating ? "0" : needed5StarReviews.toLocaleString("en-IN")}
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                        additional 5-star reviews
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium">
                    <div className="px-4 py-2 bg-slate-50 rounded-lg text-slate-600 text-center">
                        Current: <span className="font-bold text-slate-900">{safeCurrentRating} ⭐</span><br className="sm:hidden" /> <span className="hidden sm:inline">·</span> {safeCurrentReviews} Total Reviews
                    </div>
                    <div className="text-slate-300 rotate-90 sm:rotate-0">→</div>
                    <div className="px-4 py-2 bg-[#FE5905]/10 text-[#FE5905] rounded-lg text-center">
                        Target: <span className="font-bold">{safeTargetRating} ⭐</span><br className="sm:hidden" /> <span className="hidden sm:inline">·</span> {newTotalReviews} Total Reviews
                    </div>
                </div>

                <p className="mt-6 text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
                    This is a mathematical estimate based on the rating and review count you entered. Actual Google ratings may differ because Google's displayed rating and update timing can vary.
                </p>
              </div>

              {safeTargetRating > safeCurrentRating && (
                <div className="mt-8 pt-8 border-t border-slate-100">
                    <h4 className="text-base font-bold text-slate-900 mb-4 text-center">How long could it take?</h4>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                        <div className="flex gap-2">
                            {[1, 3, 5, 10].map(pace => (
                                <button
                                    key={pace}
                                    onClick={() => setWeeklyPace(pace)}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                        weeklyPace === pace ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                    }`}
                                >
                                    {pace}/wk
                                </button>
                            ))}
                        </div>
                        <div className="text-slate-400 hidden sm:block">→</div>
                        <div className="text-base font-bold text-[#FE5905]">
                            approximately {totalMonths} months
                        </div>
                    </div>
                </div>
              )}
              
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="text-base font-bold text-slate-900 mb-6">Your Google Rating Roadmap</h4>
                <div className="space-y-0 relative">
                    <div className="absolute top-4 bottom-4 left-4 w-px bg-slate-200" />
                    {milestones.map((m, idx) => (
                        <div key={idx} className="relative flex items-center gap-4 py-3 pl-10">
                            <div className={`absolute left-3 w-2.5 h-2.5 rounded-full -translate-x-1/2 ${m.alreadyReached ? "bg-emerald-500" : "bg-slate-300"}`} />
                            
                            <div className="flex-1 flex justify-between items-center bg-slate-50 rounded-xl px-4 py-3">
                                <span className="font-bold text-slate-900">
                                    {m.target.toFixed(1)} ⭐ {m.label === "Current" && <span className="text-slate-400 text-sm font-normal ml-1">(Current)</span>}
                                </span>
                                <span className="text-sm font-medium text-slate-600">
                                    {m.needed > 0 ? `+${m.needed} reviews` : `${m.total} reviews`}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
              </div>

              {/* 1-Star Review Risk Warning */}
              <div className="mt-8 border border-slate-200 rounded-2xl overflow-hidden">
                <button 
                    onClick={() => setIsBadReviewOpen(!isBadReviewOpen)}
                    className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                >
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                        What happens if you receive a 1-star review?
                    </div>
                    {isBadReviewOpen ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                </button>
                {isBadReviewOpen && (
                    <div className="p-4 bg-white border-t border-slate-100 text-sm text-slate-700">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
                                <div>Your current rating: <strong>{safeCurrentRating} ⭐</strong></div>
                            </div>
                            <div className="flex items-center gap-3 text-red-600">
                                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0"><AlertTriangle className="w-4 h-4" /></div>
                                <div>1 new 1-star review</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
                                <div>Estimated new rating: <strong>{ratingAfterOneStar} ⭐</strong></div>
                            </div>
                            {safeTargetRating > safeCurrentRating && (
                                <div className="flex items-center gap-3 text-[#FE5905]">
                                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0"><TrendingUp className="w-4 h-4" /></div>
                                    <div>You now need <strong>+{extraNeededAfterBad}</strong> additional 5-star reviews to recover to your {safeTargetRating} ⭐ target.</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
              </div>

              {/* Cross-Sell Card: Standee Generator & Growth Agency */}
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-orange-50 p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-black uppercase text-white">
                      Next Step
                    </span>
                    <h4 className="mt-2 text-sm font-bold text-slate-900">
                      Collect These {safeTargetRating <= safeCurrentRating ? "0" : needed5StarReviews.toLocaleString("en-IN")} Reviews in Real Life
                    </h4>
                    <p className="mt-1 text-xs text-slate-600">
                      Generate your custom printable Google Review QR Standee for your dispatch boxes or front desk.
                    </p>
                  </div>
                  <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-md">
                    <QrCode className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/tools/google-review-qr-generator"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#FE5905] px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600"
                  >
                    <span>Make Free QR Standee</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20used%20your%20Google%20Rating%20Calculator.%20I%20need%20help%20optimizing%20my%20Google%20Business%20Profile%20and%20reputation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600/30 bg-emerald-600/10 px-4 py-2.5 text-xs font-bold text-emerald-800 transition hover:bg-emerald-600 hover:text-white"
                  >
                    <WhatsAppIcon className="h-3.5 w-3.5" />
                    <span>Talk to Growth Expert</span>
                  </a>
                </div>
              </div>
              </>
          )}

          {activeTab === "predict" && (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Estimated New Rating</h3>
                <p className="text-slate-600 font-medium mb-8">If you receive {safePredictReviews} new 5-star reviews</p>
                
                <div className="inline-block px-16 py-10 bg-slate-50 border border-slate-100 rounded-3xl mb-8">
                    <div className="text-7xl font-black text-[#FE5905] mb-2 tracking-tight">
                        {predictedRating} <span className="text-5xl">⭐</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
                    <div className="px-4 py-3 bg-slate-50 rounded-lg text-slate-600">
                        Current: <span className="font-bold text-slate-900">{safeCurrentRating} ⭐</span> · {safeCurrentReviews} reviews
                    </div>
                    <div className="text-slate-300">plus</div>
                    <div className="px-4 py-3 bg-emerald-50 text-emerald-700 rounded-lg">
                        <span className="font-bold">+{safePredictReviews}</span> 5-star reviews
                    </div>
                </div>
              </div>
          )}
        </div>
      </div>
    </div>
  );
}
