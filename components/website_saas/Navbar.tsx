"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-slate-100 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-brand-ink flex items-center gap-1">
          <span className="text-blue-600">Enquiry</span>
          <span className="text-orange-500">Bazaar</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#why-choose" className="hover:text-blue-600">Why Choose</Link>
          <Link href="#how-it-works" className="hover:text-blue-600">How It Works</Link>
          <Link href="#pricing" className="hover:text-blue-600">Plans</Link>
          <Link href="#examples" className="hover:text-blue-600">Examples</Link>
          <Link href="#faq" className="hover:text-blue-600">FAQ</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="hidden lg:flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold hover:bg-green-600 transition-colors">
            <MessageCircle className="w-4 h-4" />
            Talk on WhatsApp
          </a>
          <button 
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 bg-brand-ink text-white rounded-lg text-sm font-bold hover:bg-brand-ink/90 transition-colors"
          >
            Launch My Website
          </button>
        </div>
      </div>
    </nav>
  );
};
