"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Globe, CheckCircle2, MessageSquare, Loader2, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIssue?: string;
}

export function AppointmentBookingModal({
  isOpen,
  onClose,
  defaultIssue = "Choose Hosting Plan",
}: AppointmentBookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [issueType, setIssueType] = useState(defaultIssue);
  const [timezone, setTimezone] = useState("Asia/Kolkata (IST)");
  const [preferredSlot, setPreferredSlot] = useState("Morning (10:00 AM - 1:00 PM)");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (defaultIssue) {
      setIssueType(defaultIssue);
    }
  }, [defaultIssue]);

  useEffect(() => {
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (userTz) {
        setTimezone(`${userTz} (Local Time)`);
      }
    } catch {
      setTimezone("Asia/Kolkata (IST)");
    }
  }, []);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!name || (!phone && !email)) {
      setErrorMessage("Please enter your name and at least a WhatsApp number or email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/hosting-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          issueType,
          timezone,
          preferredSlot,
          notes,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.error || "Failed to submit booking. Please try again or WhatsApp directly.");
      }
    } catch (err) {
      setErrorMessage("Something went wrong. Please reach out via WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hi EnquiryBazaar Developer, I want to book a free 15-min hosting guidance session.\n\nName: ${name || "Visitor"}\nTopic: ${issueType}\nTimezone: ${timezone}\nSlot: ${preferredSlot}\nNotes: ${notes || "None"}`
    );
    return `https://wa.me/918887048276?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001A55] to-slate-900 p-5 text-white">
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 rounded-full p-1 text-slate-300 hover:text-white hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span>100% Free · 15-Minute Session</span>
          </div>

          <h3 className="mt-2 text-lg sm:text-xl font-black tracking-tight text-white">
            Book Free Developer Consultation
          </h3>
          <p className="mt-1 text-xs text-slate-300">
            Choose the right hosting plan, save money on business email, or get DNS &amp; VPS setup guidance before you spend a single rupee.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="mt-4 text-lg font-black text-slate-900">
                Consultation Request Received!
              </h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Thank you, <strong>{name}</strong>! Our developer will review your request for <strong>{issueType}</strong> and connect with you for your preferred time slot ({preferredSlot}).
              </p>

              {/* Instant WhatsApp Reach */}
              <div className="mt-6 rounded-xl bg-emerald-50 p-4 border border-emerald-200 text-left">
                <div className="text-xs font-bold text-emerald-900">
                  Want an immediate reply?
                </div>
                <p className="mt-1 text-[11px] text-emerald-700">
                  Click below to open WhatsApp with your booking details already typed out:
                </p>
                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                >
                  <WhatsAppIcon className="h-4 w-4 text-white" />
                  <span>Confirm Instantly on WhatsApp</span>
                </a>
              </div>

              <button
                onClick={onClose}
                type="button"
                className="mt-5 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="rounded-lg bg-red-50 p-2.5 text-xs text-red-700 border border-red-200">
                  {errorMessage}
                </div>
              )}

              {/* Topic Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-800">
                  What do you need help with?
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs font-medium text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                >
                  <option value="Choose Hosting Plan">Help me choose the right hosting plan</option>
                  <option value="Business Email & DNS Setup">Business Email setup &amp; DNS MX records</option>
                  <option value="VPS & Next.js Deployment">Deploy Next.js / Node.js on VPS</option>
                  <option value="Hostinger Coupon & Discount Advice">Best Hostinger coupon &amp; renewal pricing advice</option>
                  <option value="Website Migration Help">Migrate existing website without downtime</option>
                  <option value="Other Technical Question">Other technical hosting question</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-800">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-800">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                />
              </div>

              {/* Timezone & Preferred Slot */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="flex items-center gap-1 text-xs font-bold text-slate-800">
                    <Globe className="h-3.5 w-3.5 text-slate-400" />
                    <span>Your Timezone</span>
                  </label>
                  <input
                    type="text"
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-600 bg-slate-50 focus:border-[#FE5905] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-1 text-xs font-bold text-slate-800">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2 PM - 5 PM)</option>
                    <option value="Evening (6:00 PM - 9:00 PM)">Evening (6 PM - 9 PM)</option>
                    <option value="Flexible / Immediate WhatsApp">Flexible / Chat on WhatsApp</option>
                  </select>
                </div>
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-800">
                  Quick Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Looking to host a Next.js website and setup 3 emails for my team."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:border-[#FE5905] focus:outline-none focus:ring-1 focus:ring-[#FE5905]"
                />
              </div>

              {/* Scope Notice */}
              <div className="rounded-lg bg-amber-50 p-2.5 border border-amber-200/80 text-[11px] text-amber-800 leading-relaxed">
                <strong>Free Consultation Scope:</strong> 15-minute 1-on-1 strategy call covering architecture, plan selection, coupon guidance, and DNS checklists. Full hands-on migration or server management is available as custom paid services.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 transition active:scale-95 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Booking Session...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    <span>Confirm Free 15-Min Booking</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
