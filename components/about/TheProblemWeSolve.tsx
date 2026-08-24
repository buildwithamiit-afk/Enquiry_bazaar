import React from "react";
import { Montserrat, Inter } from "next/font/google";
import { AlertCircle, Ban, TrendingDown, Users, DollarSign } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const challenges = [
  {
    icon: <Ban className="h-5 w-5 text-rose-600" />,
    title: "99% of Indian MSMEs Have No Real Website",
    source: "YourStory & SIDBI Study",
    description:
      "Most Indian factory owners make excellent products. But without a proper catalog website that ranks on Google, outside buyers cannot find them. As a result, factories have to rely on local brokers or word-of-mouth.",
  },
  {
    icon: <TrendingDown className="h-5 w-5 text-rose-600" />,
    title: "The Problem With Shared Listing Portals",
    source: "IndiaMART & Justdial Reality",
    description:
      "When a buyer posts an inquiry on a listing directory, that same lead is forwarded to 8 to 10 competing suppliers at once. Suppliers start cutting prices to win the deal, destroying their factory profit margins.",
  },
  {
    icon: <Users className="h-5 w-5 text-amber-600" />,
    title: "Factory Owners Don't Have In-House Tech Teams",
    source: "RIS India & SMEStreet Report",
    description:
      "Running a factory takes full-time effort. Manufacturers do not have the time to learn SEO, manage Google Ads, or fix website errors. Traditional agencies charge heavy fees without understanding B2B industrial products.",
  },
  {
    icon: <DollarSign className="h-5 w-5 text-indigo-600" />,
    title: "You Pay Every Year, But Own Nothing",
    source: "Entrepreneur India Report",
    description:
      "Manufacturers pay lakhs every year for directory packages. But the moment you stop paying the renewal fee, all inquiries stop immediately. You never build a permanent digital asset that belongs to your business.",
  },
];

export function TheProblemWeSolve() {
  return (
    <section className={`relative bg-[#F8FAFC] py-14 sm:py-20 ${inter.className}`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 shadow-2xs">
            <AlertCircle className="h-3.5 w-3.5 text-rose-600" />
            <span>THE PROBLEM WE ARE SOLVING</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.2rem] leading-tight ${montserrat.className}`}>
            Why Most Factory Owners Struggle for Direct Bulk Inquiries
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Good products alone don&apos;t bring direct buyers. Here is why thousands of Indian manufacturers are stuck in portal price wars:
          </p>
        </div>

        {/* 4 Core Challenges */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {challenges.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 sm:p-6 shadow-xs transition hover:border-blue-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-100 border border-slate-200">
                    {item.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 border border-slate-200">
                    {item.source}
                  </span>
                </div>

                <h3 className={`mt-3.5 text-[16px] sm:text-[17px] font-bold text-slate-900 leading-snug ${montserrat.className}`}>
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
