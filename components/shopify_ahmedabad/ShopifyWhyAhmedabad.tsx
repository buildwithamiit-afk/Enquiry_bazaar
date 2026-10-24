import React from "react";
import { 
  Building2, 
  Smartphone, 
  CreditCard, 
  FileCheck2, 
  Zap, 
  TrendingUp,
  MapPin
} from "lucide-react";
import { WHY_AHMEDABAD_POINTS } from "./shopifyData";

export function ShopifyWhyAhmedabad() {
  const iconList = [
    <Building2 key="bld" className="h-6 w-6 text-[#FE5905]" />,
    <CreditCard key="card" className="h-6 w-6 text-emerald-500" />,
    <FileCheck2 key="file" className="h-6 w-6 text-amber-500" />,
    <Smartphone key="phone" className="h-6 w-6 text-sky-500" />,
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <MapPin className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Local Market Insights</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Why Ahmedabad Businesses Choose Shopify for High-Volume Selling
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Ahmedabad is one of India&apos;s biggest industrial powerhouses for <strong>textiles, chemicals, pharma, jewellery, FMCG, and manufacturing</strong>. Many of these established businesses are expanding online, selling both directly to end customers (D2C) and directly to dealers and wholesale buyers (B2B).
          </p>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Shopify has become the platform of choice because it launches fast, maintains zero-downtime security during festive traffic surges, and integrates natively with Indian payment gateways, courier aggregators, and WhatsApp.
          </p>
        </div>

        {/* Highlight Callout */}
        <div className="mt-8 rounded-2xl border-l-4 border-[#FE5905] bg-gradient-to-r from-orange-50 via-slate-50 to-white p-5 sm:p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Zap className="h-5 w-5 text-[#FE5905] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed">
              &ldquo;A store that merely looks attractive is not enough. It must load in under 2 seconds on mobile, rank on Google, accept UPI and COD without failure, ship through Delhivery or Shiprocket, and generate GST-compliant invoices automatically. That is exactly what we engineer.&rdquo;
            </p>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_AHMEDABAD_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg"
            >
              <div>
                <div className="inline-flex rounded-xl bg-white p-3 shadow-xs border border-slate-200/80 group-hover:scale-105 transition-transform">
                  {iconList[idx % iconList.length]}
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 leading-snug">
                  {point.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-[#001A55]">
                <TrendingUp className="h-3.5 w-3.5 text-[#FE5905]" />
                <span>Engineered for Revenue</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
