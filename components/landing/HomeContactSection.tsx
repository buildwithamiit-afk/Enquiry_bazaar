"use client";

import React, { useState } from "react";
import { Montserrat, Inter } from "next/font/google";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Briefcase,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "./content";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export const availableServices = [
  "B2B Lead Generation & Buyer Enquiries",
  "Website Design & Development",
  "Google Search & Local Maps (GMB) Ranking",
  "Google & Meta (Facebook/Insta) Paid Ads",
  "Search Engine Optimization (SEO)",
  "Social Media Marketing & Brand Building",
  "Product Catalog / Video & Content Creation",
  "Complete Digital Growth Setup",
  "Other / Custom Requirement",
] as const;

export function HomeContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    service: availableServices[0],
    city: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setErrorMsg("");

    try {
      // 1. Submit lead to our API route (which forwards to Google Sheet webhook if configured)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);

      // 2. Also prepare seamless WhatsApp direct connect
      const waText = encodeURIComponent(
        `Hi Amit & EnquiryBazaar Team,\n\nI just submitted the inquiry form on your website:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🏢 Company: ${formData.businessName || "Not specified"}\n📍 City: ${formData.city || "India"}\n🎯 Service Needed: ${formData.service}${formData.message ? `\n💬 Note: ${formData.message}` : ""}\n\nPlease share the competitor search audit report.`
      );

      // Small delay so user sees submission state before optional WhatsApp popup
      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
      }, 1200);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg("Something went wrong. Please connect with us directly on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className={`relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-14 sm:py-20 ${inter.className}`}>
      {/* Top Border Accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FE5905] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#FE5905]" />
            <span>DIRECT BUYER ACQUISITION ENGINE</span>
          </div>

          <h2 className={`mt-3 text-2xl font-extrabold tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl leading-tight ${montserrat.className}`}>
            Get in Touch With <span className="text-[#FE5905]">EnquiryBazaar</span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to stop competing on price and get 100% exclusive direct buyer inquiries? Select your required service below and schedule your free 15-minute discovery audit.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Information on Left, Sheet Form on Right */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Helplines, WhatsApp & Value Points */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            {/* WhatsApp Priority Card */}
            <div className="rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/40 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-600 text-white shadow-md">
                  <WhatsAppIcon className="h-6 w-6 shrink-0 fill-white" />
                </div>
                <div>
                  <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-emerald-700 block">
                    Fastest Response (Under 15 Mins)
                  </span>
                  <h3 className={`text-base sm:text-lg font-bold text-slate-900 ${montserrat.className}`}>
                    Chat Directly on WhatsApp
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                Connect directly with our B2B growth strategist for instant keyword analysis and factory buyer search reports.
              </p>

              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 active:scale-95 cursor-pointer"
              >
                <WhatsAppIcon className="h-4.5 w-4.5 shrink-0 fill-white" />
                <span>Message {whatsappCta.phoneDisplay}</span>
              </a>
            </div>

            {/* Direct Phone Helpline Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-[#FE5905] border border-orange-100">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Manufacturer Helpline
                  </span>
                  <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <a
                      href="tel:+919696717305"
                      className={`text-base sm:text-lg font-extrabold text-[#001A55] hover:text-[#FE5905] transition-colors ${montserrat.className}`}
                    >
                      +91 96967 17305
                    </a>
                    <span className="text-slate-300 font-bold hidden sm:inline">|</span>
                    <a
                      href="tel:+918887048276"
                      className={`text-sm sm:text-base font-bold text-slate-600 hover:text-[#FE5905] transition-colors ${montserrat.className}`}
                    >
                      +91 88870 48276
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-2.5 text-xs text-slate-500">
                Available Monday to Saturday: 9:30 AM to 7:30 PM IST
              </p>
            </div>

            {/* Value Guarantees */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Zero Sales Pressure · 100% Confidential Discovery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Free Competitor Search Volume Audit Included</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Tailored specifically for Indian Factory Owners &amp; MSMEs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Sheet-Connected Lead Capture Form with Service Dropdown */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className={`text-lg sm:text-xl font-bold text-[#001A55] ${montserrat.className}`}>
                  Request Your Free B2B Growth Audit
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Select your required service. We will review your production line and contact you promptly.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Service Required Dropdown (Primary) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Service Required *
                </label>
                <div className="relative">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value as any })}
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 pr-10 text-xs sm:text-sm font-semibold text-slate-900 focus:border-[#FE5905] focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-100 cursor-pointer"
                  >
                    {availableServices.map((serviceName) => (
                      <option key={serviceName} value={serviceName}>
                        {serviceName}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Factory/Business Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Factory or Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Packaging Works"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Factory Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Navi Mumbai, Maharashtra"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>

              {/* Additional Requirements or Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Requirement Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your products or current inquiry challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100 resize-none"
                />
              </div>

              {errorMsg && (
                <div className="rounded-xl bg-red-50 border border-red-200 p-3 text-xs text-red-700 font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 disabled:opacity-70 cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit &amp; Schedule Growth Audit</span>
                  </>
                )}
              </button>
            </form>

            {submitted && (
              <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-800 flex items-start gap-2.5 font-medium animate-fadeIn">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Inquiry Recorded Successfully!</strong>
                  <p className="mt-0.5 text-emerald-700">
                    Your details have been registered. Redirecting to WhatsApp to provide your free competitor keyword report...
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
