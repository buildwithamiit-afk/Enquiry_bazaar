import React from "react";
import { FileText, CloudUpload, MonitorPlay, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    description: "Select 3, 6 or 12 months.",
    icon: FileText,
  },
  {
    num: "02",
    title: "Share Your Business Details",
    description: "Logo, services, images, contact information, etc.",
    icon: CloudUpload,
  },
  {
    num: "03",
    title: "We Build Your Website",
    description: "Our team designs and develops your website.",
    icon: MonitorPlay,
  },
  {
    num: "04",
    title: "Go Live",
    description: "We configure hosting, connect your domain and launch your website.",
    icon: Rocket,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-ink mb-4 tracking-tight">
            Get Your Website in 4 Simple Steps
          </h2>
          <p className="text-lg text-slate-600">
            From plan selection to launch, we make it simple and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-start">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-16 right-0 w-full">
                  <div className="h-[1px] bg-orange-200 w-full relative">
                    <ArrowRight className="absolute -right-3 -top-2 w-4 h-4 text-orange-300" />
                  </div>
                </div>
              )}
              
              <div className="w-14 h-14 bg-white border-2 border-blue-100 rounded-full flex items-center justify-center mb-6 z-10 text-blue-600">
                <step.icon className="w-6 h-6" />
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-blue-600">{step.num}</span>
                <h3 className="font-bold text-brand-ink">{step.title}</h3>
              </div>
              
              <p className="text-sm text-slate-500 font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
