import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Calculator, QrCode, Sparkles, ArrowRight, Star, ShieldCheck, CheckCircle2, Box, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Free B2B & Google Business Growth Tools | EnquiryBazaar",
  description:
    "Explore 100% free business growth and Google My Business reputation tools by EnquiryBazaar. Calculate 5-star reviews needed, generate printable Google Review QR standees, and optimize your local presence.",
  keywords: [
    "free business tools",
    "gmb tools",
    "google review calculator",
    "google review qr standee generator",
    "b2b growth tools india",
    "EnquiryBazaar tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools",
  },
};

export default function ToolsIndexPage() {
  const tools = [
    {
      title: "Google Review Rating Calculator",
      description:
        "Find out exactly how many consecutive 5-star reviews you need to increase your Google rating (e.g., from 3.4 to 4.9). Features milestone roadmaps, bad review risk analysis, and timeline forecasts.",
      href: "/tools/gmb-rating-calculator",
      badge: "Reputation & SEO",
      icon: Calculator,
      stats: "Calculates in 1 second",
    },
    {
      title: "Wholesale MOQ & Landed Price Calculator",
      description:
        "Calculate accurate Ex-Factory prices, per-unit freight, GST, and net profit margins. Protect your factory margins and generate instant B2B buyer quotations for WhatsApp.",
      href: "/tools/wholesale-moq-landed-price-calculator",
      badge: "Pricing & Margins",
      icon: Calculator,
      stats: "GST & Freight Compliant",
    },
    {
      title: "Corrugated Box Weight & Cost Calculator",
      description:
        "Calculate exact carton weight in grams, sheet cutting dimensions, fluting substance GSM (1.4x factor), and bursting strength (BS) for 3-Ply, 5-Ply, and 7-Ply corrugated packaging.",
      href: "/tools/corrugated-box-weight-calculator",
      badge: "Packaging Engineering",
      icon: Box,
      stats: "TAPPI / ISO Standard",
    },
    {
      title: "Sheet Metal & Pipe Weight Calculator",
      description:
        "Calculate exact weights for MS plates, SS pipes, square tubes, and round bars with standard alloy densities and CNC laser cutting job-work estimates.",
      href: "/tools/metal-weight-calculator",
      badge: "Metal & Fabrication",
      icon: Scale,
      stats: "MS, SS, Al, Copper",
    },
    {
      title: "Google 5-Star Review QR Standee Generator",
      description:
        "Generate and download custom, print-ready Google Review QR Standees in multiple themes. Place them at your reception desk, counter, or dispatch boxes to collect reviews on autopilot.",
      href: "/tools/google-review-qr-generator",
      badge: "Print & Hardware",
      icon: QrCode,
      stats: "High-Res PNG Download",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-1 bg-white text-slate-900">
        <section className="relative overflow-hidden pt-12 pb-20 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-4 w-4" />
                <span>100% Free · No Sign Up Required</span>
              </div>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Free Business Growth & <span className="text-[#FE5905]">GMB Tools</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Practical, automated utility tools designed for Indian manufacturers, factory owners, and local B2B businesses to scale Google visibility and reputation.
              </p>
            </div>

            {/* Tools Showcase Grid */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {tools.map((tool) => {
                const IconComponent = tool.icon;
                return (
                  <div
                    key={tool.title}
                    className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-100 transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-[#FE5905]">
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                          {tool.badge}
                        </span>
                      </div>

                      <h2 className="mt-5 text-xl font-black text-slate-900">
                        {tool.title}
                      </h2>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          {tool.stats}
                        </span>
                        <Link
                          href={tool.href}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-[#FE5905] px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition hover:bg-orange-600"
                        >
                          <span>Open Tool</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits Banner */}
            <div className="mt-16 mx-auto max-w-5xl rounded-3xl bg-[#001646] p-8 text-white">
              <div className="grid gap-6 sm:grid-cols-3 text-center sm:text-left">
                <div className="flex flex-col items-center sm:items-start">
                  <ShieldCheck className="h-8 w-8 text-emerald-400" />
                  <h3 className="mt-2 font-bold text-base">100% Free Forever</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    No hidden credit cards, no mandatory logins, and no paywalls.
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <CheckCircle2 className="h-8 w-8 text-orange-400" />
                  <h3 className="mt-2 font-bold text-base">Mathematical Accuracy</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Calculated using Google My Business verified algorithms and weighted averages.
                  </p>
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <Star className="h-8 w-8 text-amber-400" />
                  <h3 className="mt-2 font-bold text-base">Rank in Local 3-Pack</h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Built by EnquiryBazaar to help MSMEs dominate local search results.
                  </p>
                </div>
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
