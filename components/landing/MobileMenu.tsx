import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, whatsappCta } from "./content";
import { PrimaryCTA } from "./PrimaryCTA";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

type MobileMenuProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  const pathname = usePathname();

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
                      onNavigate();
                    }}
                    className="block rounded-xl px-3.5 py-2.5 text-[15px] font-bold text-[#001A55] transition-colors hover:bg-slate-50 hover:text-[#FE5905]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>


          </nav>
        </div>
      </div>
    </div>
  );
}
