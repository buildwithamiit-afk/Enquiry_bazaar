import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "B2B Lead Generation for Manufacturing Companies | EnquiryBazaar",
  description: "Stop relying on shared portals. We help manufacturers get direct, verified business enquiries using targeted Google Ads and product-specific landing pages.",
  keywords: [
    "b2b lead generation for manufacturers",
    "manufacturing lead generation",
    "industrial lead generation",
    "lead generation company in navi mumbai",
    "b2b lead generation navi mumbai"
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/lead-generation-agency-for-manufacturers-navi-mumbai",
  },
  openGraph: {
    title: "B2B Lead Generation for Manufacturing Companies",
    description: "We help manufacturing companies generate qualified B2B enquiries online. We use Google Ads, SEO, and landing pages to connect you with verified wholesale buyers.",
    url: "https://enquirybazaar.in/lead-generation-agency-for-manufacturers-navi-mumbai",
  }
};

function GEOStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://enquirybazaar.in/lead-generation-agency-for-manufacturers-navi-mumbai#localbusiness",
        "name": "EnquiryBazaar",
        "url": "https://enquirybazaar.in/lead-generation-agency-for-manufacturers-navi-mumbai",
        "description": "EnquiryBazaar provides B2B lead generation for manufacturing companies. We build private digital setups to capture exclusive bulk buyer inquiries.",
        "telephone": "+91-9696717305",
        "areaServed": "Navi Mumbai",
        "knowsAbout": ["Manufacturing Lead Generation", "B2B Marketing for Factories Navi Mumbai"],
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/lead-generation-agency-for-manufacturers-navi-mumbai#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What information should a manufacturing enquiry contain?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A useful B2B lead is not just a phone number. We design your forms to capture the product required, expected quantity/MOQ, business type, and target timeline, ensuring you only spend time on serious buyers."
            }
          },
          {
            "@type": "Question",
            "name": "Can you target buyers outside Navi Mumbai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While we are based in Navi Mumbai, we configure your Google Ads and SEO to target buyers anywhere in India or internationally, depending on where you want to supply your products."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide landing pages and lead tracking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A generic website rarely converts well for specific products. We build dedicated landing pages for your core products and set up tracking so you know exactly which keyword generated the enquiry."
            }
          },
          {
            "@type": "Question",
            "name": "Why shouldn't I just stick to B2B directories?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shared directories send the exact same buyer to you and your competitors simultaneously, forcing you to lower your margins to win the deal. Our approach builds your own independent channel where buyers only talk to you."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to start getting enquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Once your landing page and Google Ads campaigns are live, you can start receiving enquiries within days. SEO and organic ranking take several months to mature."
            }
          },
          {
            "@type": "Question",
            "name": "Do you take a commission on my closed orders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. We are a digital growth partner, not a broker. You pay us for our marketing and technology services. Any order you close is 100% yours."
            }
          }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

export default function LeadGenerationManufacturersNaviMumbai() {
  return (
    <>
      <GEOStructuredData />
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        {/* Hero Section */}
        <section className={`relative isolate overflow-hidden bg-white text-gray-900 ${inter.className}`}>
          <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.06),transparent_70%)] blur-[40px]"></div>
          </div>
          <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-12 xl:pt-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.25fr] lg:gap-10 xl:gap-14">
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3.5 py-1 text-[11.5px] font-bold text-[#FE5905] shadow-2xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5905] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE5905]"></span>
                  </span>
                  <span>Trusted by Factory Owners</span>
                </div>
                
                <h1 className={`text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.65rem] xl:text-[2.85rem] ${montserrat.className}`}>
                  B2B Lead Generation for Manufacturing Companies
                </h1>

                <p className="mt-3 max-w-xl text-[14.5px] font-normal leading-relaxed text-slate-600 sm:text-[16px] xl:max-w-2xl">
                  Get direct business enquiries from wholesale buyers searching for your exact products. Instead of competing on price in crowded directories, we build your own digital setup using <a href="/b2b-google-ads-agency-navi-mumbai" className="text-[#FE5905] underline font-medium hover:text-orange-600">Google Ads</a>, <a href="/local-seo-agency-for-manufacturers-navi-mumbai" className="text-[#FE5905] underline font-medium hover:text-orange-600">SEO</a>, and specialized landing pages. 
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-700 lg:justify-start">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Exclusive Business Enquiries</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Direct WhatsApp Integration</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> No Shared Portals</span>
                </div>

                <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
                  <a href="https://wa.me/919696717305" target="_blank" rel="noopener noreferrer" className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95">
                    Discuss Your Requirements
                  </a>
                </div>
              </div>
              <div className="relative flex w-full items-center justify-center lg:justify-end">
                <Image src="/hero.png" alt="Manufacturer Lead Generation" width={1200} height={1200} priority className="relative z-10 w-full max-w-[600px] drop-shadow-[0_20px_50px_rgba(11,30,61,0.09)] transition-transform duration-500 hover:scale-[1.01]" />
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={`py-12 px-5 sm:px-8 lg:px-10 bg-slate-50 border-b border-slate-200 ${inter.className}`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-xl sm:text-2xl font-bold text-[#001A55] ${montserrat.className}`}>
              Common Problems Manufacturers Face Online
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 text-left">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">1. Low-Quality Retail Enquiries</h3>
                <p className="text-sm text-slate-600 leading-relaxed">You spend money on ads or directories, but end up talking to people looking for single pieces instead of bulk wholesale orders.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2">2. Shared Directory Price Wars</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Most B2B portals send the exact same buyer enquiry to 10 different factories, forcing you to compete entirely on the lowest price.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Answer / Definition for AI Search */}
        <section className={`py-12 px-5 sm:px-8 lg:px-10 bg-white border-b border-slate-200 ${inter.className}`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={`text-xl sm:text-2xl font-bold text-[#001A55] ${montserrat.className}`}>
              What is B2B Lead Generation for Manufacturers?
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed font-medium">
              B2B lead generation for manufacturers is the process of reaching potential buyers, distributors, or business customers and converting their interest into genuine enquiries.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              For manufacturing companies, a generic digital approach does not work. Instead of trying to get thousands of random website visitors, we focus on identifying procurement officers and wholesale buyers actively looking for your specific products. We build a dedicated digital pipeline using Google Ads, SEO, and product-specific landing pages to capture their enquiries directly to your business.
            </p>
          </div>
        </section>

        {/* How We Generate Manufacturing Leads Section */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-slate-50 ${inter.className}`}>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] ${montserrat.className}`}>How We Generate <span className="text-[#FE5905]">Manufacturing Leads</span></h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A practical process designed specifically for factory owners and B2B businesses.</p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3 text-left">
              <div className="relative p-6 rounded-2xl border border-slate-100 shadow-sm bg-white">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">1</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">Targeted Google Ads & SEO</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">We optimize your <a href="/b2b-google-ads-agency-navi-mumbai" className="text-[#FE5905] hover:underline font-medium">Google Ads</a> and <a href="/local-seo-agency-for-manufacturers-navi-mumbai" className="text-[#FE5905] hover:underline font-medium">local SEO</a> to target verified wholesalers actively searching for manufacturers in your category.</p>
              </div>
              <div className="relative p-6 rounded-2xl border border-slate-100 shadow-sm bg-white">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">2</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">Product Landing Pages</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">Instead of sending buyers to a generic homepage, we build a high-converting product catalog and landing pages focused entirely on generating product-specific enquiries.</p>
              </div>
              <div className="relative p-6 rounded-2xl border border-slate-100 shadow-sm bg-white">
                <div className="absolute -top-5 -left-5 h-10 w-10 bg-[#FE5905] text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">3</div>
                <h3 className="font-bold text-lg text-slate-800 mt-2">Direct Leads on WhatsApp</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">Buyers see your products and send RFQs directly to your WhatsApp. No shared portals, and zero commission on your orders.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How the Process Works */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-white ${inter.className}`}>
          <div className="mx-auto max-w-4xl">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] text-center ${montserrat.className}`}>How the Lead Generation Process Works</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-center mb-10">A clear, step-by-step pipeline from product search to sales conversation.</p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-slate-800">Target Buyer</h3>
                  <p className="text-sm text-slate-600 mt-1">We identify wholesale buyers and procurement officers actively looking for your specific manufactured products.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-slate-800">Search & Traffic</h3>
                  <p className="text-sm text-slate-600 mt-1">We use <a href="/b2b-google-ads-agency-navi-mumbai" className="text-[#FE5905] hover:underline font-medium">Google Ads</a> and local SEO to ensure your business appears exactly when they search for industrial solutions.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-slate-800">Website & Landing Page</h3>
                  <p className="text-sm text-slate-600 mt-1">Visitors arrive at a dedicated, high-converting product page designed to build trust and highlight your manufacturing capabilities.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-slate-800">Enquiry Capture</h3>
                  <p className="text-sm text-slate-600 mt-1">The buyer submits their requirement (MOQ, specifications, business details) through a structured form or WhatsApp.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">5</div>
                <div>
                  <h3 className="font-bold text-slate-800">Lead Tracking & Sales Follow-up</h3>
                  <p className="text-sm text-slate-600 mt-1">You receive the enquiry instantly. We track the source of the lead so you know which keywords are driving actual business value.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens After Someone Enquires? */}
        <section className={`py-12 px-5 sm:px-8 lg:px-10 bg-slate-50 border-t border-b border-slate-200 ${inter.className}`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-xl sm:text-2xl font-bold text-[#001A55] ${montserrat.className}`}>
              What Happens After a Buyer Enquires?
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Speed is critical in B2B transactions. When a wholesale buyer submits a requirement on your landing page, the details—including product specifications, expected quantity, and their company name—are instantly routed directly to your WhatsApp or email. You retain complete ownership of the conversation and can begin your sales follow-up immediately.
            </p>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-white border-b border-slate-100 ${inter.className}`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] ${montserrat.className}`}>Manufacturing Sectors We Support</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We build digital lead pipelines for various industrial segments, including:</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {['Industrial Machinery', 'Packaging Materials', 'Electrical & Electronics', 'Steel & Metal Products', 'Chemicals & Resins', 'Automotive Components', 'Plastic Manufacturing', 'Textiles & Garments'].map((industry) => (
                <span key={industry} className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-slate-50 ${inter.className}`}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={`text-2xl sm:text-3xl font-bold text-[#001A55] ${montserrat.className}`}>Why Choose <span className="text-[#FE5905]">EnquiryBazaar?</span></h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Because we don't sell your manufacturing leads to 10 other factories.</p>
            <div className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                <div className="p-8">
                  <h3 className="text-lg font-bold text-red-500 flex items-center gap-2 mb-4">Other Portals (IndiaMART, etc.)</h3>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li>❌ They send 1 lead to 8-10 different factories.</li>
                    <li>❌ High competition forces you into a price war.</li>
                    <li>❌ You waste time on retail single-piece enquiries.</li>
                  </ul>
                </div>
                <div className="p-8 bg-orange-50/30">
                  <h3 className="text-lg font-bold text-[#FE5905] flex items-center gap-2 mb-4">EnquiryBazaar</h3>
                  <ul className="space-y-3 text-sm text-slate-700 font-medium">
                    <li>✅ Exclusive Leads. They only talk to you.</li>
                    <li>✅ Close deals at your own factory rates.</li>
                    <li>✅ Ad filters ensure only genuine bulk buyers reach out.</li>
                    <li>✅ Complete Leads Pipeline so no deal is missed.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-16 px-5 sm:px-8 lg:px-10 bg-white ${inter.className}`}>
          <div className="mx-auto max-w-3xl">
            <h2 className={`text-2xl font-bold text-[#001A55] text-center mb-8 ${montserrat.className}`}>Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">What information should a manufacturing enquiry contain?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">A useful B2B lead is not just a phone number. We design your forms to capture the product required, expected quantity/MOQ, business type, and target timeline, ensuring you only spend time on serious buyers.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">Can you target buyers outside Navi Mumbai?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">Yes. While we are based in Navi Mumbai, we configure your Google Ads and SEO to target buyers anywhere in India or internationally, depending on where you want to supply your products.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">Do you provide landing pages and lead tracking?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">Yes. A generic website rarely converts well for specific products. We build dedicated landing pages for your core products and set up tracking so you know exactly which keyword generated the enquiry.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">Why shouldn't I just stick to B2B directories?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">Shared directories send the exact same buyer to you and your competitors simultaneously, forcing you to lower your margins to win the deal. Our approach builds your own independent channel where buyers only talk to you.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">How long does it take to start getting enquiries?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">Once your landing page and Google Ads campaigns are live, you can start receiving enquiries within days. SEO and organic ranking take several months to mature.</p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                <h3 className="font-bold text-slate-800 text-lg">Do you take a commission on my closed orders?</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">No. We are a digital growth partner, not a broker. You pay us for our marketing and technology services. Any order you close is 100% yours.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
