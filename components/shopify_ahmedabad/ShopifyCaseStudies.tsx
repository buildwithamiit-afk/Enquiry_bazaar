import React from "react";
import { 
  Building2, 
  MapPin, 
  AlertCircle, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { CASE_STUDIES } from "./shopifyData";

export function ShopifyCaseStudies() {
  return (
    <section id="case-studies" className="relative py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
            <span>Verified Track Record</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Our Work: Real Stores Built for Indian Brands &amp; Manufacturers
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Measurable speed improvements, higher mobile checkout conversions, and automated B2B dealer workflows built on Shopify.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 text-[#FE5905] px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                    {study.badge}
                  </span>
                  
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>{study.location}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#001A55] leading-snug">
                  {study.clientType}
                </h3>

                <div className="text-xs font-semibold text-slate-500 mt-1">
                  Industry: {study.industry}
                </div>

                {/* Challenge */}
                <div className="mt-4 rounded-xl bg-rose-50/70 border border-rose-100 p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                    <AlertCircle className="h-3.5 w-3.5 text-rose-600" />
                    <span>The Challenge:</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* What We Built */}
                <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                    <span>What We Built:</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-700 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                {/* Measurable Results */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Quantifiable Results:</span>
                  </div>
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs font-medium text-slate-800">
                      <span className="text-emerald-600 font-bold">&bull;</span>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href="#quote-form"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#001A55] py-2.5 text-xs font-bold text-white hover:bg-[#FE5905] transition-colors"
                >
                  <span>Build a Similar Store for My Brand</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
