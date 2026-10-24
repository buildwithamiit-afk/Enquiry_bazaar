import React from "react";
import { SHOPIFY_FAQS, SHOPIFY_METADATA } from "./shopifyData";

export function ShopifyAhmedabadStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SHOPIFY_METADATA.canonical}#webpage`,
        "url": SHOPIFY_METADATA.canonical,
        "name": SHOPIFY_METADATA.title,
        "description": SHOPIFY_METADATA.description,
        "isPartOf": {
          "@id": "https://enquirybazaar.in/#website",
        },
        "about": [
          { "@id": "https://enquirybazaar.in/#org" },
          { "@id": "https://enquirybazaar.in/about#founder" },
        ],
        "inLanguage": "en-IN",
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://enquirybazaar.in/#org",
        "name": "EnquiryBazaar",
        "url": "https://enquirybazaar.in",
        "telephone": "+91-88870-48276",
        "image": "https://enquirybazaar.in/hero.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "SG Highway, Prahlad Nagar Business Center",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "postalCode": "380015",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.0125",
          "longitude": "72.5074",
        },
        "areaServed": [
          "Ahmedabad",
          "Gandhinagar",
          "Surat",
          "Vadodara",
          "Rajkot",
          "Gujarat",
          "India",
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://enquirybazaar.in/about#founder",
          "name": "Amit Pandey",
          "jobTitle": "Software Engineer & Founder",
          "url": "https://www.linkedin.com/in/amit-pandey-86aa62338/",
        },
        "sameAs": [
          "https://www.linkedin.com/in/amit-pandey-86aa62338/",
          "https://enquirybazaar.in",
        ],
      },
      {
        "@type": "Service",
        "@id": `${SHOPIFY_METADATA.canonical}#service`,
        "name": "Shopify Development Services in Ahmedabad",
        "serviceType": "Shopify store development",
        "provider": { "@id": "https://enquirybazaar.in/#org" },
        "areaServed": {
          "@type": "City",
          "name": "Ahmedabad",
        },
        "description":
          "Custom Shopify store development, B2B wholesale portals, theme customization, migrations, and ERP/Tally integrations for D2C brands, manufacturers, and wholesalers in Ahmedabad and Gujarat.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SHOPIFY_METADATA.canonical}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://enquirybazaar.in",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Shopify Development Company in Ahmedabad",
            "item": SHOPIFY_METADATA.canonical,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SHOPIFY_METADATA.canonical}#faq`,
        "mainEntity": SHOPIFY_FAQS.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
