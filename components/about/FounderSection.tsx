import React from "react";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import {
  Code,
  Building2,
  TrendingUp,
  Layers,
  CheckCircle2,
  Quote,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "../landing/content";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const milestoneStats = [
  {
    value: "20+",
    label: "Manufacturers Partnered",
    subtext: "Across diverse industrial sectors",
  },
  {
    value: "100+",
    label: "Business Sites Deployed",
    subtext: "Engineered for high conversion",
  },
  {
    value: "200+",
    label: "SaaS Tenants Powered",
    subtext: "Multi-tenant cloud architecture",
  },
  {
    value: "Devlo.in",
    label: "Previous Tech Venture",
    subtext: "Profitable run through June 2026",
  },
];

const pillars = [
  { step: "01", title: "Discoverable", desc: "Rank #1 on Google when buyers search for your product." },
  { step: "02", title: "Credible", desc: "Factory videos, ISO certifications & machinery proof that build trust." },
  { step: "03", title: "Accessible", desc: "Instant WhatsApp & phone triggers that make connecting frictionless." },
  { step: "04", title: "Enquiry-Ready", desc: "Digital catalogs and clear MOQ specifications built to close bulk deals." },
];

export function FounderSection() {
  return (
    <section id="founder" className={`relative bg-white py-16 sm:py-24 ${inter.className}`}>
      
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FE5905] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>LEADERSHIP &amp; VISION</span>
          </div>
        </div>

        {/* Header */}
        <div className="mt-4 text-center max-w-3xl mx-auto">
          <h2 className={`text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.35rem] leading-tight ${montserrat.className}`}>
            Meet the Founder
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Bridging the gap between software engineering, industrial manufacturing, and direct B2B customer acquisition.
          </p>
        </div>

        {/* Master 2-Column Founder Profile Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Founder Identity Card & Track Record */}
          <div className="flex flex-col gap-6">
            
            {/* Main Founder Card */}
            <div className="overflow-hidden rounded-[26px] border-2 border-slate-200 bg-gradient-to-b from-slate-50 via-white to-slate-50 p-6 sm:p-7 shadow-sm">
              
              {/* Photo & Identity */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-orange-500/30 shadow-md">
                  <Image
                    src="/images/specialists/indian_male_seo.png"
                    alt="Amit Pandey - Software Engineer & Founder of EnquiryBazaar"
                    fill
                    sizes="140px"
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className={`text-xl sm:text-2xl font-extrabold text-[#001A55] ${montserrat.className}`}>
                    Amit Pandey
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-[#FE5905] mt-0.5">
                    Software Engineer &amp; Founder, EnquiryBazaar
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    Ex-Founder of <strong>Devlo.in</strong> (Software Engineering)
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 justify-center sm:justify-start">
                    <span className="rounded-md bg-orange-100/70 px-2 py-0.5 text-[11px] font-bold text-orange-800 border border-orange-200">
                      B2B Systems Architect
                    </span>
                    <span className="rounded-md bg-emerald-100/70 px-2 py-0.5 text-[11px] font-bold text-emerald-800 border border-emerald-200">
                      Serial Tech Founder
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="mt-6 rounded-xl border border-orange-100 bg-orange-50/60 p-4 relative">
                <Quote className="h-5 w-5 text-orange-400/40 absolute right-3 top-3" />
                <p className="text-xs sm:text-[13px] font-semibold text-slate-800 italic leading-relaxed">
                  &ldquo;A website is not the destination. It is a foundation for business growth. A good digital system must help a factory get discovered, build trust, and turn interest into genuine bulk orders.&rdquo;
                </p>
                <span className="text-[11px] font-bold text-[#FE5905] block mt-2 text-right">
                  - Amit Pandey
                </span>
              </div>

              {/* Connect CTAs (WhatsApp + LinkedIn) */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={whatsappCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />
                  <span>WhatsApp Amit</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/amit-pandey-86aa62338/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-orange-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-[#0A66C2] shadow-2xs transition hover:bg-orange-50 active:scale-95"
                >
                  <svg className="h-4 w-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {milestoneStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-3.5 text-center shadow-2xs"
                >
                  <div className={`text-xl font-extrabold text-[#001A55] ${montserrat.className}`}>
                    {stat.value}
                  </div>
                  <div className="text-[11.5px] font-bold text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Founder's Story & Vision */}
          <div className="flex flex-col gap-6 text-slate-700 text-xs sm:text-[13.5px] leading-relaxed">
            
            {/* Story Block 1 */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <h4 className={`text-base sm:text-lg font-bold text-[#001A55] ${montserrat.className}`}>
                From Software Engineering to Industrial Business Growth
              </h4>
              <p className="mt-2.5">
                I’m Amit Pandey, a Software Engineer and the founder of EnquiryBazaar. Before starting EnquiryBazaar, I founded and ran <strong>Devlo.in</strong>, a specialized software engineering and development company. After building it profitably and delivering high-performance digital products for diverse clients, I wrapped Devlo.in in June 2026 to dedicate 100% of my energy to solving a massive, urgent problem facing Indian manufacturing.
              </p>
              <p className="mt-2.5">
                Over the years, I’ve built and deployed <strong>100+ business websites</strong> and architected a <strong>multi-tenant SaaS platform used by 200+ businesses</strong>. But most importantly, I spent extensive time working directly on the ground with <strong>20+ Indian manufacturers across diverse industries</strong>.
              </p>
            </div>

            {/* Story Block 2: The Core Challenge */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <h4 className={`text-base sm:text-lg font-bold text-[#001A55] ${montserrat.className}`}>
                The Problem I Witnessed in Indian Manufacturing
              </h4>
              <p className="mt-2.5">
                Through direct factory visits and founder conversations, I noticed a painful paradox:
              </p>
              <div className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-4 text-slate-800 font-medium">
                &ldquo;Many Indian manufacturers have excellent products, strong manufacturing capabilities, modern machinery, and decades of industry experience - yet their digital presence does not reflect the quality of their business.&rdquo;
              </div>
              <p className="mt-3">
                Most factory owners were stuck in two extremes: either relying strictly on unpredictable local referrals, or renting directory listings on IndiaMART and Justdial where their hard-earned inquiries were shared with 8 to 10 competing suppliers, triggering brutal price wars.
              </p>
            </div>

            {/* The 4-Pillar Growth Framework */}
            <div className="rounded-2xl border-2 border-orange-500/30 bg-orange-50/30 p-6 shadow-xs">
              <h4 className={`text-base sm:text-lg font-bold text-[#001A55] ${montserrat.className}`}>
                The EnquiryBazaar Framework: What Every Manufacturer Needs
              </h4>
              <p className="mt-1.5 text-slate-600">
                A modern digital presence is far more than an electronic brochure. To generate consistent high-margin bulk orders, a factory must be:
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div key={p.title} className="rounded-xl bg-white border border-orange-100 p-3.5 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-orange-600 text-white text-[10px] font-extrabold px-1.5 py-0.5">
                        {p.step}
                      </span>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm">
                        {p.title}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11.5px] text-slate-600 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* My Mission */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs">
              <h4 className={`text-base sm:text-lg font-bold text-[#001A55] ${montserrat.className}`}>
                My Mission for Indian Manufacturing
              </h4>
              <p className="mt-2.5">
                India has thousands of capable manufacturers producing high-quality products for domestic and global supply chains. My mission is to help them <strong>build their own digital presence, reach direct buyers, and grow beyond referrals and middlemen.</strong>
              </p>
              <p className="mt-2.5 font-medium text-slate-900">
                I am not building EnquiryBazaar as another generic marketing agency. I am building the dedicated digital growth infrastructure Indian manufacturers need to compete, win, and scale with full pricing power in the modern B2B market.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
