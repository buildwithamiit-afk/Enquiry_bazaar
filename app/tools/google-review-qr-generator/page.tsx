import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { GoogleReviewQRGenerator } from "@/components/tools/GoogleReviewQRGenerator";
import { Sparkles, ChevronRight, HelpCircle, ArrowRight, Star, QrCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Google Review QR Code Standee Generator for Businesses | EnquiryBazaar",
  description:
    "Create and download printable Google 5-Star Review QR Standees for your shop counter, factory reception desk, or product dispatch packaging. 100% Free instant tool by EnquiryBazaar.",
  keywords: [
    "Google review QR code generator",
    "free review standee generator",
    "print google review qr code",
    "google business review qr standee",
    "google review standee download png",
    "GMB QR standee maker india",
    "EnquiryBazaar tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/google-review-qr-generator",
  },
  openGraph: {
    title: "Free Google Review QR Code Standee Generator | EnquiryBazaar",
    description:
      "Generate printable Google 5-Star Review QR Standees in seconds. Download high-res PNG for desk counters and product boxes.",
    url: "https://enquirybazaar.in/tools/google-review-qr-generator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/google-review-qr-generator#app",
      "name": "Google Review QR Standee Generator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/google-review-qr-generator",
      "description":
        "A free web-based generator that creates downloadable, print-ready Google Review QR Standees and table tents for physical store counters, factory desks, and shipment boxes.",
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
  ],
};

export default function GoogleReviewQRGeneratorPage() {
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
              <span className="text-slate-900 font-semibold">Google Review QR Generator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section with Generator */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <GoogleReviewQRGenerator />
          </div>
        </section>

        {/* Cross-Link to Calculator */}
        <section className="py-12 bg-slate-50 border-t border-slate-200/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#001A55] p-6 sm:p-10 text-white lg:flex-row">
              <div className="max-w-2xl">
                <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3 py-1 text-xs font-bold text-orange-300 uppercase tracking-wider">
                  Check Your Rating Goal
                </span>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Want to know how many reviews you need to hit 4.9 stars?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Use our free <strong>Google Review Rating Calculator</strong> to determine the exact number of 5-star reviews required to improve your profile rating.
                </p>
              </div>

              <Link
                href="/tools/gmb-rating-calculator"
                className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#FE5905] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition hover:bg-orange-600 active:scale-95"
              >
                <span>Calculate Rating Goal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
