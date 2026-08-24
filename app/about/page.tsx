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
      "@type": "Person",
      "@id": "https://enquirybazaar.in/#amit-pandey",
      "name": "Amit Pandey",
      "jobTitle": "Software Engineer & Founder",
      "worksFor": {
        "@id": "https://enquirybazaar.in/#organization",
      },
      "description":
        "Amit Pandey is a Software Engineer, Serial Entrepreneur, and the Founder of EnquiryBazaar. He previously founded Devlo.in (software engineering agency run profitably through June 2026), built 100+ business platforms, developed a 200+ tenant SaaS platform, and worked directly with 20+ Indian manufacturers.",
      "knowsAbout": [
        "Software Engineering",
        "B2B Lead Generation",
        "Multi-Tenant SaaS Architecture",
        "Industrial Digital Presence",
        "Manufacturing Growth Systems",
        "Direct Wholesale Buyer Acquisition",
      ],
      "url": "https://enquirybazaar.in/about#founder",
      "sameAs": [
        "https://www.linkedin.com/in/amit-pandey-86aa62338/"
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://enquirybazaar.in/#organization",
      "name": "EnquiryBazaar",
      "url": "https://enquirybazaar.in",
      "logo": "https://enquirybazaar.in/hero.png",
      "founder": {
        "@id": "https://enquirybazaar.in/#amit-pandey",
      },
      "description":
        "EnquiryBazaar is India's dedicated B2B Digital Growth Partner for factory owners, manufacturers, and wholesale suppliers, providing 100% owned direct buyer acquisition engines.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9696717305",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "English"],
      },
      "sameAs": ["https://enquirybazaar.in"],
    },
    {
      "@type": "AboutPage",
      "@id": "https://enquirybazaar.in/about#webpage",
      "url": "https://enquirybazaar.in/about",
      "name": "About EnquiryBazaar & Founder Amit Pandey",
      "isPartOf": {
        "@id": "https://enquirybazaar.in/#website",
      },
      "inLanguage": "en-IN",
      "mainEntity": {
        "@type": "Organization",
        "name": "EnquiryBazaar",
        "alternateName": "EnquiryBazaar.in",
        "founder": {
          "@id": "https://enquirybazaar.in/#amit-pandey",
        },
      },
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
            "text":
              "EnquiryBazaar was founded by Amit Pandey, a Software Engineer and serial tech entrepreneur. Amit previously founded and profitably operated Devlo.in (software engineering agency, wrapped June 2026), built 100+ business platforms, developed a 200+ tenant multi-tenant SaaS platform, and partnered directly with 20+ Indian manufacturers to build their direct buyer acquisition engines.",
          },
        },
        {
          "@type": "Question",
          "name": "What is EnquiryBazaar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "EnquiryBazaar (EnquiryBazaar.in) is a full-service Digital Growth Partner designed exclusively for Indian B2B manufacturers and factory owners. It sets up and manages 100% owned digital presence (Google #1 ranking, factory showroom website, targeted B2B ads, and industrial video trust showcases) delivering direct bulk inquiries with zero commission and zero lead-sharing.",
          },
        },
        {
          "@type": "Question",
          "name": "How is EnquiryBazaar different from IndiaMART, Justdial, and TradeIndia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "On shared directories like IndiaMART or Justdial, one buyer inquiry is forwarded to 8 to 10 competing suppliers, triggering aggressive price wars. With EnquiryBazaar, manufacturers own 100% of their digital assets forever. 100% of incoming inquiries and phone calls come directly and exclusively to the manufacturer with zero commission.",
          },
        },
      ],
    },
  ],
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
