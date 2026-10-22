"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="bg-slate-50/50 pt-16 pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-brand-ink leading-tight mb-6 tracking-tight">
              Launch Your Business Website At Just <span className="text-blue-600">₹149</span>
            </h1>
            
            <h3 className="text-xl text-slate-600 mb-6 font-medium max-w-lg">
              A professional website for your business, without the heavy upfront cost.
            </h3>

            <p className="text-lg font-bold text-slate-800 mb-10">
              Website + Hosting + SSL + Support
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
              >
                Launch My Website
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-100 rounded-xl font-bold hover:bg-blue-50 transition-colors"
              >
                View Plans
              </button>
            </div>
            
            <p className="text-sm text-slate-500 font-medium italic mb-2">
              Already have a domain? We'll connect it.
            </p>
            <p className="text-sm font-bold text-brand-ink">
              Plans available for 3, 6 & 12 months
            </p>
          </div>

          {/* Right Image/Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-0 right-12 bg-white px-4 py-2 rounded-xl shadow-lg border border-blue-100 text-blue-600 font-bold text-sm z-20 -mt-6 transform rotate-3">
              Your Business Website Here
              <svg className="absolute -bottom-6 left-1/2 w-8 h-8 text-blue-600 transform -translate-x-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
            
            <div className="relative z-10 w-full aspect-[4/3] bg-slate-200 rounded-2xl border-8 border-slate-800 shadow-2xl overflow-hidden">
               {/* Placeholder for the laptop mockup */}
               <div className="w-full h-full bg-slate-800 p-2 flex flex-col">
                 <div className="w-full h-full bg-slate-100 rounded flex items-center justify-center overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex flex-col items-center justify-center p-8">
                       <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Quality Products<br/>For A Better Tomorrow</h2>
                       <div className="w-32 h-10 bg-orange-500 rounded"></div>
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Mobile Mockup overlapping */}
            <div className="absolute -bottom-8 -right-4 w-32 md:w-48 aspect-[9/19] bg-slate-900 rounded-[2rem] border-4 border-slate-800 shadow-2xl z-20 overflow-hidden flex flex-col">
               <div className="w-full h-6 bg-black flex justify-center pt-1"><div className="w-12 h-3 bg-slate-800 rounded-full"></div></div>
               <div className="flex-1 bg-white relative">
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 p-4">
                    <div className="text-sm font-bold text-slate-800 mb-2">Quality Products</div>
                    <div className="w-16 h-4 bg-orange-500 rounded"></div>
                 </div>
               </div>
            </div>

            {/* Feature small cards below */}
            <div className="absolute -bottom-16 left-0 right-12 flex justify-between gap-2 z-10">
              {['Professional Design', 'Mobile Responsive', 'Enquiry Focused', 'SEO Ready'].map((text, i) => (
                <div key={i} className="bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex flex-col items-center gap-1 text-[10px] font-bold text-slate-600 text-center w-20">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
