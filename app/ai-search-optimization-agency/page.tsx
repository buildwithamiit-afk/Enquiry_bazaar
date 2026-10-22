import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { AiSearchStructuredData } from "@/components/ai_search_optimization/AiSearchStructuredData";
import { AiSearchHero } from "@/components/ai_search_optimization/AiSearchHero";
import { AiPlatformsCovered } from "@/components/ai_search_optimization/AiPlatformsCovered";
import { AiSearchProcess } from "@/components/ai_search_optimization/AiSearchProcess";
import { AiSearchVsTraditionalSEO } from "@/components/ai_search_optimization/AiSearchVsTraditionalSEO";
import { AiSearchAuditTool } from "@/components/ai_search_optimization/AiSearchAuditTool";
import { AiSearchCaseProof } from "@/components/ai_search_optimization/AiSearchCaseProof";
import { AiSearchFAQ } from "@/components/ai_search_optimization/AiSearchFAQ";
import { AiSearchContactSection } from "@/components/ai_search_optimization/AiSearchContactSection";
import { AiSearchStickyCTA } from "@/components/ai_search_optimization/AiSearchStickyCTA";

export const metadata: Metadata = {
  title: "AI Search Optimization & Generative Engine Optimization (GEO) Agency | EnquiryBazaar",
  description:
    "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews. We engineer Entity Knowledge Graphs, Schema.org architectures, and llms.txt protocols so AI chatbots cite and recommend your brand first.",
  keywords: [
    "ai search optimization agency",
    "generative engine optimization agency",
    "how to rank in chatgpt search",
    "get recommended by ai",
    "perplexity ai optimization agency",
    "google ai overviews optimization",
    "geo agency india",
    "how to make ai recommend my business",
    "entity knowledge graph setup",
    "llms.txt setup agency",
    "EnquiryBazaar GEO services",
    "Amit Pandey AI search consultant",
    "ai seo agency",
    "how to get recommended by perplexity and chatgpt",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/ai-search-optimization-agency",
  },
  openGraph: {
    title: "AI Search Optimization & Generative Engine Optimization (GEO) Agency",
    description:
      "When buyers ask ChatGPT or Perplexity for vendor recommendations, ensure your business gets cited first. Comprehensive GEO, Entity Graphs, and llms.txt setup.",
    url: "https://enquirybazaar.in/ai-search-optimization-agency",
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "AI Search Optimization and Generative Engine Optimization (GEO) Agency - EnquiryBazaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Search Optimization & Generative Engine Optimization (GEO) Agency",
    description:
      "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews with EnquiryBazaar.",
    images: ["/hero.png"],
  },
};

export default function AiSearchOptimizationPage() {
  return (
    <>
      <AiSearchStructuredData />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden bg-white text-slate-900">
        <AiSearchHero />
        <AiPlatformsCovered />
        <AiSearchProcess />
        <AiSearchVsTraditionalSEO />
        <AiSearchAuditTool />
        <AiSearchCaseProof />
        <AiSearchFAQ />
        <AiSearchContactSection />
      </main>
      <Footer />
      <AiSearchStickyCTA />
    </>
  );
}
