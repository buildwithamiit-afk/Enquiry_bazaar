import type { CSSProperties } from "react";
import { Plus_Jakarta_Sans, Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta, consultationCta } from "./content";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

const reveal = (delay: number): CSSProperties =>
  ({
    "--delay": `${delay}ms`,
  }) as CSSProperties;

export function Hero() {
  return (
    <section id="hero" className={`relative isolate overflow-hidden bg-white text-gray-900 ${inter.className}`}>
      
      {/* Clean, Subtle Enterprise Background Atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[380px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(30,94,255,0.06),transparent_70%)] blur-[40px]"></div>
        <div className="absolute top-1/4 right-[-5%] h-[350px] w-[350px] rounded-full bg-orange-500/4 blur-[70px]"></div>

        {/* Minimalist Micro Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: "radial-gradient(#94a3b8 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 80%)",
          }}
        ></div>
        
        {/* Subtle Top Accent Divider */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/15 to-transparent"></div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10 lg:pb-16 lg:pt-12 xl:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr] xl:grid-cols-[1fr_1.25fr] lg:gap-10 xl:gap-14">
          
          {/* Left Column - Compact, High-Trust B2B Copy */}
          <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Pill Tag */}
            <div
              className="reveal mb-3 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3.5 py-1 text-[11.5px] font-bold text-[#FE5905] shadow-2xs"
              style={reveal(20)}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE5905] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE5905]"></span>
              </span>
              <span>B2B Growth Engine for Indian Manufacturers</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`reveal text-[2rem] font-extrabold leading-[1.15] tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.65rem] xl:text-[2.85rem] ${montserrat.className}`}
              style={reveal(40)}
            >
              No New <span className="text-[#FE5905]">Bulk Inquiries?</span> Your Competitors May Be Taking Them.
            </h1>

            {/* Subtext */}
            <p
              className="reveal mt-3 max-w-xl text-[14.5px] font-normal leading-relaxed text-slate-600 sm:text-[16px] xl:max-w-2xl"
              style={reveal(160)}
            >
              We help manufacturers build a dedicated digital presence that continuously gets discovered by genuine procurement officers - delivering 100% exclusive direct buyer inquiries beyond IndiaMART and referrals.
            </p>

            {/* Key Value Highlights */}
            <div className="reveal mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-semibold text-slate-700 lg:justify-start" style={reveal(220)}>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> 100% Exclusive Direct RFQs
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Zero Portal Price Wars
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Permanent Digital Asset
              </span>
            </div>

            {/* CTA Buttons (Dual High-Converting Actions) */}
            <div className="reveal mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row lg:justify-start" style={reveal(280)}>
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all hover:bg-emerald-500 active:scale-95"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#the-problem"
                className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3 text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-95"
              >
                <span>Explore the Setup</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Risk-Reversal Microcopy */}
            <p className="reveal mt-2.5 text-[11.5px] text-slate-500 font-medium" style={reveal(320)}>
              ⚡ Free 15-min discovery call · Zero sales pressure · Industry search report included
            </p>

            {/* Social Proof Line (Avatars + Trust Text) */}
            <div className="reveal mt-4 flex items-center justify-center gap-2.5 border-t border-slate-100 pt-3.5 text-xs lg:justify-start" style={reveal(380)}>
              <div className="flex shrink-0 -space-x-1.5">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#001A55] text-[8px] font-bold text-white shadow-xs">MB</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#FE5905] text-[8px] font-bold text-white shadow-xs">SK</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#22C55E] text-[8px] font-bold text-white shadow-xs">AP</div>
                <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[8px] text-amber-300 shadow-xs">★</div>
              </div>
              
              <p className="text-[12px] font-medium text-slate-600 sm:text-[13px]">
                Trusted by <strong className="font-semibold text-slate-900">500+ Indian Manufacturers &amp; B2B Suppliers</strong>
              </p>
            </div>

          </div>

          {/* Right Column - Prominent & Balanced Hero Graphic */}
          <div className="reveal relative flex w-full items-center justify-center lg:justify-end -mt-4 sm:-mt-6 lg:-mt-12 xl:-mt-16" style={reveal(240)}>
            {/* Soft Ambient Glow */}
            <div className="absolute inset-0 m-auto h-[90%] w-[90%] rounded-full bg-orange-500/10 blur-[75px]"></div>

            {/* Balanced & Scaled Product Visual */}
            <Image
              src="/hero.png"
              alt="Enquiry Bazaar B2B Digital Growth Engine"
              width={1200}
              height={1200}
              priority
              className="relative z-10 w-full max-w-[600px] drop-shadow-[0_20px_50px_rgba(11,30,61,0.09)] sm:max-w-[680px] lg:max-w-[780px] xl:max-w-[880px] transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
