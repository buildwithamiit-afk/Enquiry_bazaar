import React from "react";
import Link from "next/link";
import { Montserrat, Inter } from "next/font/google";
import { footerPages, footerSections, whatsappCta } from "./content";
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
    <footer className={`border-t border-slate-200 bg-[#0B1E3D] text-slate-400 ${inter.className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          
          {/* Brand & Helpline Col */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#1E5EFF] to-blue-700 text-sm font-extrabold tracking-wider text-white shadow-md">
                EB
              </div>
              <span className={`text-lg font-extrabold tracking-tight text-white ${montserrat.className}`}>
                Enquiry<span className="text-[#1E5EFF]">Bazaar</span>
              </span>
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
                📞 Direct B2B Helpline: <a href="tel:+919696717305" className="text-blue-300 font-semibold hover:underline">+91 96967 17305</a>
              </span>
            </div>
          </div>

          {/* Company & Pages */}
          <div className="flex flex-col">
            <h4 className={`text-xs font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Company Pages
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
