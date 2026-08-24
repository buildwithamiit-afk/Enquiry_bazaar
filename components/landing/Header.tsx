"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Montserrat, Inter } from "next/font/google";

import { MobileMenu } from "./MobileMenu";
import { navItems, consultationCta, whatsappCta } from "./content";
import { PrimaryCTA } from "./PrimaryCTA";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/95 shadow-xs backdrop-blur-xl"
          : "border-b border-slate-100 bg-white/90 backdrop-blur-md"
      } ${inter.className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          
          {/* Logo & Direct Manufacturer Growth Subtitle */}
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label="EnquiryBazaar home"
          >
            <div className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl bg-gradient-to-br from-[#1E5EFF] to-[#0A2540] text-sm font-extrabold tracking-wider text-white shadow-md shadow-blue-500/20">
              EB
            </div>
            <div className="flex flex-col">
              <span className={`text-base sm:text-[17px] font-extrabold tracking-tight text-[#0B1E3D] leading-tight ${montserrat.className}`}>
                Enquiry<span className="text-[#1E5EFF]">Bazaar</span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-tight leading-none mt-0.5">
                Direct Orders for Manufacturers
              </span>
            </div>
          </Link>

          {/* High-Intent Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden items-center justify-center lg:flex"
          >
            <ul className="flex items-center gap-6 text-[13.5px] font-semibold text-slate-600">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="relative py-1.5 transition-colors hover:text-[#1E5EFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side: Dual High-Converting Actions (WhatsApp + Demo CTA) */}
          <div className="hidden items-center gap-3 sm:flex">
            {/* Direct WhatsApp Reach */}
            <a
              href={whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-50/90 px-4 py-2 text-xs sm:text-[13px] font-bold text-emerald-800 transition-all hover:bg-emerald-100 active:scale-95 shadow-2xs"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>WhatsApp</span>
            </a>

            {/* Main Conversion CTA */}
            <PrimaryCTA compact />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <MobileMenu open={isMenuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  );
}
