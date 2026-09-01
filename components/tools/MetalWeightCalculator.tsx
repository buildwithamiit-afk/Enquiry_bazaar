"use client";

import React, { useState, useId } from "react";
import {
  Layers,
  Circle,
  Square,
  Scale,
  Calculator,
  CheckCircle2,
  Copy,
  Share2,
  Zap,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

// Material Densities in g/cm³ (or kg/dm³)
const MATERIALS = [
  { id: "ms", name: "Mild Steel (MS)", density: 7.85, defaultRate: 65 },
  { id: "ss304", name: "Stainless Steel (SS 304)", density: 7.93, defaultRate: 210 },
  { id: "ss316", name: "Stainless Steel (SS 316)", density: 8.00, defaultRate: 310 },
  { id: "al", name: "Aluminum", density: 2.70, defaultRate: 240 },
  { id: "brass", name: "Brass", density: 8.50, defaultRate: 480 },
  { id: "copper", name: "Copper", density: 8.96, defaultRate: 780 },
] as const;

type MaterialId = typeof MATERIALS[number]["id"];
type ShapeType = "sheet" | "round_pipe" | "square_pipe" | "round_bar";

export function MetalWeightCalculator() {
  const lengthId = useId();
  const widthId = useId();
  const thicknessId = useId();
  const outerDiaId = useId();
  const wallThickId = useId();
  const sideDimId = useId();
  const quantityId = useId();
  const ratePerKgId = useId();
  const laserCuttingLengthId = useId();
  const laserRatePerMeterId = useId();

  // State
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialId>("ms");
  const [shape, setShape] = useState<ShapeType>("sheet");

  // Dimensions (Standard Metric in mm & Length in meters / mm)
  const [sheetLengthMm, setSheetLengthMm] = useState<number>(2500); // 2.5m (8 ft)
  const [sheetWidthMm, setSheetWidthMm] = useState<number>(1250);   // 1.25m (4 ft)
  const [thicknessMm, setThicknessMm] = useState<number>(3.0);      // 3mm

  // Round Pipe
  const [pipeOuterDiaMm, setPipeOuterDiaMm] = useState<number>(50); // 50mm OD
  const [pipeWallThickMm, setPipeWallThickMm] = useState<number>(3.0); // 3mm WT
  const [pipeLengthMeters, setPipeLengthMeters] = useState<number>(6.0); // 6m standard length

  // Square / Rectangular Tube
  const [tubeSideAMm, setTubeSideAMm] = useState<number>(50); // 50mm
  const [tubeSideBMm, setTubeSideBMm] = useState<number>(50); // 50mm
  const [tubeWallThickMm, setTubeWallThickMm] = useState<number>(3.0); // 3mm WT
  const [tubeLengthMeters, setTubeLengthMeters] = useState<number>(6.0); // 6m

  // Round Solid Bar
  const [barDiameterMm, setBarDiameterMm] = useState<number>(25); // 25mm dia
  const [barLengthMeters, setBarLengthMeters] = useState<number>(6.0); // 6m

  // Commercials
  const currentMaterialObj = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const [ratePerKg, setRatePerKg] = useState<number>(currentMaterialObj.defaultRate);
  const [quantity, setQuantity] = useState<number>(1);
  const [includeLaserCutting, setIncludeLaserCutting] = useState<boolean>(false);
  const [laserCuttingMeters, setLaserCuttingMeters] = useState<number>(15);
  const [laserRatePerMeter, setLaserRatePerMeter] = useState<number>(18);
  const [copied, setCopied] = useState<boolean>(false);

  // Density factor in g/cm³
  const density = currentMaterialObj.density;

  // Weight Calculation Formulas:
  let singleWeightKg = 0;
  let formulaExplanation = "";

  if (shape === "sheet") {
    // Sheet Plate Formula: Weight (kg) = (Length mm × Width mm × Thickness mm × Density) ÷ 1,000,000
    singleWeightKg = (sheetLengthMm * sheetWidthMm * thicknessMm * density) / 1000000;
    formulaExplanation = `Sheet Weight = (${sheetLengthMm} × ${sheetWidthMm} × ${thicknessMm} × ${density}) ÷ 1,000,000 = ${singleWeightKg.toFixed(2)} kg`;
  } else if (shape === "round_pipe") {
    // Round Pipe Formula: (OD - WT) × WT × 0.02466 × (Density ÷ 7.85) × Length (m)
    // Universal formula: π/4 × (OD² - ID²) × Length × Density
    const od = pipeOuterDiaMm;
    const wt = Math.min(pipeWallThickMm, od / 2);
    const id = od - 2 * wt;
    const crossSectionAreaSqMm = (Math.PI / 4) * (od * od - id * id);
    const volumeCuMm = crossSectionAreaSqMm * (pipeLengthMeters * 1000);
    singleWeightKg = (volumeCuMm * density) / 1000000;
    formulaExplanation = `Pipe Weight = π/4 × (${od}² - ${id.toFixed(1)}²) × ${(pipeLengthMeters * 1000)} mm × (${density} ÷ 10⁶) = ${singleWeightKg.toFixed(2)} kg`;
  } else if (shape === "square_pipe") {
    // Square / Rect Tube Formula:
    // Outer perimeter = 2 * (A + B)
    // Cross-section area ≈ 2 × (A + B - 2×WT) × WT
    const a = tubeSideAMm;
    const b = tubeSideBMm;
    const wt = tubeWallThickMm;
    const outerArea = a * b;
    const innerArea = Math.max(0, (a - 2 * wt) * (b - 2 * wt));
    const crossSectionAreaSqMm = outerArea - innerArea;
    const volumeCuMm = crossSectionAreaSqMm * (tubeLengthMeters * 1000);
    singleWeightKg = (volumeCuMm * density) / 1000000;
    formulaExplanation = `Tube Weight = [(${a}×${b}) - (${(a - 2 * wt)}×${(b - 2 * wt)})] × ${(tubeLengthMeters * 1000)} mm × (${density} ÷ 10⁶) = ${singleWeightKg.toFixed(2)} kg`;
  } else {
    // Round Solid Bar: π/4 × Dia² × Length × Density
    const dia = barDiameterMm;
    const crossSectionAreaSqMm = (Math.PI / 4) * (dia * dia);
    const volumeCuMm = crossSectionAreaSqMm * (barLengthMeters * 1000);
    singleWeightKg = (volumeCuMm * density) / 1000000;
    formulaExplanation = `Round Bar Weight = π/4 × ${dia}² × ${(barLengthMeters * 1000)} mm × (${density} ÷ 10⁶) = ${singleWeightKg.toFixed(2)} kg`;
  }

  // Batch Financials
  const totalWeightKg = singleWeightKg * quantity;
  const rawMetalCost = totalWeightKg * ratePerKg;
  const laserCost = includeLaserCutting ? laserCuttingMeters * laserRatePerMeter * quantity : 0;
  const totalOrderPrice = rawMetalCost + laserCost;

  const handleCopySpec = () => {
    const text = `Metal Weight & Cutting Cost Quotation:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔩 Material: ${currentMaterialObj.name} (Density: ${density} g/cm³)
📐 Shape: ${shape.toUpperCase()}
${shape === "sheet" ? `📏 Dimensions: ${sheetLengthMm} mm × ${sheetWidthMm} mm × ${thicknessMm} mm THK` : ""}
${shape === "round_pipe" ? `📏 Outer Dia: ${pipeOuterDiaMm} mm | Wall Thickness: ${pipeWallThickMm} mm | Length: ${pipeLengthMeters} Meters` : ""}
${shape === "square_pipe" ? `📏 Section: ${tubeSideAMm} × ${tubeSideBMm} mm | Wall: ${tubeWallThickMm} mm | Length: ${tubeLengthMeters} Meters` : ""}
${shape === "round_bar" ? `📏 Diameter: ${barDiameterMm} mm | Length: ${barLengthMeters} Meters` : ""}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚖️ WEIGHT SUMMARY:
• Single Unit Weight: ${singleWeightKg.toFixed(3)} Kg
• Total Quantity: ${quantity.toLocaleString("en-IN")} pcs
• Total Batch Weight: ${totalWeightKg.toFixed(2)} Kg
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💰 COMMERCIAL COSTING:
• Metal Rate: ₹${ratePerKg} / Kg
• Raw Metal Cost: ₹${Math.round(rawMetalCost).toLocaleString("en-IN")}
${includeLaserCutting ? `• Laser Cutting: ${laserCuttingMeters}m @ ₹${laserRatePerMeter}/m = ₹${Math.round(laserCost).toLocaleString("en-IN")}\n` : ""}• TOTAL ORDER VALUE: ₹${Math.round(totalOrderPrice).toLocaleString("en-IN")}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Calculated via EnquiryBazaar.in Metal Engineering Calculator`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row">

          {/* Left Column: Form Controls */}
          <div className="w-full lg:w-7/12 p-5 sm:p-6 lg:p-7">
            <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 sm:p-5">
              
              {/* Header */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-[#FE5905]">
                  <Layers className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  1. Material & Shape Selection
                </h3>
              </div>

              {/* Material Selector Grid */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Select Metal Alloy
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {MATERIALS.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      onClick={() => {
                        setSelectedMaterial(mat.id);
                        setRatePerKg(mat.defaultRate);
                      }}
                      className={`h-10 rounded-lg border px-2.5 text-left text-xs font-bold transition cursor-pointer flex flex-col justify-center ${
                        selectedMaterial === mat.id
                          ? "border-[#FE5905] bg-[#FE5905] text-white shadow-xs"
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span className="truncate">{mat.name}</span>
                      <span className={`text-[10px] font-medium ${selectedMaterial === mat.id ? "text-orange-100" : "text-slate-400"}`}>
                        {mat.density} g/cm³
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Shape Selector */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-slate-600 mb-1.5">
                  Cross-Section Shape
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "sheet", label: "Sheet / Plate", icon: Square },
                    { id: "round_pipe", label: "Round Pipe", icon: Circle },
                    { id: "square_pipe", label: "Square Tube", icon: Square },
                    { id: "round_bar", label: "Round Bar", icon: Circle },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setShape(s.id as ShapeType)}
                        className={`h-11 rounded-lg border p-1.5 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                          shape === s.id
                            ? "border-slate-900 bg-slate-900 text-white shadow-xs"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        <span>{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Dimensions Inputs according to shape */}
              <div className="border-t border-slate-200 pt-3.5 mb-4">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2.5">
                  2. Dimensions & Measurements
                </span>

                {shape === "sheet" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor={lengthId} className="block text-xs font-medium text-slate-600 mb-1">
                        Length (L)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          id={lengthId}
                          type="number"
                          min="1"
                          step="10"
                          value={sheetLengthMm}
                          onChange={(e) => setSheetLengthMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
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
                          step="10"
                          value={sheetWidthMm}
                          onChange={(e) => setSheetWidthMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={thicknessId} className="block text-xs font-medium text-slate-600 mb-1">
                        Thickness (T)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          id={thicknessId}
                          type="number"
                          min="0.1"
                          step="0.5"
                          value={thicknessMm}
                          onChange={(e) => setThicknessMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
                      </div>
                    </div>
                  </div>
                )}

                {shape === "round_pipe" && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor={outerDiaId} className="block text-xs font-medium text-slate-600 mb-1">
                        Outer Diameter (OD)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          id={outerDiaId}
                          type="number"
                          min="1"
                          step="1"
                          value={pipeOuterDiaMm}
                          onChange={(e) => setPipeOuterDiaMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor={wallThickId} className="block text-xs font-medium text-slate-600 mb-1">
                        Wall Thickness (WT)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          id={wallThickId}
                          type="number"
                          min="0.5"
                          step="0.5"
                          value={pipeWallThickMm}
                          onChange={(e) => setPipeWallThickMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Length
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          min="0.1"
                          step="0.5"
                          value={pipeLengthMeters}
                          onChange={(e) => setPipeLengthMeters(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">Meters</span>
                      </div>
                    </div>
                  </div>
                )}

                {shape === "square_pipe" && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <div>
                      <label htmlFor={sideDimId} className="block text-xs font-medium text-slate-600 mb-1">
                        Side A
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          id={sideDimId}
                          type="number"
                          value={tubeSideAMm}
                          onChange={(e) => setTubeSideAMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-2 text-xs font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Side B
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          value={tubeSideBMm}
                          onChange={(e) => setTubeSideBMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-2 text-xs font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Wall (WT)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          step="0.5"
                          value={tubeWallThickMm}
                          onChange={(e) => setTubeWallThickMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-2 text-xs font-medium text-slate-400">mm</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Length
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          step="0.5"
                          value={tubeLengthMeters}
                          onChange={(e) => setTubeLengthMeters(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-2 text-xs font-medium text-slate-400">M</span>
                      </div>
                    </div>
                  </div>
                )}

                {shape === "round_bar" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Bar Diameter (Ø)
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={barDiameterMm}
                          onChange={(e) => setBarDiameterMm(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">mm</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-600 mb-1">
                        Length
                      </label>
                      <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                        <input
                          type="number"
                          min="0.1"
                          step="0.5"
                          value={barLengthMeters}
                          onChange={(e) => setBarLengthMeters(parseFloat(e.target.value) || 0)}
                          className="w-full rounded-l-lg bg-transparent py-2 pl-3 text-sm font-bold text-slate-900 focus:outline-none"
                        />
                        <span className="flex items-center pr-3 text-xs font-medium text-slate-400 select-none">Meters</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Commercials & Laser Cutting Add-on */}
              <div className="border-t border-slate-200 pt-3.5 space-y-3">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  3. Pricing, Quantity & Job-Work
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Metal Rate Per Kg */}
                  <div>
                    <label htmlFor={ratePerKgId} className="block text-xs font-medium text-slate-600 mb-1">
                      Raw Metal Rate (₹ / Kg)
                    </label>
                    <div className="flex h-10 w-full rounded-lg border border-slate-300 bg-white transition focus-within:border-[#FE5905] focus-within:ring-2 focus-within:ring-orange-500/20">
                      <span className="flex items-center pl-3.5 pr-2 text-sm font-semibold text-slate-400 select-none">
                        ₹
                      </span>
                      <input
                        id={ratePerKgId}
                        type="number"
                        min="1"
                        value={ratePerKg}
                        onChange={(e) => setRatePerKg(parseFloat(e.target.value) || 0)}
                        className="w-full rounded-r-lg bg-transparent py-2 pr-3 text-sm font-bold text-slate-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label htmlFor={quantityId} className="block text-xs font-medium text-slate-600 mb-1">
                      Total Quantity (Pieces)
                    </label>
                    <input
                      id={quantityId}
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
                      className="w-full h-10 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Laser Cutting Job-Work Addon Checkbox */}
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeLaserCutting}
                      onChange={(e) => setIncludeLaserCutting(e.target.checked)}
                      className="h-4 w-4 rounded text-[#FE5905] focus:ring-[#FE5905]"
                    />
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      Add CNC Laser Cutting / Job-Work Charges
                    </span>
                  </label>

                  {includeLaserCutting && (
                    <div className="grid grid-cols-2 gap-3 mt-2.5 pt-2 border-t border-slate-100">
                      <div>
                        <label htmlFor={laserCuttingLengthId} className="block text-[11px] font-medium text-slate-600 mb-1">
                          Cutting Perimeter (Meters / pc)
                        </label>
                        <input
                          id={laserCuttingLengthId}
                          type="number"
                          step="0.5"
                          value={laserCuttingMeters}
                          onChange={(e) => setLaserCuttingMeters(parseFloat(e.target.value) || 0)}
                          className="w-full h-8 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor={laserRatePerMeterId} className="block text-[11px] font-medium text-slate-600 mb-1">
                          Laser Rate (₹ / Meter)
                        </label>
                        <input
                          id={laserRatePerMeterId}
                          type="number"
                          step="1"
                          value={laserRatePerMeter}
                          onChange={(e) => setLaserRatePerMeter(parseFloat(e.target.value) || 0)}
                          className="w-full h-8 rounded-lg border border-slate-300 bg-white px-2.5 text-xs font-bold text-slate-900 focus:border-[#FE5905] focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Live Weight & Price Dashboard */}
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
                      Calculated Metal Weight
                    </h4>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    Standard Density
                  </span>
                </div>

                {/* Main Single Weight Hero Display */}
                <div className="rounded-xl bg-gradient-to-b from-orange-50/80 to-amber-50/30 border border-orange-100 p-4 text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-orange-200/60 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-700">
                    Weight Per Piece
                  </span>

                  <div className="my-2 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FE5905]">
                      {singleWeightKg.toFixed(2)}
                    </span>
                    <span className="text-sm font-bold text-slate-500">Kg / piece</span>
                  </div>

                  <p className="text-[11px] font-medium text-slate-600">
                    Material: <strong>{currentMaterialObj.name}</strong> ({density} g/cm³)
                  </p>
                </div>

                {/* Summary Metrics */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-3">
                    <span className="text-[10px] font-medium text-slate-500 block">Total Batch Weight</span>
                    <p className="mt-0.5 text-base font-bold text-slate-900">
                      {totalWeightKg.toFixed(2)} Kg
                    </p>
                    <span className="text-[9px] text-slate-400">~{(totalWeightKg / 1000).toFixed(3)} Metric Tons</span>
                  </div>

                  <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-3">
                    <span className="text-[10px] font-medium text-emerald-700 block">Total Order Price</span>
                    <p className="mt-0.5 text-base font-bold text-emerald-700">
                      ₹{Math.round(totalOrderPrice).toLocaleString("en-IN")}
                    </p>
                    <span className="text-[9px] text-emerald-600 font-medium">@ ₹{ratePerKg}/Kg</span>
                  </div>
                </div>

                {/* Price Step Breakdown Table */}
                <div className="mt-3 divide-y divide-slate-100 text-xs">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500">Raw Metal Material:</span>
                    <span className="font-semibold text-slate-900">₹{Math.round(rawMetalCost).toLocaleString("en-IN")}</span>
                  </div>
                  {includeLaserCutting && (
                    <div className="flex items-center justify-between py-2">
                      <span className="text-slate-500">Laser Cutting ({laserCuttingMeters}m × {quantity} pcs):</span>
                      <span className="font-semibold text-slate-900">+₹{Math.round(laserCost).toLocaleString("en-IN")}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-2 font-bold text-slate-900 border-t border-slate-200">
                    <span>Estimated Total (Ex-Factory):</span>
                    <span className="text-sm text-[#FE5905]">₹{Math.round(totalOrderPrice).toLocaleString("en-IN")}</span>
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
                    <span>{copied ? "Specs Copied!" : "Copy Metal Specs"}</span>
                  </button>

                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Metal Weight Quote: ${currentMaterialObj.name}, ${shape.toUpperCase()}, Weight: ${singleWeightKg.toFixed(2)}kg/pc, Total: ${totalWeightKg.toFixed(2)}kg, Value: ₹${Math.round(totalOrderPrice).toLocaleString("en-IN")}. Calculated on EnquiryBazaar: https://enquirybazaar.in/tools/metal-weight-calculator`
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
                  <span>Exact Mathematical Formula Used:</span>
                </div>
                <div className="space-y-1 text-[11px] text-blue-900/90 font-mono leading-relaxed break-words">
                  <p>• {formulaExplanation}</p>
                  <p>• <strong>Batch Total:</strong> {singleWeightKg.toFixed(2)} kg × {quantity} pcs = <strong>{totalWeightKg.toFixed(2)} kg</strong></p>
                  <p>• <strong>Metal Cost:</strong> {totalWeightKg.toFixed(2)} kg × ₹{ratePerKg}/kg = <strong>₹{Math.round(rawMetalCost).toLocaleString("en-IN")}</strong></p>
                </div>
              </div>

              {/* EnquiryBazaar Lead Bridge Box */}
              <div className="rounded-xl border border-orange-100 bg-gradient-to-r from-orange-50/80 via-white to-amber-50/80 p-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FE5905] px-2.5 py-0.5 text-[9px] font-bold uppercase text-white">
                  Fabrication Growth
                </span>
                <h4 className="mt-1.5 text-sm font-semibold text-slate-900">
                  Tired of Low-Margin Job Work for Traders?
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Get direct manufacturing and fabrication contracts from industrial project heads and procurement managers with EnquiryBazaar. 100% exclusive buyer leads.
                </p>

                <a
                  href="https://wa.me/919696717305?text=Hi%20EnquiryBazaar%2C%20I%20run%20a%20metal%20fabrication%2Flaser%20cutting%20unit.%20I%20want%20direct%20OEM%20and%20industrial%20buyer%20contracts%20without%20middlemen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 h-9 rounded-lg bg-emerald-600 px-3 py-1.5 text-[11px] font-medium text-white shadow-sm transition hover:bg-emerald-500 active:scale-95"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  <span>Get Direct OEM Contracts</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
