import React from "react";
import { TrendingUp, Users, Target, Building2 } from "lucide-react";

export const WhyWebsite = () => {
  return (
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-ink mb-6">
            Why Your Business Needs a Professional Website
          </h2>
          <p className="text-lg text-brand-muted">
            WhatsApp and Justdial are not enough anymore. Buyers want to deal with legitimate, professional businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Build Instant Trust</h3>
                <p className="text-slate-600 leading-relaxed">
                  When buyers search for your company name on Google, a professional website immediately establishes credibility and sets you apart from unverified suppliers.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Escape Marketplace Competition</h3>
                <p className="text-slate-600 leading-relaxed">
                  On B2B directories, you are placed directly next to 100 competitors competing on price. On your own website, you control the narrative and value proposition.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Own Your Audience</h3>
                <p className="text-slate-600 leading-relaxed">
                  Stop renting your presence on social media platforms that constantly change their algorithms. Build an asset that you actually own and control 100%.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-ink mb-2">Generate Leads 24/7</h3>
                <p className="text-slate-600 leading-relaxed">
                  Your website acts as your best salesperson that never sleeps. It showcases your catalogs, handles FAQs, and collects inquiries on autopilot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
