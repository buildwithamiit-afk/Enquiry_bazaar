"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function MfgCaseStudies() {
  const cases = [
    {
      industry: "Corrugated Packaging Manufacturer",
      location: "Navi Mumbai Industrial Area",
      problem: "Preparing customized quotation estimates in manual spreadsheets took hours per client, and general contact forms brought in single-piece retail shoppers.",
      solution: "Engineered an automated box dimension, GSM and landed pricing calculator with minimum order quantity (MOQ) screening forms.",
      results: [
        "Quotation turnaround reduced from 3 hours to under 60 seconds",
        "Filtered out retail inquiries, receiving exclusively wholesale RFQs",
        "Direct quotation PDF delivery to clients on WhatsApp",
      ],
      tag: "Packaging",
    },
    {
      industry: "Precision CNC Machining & Flanges",
      location: "Pune Industrial Corridor",
      problem: "Domestic and international export buyers needed technical data sheets (TDS) and machinery capability lists before shortlisting for tender bids.",
      solution: "Built a fast Next.js technical catalog with downloadable CAD/TDS spec sheets, material grade specifications, and plant inspection proofs.",
      results: [
        "Secured direct corporate supply contracts with zero middleman fees",
        "Seamless mobile viewing for procurement managers on the go",
        "High trust image established for European & Middle East export buyers",
      ],
      tag: "Engineering",
    },
    {
      industry: "Polymer Compounds & Masterbatches",
      location: "Gujarat Industrial Estate",
      problem: "B2B dealers and distributors sent orders through disorganized messaging, leading to dispatch confusion and inventory tracking errors.",
      solution: "Developed a private web-based dealer ordering portal with live stock availability, batch shade card catalogs, and dispatch notifications.",
      results: [
        "Eliminated order dispatch and shade mismatch errors",
        "Dealer re-order turnaround improved by 25%",
        "Full client code ownership without recurring third-party software fees",
      ],
      tag: "Chemicals",
    },
  ];

  return (
    <section id="case-studies-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Case Studies</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Real Factory Implementations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Examples of how custom software and technical web catalogs solved operational and lead qualification bottlenecks.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-sm"
            >
              <div>
                <span className="rounded-md bg-slate-200/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  {cs.tag}
                </span>

                <h3 className="mt-3 text-base font-bold text-slate-900">
                  {cs.industry}
                </h3>
                <span className="text-xs text-slate-500 block mt-0.5">
                  📍 {cs.location}
                </span>

                <div className="mt-4 space-y-2.5 text-xs text-slate-600 leading-relaxed">
                  <div>
                    <strong className="text-slate-800 font-semibold block">Challenge:</strong>
                    <span>{cs.problem}</span>
                  </div>

                  <div>
                    <strong className="text-slate-800 font-semibold block">Solution:</strong>
                    <span>{cs.solution}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-200/80 pt-3.5">
                <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Key Outcomes:
                </span>
                <div className="space-y-1.5 text-xs text-slate-700">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
