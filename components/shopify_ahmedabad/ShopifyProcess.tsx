import React from "react";
import { CheckCircle2, Calendar, ArrowRight, ShieldAlert } from "lucide-react";
import { PROCESS_STEPS } from "./shopifyData";

export function ShopifyProcess() {
  return (
    <section id="process" className="relative py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700">
            <Calendar className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Structured 5-Stage Roadmap</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Our Shopify Development Process (From Concept to Revenue)
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            We follow a milestone-based sprint methodology with continuous staging previews. You never wonder what is happening with your store.
          </p>
        </div>

        {/* 5 Steps Timeline Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#FE5905]">
                    {step.step}
                  </span>
                  <span className="rounded-full bg-slate-200/80 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
                    {step.days}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/70">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Milestone Deliverable:
                </div>
                <div className="mt-1 flex items-start gap-1.5 text-xs font-medium text-emerald-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Variance Clarification */}
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-600 flex items-center gap-3">
          <ShieldAlert className="h-5 w-5 text-[#FE5905] shrink-0" />
          <span>
            <strong>Timeline note:</strong> Simple Starter Stores with ready product photography can go live in 1 to 2 weeks. Custom B2B portals, custom app logic, and legacy ERP integrations require 3 to 6 weeks for thorough testing.
          </span>
        </div>

      </div>
    </section>
  );
}
