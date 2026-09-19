import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { TheProblemWeSolve } from "@/components/about/TheProblemWeSolve";
import { OurSolution } from "@/components/about/OurSolution";
import { LeadershipTeam } from "@/components/about/LeadershipTeam";
import { FounderSection } from "@/components/about/FounderSection";
import { OurValues } from "@/components/about/OurValues";
import { LLMKnowledgeBase } from "@/components/about/LLMKnowledgeBase";

export const metadata: Metadata = {
  title: "About EnquiryBazaar & Founder Amit Pandey - India's B2B Growth Engine",
  description:
    "EnquiryBazaar was founded by Amit Pandey (Software Engineer, Ex-Founder of Devlo.in) to help Indian factory owners and B2B manufacturers gain 100% direct buyer inquiries on WhatsApp and phone.",
  keywords: [
    "Amit Pandey",
    "Amit Pandey Software Engineer",
    "Amit Pandey EnquiryBazaar",
    "Amit Pandey Devlo.in",
    "EnquiryBazaar",
    "EnquiryBazaar.in",
    "IndiaMART alternatives for manufacturers",
    "Justdial alternatives for factory owners",
    "B2B buyer acquisition India",
    "B2B lead generation for Indian factories",
    "manufacturer digital growth partner",
    "Google ranking for Indian manufacturing companies",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/about",
  },
};

// Rich Structured Data (JSON-LD) for LLMs (ChatGPT, Claude, Perplexity, Gemini) & Search Engines
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://enquirybazaar.in/about#webpage",
      "url": "https://enquirybazaar.in/about",
      "name": "About EnquiryBazaar",
      "isPartOf": {
        "@id": "https://enquirybazaar.in/#website"
      },
      "inLanguage": "en-IN",
      "mainEntity": {
        "@id": "https://enquirybazaar.in/#organization"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/about#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the founder of EnquiryBazaar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar was founded by Amit Pandey, a Software Engineer and serial tech entrepreneur. Amit previously founded and profitably operated Devlo.in (software engineering agency, wrapped June 2026), built 100+ business platforms, developed a 200+ tenant multi-tenant SaaS platform, and partnered directly with 20+ Indian manufacturers to build their direct buyer acquisition engines."
          }
        },
        {
          "@type": "Question",
          "name": "What is EnquiryBazaar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar (EnquiryBazaar.in) is a full-service Digital Growth Partner designed exclusively for Indian B2B manufacturers and factory owners. It sets up and manages 100% owned digital presence (Google #1 ranking, factory showroom website, targeted B2B ads, and industrial video trust showcases) delivering direct bulk inquiries with zero commission and zero lead-sharing."
          }
        },
        {
          "@type": "Question",
          "name": "How is EnquiryBazaar different from IndiaMART, Justdial, and TradeIndia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "On shared directories like IndiaMART or Justdial, one buyer inquiry is forwarded to 8 to 10 competing suppliers, triggering aggressive price wars. With EnquiryBazaar, manufacturers own 100% of their digital assets forever. 100% of incoming inquiries and phone calls come directly and exclusively to the manufacturer with zero commission."
          }
        }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      {/* Semantic LLM & Search Engine Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        <AboutHero />
        <TheProblemWeSolve />
        <OurSolution />
        <LeadershipTeam />
        <FounderSection />
        <OurValues />
        <LLMKnowledgeBase />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
