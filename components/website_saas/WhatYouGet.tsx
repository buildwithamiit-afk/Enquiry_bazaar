import React from "react";
import { Monitor, Server, Shield, Smartphone, MessageCircle, BarChart, Search, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Professional Website",
    description: "Modern, responsive design built for your business.",
    color: "blue",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description: "No separate hosting setup or server management.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "SSL & Security",
    description: "Your website runs securely on HTTPS.",
    color: "amber",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Looks great on mobile, tablet and desktop.",
    color: "indigo",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Integration",
    description: "Make it easy for customers to contact you.",
    color: "green",
  },
  {
    icon: BarChart,
    title: "Enquiry Generation",
    description: "Clear CTAs and enquiry forms to get more business.",
    color: "purple",
  },
  {
    icon: Search,
    title: "Basic SEO Setup",
    description: "Essential SEO foundation to help you get found.",
    color: "emerald",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "We handle the technical side so you don't have to.",
    color: "orange",
  },
];

const getColorClasses = (color: string) => {
  const map: Record<string, string> = {
    blue: "bg-blue-100 text-blue-600",
    orange: "bg-orange-100 text-orange-500",
    amber: "bg-amber-100 text-amber-600",
    indigo: "bg-indigo-100 text-indigo-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    emerald: "bg-emerald-100 text-emerald-600",
  };
  return map[color] || "bg-slate-100 text-slate-600";
};

export const WhatYouGet = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
            What You Get
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-6 tracking-tight">
            Everything You Need to<br/>Get Your Business Online
          </h2>
          <p className="text-lg text-slate-600">
            A professional website with all the essential features, without the technical hassle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getColorClasses(feature.color)}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-ink mb-1">{feature.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
