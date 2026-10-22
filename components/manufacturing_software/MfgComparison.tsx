"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap, AlertCircle } from "lucide-react";

export function MfgComparison() {
  const comparisonData = [
    {
      feature: "Target Focus",
      enquiryBazaar: "Custom-built for manufacturing & industrial B2B",
      genericAgency: "General business (lifestyle, retail, restaurants)",
      offTheShelfErp: "Generic corporate accounting & broad ERP",
      sharedPortals: "Multi-vendor open directory",
      highlight: true,
    },
    {
      feature: "Inquiry Exclusivity",
      enquiryBazaar: "100% exclusive to your business",
      genericAgency: "Standard contact forms (variable)",
      offTheShelfErp: "Not applicable (Internal software only)",
      sharedPortals: "Shared with multiple competing suppliers",
      highlight: true,
    },
    {
      feature: "Source Code & Asset Ownership",
      enquiryBazaar: "100% permanent client ownership (No lock-in)",
      genericAgency: "Often tied to proprietary agency hosting",
      offTheShelfErp: "Subscription license (Per-user recurring cost)",
      sharedPortals: "Directory listing rental only",
      highlight: true,
    },
    {
      feature: "B2B Qualification Forms",
      enquiryBazaar: "MOQ & business verification filters included",
      genericAgency: "Standard generic forms without MOQ checks",
      offTheShelfErp: "Not applicable",
      sharedPortals: "High volume of unqualified consumer inquiries",
      highlight: false,
    },
    {
      feature: "Custom Landed Quotation Engine",
      enquiryBazaar: "Automated GST & freight branded PDF quotes",
      genericAgency: "Not provided",
      offTheShelfErp: "Requires manual configuration or add-ons",
      sharedPortals: "Not provided",
      highlight: false,
    },
    {
      feature: "Commission On Deals",
      enquiryBazaar: "0% commission (You keep 100% of order value)",
      genericAgency: "0% (usually no inbound system)",
      offTheShelfErp: "0% (software only)",
      sharedPortals: "High listing fees and bidding per inquiry",
      highlight: true,
    },
  ];

  return (
    <section id="comparison-section" className="relative py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold text-slate-700">
            <span>Solution Comparison</span>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-[#001A55] sm:text-3xl lg:text-4xl">
            Comparing Your Technology Options
          </h2>
          <p className="mt-3 text-base text-slate-600">
            How our engineering-focused approach compares to traditional web agencies, off-the-shelf software packages, and shared directories.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[700px] text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700">
                <th className="p-4 sm:p-5 w-1/4">Feature</th>
                <th className="p-4 sm:p-5 font-bold text-[#001A55] bg-orange-50/60 border-x border-orange-200/80 w-1/3">
                  EnquiryBazaar
                </th>
                <th className="p-4 sm:p-5 text-slate-600">Generic Agency</th>
                <th className="p-4 sm:p-5 text-slate-600">Standard ERP SaaS</th>
                <th className="p-4 sm:p-5 text-slate-600">Shared Portals</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={row.highlight ? "bg-white" : "bg-slate-50/30"}
                >
                  <td className="p-4 sm:p-5 font-semibold text-slate-900">{row.feature}</td>

                  {/* EnquiryBazaar */}
                  <td className="p-4 sm:p-5 font-medium text-slate-900 bg-orange-50/30 border-x border-orange-200/80">
                    <div className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#FE5905] shrink-0 mt-0.5" />
                      <span>{row.enquiryBazaar}</span>
                    </div>
                  </td>

                  {/* Generic Agency */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span>{row.genericAgency}</span>
                  </td>

                  {/* Off-the-Shelf SaaS */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span>{row.offTheShelfErp}</span>
                  </td>

                  {/* Shared Portals */}
                  <td className="p-4 sm:p-5 text-slate-600">
                    <span>{row.sharedPortals}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
