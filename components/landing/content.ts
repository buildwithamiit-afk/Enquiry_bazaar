export const consultationCta = {
  href: "/#hero",
  label: "Book Free Demo",
} as const;

export const whatsappCta = {
  href: "https://wa.me/919696717305?text=Hi%2C%20I%20want%20to%20get%20direct%20bulk%20buyer%20enquiries%20for%20my%20business.",
  label: "WhatsApp",
  phoneDisplay: "+91 96967 17305",
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
  { label: "About Us", href: "/about" },
  { label: "Meet the Founder", href: "/about#founder" },
  { label: "Contact Us", href: "/contact" },
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

export type TouchpointTone = "blue" | "green" | "slate";

export type Touchpoint = {
  key: TouchpointKey;
  label: string;
  x: number;
  y: number;
  tone: TouchpointTone;
};

export const ecosystemTouchpoints: Touchpoint[] = [
  { key: "website", label: "Website", x: 18, y: 18, tone: "blue" },
  { key: "google", label: "Google", x: 50, y: 10, tone: "green" },
  { key: "search", label: "Search", x: 82, y: 18, tone: "slate" },
  { key: "enquiries", label: "Buyer Enquiries", x: 16, y: 50, tone: "green" },
  { key: "whatsapp", label: "WhatsApp", x: 84, y: 50, tone: "blue" },
  { key: "profile", label: "Business Profile", x: 25, y: 82, tone: "slate" },
  { key: "catalogue", label: "Digital Catalogue", x: 75, y: 82, tone: "blue" },
];
