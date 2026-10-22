"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, AlertCircle, ArrowRight, Sparkles, Bot, Globe } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function AiSearchAuditTool() {
  const [businessType, setBusinessType] = useState("B2B Manufacturing / Industrial");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [targetQuery, setTargetQuery] = useState("");
  const [step, setStep] = useState(1);

  const businessTypes = [
    "B2B Manufacturing / Industrial",
    "SaaS / Software Product",
    "B2B Professional Services",
    "Healthcare / Medical Supply",
    "Wholesale & Export Trading",
  ];

  const handleGenerateAudit = () => {
    if (!websiteUrl || !targetQuery) return;
    setStep(2);
  };

  const getWhatsAppAuditLink = () => {
    const text = `Hi Amit & EnquiryBazaar Team,\n\nI want to request an AI Search Visibility Audit for my business:\n\n🌐 Website: ${websiteUrl}\n🏢 Business Sector: ${businessType}\n🎯 Target AI Query: "${targetQuery}"\n\nPlease run the live Perplexity & ChatGPT citation audit and share the roadmap.`;
    return `https://wa.me/918887048276?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="audit-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-[#FE5905]">
            <Search className="h-3.5 w-3.5" />
            <span>Diagnostic Tool</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Test Your AI Search &amp; Recommendation Readiness
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Tell us your website and the key query you want AI to recommend you for. We will inspect your entity signals across Perplexity and ChatGPT.
          </p>
        </div>

        {/* Audit Form Container */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 shadow-xs">
          
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  1. Business Sector
                </label>
                <select
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#FE5905] focus:outline-none"
                >
                  {businessTypes.map((t, idx) => (
                    <option key={idx} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Your Website URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#FE5905] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    3. Target AI Prompt / Query *
                  </label>
                  <input
                    type="text"
                    required
                    value={targetQuery}
                    onChange={(e) => setTargetQuery(e.target.value)}
                    placeholder='e.g. "Best CNC machine supplier in Pune"'
                    className="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:border-[#FE5905] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleGenerateAudit}
                  disabled={!websiteUrl || !targetQuery}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-[#ff6f26] transition-colors disabled:opacity-50 cursor-pointer"
                >
                  <span>Analyze AI Search Readiness</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                Checks Schema entity readiness, crawler discoverability, and brand citation consensus.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Audit Summary Prepared
                </span>
                <div className="text-base font-bold text-[#001A55] mt-1">
                  Analysis for {websiteUrl}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Target Query: <span className="font-semibold text-slate-900">&quot;{targetQuery}&quot;</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200">
                  <span className="text-slate-700 font-medium">Schema.org Entity Knowledge Graph:</span>
                  <span className="text-orange-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> Requires Structure
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200">
                  <span className="text-slate-700 font-medium">Standardized llms.txt Protocol:</span>
                  <span className="text-orange-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> Missing on Domain
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg bg-white p-3 border border-slate-200">
                  <span className="text-slate-700 font-medium">Factual Answer Modules:</span>
                  <span className="text-orange-600 font-semibold flex items-center gap-1">
                    <AlertCircle className="h-3.5 w-3.5" /> Optimization Needed
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppAuditLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Get Live AI Audit Report on WhatsApp</span>
                </a>

                <button
                  onClick={() => setStep(1)}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
                >
                  Test Another Query
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-500">
                We will test your live query in ChatGPT Search &amp; Perplexity and share screen captures with recommendations.
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
