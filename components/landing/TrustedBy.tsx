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
    id: "rajahomedecor",
    name: "Raja Home Decor",
    industry: "Home Decor",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854251/rajahomedecor_logo_eat7oy.png" alt="Raja Home Decor Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "chah-foundation",
    name: "Chah Foundation",
    industry: "NGO",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854251/chah_foundation_logo_hzlivk.webp" alt="Chah Foundation Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "upgrade-infotech",
    name: "Upgrade Infotech",
    industry: "IT Services",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854251/upgrade_infotechlof_gc9e8v.webp" alt="Upgrade Infotech Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "astrologer",
    name: "Astrologer",
    industry: "Astrology",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854250/astrologerlogo_gctzys.webp" alt="Astrologer Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "vastra-dan-new",
    name: "Vastra Dan",
    industry: "NGO",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788855065/vastra_dan_logo-removebg-preview_qjnz26.png" alt="Vastra Dan Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "chatgpt-client",
    name: "Client",
    industry: "Business",
    logo: (
      <div className="flex h-14 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788855065/ChatGPT_Image_Sep_8_2026_01_40_45_PM_acinxx.png" alt="Client Logo" className="h-full w-auto object-contain" />
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
          <h2 className={`text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.15rem] ${montserrat.className}`}>
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
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 select-none w-max">
          {brandLogos.concat(brandLogos, brandLogos, brandLogos).map((item, index) => (
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
            href={`https://wa.me/918887048276?text=${encodeURIComponent("Ready to get started? Connect with our dedicated B2B Growth Expert")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#FE5905] px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/25 transition-all hover:bg-orange-700 active:scale-95"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

    </section>
  );
}
