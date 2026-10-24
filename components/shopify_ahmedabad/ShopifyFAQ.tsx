import React from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { SHOPIFY_FAQS } from "./shopifyData";

export function ShopifyFAQ() {
  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Clear Answers, Zero Confusion</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Frequently Asked Questions (Shopify Development in Ahmedabad)
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about Shopify costs, B2B wholesale features, WooCommerce migration, Indian payment gateways, and store ownership.
          </p>
        </div>

        {/* 15 FAQs Accordion using native accessible HTML details for full SSR and AI Crawler indexing */}
        <div className="mt-12 space-y-4">
          {SHOPIFY_FAQS.map((faq, idx) => (
            <details
              key={idx}
              open={idx < 2} // First 2 open by default, all crawlable in raw server HTML
              className="group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900 transition-colors group-hover:text-[#001A55]">
                <div className="flex items-center gap-3 text-base sm:text-lg leading-snug">
                  <span className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg bg-orange-50 text-xs font-black text-[#FE5905]">
                    {idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </div>

                <div className="shrink-0 rounded-full bg-slate-100 p-1.5 text-slate-500 transition-transform duration-200 group-open:rotate-180 group-open:bg-orange-100 group-open:text-[#FE5905]">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </summary>

              <div className="mt-4 pt-3 border-t border-slate-100 pl-10 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                <p>{faq.answer}</p>
                {faq.category && (
                  <div className="mt-3 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                    Topic: {faq.category}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 rounded-2xl bg-white border border-slate-200 p-6 text-center shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#001A55]">
            Have a specific question about your store or ERP setup?
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600">
            Speak directly with software architect Amit Pandey on WhatsApp or schedule a free 15-minute call.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#quote-form"
              className="rounded-xl bg-[#FE5905] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-[#ff6f26] transition-colors shadow-sm"
            >
              Request Quick Answer
            </a>
            <a
              href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20have%20a%20question%20regarding%20Shopify%20store%20development%20in%20Ahmedabad."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
