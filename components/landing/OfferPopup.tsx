"use client";

import React, { useState, useEffect } from "react";
import { X, Gift, Send, Loader2, CheckCircle2, Star } from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    industry: "",
    city: "",
    service: "Claim 30 Free Reviews - GMB Offer",
  });

  useEffect(() => {
    // Check if the user has already submitted the form
    const hasSubmitted = localStorage.getItem("offerSubmitted");
    const hasClosed = sessionStorage.getItem("offerClosed");

    if (!hasSubmitted && !hasClosed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("offerClosed", "true"); // Prevent it from popping up again in the same session
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || isSubmitted || loading) return;
    
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setIsSubmitted(true);
      localStorage.setItem("offerSubmitted", "true"); // Never show again permanently
      
      const waText = encodeURIComponent(
        `Hi Amit & EnquiryBazaar Team,\n\nI want to claim the 30 Free Reviews Offer.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🏢 Factory: ${formData.businessName || "N/A"}\n📦 Product: ${formData.industry || "N/A"}\n📍 City: ${formData.city || "N/A"}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
        setIsOpen(false);
      }, 1500);

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Redirecting to WhatsApp...");
      window.open(`https://wa.me/918887048276?text=Hi, I want to claim the 30 Free Reviews Offer.`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-lg overflow-hidden relative animate-in zoom-in-95 duration-300">
        
        {/* Decorative Header Background */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[#001A55] to-blue-900">
          {/* Abstract pattern */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>

        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 h-8 w-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10 backdrop-blur-md"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative pt-6 px-6 sm:px-8 pb-8 max-h-[90vh] overflow-y-auto overflow-x-hidden">
          <div className="mx-auto w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-4 relative z-10 border border-slate-100">
            <Star className="h-8 w-8 text-[#FE5905] fill-[#FE5905]" />
          </div>

          <div className="text-center mb-6">
            <div className="text-sm font-bold tracking-wider text-[#FE5905] uppercase mb-1">Exclusive Offer</div>
            <h3 className={`text-[24px] font-extrabold text-[#001A55] mb-2 leading-tight ${jakarta.className}`}>
              Get 30 Free Google Reviews
            </h3>
            <p className="text-[14px] text-slate-500">
              Need a quick boost? Let us help you generate 30 high-quality, authentic Google reviews for your business. Fill out the form below to claim this offer and connect with our team.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl text-center">
              <CheckCircle2 className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
              <p className="text-[16px] font-bold text-emerald-800">Offer Claimed!</p>
              <p className="text-[13px] text-emerald-600 mt-1">Connecting you to our WhatsApp to apply it...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Factory / Business Name</label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Packaging Works"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Product / Industry</label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Candles & Fragrances"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-slate-700 mb-1.5">City / Factory Location</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Surat, Gujarat"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-slate-50 focus:bg-white"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={loading || isSubmitted}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-4 text-[15px] font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 disabled:opacity-70 mt-4"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Securing Offer...</>
                ) : (
                  <><Send className="h-4 w-4" /> Claim 30 Free Reviews</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
