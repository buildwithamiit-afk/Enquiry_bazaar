import Link from "next/link";
import { navItems, whatsappCta } from "./content";
import { PrimaryCTA } from "./PrimaryCTA";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="mt-2 rounded-2xl border border-slate-200 bg-white/98 p-4 shadow-xl backdrop-blur-md"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 hover:text-[#1E5EFF]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 pt-3 border-t border-slate-100">
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onNavigate}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-50 py-3 text-xs sm:text-sm font-bold text-emerald-800 transition hover:bg-emerald-100 active:scale-95"
              >
                <WhatsAppIcon className="h-5.5 w-5.5 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <PrimaryCTA className="w-full" compact onClick={onNavigate} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
