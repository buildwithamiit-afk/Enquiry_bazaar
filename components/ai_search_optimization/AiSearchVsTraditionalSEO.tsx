"use client";

import React from "react";
import { Check, X, Sparkles, ArrowRight } from "lucide-react";

export function AiSearchVsTraditionalSEO() {
  const comparison = [
    {
      feature: "Search Output",
      traditional: "List of 10 blue links crowded by sponsored ads",
      geo: "Direct synthesized answer with brand recommendation & citation",
    },
    {
      feature: "Ranking Mechanism",
      traditional: "Keyword density and volume of raw backlinks",
      geo: "Entity recognition, Schema.org graph, and factual density",
    },
    {
      feature: "Crawler Architecture",
      traditional: "Standard sitemap.xml and HTML scraping",
      geo: "Structured Schema, semantic markdown, and standardized llms.txt",
    },
    {
      feature: "User Interaction",
      traditional: "User clicks back and forth through multiple websites",
      geo: "User asks conversational follow-up questions leading to your brand",
    },
    {
      feature: "Traffic Intent",
      traditional: "Mixed general browsing with high bounce rates",
      geo: "High-ticket buyers seeking qualified vendor recommendations",
    },
    {
      feature: "Long-Term Moat",
      traditional: "Vulnerable to frequent Google core algorithm updates",
      geo: "Permanent entity consensus established inside LLM training weights",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Market Evolution</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Traditional SEO vs Generative Engine Optimization (GEO)
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Why ranking on page one of Google is no longer enough when buyers are asking ChatGPT and Perplexity for vendor recommendations.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[650px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                <th className="p-4 sm:p-5 w-1/4">Evaluation Dimension</th>
                <th className="p-4 sm:p-5 text-slate-500 w-1/3">Traditional SEO (Old Model)</th>
                <th className="p-4 sm:p-5 font-bold text-[#001A55] bg-orange-50/60 border-l border-orange-200/80">
                  <div className="flex items-center gap-1.5 text-[#FE5905]">
                    <Sparkles className="h-4 w-4" />
                    <span>Generative Engine Optimization (GEO)</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-slate-500">{row.traditional}</td>
                  <td className="p-4 sm:p-5 font-medium text-slate-900 bg-orange-50/20 border-l border-orange-200/80">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#FE5905] shrink-0 mt-0.5" />
                      <span>{row.geo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
