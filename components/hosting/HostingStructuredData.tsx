import React from "react";
import { hostingPlans, hostingFaqs, DEFAULT_COUPON_CODE } from "@/lib/hostingData";

export function HostingStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": hostingFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Claim Maximum Discount on Hostinger Web Hosting and Business Email",
    "description": "Step-by-step instructions to get up to 75% base discount plus an extra referral discount and free developer setup assistance.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Select Verified Hostinger Plan on EnquiryBazaar",
        "text": "Browse the 11 verified Hostinger plan referral links on EnquiryBazaar.in and click 'Claim Deal & Go to Plan'.",
        "url": "https://enquirybazaar.in/hosting#plans-section",
      },
      {
        "@type": "HowToStep",
        "name": "Choose 48-Month or 24-Month Term",
        "text": "Select a 48-month or 24-month hosting billing cycle on Hostinger to unlock the lowest monthly rate and free domain name.",
      },
      {
        "@type": "HowToStep",
        "name": "Apply Coupon Code ENQUIRYBAZAAR",
        "text": `In the order summary section at checkout, click 'Have a coupon code?' and enter ${DEFAULT_COUPON_CODE} to slash an additional 7% to 20% off the total.`,
      },
      {
        "@type": "HowToStep",
        "name": "Book Free 15-Minute Developer Setup Session",
        "text": "Return to EnquiryBazaar.in and book your free 15-minute 1-on-1 developer consultation to configure your DNS records, custom business email inboxes, and SSL certificates.",
        "url": "https://enquirybazaar.in/hosting",
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hostinger Web Hosting & Business Email Deals (Verified Referral)",
    "description": "High-performance web hosting with 100 free professional business emails, free domain, and 1-on-1 developer guidance.",
    "brand": {
      "@type": "Brand",
      "name": "Hostinger",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "79",
      "highPrice": "1299",
      "offerCount": hostingPlans.length,
      "availability": "https://schema.org/InStock",
      "url": "https://enquirybazaar.in/hosting",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}
