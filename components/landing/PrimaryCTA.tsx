import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { consultationCta } from "./content";

type PrimaryCTAProps = {
  className?: string;
  compact?: boolean;
  onClick?: () => void;
};

export function PrimaryCTA({
  className = "",
  compact = false,
  onClick,
}: PrimaryCTAProps) {
  const sizeClasses = compact
    ? "h-10 px-5 text-xs sm:text-sm"
    : "h-12 px-6 text-sm sm:px-7";

  return (
    <Link
      href={consultationCta.href}
      onClick={onClick}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE5905] font-bold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:bg-orange-600 hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FE5905] focus-visible:ring-offset-2 ${sizeClasses} ${className}`}
      data-cta="book-free-demo"
    >
      <span>{consultationCta.label}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}
