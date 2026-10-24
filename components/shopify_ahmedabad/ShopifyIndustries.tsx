import React from "react";
import { 
  Shirt, 
  Sparkles, 
  Gem, 
  FlaskConical, 
  Pill, 
  Home, 
  UtensilsCrossed, 
  Package, 
  Wrench, 
  Ship, 
  HeartHandshake,
  Check
} from "lucide-react";
import { INDUSTRIES_SERVED } from "./shopifyData";

export function ShopifyIndustries() {
  const industryIcons: Record<string, React.ReactNode> = {
    "Textiles & Garments": <Shirt className="h-5 w-5 text-indigo-600" />,
    "Ethnic Wear & Sarees": <Sparkles className="h-5 w-5 text-rose-600" />,
    "Jewellery & Accessories": <Gem className="h-5 w-5 text-amber-600" />,
    "Chemicals & Dyes (B2B)": <FlaskConical className="h-5 w-5 text-emerald-600" />,
    "Pharma & Wellness": <Pill className="h-5 w-5 text-teal-600" />,
    "Home Decor & Handicrafts": <Home className="h-5 w-5 text-orange-600" />,
    "Food & FMCG": <UtensilsCrossed className="h-5 w-5 text-red-600" />,
    "Packaging & Corrugated Boxes": <Package className="h-5 w-5 text-amber-700" />,
    "Industrial & Hardware Suppliers": <Wrench className="h-5 w-5 text-slate-700" />,
    "Exporters & Merchant Traders": <Ship className="h-5 w-5 text-blue-600" />,
    "Beauty & Personal Care": <HeartHandshake className="h-5 w-5 text-pink-600" />,
  };

  return (
    <section id="industries" className="relative py-16 sm:py-24 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
            <span>Specialized Gujarat Verticals</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Industries We Build Shopify Stores For in Ahmedabad
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Every trade has unique commercial rules. We architect Shopify stores with industry-specific features: from fabric swatch requests to chemical TDS downloads and packaging MOQ calculators.
          </p>
        </div>

        {/* 11 Industries Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-slate-100 p-2.5">
                    {industryIcons[ind.name] || <Shirt className="h-5 w-5 text-[#FE5905]" />}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                    {ind.sector}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-bold text-slate-900 group-hover:text-[#001A55] transition-colors">
                  {ind.name}
                </h3>

                <p className="mt-1.5 text-xs text-slate-600 leading-relaxed min-h-[36px]">
                  {ind.useCase}
                </p>

                {/* Key tailored features */}
                <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
                  {ind.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                      <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-2">
                <a
                  href="#quote-form"
                  className="text-[11px] font-bold text-[#FE5905] hover:text-[#ff6f26] transition-colors inline-flex items-center gap-1"
                >
                  Build for this vertical &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
