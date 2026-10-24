import React from "react";
import { 
  CheckCircle2, 
  ShoppingBag, 
  Palette, 
  Boxes, 
  ArrowLeftRight, 
  Cpu, 
  Flame, 
  Search, 
  LifeBuoy, 
  ArrowRight
} from "lucide-react";
import { SHOPIFY_SERVICES } from "./shopifyData";

export function ShopifyServices() {
  const serviceIcons: Record<string, React.ReactNode> = {
    "store-development": <ShoppingBag className="h-6 w-6 text-[#FE5905]" />,
    "theme-customization": <Palette className="h-6 w-6 text-purple-600" />,
    "b2b-wholesale": <Boxes className="h-6 w-6 text-emerald-600" />,
    "migration": <ArrowLeftRight className="h-6 w-6 text-blue-600" />,
    "app-integration": <Cpu className="h-6 w-6 text-indigo-600" />,
    "plus-headless": <Flame className="h-6 w-6 text-orange-600" />,
    "seo-speed": <Search className="h-6 w-6 text-teal-600" />,
    "maintenance": <LifeBuoy className="h-6 w-6 text-rose-600" />,
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs">
            <span>End-to-End Capabilities</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
            Our Shopify Development Services in Ahmedabad
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            From new store launches to complex B2B wholesale portals and seamless migrations, we provide complete, engineer-led Shopify development.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHOPIFY_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`flex flex-col justify-between rounded-2xl border p-6 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                srv.id === "b2b-wholesale"
                  ? "border-emerald-500/50 ring-2 ring-emerald-500/20 bg-gradient-to-b from-white to-emerald-50/30"
                  : "border-slate-200/90 shadow-2xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-flex rounded-xl bg-slate-100 p-3 shadow-inner">
                    {serviceIcons[srv.id] || <ShoppingBag className="h-6 w-6 text-[#FE5905]" />}
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${
                      srv.id === "b2b-wholesale"
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-slate-100 text-slate-700 border border-slate-200"
                    }`}
                  >
                    {srv.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900 leading-snug">
                  {srv.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {srv.shortDesc}
                </p>

                <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  {srv.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FE5905] hover:text-[#ff6f26] transition-colors"
                >
                  <span>Request Scope &amp; Quote</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-10 rounded-xl bg-[#001A55] p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold sm:text-base">Need a custom Shopify app or unique ERP connection?</div>
            <div className="text-xs text-slate-300">We write clean private apps connecting Shopify with Tally, Zoho Books, SAP, and custom warehouse APIs.</div>
          </div>
          <a
            href="#quote-form"
            className="shrink-0 rounded-lg bg-[#FE5905] px-4 py-2 text-xs font-bold text-white hover:bg-[#ff6f26] transition-colors shadow-sm"
          >
            Discuss Custom App
          </a>
        </div>

      </div>
    </section>
  );
}
