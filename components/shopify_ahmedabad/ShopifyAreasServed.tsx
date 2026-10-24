import React from "react";
import { MapPin, Globe2, MessageCircle } from "lucide-react";
import { AREAS_SERVED_AHMEDABAD } from "./shopifyData";

export function ShopifyAreasServed() {
  return (
    <section className="relative py-16 bg-white text-slate-900 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 text-xs font-semibold text-orange-700">
            <MapPin className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Local &amp; Regional Coverage</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl">
            Areas We Serve Across Ahmedabad &amp; Gujarat
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            We partner with D2C brands, factory owners, and wholesalers across Ahmedabad&apos;s commercial hubs and GIDC industrial zones, with seamless online collaboration, video walkthroughs, and direct WhatsApp support.
          </p>
        </div>

        {/* Micro-Locality Chips Grid */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
          {AREAS_SERVED_AHMEDABAD.map((area, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2 text-xs font-semibold text-slate-800 transition-colors hover:border-[#FE5905] hover:bg-white hover:text-[#FE5905]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#FE5905]" />
              <span>{area.name}</span>
              <span className="text-[10px] font-normal text-slate-500">
                ({area.type})
              </span>
            </div>
          ))}
        </div>

        {/* Pan-India & Global Note */}
        <div className="mt-8 max-w-3xl mx-auto rounded-xl bg-slate-50 border border-slate-200 p-4 text-center text-xs sm:text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5 font-bold text-slate-900">
            <Globe2 className="h-4 w-4 text-[#001A55]" />
            Pan-India &amp; Global Clients:
          </span>{" "}
          Beyond Gujarat, we build Shopify stores for clients across Mumbai, Delhi NCR, Bengaluru, Hyderabad, and international exporters in the UAE, UK, and USA. All project milestones, reviews, and training happen online via Google Meet and WhatsApp.
        </div>

      </div>
    </section>
  );
}
