"use client";

import React from "react";
import { Bot, Sparkles, Search, Globe, MessageSquare, Cpu } from "lucide-react";

export function AiPlatformsCovered() {
  const platforms = [
    {
      name: "ChatGPT Search",
      provider: "OpenAI",
      desc: "Optimized for conversational procurement queries & source citation links.",
    },
    {
      name: "Perplexity AI",
      provider: "Perplexity",
      desc: "Live search synthesis and direct footnotes referencing your website.",
    },
    {
      name: "Google AI Overviews",
      provider: "Google (SGE)",
      desc: "Featured in AI overview snapshots above standard organic rankings.",
    },
    {
      name: "Claude",
      provider: "Anthropic",
      desc: "Deep knowledge synthesis from authoritative documents & specs.",
    },
    {
      name: "Microsoft Copilot",
      provider: "Bing & OpenAI",
      desc: "Integrated enterprise procurement search across Microsoft ecosystem.",
    },
    {
      name: "Google Gemini",
      provider: "Google DeepMind",
      desc: "Multi-modal entity recognition and localized vendor recommendations.",
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Multi-Platform Generative Engine Optimization
          </span>
          <h2 className="mt-1.5 text-xl sm:text-2xl font-bold text-[#001A55]">
            Where Your Business Gets Cited &amp; Recommended
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs text-left transition-all hover:border-[#FE5905] hover:shadow-xs"
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FE5905] block">
                {p.provider}
              </span>
              <h3 className="mt-1 text-sm font-bold text-slate-900">
                {p.name}
              </h3>
              <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
