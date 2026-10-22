"use client";

import React from "react";
import { 
  Package, 
  Wrench, 
  FlaskConical, 
  Zap, 
  Scissors, 
  Cog, 
  Boxes,
  Truck
} from "lucide-react";

export function MfgIndustries() {
  const industries = [
    {
      icon: Package,
      name: "Corrugated Box & Packaging",
      description: "Custom box weight calculation, deckle optimization formulas, and automated MOQ quotation portals.",
      features: ["Ply & GSM calculators", "Paper reel stock inventory", "Instant landed cost PDF"],
    },
    {
      icon: Wrench,
      name: "CNC Machining & Precision Metal",
      description: "Technical drawing (CAD/STEP) uploads, job card routing from cutting to anodizing, and OEM parts catalogs.",
      features: ["CAD blueprint upload forms", "Tolerance & finish specifications", "Material grade selector (SS/MS/Al)"],
    },
    {
      icon: Boxes,
      name: "Plastic Injection & Polymer Molding",
      description: "Digital catalogs showcasing cavity tooling, masterbatch coloring, food-grade certifications, and bulk container RFQs.",
      features: ["Mold maintenance logs", "Raw polymer inventory alerts", "Wholesale qualification forms"],
    },
    {
      icon: FlaskConical,
      name: "Industrial Chemicals & Lubricants",
      description: "Distributor portal for downloading Material Safety Data Sheets (MSDS), Certificates of Analysis (COA), and drum orders.",
      features: ["COA & MSDS downloads", "Tanker / drum pricing tiers", "Distributor credit limits"],
    },
    {
      icon: Zap,
      name: "Electrical, Switchgears & Transformers",
      description: "Technical specification filters, CPRI/BIS test report proofs, and institutional tender RFQ funnels.",
      features: ["CPRI / BIS certificate archive", "Wattage & kVA selectors", "Contractor quotation flow"],
    },
    {
      icon: Scissors,
      name: "Textiles, Yarns & Garments",
      description: "Digital fabric shade cards, weave density specifications, compliance proofs, and container-load export RFQ capture.",
      features: ["High-res digital swatch cards", "Multi-currency FOB/CIF calculators", "Export buyer inquiry funnels"],
    },
    {
      icon: Cog,
      name: "Heavy Machinery & Automation",
      description: "Plant walkthrough showcases, throughput output calculators, and annual maintenance contract (AMC) portals.",
      features: ["Machine output throughput calculator", "Equipment video showcases", "Direct engineering consultation"],
    },
    {
      icon: Truck,
      name: "Automotive Components & Fasteners",
      description: "IATF/ISO standard showcases, DIN/ISO specification finders, and dispatch scheduling portals.",
      features: ["DIN / ISO standard lookup", "Lot traceability logs", "Automated dispatch notifications"],
    },
  ];

  return (
    <section id="industries-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Industry Focus</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Sectors We Specialize In
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Domain-specific systems mapped to technical parameters, compliance certifications, and wholesale buyer expectations.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-2xs transition-all hover:border-slate-300 hover:shadow-sm"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-[#FE5905] border border-orange-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-3.5 text-base font-semibold text-slate-900 leading-snug">
                    {item.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-slate-100 pt-3.5 space-y-1.5 text-xs text-slate-600">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FE5905]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Have a different manufacturing process?{" "}
          <a href="#contact-section" className="font-semibold text-[#FE5905] hover:underline">
            Contact us for custom architecture &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
