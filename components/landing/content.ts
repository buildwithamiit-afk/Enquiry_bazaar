export const consultationCta = {
  href: "/portfolio#contact",
  label: "Book Free Demo",
} as const;

export const whatsappCta = {
  href: "https://wa.me/918887048276?text=Hi%2C%20I%20want%20to%20get%20direct%20bulk%20buyer%20enquiries%20for%20my%20business.",
  label: "WhatsApp",
  phoneDisplay: "+91 88870 48276",
} as const;

// Clean high-intent header navigation (Without About & Contact)
export const navItems = [
  { label: "The Problem", href: "/#the-problem" },
  { label: "Our 4-Step Setup", href: "/#solution" },
  { label: "Industries", href: "/#industries" },
  { label: "Portals vs Direct", href: "/#comparison" },
  { label: "FAQs", href: "/#faq" },
] as const;

// All website pages for the footer
export const footerPages = [
  { label: "Home", href: "/" },
  { label: "Client Portfolio", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
] as const;

// Free growth and reputation tools for the footer
export const footerTools = [
  { label: "Metal & Pipe Weight Calculator", href: "/tools/metal-weight-calculator", isNew: true },
  { label: "Corrugated Box Calculator", href: "/tools/corrugated-box-weight-calculator", isNew: false },
  { label: "Wholesale Landed Calculator", href: "/tools/wholesale-moq-landed-price-calculator", isNew: false },
  { label: "GMB Rating Calculator", href: "/tools/gmb-rating-calculator", isNew: false },
  { label: "All Free Growth Tools", href: "/tools", isNew: false },
] as const;

export const footerSections = [
  { label: "The Problem", href: "/#the-problem" },
  { label: "Our 4-Step Setup", href: "/#solution" },
  { label: "Industries We Serve", href: "/#industries" },
  { label: "Portals vs Direct System", href: "/#comparison" },
  { label: "Frequently Asked Questions", href: "/#faq" },
] as const;

export const audienceSegments = [
  "Manufacturers",
  "Suppliers",
  "Exporters",
  "B2B Businesses",
] as const;

export type TouchpointKey =
  | "website"
  | "google"
  | "search"
  | "enquiries"
  | "whatsapp"
  | "profile"
  | "catalogue";

export type TouchpointTone = "orange" | "green" | "slate";

export type Touchpoint = {
  key: TouchpointKey;
  label: string;
  x: number;
  y: number;
  tone: TouchpointTone;
};

export const ecosystemTouchpoints: Touchpoint[] = [
  { key: "website", label: "Website", x: 18, y: 18, tone: "orange" },
  { key: "google", label: "Google", x: 50, y: 10, tone: "green" },
  { key: "search", label: "Search", x: 82, y: 18, tone: "slate" },
  { key: "enquiries", label: "Buyer Enquiries", x: 16, y: 50, tone: "green" },
  { key: "whatsapp", label: "WhatsApp", x: 84, y: 50, tone: "orange" },
  { key: "profile", label: "Business Profile", x: 25, y: 82, tone: "slate" },
  { key: "catalogue", label: "Digital Catalogue", x: 75, y: 82, tone: "orange" },
];
