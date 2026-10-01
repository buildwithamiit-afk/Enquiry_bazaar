import React from "react";
import { Plus_Jakarta_Sans, Montserrat, Inter } from "next/font/google";
import { Users, PhoneOff, Copy, RefreshCcw } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface ProblemCard {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const problemCards: ProblemCard[] = [
  {
    id: "indiamart",
    category: "IndiaMART & TradeIndia",
    title: "1 Buyer → 8–10 Suppliers",
    description: "Price war starts. Profit disappears.",
    icon: Users,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FE5905]",
  },
  {
    id: "justdial",
    category: "Justdial & Local Portals",
    title: "More Calls, Fewer Orders",
    description: "Team wastes time on single-piece buyers.",
    icon: PhoneOff,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FE5905]",
  },
  {
    id: "directories",
    category: "Directory Listings",
    title: "Every Supplier Looks Same",
    description: "Buyers only compare price.",
    icon: Copy,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FE5905]",
  },
  {
    id: "referrals",
    category: "Referrals & Word-of-Mouth",
    title: "No Steady Flow",
    description: "You never know when the next order comes.",
    icon: RefreshCcw,
    iconBg: "bg-orange-50",
    iconColor: "text-[#FE5905]",
  },
];

export function DependencyProblem() {
  return (
    <section 
      id="the-problem" 
      className={`relative border-y border-slate-200/60 bg-gradient-to-b from-slate-50/80 to-[#F8FAFC] py-6 sm:py-10 ${inter.className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Optimized Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className={`text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl leading-[1.15] text-[#001A55] ${montserrat.className}`}>
            Want Bulk Orders?
          </h2>
          
          <p className="mt-2 text-[15px] sm:text-[16px] font-bold text-[#FE5905] max-w-2xl mx-auto">
            These 4 Things Are Killing Your Margins
          </p>
        </div>

        {/* 1x4 Strip Layout (Desktop) */}
        <div className="mx-auto grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col items-center justify-start text-center rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#FE5905]/30 hover:shadow-[0_10px_20px_-10px_rgba(254,89,5,0.15)] z-10"
              >
                {/* Premium Icon Block */}
                <div className={`mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.iconBg} ring-4 ring-white shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                  <IconComp className={`h-5 w-5 ${card.iconColor}`} />
                </div>

                {/* Typography Hierarchy */}
                <div className="flex flex-col items-center">
                  <div className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    {card.category}
                  </div>
                  
                  <h3 className={`mb-2 text-[15px] font-bold text-[#001A55] leading-tight group-hover:text-[#FE5905] transition-colors ${jakarta.className}`}>
                    {card.title}
                  </h3>
                  
                  <p className="text-[13px] font-medium leading-relaxed text-slate-500">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
