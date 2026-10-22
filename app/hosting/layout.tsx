import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hostinger Discount Code (2026) | Web Hosting & Free Business Email Deals",
  description:
    "Verified Hostinger referral links & coupon codes. Save up to 75% on Web Hosting, Cloud, and VPS with 100 Free Business Emails, free domain + Free 15-Minute 1-on-1 Developer Setup Consultation.",
  keywords: [
    "discount on web hosting email",
    "hostinger discount code",
    "hostinger coupon code 2026",
    "hostinger referral code",
    "hostinger business email discount",
    "cheap web hosting with free domain and email",
    "hostinger promo code",
    "hostinger vps discount",
    "titan email hosting discount",
  ],
  alternates: {
    canonical: "https://enquirybazaar.in/hosting",
  },
  openGraph: {
    title: "Hostinger Discount Code & Free Business Email | EnquiryBazaar",
    description:
      "Save up to 75% on Hostinger Web Hosting, Cloud, & VPS. Includes 100 free professional email accounts + Free 15-Min Developer Setup Call.",
    url: "https://enquirybazaar.in/hosting",
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Hostinger Deals & Free Developer Guidance",
    description: "Get maximum discount on Web Hosting & Business Email + Free 1-on-1 setup session.",
  },
};

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
