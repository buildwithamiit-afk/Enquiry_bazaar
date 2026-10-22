import React from "react";
import { Globe2, Link2, Search } from "lucide-react";

export const DomainInfo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-2xl rounded-full" />
                <Globe2 className="w-32 h-32 text-brand-blue relative z-10" />
              </div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-brand-ink mb-4">What about the domain name?</h3>
                <p className="text-slate-600 text-lg">
                  Your domain is your unique address on the internet (like yourbusiness.com). Here is how we handle it:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-brand-ink/5 rounded-full flex items-center justify-center mb-4">
                    <Link2 className="w-5 h-5 text-brand-ink" />
                  </div>
                  <h4 className="font-bold text-brand-ink mb-2">Already have one?</h4>
                  <p className="text-sm text-slate-600">
                    Great! We'll seamlessly connect your existing domain to your new EnquiryBazaar website at no extra cost.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h4 className="font-bold text-brand-ink mb-2">Don't have one?</h4>
                  <p className="text-sm text-slate-600">
                    We'll help you find and purchase the perfect domain for your business. <br/>
                    <span className="text-xs font-semibold text-brand-blue mt-2 block">*Domain charges are separate.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
