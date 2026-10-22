import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Launch Your Business Website At Just ₹149 | EnquiryBazaar",
  description: "Get a professional business website without the heavy upfront cost. Includes Website, Hosting, SSL, and Technical Support. Perfect for Indian SMEs and Manufacturers.",
  openGraph: {
    title: "Launch Your Business Website At Just ₹149 | EnquiryBazaar",
    description: "Get a professional business website without the heavy upfront cost. Includes Website, Hosting, SSL, and Technical Support.",
    type: "website",
    locale: "en_IN",
  }
};

export default function WebsiteSaasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
