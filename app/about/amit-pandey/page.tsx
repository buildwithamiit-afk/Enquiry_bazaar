import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { FounderSection } from "@/components/about/FounderSection";

export const metadata: Metadata = {
  title: "Amit Pandey — Founder of EnquiryBazaar",
  description:
    "Profile of Amit Pandey, Software Engineer and Founder of EnquiryBazaar. Learn about his mission to help Indian manufacturers gain direct bulk orders without middlemen.",
  alternates: {
    canonical: "https://enquirybazaar.in/about/amit-pandey",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://enquirybazaar.in/about/amit-pandey#webpage",
  "url": "https://enquirybazaar.in/about/amit-pandey",
  "name": "Amit Pandey — Founder of EnquiryBazaar",
  "isPartOf": {
    "@id": "https://enquirybazaar.in/#website"
  },
  "mainEntity": {
    "@id": "https://enquirybazaar.in/about/amit-pandey#person"
  }
};

export default function FounderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        <section className="bg-[#001A55] pt-32 pb-16 text-center text-white px-4">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Amit Pandey &mdash; Founder of EnquiryBazaar
          </h1>
        </section>
        <FounderSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
