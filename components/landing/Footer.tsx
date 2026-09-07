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
    <footer className={`border-t-4 border-[#FE5905] bg-[#001A55] text-slate-300 ${inter.className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          
          {/* Brand & Helpline Col */}
          <div className="flex flex-col items-start lg:col-span-1 xl:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-2 shadow-sm">
              <Image
                src="/images/logo/Enquiry_main_logo.png"
                alt="EnquiryBazaar Logo"
                width={220}
                height={62}
                className="h-9 w-auto sm:h-10"
              />
            </Link>

            <p className="mt-5 text-[13px] text-slate-300 leading-relaxed max-w-xs">
              Empowering Indian manufacturers and B2B suppliers to get 100% exclusive direct buyer inquiries, wholesale orders, and permanent Google visibility.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#FE5905] px-4 py-2.5 text-[13px] font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 hover:bg-[#ff6f26]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>WhatsApp Us</span>
              </a>
              <span className="text-[12px] text-slate-400">
                📞 Direct Helpline: <a href="tel:+916387375032" className="text-white font-semibold hover:text-[#FE5905] transition-colors">+91 6387375032</a> , <a href="tel:+919696717305" className="text-white font-semibold hover:text-[#FE5905] transition-colors">+91 96967 17305</a>
              </span>
            </div>
          </div>

          {/* Company & Pages */}
          <div className="flex flex-col lg:ml-auto">
            <h4 className={`text-[13px] font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Company
            </h4>
            <ul className="mt-5 space-y-3 text-[13px]">
              {footerPages.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#FE5905]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Solution Sections */}
          <div className="flex flex-col lg:ml-auto">
            <h4 className={`text-[13px] font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Growth Engine
            </h4>
            <ul className="mt-5 space-y-3 text-[13px]">
              {footerSections.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[#FE5905]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Growth Tools Col */}
          <div className="flex flex-col lg:ml-auto">
            <h4 className={`text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-2 ${montserrat.className}`}>
              <span>Free Tools</span>
              <span className="rounded bg-[#FE5905] px-1.5 py-0.5 text-[9px] font-black text-white uppercase tracking-wider">
                Hot
              </span>
            </h4>
            <ul className="mt-5 space-y-3 text-[13px]">
              {footerTools.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-start gap-2 transition-colors hover:text-[#FE5905]"
                  >
                    <span className="leading-snug">{item.label}</span>
                    {item.isNew && (
                      <span className="shrink-0 rounded border border-[#FE5905]/40 bg-[#FE5905]/10 px-1.5 py-0.5 text-[9px] font-bold text-[#FE5905]">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Served */}
          <div className="flex flex-col">
            <h4 className={`text-[13px] font-bold uppercase tracking-wider text-white ${montserrat.className}`}>
              Industries We Empower
            </h4>
            <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-medium text-slate-300">
              {industriesList.map((ind) => (
                <span
                  key={ind}
                  className="rounded-md bg-white/5 border border-white/10 px-2.5 py-1.5 transition-colors hover:bg-white/10"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-700/60 pt-6 sm:flex-row text-xs text-slate-500">
          <p>© {new Date().getFullYear()} EnquiryBazaar.in · All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-700">|</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span className="text-slate-700">|</span>
            <span className="text-[#FE5905] font-semibold">100% Verified Manufacturer Partner</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
