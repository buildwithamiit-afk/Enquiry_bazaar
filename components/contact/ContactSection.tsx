"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import { PhoneCall, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "../landing/content";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    industry: "Manufacturing / Factory",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Trigger WhatsApp with the formatted discovery details
    const text = encodeURIComponent(
      `Hi Amit & EnquiryBazaar Team,\n\nI want to book a Free 15-Min Discovery Audit for my business:\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Company: ${formData.businessName || "N/A"}\n- Industry: ${formData.industry}\n- Location: ${formData.city || "India"}`
    );
    window.open(`https://wa.me/919696717305?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className={`relative bg-[#F8FAFC] py-16 sm:py-24 ${inter.className}`}>
      
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/80"></div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FE5905] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>DIRECT ACCESS &amp; CONSULTATION</span>
          </div>

          <h1 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-[2.35rem] leading-tight ${montserrat.className}`}>
            Contact EnquiryBazaar
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to stop competing on price and get 100% exclusive direct buyer inquiries? Speak directly with our B2B growth strategist.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Helplines & Office Channels */}
          <div className="flex flex-col gap-5">
            
            {/* Primary WhatsApp Card */}
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-600 text-white shadow-md">
                  <WhatsAppIcon className="h-6 w-6 shrink-0 fill-white" />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                    Fastest Response (Under 15 Mins)
                  </span>
                  <h3 className={`text-lg font-bold text-slate-900 ${montserrat.className}`}>
                    Chat on WhatsApp
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Connect directly with Amit Pandey &amp; our B2B growth team for instant keyword reports and consultation.
              </p>

              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Message +91 96967 17305</span>
              </a>
            </div>

            {/* Direct Phone Helpline Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange-50 text-[#FE5905] border border-orange-100">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Manufacturer Helpline
                  </span>
                  <a
                    href="tel:+919696717305"
                    className={`text-lg font-extrabold text-[#001A55] hover:text-[#FE5905] transition-colors ${montserrat.className}`}
                  >
                    +91 96967 17305
                  </a>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-500">
                Available Monday to Saturday: 9:30 AM – 7:30 PM IST
              </p>
            </div>

            {/* Support Assurances */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 space-y-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Sales Pressure · Confidential Discovery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Free Competitor &amp; Search Keyword Report Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Tailored for Indian Factory Owners &amp; MSMEs</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Discovery Form */}
          <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h3 className={`text-lg sm:text-xl font-bold text-[#001A55] ${montserrat.className}`}>
              Request a Free 15-Minute B2B Growth Audit
            </h3>
            <p className="mt-1 text-xs sm:text-[13px] text-slate-500">
              Fill out your basic details, and we will analyze your product search volume on Google before we connect.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Factory / Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Packaging Works"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Product / Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100 bg-white"
                  >
                    <option>Candles &amp; Fragrances</option>
                    <option>Glass &amp; Bottles</option>
                    <option>Packaging &amp; Corrugated Boxes</option>
                    <option>Machinery &amp; Spare Parts</option>
                    <option>Textiles, Fabrics &amp; Garments</option>
                    <option>Chemicals &amp; Raw Materials</option>
                    <option>Electrical Equipment &amp; Hardware</option>
                    <option>Home Decor &amp; Handicrafts</option>
                    <option>Other B2B Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    City / Factory Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Surat, Gujarat"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit &amp; Open WhatsApp Audit</span>
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-xs text-emerald-800 text-center font-medium">
                ✓ Redirecting to WhatsApp. Our team will review your business and respond shortly!
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
