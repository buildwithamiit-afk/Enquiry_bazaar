"use client";

import React, { useState } from "react";
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
            Technology Tailored to Factory Operations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From internal factory management to outward-facing B2B customer catalogs, we build systems designed for your exact manufacturing workflows.
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
                    Custom ERP, Production Tracking &amp; Quotation Software
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Standard accounting packages and spreadsheets struggle with complex batch production, cutting wastage, and custom job cards. We build lightweight, private web-based software mapped to your factory floor.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>Automated Quotations</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Input raw material specs, setup costs, and freight to instantly generate branded PDF quotations with GST.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Layers className="h-4 w-4 text-[#FE5905]" />
                        <span>Inventory &amp; Batch Tracking</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Track raw materials, work-in-progress job cards, and finished goods inventory with re-order notifications.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Database className="h-4 w-4 text-[#FE5905]" />
                        <span>Distributor &amp; Dealer Portal</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Provide B2B distributors a secure login to review negotiated rate cards, place purchase orders, and track dispatches.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Lock className="h-4 w-4 text-[#FE5905]" />
                        <span>Complete Data Privacy</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Self-hosted on your private cloud or servers with full database and source code ownership.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#001A55] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#002882]"
                    >
                      <span>Discuss Your Software Requirements</span>
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
                    Technical Catalog Websites for B2B &amp; Export Buyers
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    Corporate procurement officers and export clients need technical clarity before initiating an RFQ. We build fast, mobile-ready catalog websites that showcase your plant capacity, equipment list, and product technical specifications.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#FE5905]" />
                        <span>Technical Data Sheets (TDS)</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Allow engineers and purchase managers to download technical specifications, CAD drawings, and ISO test certificates.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>High-Speed Performance</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Built on modern Next.js for sub-second loading speeds on mobile networks and global export regions.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-[#FE5905]" />
                        <span>Direct WhatsApp RFQ Triggers</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Every product SKU connects to WhatsApp with pre-filled product name and quantity requirements.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#FE5905]" />
                        <span>Plant Trust Proof</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Highlight plant machinery, testing laboratories, quality control procedures, and certifications.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#ff6f26]"
                    >
                      <span>Plan Your Factory Website</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
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
                    B2B Landing Pages with Wholesale Qualification Forms
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                    If you run Google Ads or promotional campaigns, standard contact forms often invite non-serious retail inquiries. We design landing pages with mandatory business qualification fields so your sales team only focuses on bulk buyers.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Filter className="h-4 w-4 text-[#FE5905]" />
                        <span>Minimum Order Quantity (MOQ) Fields</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Inquiries require business buyers to select their volume and delivery timeline before submission.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-[#FE5905]" />
                        <span>Exclusive Lead Routing</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Leads are private to your business and directly sent to your sales CRM and WhatsApp without competitor sharing.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4 text-[#FE5905]" />
                        <span>Instant Alerts</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        Instant notification via WhatsApp and email so your sales team can respond to procurement heads within minutes.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                      <div className="font-semibold text-slate-900 text-sm flex items-center gap-2">
                        <Lock className="h-4 w-4 text-[#FE5905]" />
                        <span>0% Commission</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">
                        You pay standard agency or development fees. All closed contracts and purchase orders are 100% yours.
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#contact-section"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700"
                    >
                      <span>Build a B2B Landing Page</span>
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
