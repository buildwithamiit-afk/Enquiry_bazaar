"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MessageCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-brand-ink text-white relative">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Your Business is Ready.<br/>Is Your Website?
          </h2>
          <p className="text-lg text-slate-300 mb-8 font-medium">
            Get your professional business website without the heavy upfront cost or technical headache.
          </p>
          
          <div className="flex items-center gap-6 text-sm font-bold text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-blue" />
              Website + Hosting
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-blue" />
              SSL
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-blue" />
              Technical support
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center lg:justify-end gap-4">
          <button 
            onClick={() => {
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-brand-ink rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-slate-100 transition-colors"
          >
            Launch My Website
            <ArrowRight className="w-4 h-4" />
          </button>
          <a 
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-sm hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Talk to Us on WhatsApp
          </a>
        </div>
        
      </div>
    </section>
  );
};
