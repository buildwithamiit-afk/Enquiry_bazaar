import React from "react";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export function GrowthBanner() {
  return (
    <section className={`relative bg-transparent py-4 sm:py-6 ${inter.className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Sleek, Horizontally Expansive Slim Banner Card */}
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[30px] bg-gradient-to-r from-[#FE5905] via-[#FE5905] to-[#FF7E04] px-6 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-6.5 shadow-lg shadow-orange-900/12">
          
          {/* Subtle Ambient Backdrops */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/15 blur-xl"></div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-orange-300/20 blur-xl"></div>

          <div className="relative z-10 grid grid-cols-1 items-center gap-6 md:grid-cols-[1.45fr_0.7fr] lg:grid-cols-[1.5fr_0.65fr] lg:gap-8">
            
            {/* Left Side: Minimalist Heading + Direct CTA */}
            <div className="flex flex-col items-start text-left">
              <h2 className={`text-xl font-extrabold tracking-tight text-white sm:text-2xl lg:text-[1.95rem] leading-[1.2] max-w-xl ${montserrat.className}`}>
                Team of Dedicated Experts that work for your Business Growth
              </h2>

              <p className="mt-2 text-xs sm:text-[13.5px] text-orange-50/95 font-normal leading-relaxed max-w-lg">
                Get full-time specialists managing your Google ranking, website, and B2B ads to deliver direct bulk inquiries.
              </p>

              <div className="mt-4 sm:mt-5">
                <a
                  href="#hero"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-bold text-[#001A55] shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md active:scale-95"
                >
                  <WhatsAppIcon className="h-5.5 w-5.5 shrink-0" />
                  <span>Book Free Demo</span>
                </a>
              </div>
            </div>

            {/* Right Side: Smooth Rounded Glass Pod Frame for Team */}
            <div className="relative flex items-center justify-center md:justify-end">
              <div className="relative w-full max-w-[250px] sm:max-w-[270px] lg:max-w-[280px] overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/35 bg-white/10 p-1.5 backdrop-blur-xs shadow-xl shadow-orange-950/20">
                <div className="relative overflow-hidden rounded-[20px] sm:rounded-[24px] bg-gradient-to-b from-white/10 to-white/5">
                  <Image
                    src="/expert_team_transparent.png"
                    alt="EnquiryBazaar Dedicated B2B Growth Specialists"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-auto object-cover rounded-[20px] sm:rounded-[24px] transition-transform duration-300 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
