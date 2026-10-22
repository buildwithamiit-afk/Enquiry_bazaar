"use client";

import React from "react";
import { Network, FileCode, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function AiSearchProcess() {
  const steps = [
    {
      number: "01",
      title: "Entity Knowledge Graph Architecture",
      icon: Network,
      description:
        "AI models think in entities, not keywords. We structure your company, founder profile, and product lines into multi-entity Schema.org JSON-LD graphs so LLMs understand exactly what your business does without ambiguity.",
      deliverable: "Custom Schema.org Graph & Semantic Entity Mapping",
    },
    {
      number: "02",
      title: "Standardized llms.txt Crawler Setup",
      icon: FileCode,
      description:
        "We deploy optimized llms.txt and llms-full.txt machine protocols on your domain. This gives AI crawlers (OpenAI, Perplexity, Anthropic) a structured, token-efficient blueprint of your services, pricing, and case proof.",
      deliverable: "Standardized llms.txt & AI Crawler Allowlist",
    },
    {
      number: "03",
      title: "High-Information-Density Answer Engineering",
      icon: MessageSquare,
      description:
        "AI algorithms prefer clear, factual data over marketing fluff. We structure your core pages with direct answer blocks, transparent technical specifications, and comparative matrices that AI models extract as trusted quotes.",
      deliverable: "Direct-Answer Content & FAQ Architecture",
    },
    {
      number: "04",
      title: "Corroboration & Citation Consensus",
      icon: ShieldCheck,
      description:
        "AI chatbots cross-reference information before citing a brand. We align your entity attributes across verified citations, industrial directories, and digital footprints to build an unshakeable algorithmic consensus.",
      deliverable: "Cross-Platform Citation & Brand Proof Alignment",
    },
  ];

  return (
    <section id="process-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Our 4-Step Methodology</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            How We Get AI Models to Recommend Your Brand
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A structured engineering framework to turn your business into the authoritative answer for conversational search.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-2xs transition-all hover:border-[#FE5905] hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-300 font-mono">
                      {step.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#FE5905] border border-orange-100">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-3.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Deliverable</span>
                  <span className="text-xs font-semibold text-[#001A55] block mt-0.5">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
