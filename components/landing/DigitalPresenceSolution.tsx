"use client";
import React, { useState } from "react";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { ArrowRight, Search, Globe, Building2, FileText, CheckCircle2, ChevronRight, Bell, Star, MoreVertical, LayoutDashboard, Users, MessageSquare, Phone, MapPin, X, Send, Loader2 } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export function DigitalPresenceSolution() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    service: "Complete Digital Growth Setup",
  });

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
        `Hi Amit & EnquiryBazaar Team,\n\nI want to book a free demo.\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🏢 Company: ${formData.businessName || "Not specified"}\n🎯 Service: ${formData.service}`
      );

      setTimeout(() => {
        window.open(`https://wa.me/918887048276?text=${waText}`, "_blank");
      }, 1200);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Redirecting to WhatsApp...");
      window.open(`https://wa.me/918887048276?text=Hi, I want to book a demo.`, "_blank");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="solution" className={`relative bg-[#F8FAFC] py-16 lg:py-24 overflow-hidden ${inter.className}`}>
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <div className="mb-6 inline-flex items-center rounded-full bg-white border border-slate-200 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-[#001A55] shadow-sm">
            The Buyer Journey
          </div>
          
          <h2 className={`mb-6 text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold tracking-tight text-[#001A55] leading-[1.1] ${jakarta.className}`}>
            What If Your Next Buyer <br className="hidden sm:block" />
            <span className="text-[#FE5905]">Can’t Find You?</span>
          </h2>
          
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.6] text-slate-500 max-w-[600px] mx-auto px-4 sm:px-0">
            Before saying yes, buyers search.<br className="hidden sm:block" />
            Make sure they find your business, not just a generic listing.
          </p>
        </div>

        {/* JOURNEY CONTAINER */}
        <div className="relative mx-auto mt-12 lg:mt-16">
          
          {/* Continuous Vertical Line */}
          <div className="absolute left-[24px] lg:left-1/2 top-4 bottom-12 w-[2px] bg-gradient-to-b from-slate-200 via-slate-300 to-transparent lg:-translate-x-1/2 z-0"></div>

          {/* 01 — THEY SEARCH */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center mb-20 lg:mb-24">
            <div className="lg:hidden absolute left-[24px] top-1.5 h-4 w-4 rounded-full bg-white border-[4px] border-[#FE5905] -translate-x-1/2 z-20 shadow-sm"></div>
            
            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 lg:pr-16 text-left lg:text-right mb-8 lg:mb-0">
              <div className="inline-flex lg:hidden items-center gap-2 mb-3">
                <span className="text-[14px] font-bold text-slate-300">01</span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">They Search</span>
              </div>
              <div className="hidden lg:flex items-center justify-end gap-3 mb-4">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">They Search</span>
                <span className="text-[14px] font-bold text-slate-300">01</span>
              </div>
              <h3 className={`text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#001A55] leading-tight max-w-[400px] ml-auto ${jakarta.className}`}>
                Your next buyer could already be searching.
              </h3>
            </div>

            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-[4px] border-[#FE5905] shadow-[0_0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 z-20"></div>

            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-16">
              {/* Ultra-realistic Google Search Mockup */}
              <div className="bg-white rounded-[16px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-200/60 overflow-hidden relative group w-full lg:max-w-[460px]">
                <div className="h-[36px] sm:h-[40px] bg-[#F1F5F9] border-b border-slate-200 flex items-center px-3 sm:px-4 gap-3 sm:gap-4">
                  <div className="flex gap-1.5 hidden sm:flex">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                    <div className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                  </div>
                  <div className="flex-1 h-[24px] sm:h-[26px] bg-white rounded-md border border-slate-200 shadow-sm flex items-center justify-center px-2 sm:px-3 gap-2">
                    <Search className="h-3 w-3 text-slate-400" />
                    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">google.com/search</span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 bg-white">
                  <div className="flex items-center gap-2 sm:gap-3 bg-white border border-slate-200 shadow-sm rounded-full h-[40px] sm:h-[44px] px-3 sm:px-4 mb-5 sm:mb-6">
                    <span className="text-[#4285f4]"><Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" /></span>
                    <span className="text-[13px] sm:text-[14px] text-slate-800 flex-1 truncate">Home Decor Manufacturer India</span>
                  </div>

                  <div className="flex flex-col gap-5 sm:gap-6">
                    <div className="opacity-50">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] rounded-full bg-slate-200 shrink-0"></div>
                        <div className="flex gap-1 items-center truncate">
                          <span className="text-[11px] sm:text-[12px] text-[#202124] font-medium">IndiaMart</span>
                          <span className="text-[11px] sm:text-[12px] text-[#4d5156] font-normal truncate">› dir › home-decor</span>
                        </div>
                      </div>
                      <div className="text-[15px] sm:text-[18px] text-[#1a0dab] mb-1 leading-[1.2] hover:underline cursor-pointer line-clamp-1">Top 100 Home Decor Manufacturers in India</div>
                      <p className="text-[12px] sm:text-[13px] text-[#4d5156] leading-[1.4] line-clamp-2">Find the best home decor manufacturers, suppliers, and exporters in India. Get contact details and address of companies...</p>
                    </div>

                    <div className="relative p-2 sm:p-3 -mx-2 sm:-mx-3 rounded-xl hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] rounded-full bg-[#001A55] text-white flex items-center justify-center text-[9px] sm:text-[10px] font-bold shadow-sm shrink-0">AE</div>
                        <div className="flex gap-1 items-center truncate">
                          <span className="text-[12px] sm:text-[13px] text-[#202124] font-medium">Artisan Exports</span>
                          <span className="text-[12px] sm:text-[13px] text-[#4d5156] truncate">› artisanexports.com</span>
                        </div>
                      </div>
                      <div className="text-[16px] sm:text-[20px] text-[#1a0dab] mb-1.5 leading-[1.2] hover:underline cursor-pointer">Artisan Exports | Premium Home Decor Manufacturer</div>
                      <p className="text-[13px] sm:text-[14px] text-[#4d5156] leading-[1.4] mb-2 line-clamp-2 sm:line-clamp-none">Direct manufacturer and wholesale exporter of premium metal, wood, and ceramic home decor. Custom designs and OEM manufacturing available.</p>
                      
                      <div className="hidden sm:flex gap-4 sm:gap-6 mt-2">
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] text-[#1a0dab] hover:underline cursor-pointer">View Catalogue</span>
                          <span className="text-[12px] text-[#4d5156]">Download our 2026 collection.</span>
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] text-[#1a0dab] hover:underline cursor-pointer">Factory Video</span>
                          <span className="text-[12px] text-[#4d5156]">See our manufacturing process.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 02 — THEY CHECK YOU */}
          <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center mb-20 lg:mb-24">
            <div className="lg:hidden absolute left-[24px] top-1.5 h-4 w-4 rounded-full bg-white border-[4px] border-[#FE5905] -translate-x-1/2 z-20 shadow-sm"></div>
            
            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-16 text-left mb-8 lg:mb-0">
              <div className="inline-flex items-center gap-2 mb-3 lg:mb-4">
                <span className="text-[14px] font-bold text-slate-300">02</span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">They Check</span>
              </div>
              <h3 className={`text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#001A55] leading-tight mb-4 max-w-[400px] ${jakarta.className}`}>
                They don't just check the product.<br />They check the company.
              </h3>
            </div>

            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-[4px] border-[#FE5905] shadow-[0_0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 z-20"></div>

            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 lg:pr-16 relative">
              <div className="bg-white rounded-[16px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden relative w-full lg:max-w-[460px] lg:ml-auto">
                <div className="bg-white border-b border-slate-100 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#001A55]">
                    <div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-[#001A55] text-white flex items-center justify-center shrink-0">
                      <Building2 className="h-3 w-3" />
                    </div>
                    <span className="text-[13px] sm:text-[15px] font-extrabold tracking-tight truncate">ARTISAN EXPORTS</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 sm:gap-5 text-[11px] sm:text-[12px] font-semibold text-slate-500 uppercase tracking-wide">
                    <span className="text-[#001A55]">Factory</span>
                    <span>Products</span>
                  </div>
                </div>
                <div className="relative h-[160px] sm:h-[200px] bg-slate-900 flex items-center px-6 sm:px-8 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
                  <div className="relative z-10 max-w-[280px]">
                    <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[9px] sm:text-[10px] text-white font-medium mb-2 sm:mb-3 border border-white/20">
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" /> ISO 9001:2015 Certified
                    </div>
                    <h4 className={`text-white text-[18px] sm:text-[24px] font-bold leading-tight mb-3 ${jakarta.className}`}>Exporting Premium Decor Worldwide</h4>
                    <button className="bg-white text-[#001A55] text-[11px] sm:text-[12px] font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded shadow-lg">Download Catalogue</button>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute top-[50%] -right-4 lg:-right-8 w-[260px] lg:w-[280px] bg-white rounded-[16px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-100 p-4 z-20">
                <div className="flex gap-3 mb-3">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-[url('https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=100')] bg-cover bg-center border border-slate-200 shrink-0"></div>
                  <div>
                    <h5 className="text-[14px] lg:text-[15px] font-bold text-slate-900 leading-tight">Artisan Exports - Manufacturer</h5>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-[12px] lg:text-[13px] font-bold text-slate-700">4.9</span>
                      <div className="flex text-[#FABB05] gap-0.5">
                        <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-current" />
                        <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-current" />
                        <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-current" />
                        <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-current" />
                        <Star className="h-3 w-3 lg:h-3.5 lg:w-3.5 fill-current" />
                      </div>
                      <span className="text-[11px] lg:text-[12px] text-blue-600 hover:underline cursor-pointer">(86)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-400 mt-0.5 shrink-0" />
                  <span className="text-[12px] lg:text-[13px] text-slate-600 leading-tight">Plot 42, Industrial Area Phase 1, Jodhpur</span>
                </div>
                <div className="flex items-center gap-2 mb-3 lg:mb-4">
                  <Phone className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-400 shrink-0" />
                  <span className="text-[12px] lg:text-[13px] text-blue-600 hover:underline cursor-pointer">098765 43210</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 h-7 lg:h-8 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center gap-1 text-[11px] lg:text-[12px] font-semibold text-blue-700 cursor-pointer hover:bg-blue-100 transition-colors">
                    <Globe className="h-3 w-3 lg:h-3.5 lg:w-3.5" /> Website
                  </div>
                  <div className="flex-1 h-7 lg:h-8 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center gap-1 text-[11px] lg:text-[12px] font-semibold text-blue-700 cursor-pointer hover:bg-blue-100 transition-colors">
                    <MapPin className="h-3 w-3 lg:h-3.5 lg:w-3.5" /> Directions
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 03 — THEY ENQUIRE */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center mb-20 lg:mb-24">
            <div className="lg:hidden absolute left-[24px] top-1.5 h-4 w-4 rounded-full bg-white border-[4px] border-[#FE5905] -translate-x-1/2 z-20 shadow-md"></div>
            
            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 lg:pr-16 text-left lg:text-right mb-8 lg:mb-0">
              <div className="inline-flex lg:hidden items-center gap-2 mb-3">
                <span className="text-[14px] font-bold text-slate-300">03</span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">They Contact You</span>
              </div>
              <div className="hidden lg:flex items-center justify-end gap-3 mb-4">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">They Contact You</span>
                <span className="text-[14px] font-bold text-slate-300">03</span>
              </div>
              <h3 className={`text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#001A55] leading-tight max-w-[400px] ml-auto ${jakarta.className}`}>
                Now the buyer is interested.
              </h3>
            </div>

            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-[4px] border-[#FE5905] shadow-[0_0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 z-20"></div>

            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-16">
              <div className="bg-white rounded-[20px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] border border-slate-200 p-6 sm:p-8 relative w-full lg:max-w-[460px]">
                <div className="absolute top-0 right-0 -mr-2 -mt-2 sm:-mr-3 sm:-mt-3 h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#FE5905] shadow-[0_0_0_4px_white] sm:shadow-[0_0_0_6px_white] z-10 flex items-center justify-center">
                  <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-white animate-pulse"></div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-100">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl bg-[#001A55]/5 text-[#001A55] shadow-inner shrink-0">
                    <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#FE5905] uppercase tracking-widest mb-0.5 sm:mb-1">New Enquiry</span>
                    <span className="text-[16px] sm:text-[18px] font-bold text-slate-900 leading-none">Just arrived</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
                  <div>
                    <span className="text-[11px] sm:text-[12px] font-semibold text-slate-400 block mb-1">Buyer Details</span>
                    <span className="text-[14px] sm:text-[16px] font-bold text-slate-800">Swastik Trading Co. (Delhi)</span>
                  </div>
                  <div className="bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100">
                    <span className="text-[11px] sm:text-[12px] font-semibold text-slate-400 block mb-1">Message</span>
                    <span className="text-[13px] sm:text-[14px] font-medium text-slate-700 italic line-clamp-3">"Looking for 2000 units of brass decor items for our Q4 inventory. Please share wholesale catalogue..."</span>
                  </div>
                </div>
                <button className="w-full py-3 sm:py-3.5 bg-[#001A55] hover:bg-[#002888] shadow-md rounded-xl text-[13px] sm:text-[14px] font-bold text-white transition-all">
                  Open in Lead Manager →
                </button>
              </div>
            </div>
          </div>

          {/* 04 — YOU DON'T LOSE THE ENQUIRY */}
          <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center mb-20 lg:mb-24">
            <div className="lg:hidden absolute left-[24px] top-1.5 h-4 w-4 rounded-full bg-white border-[4px] border-[#FE5905] -translate-x-1/2 z-20 shadow-md"></div>
            
            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-16 text-left mb-8 lg:mb-0">
              <div className="inline-flex items-center gap-2 mb-3 lg:mb-4">
                <span className="text-[14px] font-bold text-slate-300">04</span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">The Next Step</span>
              </div>
              <h3 className={`text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#001A55] leading-tight mb-6 lg:mb-8 max-w-[400px] ${jakarta.className}`}>
                Every enquiry has a next step.
              </h3>
              
              <div className="flex flex-col gap-3 lg:gap-4">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><CheckCircle2 className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-400" /></div>
                  <span className="text-[14px] lg:text-[15px] font-semibold text-slate-500">New</span>
                </div>
                <div className="w-[2px] h-3 lg:h-4 bg-slate-200 ml-[11px] lg:ml-[15px]"></div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-orange-100 flex items-center justify-center shadow-[0_0_0_4px_rgba(254,89,5,0.1)] shrink-0"><CheckCircle2 className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-[#FE5905]" /></div>
                  <span className="text-[15px] lg:text-[16px] font-bold text-[#001A55]">Catalogue Shared</span>
                </div>
                <div className="w-[2px] h-3 lg:h-4 bg-slate-200 ml-[11px] lg:ml-[15px]"></div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><CheckCircle2 className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-400" /></div>
                  <span className="text-[14px] lg:text-[15px] font-semibold text-slate-500">Follow-up</span>
                </div>
                <div className="w-[2px] h-3 lg:h-4 bg-slate-200 ml-[11px] lg:ml-[15px]"></div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="h-6 w-6 lg:h-8 lg:w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><CheckCircle2 className="h-3.5 w-3.5 lg:h-4 lg:w-4 text-slate-400" /></div>
                  <span className="text-[14px] lg:text-[15px] font-semibold text-slate-500">Won</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-[4px] border-[#FE5905] shadow-[0_0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 z-20"></div>

            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 lg:pr-16">
              <div className="bg-[#f0f2f5] rounded-[16px] sm:rounded-[20px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-300 overflow-hidden relative w-full lg:max-w-[460px] lg:ml-auto flex flex-col h-[280px] sm:h-[320px]">
                <div className="bg-[#00a884] px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 text-white shadow-sm z-10">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 flex items-center justify-center text-[12px] sm:text-[14px] font-bold overflow-hidden border border-white/30 shrink-0">
                    ST
                  </div>
                  <div className="flex flex-col flex-1 truncate">
                    <span className="text-[13px] sm:text-[15px] font-bold leading-tight truncate">Swastik Trading Co.</span>
                    <span className="text-[11px] sm:text-[12px] text-white/80 leading-tight">Online</span>
                  </div>
                  <MoreVertical className="h-4 w-4 sm:h-5 sm:w-5 text-white/90 shrink-0" />
                </div>
                <div className="flex-1 bg-[#efeae2] p-4 sm:p-6 relative overflow-hidden flex flex-col justify-end gap-3 z-0" style={{ backgroundImage: "url('https://i.ibb.co/3s1f9b0/wa-bg.png')", backgroundSize: 'cover', opacity: 0.95 }}>
                  <div className="self-center bg-[#fff8e5] text-[#54656f] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] font-medium shadow-sm mb-1 sm:mb-2 opacity-90 text-center max-w-[85%]">
                    This chat is with a business account.
                  </div>
                  <div className="self-end bg-[#d9fdd3] rounded-lg rounded-tr-none p-1.5 sm:p-2 shadow-sm relative z-10 max-w-[90%] sm:max-w-[85%] border border-[#c1ebb6]">
                    <div className="absolute top-0 -right-1.5 sm:-right-2 w-2 h-3 bg-[#d9fdd3] shadow-[-1px_1px_0_0_#c1ebb6]"></div>
                    <div className="p-1.5 sm:p-2">
                      <p className="text-[12px] sm:text-[14px] text-[#111b21] leading-[1.4] mb-2 sm:mb-3 font-normal">
                        Hi Rajesh,<br/><br/>
                        Thanks for reaching out to Artisan Exports.<br/>
                        Here is our latest 2026 Brass Decor Catalogue.
                      </p>
                      <div className="bg-black/5 rounded p-2 sm:p-3 flex items-center gap-2 sm:gap-3 cursor-pointer hover:bg-black/10 transition-colors">
                        <div className="h-8 w-8 sm:h-10 sm:w-10 bg-[#ff5252] rounded flex items-center justify-center text-white shadow-sm shrink-0">
                          <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div className="flex flex-col flex-1 truncate">
                          <span className="text-[11px] sm:text-[13px] font-bold text-[#111b21] truncate">Artisan-Decor-2026.pdf</span>
                          <span className="text-[10px] sm:text-[11px] text-[#667781]">4.2 MB • PDF</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#667781] text-right mt-1 flex justify-end items-center gap-1 pr-1 pb-0.5 sm:pb-1">
                      10:42 AM <span className="text-[#53bdeb]"><CheckCircle2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" /></span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-lg flex items-center gap-1.5 z-20">
                    <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[9px] sm:text-[11px] font-bold text-slate-700">Auto-sent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 05 — DASHBOARD POLISH */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center mb-12">
            <div className="lg:hidden absolute left-[24px] top-1.5 h-4 w-4 rounded-full bg-white border-[4px] border-[#FE5905] -translate-x-1/2 z-20 shadow-md"></div>
            
            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-0 lg:pr-16 text-left lg:text-right mb-8 lg:mb-0">
              <div className="inline-flex lg:hidden items-center gap-2 mb-3">
                <span className="text-[14px] font-bold text-slate-300">05</span>
                <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">From Enquiry To Order</span>
              </div>
              <div className="hidden lg:flex items-center justify-end gap-3 mb-4">
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#FE5905]">From Enquiry To Order</span>
                <span className="text-[14px] font-bold text-slate-300">05</span>
              </div>
              <h3 className={`text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#001A55] leading-tight mb-4 max-w-[400px] ml-auto ${jakarta.className}`}>
                See the big picture.
              </h3>
            </div>

            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-[4px] border-[#FE5905] shadow-[0_0_0_4px_rgba(255,255,255,1)] -translate-x-1/2 z-20"></div>

            <div className="w-full lg:w-1/2 pl-12 sm:pl-16 lg:pl-16">
              <div className="bg-white rounded-[16px] sm:rounded-[20px] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden relative w-full lg:max-w-[460px] flex">
                <div className="w-[50px] sm:w-[60px] bg-[#001A55] p-3 sm:p-4 flex flex-col items-center gap-5 sm:gap-6 border-r border-blue-900/50 shrink-0">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded bg-white/10 flex items-center justify-center text-white mb-2 sm:mb-4"><Building2 className="h-3 w-3 sm:h-4 sm:w-4" /></div>
                  <div className="p-1.5 sm:p-2 rounded-lg bg-[#FE5905]/20 text-[#FE5905] cursor-pointer"><LayoutDashboard className="h-4 w-4 sm:h-5 sm:w-5" /></div>
                  <div className="p-1.5 sm:p-2 rounded-lg text-white/50 hover:text-white cursor-pointer"><Users className="h-4 w-4 sm:h-5 sm:w-5" /></div>
                  <div className="p-1.5 sm:p-2 rounded-lg text-white/50 hover:text-white cursor-pointer"><MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" /></div>
                </div>

                <div className="flex-1 bg-slate-50 flex flex-col min-w-0">
                  <div className="h-12 sm:h-16 bg-white border-b border-slate-200 px-4 sm:px-5 flex items-center justify-between">
                    <span className="text-[14px] sm:text-[15px] font-bold text-slate-800">Pipeline</span>
                    <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="p-4 sm:p-5 flex gap-4 overflow-hidden">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-[11px] sm:text-[12px] font-bold text-slate-500 uppercase tracking-wider">Follow-Up</span>
                        <div className="h-1.5 w-1.5 rounded-full bg-[#FE5905]"></div>
                      </div>
                      <div className="bg-white p-3 sm:p-4 rounded-xl shadow-sm border border-orange-200 relative overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FE5905]"></div>
                        <div className="flex justify-between items-start mb-1 sm:mb-2">
                          <span className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-tight truncate">Swastik Trading Co.</span>
                        </div>
                        <span className="text-[11px] sm:text-[12px] text-slate-600 block mb-2 sm:mb-3 line-clamp-2">2000 units brass decor items...</span>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center gap-1 sm:gap-1.5 bg-orange-50 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[9px] sm:text-[10px] font-bold text-[#FE5905] border border-orange-100 truncate">
                            Action Required
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-2.5 sm:p-3 rounded-xl shadow-sm border border-slate-100 mt-2.5 sm:mt-3 opacity-60">
                        <span className="text-[12px] sm:text-[13px] font-bold text-slate-700 truncate block">Aarti Enterprises</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL MESSAGE & SLIM CTA BANNER */}
        <div className="mx-auto mt-20 lg:mt-24 max-w-[1000px] relative z-20">
          <div className="bg-[#001A55] rounded-[16px] sm:rounded-[20px] shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
            
            <div className="absolute inset-0 bg-gradient-to-r from-[#00103b] to-transparent pointer-events-none opacity-50"></div>
            
            <div className="relative z-10 flex-1 text-center lg:text-left">
              <h3 className={`text-[20px] sm:text-[24px] lg:text-[28px] font-extrabold text-white leading-[1.3] mb-4 ${jakarta.className}`}>
                Your factory makes the product.<br className="hidden sm:block" />
                We make sure buyers find it and enquiries keep moving.
              </h3>
              
              <div className="inline-flex items-center gap-2 mb-0 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/80">
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase">Search</span>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase">Trust</span>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.1em] uppercase">Enquiry</span>
                <ChevronRight className="h-3 w-3 text-white/40" />
                <span className="text-[10px] sm:text-[11px] font-bold text-[#FE5905] tracking-[0.1em] uppercase">Follow-up</span>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className={`group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-[12px] bg-[#FE5905] px-6 sm:px-10 py-3.5 sm:py-5 text-[14px] sm:text-[16px] font-bold text-white transition-all duration-300 hover:bg-orange-600 shadow-lg hover:shadow-xl active:scale-95 w-full sm:w-auto ${jakarta.className}`}
              >
                <span>Book Free Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
          </div>
        </div>

      </div>

      {/* QUICK FORM MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
            
            <button 
              onClick={() => setIsModalOpen(false)}
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
      )}

    </section>
  );
}
