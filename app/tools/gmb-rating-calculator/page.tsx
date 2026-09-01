import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { GMBRatingCalculator } from "@/components/tools/GMBRatingCalculator";
import { Star, ShieldCheck, ChevronRight, HelpCircle, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Google Review Rating Calculator - How Many 5-Star Reviews Do You Need? | EnquiryBazaar",
  description:
    "Free GMB Rating Calculator by EnquiryBazaar: Calculate how many 5-star reviews you need to increase your Google My Business rating from 3.4 or 4.0 to 4.5, 4.8, or 4.9. Instant calculation, milestone roadmap, and recovery formulas.",
  keywords: [
    "Google review rating calculator",
    "GMB rating calculator",
    "how many 5 star reviews to get 4.5 on google",
    "how many reviews to increase google rating",
    "google my business review formula",
    "raise google rating from 3.4 to 4.9",
    "google maps review recovery calculator",
    "free google review calculator india",
    "EnquiryBazaar tools",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/tools/gmb-rating-calculator",
  },
  openGraph: {
    title: "Google Review Rating Calculator - How Many 5-Star Reviews Do You Need?",
    description:
      "Find out exactly how many consecutive 5-star reviews your business needs to reach 4.5 or 4.9 on Google My Business. Free instant calculation by EnquiryBazaar.",
    url: "https://enquirybazaar.in/tools/gmb-rating-calculator",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://enquirybazaar.in/tools/gmb-rating-calculator#app",
      "name": "Google Review Rating Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "url": "https://enquirybazaar.in/tools/gmb-rating-calculator",
      "description":
        "An interactive mathematical calculator that determines the exact number of 5-star reviews required to improve a Google My Business profile from any existing rating to a desired target rating (e.g., from 3.4 to 4.9).",
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
      "@id": "https://enquirybazaar.in/tools/gmb-rating-calculator#howto",
      "name": "How to Calculate How Many 5-Star Reviews You Need on Google",
      "description": "Step-by-step mathematical guide to calculating the exact number of 5-star reviews to reach your target Google rating.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Note your current rating and review count",
          "text": "Open your Google Business Profile and note down your current average star rating (e.g., 3.4) and the total number of reviews (e.g., 25).",
        },
        {
          "@type": "HowToStep",
          "name": "Choose your target rating",
          "text": "Select a realistic target rating such as 4.5, 4.8, or 4.9 (Google caps rounding at 4.95 for profiles with past non-5-star reviews).",
        },
        {
          "@type": "HowToStep",
          "name": "Apply the Google Review Formula",
          "text": "Formula: Needed 5-Star Reviews = [Current Review Count × (Target Rating - Current Rating)] ÷ (5 - Target Rating).",
        },
        {
          "@type": "HowToStep",
          "name": "Deploy a Review Generation Funnel",
          "text": "Use print standees with QR codes and post-dispatch WhatsApp review prompts to collect the required 5-star reviews without risking bad reviews.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://enquirybazaar.in/tools/gmb-rating-calculator#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you calculate how many 5-star reviews are needed to raise a Google rating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The mathematical formula is: X = [Current Reviews × (Target Rating - Current Rating)] ÷ (5 - Target Rating). For example, if you have 25 reviews with a 3.4 rating and want to reach 4.5, you need: [25 × (4.5 - 3.4)] ÷ (5 - 4.5) = [25 × 1.1] ÷ 0.5 = 55 consecutive 5-star reviews.",
          },
        },
        {
          "@type": "Question",
          "name": "Why can't I reach an exact 5.0 rating on Google if I have bad reviews?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mathematically, an average can only be 5.0 if every single review is 5 stars. Once you have a 1-star or 4-star review, reaching an exact 5.00 would require infinite reviews. However, Google visually rounds ratings: any score of 4.95 or higher is presented as 5.0 stars with full gold stars on Google Search and Maps.",
          },
        },
        {
          "@type": "Question",
          "name": "How many reviews do I need to rank in the Google Maps Local 3-Pack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While total review count is important, review velocity (getting steady, fresh reviews weekly), review sentiment, keyword-rich comments from local customers, and a rating above 4.5 are the primary ranking signals in Google's local algorithm.",
          },
        },
        {
          "@type": "Question",
          "name": "How can EnquiryBazaar help my business reach a 4.9 rating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EnquiryBazaar provides complete Google Business Profile optimization, customized Google Review QR standees for your billing counters, post-dispatch WhatsApp automation, and local SEO services to help Indian manufacturers and MSMEs dominate local search results.",
          },
        },
      ],
    },
  ],
};

export default function GMBRatingCalculatorPage() {
  return (
    <>
      {/* Rich Schema for SEO & AI Recommendations */}
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
              <span className="text-slate-900 font-semibold">GMB Rating Calculator</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-radial from-orange-50/40 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#FE5905]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>EnquiryBazaar Free Business Tool</span>
              </div>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Google Review <span className="text-[#FE5905]">Rating Calculator</span>
              </h1>
              <p className="mt-4 text-base text-slate-600 sm:text-lg">
                Enter your current Google My Business score and see exactly how many 5-star reviews you need to reach <strong>4.5, 4.8, or 4.9 stars</strong>. Free instant calculation, timeline breakdown, and milestone roadmap.
              </p>
            </div>

            {/* Interactive Calculator App */}
            <div className="mt-10">
              <GMBRatingCalculator />
            </div>
          </div>
        </section>

        {/* Educational Section: The Math Behind Google Reviews */}
        <section className="border-t border-slate-200/80 bg-slate-50/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
                How Does The Google Review Formula Work?
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Google calculates your star rating using a weighted arithmetic mean of all public reviews submitted to your Google Business Profile.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-[#FE5905] font-black">
                  1
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Total Points Accumulation</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Every 5-star review adds 5 points; every 1-star review adds only 1 point. Your current total score is:
                </p>
                <div className="mt-3 rounded-lg bg-slate-100 p-2.5 font-mono text-xs font-semibold text-slate-800">
                  Total Points = Rating × Review Count
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600 font-black">
                  2
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">Target Balancing Formula</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  To reach a Target Rating (T) from Current Rating (R) and Count (N), you solve for X new 5-star reviews:
                </p>
                <div className="mt-3 rounded-lg bg-slate-100 p-2.5 font-mono text-xs font-semibold text-slate-800">
                  X = [N × (T - R)] ÷ (5 - T)
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 font-black">
                  3
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">The Power of Rounding</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  You do not need a perfect 5.0 to appear as 5 stars. Google visually rounds scores:
                </p>
                <div className="mt-3 rounded-lg bg-emerald-50 border border-emerald-200 p-2.5 text-xs font-bold text-emerald-800">
                  4.85 - 4.94 ⭐ = Rounded to 4.9 ⭐<br />
                  4.95 - 5.00 ⭐ = Displays 5 Full Stars
                </div>
              </div>
            </div>

            {/* Example Case Study Box */}
            <div className="mt-10 rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50/80 to-amber-50/80 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-slate-900">
                Example: Taking a 3.4 Star Profile to 4.9 Stars
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                Suppose a manufacturing supplier in Navi Mumbai has <strong>25 Google reviews</strong> with an average rating of <strong>3.4 stars</strong>.
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs font-medium">
                <div className="rounded-xl bg-white p-4 shadow-xs">
                  <span className="text-slate-500">Target: 4.0 ⭐</span>
                  <p className="mt-1 text-base font-bold text-slate-900">+15 Reviews</p>
                  <span className="text-[11px] text-slate-400">Total becomes 40 reviews</span>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-xs">
                  <span className="text-slate-500">Target: 4.5 ⭐</span>
                  <p className="mt-1 text-base font-bold text-slate-900">+55 Reviews</p>
                  <span className="text-[11px] text-slate-400">Total becomes 80 reviews</span>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-xs">
                  <span className="text-slate-500">Target: 4.8 ⭐</span>
                  <p className="mt-1 text-base font-bold text-slate-900">+175 Reviews</p>
                  <span className="text-[11px] text-slate-400">Total becomes 200 reviews</span>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-xs border border-orange-300">
                  <span className="text-[#FE5905] font-bold">Target: 4.9 ⭐</span>
                  <p className="mt-1 text-base font-black text-[#FE5905]">+375 Reviews</p>
                  <span className="text-[11px] text-slate-500">Market Leader level</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Tool Cross-Link Banner */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#001A55] p-6 sm:p-10 text-white lg:flex-row">
              <div className="max-w-2xl">
                <span className="rounded-full bg-orange-500/20 border border-orange-400/30 px-3 py-1 text-xs font-bold text-orange-300 uppercase tracking-wider">
                  Companion Free Tool
                </span>
                <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Ready to Collect Those 5-Star Reviews?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Generate and download your custom printable <strong>Google 5-Star Review Standee QR Code</strong>. Display it on your reception desk, billing counter, or dispatch packaging.
                </p>
              </div>

              <Link
                href="/tools/google-review-qr-generator"
                className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-[#FE5905] px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition hover:bg-orange-600 active:scale-95"
              >
                <span>Make Free QR Standee</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-slate-100 bg-slate-50 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-black text-slate-900 sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Everything you need to know about Google review formulas and reputation management.
              </p>
            </div>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  What is the exact formula for Google My Business review calculations?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The formula to calculate the required 5-star reviews is: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-800">X = [N × (T - R)] ÷ (5 - T)</code> where <strong>N</strong> is your current total reviews, <strong>R</strong> is your current rating, and <strong>T</strong> is your desired target rating.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  Why can&apos;t I get an exact 5.0 score after getting a 1-star review?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Because mathematically, an average can only be 5.0 if 100% of all submitted scores are 5. Even if you have 10,000 five-star reviews and a single 1-star review, the mathematical average will be 4.9996. However, Google visually rounds any score above 4.95 to appear as 5 full stars.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-[#FE5905] shrink-0" />
                  How does EnquiryBazaar help manufacturers achieve 4.8+ ratings?
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  EnquiryBazaar builds automated review collection funnels for factory owners and B2B suppliers. We set up physical QR standees for dispatch packages, post-delivery WhatsApp review request workflows, and optimize your Google Business Profile categories to rank #1 on Google Maps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <FinalCTA />

      </main>

      <Footer />
    </>
  );
}
