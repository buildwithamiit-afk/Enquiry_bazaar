"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { hostingFaqs } from "@/lib/hostingData";

export function HostingerFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-slate-50 py-14 sm:py-20 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#FE5905]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Everything About Hostinger Deals, Email &amp; Free Support
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Real answers to common pre-purchase questions and setup doubts.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-8 space-y-3">
          {hostingFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white shadow-xs transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-xs sm:text-sm font-bold text-[#001A55] hover:text-[#FE5905] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#FE5905]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="mt-2">{faq.a}</p>
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
