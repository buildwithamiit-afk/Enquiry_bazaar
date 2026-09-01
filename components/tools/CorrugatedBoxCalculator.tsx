"use client";

import React, { useState, useId } from "react";
import {
  Box,
  Layers,
  Scale,
  Calculator,
  CheckCircle2,
  Copy,
  Share2,
  Info,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CorrugatedBoxCalculator() {
  const lengthId = useId();
  const widthId = useId();
  const heightId = useId();
  const topGsmId = useId();
  const fluteGsmId = useId();
  const bottomGsmId = useId();
  const paperRateId = useId();
  const conversionCostId = useId();
  const orderQtyId = useId();

  // Unit mode: "inches" | "mm"
  const [unitMode, setUnitMode] = useState<"inches" | "mm">("inches");

  // Box Dimensions (stored in selected unit)
  const [length, setLength] = useState<number>(12); // L
  const [width, setWidth] = useState<number>(10);   // W
  const [height, setHeight] = useState<number>(8);   // H

  // Ply: 3-Ply | 5-Ply | 7-Ply
  const [plyCount, setPlyCount] = useState<3 | 5 | 7>(3);

  // Paper GSM specifications
  const [topLinerGsm, setTopLinerGsm] = useState<number>(140);
  const [fluteGsm, setFluteGsm] = useState<number>(120);
  const [innerLinerGsm, setInnerLinerGsm] = useState<number>(120);
  const [flute2Gsm, setFlute2Gsm] = useState<number>(120); // for 5-ply & 7-ply
  const [middleLinerGsm, setMiddleLinerGsm] = useState<number>(120); // for 5-ply & 7-ply
  const [flute3Gsm, setFlute3Gsm] = useState<number>(120); // for 7-ply
  const [innerLiner3Gsm, setInnerLiner3Gsm] = useState<number>(120); // for 7-ply

  // Paper Burst Factor (BF)
  const [paperBf, setPaperBf] = useState<number>(18); // 16 BF, 18 BF, 22 BF, 28 BF

  // Commercial costs
  const [paperRatePerKg, setPaperRatePerKg] = useState<number>(42); // ₹/kg craft paper
  const [conversionCostPerBox, setConversionCostPerBox] = useState<number>(3.5); // Printing, glue, stitching, die cutting
  const [orderQty, setOrderQty] = useState<number>(1000);
  const [marginPercent, setMarginPercent] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  // Normalized Dimensions in Inches (1 inch = 25.4 mm)
  const lenInches = unitMode === "inches" ? Math.max(Number(length) || 1, 1) : (Number(length) || 25.4) / 25.4;
  const widInches = unitMode === "inches" ? Math.max(Number(width) || 1, 1) : (Number(width) || 25.4) / 25.4;
  const hgtInches = unitMode === "inches" ? Math.max(Number(height) || 1, 1) : (Number(height) || 25.4) / 25.4;

  // 1. Deckle Size (Width of Paper Roll in Inches):
  // Formula: Deckle = Width + Height + 1 inch allowance
  const deckleInches = widInches + hgtInches + 1;

  // 2. Cutting Length (Length of Sheet in Inches):
  // Formula: Cutting Length = 2 * (Length + Width) + 2 inches (joint flap allowance)
  const cuttingLengthInches = 2 * (lenInches + widInches) + 2;

  // 3. Sheet Area in Square Meters:
  // (Cutting Length in cm * Deckle in cm) / 10,000
  const cuttingLengthCm = cuttingLengthInches * 2.54;
  const deckleCm = deckleInches * 2.54;
  const sheetAreaSqM = (cuttingLengthCm * deckleCm) / 10000;

  // 4. Effective Fluting Take-up Factor:
  // B-Flute / C-Flute standard wave expansion = 1.4x
  const FLUTE_FACTOR = 1.4;

  // Total Substance GSM Calculation according to Ply Count
  let totalGsm = 0;
  if (plyCount === 3) {
    // 3-Ply: Top Liner (1x) + Fluting (1.4x) + Bottom Liner (1x)
    totalGsm = topLinerGsm + fluteGsm * FLUTE_FACTOR + innerLinerGsm;
  } else if (plyCount === 5) {
    // 5-Ply: Top Liner + Flute 1 (1.4x) + Middle Liner + Flute 2 (1.4x) + Inner Liner
    totalGsm =
      topLinerGsm +
      fluteGsm * FLUTE_FACTOR +
      middleLinerGsm +
      flute2Gsm * FLUTE_FACTOR +
      innerLinerGsm;
  } else {
    // 7-Ply: Top + Flute1 + Mid1 + Flute2 + Mid2 + Flute3 + Inner
    totalGsm =
      topLinerGsm +
      fluteGsm * FLUTE_FACTOR +
      middleLinerGsm +
      flute2Gsm * FLUTE_FACTOR +
      innerLiner3Gsm +
      flute3Gsm * FLUTE_FACTOR +
      innerLinerGsm;
  }

  // 5. Weight of the Box (Grams and Kilograms)
  // Weight in Grams = Area in Sq.M * Total GSM
  const boxWeightGrams = Math.round(sheetAreaSqM * totalGsm);
  const boxWeightKg = boxWeightGrams / 1000;

  // 6. Estimated Bursting Strength (BS in kg/cm²):
  // Formula: BS = (Sum of Liner GSMs * BF) / 1000
  const linerGsmSum =
    plyCount === 3
      ? topLinerGsm + innerLinerGsm
      : plyCount === 5
      ? topLinerGsm + middleLinerGsm + innerLinerGsm
      : topLinerGsm + middleLinerGsm + innerLiner3Gsm + innerLinerGsm;
  const estimatedBs = ((linerGsmSum * paperBf) / 1000).toFixed(2);

  // 7. Costing & Commercials:
  const rawPaperCostPerBox = boxWeightKg * paperRatePerKg;
  const totalCostPerBox = rawPaperCostPerBox + conversionCostPerBox;
  const profitAmount = totalCostPerBox * (marginPercent / 100);
  const sellingPricePerBox = totalCostPerBox + profitAmount;

  const totalOrderWeightKg = Math.round(boxWeightKg * orderQty);
  const totalOrderValue = Math.round(sellingPricePerBox * orderQty);

  const handleCopySpec = () => {
    const text = `Corrugated Box Technical Specification & Costing:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦 Dimensions: ${length} × ${width} × ${height} ${unitMode} (${lenInches.toFixed(1)}" × ${widInches.toFixed(1)}" × ${hgtInches.toFixed(1)}")
📑 Ply Type: ${plyCount}-Ply | Paper BF: ${paperBf} BF
📏 Sheet Size: ${cuttingLengthInches.toFixed(2)}" × ${deckleInches.toFixed(2)}" (${sheetAreaSqM.toFixed(3)} m²)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚖️ WEIGHT & STRENGTH METRICS:
• Calculated Total GSM: ${Math.round(totalGsm)} GSM (Flute Factor: 1.4x)
• Per-Box Weight: ${boxWeightGrams} Grams (~${boxWeightKg.toFixed(3)} Kg)
• Estimated Bursting Strength (BS): ${estimatedBs} kg/cm²
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 COMMERCIAL PRICING:
• Raw Paper Cost: ₹${rawPaperCostPerBox.toFixed(2)} / Box (@ ₹${paperRatePerKg}/kg)
• Conversion (Print, Glue, Dye): ₹${conversionCostPerBox.toFixed(2)} / Box
• Net Selling Price: ₹${sellingPricePerBox.toFixed(2)} / Box (+${marginPercent}% Margin)
• Total Batch for ${orderQty.toLocaleString("en-IN")} pcs: ₹${totalOrderValue.toLocaleString("en-IN")} (~${totalOrderWeightKg} Kg Paper)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated via EnquiryBazaar.in Corrugated Packaging Engine`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left Column: Technical Inputs Form */}
          <div className="w-full lg:w-7/12 p-5 sm:p-6 lg:p-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
              
              {/* Header with Unit Mode Switcher */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905]">
                    <Box className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    1. Box Dimensions & Ply Setup
                  </h3>
                </div>

                {/* Unit Switcher */}
                <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
                  <button
                    type="button"
                    onClick={() => setUnitMode("inches")}
                    className={`rounded px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                      unitMode === "inches"
                        ? "bg-[#FE5905] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Inches
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnitMode("mm")}
                    className={`rounded px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                      unitMode === "mm"
                        ? "bg-[#FE5905] text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    MM
                  </button>
                </div>
              </div>

              {/* Dimensions Input Row: Length × Width × Height */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mb-4">
                <div>
                  <label htmlFor={lengthId} className="block text-xs font-medium text-slate-600 mb-1">
                    Length (L)
                  </label>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <input
                      id={lengthId}
                      type="number"
                      min="1"
                      step="0.5"
                      value={length}
                      onChange={(e) => setLength(parseFloat(e.target.value) || 1)}
                      className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <span className="flex items-center pr-2.5 text-xs font-medium text-slate-400 select-none">
                      {unitMode}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor={widthId} className="block text-xs font-medium text-slate-600 mb-1">
                    Width (W)
                  </label>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <input
                      id={widthId}
                      type="number"
                      min="1"
                      step="0.5"
                      value={width}
                      onChange={(e) => setWidth(parseFloat(e.target.value) || 1)}
                      className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <span className="flex items-center pr-2.5 text-xs font-medium text-slate-400 select-none">
                      {unitMode}
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor={heightId} className="block text-xs font-medium text-slate-600 mb-1">
                    Height (H)
                  </label>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <input
                      id={heightId}
                      type="number"
                      min="1"
                      step="0.5"
                      value={height}
                      onChange={(e) => setHeight(parseFloat(e.target.value) || 1)}
                      className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                    />
                    <span className="flex items-center pr-2.5 text-xs font-medium text-slate-400 select-none">
                      {unitMode}
                    </span>
                  </div>
                </div>
              </div>

              {/* Ply Selection */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-600 mb-1.5 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-blue-600" />
                  Corrugation Ply Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { count: 3, label: "3-Ply (Single Wall)" },
                    { count: 5, label: "5-Ply (Double Wall)" },
                    { count: 7, label: "7-Ply (Heavy Duty)" },
                  ].map((ply) => (
                    <button
                      key={ply.count}
                      type="button"
                      onClick={() => setPlyCount(ply.count as 3 | 5 | 7)}
                      className={`h-9 rounded-lg border text-xs font-bold transition cursor-pointer ${
                        plyCount === ply.count
                          ? "border-[#FE5905] bg-[#FE5905] text-white shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {ply.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Paper GSM Specifications Section */}
              <div className="border-t border-slate-200 pt-3.5 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    2. Paper Layer GSM & Quality
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Flute Factor: 1.4× (B/C Flute)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {/* Top Liner */}
                  <div>
                    <label htmlFor={topGsmId} className="block text-[11px] font-medium text-slate-600 mb-1">
                      Top Liner GSM
                    </label>
                    <input
                      id={topGsmId}
                      type="number"
                      step="10"
                      value={topLinerGsm}
                      onChange={(e) => setTopLinerGsm(parseInt(e.target.value, 10) || 100)}
                      className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>

                  {/* Fluting Paper */}
                  <div>
                    <label htmlFor={fluteGsmId} className="block text-[11px] font-medium text-slate-600 mb-1">
                      Fluting GSM (1.4×)
                    </label>
                    <input
                      id={fluteGsmId}
                      type="number"
                      step="10"
                      value={fluteGsm}
                      onChange={(e) => setFluteGsm(parseInt(e.target.value, 10) || 100)}
                      className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>

                  {/* Inner / Bottom Liner */}
                  <div>
                    <label htmlFor={bottomGsmId} className="block text-[11px] font-medium text-slate-600 mb-1">
                      Bottom Liner GSM
                    </label>
                    <input
                      id={bottomGsmId}
                      type="number"
                      step="10"
                      value={innerLinerGsm}
                      onChange={(e) => setInnerLinerGsm(parseInt(e.target.value, 10) || 100)}
                      className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>

                  {/* Additional fields for 5-Ply and 7-Ply */}
                  {plyCount >= 5 && (
                    <>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-1">
                          Middle Liner GSM
                        </label>
                        <input
                          type="number"
                          step="10"
                          value={middleLinerGsm}
                          onChange={(e) => setMiddleLinerGsm(parseInt(e.target.value, 10) || 100)}
                          className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-1">
                          Fluting 2 GSM (1.4×)
                        </label>
                        <input
                          type="number"
                          step="10"
                          value={flute2Gsm}
                          onChange={(e) => setFlute2Gsm(parseInt(e.target.value, 10) || 100)}
                          className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                    </>
                  )}

                  {plyCount === 7 && (
                    <>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-1">
                          Middle Liner 2 GSM
                        </label>
                        <input
                          type="number"
                          step="10"
                          value={innerLiner3Gsm}
                          onChange={(e) => setInnerLiner3Gsm(parseInt(e.target.value, 10) || 100)}
                          className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-slate-600 mb-1">
                          Fluting 3 GSM (1.4×)
                        </label>
                        <input
                          type="number"
                          step="10"
                          value={flute3Gsm}
                          onChange={(e) => setFlute3Gsm(parseInt(e.target.value, 10) || 100)}
                          className="w-full h-9 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Paper Burst Factor (BF) Selection */}
                <div className="mt-3">
                  <label className="block text-[11px] font-medium text-slate-600 mb-1.5">
                    Kraft Paper Quality / Burst Factor (BF)
                  </label>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[16, 18, 22, 28].map((bf) => (
                      <button
                        key={bf}
                        type="button"
                        onClick={() => setPaperBf(bf)}
                        className={`h-8 rounded-lg border text-xs font-bold transition cursor-pointer ${
                          paperBf === bf
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        {bf} BF
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commercial Pricing Inputs */}
              <div className="border-t border-slate-200 pt-3.5 space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  3. Commercials & Raw Rates
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Paper Rate Per Kg */}
                  <div>
                    <label htmlFor={paperRateId} className="block text-xs font-medium text-slate-600 mb-1">
                      Kraft Paper Rate (₹ / Kg)
                    </label>
                    <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                      <span className="flex items-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                        ₹
                      </span>
                      <input
                        id={paperRateId}
                        type="number"
                        min="20"
                        step="1"
                        value={paperRatePerKg}
                        onChange={(e) => setPaperRatePerKg(parseFloat(e.target.value) || 30)}
                        className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Conversion Cost Per Box */}
                  <div>
                    <label htmlFor={conversionCostId} className="block text-xs font-medium text-slate-600 mb-1">
                      Conversion Cost (Glue, Print, Stitch)
                    </label>
                    <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                      <span className="flex items-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                        ₹
                      </span>
                      <input
                        id={conversionCostId}
                        type="number"
                        min="0.5"
                        step="0.5"
                        value={conversionCostPerBox}
                        onChange={(e) => setConversionCostPerBox(parseFloat(e.target.value) || 0)}
                        className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Order Quantity */}
                  <div>
                    <label htmlFor={orderQtyId} className="block text-xs font-medium text-slate-600 mb-1">
                      Order Quantity (MOQ)
                    </label>
                    <input
                      id={orderQtyId}
                      type="number"
                      min="100"
                      step="100"
                      value={orderQty}
                      onChange={(e) => setOrderQty(parseInt(e.target.value, 10) || 100)}
                      className="w-full h-10 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>

                  {/* Margin % */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-medium text-slate-600">
                        Manufacturer Profit Margin
                      </label>
                      <span className="text-xs font-bold text-[#FE5905]">{marginPercent}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      value={marginPercent}
                      onChange={(e) => setMarginPercent(parseInt(e.target.value, 10))}
                      className="w-full h-2 cursor-pointer accent-[#FE5905] mt-2"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Live Weight, Bursting Strength & Costing Results */}
          <div className="w-full lg:w-5/12 p-5 sm:p-6 lg:p-7 bg-gradient-to-b from-slate-50/50 to-white lg:border-l lg:border-slate-200">
            <div className="lg:sticky lg:top-20 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">

                {/* Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-[#FE5905]">
                      <Scale className="h-4 w-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Technical Calculation Result
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    ISO / TAPPI Standard
                  </span>
                </div>

                {/* Box Weight Hero Display */}
                <div className="rounded-xl bg-gradient-to-b from-orange-50/80 to-amber-50/30 border border-orange-100 p-4 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-orange-200/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700">
                    Single Box Weight
                  </span>

                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FE5905]">
                      {boxWeightGrams}
                    </span>
                    <span className="text-sm font-bold text-slate-500">Grams (~{boxWeightKg.toFixed(3)} Kg)</span>
                  </div>

                  <p className="text-[11px] font-medium text-slate-600">
                    Total Calculated Substance: <strong>{Math.round(totalGsm)} GSM</strong>
                  </p>
                </div>

                {/* Technical Metric Cards */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                    <span className="text-[10px] font-medium text-slate-500 block">Sheet Cutting Size</span>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      {cuttingLengthInches.toFixed(1)}" × {deckleInches.toFixed(1)}"
                    </p>
                    <span className="text-[9px] text-slate-400">Area: {sheetAreaSqM.toFixed(3)} m²</span>
                  </div>

                  <div className="rounded-lg border border-blue-200 bg-blue-50/50 p-3">
                    <span className="text-[10px] font-medium text-blue-700 block">Bursting Strength (BS)</span>
                    <p className="mt-0.5 text-sm font-bold text-blue-800">
                      ~{estimatedBs} kg/cm²
                    </p>
                    <span className="text-[9px] text-blue-600 font-medium">Quality: {paperBf} BF Paper</span>
                  </div>
                </div>

                {/* Cost Breakdown Table */}
                <div className="mt-3 divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-2 text-xs">
                    <span className="text-slate-500">Raw Craft Paper Cost:</span>
                    <span className="font-semibold text-slate-900">₹{rawPaperCostPerBox.toFixed(2)} / pc</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-xs">
                    <span className="text-slate-500">Conversion / Glue / Stitch:</span>
                    <span className="font-medium text-slate-700">+₹{conversionCostPerBox.toFixed(2)} / pc</span>
                  </div>
                  <div className="flex items-center justify-between py-2 text-xs">
                    <span className="text-slate-500">Manufacturer Margin ({marginPercent}%):</span>
                    <span className="font-medium text-emerald-600">+₹{profitAmount.toFixed(2)} / pc</span>
                  </div>
                  <div className="flex items-center justify-between py-2.5 text-xs font-bold">
                    <span className="text-slate-900">Final Price Per Box:</span>
                    <span className="text-base text-[#FE5905]">₹{sellingPricePerBox.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total Batch Summary */}
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 mt-3 text-xs flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 block">Total Batch Value ({orderQty} pcs):</span>
                    <span className="text-base font-black text-slate-900">₹{totalOrderValue.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block">Total Paper Needed:</span>
                    <span className="text-xs font-bold text-slate-800">{totalOrderWeightKg} Kg</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={handleCopySpec}
                    className="flex flex-1 items-center justify-center gap-1.5 h-10 rounded-lg bg-slate-900 px-3 text-xs font-medium text-white transition hover:bg-slate-800 active:scale-95 cursor-pointer"
                  >
                    {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Specs Copied!" : "Copy Technical Specs"}</span>
                  </button>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Corrugated Box Quote: ${length}x${width}x${height} ${unitMode} (${plyCount}-Ply, ${paperBf} BF). Weight: ${boxWeightGrams}g, Rate: ₹${sellingPricePerBox.toFixed(2)}/box. Calculated on EnquiryBazaar: https://enquirybazaar.in/tools/corrugated-box-weight-calculator`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 h-10 rounded-lg border border-emerald-300 bg-emerald-50 px-3 text-xs font-medium text-emerald-700 transition hover:bg-emerald-100 active:scale-95"
                  >
                    <Share2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Share</span>
                  </a>
                </div>
              </div>

              {/* Step-by-Step Formula Verification Box */}
              <div className="rounded-xl border border-blue-200/80 bg-blue-50/50 p-4 text-xs text-blue-950">
                <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-1.5">
                  <Calculator className="h-3.5 w-3.5 text-blue-600" />
                  <span>Exact Mathematical Formulas Used:</span>
                </div>
                <div className="space-y-1 text-[11px] text-blue-900/90 font-mono leading-relaxed">
                  <p>• <strong>Deckle Size:</strong> {widInches.toFixed(1)}" + {hgtInches.toFixed(1)}" + 1" = <strong>{deckleInches.toFixed(2)}"</strong></p>
                  <p>• <strong>Cutting Length:</strong> 2 × ({lenInches.toFixed(1)}" + {widInches.toFixed(1)}") + 2" = <strong>{cuttingLengthInches.toFixed(2)}"</strong></p>
                  <p>• <strong>Sheet Area:</strong> ({cuttingLengthCm.toFixed(1)} cm × {deckleCm.toFixed(1)} cm) ÷ 10,000 = <strong>{sheetAreaSqM.toFixed(3)} m²</strong></p>
                  <p>• <strong>Total GSM:</strong> {topLinerGsm} + ({fluteGsm} × 1.4) + {innerLinerGsm} = <strong>{Math.round(totalGsm)} GSM</strong></p>
                  <p>• <strong>Box Weight:</strong> {sheetAreaSqM.toFixed(3)} m² × {Math.round(totalGsm)} GSM = <strong>{boxWeightGrams}g</strong></p>
                </div>
              </div>

              {/* EnquiryBazaar Lead Bridge Box */}
              <div className="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/80 p-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FE5905] px-2.5 py-0.5 text-[9px] font-bold uppercase text-white">
                  Packaging Growth
                </span>
                <h4 className="mt-1.5 text-sm font-semibold text-slate-900">
                  Are Corrugated Packaging Portals Eating Your Margins?
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Stop quoting in competitive portal auctions where buyers shave off 50 paise per box. Build an exclusive direct B2B buyer engine with EnquiryBazaar.
                </p>

                <a
                  href="https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20am%20a%20corrugated%20box%20manufacturer.%20I%20want%20direct%20OEM%20and%20industrial%20packaging%20orders%20without%20portal%20price%20wars."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 h-9 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-emerald-500 active:scale-95"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Get Direct Packaging Buyers</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
