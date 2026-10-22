import React from "react";
import { X, Check } from "lucide-react";

export const Comparison = () => {
  return (
    <section id="why-choose" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Problem Statement */}
          <div className="w-full lg:w-5/12 pt-8">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
              The Problem
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink leading-tight mb-6 tracking-tight">
              Why Pay Thousands Upfront Just to Get Online?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Building a traditional website can be expensive, confusing and time-consuming. With EnquiryBazaar, you get everything in one simple plan.
            </p>
          </div>

          {/* Right Side: Comparison Cards */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Traditional Card */}
            <div className="bg-white rounded-3xl p-8 border border-red-100 shadow-sm">
              <h3 className="font-bold text-slate-800 text-lg mb-2">Traditional Website</h3>
              <div className="text-3xl font-extrabold text-red-500 mb-1">₹30,000+</div>
              <p className="text-red-400 text-sm font-semibold mb-8">upfront cost</p>
              
              <ul className="space-y-4">
                {[
                  "Large development cost",
                  "Separate hosting purchase",
                  "Domain management",
                  "SSL setup",
                  "Ongoing maintenance",
                  "Developer dependency",
                  "Technical headaches",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 font-medium text-sm">
                    <div className="bg-red-100 rounded-full p-0.5 shrink-0">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* EnquiryBazaar Card */}
            <div className="bg-white rounded-3xl p-8 border-2 border-green-500 shadow-xl relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
              
              <h3 className="font-bold text-slate-800 text-lg mb-2 relative z-10">EnquiryBazaar Website Plan</h3>
              <div className="flex items-baseline gap-1 mb-1 relative z-10">
                <span className="text-slate-600 font-bold text-sm">Starting at</span>
                <span className="text-4xl font-extrabold text-blue-600">₹149</span>
              </div>
              <p className="text-green-600 text-sm font-bold mb-8 relative z-10">Simple Plan</p>
              
              <ul className="space-y-4 relative z-10">
                {[
                  "Professional business website",
                  "Hosting included",
                  "SSL included",
                  "Domain connection support",
                  "Technical support",
                  "Easy maintenance",
                  "One team, one solution",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-bold text-sm">
                    <div className="bg-green-500 rounded-full p-0.5 shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
