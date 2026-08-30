import React from "react";
import {
  BadgeCheck,
  Building2,
  FileText,
  Globe2,
  Mail,
  Search,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

import {
  ecosystemTouchpoints,
  type Touchpoint,
  type TouchpointKey,
  type TouchpointTone,
} from "./content";

const iconMap: Record<TouchpointKey, React.ComponentType<{ className?: string }>> = {
  website: Globe2,
  google: Search,
  search: Search,
  enquiries: Mail,
  whatsapp: () => <WhatsAppIcon className="h-4 w-4 fill-white" />,
  profile: BadgeCheck,
  catalogue: FileText,
};

const toneClasses: Record<TouchpointTone, string> = {
  orange: "border-orange-200 bg-orange-50/90 text-brand-ink",
  green: "border-emerald-200 bg-emerald-50/90 text-brand-ink",
  slate: "border-slate-200 bg-white/92 text-brand-ink",
};

function TouchpointNode({ point }: { point: Touchpoint }) {
  const Icon = iconMap[point.key];

  return (
    <div
      className="absolute w-[24%] min-w-[5.25rem] max-w-[7.25rem] -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${point.x}%`, top: `${point.y}%` }}
    >
      <div
        className={`rounded-lg border p-3 shadow-[0_14px_34px_-26px_rgba(15,23,42,0.55)] backdrop-blur-sm ${toneClasses[point.tone]}`}
      >
        <div className="flex items-center gap-2">
          <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-md ${point.key === "whatsapp" ? "bg-[#25D366]" : "bg-brand-ink"} text-white`}>
            <Icon className="h-4 w-4" />
          </div>
          <p className="text-[0.68rem] font-semibold leading-snug sm:text-[0.72rem]">
            {point.label}
          </p>
        </div>
      </div>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="float-soft relative mx-auto aspect-[1.08/1] w-full max-w-[32rem] overflow-hidden rounded-lg border border-brand-border bg-white/88 p-4 shadow-[0_36px_80px_-48px_rgba(15,23,42,0.42)] backdrop-blur sm:p-5"
      aria-label="Illustration showing one business connected to website, Google, search, buyer enquiries, WhatsApp, business profile, and a digital catalogue."
      role="img"
    >
      <div className="absolute inset-4 rounded-lg border border-slate-200/70 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.08),_transparent_62%)] sm:inset-5" />

      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="connection-stroke" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(37, 99, 235, 0.32)" />
            <stop offset="100%" stopColor="rgba(15, 23, 42, 0.14)" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="29"
          fill="none"
          stroke="rgba(37, 99, 235, 0.12)"
          strokeWidth="0.6"
          strokeDasharray="1.6 2.4"
        />
        {ecosystemTouchpoints.map((point) => (
          <line
            key={point.key}
            x1="50"
            y1="50"
            x2={point.x}
            y2={point.y}
            stroke="url(#connection-stroke)"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      {ecosystemTouchpoints.map((point) => (
        <TouchpointNode key={point.key} point={point} />
      ))}

      <div className="absolute left-1/2 top-1/2 w-[36%] min-w-[8.5rem] max-w-[11.5rem] -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-lg border border-brand-blue/15 bg-brand-ink px-5 py-6 text-white shadow-[0_32px_70px_-40px_rgba(11,31,51,0.9)]">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-md bg-white/10">
            <Building2 className="h-6 w-6" />
          </div>
          <p className="mt-4 text-center text-sm font-semibold sm:text-base">
            Your Business
          </p>
          <p className="mt-2 text-center text-[0.68rem] leading-relaxed text-slate-300 sm:text-[0.72rem]">
            One trusted business presence, visible across the channels buyers use.
          </p>
        </div>
      </div>
    </div>
  );
}
