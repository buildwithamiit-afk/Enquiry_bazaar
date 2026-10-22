import React from "react";
import { mfgFaqList } from "./mfgFaqData";

export function MfgStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#webpage",
        "url": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers",
        "name": "Custom Software, Website & Landing Page Development for Manufacturers | EnquiryBazaar",
        "description":
          "EnquiryBazaar engineers custom factory software, industrial ERPs, high-speed digital catalog websites, and negative-filtered B2B landing pages for manufacturing companies with 100% source code ownership.",
        "isPartOf": {
          "@id": "https://enquirybazaar.in/#website",
        },
        "about": [
          { "@id": "https://enquirybazaar.in/#organization" },
          { "@id": "https://enquirybazaar.in/about/amit-pandey#person" },
        ],
        "inLanguage": "en-IN",
      },
      {
        "@type": "Organization",
        "@id": "https://enquirybazaar.in/#organization",
        "name": "EnquiryBazaar",
        "url": "https://enquirybazaar.in/",
        "logo": "https://enquirybazaar.in/hero.png",
        "founder": {
          "@id": "https://enquirybazaar.in/about/amit-pandey#person",
        },
        "description":
          "EnquiryBazaar is a specialized industrial technology and B2B growth engineering agency helping manufacturers scale through custom software, digital catalog websites, and verified buyer acquisition.",
        "telephone": "+91-9696717305",
        "knowsAbout": [
          "Custom Software Development for Manufacturers",
          "Manufacturing Website Design and Development",
          "B2B Landing Pages for Factory Owners",
          "Industrial ERP & Inventory Software",
          "Automated Landed Quotation PDF Engines",
          "Next.js Industrial Web Applications",
          "Direct WhatsApp RFQ Procurement Automation",
          "SAP and Zoho Alternative for Manufacturing MSMEs",
          "IndiaMART Alternative for Factory Owners",
          "Generative Engine Optimization for Manufacturers",
          "Technical Data Sheet TDS and CAD Catalog Websites",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://enquirybazaar.in/about/amit-pandey#person",
        "name": "Amit Pandey",
        "jobTitle": "Software Engineer & Founder",
        "worksFor": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "description":
          "Amit Pandey is a Software Engineer, Serial Tech Entrepreneur, and the Founder of EnquiryBazaar. He previously founded Devlo.in, architected multi-tenant SaaS engines, and partnered directly with 20+ manufacturing companies to build proprietary technology.",
        "url": "https://enquirybazaar.in/about/amit-pandey",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#service-software",
        "name": "Custom Industrial Software & Factory ERP Development",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "Custom Software Engineering",
        "areaServed": "Global",
        "description":
          "Custom web-based production tracking, job cards, raw material inventory, and automated landed cost quotation calculation systems designed specifically for factory owners with 100% source code ownership.",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#service-website",
        "name": "High-Speed Manufacturing Website & Digital Catalog Development",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "Industrial Web Development",
        "areaServed": "Global",
        "description":
          "Sub-second Next.js manufacturing catalog websites with downloadable CAD blueprints, technical data sheets (TDS), ISO compliance proofs, and pre-filled WhatsApp RFQ triggers.",
      },
      {
        "@type": "Service",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#service-landing-page",
        "name": "High-Converting B2B Landing Pages for Manufacturers",
        "provider": {
          "@id": "https://enquirybazaar.in/#organization",
        },
        "serviceType": "Conversion Rate Optimization & Lead Generation",
        "areaServed": "Global",
        "description":
          "Dedicated product landing pages equipped with strict MOQ and business verification filters to block retail single-piece callers and capture high-margin corporate purchase contracts.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#breadcrumb",
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
            "name": "Custom Software & Websites for Manufacturers",
            "item": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://enquirybazaar.in/custom-software-and-website-development-for-manufacturers#faq",
        "mainEntity": mfgFaqList.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
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
