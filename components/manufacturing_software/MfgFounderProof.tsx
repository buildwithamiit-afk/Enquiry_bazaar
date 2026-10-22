"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Code2, ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function MfgFounderProof() {
  return (
    <section id="founder-section" className="relative py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
            
            {/* Left Col: Founder Bio & Metrics */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
                <Code2 className="h-3.5 w-3.5 text-[#FE5905]" />
                <span>Engineering Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#001A55]">
                Direct Technical Consultation with the Architect
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                Unlike traditional marketing agencies where factory owners are handed off to junior coordinators, every software architecture, database schema, and product catalog is designed with direct technical oversight from <strong className="text-slate-900 font-semibold">Amit Pandey</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                  <div className="text-xl font-bold text-[#FE5905]">100+</div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">Platforms Built</div>
                  <div className="text-[11px] text-slate-500">Web &amp; software systems</div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                  <div className="text-xl font-bold text-[#001A55]">20+</div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">Manufacturing Sectors</div>
                  <div className="text-[11px] text-slate-500">Packaging, CNC, chemicals, etc.</div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                  <div className="text-xl font-bold text-emerald-600">100%</div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">Code Handover</div>
                  <div className="text-[11px] text-slate-500">No recurring agency lock-in</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Engineering-first approach:</strong> Clean architecture, strict TypeScript and Next.js standards.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Transparent pricing &amp; milestones:</strong> Structured deliverables with no hidden retainers.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Direct WhatsApp advisory:</strong> Discuss your technical requirements directly with the lead engineer.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/918887048276?text=Hi%20Amit%2C%20I%20am%20a%20factory%20owner%20and%20would%20like%20to%20consult%20with%20you%20regarding%20software%2Fwebsite%20development."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#FE5905] px-5 py-3 text-sm font-semibold text-white shadow-xs hover:bg-[#ff6f26] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Connect with Amit Pandey on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Col: Clean Profile Card */}
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#001A55] text-2xl font-bold text-white shadow-xs">
                  AP
                </div>

                <h3 className="mt-3.5 text-lg font-bold text-slate-900">Amit Pandey</h3>
                <p className="text-xs font-medium text-[#FE5905]">Founder &amp; Chief Software Architect</p>
                <p className="text-xs text-slate-500 mt-0.5">EnquiryBazaar • ex-Devlo.in</p>

                <div className="mt-4 pt-4 border-t border-slate-200/80 text-xs text-slate-600 space-y-1.5 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Core Specialty:</span>
                    <span className="font-medium text-slate-900">Full-Stack &amp; Industrial Web</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Consultation:</span>
                    <span className="font-medium text-emerald-700">Available on WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
