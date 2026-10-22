"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2, PhoneCall, Sparkles, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function AiSearchContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    service: "Complete Generative Engine Optimization (GEO)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          businessName: `${formData.businessName} [Website: ${formData.websiteUrl}]`,
          service: `GEO / AI Search: ${formData.service}`,
          city: "AI Search Inquiry",
          message: `Website: ${formData.websiteUrl} | Notes: ${formData.message}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);

      const waText = encodeURIComponent(
        `Hi Amit & EnquiryBazaar Team,\n\nI submitted an AI Search Optimization (GEO) inquiry on your website:\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🏢 Company: ${formData.businessName || "Not specified"}\n🌐 Website: ${formData.websiteUrl || "Not specified"}\n🎯 Scope: ${formData.service}${formData.message ? `\n💬 Note: ${formData.message}` : ""}\n\nPlease share the AI visibility audit and project roadmap.`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
      }, 800);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className="relative py-16 sm:py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Get Recommended by AI</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready to Claim Your Position in AI Search?
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Every day, buyers in your sector ask AI for recommendations. Don&apos;t let your competitors capture the citation consensus. Request a consultation with our technical team today.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Custom Schema.org Knowledge Graph architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Standardized <code>llms.txt</code> crawler implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Direct strategy led by Software Engineer <strong>Amit Pandey</strong></span>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2 mt-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Direct Helpline:
              </div>
              <div className="flex flex-col sm:flex-row gap-3 text-sm font-semibold text-white">
                <a href="tel:+919696717305" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <PhoneCall className="h-4 w-4 text-orange-400" />
                  <span>+91 96967 17305</span>
                </a>
                <a href="tel:+918887048276" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <PhoneCall className="h-4 w-4 text-orange-400" />
                  <span>+91 88870 48276</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 text-slate-900 shadow-xl">
              
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    We have received your website and target queries. Our engineering team is preparing your AI citation audit report.
                  </p>
                  <div className="pt-2">
                    <a
                      href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20just%20submitted%20the%20AI%20search%20optimization%20inquiry%20on%20your%20website."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 transition-colors"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="border-b border-slate-100 pb-2.5">
                    <h3 className="text-lg font-bold text-slate-900">
                      Request AI Visibility Roadmap
                    </h3>
                  </div>

                  {errorMsg && (
                    <div className="rounded-lg bg-rose-50 p-2.5 text-xs text-rose-700 font-medium border border-rose-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Verma"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Industrial Systems"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Website URL
                      </label>
                      <input
                        type="url"
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        placeholder="https://yourcompany.com"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Objective
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none bg-white"
                    >
                      <option value="Complete Generative Engine Optimization (GEO)">
                        Complete Generative Engine Optimization (GEO)
                      </option>
                      <option value="Rank in ChatGPT Search & Perplexity">
                        Get Cited in ChatGPT Search &amp; Perplexity
                      </option>
                      <option value="Entity Knowledge Graph & Schema Setup">
                        Entity Knowledge Graph &amp; Schema Architecture
                      </option>
                      <option value="llms.txt Protocol Setup">
                        Standardized llms.txt &amp; AI Crawler Optimization
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Queries / Specific Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. When someone asks about the best supplier for X, we want our brand recommended..."
                      className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-[#FE5905] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#ff6f26] transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit for AI Audit &amp; Strategy</span>
                        <Send className="h-3.5 w-3.5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Your strategic information is kept strictly confidential.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
