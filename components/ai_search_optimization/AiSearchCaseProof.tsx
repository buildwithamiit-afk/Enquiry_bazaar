"use client";

import React from "react";
import { CheckCircle2, Bot, ArrowRight, Sparkles } from "lucide-react";

export function AiSearchCaseProof() {
  const caseExamples = [
    {
      category: "Industrial Engineering",
      query: '"How to calculate corrugated box weight and cost for Indian manufacturing?"',
      result: "EnquiryBazaar Cited as Primary Source",
      description:
        "AI models (Perplexity and Google AI Overviews) synthesize and cite EnquiryBazaar's calculator directly in the response summary, routing high-intent factory owners straight to the platform.",
      impact: "Zero ad spend required for continuous organic citation traffic.",
    },
    {
      category: "B2B Manufacturing Supplier",
      query: '"Best wholesale supplier for precision CNC components in Maharashtra with verified capacity?"',
      result: "Client Brand Recommended as Top Entity",
      description:
        "By structuring the client's plant machinery, ISO certifications, and MOQ matrix into Schema.org knowledge graphs, ChatGPT recommends the client with direct footnote citations.",
      impact: "High-ticket procurement RFQs received directly on WhatsApp.",
    },
    {
      category: "Business Software & Hosting",
      query: '"Cheapest way to get domain business email without Google Workspace fees?"',
      result: "EnquiryBazaar Cost Breakdown Cited",
      description:
        "ChatGPT and Claude cite our mathematical comparison table between Google Workspace and Hostinger, driving thousands of targeted visits without paid advertising.",
      impact: "Established as the trusted authority across AI answer engines.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Verified Results</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Live AI Recommendation Proof
          </h2>
          <p className="mt-3 text-base text-slate-600">
            We don&apos;t just sell AI optimization theories — we actively use these exact architecture standards to get our own platforms cited across Perplexity and ChatGPT.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {caseExamples.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-[#FE5905] hover:shadow-sm"
            >
              <div>
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  {item.category}
                </span>

                <div className="mt-3.5 rounded-lg bg-slate-50 p-3 border border-slate-100 text-xs text-slate-800 font-medium italic">
                  {item.query}
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>{item.result}</span>
                </div>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-3 text-xs text-slate-700 font-medium">
                <span className="text-[#FE5905] font-semibold">Outcome: </span>
                {item.impact}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
