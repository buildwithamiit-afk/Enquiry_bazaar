import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { CorrugatedBoxCalculator } from "@/components/tools/CorrugatedBoxCalculator";
import { ChevronRight, Sparkles, HelpCircle, Box, Scale, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Corrugated Box Weight & Cost Calculator (3-Ply, 5-Ply, 7-Ply) | EnquiryBazaar",
  description:
    "Free online Corrugated Box Weight, Bursting Strength (BF/BS) & Cost Calculator for Indian packaging manufacturers. Calculate sheet cutting length, deckle size, total GSM with fluting factor, per-box weight, and raw paper costing.",
  keywords: [
    "corrugated box weight calculator",
    "carton box weight calculation formula",
    "box bursting strength calculator",
    "3 ply 5 ply box weight calculator india",
    "corrugated packaging cost per box calculator",
    "burst factor to bursting strength formula",
    "EnquiryBazaar packaging tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/corrugated-box-weight-calculator",
  },
  openGraph: {
    title: "Corrugated Box Weight & Cost Calculator (3-Ply, 5-Ply, 7-Ply) | EnquiryBazaar",
    description:
      "Calculate accurate carton box weight, sheet cutting area, bursting strength, and manufacturing cost per box with verified TAPPI packaging formulas.",
    url: "https://enquirybazaar.in/tools/corrugated-box-weight-calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/corrugated-box-weight-calculator#app",
      "name": "Corrugated Box Weight, Bursting Strength & Cost Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/corrugated-box-weight-calculator",
      "description":
        "An engineering calculator for Indian corrugated packaging manufacturers to compute exact box weight in grams, sheet cutting dimensions, paper GSM substance with 1.4x flute take-up factor, and per-box manufacturing cost.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
      },
      "creator": {
        "@type": "Organization",
        "name": "EnquiryBazaar",
        "url": "https://enquirybazaar.in",
      },
    },
    {
      "@type": "HowTo",
      "@id": "https://enquirybazaar.in/tools/corrugated-box-weight-calculator#howto",
      "name": "How to Calculate Corrugated Box Weight and Paper Area",
      "description": "Standard step-by-step mathematical formula used in the Indian packaging industry.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Calculate Deckle Size and Cutting Length",
          "text": "Deckle (Width of paper) = Width + Height + 1 inch allowance. Cutting Length = 2 × (Length + Width) + 2 inches joint flap allowance.",
        },
        {
          "@type": "HowToStep",
          "name": "Compute Total Sheet Area",
          "text": "Multiply Cutting Length in cm by Deckle in cm and divide by 10,000 to obtain total sheet area in square meters (m²).",
        },
        {
          "@type": "HowToStep",
          "name": "Apply Fluting Take-up Factor (1.4×)",
          "text": "Multiply fluting paper GSM by 1.4 (take-up factor for B/C flute) and add liner GSMs to obtain total substance GSM.",
        },
        {
          "@type": "HowToStep",
          "name": "Calculate Box Weight",
          "text": "Multiply Sheet Area (m²) by Total Substance GSM to get the final box weight in grams.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/tools/corrugated-box-weight-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why is a 1.4 fluting factor used in corrugated box calculation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When paper is passed through corrugating rolls to create wave flutes (B-Flute or C-Flute), approximately 40% more paper length is consumed compared to flat sheet liner. Hence, standard industry formulas multiply fluting paper GSM by 1.4.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the formula for Bursting Strength (BS) from Burst Factor (BF)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bursting Strength (BS in kg/cm²) = (Combined Liner GSM × Burst Factor) ÷ 1,000. For example, two 140 GSM liners with 18 BF paper produce an estimated BS of (280 × 18) ÷ 1,000 = 5.04 kg/cm².",
          },
        },
        {
          "@type": "Question",
          "name": "How can corrugated box manufacturers get direct buyer orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar builds owned direct digital buyer engines (Google #1 ranking + digital packaging showroom) for carton manufacturers, delivering 100% exclusive OEM buyer leads without commission or portal price wars.",
          },
        },
      ],
    },
  ],
};

export default function CorrugatedBoxCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 bg-white text-slate-900">
        {/* Breadcrumbs */}
        <div className="border-b border-slate-100 bg-slate-50/70 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <Link href="/tools" className="hover:text-slate-900 transition">Free Tools</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-slate-900 font-semibold">Corrugated Box Weight Calculator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EnquiryBazaar Packaging Engineering Tool</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Corrugated Box <span className="text-[#FE5905]">Weight & Cost Calculator</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Accurately compute <strong>sheet cutting dimensions, total GSM with fluting take-up, per-box weight, bursting strength (BS), and raw paper costing</strong> for 3-Ply, 5-Ply, and 7-Ply corrugated cartons.
              </p>
            </div>

            {/* Interactive Calculator */}
            <div className="mt-10">
              <CorrugatedBoxCalculator />
            </div>
          </div>
        </section>

        {/* Technical Packaging Formulas Guide */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Standard Industry Formulas for Corrugated Packaging
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Formulas used across Indian paper mills, testing labs, and corrugation factories.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FE5905] font-black">
                  <Box className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Deckle & Cutting Size</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  Deckle = Width + Height + 1"<br />
                  Length = 2 × (Length + Width) + 2" Joint Flap
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Accounts for score creases and side glue/staple stitching flap allowance.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-black">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Fluting Take-up Factor (1.4×)</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  Effective GSM = Top Liner + (Flute × 1.4) + Bottom Liner
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Fluting corrugation waves require 40% more paper than flat liner board.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-black">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Bursting Strength (BS)</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  BS (kg/cm²) = (Combined Liner GSM × BF) ÷ 1,000
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Measures the hydraulic puncture pressure tolerance of the finished carton box.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-slate-100 bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Common questions on corrugated box manufacturing, paper grades, and weight calculations.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  What is the difference between 3-Ply, 5-Ply, and 7-Ply boxes?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>3-Ply (Single Wall):</strong> Consists of 2 liner papers and 1 fluted medium. Ideal for lightweight products up to 10–12 kg.<br />
                  <strong>5-Ply (Double Wall):</strong> Consists of 3 liner papers and 2 fluted mediums. Ideal for industrial goods, electronics, and loads up to 25–30 kg.<br />
                  <strong>7-Ply (Triple Wall):</strong> Consists of 4 liner papers and 3 fluted mediums. Engineered for heavy machinery, exports, and loads exceeding 50 kg.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  How does EnquiryBazaar help corrugated packaging manufacturers?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of competing on B2B listing portals where buyers initiate reverse bidding price wars, <strong>EnquiryBazaar</strong> builds dedicated digital buyer acquisition systems (Google Rank #1 + Packaging Showroom Website) that bring direct factory purchase managers and institutional buyers exclusively to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
