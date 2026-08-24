import React from "react";
import Image from "next/image";
import { Plus_Jakarta_Sans, Montserrat, Inter } from "next/font/google";
import {
  Search,
  MapPin,
  Star,
  PhoneCall,
  Globe,
  Smartphone,
  ShieldCheck,
  Target,
  Filter,
  Lock,
  Video,
  FileText,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Zap,
  Users,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

interface ServiceCardData {
  id: string;
  stepNumber: string;
  categoryTag: string;
  simpleRole: string;
  roleDescription: string;
  leftHeadline: string;
  specialistImage: string;
  accentColor: {
    badge: string;
    border: string;
    iconBg: string;
    bannerBg: string;
  };
  points: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  businessOutcome: string;
}

const serviceCards: ServiceCardData[] = [
  {
    id: "gmb-google-search",
    stepNumber: "STEP 01",
    categoryTag: "Google Search & Maps Setup",
    simpleRole: "Google Search & Maps Specialist",
    roleDescription: "Ranks your factory on Page 1 of Google Search for high-intent buyer keywords",
    leftHeadline: "When Bulk Buyers Search on Google, Your Factory Appears First",
    specialistImage: "/images/specialists/indian_male_seo.png",
    accentColor: {
      badge: "bg-blue-50 text-blue-700 border-blue-200",
      border: "border-blue-200 hover:border-blue-400",
      iconBg: "bg-blue-50 text-blue-600 border-blue-100",
      bannerBg: "bg-blue-50/80 border-blue-200 text-blue-950",
    },
    points: [
      {
        icon: <Search className="h-4 w-4 text-blue-600" />,
        title: "Top Google Ranking for Buying Keywords",
        description: "Optimized so when buyers type '[Your Product] manufacturer / wholesale supplier', your factory ranks at the very top.",
      },
      {
        icon: <MapPin className="h-4 w-4 text-blue-600" />,
        title: "100% Verified Google Business Profile (GMB)",
        description: "Complete setup with factory location, manufacturing premises, opening hours, and direct call buttons.",
      },
      {
        icon: <Star className="h-4 w-4 text-amber-500" />,
        title: "5-Star Trust & Review System",
        description: "Proven strategy to collect genuine customer reviews that convince serious procurement managers to choose you.",
      },
      {
        icon: <PhoneCall className="h-4 w-4 text-emerald-600" />,
        title: "Direct Phone Calls & WhatsApp Inquiries",
        description: "Buyers click once and directly talk to your sales manager — zero middleman, zero platform cuts, 100% your lead.",
      },
    ],
    businessOutcome: "Expected Result: 20–45+ direct incoming calls & WhatsApp inquiries from verified buyers every month.",
  },
  {
    id: "website-catalog",
    stepNumber: "STEP 02",
    categoryTag: "Factory Website & Digital Catalog",
    simpleRole: "B2B Website & Catalog Specialist",
    roleDescription: "Builds high-converting digital showrooms tailored for wholesale orders",
    leftHeadline: "A Professional Factory Website Built Exclusively for Bulk Orders",
    specialistImage: "/images/specialists/indian_female_web.png",
    accentColor: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
      border: "border-emerald-200 hover:border-emerald-400",
      iconBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
      bannerBg: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
    },
    points: [
      {
        icon: <Globe className="h-4 w-4 text-emerald-600" />,
        title: "Complete Digital Product Catalog",
        description: "Showcase your full product line, technical specifications, MOQ requirements, and high-res packaging photos in one place.",
      },
      {
        icon: <WhatsAppIcon className="h-4.5 w-4.5 shrink-0" />,
        title: "Instant 'Get Bulk Quote' WhatsApp Buttons",
        description: "Strategic WhatsApp triggers allowing prospective buyers to request quotation sheets and rate cards in under 5 seconds.",
      },
      {
        icon: <ShieldCheck className="h-4 w-4 text-indigo-600" />,
        title: "Factory Infrastructure & Certifications",
        description: "Highlight your manufacturing plant, CNC machines, production capacity, ISO / CE certifications, and export quality standards.",
      },
      {
        icon: <Smartphone className="h-4 w-4 text-blue-600" />,
        title: "Fast Mobile Loading & 100% Data Ownership",
        description: "Loads in under 2 seconds on any mobile phone. You own 100% of the website, domain, and customer database forever.",
      },
    ],
    businessOutcome: "Expected Result: Instant credibility with corporate buyers, exporters, and large-quantity distributors.",
  },
  {
    id: "google-meta-ads",
    stepNumber: "STEP 03",
    categoryTag: "Targeted Google & Meta Ads Setup",
    simpleRole: "B2B Ads & Performance Specialist",
    roleDescription: "Brings serious wholesale buyers and filters out single-piece retail time-wasters",
    leftHeadline: "Targeted Ads That Bring Only Serious Wholesale & Bulk Enquiries",
    specialistImage: "/images/specialists/indian_male_ads.png",
    accentColor: {
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      border: "border-indigo-200 hover:border-indigo-400",
      iconBg: "bg-indigo-50 text-indigo-600 border-indigo-100",
      bannerBg: "bg-indigo-50/80 border-indigo-200 text-indigo-950",
    },
    points: [
      {
        icon: <Target className="h-4 w-4 text-indigo-600" />,
        title: "High-Intent Keyword Targeting",
        description: "Ads show ONLY to users typing wholesale queries like 'bulk order', 'factory rate', 'OEM manufacturer', or 'direct supplier'.",
      },
      {
        icon: <Filter className="h-4 w-4 text-rose-500" />,
        title: "Blocks Retail & Single-Piece Time Wasters",
        description: "Negative keyword filtering prevents budget wastage on retail consumers, bargain hunters, or job seekers.",
      },
      {
        icon: <Users className="h-4 w-4 text-blue-600" />,
        title: "Reach Business Owners on Meta & Instagram",
        description: "Show your factory capabilities directly in the feeds of shopkeepers, distributors, and procurement managers.",
      },
      {
        icon: <Lock className="h-4 w-4 text-emerald-600" />,
        title: "100% Exclusive Inquiries (Never Shared)",
        description: "When a buyer submits an inquiry, it reaches ONLY your phone. Unlike B2B portals, we never share leads with 8 competitors.",
      },
    ],
    businessOutcome: "Expected Result: Predictable, scalable flow of high-margin bulk orders delivered straight to your WhatsApp.",
  },
  {
    id: "social-media-trust",
    stepNumber: "STEP 04",
    categoryTag: "Factory Videos & Brand Trust",
    simpleRole: "Factory Content & Trust Specialist",
    roleDescription: "Builds buyer confidence so you can charge premium profit margins",
    leftHeadline: "Factory Videos That Prove Your Quality & Eliminate Price Wars",
    specialistImage: "/images/specialists/indian_female_video.png",
    accentColor: {
      badge: "bg-amber-50 text-amber-800 border-amber-200",
      border: "border-amber-200 hover:border-amber-400",
      iconBg: "bg-amber-50 text-amber-700 border-amber-100",
      bannerBg: "bg-amber-50/80 border-amber-200 text-amber-950",
    },
    points: [
      {
        icon: <Video className="h-4 w-4 text-amber-600" />,
        title: "Raw Material to Finished Product Videos",
        description: "Short video reels showcasing your CNC machining, automated lines, assembly process, and packaging standards.",
      },
      {
        icon: <Award className="h-4 w-4 text-amber-600" />,
        title: "Quality Control & Testing Demonstrations",
        description: "Show proof of tensile strength, durability, zero defect rates, and dispatch readiness to win institutional confidence.",
      },
      {
        icon: <FileText className="h-4 w-4 text-indigo-600" />,
        title: "Client Case Studies & Order Dispatches",
        description: "Demonstrate real dispatch container loading, client testimonials, and track record of on-time delivery across India.",
      },
      {
        icon: <CheckCircle2 className="h-4 w-4 text-emerald-600" />,
        title: "Higher Profit Margins per Order",
        description: "When buyers see genuine infrastructure and verified quality proof, they stop treating you as a commodity and pay healthy margins.",
      },
    ],
    businessOutcome: "Expected Result: Higher order closure rate, faster advance payments, and long-term buyer retention.",
  },
];

export function DigitalPresenceSolution() {
  return (
    <section id="solution" className={`relative bg-slate-50/70 py-14 sm:py-20 ${inter.className}`}>
      
      {/* Subtle Top & Bottom Dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-xs">
            <Zap className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>HOW WE GET YOU DIRECT BUYERS</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.35rem] leading-tight ${montserrat.className}`}>
            Build a Digital Setup That{" "}
            <span className="text-[#1E5EFF]">Brings Direct Buyers</span> to You
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team sets up and manages your complete direct inquiry engine — so you get genuine bulk orders, exclusive buyer calls, and higher profit margins every month.
          </p>

          {/* Quick Value Points Strip */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              100% Direct Calls &amp; WhatsApp
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Zero Lead Sharing With Competitors
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white border border-slate-200 px-3 py-1 shadow-2xs">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              Dedicated Manager For Your Account
            </span>
          </div>
        </div>

        {/* Compact, Optimized Master Cards (Zero Wasted Space) */}
        <div className="mt-10 space-y-5 sm:space-y-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className={`group mx-auto max-w-5xl overflow-hidden rounded-[20px] sm:rounded-[24px] border-2 bg-white p-5 sm:p-6 lg:p-7 shadow-sm transition-all duration-300 ${card.accentColor.border} hover:shadow-md`}
            >
              {/* Top Header Bar */}
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider ${card.accentColor.badge}`}>
                    {card.stepNumber}
                  </span>
                  <span className="font-bold text-[#0B1E3D] text-base sm:text-[17px]">
                    {card.categoryTag}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/80 rounded-full px-2.5 py-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>100% Done-For-You</span>
                </div>
              </div>

              {/* 2-Column Split: Specialist Info on Left, 4 Concrete Deliverables on Right */}
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.35fr] lg:gap-6 items-stretch">
                
                {/* Left: Specialist Profile & Core Headline */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9]/70 p-4 sm:p-5">
                  <div>
                    {/* Specialist Profile Bar */}
                    <div className="flex items-center gap-3 pb-3.5 border-b border-slate-200/80">
                      <div className="relative h-13 w-13 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-xs">
                        <Image
                          src={card.specialistImage}
                          alt={card.simpleRole}
                          fill
                          sizes="60px"
                          className="object-cover object-top"
                        />
                      </div>

                      <div>
                        <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#1E5EFF]">
                          <span>✦</span>
                          <span>{card.simpleRole}</span>
                        </div>
                        <p className="text-[11.5px] text-slate-500 mt-0.5 leading-tight">
                          {card.roleDescription}
                        </p>
                      </div>
                    </div>

                    {/* Headline for this pillar */}
                    <h3 className={`mt-3 text-[16px] sm:text-[17.5px] font-bold text-slate-900 leading-snug ${jakarta.className}`}>
                      {card.leftHeadline}
                    </h3>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between">
                    <span className="text-[11.5px] text-slate-600 font-medium">
                      ✓ Strategy, Setup &amp; Daily Management
                    </span>
                  </div>
                </div>

                {/* Right: 4 High-Value Points (Tight, Compact Spacing) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {card.points.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                    >
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border shadow-2xs mt-0.5 ${card.accentColor.iconBg}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[12.5px] sm:text-[13px] font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[11.5px] sm:text-[12px] text-slate-600 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Result Strip */}
              <div className={`mt-4 flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs sm:text-[12.5px] font-semibold ${card.accentColor.bannerBg}`}>
                <TrendingUp className="h-4 w-4 shrink-0 text-current" />
                <span className="leading-snug">{card.businessOutcome}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-5 sm:p-7 text-center shadow-xs">
          <h3 className={`text-base sm:text-lg font-bold text-[#0B1E3D] ${montserrat.className}`}>
            You Focus on Manufacturing &amp; Dispatch. We Handle 100% of the Digital Work.
          </h3>
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No need to hire expensive in-house marketers or learn complex software. We assign dedicated experts who build and run your entire buyer acquisition system on auto-pilot.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B1E3D] px-5 py-2.5 text-xs sm:text-[13px] font-bold text-white shadow-md hover:bg-slate-800 transition-all active:scale-95"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
