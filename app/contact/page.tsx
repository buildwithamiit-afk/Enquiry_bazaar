import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ContactSection } from "@/components/contact/ContactSection";
import { FinalCTA } from "@/components/landing/FinalCTA";

export const metadata: Metadata = {
  title: "Contact EnquiryBazaar - Get Direct B2B Buyer Inquiries for Your Factory",
  description:
    "Speak with Amit Pandey and the EnquiryBazaar team. Call +91 96967 17305 or connect on WhatsApp for a free 15-minute B2B manufacturing growth audit.",
  alternates: {
    canonical: "https://enquirybazaar.in/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
