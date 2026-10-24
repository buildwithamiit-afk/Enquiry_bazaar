import React from "react";
import { CheckCircle2, Scale, ArrowRight, MessageSquareText } from "lucide-react";
import { PLATFORM_COMPARISON_TABLE } from "./shopifyData";

export function ShopifyPlatformComparison() {
  return (
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-slate-100 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <Scale className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>Honest Architectural Evaluation</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Shopify vs. WooCommerce vs. Custom Development
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            Choosing the wrong technology stack can lead to crashed festive sales, bloated server maintenance bills, or endless developer lock-in. Here is an honest, side-by-side engineering comparison.
          </p>
        </div>

        {/* Comparison Table Desktop */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#001A55] text-white">
                <tr>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-1/4">
                    Evaluation Factor
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-1/4 bg-[#FE5905] text-white">
                    Shopify (Recommended)
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-1/4">
                    WooCommerce
                  </th>
                  <th className="py-4 px-5 font-bold uppercase tracking-wider text-xs w-1/4">
                    Custom-Built Store
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {PLATFORM_COMPARISON_TABLE.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}
                  >
                    <td className="py-4 px-5 font-bold text-slate-900 align-top">
                      {row.factor}
                    </td>
                    <td className="py-4 px-5 font-medium text-slate-900 bg-orange-50/40 border-x border-orange-200/60 align-top">
                      <div className="flex items-start gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-[#FE5905] shrink-0 mt-0.5" />
                        <span>{row.shopify}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600 align-top">
                      {row.woocommerce}
                    </td>
                    <td className="py-4 px-5 text-slate-600 align-top">
                      {row.customBuilt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Honest Advice Callout */}
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <MessageSquareText className="h-5 w-5 text-[#001A55] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#001A55] sm:text-base">
                Not sure which platform fits your catalog and budget?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                We will analyze your inventory size, technical staff, and sales projections and tell you honestly, even if your business would be better served on WooCommerce or custom code instead of Shopify.
              </p>
            </div>
          </div>

          <a
            href="#quote-form"
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#001A55] px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-slate-800 transition-colors shadow-sm"
          >
            <span>Get Architectural Advice</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
