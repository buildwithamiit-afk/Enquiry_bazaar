"use client";

import React from "react";
import { MessageSquareCode, Calendar, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

interface ConsultationBannerProps {
  onOpenBooking: (issue?: string) => void;
}

export function ConsultationBanner({ onOpenBooking }: ConsultationBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#001A55] via-slate-900 to-[#001A55] py-12 text-white sm:py-16">
      {/* Background Accent */}
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#FE5905]/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/60 px-3 py-1 text-xs font-bold text-emerald-300">
              <Zap className="h-3.5 w-3.5 text-emerald-400" />
              <span>Core EnquiryBazaar Differentiator</span>
            </div>

            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Not Sure Which Hosting to Buy?{" "}
              <span className="text-[#FE5905]">Talk to a Developer First.</span>
            </h2>

            <p className="mt-3 text-sm text-slate-300 sm:text-base leading-relaxed">
              Never waste money on the wrong server specs or struggle alone with broken DNS records, SSL errors, or email bouncing. Book a free 15-minute consultation during our available hours.
            </p>

            {/* Scope Breakdown */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>Before Purchase</span>
                </div>
                <p className="mt-1 text-xs text-slate-300 leading-normal">
                  Plan selection (Shared vs VPS vs Cloud), pricing transparency, and discount verification.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>After Purchase</span>
                </div>
                <p className="mt-1 text-xs text-slate-300 leading-normal">
                  DNS pointing, MX business email configuration, and Next.js / Node.js deployment roadmap.
                </p>
              </div>
            </div>
          </div>

          {/* Right Action Box */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#FE5905]/20 text-[#FE5905] mb-3">
                <Calendar className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-black text-white">
                Book Your Free 15-Minute Slot
              </h3>

              <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                Sessions held over Google Meet or WhatsApp call. Auto-localized to your timezone.
              </p>

              <div className="mt-5 space-y-2.5">
                <button
                  onClick={() => onOpenBooking("Choose Hosting Plan")}
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:bg-orange-600 active:scale-95"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Free Consultation Now</span>
                </button>

                <a
                  href="https://wa.me/918887048276?text=Hi%2C%20I%20have%20a%20question%20about%20choosing%20the%20right%20hosting%20and%20business%20email%20plan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/50 bg-emerald-950/40 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-300 hover:bg-emerald-900/40 transition"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                  <span>Chat with Developer on WhatsApp</span>
                </a>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero sales pressure. 100% technical advice.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
