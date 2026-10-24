"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  PhoneCall, 
  ShoppingBag, 
  MapPin, 
  Clock, 
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { SHOPIFY_METADATA } from "./shopifyData";

export function ShopifyContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    products: "",
    storeType: "Both (D2C & B2B Wholesale)",
    budgetRange: "Growth Store (Custom Design & Scale)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg("Please enter your name and WhatsApp number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          businessName: formData.businessName || "Shopify Ahmedabad Client",
          service: `Shopify Development Ahmedabad [Type: ${formData.storeType}]`,
          city: "Ahmedabad, Gujarat",
          message: `Products Sold: ${formData.products} | Budget: ${formData.budgetRange} | Notes: ${formData.message}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit proposal request. Please try again.");
      }

      setSubmitted(true);

      const waText = encodeURIComponent(
        `Hi Amit & EnquiryBazaar Team,\n\nI just requested a Shopify quote for my Ahmedabad business:\n\n👤 Name: ${formData.name}\n📞 WhatsApp: ${formData.phone}\n🏢 Business: ${formData.businessName || "Not specified"}\n📦 Products: ${formData.products || "Not specified"}\n🛒 Store Type: ${formData.storeType}\n💰 Budget Range: ${formData.budgetRange}${formData.message ? `\n💬 Note: ${formData.message}` : ""}\n\nPlease share the detailed proposal and milestone timeline.`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
      }, 700);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission failed";
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-form" className="relative py-16 sm:py-24 bg-[#00123D] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[#FE5905]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Direct Consultation Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-semibold text-orange-300">
              <ShoppingBag className="h-3.5 w-3.5 text-[#FE5905]" />
              <span>Free 15-Minute Technical Consultation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Ready to Launch or Scale Your Shopify Store in Ahmedabad?
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Tell us what you sell and who you sell to. We will analyze your catalog, recommend the right architecture, and send a clear scope, timeline, and fixed quote with no obligation.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Founder-led review:</strong> Direct discussion with software engineer Amit Pandey.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>100% Asset Ownership:</strong> Store, code, and customer data stay in your own account.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Fixed quotation in 24 to 48 hours:</strong> Transparent milestone deliverables in writing.
                </span>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">
                Instant Direct Channels:
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918887048276?text=${encodeURIComponent(
                    "Hi Amit, I want to discuss a Shopify store development for my Ahmedabad business."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-emerald-500 transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp: +91 88870 48276</span>
                </a>

                <a
                  href="tel:+919696717305"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <PhoneCall className="h-4 w-4 text-[#FE5905]" />
                  <span>Call: +91 96967 17305</span>
                </a>
              </div>
            </div>

            {/* NAP (Name, Address, Phone) Block for Ahmedabad Local SEO */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 space-y-2 mt-6">
              <div className="font-bold text-white text-sm">
                EnquiryBazaar Ahmedabad Service Office
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#FE5905] shrink-0 mt-0.5" />
                <span>{SHOPIFY_METADATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Working Hours: {SHOPIFY_METADATA.businessHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-sky-400 shrink-0" />
                <span>Primary Helpline: {SHOPIFY_METADATA.phoneDisplay} / +91 88870 48276</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Get a Free Shopify Quote &amp; Scope
                </h3>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                  ⚡ 24-Hour Proposal
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Proposal Request Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Software Architect Amit Pandey is reviewing your requirements and will connect via WhatsApp/call within 24 hours.
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/918887048276?text=${encodeURIComponent(
                        `Hi Amit, I submitted a quote request for ${formData.businessName || "my store"}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-emerald-500"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      <span>Open in WhatsApp Now</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-left">
                  {errorMsg && (
                    <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs text-rose-300 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name <span className="text-[#FE5905]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        WhatsApp Number <span className="text-[#FE5905]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      />
                    </div>
                  </div>

                  {/* Business Name & What do you sell */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Gujarat Silk Mills / Heritage Sarees"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        What Do You Sell?
                      </label>
                      <input
                        type="text"
                        value={formData.products}
                        onChange={(e) => setFormData({ ...formData, products: e.target.value })}
                        placeholder="e.g. Sarees, Industrial Chemicals, Boxes, Jewellery"
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      />
                    </div>
                  </div>

                  {/* Store Type & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Store Type
                      </label>
                      <select
                        value={formData.storeType}
                        onChange={(e) => setFormData({ ...formData, storeType: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-slate-800 px-3.5 py-2.5 text-sm text-white focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      >
                        <option value="D2C Brand (Retail Customers)">D2C Brand (Retail Customers)</option>
                        <option value="B2B Wholesale / Manufacturer Portal">B2B Wholesale / Manufacturer Portal</option>
                        <option value="Both (D2C & B2B Wholesale)">Both (D2C &amp; B2B Wholesale)</option>
                        <option value="Store Migration (WooCommerce/Magento -> Shopify)">Store Migration (Woo/Magento &rarr; Shopify)</option>
                        <option value="Theme Customization or Speed Fix">Theme Customization or Speed Fix</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Preferred Solution Package
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-slate-800 px-3.5 py-2.5 text-sm text-white focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                      >
                        <option value="Starter Store (Up to 50 Products)">Starter Store (Up to 50 Products)</option>
                        <option value="Growth Store (Custom Design & Scale)">Growth Store (Custom Design &amp; Scale)</option>
                        <option value="B2B Wholesale Store (Dealers & MOQ)">B2B Wholesale Store (Dealers &amp; MOQ)</option>
                        <option value="Custom / Plus / Headless Storefront">Custom / Plus / Headless Storefront</option>
                        <option value="Recommend after reviewing products">Recommend after reviewing products</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Notes / Specific Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share current store URL, number of products, required integrations (Tally, Shiprocket, Razorpay), or target launch date..."
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-slate-400 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] py-3.5 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-[#ff6f26] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Preparing Your Technical Proposal...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Get Free Shopify Quote &amp; Scope</span>
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-400">
                      🔒 No spam. 100% confidential. Fixed written proposal sent within 24 to 48 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
