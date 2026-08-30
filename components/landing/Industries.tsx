import React from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Montserrat, Inter } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface IndustryCardItem {
  title: string;
  image: string;
  alt: string;
}

const industries: IndustryCardItem[] = [
  {
    title: "Candles &\nFragrances",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=260&q=80",
    alt: "Candles Manufacturer",
  },
  {
    title: "Glass &\nBottles",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=260&q=80",
    alt: "Glass Products Manufacturer",
  },
  {
    title: "Home Decor &\nCrafts",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=260&q=80",
    alt: "Home Decor and Crafts",
  },
  {
    title: "Packaging &\nBoxes",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=260&q=80",
    alt: "Packaging Material Boxes",
  },
  {
    title: "Spa &\nWellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=260&q=80",
    alt: "Spa and Wellness Center",
  },
  {
    title: "Machinery &\nEquipment",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=260&q=80",
    alt: "Industrial Machinery Parts",
  },
  {
    title: "Textiles &\nApparel",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=260&q=80",
    alt: "Textiles and Apparel",
  },
  {
    title: "Chemicals &\nPolymers",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=260&q=80",
    alt: "Chemicals and Raw Materials",
  },
  {
    title: "Electrical &\nHardware",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=260&q=80",
    alt: "Electrical and Hardware Supplies",
  },
  {
    title: "Custom OEM &\nFabricators",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=260&q=80",
    alt: "Custom Metal and OEM Fabrication",
  },
];

export function Industries() {
  return (
    <section id="industries" className={`relative bg-[#F8FAFC] py-14 sm:py-18 ${inter.className}`}>
      
      {/* Crisp Section Transition Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent"></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header with Eyebrow Tag */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-[#FE5905] shadow-xs">
            <span>WHO WE EMPOWER</span>
          </div>

          <h2 className={`text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.25rem] ${montserrat.className}`}>
            Built for Manufacturers &amp; B2B Businesses
          </h2>
          
          <p className="mt-2 text-xs sm:text-[14.5px] text-slate-500 font-normal">
            You focus on your craft and operations; leave the hassle of buyer acquisition to EnquiryBazaar.
          </p>
        </div>

        {/* 4-Column Card Grid (White Cards with subtle border on #F8FAFC canvas) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4.5">
          {industries.map((item) => (
            <div
              key={item.title}
              className="group relative flex h-[86px] sm:h-[92px] items-center justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white pl-5 pr-2 shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-sm"
            >
              {/* Left Industry Name */}
              <div className="relative z-10">
                <h3 className={`text-[14.5px] sm:text-[15px] font-bold leading-snug text-[#001A55] group-hover:text-[#FE5905] transition-colors ${jakarta.className}`}>
                  {item.title}
                </h3>
              </div>

              {/* Right Cutout Image with Soft Backdrop */}
              <div className="relative h-[70px] w-[70px] sm:h-[76px] sm:w-[76px] shrink-0 overflow-hidden rounded-xl bg-orange-50/60">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="80px"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          ))}

          {/* Final Gradient Banner Card (Spanning 2 Columns) */}
          <div className="relative flex h-[86px] sm:h-[92px] items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-[#FE5905] via-[#FE5905] to-[#FF7E04] px-6 text-white shadow-sm sm:col-span-2">
            <div>
              <h3 className={`text-[15px] sm:text-[16px] font-bold text-white leading-tight ${jakarta.className}`}>
                And many more businesses like<br className="hidden sm:inline" /> yours
              </h3>
            </div>

            <a
              href="#hero"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
            >
              <svg className="h-4 w-4 text-[#25D366]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Book Free Demo</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
