import React from "react";
import { ArrowRight } from "lucide-react";

const portfolios = [
  { 
    name: "Manufacturing Website", 
    category: "Product-focused website",
    color: "bg-slate-200"
  },
  { 
    name: "Service Business Website", 
    category: "Lead-focused design",
    color: "bg-slate-300"
  },
  { 
    name: "Trading Company Website", 
    category: "Business & product showcase",
    color: "bg-slate-800"
  },
  { 
    name: "Professional Website", 
    category: "Clean and modern design",
    color: "bg-blue-900"
  },
];

export const Portfolio = () => {
  return (
    <section id="examples" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
              Website Examples
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 tracking-tight">
              See What Your Business Could Look Like Online
            </h2>
            <p className="text-lg text-slate-600">
              Here are some examples of professional websites we've built for businesses.
            </p>
          </div>
          <button className="px-6 py-3 bg-white border border-blue-200 text-blue-600 font-bold text-sm rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2 shadow-sm">
            View More Examples
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`aspect-[4/3] ${item.color} rounded-xl mb-4 overflow-hidden relative shadow-sm border border-slate-200`}>
                {/* Placeholder for real website screenshots */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div>
                <h3 className="font-bold text-brand-ink mb-1">{item.name}</h3>
                <p className="text-xs text-slate-500 mb-3">{item.category}</p>
                <div className="text-blue-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Example <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
