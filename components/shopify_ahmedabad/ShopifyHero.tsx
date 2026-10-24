import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Code2, 
  ShieldCheck, 
  PhoneCall,
  ShoppingBag,
  Zap,
  Award
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { 
  SHOPIFY_METADATA, 
  QUICK_ANSWER_BLOCK, 
  TRUST_BAR_ITEMS 
} from "./shopifyData";

export function ShopifyHero() {
  const whatsappUrl = `https://wa.me/918887048276?text=${encodeURIComponent(
    "Hi Amit & EnquiryBazaar Team,\n\nI need a consultation for a Shopify store development in Ahmedabad.\n\nCould you please share your pricing, timeline and portfolio?"
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#00123D] via-[#001A55] to-[#042472] pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
      {/* Background Glow & Pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-[#FE5905]/15 blur-3xl" />
        <div className="absolute top-1/3 -right-48 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2.5 justify-center sm:justify-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3.5 py-1.5 text-xs font-semibold text-orange-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Ahmedabad &amp; Gujarat Ecommerce Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting New Client Projects for {new Date().getFullYear()}</span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="mt-6 max-w-4xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            Shopify Development Company in{" "}
            <span className="bg-gradient-to-r from-[#FE5905] via-amber-400 to-[#FE5905] bg-clip-text text-transparent">
              Ahmedabad
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-200 font-normal max-w-3xl">
            {SHOPIFY_METADATA.subheading}
          </p>

          {/* Dual Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5">
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#FE5905] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl shadow-orange-500/25 transition-all hover:bg-[#ff6f26] hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Free Shopify Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/15 hover:border-white/40 cursor-pointer"
            >
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="tel:+919696717305"
              className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors ml-2"
            >
              <PhoneCall className="h-3.5 w-3.5 text-[#FE5905]" />
              <span>Call: +91 96967 17305</span>
            </a>
          </div>
        </div>

        {/* Quick Stat Chips */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#FE5905]">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Fast Turnaround</span>
            </div>
            <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white">2 to 4 Weeks</div>
            <div className="text-xs text-slate-400">Launch to first live order</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400">
              <Code2 className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Store Code</span>
            </div>
            <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white">100% Ownership</div>
            <div className="text-xs text-slate-400">Zero lock-in, client account</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400">
              <ShoppingBag className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Target Focus</span>
            </div>
            <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white">D2C &amp; B2B Wholesale</div>
            <div className="text-xs text-slate-400">Retail carts + Bulk MOQ rules</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sky-400">
              <ShieldCheck className="h-4 w-4" />
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Warranty</span>
            </div>
            <div className="mt-1.5 text-xl sm:text-2xl font-bold text-white">1 Year Free Support</div>
            <div className="text-xs text-slate-400">100% free post-launch assistance</div>
          </div>
        </div>

        {/* QUICK ANSWER BLOCK (Answer-first plain text structure for AI & Snippets) */}
        <div className="mt-10 rounded-2xl border-2 border-emerald-400/30 bg-slate-900/80 p-5 sm:p-7 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <Award className="h-4 w-4" />
            <span>Quick Answer: Shopify Development Company in Ahmedabad</span>
          </div>

          <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-100 font-medium">
            {QUICK_ANSWER_BLOCK.summary}
          </p>

          <div className="mt-4 grid grid-cols-1 gap-2 pt-3 border-t border-slate-700/60 sm:grid-cols-2 text-xs sm:text-sm text-slate-300">
            {QUICK_ANSWER_BLOCK.keyPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Bar (Founder-led, fixed pricing, languages) */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 py-3.5 px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-slate-300">
            {TRUST_BAR_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Zap className="h-3.5 w-3.5 text-[#FE5905] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
