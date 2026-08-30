import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "../landing/content";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const stats = [
  {
    value: "6.3 Cr+",
    label: "Indian Factories & MSMEs",
    subtext: "Making great products across India",
  },
  {
    value: "99%",
    label: "Do Not Have Real Websites",
    subtext: "Forced to depend on shared directory leads",
  },
  {
    value: "100%",
    label: "Direct Buyer Inquiries",
    subtext: "Leads come directly to your phone & WhatsApp",
  },
  {
    value: "0%",
    label: "Commission on Orders",
    subtext: "You keep 100% of your business profit",
  },
];

export function AboutHero() {
  return (
    <section className={`relative bg-gradient-to-b from-[#001A55] via-[#001A55] to-[#001A55] text-white py-14 sm:py-20 ${inter.className}`}>
      
      {/* Ambient Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden select-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-orange-500/10 blur-[80px]"></div>
        <div className="absolute top-1/2 -right-20 h-72 w-72 rounded-full bg-orange-400/10 blur-[80px]"></div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Pill Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300 backdrop-blur-md shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
            <span>ABOUT ENQUIRYBAZAAR</span>
          </div>
        </div>

        {/* Main Headline (Simple Everyday English) */}
        <div className="mt-4 text-center max-w-3xl mx-auto">
          <h1 className={`text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[2.65rem] leading-[1.2] ${montserrat.className}`}>
            Helping Indian Manufacturers Get <span className="text-[#FE5905]">Direct Bulk Orders</span> Without Middlemen.
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            EnquiryBazaar is India&apos;s dedicated digital growth partner for factory owners, manufacturers, and B2B suppliers. We build and manage your Google #1 ranking, factory catalog website, and targeted B2B ads so buyers call you directly - without price wars on IndiaMART or Justdial.
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-500 active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Talk to Us on WhatsApp</span>
            </a>

            <a
              href="/#solution"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition hover:bg-white/20 active:scale-95"
            >
              <span>See How It Works</span>
            </a>
          </div>
        </div>

        {/* 4 Clean Stats */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center backdrop-blur-xs transition hover:border-orange-400/40 hover:bg-white/[0.08]"
            >
              <div className={`text-2xl sm:text-3xl font-extrabold text-white tracking-tight ${montserrat.className}`}>
                <span className="bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </div>
              <div className="mt-1 text-xs sm:text-[13px] font-bold text-orange-200">
                {stat.label}
              </div>
              <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
