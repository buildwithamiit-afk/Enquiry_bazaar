import React from "react";
import { Plus_Jakarta_Sans, Montserrat, Inter } from "next/font/google";
import { Users, PhoneOff, Layers, Shuffle } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface BottleneckCard {
  id: string;
  squareBg: string;
  squareBorder: string;
  iconBg: string;
  platformName: string;
  platformCategory: string;
  mainHeading: string;
  subHeading: string;
  impact: string;
  icon: React.ComponentType<{ className?: string }>;
}

const bottleneckCards: BottleneckCard[] = [
  {
    id: "indiamart",
    squareBg: "bg-orange-50/70",
    squareBorder: "border-orange-100/90",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-md shadow-orange-500/25",
    platformName: "IndiaMART",
    platformCategory: "& TradeIndia",
    mainHeading: "1 Enquiry Sold to 8+ Competitors at the Same Time",
    subHeading: "The moment a buyer posts an enquiry, it is forwarded to 8 to 10 suppliers at once. Everyone calls within minutes, forcing you into a price war where profit margins get completely wiped out.",
    impact: "Extreme price cutting · Almost zero profit margin",
    icon: Users,
  },
  {
    id: "justdial",
    squareBg: "bg-orange-50/70",
    squareBorder: "border-orange-100/90",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/25",
    platformName: "Justdial",
    platformCategory: "& Local Portals",
    mainHeading: "100 Calls Every Week, But Zero Serious Bulk Orders",
    subHeading: "Your phone keeps ringing all day, but mostly with single-piece retail buyers, bargain hunters, and price checkers. Your sales team wastes hours on calls that never turn into wholesale deals.",
    impact: "Time wasted on 1-piece buyers · Low deal closing",
    icon: PhoneOff,
  },
  {
    id: "portals",
    squareBg: "bg-purple-50/70",
    squareBorder: "border-purple-100/90",
    iconBg: "bg-gradient-to-br from-purple-500 to-orange-700 text-white shadow-md shadow-purple-500/25",
    platformName: "B2B Portals",
    platformCategory: "& Online Directories",
    mainHeading: "Your Real Factory Looks Just Like a Small Middleman",
    subHeading: "On generic directory pages, all suppliers look the same. Even if you have advanced machinery and ISO quality, buyers cannot see the difference and only buy from whoever quotes the lowest rate.",
    impact: "No brand respect · Buyer only cares about lowest rate",
    icon: Layers,
  },
  {
    id: "referrals",
    squareBg: "bg-emerald-50/70",
    squareBorder: "border-emerald-100/90",
    iconBg: "bg-gradient-to-br from-emerald-500 to-orange-700 text-white shadow-md shadow-emerald-500/25",
    platformName: "Referrals",
    platformCategory: "& Offline Contacts",
    mainHeading: "Word-of-Mouth is Good, But No Guaranteed Flow Every Month",
    subHeading: "Referrals from old contacts are great, but you cannot control when the next order will come. When your market network goes quiet, incoming inquiries stop and factory capacity sits idle.",
    impact: "Uncertain monthly income · No control on new client pipeline",
    icon: Shuffle,
  },
];

export function DependencyProblem() {
  return (
    <section id="the-problem" className={`relative bg-[#F8FAFC] py-12 sm:py-16 ${inter.className}`}>
      
      {/* Subtle Top & Bottom Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-rose-600 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            THE REAL PROBLEM WITH PORTALS
          </div>
          
          <h2 className={`mt-1.5 text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.2rem] leading-tight ${montserrat.className}`}>
            Good Factory. Quality Products.{" "}
            <span className="text-[#FE5905]">Still Struggling for Direct Bulk Buyers?</span>
          </h2>
          
          <p className="mt-2 text-xs sm:text-[14.5px] text-slate-600 font-normal leading-relaxed">
            If your new orders depend only on IndiaMART, Justdial, TradeIndia, or word-of-mouth, you are facing these 4 daily headaches:
          </p>
        </div>

        {/* 4 Core Problem Cards Grid */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
          {bottleneckCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                className="group flex flex-col sm:flex-row items-stretch overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-xs"
              >
                {/* 20% Square Block Container */}
                <div className={`flex w-full sm:w-[125px] lg:w-[130px] shrink-0 flex-row sm:flex-col items-center justify-between sm:justify-center gap-2 border-b sm:border-b-0 sm:border-r ${card.squareBorder} ${card.squareBg} p-3.5 sm:p-4 text-center`}>
                  
                  {/* Embossed Icon Badge */}
                  <div className={`flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${card.iconBg} transition-transform duration-200 group-hover:scale-105`}>
                    <IconComp className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  
                  <div className="text-right sm:text-center">
                    <span className="block text-[12.5px] sm:text-[13px] font-bold text-[#001A55] leading-tight">
                      {card.platformName}
                    </span>
                    <span className="block text-[10.5px] font-medium text-slate-500">
                      {card.platformCategory}
                    </span>
                  </div>
                </div>

                {/* 80% Content Section */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    {/* Main Heading */}
                    <h3 className={`text-[15.5px] sm:text-[16.5px] font-bold leading-snug text-[#001A55] group-hover:text-[#FE5905] transition-colors ${jakarta.className}`}>
                      {card.mainHeading}
                    </h3>

                    {/* Subheading / Description in simple Indian business terms */}
                    <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-relaxed text-slate-600 font-normal">
                      {card.subHeading}
                    </p>
                  </div>

                  {/* Impact Tag Line */}
                  <div className="mt-3.5 flex items-center gap-2 border-t border-slate-100 pt-2.5 text-[11.5px] font-semibold text-rose-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
                    <span>{card.impact}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

