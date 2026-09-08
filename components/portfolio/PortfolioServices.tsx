"use client";

import { useState } from "react";
import { CheckCircle2, MapPin, MonitorSmartphone, Target, Video, ShoppingCart, Briefcase, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });

const services = [
  {
    title: "Complete E-commerce Setup",
    subtitle: "We build your complete online store and get you ready to sell.",
    description: "From website and marketplaces to payments, delivery and product images we handle the setup.",
    icon: <ShoppingCart className="h-5 w-5 text-rose-600" />,
    benefits: [
      "Amazon, Flipkart & Meesho",
      "E-commerce website",
      "Product listings & catalog",
      "Payment & delivery setup",
      "Studio-quality product images",
      "Social media setup",
      "Team training & support"
    ],
    footerNote: "You bring the products. We get you ready to sell."
  },
  {
    title: "B2B Lead Generation",
    subtitle: "You make the products. We find the buyers.",
    description: "We build your online presence and put your business where serious buyers are already looking.",
    icon: <Briefcase className="h-5 w-5 text-amber-600" />,
    benefits: [
      "Business website",
      "Digital product catalog",
      "Google & social media presence",
      "IndiaMART & Justdial listings",
      "Targeted B2B lead generation",
      "Calls & WhatsApp enquiries"
    ],
    footerNote: "You focus on production. We focus on finding buyers."
  },
  {
    title: "Google & Maps SEO",
    subtitle: "Be there when customers search.",
    description: "Get your business in front of people looking for what you sell and turn searches into calls, visits and WhatsApp enquiries.",
    icon: <MapPin className="h-5 w-5 text-emerald-600" />,
    benefits: [
      "Show up on Google & Maps",
      "Rank for important searches",
      "Get more calls & enquiries",
      "Build trust with better reviews"
    ],
  },
  {
    title: "Business Website",
    subtitle: "Turn visitors into customers.",
    description: "A fast, professional website that tells people what you do, builds trust and makes contacting you easy.",
    icon: <MonitorSmartphone className="h-5 w-5 text-blue-600" />,
    benefits: [
      "Clear services & offers",
      "WhatsApp & Call buttons",
      "Fast on every device",
      "You own your website & domain"
    ],
  },
  {
    title: "Google & Meta Ads",
    subtitle: "Reach customers before your competitors do.",
    description: "Put your business in front of the right people and bring in more calls, messages and enquiries.",
    icon: <Target className="h-5 w-5 text-[#FE5905]" />,
    benefits: [
      "Target the right customers",
      "Google Search & Meta Ads",
      "Focus on real enquiries",
      "Track what brings results"
    ],
  },
  {
    title: "Social Media & Video",
    subtitle: "Give people a reason to choose you.",
    description: "Show your products, work and results in a way that builds trust before the first call.",
    icon: <Video className="h-5 w-5 text-purple-600" />,
    benefits: [
      "Reels & short videos",
      "Product & service content",
      "Customer reviews & results",
      "Build a stronger brand"
    ],
  }
];

export function PortfolioServices() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="bg-slate-50 pt-16 sm:pt-24 pb-8">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-extrabold tracking-tight text-[#001A55] sm:text-4xl lg:text-5xl ${montserrat.className}`}>
            Don’t Let Customers Choose <br className="hidden sm:block" />
            <span className="text-[#FE5905]">Your Competitors.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600">
            Customers are searching online every day. Make sure they find your business, trust you, and choose you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-10 grid items-start gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const isExpanded = expandedCards[index];
            
            return (
              <div 
                key={index} 
                className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#001A55]/30 hover:shadow-md sm:p-6"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 transition-colors group-hover:bg-slate-100">
                    {service.icon}
                  </div>
                  <h3 className={`text-[17px] font-bold leading-tight text-slate-900 ${montserrat.className}`}>
                    {service.title}
                  </h3>
                </div>
                  
                <div className="mt-4">
                  <p className="text-[13.5px] font-bold text-slate-800">
                    {service.subtitle}
                  </p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                {isExpanded && (
                  <div className="mt-4 border-t border-slate-100 pt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <ul className="grid gap-2 px-2 sm:px-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          <span className="text-[13px] font-medium leading-snug text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    {service.footerNote && (
                      <div className="mt-4 rounded-md bg-slate-50 p-2.5 text-center">
                        <p className="text-[12px] font-bold text-slate-800">{service.footerNote}</p>
                      </div>
                    )}
                  </div>
                )}
                
                <div className="mt-4">
                  <button
                    onClick={() => toggleCard(index)}
                    className="flex items-center gap-1 text-[13px] font-bold text-[#FE5905] transition-colors hover:text-[#C94200]"
                  >
                    {isExpanded ? "Show Less" : "Know more"}
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ArrowRight className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Minimalist Reference Design */}
        <div className="mt-16 w-full bg-[#FDFCF8] px-6 py-8 text-center sm:px-10 sm:py-12 border border-slate-100 shadow-sm sm:mt-20">
          <div className="mx-auto max-w-3xl">
            <h3 className={`text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl ${montserrat.className}`}>
              Your Customers Are Online. Your Competitors Are Too.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-slate-600">
              Get found. Get enquiries. Grow before they do.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="tel:+919696717305"
                className="inline-flex items-center justify-center bg-[#FE5905] px-8 py-3 text-[13px] font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#ff6f26]"
              >
                Book Your Free Strategy Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
