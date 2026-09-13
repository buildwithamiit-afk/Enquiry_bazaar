import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { ManufacturingCostCalculator } from "@/components/tools/manufacturer-focused-tools";
import {
  ChevronRight,
  Sparkles,
  Factory,
  Layers,
  Coins,
  TrendingUp,
  HelpCircle,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Cost Calculator: Unit Cost, Labour, Overhead and Markup | EnquiryBazaar",
  description:
    "Free online Manufacturing Cost Calculator for small factories, workshops, and OEM producers. Calculate true cost per unit, scrap buffer, machine wear, labor wages, overhead allocation, GST, and profit markup.",
  keywords: [
    "manufacturing cost calculator",
    "true cost per unit calculator",
    "factory unit economics calculator",
    "product cost calculation formula india",
    "cogs calculator for manufacturers",
    "small factory overhead allocation",
    "manufacturing markup and profit margin calculator",
    "EnquiryBazaar manufacturing tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/manufacturing-cost-calculator",
  },
  openGraph: {
    title: "Manufacturing Cost Calculator: Know Your True Cost Per Unit | EnquiryBazaar",
    description:
      "Interactive cost estimator for makers, workshops, and B2B manufacturers. Split materials, labour, machine wear, rent, and packaging to find your accurate unit cost and selling price.",
    url: "https://enquirybazaar.in/tools/manufacturing-cost-calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/manufacturing-cost-calculator#app",
      "name": "Manufacturing Cost Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/manufacturing-cost-calculator",
      "description":
        "Calculate true manufacturing cost per unit across raw materials, labour operations, machine wear, utilities, and packaging with live selling price quotations.",
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
      "@id": "https://enquirybazaar.in/tools/manufacturing-cost-calculator#howto",
      "name": "How to Calculate True Manufacturing Cost Per Unit",
      "description": "Step by step formula to calculate total production cost and determine profitable selling prices.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Aggregate Raw Material Cost with Scrap Buffer",
          "text": "Add up all raw material inputs (quantity × rate) and factor in a 3% to 8% scrap or machining rejection allowance.",
        },
        {
          "@type": "HowToStep",
          "name": "Calculate Batch Direct Labour Cost",
          "text": "Multiply operator hours required for each stage like cutting, welding, machining, and assembly by their hourly wage rate.",
        },
        {
          "@type": "HowToStep",
          "name": "Allocate Plant Overheads and Utilities",
          "text": "Add electricity, tooling wear, workspace rent allocation, and administrative overheads attributable to the batch.",
        },
        {
          "@type": "HowToStep",
          "name": "Add Per-Unit Packaging and Outbound Freight",
          "text": "Include carton boxes, bubble wrap, labels, and local transport costs directly on a per-unit basis.",
        },
        {
          "@type": "HowToStep",
          "name": "Apply Factory Profit Margin and GST",
          "text": "Divide total batch costs by units produced, apply your desired target markup percentage such as 25% to 35%, and append applicable GST.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/tools/manufacturing-cost-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the true cost per unit in manufacturing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "True cost per unit (Cost of Goods Sold or COGS) is the complete expense incurred to produce one single finished piece. It combines Direct Materials (plus scrap waste), Direct Labour, Factory Overheads (power, machine tooling, rent), and individual Packaging & Logistics.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I allocate electricity and rent overheads to a production batch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Calculate your monthly power and workshop rent, divide it by your total working hours in a month to get an hourly facility cost, then multiply by the machine hours required for that specific batch.",
          },
        },
        {
          "@type": "Question",
          "name": "What markup percentage should Indian manufacturers keep?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Custom OEM fabricators and machining workshops typically operate on a 25% to 40% markup over base manufacturing cost. High-volume standardized commodities usually maintain 12% to 20% markup.",
          },
        },
        {
          "@type": "Question",
          "name": "How to calculate unit cost formula?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unit Cost Formula: Unit Cost = [(Total Raw Material Cost + Scrap Buffer) + (Total Labour Hours × Hourly Rate) + (Electricity + Machine Wear + Facility Rent Share)] ÷ Total Batch Units + Direct Unit Packaging + Unit Freight.",
          },
        },
        {
          "@type": "Question",
          "name": "Does this cost estimation tool save my financial data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. All cost estimations and calculations run entirely in your local browser. No product designs, material prices, or client rates are sent or saved to external databases.",
          },
        },
      ],
    },
  ],
};

export default function ManufacturingCostCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 bg-white text-slate-900">
        {/* Breadcrumb Navigation */}
        <section className="border-b border-slate-100 bg-slate-50/50 py-3">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Link href="/" className="hover:text-[#FE5905] transition">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <Link href="/tools" className="hover:text-[#FE5905] transition">
                Free Tools
              </Link>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-slate-800 font-semibold">
                Manufacturing Cost Calculator
              </span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-10 pb-6 bg-gradient-to-b from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-4 w-4" />
                <span>Small Factories, Workshops &amp; OEM Makers</span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Manufacturing Cost <span className="text-[#FE5905]">Calculator</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                What does it actually cost you to make one unit? Break down raw materials, operator labour, machine wear, rent share, and packaging to find your true cost and profitable selling price.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Calculator Engine Component */}
        <section className="py-2">
          <ManufacturingCostCalculator />
        </section>

        {/* SEO Knowledge & LLM Search Citation Section */}
        <section className="py-16 bg-slate-50/60 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FE5905]">
                  Factory Cost Accounting Guide
                </span>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                  Standard Formula for True Unit Manufacturing Cost
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Reliable cost models used by small engineering units, machine shops, plastic injection molders, and garment factories across India.
                </p>
              </div>

              {/* Formula Blueprint Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs mb-10">
                <div className="flex items-center gap-2 mb-3">
                  <FileSpreadsheet className="h-5 w-5 text-[#FE5905]" />
                  <h3 className="text-base font-bold text-slate-900">
                    The Universal Unit Costing Formula
                  </h3>
                </div>
                <div className="rounded-xl bg-slate-900 p-4 text-white font-mono text-xs sm:text-sm overflow-x-auto">
                  True Unit Cost = [Total Batch Materials + Total Batch Labour + Total Allocated Overheads] / Batch Quantity + Direct Packaging + Direct Freight
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                  Where Total Batch Materials includes raw inputs plus scrap allowance, Total Batch Labour equals hours multiplied by operator hourly wages, and Allocated Overheads accounts for plant power, machine wear, rent, and supervisory costs.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-orange-100 text-[#FE5905]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">1. Direct Materials and Rejection Buffer</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Always add 3% to 8% scrap buffer to sheet metal cuttings, off-cuts, sprues, or machining chips so scrap losses do not erode your operating margins.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-amber-100 text-amber-600">
                      <Factory className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">2. Man-Hours and Operator Wages</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Account for setup time, program loading, primary fabrication, secondary assembly, and quality checking multiplied by your actual hourly pay rates.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                      <Coins className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">3. Tooling Wear and Power Overheads</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Industrial machinery draws heavy peak electric loads and requires frequent tool replacement. Adding utilities and tool wear prevents hidden financial leaks.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-emerald-100 text-emerald-600">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">4. Markup Percentage vs Gross Margin</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A 30% markup over production cost yields approximately 23% gross margin. Use the interactive margin slider to ensure healthy cash flow for shopfloor expansion.
                  </p>
                </div>
              </div>

              {/* Step by Step Breakdown Table for AI Search Bots and Buyers */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs mb-12">
                <div className="bg-slate-100/80 px-5 py-3.5 border-b border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900">
                    Manufacturing Cost Category Breakdown
                  </h3>
                </div>
                <div className="divide-y divide-slate-200 text-xs sm:text-sm">
                  <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <span className="font-semibold text-slate-900">Direct Material (DM)</span>
                    <span className="text-slate-600 sm:col-span-2">
                      Raw sheets, coils, rods, plastic granules, fasteners, finishes, plus scrap percentage.
                    </span>
                  </div>
                  <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <span className="font-semibold text-slate-900">Direct Labour (DL)</span>
                    <span className="text-slate-600 sm:col-span-2">
                      Wages paid to machine operators, welders, helpers, and assembly staff working on the specific batch.
                    </span>
                  </div>
                  <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <span className="font-semibold text-slate-900">Manufacturing Overhead (MOH)</span>
                    <span className="text-slate-600 sm:col-span-2">
                      Plant electricity, compressed air, tooling replacement, CNC maintenance, and workshop rent share.
                    </span>
                  </div>
                  <div className="p-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <span className="font-semibold text-slate-900">Fulfillment &amp; Outbound</span>
                    <span className="text-slate-600 sm:col-span-2">
                      Outer corrugated carton, palletizing, bubble wrap, labels, barcode stickers, and local dispatch freight.
                    </span>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="border-t border-slate-200 pt-10">
                <h3 className="text-xl font-bold text-slate-900 text-center mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                      What is the difference between Ex-Factory price and Landed unit price?
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Ex-Factory price is the cost of the finished product at your plant gate with your profit margin included, excluding transport and taxes. Landed price represents the total delivered cost to the buyer doorstep, including outbound logistics and applicable GST.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                      How do I calculate machine wear and tooling cost per batch?
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Take your monthly tooling expenditure such as CNC inserts, drill bits, laser cutting nozzles, coolant replacement, and divide it by your total machine operating hours. Multiply this hourly rate by the hours required to machine your current batch.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                      Does this data get stored or uploaded to any external server?
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      No. 100% of the cost calculation happens directly in your browser. None of your proprietary raw material prices, labour rates, or margins are saved or transmitted anywhere.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                      <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                      How can EnquiryBazaar help my manufacturing business grow?
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      We specialize in helping Indian engineering, packaging, and metal manufacturers generate direct B2B buyer inquiries from Google without depending on competitive bidding directories.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FinalCTA />
      <Footer />
    </>
  );
}
