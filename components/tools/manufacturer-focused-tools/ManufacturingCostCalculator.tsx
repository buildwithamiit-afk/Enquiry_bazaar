"use client";

import React, { useState, useId } from "react";
import {
  Factory,
  Layers,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
  Copy,
  CheckCircle2,
  Share2,
  TrendingUp,
  Percent,
  ChevronDown,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface MaterialItem {
  id: string;
  name: string;
  qty: number | "";
  unit: string;
  rate: number | "";
}

interface LabourItem {
  id: string;
  task: string;
  hours: number | "";
  ratePerHour: number | "";
}

export function ManufacturingCostCalculator() {
  const currencyId = useId();
  const batchQtyId = useId();
  const wastageId = useId();
  const electricityId = useId();
  const machineId = useId();
  const rentId = useId();
  const adminId = useId();
  const packagingId = useId();
  const freightId = useId();
  const otherUnitCostId = useId();
  const marginRangeId = useId();
  const gstRateId = useId();

  // Currency Selection
  const [currency, setCurrency] = useState<string>("₹");

  // Production Info
  const [productName, setProductName] = useState<string>("Custom Industrial Component");
  const [batchQty, setBatchQty] = useState<number | "">(100);

  // Dynamic Materials List
  const [materials, setMaterials] = useState<MaterialItem[]>([
    { id: "m-1", name: "Mild Steel Sheet (CRCA 2mm)", qty: 120, unit: "kg", rate: 68 },
    { id: "m-2", name: "Fasteners & Hardware (M8 Bolts)", qty: 200, unit: "pcs", rate: 3.5 },
    { id: "m-3", name: "Powder Coating Chemical", qty: 15, unit: "kg", rate: 220 },
  ]);

  // Dynamic Labour List
  const [labour, setLabour] = useState<LabourItem[]>([
    { id: "l-1", task: "CNC Laser Cutting & Piercing", hours: 4.5, ratePerHour: 450 },
    { id: "l-2", task: "Press Brake Bending & TIG Welding", hours: 8, ratePerHour: 320 },
    { id: "l-3", task: "Powder Coating & Quality Inspection", hours: 3.5, ratePerHour: 280 },
  ]);

  // Step 3: Overheads & Utilities (Batch level)
  const [wastagePercent, setWastagePercent] = useState<number | "">(4);
  const [electricityCost, setElectricityCost] = useState<number | "">(1200);
  const [machineMaintenance, setMachineMaintenance] = useState<number | "">(800);
  const [rentWorkspaceShare, setRentWorkspaceShare] = useState<number | "">(1500);
  const [adminOverhead, setAdminOverhead] = useState<number | "">(600);

  // Step 4: Per-Unit Packaging & Logistics
  const [packagingPerUnit, setPackagingPerUnit] = useState<number | "">(15);
  const [freightPerUnit, setFreightPerUnit] = useState<number | "">(25);
  const [otherPerUnit, setOtherPerUnit] = useState<number | "">(0);

  // Step 5: Commercial Pricing & Margins
  const [marginPercent, setMarginPercent] = useState<number>(30);
  const [gstRate, setGstRate] = useState<number>(18);

  const [copied, setCopied] = useState<boolean>(false);

  // Safe parsed numbers
  const safeQty = Math.max(Number(batchQty) || 1, 1);
  const safeWastage = Math.max(Number(wastagePercent) || 0, 0);

  // 1. Raw Materials Calculation
  const baseMaterialCost = materials.reduce((acc, item) => {
    const q = Number(item.qty) || 0;
    const r = Number(item.rate) || 0;
    return acc + q * r;
  }, 0);
  const wastageCost = baseMaterialCost * (safeWastage / 100);
  const totalMaterialCost = baseMaterialCost + wastageCost;
  const materialCostPerUnit = totalMaterialCost / safeQty;

  // 2. Labour Calculation
  const totalLabourCost = labour.reduce((acc, item) => {
    const h = Number(item.hours) || 0;
    const r = Number(item.ratePerHour) || 0;
    return acc + h * r;
  }, 0);
  const labourCostPerUnit = totalLabourCost / safeQty;

  // 3. Factory Overhead Calculation
  const totalOverhead =
    (Number(electricityCost) || 0) +
    (Number(machineMaintenance) || 0) +
    (Number(rentWorkspaceShare) || 0) +
    (Number(adminOverhead) || 0);
  const overheadPerUnit = totalOverhead / safeQty;

  // 4. Per-Unit Direct Costs
  const totalPerUnitDirect =
    (Number(packagingPerUnit) || 0) +
    (Number(freightPerUnit) || 0) +
    (Number(otherPerUnit) || 0);

  // 5. Total Unit Manufacturing Cost (COGS)
  const unitCost = materialCostPerUnit + labourCostPerUnit + overheadPerUnit + totalPerUnitDirect;
  const totalBatchCost = unitCost * safeQty;

  // Cost Breakdown Percentages
  const displayTotal = unitCost > 0 ? unitCost : 1;
  const matPct = Math.round((materialCostPerUnit / displayTotal) * 100);
  const labPct = Math.round((labourCostPerUnit / displayTotal) * 100);
  const ovPct = Math.round((overheadPerUnit / displayTotal) * 100);
  const pkgPct = Math.max(0, 100 - (matPct + labPct + ovPct));

  // 6. Pricing, Margin & GST
  const unitProfit = unitCost * (marginPercent / 100);
  const unitSellingPriceExFactory = unitCost + unitProfit;
  const unitGst = unitSellingPriceExFactory * (gstRate / 100);
  const unitSellingPriceInclusive = unitSellingPriceExFactory + unitGst;

  const totalBatchProfit = unitProfit * safeQty;
  const totalBatchGst = unitGst * safeQty;
  const totalBatchInvoice = unitSellingPriceInclusive * safeQty;

  // Handlers for dynamic material rows
  const addMaterialRow = () => {
    setMaterials((prev) => [
      ...prev,
      { id: `m-${Date.now()}`, name: "", qty: "", unit: "kg", rate: "" },
    ]);
  };

  const removeMaterialRow = (id: string) => {
    if (materials.length <= 1) return;
    setMaterials((prev) => prev.filter((item) => item.id !== id));
  };

  const updateMaterial = (id: string, field: keyof MaterialItem, value: any) => {
    setMaterials((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Handlers for dynamic labour rows
  const addLabourRow = () => {
    setLabour((prev) => [
      ...prev,
      { id: `l-${Date.now()}`, task: "", hours: "", ratePerHour: "" },
    ]);
  };

  const removeLabourRow = (id: string) => {
    if (labour.length <= 1) return;
    setLabour((prev) => prev.filter((item) => item.id !== id));
  };

  const updateLabour = (id: string, field: keyof LabourItem, value: any) => {
    setLabour((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Preset Sample Data
  const handleLoadSample = () => {
    setProductName("SS304 Industrial Pressure Valve Housing");
    setBatchQty(150);
    setCurrency("₹");
    setMaterials([
      { id: "m-1", name: "SS304 Forged Round Bar", qty: 240, unit: "kg", rate: 310 },
      { id: "m-2", name: "PTFE Seals & O-Rings", qty: 300, unit: "pcs", rate: 18 },
      { id: "m-3", name: "Electro-polishing Acid Wash", qty: 25, unit: "ltr", rate: 140 },
    ]);
    setLabour([
      { id: "l-1", task: "4-Axis CNC Milling & Turning", hours: 16, ratePerHour: 600 },
      { id: "l-2", task: "Pressure Leak Testing & Deburring", hours: 6, ratePerHour: 350 },
      { id: "l-3", task: "Laser Marking & CMM Inspection", hours: 4, ratePerHour: 400 },
    ]);
    setWastagePercent(5);
    setElectricityCost(2400);
    setMachineMaintenance(1600);
    setRentWorkspaceShare(2500);
    setAdminOverhead(1000);
    setPackagingPerUnit(25);
    setFreightPerUnit(40);
    setOtherPerUnit(5);
    setMarginPercent(35);
    setGstRate(18);
  };

  // Reset Everything
  const handleResetAll = () => {
    setProductName("Custom Product");
    setBatchQty(100);
    setMaterials([{ id: "m-1", name: "", qty: "", unit: "kg", rate: "" }]);
    setLabour([{ id: "l-1", task: "", hours: "", ratePerHour: "" }]);
    setWastagePercent(0);
    setElectricityCost("");
    setMachineMaintenance("");
    setRentWorkspaceShare("");
    setAdminOverhead("");
    setPackagingPerUnit("");
    setFreightPerUnit("");
    setOtherPerUnit("");
    setMarginPercent(25);
    setGstRate(18);
  };

  // Copy Quotation Summary
  const handleCopySummary = () => {
    const summaryText = `*MANUFACTURING COST ESTIMATE & B2B QUOTATION*
Product: ${productName || "Custom Industrial Component"}
Batch Size: ${safeQty.toLocaleString("en-IN")} units

*COST PER UNIT BREAKDOWN:*
• Raw Materials: ${currency}${materialCostPerUnit.toFixed(2)} (${matPct}%)
• Direct Labour: ${currency}${labourCostPerUnit.toFixed(2)} (${labPct}%)
• Factory Overheads: ${currency}${overheadPerUnit.toFixed(2)} (${ovPct}%)
• Packaging & Logistics: ${currency}${totalPerUnitDirect.toFixed(2)} (${pkgPct}%)

*True Manufacturing Cost / Unit: ${currency}${unitCost.toFixed(2)}*
Target Margin: ${marginPercent}% (+${currency}${unitProfit.toFixed(2)}/unit)

*Suggested Ex-Factory Price: ${currency}${unitSellingPriceExFactory.toFixed(2)}*
+ GST (${gstRate}%): ${currency}${unitGst.toFixed(2)}
*Final Unit Landed Price: ${currency}${unitSellingPriceInclusive.toFixed(2)}*

*BATCH TOTALS (${safeQty} units):*
• Total Production Cost: ${currency}${Math.round(totalBatchCost).toLocaleString("en-IN")}
• Net Factory Profit: ${currency}${Math.round(totalBatchProfit).toLocaleString("en-IN")}
• Total GST Amount: ${currency}${Math.round(totalBatchGst).toLocaleString("en-IN")}
• *Total Commercial Invoice: ${currency}${Math.round(totalBatchInvoice).toLocaleString("en-IN")}*

Calculated with EnquiryBazaar Manufacturing Cost Calculator: https://enquirybazaar.in/tools/manufacturing-cost-calculator`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const scrollToResults = () => {
    const el = document.getElementById("results-card-target");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-3.5 sm:px-6 lg:px-8 py-4 sm:py-10">
      {/* Top Banner / Breadcrumb Action Bar */}
      <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 border-b border-slate-200 pb-4 sm:pb-5">
        <div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#FE5905]">
            <span className="h-2 w-2 rounded-full bg-[#FE5905]" />
            B2B Manufacturing Intelligence
          </div>
          <h2 className="text-lg sm:text-2xl font-bold text-slate-900 mt-1">
            Unit Economics & True Production Cost Engine
          </h2>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={handleLoadSample}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-semibold text-[#FE5905] shadow-xs hover:bg-orange-100 transition active:scale-95 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Load Sample (SS304)</span>
          </button>
          <button
            type="button"
            onClick={handleResetAll}
            className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-xs hover:bg-slate-50 transition active:scale-95 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs (Left 7 cols) & Summary Panel (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Multi-Step Input Form */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          {/* STEP 0: Product Info & Currency */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905] font-bold text-xs">
                  0
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Batch & Product Specifications
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor={currencyId} className="text-xs font-medium text-slate-500">
                  Currency:
                </label>
                <select
                  id={currencyId}
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-bold text-slate-800 focus:border-[#FE5905] focus:bg-white focus:outline-none cursor-pointer"
                >
                  <option value="₹">₹ INR (Rupee)</option>
                  <option value="$">$ USD (Dollar)</option>
                  <option value="€">€ EUR (Euro)</option>
                  <option value="£">£ GBP (Pound)</option>
                  <option value="AED">AED (Dirham)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Product or Job Name
                </label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="e.g. Mild Steel Flange, Cotton Polo Shirt"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={batchQtyId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Batch Size (Units) *
                </label>
                <input
                  id={batchQtyId}
                  type="number"
                  min="1"
                  value={batchQty}
                  onChange={(e) => setBatchQty(e.target.value === "" ? "" : Number(e.target.value))}
                  placeholder="e.g. 100"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm font-bold text-slate-900 focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* STEP 1: RAW MATERIALS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905] font-bold text-xs">
                  1
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">Direct Raw Materials</h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    All inputs consumed for this complete production batch
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right bg-orange-50/60 sm:bg-transparent rounded-lg px-2.5 py-1 sm:p-0">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block">Batch Materials:</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {currency}{Math.round(totalMaterialCost).toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            {/* Dynamic Rows */}
            <div className="mt-4 space-y-3">
              {materials.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center justify-between mb-2 sm:hidden">
                    <span className="text-xs font-bold text-slate-700">
                      Material #{index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeMaterialRow(item.id)}
                      disabled={materials.length <= 1}
                      title="Delete material"
                      className={`p-1.5 rounded-md text-red-500 hover:bg-red-50 transition cursor-pointer ${
                        materials.length <= 1 ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-end">
                    <div className="sm:col-span-5">
                      <label className="hidden sm:block text-[11px] font-semibold text-slate-600 mb-1">
                        Material Item #{index + 1}
                      </label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateMaterial(item.id, "name", e.target.value)}
                        placeholder="Material name (e.g. CRCA Sheet)"
                        className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:col-span-3 gap-2">
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-600 mb-1">
                          Batch Qty
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          value={item.qty}
                          onChange={(e) =>
                            updateMaterial(
                              item.id,
                              "qty",
                              e.target.value === "" ? "" : Number(e.target.value)
                            )
                          }
                          placeholder="100"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-600 mb-1">
                          Unit
                        </label>
                        <input
                          type="text"
                          value={item.unit}
                          onChange={(e) => updateMaterial(item.id, "unit", e.target.value)}
                          placeholder="kg, pcs"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-medium text-slate-700 focus:border-[#FE5905] focus:outline-none text-center"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-600 mb-1">
                        Rate ({currency}/Unit)
                      </label>
                      <div className="relative">
                        <span className="absolute left-2.5 top-2 text-xs text-slate-400 font-medium">
                          {currency}
                        </span>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          value={item.rate}
                          onChange={(e) =>
                            updateMaterial(
                              item.id,
                              "rate",
                              e.target.value === "" ? "" : Number(e.target.value)
                            )
                          }
                          placeholder="0"
                          className="w-full rounded-lg border border-slate-200 bg-white pl-6 pr-2 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="hidden sm:flex sm:col-span-1 justify-end">
                      <button
                        type="button"
                        onClick={() => removeMaterialRow(item.id)}
                        disabled={materials.length <= 1}
                        title="Delete material"
                        className={`p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer ${
                          materials.length <= 1 ? "opacity-30 cursor-not-allowed" : ""
                        }`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-600 px-1 border-t border-slate-200/60 pt-1.5">
                    <span>
                      Line total: <strong className="text-slate-900">{currency}{((Number(item.qty) || 0) * (Number(item.rate) || 0)).toLocaleString("en-IN")}</strong>
                    </span>
                    <span className="text-slate-500">
                      Per piece: {currency}{(((Number(item.qty) || 0) * (Number(item.rate) || 0)) / safeQty).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={addMaterialRow}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-orange-300 bg-orange-50/50 py-2 sm:border-none sm:bg-transparent text-xs font-bold text-[#FE5905] hover:text-[#d44800] transition cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Another Material</span>
              </button>

              {/* Scrap or Wastage Buffer */}
              <div className="flex items-center justify-between sm:justify-start gap-2 bg-orange-50/80 border border-orange-200 rounded-lg px-3 py-2">
                <label htmlFor={wastageId} className="text-xs font-semibold text-slate-700">
                  Scrap and Rejection:
                </label>
                <div className="flex items-center gap-1">
                  <input
                    id={wastageId}
                    type="number"
                    min="0"
                    max="100"
                    value={wastagePercent}
                    onChange={(e) =>
                      setWastagePercent(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    className="w-12 rounded border border-orange-300 bg-white px-1.5 py-1 text-xs font-bold text-slate-900 text-center focus:outline-none"
                  />
                  <span className="text-xs font-bold text-slate-600">%</span>
                </div>
                <span className="text-[10px] text-orange-700 font-medium">
                  (+{currency}{Math.round(wastageCost).toLocaleString("en-IN")})
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2: DIRECT LABOUR */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905] font-bold text-xs">
                  2
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Direct Manufacturing Labour
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Machine operators, assembly workers, fabrication, and QC for batch
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right bg-orange-50/60 sm:bg-transparent rounded-lg px-2.5 py-1 sm:p-0">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block">Batch Labour:</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {currency}{Math.round(totalLabourCost).toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {labour.map((item, index) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 hover:border-slate-300 hover:bg-slate-50 transition"
                >
                  <div className="flex items-center justify-between mb-2 sm:hidden">
                    <span className="text-xs font-bold text-slate-700">
                      Task #{index + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => removeLabourRow(item.id)}
                      disabled={labour.length <= 1}
                      title="Delete task"
                      className={`p-1.5 rounded-md text-red-500 hover:bg-red-50 transition cursor-pointer ${
                        labour.length <= 1 ? "opacity-30 cursor-not-allowed" : ""
                      }`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-end">
                    <div className="sm:col-span-5">
                      <label className="hidden sm:block text-[11px] font-semibold text-slate-600 mb-1">
                        Task or Operation #{index + 1}
                      </label>
                      <input
                        type="text"
                        value={item.task}
                        onChange={(e) => updateLabour(item.id, "task", e.target.value)}
                        placeholder="Task (e.g. CNC Turning, Welding)"
                        className="w-full rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-medium text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:col-span-6 gap-2">
                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-600 mb-1">
                          Total Hours
                        </label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          value={item.hours}
                          onChange={(e) =>
                            updateLabour(
                              item.id,
                              "hours",
                              e.target.value === "" ? "" : Number(e.target.value)
                            )
                          }
                          placeholder="e.g. 6.5"
                          className="w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] sm:text-[11px] font-semibold text-slate-600 mb-1">
                          Hourly Rate
                        </label>
                        <div className="relative">
                          <span className="absolute left-2 top-2 text-xs text-slate-400 font-medium">
                            {currency}
                          </span>
                          <input
                            type="number"
                            min="0"
                            step="any"
                            value={item.ratePerHour}
                            onChange={(e) =>
                              updateLabour(
                                item.id,
                                "ratePerHour",
                                e.target.value === "" ? "" : Number(e.target.value)
                              )
                            }
                            placeholder="150"
                            className="w-full rounded-lg border border-slate-200 bg-white pl-6 pr-2 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex sm:col-span-1 justify-end">
                      <button
                        type="button"
                        onClick={() => removeLabourRow(item.id)}
                        disabled={labour.length <= 1}
                        title="Delete labour task"
                        className={`p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer ${
                          labour.length <= 1 ? "opacity-30 cursor-not-allowed" : ""
                        }`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-600 px-1 border-t border-slate-200/60 pt-1.5">
                    <span>
                      Task total: <strong className="text-slate-900">{currency}{((Number(item.hours) || 0) * (Number(item.ratePerHour) || 0)).toLocaleString("en-IN")}</strong>
                    </span>
                    <span className="text-slate-500">
                      Per piece: {currency}{(((Number(item.hours) || 0) * (Number(item.ratePerHour) || 0)) / safeQty).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-2">
              <button
                type="button"
                onClick={addLabourRow}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-dashed border-orange-300 bg-orange-50/50 py-2 sm:border-none sm:bg-transparent w-full sm:w-auto text-xs font-bold text-[#FE5905] hover:text-[#d44800] transition cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5" />
                <span>Add Another Labour Task</span>
              </button>
            </div>
          </div>

          {/* STEP 3: FACTORY OVERHEADS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905] font-bold text-xs">
                  3
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Factory Overheads &amp; Utilities
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Batch allocated fixed and running factory expenses
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right bg-orange-50/60 sm:bg-transparent rounded-lg px-2.5 py-1 sm:p-0">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block">Batch Overhead:</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {currency}{Math.round(totalOverhead).toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor={electricityId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Electricity &amp; Power ({currency})
                </label>
                <input
                  id={electricityId}
                  type="number"
                  min="0"
                  value={electricityCost}
                  onChange={(e) =>
                    setElectricityCost(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 1000"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={machineId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Machine Tooling &amp; Wear ({currency})
                </label>
                <input
                  id={machineId}
                  type="number"
                  min="0"
                  value={machineMaintenance}
                  onChange={(e) =>
                    setMachineMaintenance(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 600"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={rentId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Factory Rent Share ({currency})
                </label>
                <input
                  id={rentId}
                  type="number"
                  min="0"
                  value={rentWorkspaceShare}
                  onChange={(e) =>
                    setRentWorkspaceShare(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 1500"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={adminId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Supervisor &amp; Admin ({currency})
                </label>
                <input
                  id={adminId}
                  type="number"
                  min="0"
                  value={adminOverhead}
                  onChange={(e) =>
                    setAdminOverhead(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 500"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* STEP 4: PACKAGING & LOGISTICS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905] font-bold text-xs">
                  4
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    Per-Unit Packaging &amp; Freight
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500">
                    Expenses incurred on each finished product unit
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right bg-orange-50/60 sm:bg-transparent rounded-lg px-2.5 py-1 sm:p-0">
                <span className="text-[10px] sm:text-xs font-semibold text-slate-500 block">Direct Unit Add-ons:</span>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {currency}{totalPerUnitDirect.toFixed(2)}/pc
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label htmlFor={packagingId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Packaging Box / Pouch ({currency}/pc)
                </label>
                <input
                  id={packagingId}
                  type="number"
                  min="0"
                  step="any"
                  value={packagingPerUnit}
                  onChange={(e) =>
                    setPackagingPerUnit(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 15"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={freightId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Doorstep Logistics ({currency}/pc)
                </label>
                <input
                  id={freightId}
                  type="number"
                  min="0"
                  step="any"
                  value={freightPerUnit}
                  onChange={(e) =>
                    setFreightPerUnit(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 25"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={otherUnitCostId} className="block text-xs font-semibold text-slate-700 mb-1">
                  Labels &amp; Other ({currency}/pc)
                </label>
                <input
                  id={otherUnitCostId}
                  type="number"
                  min="0"
                  step="any"
                  value={otherPerUnit}
                  onChange={(e) =>
                    setOtherPerUnit(e.target.value === "" ? "" : Number(e.target.value))
                  }
                  placeholder="e.g. 2"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Live Results & Quotation Panel */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-5">
          <div id="results-card-target" className="rounded-3xl border border-slate-900 bg-slate-950 p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FE5905]/15 blur-3xl" />
            <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative">
              {/* Product Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FE5905]/20 border border-[#FE5905]/40 px-2.5 py-0.5 text-[10px] font-bold text-[#FE5905] uppercase tracking-wider">
                  Live Unit Cost
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Batch: {safeQty.toLocaleString("en-IN")} units
                </span>
              </div>

              {/* Cost Per Unit Figure */}
              <div className="mt-4">
                <span className="text-xs uppercase font-medium text-slate-400 tracking-wider">
                  True Manufacturing Cost (COGS)
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-[#FE5905]">{currency}</span>
                  <span className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white">
                    {unitCost.toFixed(2)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">/ unit</span>
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Total Batch Production Cost:{" "}
                  <strong className="text-slate-200 font-semibold">
                    {currency}{Math.round(totalBatchCost).toLocaleString("en-IN")}
                  </strong>
                </p>
              </div>

              {/* Cost Breakdown Progress Bar */}
              <div className="mt-5 border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2 font-medium">
                  <span>Unit Cost Allocation:</span>
                  <span className="text-slate-400">{matPct}% Materials</span>
                </div>

                <div className="h-3 w-full rounded-full bg-slate-800 flex overflow-hidden p-0.5 gap-0.5">
                  <div
                    style={{ width: `${matPct}%` }}
                    className="h-full rounded-l-full bg-[#FE5905] transition-all duration-300"
                    title={`Raw Materials: ${matPct}%`}
                  />
                  <div
                    style={{ width: `${labPct}%` }}
                    className="h-full bg-amber-400 transition-all duration-300"
                    title={`Labour: ${labPct}%`}
                  />
                  <div
                    style={{ width: `${ovPct}%` }}
                    className="h-full bg-blue-400 transition-all duration-300"
                    title={`Overhead: ${ovPct}%`}
                  />
                  <div
                    style={{ width: `${pkgPct}%` }}
                    className="h-full rounded-r-full bg-emerald-400 transition-all duration-300"
                    title={`Packaging & Freight: ${pkgPct}%`}
                  />
                </div>

                {/* Legend */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800/80 px-2.5 py-1.5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-[#FE5905]" />
                      Materials
                    </span>
                    <span className="font-mono font-bold text-white">
                      {currency}{materialCostPerUnit.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800/80 px-2.5 py-1.5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      Labour
                    </span>
                    <span className="font-mono font-bold text-white">
                      {currency}{labourCostPerUnit.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800/80 px-2.5 py-1.5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      Overhead
                    </span>
                    <span className="font-mono font-bold text-white">
                      {currency}{overheadPerUnit.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-slate-900/90 border border-slate-800/80 px-2.5 py-1.5">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Packaging
                    </span>
                    <span className="font-mono font-bold text-white">
                      {currency}{totalPerUnitDirect.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Margin & Commercial Quotation Block */}
              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={marginRangeId} className="text-xs font-semibold text-slate-200">
                    Factory Profit Margin (Markup)
                  </label>
                  <span className="rounded-md bg-[#FE5905]/20 px-2 py-0.5 text-xs font-bold text-[#FE5905] font-mono">
                    {marginPercent}%
                  </span>
                </div>

                <input
                  id={marginRangeId}
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={marginPercent}
                  onChange={(e) => setMarginPercent(Number(e.target.value))}
                  className="w-full accent-[#FE5905] cursor-pointer"
                />

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>GST Rate:</span>
                  <select
                    id={gstRateId}
                    value={gstRate}
                    onChange={(e) => setGstRate(Number(e.target.value))}
                    className="rounded border border-slate-700 bg-slate-800 px-2 py-1 text-xs font-bold text-white focus:outline-none cursor-pointer"
                  >
                    <option value={0}>0% (Exempt)</option>
                    <option value={5}>5% GST</option>
                    <option value={12}>12% GST</option>
                    <option value={18}>18% GST (Standard)</option>
                    <option value={28}>28% GST</option>
                  </select>
                </div>

                <div className="mt-4 border-t border-slate-800/80 pt-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Profit per Unit:</span>
                    <span className="font-mono font-bold text-emerald-400">
                      +{currency}{unitProfit.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Ex-Factory Selling Price:</span>
                    <span className="font-mono font-bold text-white">
                      {currency}{unitSellingPriceExFactory.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">GST Amount ({gstRate}%):</span>
                    <span className="font-mono font-bold text-slate-300">
                      +{currency}{unitGst.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-sm">
                    <span className="font-semibold text-white">Landed Price (Incl. GST):</span>
                    <span className="font-mono font-black text-base sm:text-lg text-emerald-400">
                      {currency}{unitSellingPriceInclusive.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Total Batch Profit & Invoicing */}
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">
                    Net Batch Profit
                  </span>
                  <p className="mt-0.5 text-sm sm:text-lg font-bold font-mono text-emerald-400">
                    {currency}{Math.round(totalBatchProfit).toLocaleString("en-IN")}
                  </p>
                  <span className="text-[10px] text-slate-500">at {marginPercent}% margin</span>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase">
                    Total Invoice Value
                  </span>
                  <p className="mt-0.5 text-sm sm:text-lg font-bold font-mono text-white">
                    {currency}{Math.round(totalBatchInvoice).toLocaleString("en-IN")}
                  </p>
                  <span className="text-[10px] text-slate-500">
                    incl. {currency}{Math.round(totalBatchGst).toLocaleString("en-IN")} GST
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-4 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#e04f05] active:scale-95 transition cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-white" />
                      <span>Copied Quote</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Quote Summary</span>
                    </>
                  )}
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `*Manufacturing Cost Quote: ${productName}*\nBatch Size: ${safeQty} pcs\nTrue Cost/Unit: ${currency}${unitCost.toFixed(2)}\nEx-Factory Price: ${currency}${unitSellingPriceExFactory.toFixed(2)}\nLanded Price (Incl. GST): ${currency}${unitSellingPriceInclusive.toFixed(2)}\nTotal Batch Value: ${currency}${Math.round(totalBatchInvoice).toLocaleString("en-IN")}\n\nGenerated via EnquiryBazaar Manufacturing Calculator: https://enquirybazaar.in/tools/manufacturing-cost-calculator`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 active:scale-95 transition"
                >
                  <Share2 className="h-4 w-4 text-emerald-400" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* EnquiryBazaar Lead Bridge Box */}
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50/90 via-white to-amber-50/60 p-5 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#FE5905] px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                B2B Manufacturer Growth
              </span>
              <span className="text-[11px] font-medium text-slate-500">By EnquiryBazaar</span>
            </div>
            <h4 className="mt-2 text-sm font-bold text-slate-900">
              Need High-Ticket B2B OEM &amp; Bulk Export Orders?
            </h4>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              Stop fighting price wars on Indiamart or TradeIndia. We rank your manufacturing plant #1 on Google Search and Maps for direct buyer purchase enquiries with zero commission.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <a
                href="https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20used%20your%20Manufacturing%20Cost%20Calculator.%20I%20want%20to%20get%20direct%20high-ticket%20B2B%20manufacturing%20leads%20from%20Google."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 active:scale-95 transition"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>Get B2B Leads Consultation</span>
              </a>

              <a
                href="/lead-generation-agency-for-manufacturers-navi-mumbai"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Floating Bar for Mobile Devices */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 shadow-2xl flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wider">
            Unit Cost (COGS)
          </span>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-[#FE5905]">{currency}</span>
            <span className="text-lg font-black font-mono text-white">
              {unitCost.toFixed(2)}
            </span>
            <span className="text-[10px] text-slate-400">/pc</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={scrollToResults}
            className="inline-flex items-center gap-1 rounded-lg bg-slate-800 border border-slate-700 px-2.5 py-2 text-xs font-semibold text-slate-200 active:scale-95"
          >
            <span>View Quote</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1 rounded-lg bg-[#FE5905] px-3 py-2 text-xs font-bold text-white shadow active:scale-95"
          >
            {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
