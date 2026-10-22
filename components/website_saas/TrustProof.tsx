import React from "react";
import { Star } from "lucide-react";

export const TrustProof = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-5/12">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
              Trusted By Businesses
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-6 tracking-tight">
              Real Businesses. Real Results.
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              We've helped many businesses across India get online with professional websites.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8">
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">100+</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wide">Websites Built</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2">248+</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wide">Businesses Served</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-blue-600 mb-2 flex items-center gap-1">
                  4.8 <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <p className="text-slate-700 font-medium leading-relaxed mb-8">
                  "Our website looks very professional and we are getting better enquiries now. The team made the whole process very easy."
                </p>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-brand-ink text-sm">Amit Sharma</div>
                  <div className="text-slate-500 text-xs">Manufacturer, Delhi</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <p className="text-slate-700 font-medium leading-relaxed mb-8">
                  "Great experience. No technical headache and very good support. Our business now has a proper online presence."
                </p>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-300 rounded-full flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-brand-ink text-sm">Priya Mehta</div>
                  <div className="text-slate-500 text-xs">Service Business, Jaipur</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
