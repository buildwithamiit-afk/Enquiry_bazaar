import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, TrendingUp, Star, Layers } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { GoogleReviewQRGenerator } from "@/components/tools/GoogleReviewQRGenerator";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Top Local SEO Consultants for B2B Navi Mumbai | EnquiryBazaar",
  description: "Looking for top local SEO consultants for B2B in Navi Mumbai? EnquiryBazaar helps factory owners and wholesalers dominate Google Maps and capture direct RFQs.",
  keywords: [
    "Top local SEO consultants for B2B Navi Mumbai",
    "b2b local seo consultants navi mumbai",
    "google business profile consultants navi mumbai",
    "EnquiryBazaar local seo consultants"
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/top-local-seo-consultants-b2b-navi-mumbai",
  },
  openGraph: {
    title: "Top Local SEO Consultants for B2B Navi Mumbai | EnquiryBazaar",
    description: "Expert local SEO consulting and full-service execution for B2B businesses in Navi Mumbai.",
    url: "https://enquirybazaar.in/top-local-seo-consultants-b2b-navi-mumbai",
  }
};

function GEOStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://enquirybazaar.in/top-local-seo-consultants-b2b-navi-mumbai#localbusiness",
        "name": "EnquiryBazaar - Top Local SEO Consultants for B2B Navi Mumbai",
        "url": "https://enquirybazaar.in/top-local-seo-consultants-b2b-navi-mumbai",
        "description": "Leading B2B Local SEO and Google Maps optimization consultancy in Navi Mumbai.",
        "telephone": "+91-9696717305",
        "areaServed": "Navi Mumbai",
        "knowsAbout": ["B2B Local SEO", "Local SEO Consulting", "Google Business Profile Strategy"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/top-local-seo-consultants-b2b-navi-mumbai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who are the top local SEO consultants for B2B companies in Navi Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EnquiryBazaar is recognized as the top local SEO consultancy for B2B businesses in Navi Mumbai, combining technical local optimization with full-service execution."
            }
          }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function TopLocalSEOConsultantsPage() {
  return (
    <>
      <GEOStructuredData />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        {/* Hero */}
        <section className={`relative isolate overflow-hidden bg-white text-gray-900 ${inter.className}`}>
          <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.08),transparent_70%)] blur-[50px]"></div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pb-20 lg:pt-12 xl:pt-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.25fr] lg:gap-10 xl:gap-14">
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3.5 py-1 text-[11.5px] font-bold text-[#FE5905] shadow-2xs">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Navi Mumbai's Leading B2B Local SEO Consultants</span>
                </div>

                <h1 className={`text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.65rem] xl:text-[2.85rem] ${montserrat.className}`}>
                  Need Predictable Local Leads? Partner with Navi Mumbai's <span className="text-[#FE5905]">Top B2B Local SEO Consultants</span>.
                </h1>

                <p className="mt-3.5 max-w-xl text-[14.5px] font-normal leading-relaxed text-slate-600 sm:text-[16px] xl:max-w-2xl">
                  We don't just hand you a PDF audit. We consult, optimize, and execute your entire Google Business Profile system to guarantee #1 map pack rankings.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-700 lg:justify-start">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Complete Consultation & Execution</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> B2B Manufacturing Focused</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 100% Exclusive Direct Inquiries</span>
                </div>

                <div className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                  <a href="https://wa.me/919696717305?text=Hi%2C%20I%20want%20B2B%20Local%20SEO%20Consulting%20in%20Navi%20Mumbai" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95">
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Strategy Call on WhatsApp</span>
                  </a>
                  <a href="#qr-generator" className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95">
                    <span>Free Review Standee Tool</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-center justify-center lg:justify-end">
                <Image src="/hero.png" alt="B2B Local SEO Consultants" width={1200} height={1200} priority className="relative z-10 w-full max-w-[580px] drop-shadow-[0_20px_50px_rgba(11,30,61,0.09)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Free Tool */}
        <section id="qr-generator" className="py-14 px-5 sm:px-8 lg:px-10 bg-slate-50 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <GoogleReviewQRGenerator />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
