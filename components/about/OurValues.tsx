import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { HeartHandshake, ShieldCheck, Target, Sparkles, Scale, Award } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const values = [
  {
    icon: <Scale className="h-5 w-5 text-[#1E5EFF]" />,
    title: "Manufacturer-First Margins",
    description:
      "We measure our success not by generic clicks or impressions, but by the net profit margin and exclusive bulk order volume our clients generate.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-600" />,
    title: "Zero Hidden Lock-ins",
    description:
      "You own 100% of your domain, Google Business Profile, and buyer inquiries. No hostage situations, no deceptive contracts.",
  },
  {
    icon: <Target className="h-5 w-5 text-indigo-600" />,
    title: "Relentless B2B Filtering",
    description:
      "We ruthlessly eliminate retail consumers, bargain hunters, and price-checkers so your sales team speaks only to serious wholesale buyers.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-amber-600" />,
    title: "Direct Human Support & True Partnership",
    description:
      "We act as your true in-house digital department. You get real human specialists, direct WhatsApp communication, and zero automated call-center runarounds.",
  },
];

export function OurValues() {
  return (
    <section className={`relative bg-white py-16 sm:py-24 ${inter.className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-2xs">
            <Award className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>WHAT WE STAND FOR</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.25rem] leading-tight ${montserrat.className}`}>
            Our Core Values
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Principles that guide every Google campaign, website build, and buyer acquisition roadmap we create.
          </p>
        </div>

        {/* Values Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {values.map((val) => (
            <div
              key={val.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:border-slate-300 hover:bg-white shadow-2xs"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white border border-slate-200 shadow-2xs">
                  {val.icon}
                </div>
                <div>
                  <h3 className={`text-base sm:text-[17px] font-bold text-[#0B1E3D] ${montserrat.className}`}>
                    {val.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
