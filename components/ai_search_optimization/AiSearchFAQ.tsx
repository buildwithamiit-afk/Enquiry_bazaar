"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { aiSearchFaqList } from "./aiSearchFaqData";

export function AiSearchFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <HelpCircle className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Everything About Generative Engine Optimization (GEO)
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Clear answers on how AI models evaluate websites, ranking timelines, and why entity authority matters.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {aiSearchFaqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors hover:bg-slate-50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-orange-100 text-[#FE5905]" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
