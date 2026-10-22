import React from "react";
import { Factory, Store, UserCheck, Briefcase, Building, Scissors, Stethoscope, Lightbulb } from "lucide-react";

const audiences = [
  { title: "Manufacturers", icon: Factory },
  { title: "Traders", icon: Store },
  { title: "Distributors", icon: Building },
  { title: "Service Businesses", icon: Scissors },
  { title: "Consultants", icon: UserCheck },
  { title: "Local Businesses", icon: Store },
  { title: "Professionals", icon: Stethoscope },
  { title: "Startups & Small Businesses", icon: Lightbulb },
];

export const WhoIsThisFor = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
            Perfect For
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-6 tracking-tight">
            Built For Businesses Like Yours
          </h2>
          <p className="text-lg text-slate-600">
            Whether you're starting a new business or already serving customers, a professional website gives people one trusted place to learn about your business and contact you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {audiences.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center hover:border-orange-200 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xs font-bold text-slate-700">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
