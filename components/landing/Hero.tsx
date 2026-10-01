"use client";
import type { CSSProperties } from "react";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import { ArrowRight, CheckCircle2, Search, Globe, Target } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

const reveal = (delay: number): CSSProperties =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export function Hero() {
  return (
    <section id="hero" className={`relative isolate overflow-hidden bg-slate-50 text-gray-900 ${inter.className}`}>
      
      {/* Dynamic Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden bg-white">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(254,89,5,0.08),transparent_60%)] blur-[50px]"></div>
        <div className="absolute top-1/4 right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[80px]"></div>

        {/* Minimalist Micro Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, #000 40%, transparent 100%)",
          }}
        ></div>
        
        {/* Subtle Top Accent Divider */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:px-10 lg:pb-28 lg:pt-28 text-center">
        
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Alert / Warning Pill */}
          <div
            className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-bold text-orange-700 shadow-sm"
            style={reveal(20)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-600"></span>
            </span>
            <span>Stop depending on IndiaMART, Justdial & shared enquiries.</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`reveal w-full text-center text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-[#001A55] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl ${montserrat.className}`}
            style={reveal(40)}
          >
            Get More <span className="text-[#FE5905]">Wholesale & Bulk Buyers</span> Directly.
          </h1>

          {/* Subtext */}
          <p
            className="reveal mt-8 max-w-3xl text-lg font-medium leading-relaxed text-slate-600 sm:text-xl"
            style={reveal(160)}
          >
            We help manufacturers, wholesalers, distributors, traders and suppliers get <strong className="text-[#001A55] font-bold bg-blue-50 px-1 rounded">direct enquiries from businesses looking to buy in bulk.</strong>
          </p>



          {/* CTA Buttons */}
          <div className="reveal mt-12 flex w-full flex-col sm:flex-row items-center justify-center gap-4" style={reveal(280)}>
            <a
              href="#book-demo"
              className="group relative flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#FE5905] px-10 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(254,89,5,0.6)] transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_60px_-15px_rgba(254,89,5,0.8)] hover:-translate-y-1 active:scale-95"
            >
              <span>Book Free Demo</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              <div className="absolute inset-0 rounded-full border-[3px] border-orange-400/30 scale-[1.02] opacity-0 transition-all duration-300 group-hover:scale-[1.08] group-hover:opacity-100"></div>
            </a>
            <a
              href="#the-problem"
              className="flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-[#001A55] border-2 border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-1 active:scale-95 shadow-sm"
            >
              <span>How It Works</span>
            </a>
          </div>

            {/* Risk-Reversal Microcopy */}
            <div className="reveal mt-6 flex flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-slate-500" style={reveal(320)}>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> No obligation</span>
              <span className="hidden sm:block h-1 w-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> 15-minute consultation</span>
              <span className="hidden sm:block h-1 w-1 rounded-full bg-slate-300"></span>
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Built for B2B sellers</span>
            </div>
        </div>
      </div>
    </section>
  );
}
