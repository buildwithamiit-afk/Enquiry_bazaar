import React from "react";
import { Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const inter = Inter({ subsets: ["latin"] });

interface PartnerLogo {
  id: string;
  name: string;
  logo: React.ReactNode;
}

const partnerLogos: PartnerLogo[] = [
  {
    id: "hostinger",
    name: "Hostinger",
    logo: (
      <div className="flex h-12 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854734/hostinger_logo_ndov01.png" alt="Hostinger Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "meta",
    name: "Meta",
    logo: (
      <div className="flex h-12 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854733/metalogo_sqbjaq.png" alt="Meta Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "masg91",
    name: "MSG91",
    logo: (
      <div className="flex h-12 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854733/masg91_fq67nz.png" alt="MSG91 Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
  {
    id: "download",
    name: "Download",
    logo: (
      <div className="flex h-12 w-auto items-center justify-center px-4">
        <img src="https://res.cloudinary.com/dxcakk4vq/image/upload/v1788854733/download_mmzdqi.png" alt="Logo" className="h-full w-auto object-contain" />
      </div>
    ),
  },
];

export function BusinessPartners() {
  return (
    <section className={`relative bg-white py-8 sm:py-10 overflow-hidden ${inter.className}`}>
      
      {/* Subtle Top & Bottom Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-xl font-extrabold tracking-tight text-[#001A55] sm:text-2xl lg:text-3xl ${montserrat.className}`}>
            Our Technology &amp; <span className="text-[#FE5905]">Business Partners</span>
          </h2>
        </div>

      </div>

      {/* Infinite Logo Marquee Carousel */}
      <div className="relative mt-6 w-full overflow-hidden py-3">
        
        {/* Left & Right Gradient Fog Masks for Seamless Infinite Scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

        {/* Marquee Track 1 (Continuous Running Right to Left) */}
        <div className="animate-marquee flex items-center gap-8 sm:gap-12 select-none w-max">
          {partnerLogos.concat(partnerLogos, partnerLogos, partnerLogos).map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex shrink-0 items-center justify-center transition-transform duration-200 hover:scale-105"
            >
              {item.logo}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
