import React from "react";
import { Plus_Jakarta_Sans, Montserrat, Inter } from "next/font/google";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface BrandLogo {
  id: string;
  name: string;
  industry: string;
  logo: React.ReactNode;
}

const brandLogos: BrandLogo[] = [
  {
    id: "bliss-travels",
    name: "Bliss Travels",
    industry: "Travel & Hospitality",
    logo: (
      <div className="flex h-12 items-center justify-center rounded-lg bg-[#C5A880] px-4 py-2 text-white shadow-xs">
        <div className="text-center">
          <span className="font-serif text-[15px] font-bold italic tracking-wide">Bliss Travels</span>
          <span className="block text-[8px] tracking-wider uppercase opacity-90">Luxury Experiences Unleashed</span>
        </div>
      </div>
    ),
  },
  {
    id: "antipest",
    name: "ANTIPEST",
    industry: "Facility & Pest Management",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-lg bg-[#16A34A] px-3.5 py-1.5 text-white shadow-xs">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24" />
          </svg>
        </div>
        <div className="leading-tight">
          <span className="block text-[13px] font-black tracking-wider uppercase">ANTIPEST</span>
          <span className="block text-[7.5px] font-bold tracking-widest uppercase opacity-90">PEST CONTROL</span>
        </div>
      </div>
    ),
  },
  {
    id: "sapa",
    name: "SAPA",
    industry: "Spa & Wellness",
    logo: (
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300 bg-amber-50/70 text-[#B45309] shadow-2xs">
        <div className="text-center">
          <span className="font-serif text-[12px] font-bold tracking-widest">SAPA</span>
          <span className="block text-[6px] tracking-tighter opacity-80 uppercase">Wellness</span>
        </div>
      </div>
    ),
  },
  {
    id: "the-aura",
    name: "The Aura",
    industry: "Healthcare & Senior Living",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-lg bg-[#FFF7ED] border border-orange-200/80 px-3 py-1.5 shadow-xs">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-2xs">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 4.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
          </svg>
        </div>
        <div className="leading-none text-left">
          <span className="block text-[11px] font-extrabold text-[#C2410C] tracking-wide">THE AURA</span>
          <span className="block text-[7px] font-semibold text-slate-500 uppercase tracking-tighter mt-0.5">OLD AGE HOME</span>
        </div>
      </div>
    ),
  },
  {
    id: "frenzi",
    name: "frenzi holidays",
    industry: "Tours & Travel",
    logo: (
      <div className="flex h-12 items-center gap-1.5 px-3 py-1 bg-white">
        <span className="text-[17px] font-black text-[#1E3A8A] tracking-tight">fren</span>
        <span className="text-[17px] font-black bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">zi</span>
        <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-teal-400">
          <svg className="h-2 w-2 text-white" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "desire-salon",
    name: "DESIRE Salon",
    industry: "Beauty & Wellness",
    logo: (
      <div className="flex h-12 items-center justify-center rounded-md bg-[#0F172A] px-4 py-1.5 text-white shadow-xs">
        <div className="text-center">
          <div className="flex items-center justify-center gap-0.5">
            <span className="text-[13px] font-black tracking-[0.25em] text-[#FB7185]">D</span>
            <span className="text-[13px] font-black tracking-[0.25em] text-[#FBBF24]">E</span>
            <span className="text-[13px] font-black tracking-[0.25em] text-[#34D399]">S</span>
            <span className="text-[13px] font-black tracking-[0.25em] text-[#60A5FA]">I</span>
            <span className="text-[13px] font-black tracking-[0.25em] text-[#A78BFA]">R</span>
            <span className="text-[13px] font-black tracking-[0.25em] text-[#F472B6]">E</span>
          </div>
          <span className="block text-[7.5px] tracking-[0.35em] text-slate-300 uppercase">s a l o n</span>
        </div>
      </div>
    ),
  },
  {
    id: "physioedge",
    name: "PhysioEdge",
    industry: "Healthcare & Physiotherapy",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-lg bg-teal-50/80 border border-teal-200/80 px-3.5 py-1.5 shadow-xs">
        <div className="text-left">
          <span className="block text-[8px] font-bold text-emerald-600">Dr. Neha&apos;s</span>
          <span className="block text-[13px] font-extrabold text-[#0369A1] tracking-tight">PHYSIOEDGE</span>
          <span className="block text-[6.5px] font-medium text-slate-500">Physiotherapy &amp; Wellness Centre</span>
        </div>
      </div>
    ),
  },
  {
    id: "healing-ayurveda",
    name: "Healing Through Ayurveda",
    industry: "Ayurveda & Organic Products",
    logo: (
      <div className="flex h-12 items-center gap-2 px-3 py-1">
        <div className="flex h-8 w-8 items-center justify-center text-emerald-700">
          <svg className="h-7 w-7 fill-emerald-800" viewBox="0 0 24 24">
            <path d="M12 2C8.5 7 4 10 4 15a8 8 0 0 0 16 0c0-5-4.5-8-8-13zm0 18c-3.31 0-6-2.69-6-6 0-3.1 2.9-5.9 5.5-9.3 2.6 3.4 5.5 6.2 5.5 9.3 0 3.31-2.69 6-6 6z" />
          </svg>
        </div>
        <div className="text-left">
          <span className="block text-[11px] font-serif font-bold text-emerald-950 leading-tight">Healing Through</span>
          <span className="block text-[12px] font-serif font-extrabold text-emerald-700 leading-tight">Ayurveda</span>
        </div>
      </div>
    ),
  },
  {
    id: "peacock-salon",
    name: "PEACOCK SALON",
    industry: "Luxury Salon",
    logo: (
      <div className="flex h-12 items-center justify-center px-4 py-1">
        <div className="text-center">
          <div className="border-y border-slate-900 py-0.5">
            <span className="font-serif text-[14px] font-bold tracking-[0.2em] text-slate-900">PEACOCK</span>
          </div>
          <span className="block text-[7.5px] tracking-[0.3em] font-semibold text-slate-700 uppercase mt-0.5">SALON</span>
        </div>
      </div>
    ),
  },
  {
    id: "9-villas",
    name: "9 Villas",
    industry: "Luxury Real Estate & Stays",
    logo: (
      <div className="flex h-12 items-center gap-1.5 px-3 py-1">
        <span className="font-serif text-[26px] font-black text-slate-900 leading-none">9</span>
        <div className="text-left">
          <span className="block text-[11px] font-sans font-light tracking-[0.25em] text-slate-800 uppercase">villas</span>
          <span className="block text-[6.5px] font-sans font-semibold tracking-wider text-slate-400 uppercase">LUXURY STAYS</span>
        </div>
      </div>
    ),
  },
  {
    id: "niwas-living",
    name: "Niwas Living",
    industry: "Home Decor & Crafts",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-full border border-teal-200 bg-teal-50/60 px-3.5 py-1">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-white text-[10px] font-bold">
          N
        </div>
        <div className="text-left">
          <span className="block text-[12px] font-bold text-teal-950">NIWAS</span>
          <span className="block text-[7px] font-medium text-teal-700 tracking-wider">CRAFT &amp; LIVING</span>
        </div>
      </div>
    ),
  },
  {
    id: "apex-packaging",
    name: "Apex Packaging",
    industry: "Packaging & Corrugation",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-lg bg-slate-900 px-3.5 py-1.5 text-white shadow-xs">
        <div className="flex h-6 w-6 items-center justify-center rounded bg-blue-500 font-black text-white text-[11px]">
          ▲
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[12px] font-extrabold text-white tracking-wide">APEX</span>
          <span className="block text-[7px] font-medium text-slate-300 uppercase tracking-wider">PACKAGING IND.</span>
        </div>
      </div>
    ),
  },
  {
    id: "vardhman-valves",
    name: "Vardhman Industries",
    industry: "Machinery & Valves",
    logo: (
      <div className="flex h-12 items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 px-3 py-1 text-slate-900 shadow-2xs">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1E5EFF] text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>
        <div className="text-left leading-none">
          <span className="block text-[12px] font-extrabold text-[#0B1E3D]">VARDHMAN</span>
          <span className="block text-[7px] font-bold text-blue-600 tracking-wider uppercase mt-0.5">VALVES &amp; PIPES</span>
        </div>
      </div>
    ),
  },
];

export function TrustedBy() {
  return (
    <section className={`relative bg-white py-14 sm:py-18 overflow-hidden ${inter.className}`}>
      
      {/* Subtle Top & Bottom Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.15rem] ${montserrat.className}`}>
            Trusted by Business Owners{" "}
            <span className="block sm:inline text-slate-800">from Various Industries</span>
          </h2>
        </div>

      </div>

      {/* Infinite Logo Marquee Carousel */}
      <div className="relative mt-9 w-full overflow-hidden py-3">
        
        {/* Left & Right Gradient Fog Masks for Seamless Infinite Scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

        {/* Marquee Track 1 (Continuous Running Right to Left) */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 select-none">
          {brandLogos.concat(brandLogos).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex shrink-0 items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              {item.logo}
            </div>
          ))}
        </div>

      </div>

      {/* Bottom CTA Block */}
      <div className="mx-auto mt-9 max-w-2xl px-4 text-center">
        <p className="text-xs sm:text-sm font-medium text-slate-600">
          Ready to get started? Connect with our dedicated B2B Growth Expert
        </p>

        <div className="mt-3.5 flex justify-center">
          <a
            href="#hero"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 active:scale-95"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

    </section>
  );
}
