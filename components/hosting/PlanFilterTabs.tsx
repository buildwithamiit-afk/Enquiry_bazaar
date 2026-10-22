"use client";

import React from "react";
import { HostingPlan } from "@/lib/hostingData";

export type FilterCategory = "all" | "web-email" | "bundles" | "cloud-agency" | "vps-dev" | "ai-tools";

interface PlanFilterTabsProps {
  activeCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  plans: HostingPlan[];
}

export function PlanFilterTabs({
  activeCategory,
  onSelectCategory,
  plans,
}: PlanFilterTabsProps) {
  const getCount = (cat: FilterCategory) => {
    if (cat === "all") return plans.length;
    return plans.filter((p) => p.category === cat).length;
  };

  const tabs: { id: FilterCategory; label: string; icon: string }[] = [
    { id: "all", label: "All Deals", icon: "🔥" },
    { id: "web-email", label: "Web + Free Email", icon: "✉️" },
    { id: "bundles", label: "Starter Bundles", icon: "🎁" },
    { id: "cloud-agency", label: "Cloud & Agency", icon: "⚡" },
    { id: "vps-dev", label: "VPS for Developers", icon: "💻" },
    { id: "ai-tools", label: "AI Tools & Builder", icon: "🤖" },
  ];

  return (
    <div className="w-full">
      {/* Scrollable Container with Hidden Scrollbar on Mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap sm:justify-center">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          const count = getCount(tab.id);

          return (
            <button
              key={tab.id}
              onClick={() => onSelectCategory(tab.id)}
              type="button"
              className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all sm:text-sm active:scale-95 ${
                isActive
                  ? "bg-[#001A55] text-white shadow-md shadow-blue-950/20"
                  : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              <span
                className={`ml-1 rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${
                  isActive
                    ? "bg-[#FE5905] text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
