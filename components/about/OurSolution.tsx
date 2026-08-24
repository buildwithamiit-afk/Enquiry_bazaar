import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { CheckCircle2, Zap, Award, Lock, Users2 } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const pillars = [
  {
    icon: <Lock className="h-5 w-5 text-[#1E5EFF]" />,
    title: "100% Digital Asset Ownership",
    tagline: "Everything is registered in your business name.",
    description:
      "Unlike listing portals where you rent space, everything EnquiryBazaar creates belongs 100% to you. Your Google #1 rankings, custom domain, factory showroom website, and customer inquiries stay with your company forever.",
    bulletPoints: [
      "Custom domain & website in your name",
      "Permanent Google Search & Maps local ranking",
      "Private buyer inquiry list never shared with competitors",
    ],
  },
  {
    icon: <Award className="h-5 w-5 text-emerald-600" />,
    title: "0% Commission on Your Orders",
    tagline: "Keep 100% of every rupee you earn.",
    description:
      "We take zero commission from the orders you close. We charge a simple, transparent setup and management fee. All advance payments, repeat wholesale orders, and bulk contracts go directly to your bank account.",
    bulletPoints: [
      "Direct buyer payments to your bank account",
      "Full control over your pricing with zero forced bidding",
      "Higher profit margins on every order you close",
    ],
  },
  {
    icon: <Users2 className="h-5 w-5 text-indigo-600" />,
    title: "Dedicated Experts Managing Everything",
    tagline: "You focus on production. We manage all digital work.",
    description:
      "You don't need any technical skills or in-house marketers. Our dedicated Indian team manages your Google rankings, website updates, and B2B ad campaigns every single day on auto-pilot.",
    bulletPoints: [
      "Dedicated B2B Growth Specialist for your account",
      "Daily Google SEO and keyword ranking maintenance",
      "Negative keyword ad filtering to block single-piece retail callers",
    ],
  },
];

export function OurSolution() {
  return (
    <section className={`relative bg-white py-14 sm:py-20 ${inter.className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-2xs">
            <Zap className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>HOW ENQUIRYBAZAAR HELPS YOU</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.2rem] leading-tight ${montserrat.className}`}>
            Our 3 Pillars of Manufacturer Independence
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We replace rented directory middlemen with a dedicated direct buyer engine that brings genuine procurement buyers straight to your phone.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="mt-10 space-y-4 sm:space-y-5">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="rounded-2xl border-2 border-slate-200 bg-gradient-to-r from-[#F8FAFC] via-white to-[#F8FAFC] p-5 sm:p-7 shadow-xs transition hover:border-blue-400 hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 lg:gap-6 items-center">
                
                {/* Left Side Info */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white border border-slate-200 shadow-2xs">
                      {pillar.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E5EFF]">
                        Pillar 0{idx + 1}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold text-[#0B1E3D] leading-tight ${montserrat.className}`}>
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Right Side Bullet Checklist */}
                <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    What You Get
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-[12.5px] font-medium text-slate-800">
                    {pillar.bulletPoints.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
