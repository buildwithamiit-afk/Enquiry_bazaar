import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { MetalWeightCalculator } from "@/components/tools/MetalWeightCalculator";
import { ChevronRight, Sparkles, HelpCircle, Layers, Scale, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sheet Metal & MS / SS Pipe Weight Calculator with Costing | EnquiryBazaar",
  description:
    "Free online Metal Weight Calculator for Mild Steel (MS), Stainless Steel (SS 304/316), Aluminum, Brass, and Copper. Calculate exact sheet, round pipe, square tube, and round bar weight in kg with CNC laser cutting costs.",
  keywords: [
    "metal weight calculator",
    "ms sheet weight calculator",
    "pipe weight calculation formula",
    "ss 304 weight calculator",
    "square tube weight calculator india",
    "laser cutting cost calculator",
    "steel weight calculator in kg",
    "EnquiryBazaar metal tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/metal-weight-calculator",
  },
  openGraph: {
    title: "Sheet Metal & MS / SS Pipe Weight Calculator with Costing | EnquiryBazaar",
    description:
      "Calculate accurate steel weight, pipe weight, and laser cutting costs for fabrication and machine shops in India. Instant formulas and WhatsApp quotation.",
    url: "https://enquirybazaar.in/tools/metal-weight-calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/metal-weight-calculator#app",
      "name": "Sheet Metal & MS / SS Pipe Weight Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/metal-weight-calculator",
      "description":
        "An engineering calculator for Indian metal fabricators and CNC machine shops to calculate exact weights for MS sheets, SS pipes, square tubes, and round bars with live density formulas and laser cutting job-work costs.",
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
      "@id": "https://enquirybazaar.in/tools/metal-weight-calculator#howto",
      "name": "How to Calculate Sheet Metal and Steel Pipe Weight",
      "description": "Standard engineering formulas used for calculating weights of steel sheets, tubes, and bars in India.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Sheet Metal Formula",
          "text": "Weight (Kg) = (Length mm × Width mm × Thickness mm × Density g/cm³) ÷ 1,000,000. For mild steel with density 7.85, an 8×4 ft 3mm sheet weighs (2500 × 1250 × 3 × 7.85) ÷ 1,000,000 = 73.59 kg.",
        },
        {
          "@type": "HowToStep",
          "name": "Round Pipe Formula",
          "text": "Weight (Kg) = (Outer Diameter mm - Wall Thickness mm) × Wall Thickness mm × 0.02466 × (Density ÷ 7.85) × Length in Meters.",
        },
        {
          "@type": "HowToStep",
          "name": "Square Tube Formula",
          "text": "Weight (Kg) = [Outer Area mm² - Inner Area mm²] × Length mm × Density ÷ 1,000,000.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/tools/metal-weight-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the density of Mild Steel and Stainless Steel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Standard Mild Steel (MS) density is 7.85 g/cm³. Stainless Steel SS 304 is 7.93 g/cm³, and SS 316 is 8.00 g/cm³. Aluminum has a lighter density of 2.70 g/cm³.",
          },
        },
        {
          "@type": "Question",
          "name": "How is laser cutting cost calculated per meter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser cutting job-work charges are calculated based on total perimeter cutting length in meters multiplied by the per-meter cutting rate, which scales with sheet thickness (e.g., ₹12–₹25 per meter for 2mm–4mm MS sheets).",
          },
        },
        {
          "@type": "Question",
          "name": "How can fabrication workshops get direct OEM buyer inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar builds owned direct digital buyer engines (Google #1 ranking + industrial project showcase website) for fabrication units, delivering 100% exclusive OEM buyer leads without portal price wars or commissions.",
          },
        },
      ],
    },
  ],
};

export default function MetalWeightCalculatorPage() {
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
              <span className="text-slate-900 font-semibold">Metal Weight Calculator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EnquiryBazaar Industrial Engineering Tool</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Sheet Metal & <span className="text-[#FE5905]">Pipe Weight Calculator</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Calculate accurate weights for <strong>MS plates, SS pipes, square tubes, and round bars</strong> with exact densities (Mild Steel, SS 304, Aluminum, Copper). Includes raw metal costing and CNC laser cutting job-work estimates.
              </p>
            </div>

            {/* Interactive Calculator */}
            <div className="mt-10">
              <MetalWeightCalculator />
            </div>
          </div>
        </section>

        {/* Engineering Formulas Guide */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                Standard Engineering Formulas for Metal Fabrication
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Formulas used by Indian structural engineers, CNC laser cutting workshops, and steel stockists.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FE5905] font-black">
                  <Scale className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Sheet / Plate Formula</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  Weight (Kg) = (L × W × T × Density) ÷ 10⁶
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Where Length (L), Width (W), and Thickness (T) are in mm, and Density is in g/cm³ (7.85 for MS).
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-black">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Round Pipe Formula</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  Weight = (OD - WT) × WT × 0.02466 × Length
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Accounts for circular cross-sectional wall thickness (WT) and length in meters.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 font-black">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Laser Cutting Estimation</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed font-mono">
                  Cost = Perimeter (Meters) × Rate/Meter
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Calculates total machine run time and gas consumption based on cutting length.
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
                Common questions on steel grades, density calculations, and fabrication pricing.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  Why is MS plate weight slightly different from actual weighing scale results?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Theoretical weight uses standard 7.85 g/cm³ density and exact nominal thickness. Actual rolling mills have manufacturing thickness tolerances (typically ±0.2mm to ±0.5mm depending on IS 2062 standard), which may cause minor weight variations on the weighbridge.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  How does EnquiryBazaar help steel fabricators and machine shops?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Most metal fabrication workshops survive on low-margin local job-work where traders squeeze prices. <strong>EnquiryBazaar</strong> sets up direct Google Search dominance and an authoritative industrial engineering showcase website that connects you directly with project directors, civil engineers, and OEM purchase heads.
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
