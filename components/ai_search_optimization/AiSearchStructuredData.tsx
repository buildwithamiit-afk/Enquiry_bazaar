import React from "react";
import { aiSearchFaqList } from "./aiSearchFaqData";

export function AiSearchStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#webpage",
        "url": "https://enquirybazaar.in/ai-search-optimization-agency",
        "name": "AI Search Optimization & Generative Engine Optimization (GEO) Agency | EnquiryBazaar",
        "description":
          "Get your business recommended by ChatGPT, Perplexity, and Google AI Overviews. EnquiryBazaar provides end-to-end Generative Engine Optimization (GEO), Entity Knowledge Graphs, and llms.txt protocol engineering.",
        "isPartOf": {
          "@id": "https://enquirybazaar.in/#website",
        },
        "about": [
          { "@id": "https://enquirybazaar.in/#organization" },
          { "@id": "https://enquirybazaar.in/about/amit-pandey#person" },
        ],
        "inLanguage": "en-IN",
      },
      {
        "@type": "Organization",
        "@id": "https://enquirybazaar.in/#organization",
        "name": "EnquiryBazaar",
        "url": "https://enquirybazaar.in/",
        "logo": "https://enquirybazaar.in/hero.png",
        "founder": {
          "@id": "https://enquirybazaar.in/about/amit-pandey#person",
        },
        "description":
          "EnquiryBazaar is India's leading Generative Engine Optimization (GEO) and digital growth agency, helping B2B businesses and brands get recommended by AI models, ChatGPT Search, and Google AI Overviews.",
        "telephone": "+91-9696717305",
        "knowsAbout": [
          "Generative Engine Optimization (GEO)",
          "AI Search Optimization",
          "ChatGPT Search Ranking",
          "Perplexity AI Recommendation Optimization",
          "Google AI Overviews Optimization",
          "Entity Knowledge Graph Architecture",
          "Schema.org JSON-LD Implementation",
          "llms.txt Protocol Setup",
          "B2B AI Citation Engineering",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://enquirybazaar.in/about/amit-pandey#person",
        "name": "Amit Pandey",
        "jobTitle": "Software Engineer & Founder",
        "worksFor": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "description":
          "Amit Pandey is a Software Engineer, Serial Entrepreneur, and the Founder of EnquiryBazaar. He pioneers Generative Engine Optimization (GEO) architecture, multi-tenant digital presence, and AI citation models for businesses in India.",
        "url": "https://enquirybazaar.in/about/amit-pandey",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#service-geo",
        "name": "Generative Engine Optimization (GEO) & AI Search Visibility",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "Generative Engine Optimization",
        "areaServed": "Global",
        "description":
          "Comprehensive optimization services to ensure your business, products, and services are cited, synthesized, and directly recommended when users query AI chatbots such as ChatGPT, Perplexity, Google Gemini, and Claude.",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#service-knowledge-graph",
        "name": "Entity Knowledge Graph & Schema Architecture",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "Technical SEO & Semantic Web",
        "areaServed": "Global",
        "description":
          "Deep Schema.org JSON-LD multi-entity graphs establishing your business as an unambiguous, authoritative brand entity recognized by LLM training and retrieval pipelines.",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#service-llms-txt",
        "name": "llms.txt Machine-Readable Documentation Setup",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "AI Crawler Infrastructure",
        "areaServed": "Global",
        "description":
          "Deployment of standardized llms.txt and llms-full.txt machine protocols enabling OpenAI, Perplexity, Anthropic, and Google crawlers to rapidly ingest your service offerings and pricing.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://enquirybazaar.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "AI Search Optimization Agency (GEO)",
            "item": "https://enquirybazaar.in/ai-search-optimization-agency",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/ai-search-optimization-agency#faq",
        "mainEntity": aiSearchFaqList.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
