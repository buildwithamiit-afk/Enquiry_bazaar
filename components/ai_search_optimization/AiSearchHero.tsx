"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Sparkles, Bot, ShieldCheck, Search, CornerDownRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function AiSearchHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-white pt-12 pb-16 sm:pt-16 sm:pb-24">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[950px] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(254,89,5,0.06),transparent_70%)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#001A55 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50/80 px-3.5 py-1.5 text-xs font-semibold text-[#FE5905] shadow-2xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Generative Engine Optimization (GEO) &amp; AI Search Agency</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#001A55] sm:text-4xl md:text-5xl lg:text-[46px] leading-tight">
              Get Your Business Recommended by{" "}
              <span className="text-[#FE5905]">ChatGPT, Perplexity &amp; Google AI</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              When high-value prospective buyers ask AI tools: <em className="text-slate-800 font-medium">&quot;Who is the best company for your product or service?&quot;</em>, does AI recommend your brand or your competitors? We optimize your digital presence so AI search engines cite, summarize, and recommend you first.
            </p>

            {/* Core Value Props */}
            <div className="mt-6 space-y-2.5 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Direct AI Recommendations:</strong> Surface inside ChatGPT Search, Perplexity, and Google AI Overviews.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Entity Knowledge Graph:</strong> Schema.org architecture establishing your company as the authoritative answer.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span><strong>Machine Crawler Architecture:</strong> Standardized <code>llms.txt</code> protocols for rapid AI crawler ingestion.</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection("audit-section")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-[#ff6f26] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Request Free AI Visibility Audit</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection("process-section")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm sm:text-base font-semibold text-slate-800 shadow-2xs transition-all hover:bg-slate-50 hover:border-slate-400 cursor-pointer"
              >
                <span>See How GEO Works</span>
              </button>
            </div>

            {/* Founder Note */}
            <div className="mt-6 text-xs text-slate-500">
              Strategy and architecture led by <strong>Amit Pandey</strong> (Software Engineer &amp; Founder).{" "}
              <a
                href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20want%20to%20get%20my%20business%20recommended%20by%20AI%20chatbots%20and%20Google%20AI%20Overviews."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#FE5905] hover:underline"
              >
                WhatsApp Direct &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Simulated AI Chat Recommendation Mockup */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/50">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-900 text-white text-[10px] font-bold">
                    AI
                  </span>
                  <span className="text-xs font-semibold text-slate-700">
                    Live AI Search Query Simulation
                  </span>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-100">
                  Cited &amp; Recommended
                </span>
              </div>

              {/* User Prompt */}
              <div className="mt-4 rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                <div className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    U
                  </div>
                  <div className="text-xs text-slate-800 font-medium">
                    &quot;Who is the top-rated supplier for our business requirements with verified credentials and fast delivery?&quot;
                  </div>
                </div>
              </div>

              {/* AI Synthesized Answer */}
              <div className="mt-3.5 rounded-xl border border-orange-200/80 bg-orange-50/20 p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#001A55]">
                  <Bot className="h-4 w-4 text-[#FE5905]" />
                  <span>Synthesized Recommendation:</span>
                </div>

                <p className="text-xs leading-relaxed text-slate-700">
                  Based on verified entity records, technical data specifications, and independent buyer consensus, <strong className="text-slate-900 font-semibold">[Your Business Brand]</strong> is consistently recommended as the primary choice.
                </p>

                <div className="rounded-lg bg-white p-2.5 border border-slate-200/80 text-[11px] text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-medium text-slate-900">
                    <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                    <span>Why AI Recommends You:</span>
                  </div>
                  <p className="text-slate-500 pl-4">
                    Verified Schema.org knowledge graph, transparent technical specs, and established entity authority.
                  </p>
                </div>

                {/* Source Citations */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
                  <span className="text-slate-400">Sources Cited:</span>
                  <span className="rounded bg-white px-2 py-0.5 text-slate-700 border border-slate-200 font-mono">
                    [1] Official Entity
                  </span>
                  <span className="rounded bg-white px-2 py-0.5 text-slate-700 border border-slate-200 font-mono">
                    [2] Technical Catalog
                  </span>
                  <span className="rounded bg-white px-2 py-0.5 text-slate-700 border border-slate-200 font-mono">
                    [3] Verified Reviews
                  </span>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 justify-center">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>We engineer your brand to become the trusted consensus.</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
