import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat, Inter } from "next/font/google";
import { footerPages, footerSections, footerTools, whatsappCta } from "./content";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "800"] });
const inter = Inter({ subsets: ["latin"] });

const industriesList = [
  "Candles & Fragrances",
  "Glass & Bottles",
  "Packaging & Boxes",
  "Home Decor & Crafts",
  "Machinery & Parts",
  "Textiles & Apparel",
  "Chemicals & Raw Materials",
  "Electrical & Hardware",
];

export function Footer() {
  return (
    <footer className={`border-t border-slate-200 bg-[#001A55] text-slate-400 ${inter.className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr_1fr]">
          
          {/* Brand & Helpline Col */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/images/logo/Enquiry_main_logo.png"
                alt="EnquiryBazaar Logo"
                width={220}
                height={62}
                className="h-12 w-auto sm:h-16 invert brightness-0"
              />
            </Link>

            <p className="mt-3 text-xs sm:text-[13px] text-slate-300 leading-relaxed max-w-sm">
              Empowering Indian manufacturers and B2B suppliers to get 100% exclusive direct buyer inquiries, wholesale orders, and permanent Google visibility.
            </p>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 px-4 py-2.5 text-xs sm:text-[13px] font-bold text-emerald-400 transition hover:bg-emerald-600 hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>WhatsApp: +91 96967 17305</span>
              </a>
              <span className="text-[11.5px] text-slate-400">
                📞 Direct B2B Helpline: <a href="tel:+919696717305" className="text-orange-300 font-semibold hover:underline">+91 96967 17305</a>
              </span>
            </div>
          </div>

          {/* Company & Pages */}
          <div className="flex flex-col">
            <h4 className={`text-xs font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-[13px]">
              {footerPages.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Growth Tools Col */}
          <div className="flex flex-col">
            <h4 className={`text-xs font-bold uppercase tracking-wider text-orange-400 ${montserrat.className} flex items-center gap-1.5`}>
              <span>Free Tools</span>
              <span className="rounded-sm bg-[#FE5905] px-1 py-0.2 text-[9px] font-black text-white uppercase">
                Hot
              </span>
            </h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-[13px]">
              {footerTools.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  >
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1 py-0.2 text-[9px] font-bold">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Solution Sections */}
          <div className="flex flex-col">
            <h4 className={`text-xs font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Growth Engine
            </h4>
            <ul className="mt-4 space-y-2 text-xs sm:text-[13px]">
              {footerSections.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="flex flex-col">
            <h4 className={`text-xs font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Industries We Empower
            </h4>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-medium text-slate-300">
              {industriesList.map((ind) => (
                <span
                  key={ind}
                  className="rounded-lg bg-slate-800/80 border border-slate-700/60 px-2.5 py-1"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row text-xs text-slate-500">
          <p>© {new Date().getFullYear()} EnquiryBazaar.in · All rights reserved.</p>
          <div className="flex items-center gap-3 flex-wrap">
            <Link href="/" className="hover:text-slate-400 transition-colors">Home</Link>
            <span>·</span>
            <Link href="/about" className="hover:text-slate-400 transition-colors">About Us</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
            <span>·</span>
            <span className="text-emerald-400 font-semibold">100% Verified Manufacturer Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
