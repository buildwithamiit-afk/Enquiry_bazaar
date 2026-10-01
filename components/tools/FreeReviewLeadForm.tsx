"use client";

import React, { useState } from "react";
import { Send, Star } from "lucide-react";

export function FreeReviewLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    industry: "Manufacturing / Factory",
    city: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Free 30 Google Reviews Request"
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit to API:", err);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-6 sm:p-10 shadow-sm my-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-800 shadow-sm mb-4">
          <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
          <span>Exclusive Offer</span>
        </div>
        <h2 className="text-3xl font-extrabold text-[#001A55] sm:text-4xl">
          Get 30 Free Google Reviews
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
          Need a quick boost? Let us help you generate 30 high-quality, authentic Google reviews for your business. Fill out the form below to claim this offer and connect with our team.
        </p>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl border-2 border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100 bg-white"
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none focus:ring-2 focus:ring-orange-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 cursor-pointer"
          >
            <Send className="h-5 w-5" />
            <span>Claim 30 Free Reviews</span>
          </button>
        </form>

        {submitted && (
          <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-800 text-center font-medium">
            ✓ Submitted successfully! Our team will verify your details and respond shortly.
          </div>
        )}
      </div>
    </div>
  );
}
