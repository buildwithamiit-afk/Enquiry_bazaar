import React from "react";
import { 
  UserCheck, 
  Factory, 
  KeyRound, 
  FileText, 
  Search, 
  MessageCircle, 
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { WHY_ENQUIRYBAZAAR_PILLARS } from "./shopifyData";

export function ShopifyWhyEnquiryBazaar() {
  const pillarIcons = [
    <UserCheck key="user" className="h-5 w-5 text-[#FE5905]" />,
    <Factory key="factory" className="h-5 w-5 text-emerald-600" />,
    <KeyRound key="key" className="h-5 w-5 text-blue-600" />,
    <FileText key="file" className="h-5 w-5 text-amber-600" />,
    <Search key="search" className="h-5 w-5 text-teal-600" />,
    <MessageCircle key="msg" className="h-5 w-5 text-emerald-600" />,
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700">
            <span>The EnquiryBazaar Advantage</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Why Choose EnquiryBazaar as Your Shopify Development Partner
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Most agencies are sales-heavy middlemen who outsource code to junior contractors. We do things differently: senior software engineering, B2B wholesale mastery, and zero locked-in retainers.
          </p>
        </div>

        {/* 6 Key Differentiators Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_ENQUIRYBAZAAR_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
            >
              <div className="inline-flex rounded-xl bg-white p-3 shadow-xs border border-slate-200">
                {pillarIcons[idx]}
              </div>

              <h3 className="mt-4 text-lg font-bold text-slate-900 leading-snug">
                {pillar.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder Authority Profile Card */}
        <div className="mt-12 rounded-2xl border-2 border-[#001A55]/10 bg-gradient-to-r from-slate-900 via-[#001A55] to-slate-900 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-tr from-[#FE5905] to-amber-400 text-white font-black text-2xl shadow-md">
              AP
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-300">
                <span>Technical Leadership</span>
              </div>
              <h3 className="mt-2 text-xl sm:text-2xl font-bold text-white">
                Led by Founder &amp; Software Architect Amit Pandey
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                Serial tech entrepreneur, software engineer, and former founder of Devlo.in. Amit has architected 100+ platforms across 20+ industries and personally reviews the codebase, schema, and checkout performance of every Shopify store built at EnquiryBazaar.
              </p>
              
              <div className="mt-3 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  100+ Digital Systems Engineered
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  20+ Manufacturer Tech Implementations
                </span>
                <a 
                  href="https://www.linkedin.com/in/amit-pandey-86aa62338/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FE5905] hover:text-orange-300 font-semibold transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center rounded-xl bg-[#FE5905] px-5 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#ff6f26] transition-all shadow-md"
              >
                Book Founder Consultation
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
