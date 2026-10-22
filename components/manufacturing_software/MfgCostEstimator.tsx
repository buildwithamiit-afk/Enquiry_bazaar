"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Factory 
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const industries = [
  { id: "packaging", name: "Corrugated Box & Packaging", typicalMoq: "5,000 Boxes", need: "Box weight calculation & landed price matrix" },
  { id: "metal", name: "Metal Fabrication & CNC Machining", typicalMoq: "500 Pcs", need: "Job card tracking & technical CAD drawing upload" },
  { id: "plastics", name: "Plastics & Polymer Molding", typicalMoq: "10,000 Units", need: "Mold tracking, raw granule stock & digital catalog" },
  { id: "chemicals", name: "Industrial Chemicals & Lubricants", typicalMoq: "20 Drums / 1 Tonne", need: "MSDS/COA downloads & distributor orders" },
  { id: "electrical", name: "Electrical & Switchgears", typicalMoq: "100 Units", need: "CPRI/IS standards & tender RFQ funnel" },
  { id: "textiles", name: "Textiles, Yarns & Garments", typicalMoq: "1,000 Metres", need: "Digital shade cards & export RFQ format" },
  { id: "machinery", name: "Heavy Machinery & Automation", typicalMoq: "1 - 5 Machines", need: "Technical specs, plant video tours & inquiry capture" },
  { id: "other", name: "Other Industrial Manufacturing", typicalMoq: "Custom Wholesale", need: "Tailored production workflow & catalog" },
];

const scopeOptions = [
  {
    id: "website",
    title: "Factory Catalog Website",
    desc: "Digital showcase with technical data sheets (TDS), plant machinery photos, and direct WhatsApp RFQ buttons.",
    estTimeline: "10 - 14 Days",
  },
  {
    id: "landing",
    title: "B2B Product Landing Page",
    desc: "Built for Google Ads and search inquiries with minimum order quantity (MOQ) qualification forms.",
    estTimeline: "5 - 7 Days",
  },
  {
    id: "software",
    title: "Custom Factory ERP & Quoting Software",
    desc: "Private web-based system for automated landed quoting, production job cards, and raw material tracking.",
    estTimeline: "3 - 5 Weeks",
  },
  {
    id: "all_in_one",
    title: "Complete Digital Setup",
    desc: "Factory catalog website + custom quoting ERP + B2B landing pages with WhatsApp integration.",
    estTimeline: "4 - 6 Weeks",
  },
];

const scaleOptions = [
  { id: "single", label: "Single Unit (10 - 50 Workers)" },
  { id: "growing", label: "Multi-Line Plant (50 - 200 Workers)" },
  { id: "enterprise", label: "Multi-Plant Enterprise (200+ Workers)" },
];

export function MfgCostEstimator() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0].id);
  const [selectedScope, setSelectedScope] = useState(scopeOptions[0].id);
  const [selectedScale, setSelectedScale] = useState(scaleOptions[0].id);

  const currentIndustry = industries.find((i) => i.id === selectedIndustry) || industries[0];
  const currentScope = scopeOptions.find((s) => s.id === selectedScope) || scopeOptions[0];
  const currentScale = scaleOptions.find((sc) => sc.id === selectedScale) || scaleOptions[0];

  const generateWhatsAppMessage = () => {
    const text = `Hi Amit & EnquiryBazaar Team,\n\nI used your scope estimator on your website:\n\n🏭 Industry: ${currentIndustry.name}\n📦 Requirement: ${currentScope.title}\n🏢 Scale: ${currentScale.label}\n⏳ Estimated Timeline: ${currentScope.estTimeline}\n\nPlease share the technical proposal and commercial quote.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="estimator-section" className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700">
            <Calculator className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Configure Your Scope &amp; Timeline
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Select your industry and project scope to see estimated delivery timelines and request a detailed proposal.
          </p>
        </div>

        {/* 2-Column Estimator Layout */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-xs">
            
            {/* Step 1: Industry Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                1. Select Industry
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                      selectedIndustry === ind.id
                        ? "border-[#FE5905] bg-orange-50/50 text-[#001A55] font-semibold ring-1 ring-[#FE5905]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <span>{ind.name}</span>
                    {selectedIndustry === ind.id && <Check className="h-3.5 w-3.5 text-[#FE5905] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Primary Requirement Scope */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                2. Select Project Scope
              </label>
              <div className="space-y-2.5">
                {scopeOptions.map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => setSelectedScope(scope.id)}
                    className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer ${
                      selectedScope === scope.id
                        ? "border-[#001A55] bg-slate-50/50 ring-1 ring-[#001A55]"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">{scope.title}</span>
                      <span className="text-xs text-slate-500 font-medium">{scope.estTimeline}</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 leading-normal">
                      {scope.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Factory Scale */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                3. Operational Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scaleOptions.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScale(sc.id)}
                    className={`p-2.5 rounded-lg border text-xs text-center font-medium transition-all cursor-pointer ${
                      selectedScale === sc.id
                        ? "border-[#001A55] bg-[#001A55] text-white font-semibold"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Summary Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Project Estimate Summary
                </span>
                <div className="text-lg font-bold text-[#001A55] mt-1">
                  {currentScope.title}
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Industry:</span>
                  <span className="font-semibold text-slate-900 text-right">{currentIndustry.name}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Estimated Timeline:</span>
                  <span className="font-semibold text-emerald-700">{currentScope.estTimeline}</span>
                </div>

                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-500">Code Ownership:</span>
                  <span className="font-semibold text-slate-900">100% Client Owned</span>
                </div>

                <div className="rounded-lg bg-slate-50 p-3 text-xs text-slate-600 border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">Recommended Module:</span>
                  {currentIndustry.need}
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/918887048276?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[#ff6f26] transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Get Detailed Proposal on WhatsApp</span>
                  </a>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  Consult directly with Founder &amp; Architect <strong>Amit Pandey</strong>.
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
