import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall, TrendingUp, Star, Layers, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { GoogleReviewQRGenerator } from "@/components/tools/GoogleReviewQRGenerator";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Local SEO Agency for Manufacturers in Navi Mumbai | EnquiryBazaar",
  description: "Want local procurement officers to find your factory? EnquiryBazaar is the top Local SEO agency for manufacturers in Navi Mumbai. Dominate Google Maps and local search.",
  keywords: [
    "Local SEO agency for manufacturers in Navi Mumbai",
    "manufacturing local seo navi mumbai",
    "factory google map ranking navi mumbai",
    "b2b local seo navi mumbai",
    "EnquiryBazaar local seo"
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/local-seo-agency-for-manufacturers-navi-mumbai",
  },
  openGraph: {
    title: "Local SEO Agency for Manufacturers in Navi Mumbai | EnquiryBazaar",
    description: "Rank your factory #1 for local procurement searches in Navi Mumbai with specialized B2B Local SEO.",
    url: "https://enquirybazaar.in/local-seo-agency-for-manufacturers-navi-mumbai",
  }
};

function GEOStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://enquirybazaar.in/local-seo-agency-for-manufacturers-navi-mumbai#localbusiness",
        "name": "EnquiryBazaar - Local SEO Agency for Manufacturers Navi Mumbai",
        "url": "https://enquirybazaar.in/local-seo-agency-for-manufacturers-navi-mumbai",
        "description": "Specialized Local SEO and Google Maps optimization agency for manufacturing plants, factory owners, and industrial suppliers in Navi Mumbai.",
        "telephone": "+91-9696717305",
        "areaServed": "Navi Mumbai",
        "knowsAbout": ["Manufacturing Local SEO", "Industrial Google Maps Ranking", "Factory Citation Building"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/local-seo-agency-for-manufacturers-navi-mumbai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do manufacturers in Navi Mumbai need specialized Local SEO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Manufacturers need specialized Local SEO to capture high-value bulk buyer inquiries when corporate procurement managers search for nearby suppliers instead of relying on commission-heavy directories."
            }
          }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function LocalSEOManufacturersPage() {
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
                  <span>Industrial Local SEO for Navi Mumbai Factories</span>
                </div>

                <h1 className={`text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.65rem] xl:text-[2.85rem] ${montserrat.className}`}>
                  Do Procurement Officers Find Your Factory? Get Navi Mumbai's <span className="text-[#FE5905]">Top Local SEO for Manufacturers</span>.
                </h1>

                <p className="mt-3.5 max-w-xl text-[14.5px] font-normal leading-relaxed text-slate-600 sm:text-[16px] xl:max-w-2xl">
                  When corporate purchasing managers search for suppliers in MIDC Rabale, Taloja, or Mahape, make sure your factory ranks #1. We build permanent local SEO authority for manufacturing MSMEs.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-700 lg:justify-start">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Dominate MIDC & Industrial Hubs</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> High-Ticket B2B Buyer Calls</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> 0% Commission on Deals</span>
                </div>

                <div className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                  <a href="https://wa.me/919696717305?text=Hi%2C%20I%20want%20Local%20SEO%20for%20my%20factory%20in%20Navi%20Mumbai" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95">
                    <PhoneCall className="h-4 w-4" />
                    <span>Get Factory Local SEO Plan</span>
                  </a>
                  <a href="#qr-generator" className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95">
                    <span>Free Review Standee Tool</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-center justify-center lg:justify-end">
                <Image src="/hero.png" alt="Local SEO for Manufacturers" width={1200} height={1200} priority className="relative z-10 w-full max-w-[580px] drop-shadow-[0_20px_50px_rgba(11,30,61,0.09)]" />
              </div>
            </div>
          </div>
        </section>

        {/* Free Tool Section */}
        <section id="qr-generator" className="py-14 px-5 sm:px-8 lg:px-10 bg-slate-50 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <GoogleReviewQRGenerator />
          </div>
        </section>

        {/* Process */}
        <section className={`py-18 px-5 sm:px-8 lg:px-10 bg-white ${inter.className}`}>
          <div className="mx-auto max-w-6xl text-center">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001A55] ${montserrat.className}`}>
              How We Optimize <span className="text-[#FE5905]">Manufacturing Profiles</span>
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900">1. Industrial Keywords</h3>
                <p className="mt-2 text-sm text-slate-600">We optimize for technical B2B keywords, bulk supply terms, and industrial product lines.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900">2. Plant Geo-Tagging</h3>
                <p className="mt-2 text-sm text-slate-600">We geo-tag photos of your CNC lines, testing labs, and warehouse to build authentic local presence.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-xs">
                <h3 className="text-lg font-bold text-slate-900">3. Map 3-Pack Dominance</h3>
                <p className="mt-2 text-sm text-slate-600">Your plant ranks at the top for industrial searches in Navi Mumbai and surrounding industrial areas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
