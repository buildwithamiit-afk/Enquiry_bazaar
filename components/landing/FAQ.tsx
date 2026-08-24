"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { whatsappCta, consultationCta } from "./content";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

interface FAQItem {
  question: string;
  answer: string;
}

const faqList: FAQItem[] = [
  {
    question: "How is EnquiryBazaar different from IndiaMART, Justdial, or TradeIndia?",
    answer:
      "On IndiaMART or Justdial, one inquiry is forwarded to 8 to 10 competing suppliers at the same time, triggering an immediate price war. With EnquiryBazaar, we build your own dedicated digital presence (Google #1 ranking, factory website, and targeted B2B ads). Every phone call and WhatsApp inquiry comes 100% exclusively to you with zero competitor sharing.",
  },
  {
    question: "Will I get serious bulk buyers or retail / single-piece inquiries?",
    answer:
      "Our system is specifically engineered for B2B manufacturers. We implement strict negative keyword filtering and clear Minimum Order Quantity (MOQ) callouts across your Google search setup and ads. This filters out 90%+ of retail consumers and price checkers, ensuring your sales team speaks only with genuine wholesale procurement managers.",
  },
  {
    question: "How quickly will we start receiving direct buyer inquiries?",
    answer:
      "Your Google Business Profile (GMB) and factory website setup are typically live within 7 to 10 days. Targeted B2B Google & Meta ads can begin delivering direct incoming inquiries within the first 48 to 72 hours of launch. Organic top Google SEO rankings compound and grow steadily over 30 to 90 days.",
  },
  {
    question: "Do you charge any commission on the orders we close?",
    answer:
      "No, absolutely zero commission. We charge a straightforward management and setup fee. 100% of every deal, advance payment, and repeat order belongs entirely to you.",
  },
  {
    question: "What if our team has no technical knowledge about digital marketing?",
    answer:
      "You don't need any technical skills. EnquiryBazaar is a 100% done-for-you service. You get a dedicated B2B Growth Manager and specialist team handling your Google SEO, website development, ad campaigns, and digital catalog. All your team has to do is answer the incoming buyer calls and WhatsApp inquiries.",
  },
  {
    question: "Who owns the website, domain, Google rankings, and customer leads?",
    answer:
      "You own 100% of all assets permanently. The domain name, website files, Google Business Profile, and buyer inquiry database are registered under your business name. Unlike B2B directories where your business disappears when you stop paying, your EnquiryBazaar digital assets remain yours forever.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`relative bg-white py-16 sm:py-24 ${inter.className}`}>
      
      {/* Subtle Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.25rem] leading-tight ${montserrat.className}`}>
            Got Questions? We Have Answers.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about getting direct buyer inquiries and growing your manufacturing business.
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="mt-10 space-y-3">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-blue-500/40 bg-blue-50/20 shadow-sm"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-[15.5px] font-bold text-[#0B1E3D] ${montserrat.className}`}>
                    {faq.question}
                  </span>
                  <div
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-[#1E5EFF] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 mt-1">
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions? Banner */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/80 p-6 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
          <div>
            <h4 className={`text-base font-bold text-[#0B1E3D] ${montserrat.className}`}>
              Still have questions about your specific industry?
            </h4>
            <p className="mt-1 text-xs text-slate-600">
              Speak directly with our B2B growth strategist on WhatsApp.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 shrink-0">
            <a
              href={whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs sm:text-[13px] font-bold text-white shadow-sm transition hover:bg-emerald-500 active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
