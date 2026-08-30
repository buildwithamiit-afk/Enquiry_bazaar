import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GEOStructuredData } from "@/components/seo/GEOStructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://enquirybazaar.in"),
  title: "EnquiryBazaar - B2B Lead Generation & Digital Presence Partner for Manufacturers",
  description:
    "EnquiryBazaar builds complete end-to-end digital presence (Google #1 ranking, factory catalog website, Google & Meta ads management) and delivers 100% exclusive direct B2B buyer inquiries for Indian manufacturers.",
  keywords: [
    "EnquiryBazaar",
    "EnquiryBazaar.in",
    "B2B lead generation India",
    "B2B lead generation for manufacturing companies",
    "end to end digital presence for Indian MSMEs",
    "B2B Google Ads management agency India",
    "Meta Ads management for wholesale businesses",
    "IndiaMART alternatives for manufacturers",
    "Justdial alternatives for factory owners",
    "direct wholesale buyer leads India",
    "Google ranking for Indian manufacturing companies",
    "MSME website and catalog development India",
  ],
  authors: [{ name: "EnquiryBazaar Growth Team", url: "https://enquirybazaar.in" }],
  creator: "EnquiryBazaar",
  publisher: "EnquiryBazaar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EnquiryBazaar - Direct B2B Buyer Growth Partner for Indian Manufacturers",
    description:
      "Get 100% exclusive direct bulk buyer inquiries for your factory on WhatsApp. 0% commission, zero competitor lead forwarding, and permanent Google #1 rankings.",
    url: "https://enquirybazaar.in",
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "EnquiryBazaar B2B Direct Growth Engine for Indian Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EnquiryBazaar - Direct B2B Buyer Growth Partner for Indian Manufacturers",
    description:
      "Get 100% exclusive direct bulk buyer inquiries for your factory on WhatsApp. 0% commission, zero competitor lead forwarding, and permanent Google #1 rankings.",
    images: ["/hero.png"],
  },
  alternates: {
    canonical: "https://enquirybazaar.in",
  },
  verification: {
    google: "hFt_mJBPtKN2hcflUmGybe8njF6O4VeqP6bvROnRm7k",
    other: {
      "msvalidate.01": "5C230C8F4C281A68435E0CA852A1CD48",
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="h-full antialiased">
      <head>
        {/* GEO Multi-Entity Knowledge Graph Schema */}
        <GEOStructuredData />
        {/* Microsoft Clarity Analytics */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y7d51gxp9r");
          `}
        </Script>
      </head>
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-orange-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
        >
          Skip to content
        </a>
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
