"use client";
import React, { useState, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    service: "Complete Digital Growth Setup - Book Free Demo",
  });

  useEffect(() => {
    // Listen for custom event or hash change to open modal
    const handleOpenModal = () => setIsOpen(true);
    const handleHashChange = () => {
      if (window.location.hash === "#book-demo") {
        setIsOpen(true);
        // Remove hash so it can be triggered again later if needed
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
      }
    };

    window.addEventListener("open-lead-modal", handleOpenModal);
    window.addEventListener("hashchange", handleHashChange);
    
    // Check initial hash on mount
    handleHashChange();

    return () => {
      window.removeEventListener("open-lead-modal", handleOpenModal);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || submitted || loading) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setSubmitted(true);
      
      const waText = encodeURIComponent(
        `Hi Amit & EnquiryBazaar Team,\n\nI want to book a Free Demo.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🏢 Business: ${formData.businessName || "N/A"}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
        setIsOpen(false);
        setSubmitted(false);
        setFormData(prev => ({ ...prev, name: "", phone: "", businessName: "" }));
      }, 1500);

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Redirecting to WhatsApp...");
      window.open(`https://wa.me/918887048276?text=Hi, I want to book a Free Demo.`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 h-8 w-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="p-6 sm:p-8">
          <h3 className={`text-[20px] font-bold text-[#001A55] mb-1 ${jakarta.className}`}>Book Your Free Demo</h3>
          <p className="text-[13px] text-slate-500 mb-6">Drop your details below and we'll connect instantly.</p>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center">
              <CheckCircle2 className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
              <p className="text-[14px] font-bold text-emerald-800">Request Sent Successfully!</p>
              <p className="text-[12px] text-emerald-600 mt-1">Connecting you to our WhatsApp...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Amit Sharma"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Business Name / Factory Name</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Swastik Trading Co."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none"
                />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">WhatsApp / Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-[14px] focus:border-[#FE5905] focus:ring-2 focus:ring-orange-100 outline-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-6 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-600 active:scale-95 disabled:opacity-70 mt-2"
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Submitting...</>
                ) : (
                  <><Send className="h-4 w-4" /> Get Free Demo</>
                )}
              </button>
            </form>
          )}
        </div>
        <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 text-center">
          <p className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> 100% Confidential Discovery
          </p>
        </div>
      </div>
    </div>
  );
}
