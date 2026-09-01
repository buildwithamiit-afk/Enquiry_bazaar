import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { WholesaleMOQCalculator } from "@/components/tools/WholesaleMOQCalculator";
import { ChevronRight, Sparkles, HelpCircle, Package, Truck, Receipt, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Wholesale MOQ & Landed Price Calculator with GST & Freight | EnquiryBazaar",
  description:
    "Free B2B Wholesale MOQ and Landed Cost Calculator for Indian manufacturers, factory owners, and suppliers. Calculate ex-factory price, doorstep freight, GST, and profit margins to create buyer quotations instantly.",
  keywords: [
    "wholesale price calculator india",
    "landed cost calculator manufacturing",
    "moq calculator for manufacturers",
    "b2b quotation pricing formula india",
    "calculate wholesale landed price with gst and freight",
    "minimum order quantity formula b2b",
    "factory ex factory to landed price calculator",
    "EnquiryBazaar tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator",
  },
  openGraph: {
    title: "Wholesale MOQ & Landed Price Calculator with GST & Freight | EnquiryBazaar",
    description:
      "Accurately calculate per-unit wholesale landed costs including raw material, setup costs, wastage buffer, freight, and GST. 100% Free tool for Indian factory owners.",
    url: "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator#app",
      "name": "Wholesale MOQ & Landed Price Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator",
      "description":
        "An interactive pricing calculator designed for Indian manufacturers to compute accurate minimum order quantities (MOQ), ex-factory rates, per-piece freight, GST slabs, and final landed wholesale pricing.",
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
      "@id": "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator#howto",
      "name": "How to Calculate Wholesale Landed Cost for B2B Manufacturing in India",
      "description": "Step-by-step formula for calculating true wholesale landed cost including wastage, setup charges, freight, and GST.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Calculate Base Unit Manufacturing Cost",
          "text": "Add raw material cost, wastage buffer percentage, distributed batch setup charges (Setup Cost ÷ MOQ), and packaging costs.",
        },
        {
          "@type": "HowToStep",
          "name": "Factor Profit Margin & Credit Terms",
          "text": "Add desired manufacturer profit margin (e.g. 15%) and credit financing surcharge (e.g. 1.5% for 30 days) to establish the Ex-Factory price.",
        },
        {
          "@type": "HowToStep",
          "name": "Distribute Logistics & Freight",
          "text": "Divide total batch freight cost by the total quantity to calculate the exact per-unit shipping charge.",
        },
        {
          "@type": "HowToStep",
          "name": "Apply Applicable GST Slabs",
          "text": "Apply applicable GST (5%, 12%, 18%, or 28%) on the combined taxable amount (Ex-Factory + Freight) to obtain the final doorstep landed price.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/tools/wholesale-moq-landed-price-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between Ex-Factory price and Landed price in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ex-Factory price is the cost of goods at the manufacturer's gate, excluding transportation, insurance, and taxes. Landed price (or doorstep price) includes the ex-factory rate plus packaging, freight logistics, transit insurance, and applicable GST (CGST/SGST or IGST).",
          },
        },
        {
          "@type": "Question",
          "name": "How does batch setup cost affect Minimum Order Quantity (MOQ)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Fixed tooling, dye, or machine calibration costs must be divided across total batch pieces. On a small order of 100 units, a ₹5,000 die charge adds ₹50/unit; on an MOQ of 2,000 units, it adds only ₹2.50/unit, making larger MOQs significantly more profitable.",
          },
        },
        {
          "@type": "Question",
          "name": "How does EnquiryBazaar help manufacturers sell at full margins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar builds owned direct digital buyer engines (Google #1 ranking + digital showroom + targeted B2B Google Ads). This gives manufacturers 100% exclusive direct buyer inquiries with zero competitor price wars and 0% commission on orders closed.",
          },
        },
      ],
    },
  ],
};

export default function WholesaleMOQCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 bg-white text-slate-900">
        {/* Breadcrumb Navigation */}
        <div className="border-b border-slate-100 bg-slate-50/70 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-slate-900 transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <Link href="/tools" className="hover:text-slate-900 transition">Free Tools</Link>
              <ChevronRight className="h-3 w-3 text-slate-400" />
              <span className="text-slate-900 font-semibold">Wholesale Landed Price Calculator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EnquiryBazaar Free Manufacturing Tool</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Wholesale MOQ & <span className="text-[#FE5905]">Landed Price Calculator</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Calculate accurate <strong>Ex-Factory rates, per-unit freight, GST, and net profit margins</strong> for wholesale buyer quotations. Protect your factory margins and quote bulk orders with 100% confidence.
              </p>
            </div>

            {/* Interactive Calculator */}
            <div className="mt-10">
              <WholesaleMOQCalculator />
            </div>
          </div>
        </section>

        {/* Educational Guide: The 4 Hidden Costs That Hurt Factory Margins */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                The 4 Hidden Costs Indian Factories Often Miss When Quoting
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Why a quotation with a 15% planned margin often ends up with zero profit upon order dispatch.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600 font-black">
                  1
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Unabsorbed Setup Cost</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Quoting without setting a proper MOQ means machine calibration and die costs eat into your unit profit on smaller orders.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FE5905] font-black">
                  2
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Wastage & Trimming Loss</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  A 3% to 5% material scrap rate on 1,000 pieces equals 30 to 50 lost units. Failing to add a scrap buffer directly cuts profit.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-black">
                  3
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Freight Miscalculation</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  LTL (Less than Truckload) shipping rates fluctuate. Not factoring per-piece freight causes buyers to dispute final invoices.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-black">
                  4
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Credit Financing Drag</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Offering 45 or 60-day payment credit without a 2%–3% financing buffer is equivalent to giving buyers an unearned cash discount.
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
                Understanding B2B wholesale pricing, GST calculations, and MOQ modeling.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  What is the difference between Ex-Factory and Landed Cost?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>Ex-Factory price</strong> is the cost of the finished product at the factory floor before packaging for transport, freight, insurance, and GST. <strong>Landed Cost</strong> is the total final price paid by the buyer to receive the goods at their warehouse doorstep, including freight shipping and GST.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  How can manufacturers avoid portal price wars in India?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  On listing portals (like IndiaMART and Justdial), 1 buyer inquiry is sent to 8 to 10 competitors, forcing suppliers into race-to-the-bottom pricing. <strong>EnquiryBazaar</strong> sets up direct buyer engines (Google #1 ranking + factory showroom website) so 100% of buyer calls come exclusively to your business with zero competitor bidding.
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
