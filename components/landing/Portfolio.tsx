import React from 'react';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import { ExternalLink, TrendingUp, Users, Target, ArrowRight } from 'lucide-react';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700", "800"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

interface PortfolioItem {
  id: string;
  clientName: string;
  industry: string;
  image: string;
  services: string[];
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "industrial-machinery",
    clientName: "HeavyMachinery Corp",
    industry: "Industrial Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    services: ["B2B Website", "GMB Optimization", "Local SEO"],
    metrics: [
      { label: "Increase in Traffic", value: "340%", icon: <TrendingUp className="h-4 w-4 text-emerald-500" /> },
      { label: "B2B Leads/Month", value: "85+", icon: <Users className="h-4 w-4 text-blue-500" /> },
      { label: "Conversion Rate", value: "12%", icon: <Target className="h-4 w-4 text-purple-500" /> },
    ]
  },
  {
    id: "chemical-supplier",
    clientName: "Apex Chemicals India",
    industry: "Chemical Supply",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
    services: ["Digital Catalog", "Google Search Setup", "Lead Generation"],
    metrics: [
      { label: "Search Ranking", value: "Page 1", icon: <TrendingUp className="h-4 w-4 text-emerald-500" /> },
      { label: "Inquiries/Month", value: "120+", icon: <Users className="h-4 w-4 text-blue-500" /> },
      { label: "ROI", value: "450%", icon: <Target className="h-4 w-4 text-purple-500" /> },
    ]
  },
  {
    id: "packaging-solutions",
    clientName: "EcoPack Solutions",
    industry: "Packaging & Logistics",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop",
    services: ["Lead Gen Website", "GMB Verification", "B2B SEO"],
    metrics: [
      { label: "Direct Calls/Mo", value: "200+", icon: <TrendingUp className="h-4 w-4 text-emerald-500" /> },
      { label: "Cost Per Lead", value: "₹45", icon: <Users className="h-4 w-4 text-blue-500" /> },
      { label: "Verified Buyers", value: "90%", icon: <Target className="h-4 w-4 text-purple-500" /> },
    ]
  }
];

export function Portfolio() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4" />
            <span>Proven Results</span>
          </div>
          <h2 className={`${montserrat.className} text-3xl md:text-5xl font-bold mb-6 text-white leading-tight`}>
            Real Businesses, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Real Revenue Growth</span>
          </h2>
          <p className={`${jakarta.className} text-lg text-slate-300`}>
            See how we've transformed traditional manufacturers into digital powerhouses, driving high-intent B2B inquiries and massive ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.clientName} 
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold rounded-full shadow-lg">
                    {item.industry}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className={`${montserrat.className} text-xl font-bold text-white mb-2 flex items-center justify-between`}>
                  {item.clientName}
                  <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.services.map((service, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md">
                      {service}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-slate-700/50">
                  <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Marketing Impact</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {item.metrics.map((metric, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-center gap-1.5 mb-1">
                          {metric.icon}
                          <span className="text-xs text-slate-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis" title={metric.label}>
                            {metric.label}
                          </span>
                        </div>
                        <span className={`${montserrat.className} text-lg font-bold text-white`}>
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group">
            Start Your Growth Journey
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
