import React from "react";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "../landing/content";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const teamMembers = [
  {
    name: "Aakash Sharma",
    role: "Head of Google Search & Local SEO",
    image: "/images/specialists/indian_male_seo.png",
    expertise: "Specializes in ranking Indian manufacturing factories on Page 1 of Google for high-volume B2B wholesale keywords.",
  },
  {
    name: "Pooja Verma",
    role: "Lead B2B Web & Catalog Architect",
    image: "/images/specialists/indian_female_web.png",
    expertise: "Designs high-converting factory digital showrooms and mobile-optimized quotation catalogs.",
  },
  {
    name: "Rohan Nair",
    role: "Senior B2B Performance Ads Lead",
    image: "/images/specialists/indian_male_ads.png",
    expertise: "Manages targeted Google & Meta campaigns engineered to filter out retail bargain hunters and deliver serious bulk RFQs.",
  },
  {
    name: "Sneha Iyer",
    role: "Industrial Media & Brand Trust Director",
    image: "/images/specialists/indian_female_video.png",
    expertise: "Creates factory tour showcases, machine capability videos, and ISO trust proof that eliminates price wars.",
  },
];

export function LeadershipTeam() {
  return (
    <section className={`relative bg-[#F8FAFC] py-16 sm:py-24 ${inter.className}`}>
      
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E5EFF] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#1E5EFF]" />
            <span>MEET OUR SPECIALISTS</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#0B1E3D] sm:text-3xl lg:text-[2.25rem] leading-tight ${montserrat.className}`}>
            Dedicated Indian Growth Experts Working for You
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every EnquiryBazaar client is paired with full-time specialists who manage your Google rankings, catalog updates, and B2B ads every single day.
          </p>
        </div>

        {/* 4 Specialist Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border-2 border-slate-200 bg-white p-5 text-center shadow-xs transition hover:border-blue-400 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Photo Frame */}
                <div className="mx-auto relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-4 border-blue-50 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="120px"
                    className="object-cover object-top"
                  />
                </div>

                <h3 className={`mt-4 text-base sm:text-[17px] font-bold text-[#0B1E3D] ${montserrat.className}`}>
                  {member.name}
                </h3>

                <span className="text-[11.5px] font-bold text-[#1E5EFF] block mt-0.5">
                  {member.role}
                </span>

                <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                  {member.expertise}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Dedicated Account Specialist</span>
              </div>
            </div>
          ))}
        </div>

        {/* Group Photo Callout Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0B1E3D] via-[#102B52] to-[#0B1E3D] p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="hidden sm:grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/20 border border-blue-400/30">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <h4 className={`text-base sm:text-lg font-bold text-white ${montserrat.className}`}>
                  Ready to Put Our Specialist Team to Work for Your Factory?
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Book a 15-minute consultation to review your industry search volume and competition report.
                </p>
              </div>
            </div>

            <a
              href={whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95 shrink-0"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
