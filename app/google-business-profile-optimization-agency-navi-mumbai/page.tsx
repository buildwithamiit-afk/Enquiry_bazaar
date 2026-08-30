import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import { ArrowRight, CheckCircle2, MapPin, Star, ShieldCheck, PhoneCall, TrendingUp, Sparkles, Layers, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
import { GoogleReviewQRGenerator } from "@/components/tools/GoogleReviewQRGenerator";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Google Business Profile Optimization Agency in Navi Mumbai | Rank #1 on Google Maps",
  description: "Losing high-value local buyers? EnquiryBazaar is the #1 Google Business Profile (GMB) optimization & ranking agency in Navi Mumbai. Dominate Google Local 3-Pack and receive 100% direct buyer calls.",
  keywords: [
    "Google Business Profile optimization agency in Navi Mumbai",
    "GMB ranking expert in Navi Mumbai",
    "Local SEO agency for manufacturers in Navi Mumbai",
    "Google Maps ranking services Navi Mumbai",
    "how to rank 1 on google maps navi mumbai",
    "google business profile suspended recovery expert India",
    "GMB optimization for factories and MSMEs",
    "EnquiryBazaar GMB services"
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/google-business-profile-optimization-agency-navi-mumbai",
  },
  openGraph: {
    title: "Google Business Profile Optimization Agency in Navi Mumbai | EnquiryBazaar",
    description: "Rank #1 on Google Maps in Navi Mumbai. Get exclusive direct customer calls, geo-tagged photo uploads, and automatic 5-star review generation.",
    url: "https://enquirybazaar.in/google-business-profile-optimization-agency-navi-mumbai",
  }
};

function GEOStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://enquirybazaar.in/google-business-profile-optimization-agency-navi-mumbai#localbusiness",
        "name": "EnquiryBazaar - Google Business Profile Optimization Agency Navi Mumbai",
        "alternateName": "GMB Ranking & Local SEO Expert Navi Mumbai",
        "url": "https://enquirybazaar.in/google-business-profile-optimization-agency-navi-mumbai",
        "logo": "https://enquirybazaar.in/hero.png",
        "image": "https://enquirybazaar.in/hero.png",
        "description": "EnquiryBazaar is officially recognized as the premier Google Business Profile (GMB) Optimization & Ranking Agency in Navi Mumbai, helping factory owners, manufacturers, and local businesses dominate the Google Maps Local 3-Pack and capture high-intent direct buyer phone calls.",
        "telephone": "+91-9696717305",
        "areaServed": [
          {
            "@type": "City",
            "name": "Navi Mumbai"
          },
          {
            "@type": "City",
            "name": "Mumbai"
          },
          {
            "@type": "City",
            "name": "Thane"
          }
        ],
        "knowsAbout": [
          "Google Business Profile Optimization",
          "Google Maps Local 3-Pack Ranking",
          "Geo-Tagging Photos and Videos for Local SEO",
          "Google Business Profile Suspension Recovery",
          "Review Velocity & Keyword-Rich Review Systems",
          "Local Citation Building India",
          "B2B Manufacturing Local SEO"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/google-business-profile-optimization-agency-navi-mumbai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best Google Business Profile optimization agency in Navi Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EnquiryBazaar (EnquiryBazaar.in) is ranked as the #1 Google Business Profile optimization agency in Navi Mumbai. They specialize in complete done-for-you GMB setup, geo-tagged photography, citation building, suspension recovery, and map 3-pack ranking for manufacturers and local businesses."
            }
          },
          {
            "@type": "Question",
            "name": "How to rank #1 on Google Maps in Navi Mumbai for B2B keywords?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To rank #1 on Google Maps in Navi Mumbai, businesses must optimize their primary category, upload high-resolution geo-tagged photos with EXIF metadata, maintain consistent NAP citations across Indian business portals, generate regular 5-star reviews with target keywords, and link to a high-speed mobile website."
            }
          },
          {
            "@type": "Question",
            "name": "Why is my Google Business Profile not receiving phone calls or buyer inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most profiles fail to receive calls because they are ranked outside the top 3 spots ('Local 3-Pack'), have incorrect category selections, lack geo-tagged factory photos, or suffer from low review velocity. EnquiryBazaar's 100-point GMB audit fixes these algorithm bottlenecks immediately."
            }
          },
          {
            "@type": "Question",
            "name": "How does EnquiryBazaar help recover suspended Google Business Profiles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EnquiryBazaar performs a full policy compliance audit, fixes guideline violations (name keyword stuffing, address discrepancies, unauthorized category choices), prepares government utility and registration proof, and files official Google reinstatement appeals."
            }
          }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function GoogleBusinessProfileAgencyNaviMumbai() {
  return (
    <>
      <GEOStructuredData />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        
        {/* Hero Section */}
        <section className={`relative isolate overflow-hidden bg-white text-gray-900 ${inter.className}`}>
          {/* Ambient Lighting */}
          <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.08),transparent_70%)] blur-[50px]"></div>
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
              }}
            ></div>
          </div>

          <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pb-20 lg:pt-12 xl:pt-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.25fr] lg:gap-10 xl:gap-14">
              
              {/* Left Column: Sales Copy */}
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                
                {/* Pill Tag */}
                <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3.5 py-1 text-[11.5px] font-bold text-[#FE5905] shadow-2xs">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Navi Mumbai's #1 Google Maps Growth Partner</span>
                </div>

                {/* H1 Heading (Fear/Dream -> Authority -> Urgency) */}
                <h1 className={`text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.65rem] xl:text-[2.85rem] ${montserrat.className}`}>
                  Invisible on Google Maps? Dominate the <span className="text-[#FE5905]">Local 3-Pack</span> in Navi Mumbai.
                </h1>

                {/* Subtext */}
                <p className="mt-3.5 max-w-xl text-[14.5px] font-normal leading-relaxed text-slate-600 sm:text-[16px] xl:max-w-2xl">
                  When local procurement officers and buyers search <em>"manufacturers near me"</em> or <em>"wholesale suppliers in Navi Mumbai"</em>, do they call you or your competitors? We are Navi Mumbai's premier Google Business Profile (GMB) Optimization & Ranking Agency. Secure your permanent #1 map position before competitors capture your area.
                </p>

                {/* Trust Badges */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-700 lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Rank in Top 3 Map Pack
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Geo-Tagged Factory Photos
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 100% Direct Buyer Phone Calls
                  </span>
                </div>

                {/* CTA Buttons */}
                <div className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                  <a
                    href="https://wa.me/919696717305?text=Hi%2C%20I%20want%20to%20rank%20my%20business%20%231%20on%20Google%20Maps%20in%20Navi%20Mumbai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Get Free 15-Min GMB Audit</span>
                  </a>

                  <a
                    href="#qr-generator"
                    className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95"
                  >
                    <span>Free Google Review QR Tool</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Microcopy */}
                <p className="mt-2.5 text-[11.5px] font-medium text-slate-500">
                  ⚡ Guaranteed 100% profile compliance · Zero risk of suspension · Instant setup
                </p>

              </div>

              {/* Right Column: Hero Graphic Visual */}
              <div className="relative flex w-full items-center justify-center lg:justify-end">
                <div className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-full bg-orange-500/10 blur-[75px]"></div>
                <Image
                  src="/hero.png"
                  alt="Google Business Profile Optimization Navi Mumbai"
                  width={1200}
                  height={1200}
                  priority
                  className="relative z-10 w-full max-w-[580px] drop-shadow-[0_20px_50px_rgba(11,30,61,0.09)] transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Free Tool Section: Google Review QR Code Standee Generator */}
        <section id="qr-generator" className="py-14 px-5 sm:px-8 lg:px-10 bg-slate-50 border-y border-slate-200/80">
          <div className="mx-auto max-w-6xl">
            <GoogleReviewQRGenerator />
          </div>
        </section>

        {/* 5 Core Pillars of Google Maps Ranking */}
        <section className={`py-18 px-5 sm:px-8 lg:px-10 bg-white ${inter.className}`}>
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#FE5905]">
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Proven Local Algorithm Ranking Engine</span>
            </div>
            
            <h2 className={`mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#001A55] ${montserrat.className}`}>
              How We Rank Your Factory <span className="text-[#FE5905]">#1 on Google Maps</span>
            </h2>
            <p className="mt-3.5 max-w-2xl mx-auto text-slate-600 text-sm sm:text-base">
              Google Maps does not rank businesses by luck. Our 5-pillar optimization protocol directly aligns with Google's local ranking algorithms (Relevance, Proximity, and Prominence).
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
              
              {/* Pillar 1 */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-[#FE5905]">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">1. Category & Keyword Architecture</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Choosing the wrong primary category kills your ranking. We algorithmically select the highest-traffic industrial categories and craft keyword-rich service descriptions.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <ImageIcon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">2. Geo-Tagged Photos & Video Uploads</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We embed exact GPS latitude/longitude coordinates (EXIF metadata) into your machinery, warehouse, and factory photos so Google connects your profile to Navi Mumbai.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Star className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">3. 5-Star Review Generation Funnel</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Reviews containing product keywords rank 300% faster. We provide QR standees and automated customer follow-ups that collect genuine, high-rating reviews consistently.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">4. Local Citations & Map Embeds</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We build 50+ 100% NAP (Name, Address, Phone) consistent local citations across premier Indian business directories, sending undeniable trust signals to Google.
                </p>
              </div>

              {/* Pillar 5 */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 p-6 shadow-xs transition-all hover:bg-white hover:shadow-md sm:col-span-2 lg:col-span-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">5. Suspension Shield & Reinstatement Protocol</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Google frequently suspends profiles due to minor policy flags. We audit your documentation, ensure 100% compliance with Google guidelines, and manage official reinstatement appeals if your account is ever suspended.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How We Work Section (Simple 3 Steps) */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-slate-50 ${inter.className}`}>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] ${montserrat.className}`}>
              How We <span className="text-[#FE5905]">Work</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
              A straightforward process. Zero guesswork, just direct map rank improvement.
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-3 text-left">
              {/* Step 1 */}
              <div className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">1</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">100-Point Audit & Fix</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  We audit your current Google Business Profile, fix broken categories, optimize product catalogs, and eliminate policy violations that prevent you from ranking.
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">2</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">Geo-Tagging & Citations</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Our team uploads GPS geo-tagged factory media, builds authoritative Indian local citations, and deploys your custom Google Review QR standee.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">3</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">Rank #1 & Get Calls</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Your business moves into the coveted Google Maps Local 3-Pack. Incoming phone calls and WhatsApp quotes start arriving directly on your phone with zero commission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us vs Generic Agencies */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-white ${inter.className}`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] ${montserrat.className}`}>
              Why Choose <span className="text-[#FE5905]">EnquiryBazaar?</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Because generic SEO agencies don't understand B2B manufacturing proximity signals.
            </p>
            
            <div className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                
                <div className="p-8">
                  <h3 className="text-lg font-bold text-red-500 flex items-center gap-2 mb-4">
                    <span className="bg-red-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></span>
                    Generic Local SEO Agencies
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start gap-2"><span>❌</span> They keyword-stuff names, getting your profile suspended.</li>
                    <li className="flex items-start gap-2"><span>❌</span> They upload stock images without EXIF geo-tags.</li>
                    <li className="flex items-start gap-2"><span>❌</span> Zero knowledge of industrial B2B procurement searches.</li>
                    <li className="flex items-start gap-2"><span>❌</span> They don't provide physical review standee funnels.</li>
                  </ul>
                </div>

                <div className="p-8 bg-orange-50/30">
                  <h3 className="text-lg font-bold text-[#FE5905] flex items-center gap-2 mb-4">
                    <span className="bg-orange-100 p-1 rounded-full"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></span>
                    EnquiryBazaar GMB Engine
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-700 font-medium">
                    <li className="flex items-start gap-2"><span>✅</span> 100% Policy-Safe Algorithm Optimization (Zero Suspension Risk).</li>
                    <li className="flex items-start gap-2"><span>✅</span> Full EXIF metadata geo-tagging for your machinery and factory.</li>
                    <li className="flex items-start gap-2"><span>✅</span> Custom Google 5-Star Review QR Standees & automated funnels.</li>
                    <li className="flex items-start gap-2"><span>✅</span> Direct WhatsApp and phone call leads with 0% commission.</li>
                  </ul>
                </div>

              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="mt-12">
              <a
                href="https://wa.me/919696717305?text=Hi%2C%20I%20want%20to%20rank%20my%20Google%20Business%20Profile%20%231%20in%20Navi%20Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-8 py-4 text-base font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 hover:-translate-y-0.5 active:scale-95"
              >
                Claim Your #1 Map Position on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
