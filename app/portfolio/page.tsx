import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";

import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { PortfolioClient } from "@/components/portfolio/PortfolioClient";
import { PortfolioServices } from "@/components/portfolio/PortfolioServices";
import { PortfolioContact } from "@/components/portfolio/PortfolioContact";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Client Websites & Case Studies Portfolio | EnquiryBazaar",
  description:
    "Explore live websites built by EnquiryBazaar for Indian manufacturers, packaging plants, CNC engineering firms, and B2B suppliers.",
  keywords: [
    "EnquiryBazaar Portfolio",
    "B2B Website Development Case Studies",
    "Websites for Indian Manufacturers",
    "Industrial Website Design India",
    "B2B Lead Generation Results",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/portfolio",
  },
};

const highlights = [
  { value: "45+", label: "Websites built" },
  { value: "30+", label: "Businesses served", tone: "text-emerald-600" },
  { value: "B2B + B2C", label: "Markets we understand", tone: "text-[#FE5905]" },
  { value: "Website That Sells", label: "Built to turn visits into sales", valueSize: "text-base sm:text-lg" },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={`flex-1 overflow-x-clip bg-white ${inter.className}`}>
        <section className="relative isolate overflow-hidden border-b border-slate-200/80 bg-white py-10 sm:py-14 lg:py-16">
          <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
            <div className="absolute -top-28 left-1/2 h-[380px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.07),transparent_70%)] blur-[40px]" />
            <div className="absolute right-[-5%] top-1/4 h-[350px] w-[350px] rounded-full bg-orange-500/5 blur-[70px]" />
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{
                backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
              }}
            />
          </div>

          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/90 px-3.5 py-1.5 text-xs font-bold text-[#C94200] shadow-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5905] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE5905]" />
              </span>
              45+ B2B websites delivered
            </div>

            <h1 className={`mx-auto max-w-4xl text-[clamp(2rem,5vw,3.35rem)] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#001A55] ${montserrat.className}`}>
              Give Your Business a{" "}
              <span className="text-[#FE5905]">Stronger Online Presence</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-[17px]">
              Whether you sell products, offer services, or run a B2B business, we build websites that <strong className="font-extrabold text-[#001A55]">showcase what you offer, build trust, and help customers take the next step.</strong>
            </p>

            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="min-w-0 rounded-xl border border-slate-200/90 bg-white px-2 py-3.5 text-center shadow-sm sm:p-4">
                  <span className={`block ${highlight.valueSize ?? "text-xl sm:text-2xl"} font-black text-[#001A55] ${highlight.tone ?? ""} ${montserrat.className}`}>
                    {highlight.value}
                  </span>
                  <span className="mt-0.5 block text-[11px] font-semibold leading-snug text-slate-500 sm:text-xs">
                    {highlight.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PortfolioServices />
        <PortfolioClient />
        <PortfolioContact />
      </main>
      <Footer />
    </>
  );
}
