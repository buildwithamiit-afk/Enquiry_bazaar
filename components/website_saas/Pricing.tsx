import React from "react";
import { Check, Globe2, Globe, ShieldQuestion } from "lucide-react";

const plans = [
  {
    name: "Start Small",
    duration: "3 Months",
    tagline: "Perfect for businesses that want to test their online presence.",
    price: "₹599",
    monthlyEquivalent: "(₹199/month)",
    popular: false,
    features: [
      "Professional Website",
      "Hosting Included",
      "SSL & Security",
      "Technical Support",
    ],
  },
  {
    name: "Build Your Presence",
    duration: "6 Months",
    tagline: "For businesses serious about growing their digital presence.",
    price: "₹899",
    monthlyEquivalent: "(₹149/month)",
    popular: true,
    features: [
      "Professional Website",
      "Hosting Included",
      "SSL & Security",
      "Technical Support",
    ],
  },
  {
    name: "Best Value",
    duration: "12 Months",
    tagline: "Ideal for businesses looking for a long-term online presence.",
    price: "₹1,499",
    monthlyEquivalent: "(₹125/month)",
    popular: false,
    features: [
      "Professional Website",
      "Hosting Included",
      "SSL & Security",
      "Technical Support",
    ],
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 tracking-tight">
              Simple & Affordable Plans<br/>For Every Business
            </h2>
            <p className="text-lg text-slate-600">
              Choose the plan that fits your business needs. All plans include website, hosting, SSL and technical support.
            </p>
          </div>
          
          <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-200 text-sm font-bold shadow-sm">
             <Check className="w-4 h-4 text-green-500" />
             Save more with longer plans
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl p-8 relative flex flex-col border shadow-sm ${
                  plan.popular ? "border-blue-500 shadow-xl shadow-blue-500/10 md:-mt-4 md:mb-4" : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-brand-ink mb-1">{plan.duration}</h3>
                  <p className="text-slate-800 font-bold mb-4">{plan.name}</p>
                  <p className="text-slate-500 text-xs font-medium h-10">{plan.tagline}</p>
                </div>

                <div className="mb-8">
                  <div className="text-4xl font-extrabold text-blue-600 mb-1">{plan.price}</div>
                  <p className="text-slate-500 text-sm font-medium">{plan.monthlyEquivalent}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-full p-0.5 shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-slate-700 text-sm font-bold">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                    : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-50"
                }`}>
                  Launch My Website →
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200 flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 text-blue-500">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink mb-2">Already Have a Domain?</h4>
                <p className="text-xs text-slate-500 mb-4">
                  Keep it. We'll connect your existing domain to your new website.
                </p>
                <div className="bg-white border border-slate-200 rounded px-3 py-1 text-xs text-slate-400 font-medium inline-block text-center w-full">
                  www.yourbusiness.com
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center -my-2 relative z-10">
               <span className="bg-slate-50 px-2 text-xs font-bold text-slate-400">OR</span>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-blue-100 text-blue-500">
                <ShieldQuestion className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-ink mb-2">Don't Have a Domain?</h4>
                <p className="text-xs text-slate-500 mb-4">
                  No problem. We can help you choose and purchase a domain.
                </p>
                <div className="text-xs text-slate-500 text-center w-full bg-white p-2 border border-blue-100 rounded font-medium">
                  Domain charges are separate.
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
