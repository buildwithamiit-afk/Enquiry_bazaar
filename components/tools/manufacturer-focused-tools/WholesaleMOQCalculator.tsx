"use client";

import React, { useState, useId } from "react";
import {
  Calculator,
  Truck,
  Receipt,
  CheckCircle2,
  Copy,
  Share2,
  Clock,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WholesaleMOQCalculator() {
  const rawCostId = useId();
  const setupCostId = useId();
  const orderQtyId = useId();
  const packagingCostId = useId();
  const wastageRateId = useId();
  const freightTotalId = useId();
  const marginRateId = useId();

  // State Variables
  const [productName, setProductName] = useState<string>("Industrial Packaging Boxes");
  const [rawCost, setRawCost] = useState<number>(45);
  const [setupCost, setSetupCost] = useState<number>(3000);
  const [orderQty, setOrderQty] = useState<number>(1000);
  const [packagingCost, setPackagingCost] = useState<number>(3.5);
  const [wastageRate, setWastageRate] = useState<number>(3);
  const [freightTotal, setFreightTotal] = useState<number>(4500);
  const [gstSlab, setGstSlab] = useState<number>(18);
  const [creditDays, setCreditDays] = useState<number>(0);
  const [marginRate, setMarginRate] = useState<number>(15);
  const [copied, setCopied] = useState<boolean>(false);

  // Sanitized Numbers
  const safeRawCost = Math.max(Number(rawCost) || 0, 0);
  const safeSetupCost = Math.max(Number(setupCost) || 0, 0);
  const safeOrderQty = Math.max(Number(orderQty) || 1, 1);
  const safePackagingCost = Math.max(Number(packagingCost) || 0, 0);
  const safeWastageRate = Math.max(Number(wastageRate) || 0, 0);
  const safeFreightTotal = Math.max(Number(freightTotal) || 0, 0);
  const safeMarginRate = Math.max(Number(marginRate) || 0, 0);

  // Credit Multiplier
  const creditMultiplier = creditDays > 0 ? (creditDays / 30) * 1.5 : 0;

  // Calculations
  const unitWastageCost = safeRawCost * (safeWastageRate / 100);
  const unitRawWithWastage = safeRawCost + unitWastageCost;
  const unitSetupCost = safeSetupCost / safeOrderQty;
  const unitBaseCost = unitRawWithWastage + unitSetupCost + safePackagingCost;
  const unitProfitAmount = unitBaseCost * (safeMarginRate / 100);
  const unitCreditCost = (unitBaseCost + unitProfitAmount) * (creditMultiplier / 100);
  const unitExFactoryPrice = unitBaseCost + unitProfitAmount + unitCreditCost;
  const unitFreight = safeFreightTotal / safeOrderQty;
  const unitTaxablePrice = unitExFactoryPrice + unitFreight;
  const unitGstAmount = unitTaxablePrice * (gstSlab / 100);
  const unitLandedPrice = unitTaxablePrice + unitGstAmount;

  const totalInvoiceAmount = unitLandedPrice * safeOrderQty;
  const totalFactoryProfit = (unitProfitAmount + unitCreditCost) * safeOrderQty;

  const handleCopyQuotation = () => {
    const text = `Official B2B Wholesale Quotation:\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n📦 Product: ${productName || "Custom Manufactured Goods"}\n📊 Order Quantity / MOQ: ${safeOrderQty.toLocaleString("en-IN")} Units\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n💰 PRICE BREAKDOWN:\n• Ex-Factory Price (Excl. Freight & GST): ₹${unitExFactoryPrice.toFixed(2)} / Unit\n• Freight / Delivery (Doorstep): ₹${unitFreight.toFixed(2)} / Unit\n• GST (${gstSlab}%): ₹${unitGstAmount.toFixed(2)} / Unit\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n🎯 FINAL LANDED DOORSTEP RATE:\n₹${unitLandedPrice.toFixed(2)} / Unit (All Inclusive)\n\n💵 TOTAL INVOICE VALUE: ₹${Math.round(totalInvoiceAmount).toLocaleString("en-IN")}\n⏳ Payment Terms: ${creditDays === 0 ? "100% Advance / Dispatch" : `${creditDays} Days Credit`}\n━━━━━━━━━━━━━━━━━━━━━━━━━━\nCalculated using EnquiryBazaar.in B2B Landed Price Engine`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left Column: Input Form */}
          <div className="w-full lg:w-7/12 p-5 sm:p-6 lg:p-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905]">
                  <Calculator className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Order & Production Specifications
                </h3>
              </div>

              {/* Product Name */}
              <div className="mb-3.5">
                <label htmlFor="productName" className="block text-xs font-medium text-slate-600 mb-1.5">
                  Product / Component Name
                </label>
                <input
                  type="text"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g. Industrial Packaging Boxes"
                  className="w-full h-10 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
              </div>

              {/* Order Quantity / MOQ */}
              <div className="mb-3.5">
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor={orderQtyId} className="text-xs font-medium text-slate-600">
                    Order Quantity (Batch / MOQ)
                  </label>
                  <span className="text-xs font-semibold text-slate-700">
                    {safeOrderQty.toLocaleString("en-IN")} Units
                  </span>
                </div>
                <input
                  id={orderQtyId}
                  type="number"
                  min="1"
                  step="50"
                  value={orderQty}
                  onChange={(e) => setOrderQty(parseInt(e.target.value, 10) || 1)}
                  className="w-full h-10 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                />
                <div className="mt-1.5 flex flex-wrap items-center gap-1">
                  <span className="text-[10px] text-slate-400 mr-1">Quick:</span>
                  {[500, 1000, 2500, 5000, 10000].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setOrderQty(qty)}
                      className={`rounded px-2 py-0.5 text-[11px] font-medium transition cursor-pointer ${orderQty === qty
                          ? "bg-[#FE5905] text-white"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                    >
                      {qty.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>

              {/* Production Costs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-slate-200 pt-3.5 mt-3.5">

                {/* Raw Material Cost */}
                <div>
                  <label htmlFor={rawCostId} className="block text-xs font-medium text-slate-600 mb-1.5">
                    Raw Material Cost (Per Unit)
                  </label>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <span className="flex items-center justify-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                      ₹
                    </span>
                    <input
                      id={rawCostId}
                      type="number"
                      min="0"
                      step="0.5"
                      value={rawCost}
                      onChange={(e) => setRawCost(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-semibold text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Machine Setup / Tooling Cost */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={setupCostId} className="text-xs font-medium text-slate-600">
                      Setup / Mold / Dye
                    </label>
                    <span className="text-[10px] text-slate-400 font-medium">
                      ₹{(safeSetupCost / safeOrderQty).toFixed(2)}/pc
                    </span>
                  </div>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <span className="flex items-center justify-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                      ₹
                    </span>
                    <input
                      id={setupCostId}
                      type="number"
                      min="0"
                      step="100"
                      value={setupCost}
                      onChange={(e) => setSetupCost(parseFloat(e.target.value) || 0)}
                      placeholder="e.g. 3000"
                      className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Packaging & Barcoding */}
                <div>
                  <label htmlFor={packagingCostId} className="block text-xs font-medium text-slate-600 mb-1.5">
                    Packaging & Cartons (Per Unit)
                  </label>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <span className="flex items-center justify-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                      ₹
                    </span>
                    <input
                      id={packagingCostId}
                      type="number"
                      min="0"
                      step="0.5"
                      value={packagingCost}
                      onChange={(e) => setPackagingCost(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-semibold text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Wastage / Scrap Buffer */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={wastageRateId} className="text-xs font-medium text-slate-600">
                      Wastage / Defect Buffer
                    </label>
                    <span className="text-xs font-semibold text-orange-600">
                      {safeWastageRate}% (+₹{unitWastageCost.toFixed(2)})
                    </span>
                  </div>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <input
                      id={wastageRateId}
                      type="number"
                      min="0"
                      max="20"
                      step="0.5"
                      value={wastageRate}
                      onChange={(e) => setWastageRate(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-semibold text-slate-900 focus:outline-none"
                    />
                    <span className="flex items-center justify-center pr-3.5 pl-2 text-xs font-semibold text-slate-400 select-none">
                      %
                    </span>
                  </div>
                </div>
              </div>

              {/* Freight, GST & Credit Terms */}
              <div className="mt-3.5 space-y-3.5 border-t border-slate-200 pt-3.5">

                {/* Total Freight */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={freightTotalId} className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                      <Truck className="h-3.5 w-3.5 text-blue-600" />
                      Total Batch Freight / Logistics
                    </label>
                    <span className="text-xs font-semibold text-slate-700">
                      ₹{unitFreight.toFixed(2)} / Unit
                    </span>
                  </div>
                  <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                    <span className="flex items-center justify-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                      ₹
                    </span>
                    <input
                      id={freightTotalId}
                      type="number"
                      min="0"
                      step="500"
                      value={freightTotal}
                      onChange={(e) => setFreightTotal(parseFloat(e.target.value) || 0)}
                      className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-semibold text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>

                {/* GST Slab Select */}
                <div>
                  <label className="block text-xs font-medium text-slate-600 flex items-center gap-1.5 mb-1.5">
                    <Receipt className="h-3.5 w-3.5 text-emerald-600" />
                    Applicable GST Slab
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {[0, 5, 12, 18, 28].map((slab) => (
                      <button
                        key={slab}
                        type="button"
                        onClick={() => setGstSlab(slab)}
                        className={`h-9 rounded-lg border text-xs font-semibold transition cursor-pointer ${gstSlab === slab
                            ? "border-[#FE5905] bg-[#FE5905] text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        {slab}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Credit Terms */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1.5">
                    <label className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-amber-600" />
                      Payment Credit Period
                    </label>
                    <span className="text-[11px] font-medium text-slate-500">
                      {creditDays === 0 ? "Advance (0% Surcharge)" : `+${creditMultiplier.toFixed(2)}% Financing`}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-1.5">
                    {[
                      { days: 0, label: "Advance" },
                      { days: 15, label: "15 Days" },
                      { days: 30, label: "30 Days" },
                      { days: 60, label: "60 Days" },
                    ].map((term) => (
                      <button
                        key={term.days}
                        type="button"
                        onClick={() => setCreditDays(term.days)}
                        className={`h-9 rounded-lg border text-xs font-medium transition cursor-pointer ${creditDays === term.days
                            ? "border-slate-900 bg-slate-900 text-white"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                          }`}
                      >
                        {term.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Profit Margin Slider */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor={marginRateId} className="text-xs font-medium text-slate-600">
                      Target Net Factory Margin
                    </label>
                    <span className="text-xs font-bold text-[#FE5905]">
                      {safeMarginRate}% Profit
                    </span>
                  </div>
                  <input
                    id={marginRateId}
                    type="range"
                    min="5"
                    max="40"
                    value={marginRate}
                    onChange={(e) => setMarginRate(parseInt(e.target.value, 10))}
                    className="w-full h-1.5 cursor-pointer accent-[#FE5905]"
                  />
                  <div className="mt-1 flex justify-between text-[10px] text-slate-400">
                    <span>5%</span>
                    <span>15%</span>
                    <span>30%+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Results Card */}
          <div className="w-full lg:w-5/12 p-5 sm:p-6 lg:p-7 bg-gradient-to-b from-slate-50/50 to-white lg:border-l lg:border-slate-200">
            <div className="lg:sticky lg:top-20 space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm">

                {/* Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-[#FE5905]">
                      <Receipt className="h-3.5 w-3.5" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900">
                      Wholesale Landed Rate
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    GST Compliant
                  </span>
                </div>

                {/* Main Landed Price Display */}
                <div className="rounded-xl bg-gradient-to-b from-orange-50/80 to-amber-50/30 border border-orange-100 p-4 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-orange-200/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700">
                    Final Landed Price
                  </span>

                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FE5905]">
                      ₹{unitLandedPrice.toFixed(2)}
                    </span>
                    <span className="text-xs font-medium text-slate-500">/ Unit</span>
                  </div>

                  <p className="text-[11px] font-medium text-slate-600">
                    Includes Freight (₹{unitFreight.toFixed(2)}) + {gstSlab}% GST
                  </p>
                </div>

                {/* Price Breakdown Table */}
                <div className="mt-3 divide-y divide-slate-100">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-500">Ex-Factory Price:</span>
                    <span className="text-xs font-semibold text-slate-900">₹{unitExFactoryPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-500">Unit Freight:</span>
                    <span className="text-xs font-medium text-slate-700">+₹{unitFreight.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-xs text-slate-500">GST ({gstSlab}%):</span>
                    <span className="text-xs font-medium text-slate-700">+₹{unitGstAmount.toFixed(2)}</span>
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                    <span className="text-[10px] font-medium text-slate-500 block">Total Invoice</span>
                    <p className="mt-0.5 text-base sm:text-lg font-bold text-slate-900">
                      ₹{Math.round(totalInvoiceAmount).toLocaleString("en-IN")}
                    </p>
                    <span className="text-[9px] text-slate-400">{safeOrderQty.toLocaleString("en-IN")} pcs</span>
                  </div>

                  <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3">
                    <span className="text-[10px] font-medium text-emerald-700 block">Net Profit</span>
                    <p className="mt-0.5 text-base sm:text-lg font-bold text-emerald-700">
                      ₹{Math.round(totalFactoryProfit).toLocaleString("en-IN")}
                    </p>
                    <span className="text-[9px] text-emerald-600 font-medium">{safeMarginRate}% Margin</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <button
                    type="button"
                    onClick={handleCopyQuotation}
                    className="flex flex-1 items-center justify-center gap-1.5 h-10 rounded-lg bg-slate-900 px-3 text-xs font-medium text-white transition hover:bg-slate-800 active:scale-95 cursor-pointer"
                  >
                    {copied ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? "Copied!" : "Copy Quote"}</span>
                  </button>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Wholesale Quotation for ${productName || "Custom Order"}: MOQ: ${safeOrderQty} units, Ex-Factory: ₹${unitExFactoryPrice.toFixed(2)}, Final Landed Price: ₹${unitLandedPrice.toFixed(2)}/pc (Incl. Freight & GST). Total: ₹${Math.round(totalInvoiceAmount).toLocaleString("en-IN")}. Calculated on EnquiryBazaar: https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator`
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

              {/* EnquiryBazaar Lead Bridge Box */}
              <div className="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/80 p-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FE5905] px-2.5 py-0.5 text-[9px] font-bold uppercase text-white">
                  B2B Growth
                </span>
                <h4 className="mt-1.5 text-sm font-semibold text-slate-900">
                  Stop Competing on Price Alone
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Get exclusive B2B buyer inquiries with EnquiryBazaar. No price wars, no commission.
                </p>

                <a
                  href="https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20used%20your%20Wholesale%20Landed%20Price%20Calculator.%20I%20want%20to%20get%20direct%20bulk%20buyer%20orders%20without%20portal%20price%20wars."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 h-9 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-emerald-500 active:scale-95"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Talk to Expert</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}