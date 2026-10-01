"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
        <div className="flex h-16 items-center justify-between sm:h-[72px]">
          
          {/* Logo - Left */}
          <div className="flex flex-1 justify-start">
            <Link
              href="/"
              className="flex items-center gap-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              aria-label="EnquiryBazaar home"
            >
              <Image
                src="/images/logo/Enquiry_main_logo.png"
                alt="EnquiryBazaar Logo"
                width={220}
                height={62}
                className="h-12 w-auto sm:h-16"
                priority
              />
            </Link>
          </div>

          {/* High-Intent Navigation Links - Center */}
          <nav
            aria-label="Primary"
            className="hidden flex-none items-center justify-center lg:flex"
          >
            <ul className="flex items-center gap-7 text-[15px] font-bold text-[#001A55]">
              {pathname !== "/portfolio" && navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/#") && pathname === "/") {
                        e.preventDefault();
                        const targetId = item.href.substring(2);
                        const elem = document.getElementById(targetId);
                        if (elem) {
                          const offset = 80;
                          const bodyRect = document.body.getBoundingClientRect().top;
                          const elementRect = elem.getBoundingClientRect().top;
                          const elementPosition = elementRect - bodyRect;
                          const offsetPosition = elementPosition - offset;
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                        }
                      }
                    }}
                    className="relative py-1.5 transition-colors hover:text-[#FE5905] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 rounded-md"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Actions - Right */}
          <div className="flex flex-1 items-center justify-end gap-3">
            
            {/* Direct WhatsApp Reach */}
            <a
              href={whatsappCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-6 py-2.5 text-sm font-bold text-emerald-800 transition-all hover:bg-emerald-100 active:scale-95 shadow-sm hover:shadow-md"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <MobileMenu open={isMenuOpen} onNavigate={closeMenu} />
      </div>
    </header>
  );
}
