"use client";

import React, { useState } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { HostingHero } from "@/components/hosting/HostingHero";
import { PlanFilterTabs, FilterCategory } from "@/components/hosting/PlanFilterTabs";
import { HostingPlanCard } from "@/components/hosting/HostingPlanCard";
import { EmailVsGoogleSavings } from "@/components/hosting/EmailVsGoogleSavings";
import { ConsultationBanner } from "@/components/hosting/ConsultationBanner";
import { HostingerFaqSection } from "@/components/hosting/HostingerFaqSection";
import { AppointmentBookingModal } from "@/components/hosting/AppointmentBookingModal";
import { HostingStructuredData } from "@/components/hosting/HostingStructuredData";
import { hostingPlans, DEFAULT_COUPON_CODE } from "@/lib/hostingData";
import { Sparkles, Copy, Check, MessageSquareCode } from "lucide-react";

export default function HostingPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalDefaultIssue, setModalDefaultIssue] = useState("Choose Hosting Plan");
  const [copiedSticky, setCopiedSticky] = useState(false);

  const filteredPlans =
    activeCategory === "all"
      ? hostingPlans
      : hostingPlans.filter((p) => p.category === activeCategory);

  const handleOpenBooking = (issue?: string) => {
    if (issue) setModalDefaultIssue(issue);
    setIsModalOpen(true);
  };

  const handleCopySticky = () => {
    navigator.clipboard.writeText(DEFAULT_COUPON_CODE);
    setCopiedSticky(true);
    setTimeout(() => setCopiedSticky(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      {/* JSON-LD Schema for Google & AI Search Bots */}
      <HostingStructuredData />

      {/* Global Header */}
      <Header />

      <main className="flex-1 pb-16 sm:pb-20">
        {/* Mobile-First Hero */}
        <HostingHero onOpenBooking={handleOpenBooking} />

        {/* Plans Section */}
        <section id="plans-section" className="py-12 sm:py-16 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="mx-auto max-w-3xl text-center mb-8">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#FE5905]">
                11 Verified Hostinger Products
              </span>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-[#001A55] sm:text-3xl lg:text-4xl">
                Choose Your Plan with Verified Referral Link
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Click any plan to open Hostinger with maximum pre-applied discounts. Then enter code{" "}
                <span className="font-mono font-bold text-[#FE5905]">{DEFAULT_COUPON_CODE}</span> at checkout.
              </p>
            </div>

            {/* Mobile Filter Tabs */}
            <div className="mb-8">
              <PlanFilterTabs
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                plans={hostingPlans}
              />
            </div>

            {/* Responsive Plans Grid (Mobile-First: 1 col, md: 2 cols, lg: 3 cols) */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredPlans.map((plan) => (
                <HostingPlanCard
                  key={plan.id}
                  plan={plan}
                  onOpenBooking={handleOpenBooking}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Email vs Google Workspace Cost Savings Matrix */}
        <EmailVsGoogleSavings onOpenBooking={handleOpenBooking} />

        {/* Free Developer Consultation Core USP Banner */}
        <ConsultationBanner onOpenBooking={handleOpenBooking} />

        {/* SEO & AI Search FAQ Accordion */}
        <HostingerFaqSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile Quick Coupon & Help Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2.5 sm:hidden">
        <div className="flex items-center justify-between gap-2">
          
          <button
            onClick={handleCopySticky}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white border border-white/20 active:scale-95 transition"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[#FE5905]">{DEFAULT_COUPON_CODE}</span>
            {copiedSticky ? (
              <span className="text-[10px] text-emerald-400 font-semibold">(Copied!)</span>
            ) : (
              <span className="text-[10px] text-slate-400">(Tap to Copy)</span>
            )}
          </button>

          <button
            onClick={() => handleOpenBooking("Mobile Quick Consultation")}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#FE5905] px-3 py-2 text-xs font-bold text-white shadow-md active:scale-95 transition"
          >
            <MessageSquareCode className="h-3.5 w-3.5" />
            <span>Free Dev Help</span>
          </button>

        </div>
      </div>

      {/* Appointment Booking Modal */}
      <AppointmentBookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultIssue={modalDefaultIssue}
      />
    </div>
  );
}
