"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Cpu, 
  Globe2, 
  Filter, 
  CheckCircle2, 
  ArrowRight, 
  Database, 
  Layers, 
  Zap, 
  Lock, 
  FileText, 
  Smartphone, 
  ShieldCheck 
} from "lucide-react";

export function MfgPillars() {
  const [activeTab, setActiveTab] = useState<"software" | "website" | "landing">("software");

  return (
    <section id="pillars-section" className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>What We Build</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            3 Core Digital Systems Built Exclusively for Factory Owners
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Whether you need to streamline plant production, showcase technical specs to export buyers, or generate verified bulk inquiries, we build systems mapped to your exact workflows.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <button
              onClick={() => setActiveTab("software")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "software"
                  ? "bg-[#001A55] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Cpu className="h-4 w-4" />
              <span>1. Factory ERP &amp; Workflow Software</span>
            </button>

            <button
              onClick={() => setActiveTab("website")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "website"
                  ? "bg-[#001A55] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe2 className="h-4 w-4" />
              <span>2. Technical Catalog Websites</span>
            </button>

            <button
              onClick={() => setActiveTab("landing")}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "landing"
                  ? "bg-[#001A55] text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Filter className="h-4 w-4" />
              <span>3. B2B Wholesale Landing Pages</span>
            </button>
          </div>
        </div>

        {/* Dynamic Pillar Content */}
        <div className="mt-8">
          
          {/* Pillar 1: Custom Industrial Software */}
          {activeTab === "software" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001A55]">
                    Custom Production Tracking, Quoting &amp; Inventory Software
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Standard spreadsheets crash, job cards get misplaced, and raw material margins leak undetected. We engineer clean, web-based production systems that factory supervisors can easily run from a phone, tablet, or desktop.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>Instant Landed Quotations</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Input raw material rates, wastage margins, and machine hours to generate branded GST PDF quotes in under 45 seconds.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Layers className="h-4 w-4 text-[#FE5905]" />
                        <span>Job Cards &amp; Batch Yield</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Track raw material reels/sheets, work-in-progress assembly stages, and finished goods with real-time scrap alerts.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Database className="h-4 w-4 text-[#FE5905]" />
                        <span>Distributor &amp; Dealer Portal</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Give wholesale distributors a private login to check live stock, order repeat batches at their contracted pricing, and track dispatch status.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Lock className="h-4 w-4 text-[#FE5905]" />
                        <span>Full Code &amp; Data Ownership</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Deployed on your private server or cloud with full database backups. No recurring user fees or per-seat software charges.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#001A55] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#002882]"
                    >
                      <span>Discuss Your Factory Software Requirements</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-slate-200 bg-slate-900 p-5 text-white">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-medium text-slate-400">Production Dashboard Overview</span>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                        Active
                      </span>
                    </div>

                    <div className="mt-4 space-y-3 font-mono text-xs">
                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-slate-400 text-[11px]">JOB CARD #4091</div>
                        <div className="font-bold text-white mt-0.5">Corrugated Box (5-Ply 180 GSM)</div>
                        <div className="mt-2 flex justify-between text-[11px] text-slate-300">
                          <span>Volume: 25,000 Pcs</span>
                          <span className="text-emerald-400">Status: In Production</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-white/5 p-3">
                        <div className="text-slate-400 text-[11px]">RAW MATERIAL INVENTORY</div>
                        <div className="font-bold text-white mt-0.5">Kraft Paper 150 GSM (Grade A)</div>
                        <div className="mt-2 flex justify-between text-[11px] text-slate-300">
                          <span>Available: 18.4 Tonnes</span>
                          <span className="text-slate-400">Min Threshold: 5 Tonnes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Pillar 2: Manufacturing Websites & Digital Showrooms */}
          {activeTab === "website" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001A55]">
                    High-Speed Technical Catalog Websites for B2B &amp; Export Procurement
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Corporate procurement heads and export buyers do not buy from slow, generic brochure websites. They look for plant capacity, machine lists, CAD drawings, and ISO test certificates before initiating an inquiry.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#FE5905]" />
                        <span>Technical Data Sheets (TDS) &amp; CAD</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Let procurement engineers download technical specifications, tolerance sheets, and BIS/ISO certificates in 1 click.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>Sub-Second Mobile Performance</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Built on modern Next.js so your catalog opens instantly for international buyers and mobile visitors with zero lag.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-[#FE5905]" />
                        <span>Instant WhatsApp RFQ Triggers</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Every product SKU has a direct WhatsApp quote trigger with pre-filled product name and quantity requirements.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#FE5905]" />
                        <span>Plant Machinery &amp; QC Proof</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Showcase your actual CNC machines, testing laboratories, and plant infrastructure to build unshakeable buyer trust.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#ff6f26]"
                    >
                      <span>Plan Your Technical Factory Website</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <Link
                      href="/shopify-development-company-ahmedabad"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs sm:text-sm font-semibold text-[#001A55] hover:border-[#FE5905] hover:text-[#FE5905] transition-colors"
                    >
                      <span>Shopify B2B &amp; Wholesale in Ahmedabad &rarr;</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-slate-200 bg-slate-900 p-5 text-white">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <span className="text-xs font-medium text-slate-400">Technical Product Specification</span>
                      <span className="text-xs text-orange-400 font-semibold">Live Preview</span>
                    </div>

                    <div className="mt-4 space-y-3 text-xs">
                      <div className="rounded-lg bg-white/5 p-3.5">
                        <div className="text-sm font-semibold text-white">Precision CNC Machined Flanges</div>
                        <div className="mt-2 grid grid-cols-2 gap-2 text-slate-300 text-[11px]">
                          <div>Material: SS 304 / 316L</div>
                          <div>Tolerance: &plusmn;0.005 mm</div>
                          <div>Standard: ASME / ANSI B16.5</div>
                          <div>MOQ: 500 Units</div>
                        </div>
                        <div className="mt-3 flex gap-2">
                          <span className="rounded bg-white/10 px-2 py-1 text-[11px] text-slate-200">Download TDS</span>
                          <span className="rounded bg-emerald-500/20 px-2 py-1 text-[11px] text-emerald-300">Request Quote</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Pillar 3: B2B Negative-Filtered Landing Pages */}
          {activeTab === "landing" && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
                
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001A55]">
                    High-Converting B2B Landing Pages with Wholesale Qualification Filters
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Tired of spending money on ads only to get retail calls asking for 1 single piece? We build landing pages with strict negative-filtering forms that eliminate consumer shoppers and deliver verified wholesale purchase orders directly to your sales team.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Filter className="h-4 w-4 text-[#FE5905]" />
                        <span>Minimum Order Quantity (MOQ) Filtering</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Mandatory bulk quantity selectors ensure retail buyers cannot submit inquiries, saving your sales team hours.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#FE5905]" />
                        <span>100% Exclusive Inbound Leads</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Every buyer inquiry routes directly to your sales WhatsApp and CRM. No broker middleman, no sharing with 10 competitors.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>Instant WhatsApp Lead Routing</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Receive immediate alerts the moment a plant manager or purchase head submits an RFQ so you can quote within minutes.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Lock className="h-4 w-4 text-[#FE5905]" />
                        <span>0% Sales Commission</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        You keep 100% of your order margins. We charge standard development fees with zero percentage cut on your deals.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700"
                    >
                      <span>Build a Wholesale B2B Landing Page</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-semibold text-slate-800">Sample Inbound Lead Format</span>
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                        Verified Business
                      </span>
                    </div>

                    <div className="mt-3.5 space-y-2 text-xs">
                      <div className="rounded-lg bg-white p-2.5 border border-slate-200">
                        <span className="text-slate-500 text-[11px] block">Company Name</span>
                        <span className="font-medium text-slate-900">Apex Automotive Assemblies Pvt Ltd</span>
                      </div>
                      <div className="rounded-lg bg-white p-2.5 border border-slate-200">
                        <span className="text-slate-500 text-[11px] block">Required Volume</span>
                        <span className="font-semibold text-[#FE5905]">15,000 Units / Month</span>
                      </div>
                      <div className="rounded-lg bg-white p-2.5 border border-slate-200">
                        <span className="text-slate-500 text-[11px] block">Destination</span>
                        <span className="text-slate-800 font-medium">Pune MIDC, Maharashtra</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
