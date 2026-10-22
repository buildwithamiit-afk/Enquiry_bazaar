import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { MfgStructuredData } from "@/components/manufacturing_software/MfgStructuredData";
import { MfgHero } from "@/components/manufacturing_software/MfgHero";
import { MfgPillars } from "@/components/manufacturing_software/MfgPillars";
import { MfgCostEstimator } from "@/components/manufacturing_software/MfgCostEstimator";
import { MfgComparison } from "@/components/manufacturing_software/MfgComparison";
import { MfgIndustries } from "@/components/manufacturing_software/MfgIndustries";
import { MfgArchitecture } from "@/components/manufacturing_software/MfgArchitecture";
import { MfgCaseStudies } from "@/components/manufacturing_software/MfgCaseStudies";
import { MfgFounderProof } from "@/components/manufacturing_software/MfgFounderProof";
import { MfgFAQ } from "@/components/manufacturing_software/MfgFAQ";
import { MfgContactSection } from "@/components/manufacturing_software/MfgContactSection";
import { MfgStickyCTA } from "@/components/manufacturing_software/MfgStickyCTA";

export const metadata: Metadata = {
  title: "Custom Software, Website & Landing Page Development for Manufacturers | EnquiryBazaar",
  description:
    "We engineer custom factory ERPs, high-speed digital catalog websites, and B2B negative-filtered landing pages built specifically for Indian and global manufacturers. 100% source code ownership, zero broker commissions, and verified direct WhatsApp RFQs.",
  keywords: [
    "custom software development for manufacturers",
    "manufacturing website development",
    "website development for manufacturing companies",
    "b2b landing page development for manufacturing companies",
    "custom software for manufacturing company",
    "factory erp software development india",
    "best website developer for manufacturing business",
    "industrial website design agency",
    "custom inventory and quotation software for factory owners",
    "EnquiryBazaar manufacturing software",
    "Amit Pandey software engineer manufacturer",
    "IndiaMART alternative for manufacturers",
    "manufacturing lead generation landing page",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers",
  },
  openGraph: {
    title: "Custom Software, Website & Landing Page Development for Manufacturers",
    description:
      "Stop losing corporate procurement orders to slow templates. We engineer private factory ERPs, digital catalog websites, and B2B landing pages with 100% source code ownership and direct WhatsApp RFQs.",
    url: "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers",
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Custom Software and Website Development for Manufacturers - EnquiryBazaar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software, Website & Landing Page Development for Manufacturers",
    description:
      "Private factory ERPs, high-speed digital catalog websites, and B2B landing pages for manufacturers with 100% source code ownership.",
    images: ["/hero.png"],
  },
};

export default function ManufacturingSoftwareAndWebDevelopmentPage() {
  return (
    <>
      <MfgStructuredData />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden bg-white text-slate-900">
        <MfgHero />
        <MfgPillars />
        <MfgCostEstimator />
        <MfgComparison />
        <MfgIndustries />
        <MfgArchitecture />
        <MfgCaseStudies />
        <MfgFounderProof />
        <MfgFAQ />
        <MfgContactSection />
      </main>
      <Footer />
      <MfgStickyCTA />
    </>
  );
}
