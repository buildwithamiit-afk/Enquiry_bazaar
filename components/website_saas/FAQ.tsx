"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Is ₹149 the complete price?", a: "₹149/month is the effective starting price on our plans. You choose a 3, 6, or 12-month tenure and pay for that period upfront." },
  { q: "Does hosting come with the plan?", a: "Yes, premium cloud hosting is completely included in all our plans." },
  { q: "Do I need to buy hosting separately?", a: "No, hosting is included." },
  { q: "Can I use my existing domain?", a: "Yes, we will seamlessly connect it to your new website." },
  { q: "What if I don't have a domain?", a: "We can help you purchase and configure a new domain name." },
  { q: "Is the website mobile responsive?", a: "Yes, 100%. We build mobile-first websites." },
  { q: "What technical maintenance is included?", a: "We handle server updates, SSL renewals, security monitoring, and uptime checks." },
  { q: "What happens when my plan expires?", a: "You simply renew your subscription to keep the website active." },
  { q: "Can I upgrade my plan?", a: "Yes, you can upgrade your plan at any time." },
  { q: "How quickly can my website go live?", a: "Typically within a few days after you share your business details." },
  { q: "Can I request changes to my website?", a: "Yes, depending on your plan, periodic content updates are included." },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-4/12">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 font-bold text-xs tracking-wider rounded-full mb-6 uppercase">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl font-extrabold text-brand-ink mb-4 tracking-tight">
              Got Questions? We've Got Answers.
            </h2>
            <p className="text-slate-600">
              Here are some common questions about our website plans.
            </p>
          </div>

          <div className="w-full lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-200 rounded-lg bg-white overflow-hidden self-start">
                <button
                  className="w-full px-4 py-4 text-left font-bold text-brand-ink text-sm flex justify-between items-center focus:outline-none"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ${open === i ? "rotate-180" : ""}`} />
                </button>
                
                {open === i && (
                  <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
