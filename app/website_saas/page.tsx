import React from "react";
import { Navbar } from "@/components/website_saas/Navbar";
import { Hero } from "@/components/website_saas/Hero";
import { Comparison } from "@/components/website_saas/Comparison";
import { WhatYouGet } from "@/components/website_saas/WhatYouGet";
import { HowItWorks } from "@/components/website_saas/HowItWorks";
import { Pricing } from "@/components/website_saas/Pricing";
import { WhoIsThisFor } from "@/components/website_saas/WhoIsThisFor";
import { Portfolio } from "@/components/website_saas/Portfolio";
import { TrustProof } from "@/components/website_saas/TrustProof";
import { FAQ } from "@/components/website_saas/FAQ";
import { FinalCTA } from "@/components/website_saas/FinalCTA";
import { StickyCTA } from "@/components/website_saas/StickyCTA";
import { Footer } from "@/components/landing/Footer";

export default function WebsiteSaaSPage() {
  return (
    <main className="bg-background min-h-screen relative overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Comparison />
      <WhatYouGet />
      <HowItWorks />
      <Pricing />
      <WhoIsThisFor />
      <Portfolio />
      <TrustProof />
      <FAQ />
      <FinalCTA />
      
      <Footer />
      
      <StickyCTA />
    </main>
  );
}
