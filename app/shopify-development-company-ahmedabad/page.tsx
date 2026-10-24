import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ShopifyAhmedabadStructuredData } from "@/components/shopify_ahmedabad/ShopifyAhmedabadStructuredData";
import { ShopifyHero } from "@/components/shopify_ahmedabad/ShopifyHero";
import { ShopifyWhyAhmedabad } from "@/components/shopify_ahmedabad/ShopifyWhyAhmedabad";
import { ShopifyServices } from "@/components/shopify_ahmedabad/ShopifyServices";
import { ShopifyWhyEnquiryBazaar } from "@/components/shopify_ahmedabad/ShopifyWhyEnquiryBazaar";
import { ShopifyCostSection } from "@/components/shopify_ahmedabad/ShopifyCostSection";
import { ShopifyPlatformComparison } from "@/components/shopify_ahmedabad/ShopifyPlatformComparison";
import { ShopifyIndustries } from "@/components/shopify_ahmedabad/ShopifyIndustries";
import { ShopifyProcess } from "@/components/shopify_ahmedabad/ShopifyProcess";
import { ShopifyCaseStudies } from "@/components/shopify_ahmedabad/ShopifyCaseStudies";
import { ShopifyAreasServed } from "@/components/shopify_ahmedabad/ShopifyAreasServed";
import { ShopifyFAQ } from "@/components/shopify_ahmedabad/ShopifyFAQ";
import { ShopifyContactSection } from "@/components/shopify_ahmedabad/ShopifyContactSection";
import { ShopifyStickyCTA } from "@/components/shopify_ahmedabad/ShopifyStickyCTA";
import { SHOPIFY_METADATA } from "@/components/shopify_ahmedabad/shopifyData";

export const metadata: Metadata = {
  title: SHOPIFY_METADATA.title,
  description: SHOPIFY_METADATA.description,
  keywords: [
    "shopify development company in ahmedabad",
    "shopify agency ahmedabad",
    "shopify developer ahmedabad",
    "shopify store development ahmedabad",
    "hire shopify developer ahmedabad",
    "shopify web development company ahmedabad",
    "shopify expert ahmedabad",
    "shopify b2b wholesale store",
    "shopify migration ahmedabad",
    "shopify theme customization",
    "shopify app development",
    "shopify plus agency ahmedabad",
    "shopify development cost in ahmedabad",
    "ecommerce development company gujarat",
    "best shopify development company in ahmedabad",
    "EnquiryBazaar shopify ahmedabad",
    "Amit Pandey shopify engineer",
  ],
  alternates: {
    canonical: SHOPIFY_METADATA.canonical,
  },
  openGraph: {
    title: SHOPIFY_METADATA.title,
    description: SHOPIFY_METADATA.description,
    url: SHOPIFY_METADATA.canonical,
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Shopify Development Company in Ahmedabad - EnquiryBazaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SHOPIFY_METADATA.title,
    description: SHOPIFY_METADATA.description,
    images: ["/hero.png"],
  },
};

export default function ShopifyDevelopmentCompanyAhmedabadPage() {
  return (
    <>
      {/* Schema.org Structured Data (ProfessionalService, Service, FAQPage, BreadcrumbList) */}
      <ShopifyAhmedabadStructuredData />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Server-Rendered Landing Page Content */}
      <main id="main-content" className="flex-1 overflow-hidden bg-white text-slate-900">
        {/* 1. Hero with H1, Subheading, CTAs, Trust Bar & Quick Answer Block */}
        <ShopifyHero />

        {/* 2. Why Ahmedabad Businesses Choose Shopify */}
        <ShopifyWhyAhmedabad />

        {/* 3. Our 8 Shopify Development Services */}
        <ShopifyServices />

        {/* 4. Why Choose EnquiryBazaar (Engineer-led, B2B focus, 100% ownership) */}
        <ShopifyWhyEnquiryBazaar />

        {/* 5. Shopify Store Development Packages in Ahmedabad (Scope & Milestones) */}
        <ShopifyCostSection />

        {/* 6. Architectural Evaluation: Shopify vs WooCommerce vs Custom */}
        <ShopifyPlatformComparison />

        {/* 7. 11 Target Gujarat Industries (Textiles, Chemicals, Jewellery, Packaging, etc.) */}
        <ShopifyIndustries />

        {/* 8. 5-Stage Development Process Roadmap (Days 1 to 28) */}
        <ShopifyProcess />

        {/* 9. Real Work & Case Studies with Quantifiable Results */}
        <ShopifyCaseStudies />

        {/* 10. Micro-Locality Coverage Across Ahmedabad & Gujarat */}
        <ShopifyAreasServed />

        {/* 11. 15 Comprehensive FAQs (Server-Rendered for SEO & AI Crawlers) */}
        <ShopifyFAQ />

        {/* 12. Final CTA & Interactive Proposal Form with Ahmedabad NAP Block */}
        <ShopifyContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Bottom Sticky Action Bar */}
      <ShopifyStickyCTA />
    </>
  );
}
