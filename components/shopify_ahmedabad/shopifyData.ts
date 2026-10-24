export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  bestFor: string;
  priceRange: string;
  priceNote: string;
  timeline: string;
  highlights: string[];
  ctaText: string;
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  tag: string;
}

export interface IndustryItem {
  name: string;
  sector: string;
  useCase: string;
  features: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  days: string;
  description: string;
  outcome: string;
}

export interface CaseStudyItem {
  clientType: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  results: string[];
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const SHOPIFY_METADATA = {
  title: "Shopify Development Company in Ahmedabad | EnquiryBazaar",
  description:
    "Hire a Shopify development company in Ahmedabad for D2C and B2B stores. Fixed pricing, 2 to 4 week launch, full ownership. Get a free quote.",
  canonical: "https://enquirybazaar.in/shopify-development-company-ahmedabad",
  targetKeyword: "shopify development company in ahmedabad",
  h1: "Shopify Development Company in Ahmedabad",
  subheading:
    "We design, build and grow Shopify stores for D2C brands, manufacturers and wholesalers in Ahmedabad and across Gujarat. Fast stores, clean code, fixed pricing, and you own everything.",
  founder: "Amit Pandey",
  phoneDisplay: "+91 96967 17305",
  whatsappPhone: "+91 88870 48276",
  email: "growth@enquirybazaar.in",
  address: "SG Highway & Prahlad Nagar Business Corridor, Ahmedabad, Gujarat 380015",
  businessHours: "Mon to Sat, 9:30 AM to 7:30 PM IST",
};

export const QUICK_ANSWER_BLOCK = {
  summary:
    "EnquiryBazaar is a Shopify development company in Ahmedabad, Gujarat that builds custom Shopify stores, B2B wholesale stores, theme customizations, migrations and integrations for Indian brands and manufacturers. Projects typically launch in 2 to 4 weeks at fixed prices, with full ownership of the store, theme code and customer data handed to the client. Founder-led by software engineer Amit Pandey.",
  keyPoints: [
    "Fixed-price projects with milestone guarantees and no surprise retainers",
    "Deep specialization in Indian B2B wholesale, MOQs, and dealer ordering portals",
    "Native integrations with Razorpay, Cashfree, Shiprocket, Delhivery, Tally & Zoho",
    "100% store, theme code, and customer data ownership handed over to you",
  ],
};

export const TRUST_BAR_ITEMS = [
  "Founder-Led Engineering Team",
  "Fixed-Price Projects (No Surprises)",
  "100% Ownership of Store & Code",
  "Launch in 2 to 4 Weeks",
  "WhatsApp Support in Hindi, Gujarati & English",
];

export const WHY_AHMEDABAD_POINTS = [
  {
    title: "Gujarat's Manufacturing & Trading Capital",
    description:
      "Ahmedabad is India's heartbeat for textiles, ethnic wear, chemicals, pharma, jewellery, handicrafts, and packaging. These businesses need ecommerce platforms engineered for both retail D2C shoppers and high-value wholesale buyers.",
  },
  {
    title: "Indian Payment Gateway & UPI Optimization",
    description:
      "High checkout drop-offs hurt Indian stores. We build with 1-click UPI (PhonePe, Google Pay, Paytm), Razorpay, PayU, and Cashfree plus secure Cash on Delivery (COD) verification to prevent RTO losses.",
  },
  {
    title: "Automated Logistics & GST-Ready Invoicing",
    description:
      "Smooth integration with Delhivery, Shiprocket, and BlueDart for real-time tracking, along with automated B2B GST invoices featuring buyer GSTIN validation for clean accounting.",
  },
  {
    title: "Sub-2-Second Mobile-First Performance",
    description:
      "Over 82% of Indian shoppers browse on smartphones. We write clean Liquid code, compress assets, and tune Core Web Vitals to keep load speeds under 2 seconds across 4G and 5G networks.",
  },
];

export const SHOPIFY_SERVICES: ServiceItem[] = [
  {
    id: "store-development",
    title: "Shopify Store Development",
    shortDesc:
      "Complete store setup from scratch: theme setup, collection structure, high-converting product pages, mobile checkout, and payment/shipping setup.",
    tag: "D2C & Retail",
    deliverables: [
      "Custom brand typography, color palette, and conversion-optimized UX",
      "Razorpay, PayU, Cashfree UPI and COD payment gateway configuration",
      "Shiprocket & Delhivery automated shipping rates and label printing",
      "Automated Indian GST tax slabs and GST-compliant invoicing",
    ],
  },
  {
    id: "theme-customization",
    title: "Custom Shopify Theme Development & Customization",
    shortDesc:
      "We build custom themes or customize Shopify Dawn and premium themes with bespoke Liquid code so your brand never looks like a cookie-cutter template.",
    tag: "Custom Liquid",
    deliverables: [
      "Pixel-perfect custom sections tailored to your brand identity",
      "Dynamic product page layouts, custom size charts, and accordion tabs",
      "Mega menus, multi-currency display, and interactive product bundles",
      "Zero bloat code: clean, accessible, lightweight Shopify 2.0 architecture",
    ],
  },
  {
    id: "b2b-wholesale",
    title: "Shopify B2B & Wholesale Stores",
    shortDesc:
      "Sell directly to distributors, dealers, and bulk buyers with wholesale price lists, MOQ restrictions, tiered quantity discounts, and login-only catalogs.",
    tag: "Our Specialty",
    deliverables: [
      "Tiered bulk discounts (e.g., 50-100 pcs, 100-500 pcs, 1000+ pcs)",
      "Mandatory Minimum Order Quantity (MOQ) logic per variant or cart",
      "Instant Quote Request / RFQ forms for custom bulk manufacturing orders",
      "Dealer login portals with hidden pricing and automated GSTIN validation",
    ],
  },
  {
    id: "migration",
    title: "Shopify Migration (Zero SEO & Traffic Loss)",
    shortDesc:
      "Seamlessly migrate from WooCommerce, Magento, Wix, OpenCart, or custom legacy systems without losing products, customer history, or Google rankings.",
    tag: "Migration Experts",
    deliverables: [
      "Complete transfer of products, images, categories, and customer order history",
      "1-to-1 301 URL redirect mapping to protect every indexed Google URL",
      "Meta title, description, and canonical tag preservation across all pages",
      "Post-launch Google Search Console audit to verify zero ranking drops",
    ],
  },
  {
    id: "app-integration",
    title: "Shopify App & ERP/Tally Integration",
    shortDesc:
      "Custom Shopify apps and private API integrations connecting your store to Tally, Zoho Books, custom ERPs, WhatsApp notifications, and inventory tools.",
    tag: "API & Automation",
    deliverables: [
      "Bi-directional inventory sync between Shopify and Tally / Zoho Books",
      "Automated WhatsApp notifications for order confirmation, shipping, and abandoned carts",
      "CRM integrations with HubSpot, LeadSquared, and custom databases",
      "Custom private Shopify apps built for unique business workflows",
    ],
  },
  {
    id: "plus-headless",
    title: "Shopify Plus & Headless Commerce",
    shortDesc:
      "For high-volume Indian brands requiring custom checkout flows, headless Next.js or Shopify Hydrogen storefronts, and multi-store international scaling.",
    tag: "Enterprise Scale",
    deliverables: [
      "Shopify Plus checkout extensions, custom scripts, and loyalty points",
      "Headless storefronts built on Next.js / Hydrogen for sub-second page loads",
      "Multi-store setups for global export markets (USD, EUR, GBP, AED)",
      "High-traffic architecture engineered for flash sales and festive traffic spikes",
    ],
  },
  {
    id: "seo-speed",
    title: "Shopify SEO & Core Web Vitals Optimization",
    shortDesc:
      "Technical SEO, Product Schema, Collection page optimization, and deep Core Web Vitals cleanup to help your store outrank competitors on Google.",
    tag: "Organic Growth",
    deliverables: [
      "Comprehensive Schema.org Product, Organization, and FAQ JSON-LD markup",
      "Collection page optimization with search-friendly filters and canonical URLs",
      "Core Web Vitals remediation (LCP, INP, CLS) targeting green scores",
      "Third-party app script audit to eliminate render-blocking JavaScript",
    ],
  },
  {
    id: "maintenance",
    title: "Shopify Maintenance & Support",
    shortDesc:
      "Dedicated monthly support plans covering security updates, bug fixes, banner design, new product catalog uploads, and ongoing speed monitoring.",
    tag: "1 Year Support Included",
    deliverables: [
      "1 full year of dedicated post-launch support and technical assistance",
      "Monthly proactive store health audits, app compatibility checks, and backups",
      "Rapid turnaround for promotional banners, sale setups, and seasonal discounts",
      "Direct WhatsApp helpline access for your marketing and operations team",
    ],
  },
];

export const WHY_ENQUIRYBAZAAR_PILLARS = [
  {
    title: "Engineer-Led, Not a Sales Middleman",
    description:
      "Every store architecture is led directly by founder and software engineer Amit Pandey (100+ web platforms engineered). You speak directly with the engineers building your code, not commission-driven account managers.",
  },
  {
    title: "B2B & Manufacturer DNA",
    description:
      "Most agencies only understand retail D2C. Having built digital systems for 20+ Indian manufacturers, we understand MOQs, dealer credit terms, Ex-Factory pricing, freight tiers, and RFQ lead generation.",
  },
  {
    title: "100% Asset Ownership (No Lock-in)",
    description:
      "Your store, custom theme code, domain, apps, and customer database remain permanently in your own Shopify account. We hand over clean documentation and full administrative control at launch.",
  },
  {
    title: "Guaranteed Fixed Pricing in Writing",
    description:
      "No vague hourly billing or surprise monthly retainer invoices. You receive a structured statement of work with milestone-based fixed fees before any development begins.",
  },
  {
    title: "Built to Rank from Day One",
    description:
      "SEO is not an expensive upsell. Structured product schema, search-friendly URLs, meta tags, XML sitemaps, and Core Web Vitals optimization are engineered directly into the initial build.",
  },
  {
    title: "Direct WhatsApp Support in Hindi, Gujarati & English",
    description:
      "Instant, clear communication without convoluted support ticketing queues. Speak to us comfortably in Hindi, Gujarati, or English whenever you have questions or need adjustments.",
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    name: "Textiles & Garments",
    sector: "Ahmedabad Textile Hub",
    useCase: "Cotton fabrics, denim, uniform manufacturing, and bulk fabric rolls.",
    features: ["Swatch sample requests", "Roll / Meter pricing", "MOQ per colorway"],
  },
  {
    name: "Ethnic Wear & Sarees",
    sector: "D2C & Wholesale Fashion",
    useCase: "Chaniya cholis, bridal sarees, kurtis, and festive collections.",
    features: ["High-res zoom galleries", "Custom stitching options", "Video product reels"],
  },
  {
    name: "Jewellery & Accessories",
    sector: "High-Value Retail",
    useCase: "Gold-plated jewellery, diamond replicas, and silver lifestyle accessories.",
    features: ["Pincode delivery checks", "High-value COD verification", "Ring size visual guides"],
  },
  {
    name: "Chemicals & Dyes (B2B)",
    sector: "Vatva & Naroda Industrial Hub",
    useCase: "Industrial dyes, pigments, specialty solvents, and chemical raw materials.",
    features: ["TDS/MSDS download gates", "Barrel & Drum quantity breaks", "GSTIN mandatory checkout"],
  },
  {
    name: "Pharma & Wellness",
    sector: "Healthcare & OTC",
    useCase: "Nutraceuticals, ayurvedic supplements, herbal extracts, and personal wellness.",
    features: ["Batch expiry display", "Prescription upload if needed", "Subscription refill orders"],
  },
  {
    name: "Home Decor & Handicrafts",
    sector: "Artisanal & Export",
    useCase: "Handcrafted ceramics, wooden artefacts, brassware, and artisan textiles.",
    features: ["Global multi-currency (USD/EUR)", "Fragile freight calculation", "Artisan story pages"],
  },
  {
    name: "Food & FMCG",
    sector: "Packaged Goods",
    useCase: "Gujarat snacks (farsan), organic spices, cold-pressed oils, and tea blends.",
    features: ["Combo builder apps", "Freshness / Expiry assurance", "Free shipping threshold bars"],
  },
  {
    name: "Packaging & Corrugated Boxes",
    sector: "Industrial Packaging",
    useCase: "Custom printed cartons, courier mailer bags, and bubble rolls.",
    features: ["Per-box bulk tier matrix", "Custom dimension RFQ", "Instant sample kit purchase"],
  },
  {
    name: "Industrial & Hardware Suppliers",
    sector: "Machinery & Spares",
    useCase: "Fasteners, valves, pneumatic fittings, power tools, and industrial pumps.",
    features: ["Part number (SKU) search", "CAD file upload forms", "Bulk purchase order upload"],
  },
  {
    name: "Exporters & Merchant Traders",
    sector: "Global B2B Trade",
    useCase: "Agro commodities, spices, leather goods, and engineering components.",
    features: ["Incoterms (FOB/CIF) options", "Multi-lingual storefront", "RFQ inquiry basket"],
  },
  {
    name: "Beauty & Personal Care",
    sector: "Clean Cosmetics",
    useCase: "Organic skincare, cold-pressed hair oils, perfumes, and bath essentials.",
    features: ["Ingredient glossaries", "Customer review photo UGC", "Loyalty rewards & cross-sells"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Requirement Blueprint",
    days: "Day 1",
    description:
      "We dive deep into your product catalog, target audience (D2C vs B2B), Indian shipping/payment requirements, and branding vision to deliver a fixed-price scope of work.",
    outcome: "Clear project milestones, deliverables list, and fixed quotation.",
  },
  {
    step: "02",
    title: "Store Architecture & Custom Design",
    days: "Days 2 to 7",
    description:
      "We map category taxonomies, design high-converting desktop and mobile wireframes for homepage and product pages, and finalize brand typography and layouts for your review.",
    outcome: "Approved UI/UX wireframes and store layout hierarchy.",
  },
  {
    step: "03",
    title: "Theme Engineering & Integrations",
    days: "Days 7 to 18",
    description:
      "We develop custom Liquid sections, import product data, configure payment gateways (UPI/Razorpay/Cashfree), set up Shiprocket/Delhivery, and integrate GST invoicing.",
    outcome: "Fully functional staging store with live checkout and data sync.",
  },
  {
    step: "04",
    title: "Rigorous Testing & Speed Optimization",
    days: "Days 18 to 21",
    description:
      "End-to-end testing across 15+ mobile devices: real payment test runs, mobile UX responsiveness, Core Web Vitals speed tuning, and 301 redirect validation.",
    outcome: "Sub-2-second load speed, bug-free checkout, and verified SEO schema.",
  },
  {
    step: "05",
    title: "Live Launch, Video Training & 1-Year Support",
    days: "Days 21 to 28",
    description:
      "We point your custom domain, launch the live store, provide a recorded video training session on how to manage orders and inventory, and begin 1 full year of dedicated free support.",
    outcome: "Live revenue-ready store + 1 year of free dedicated support.",
  },
];

export const PRICING_PACKAGES: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Store",
    bestFor: "New brands & retailers launching their first online presence",
    priceRange: "Milestone-Based Scope",
    priceNote: "Fixed quote based on catalog setup",
    timeline: "1 to 2 Weeks",
    highlights: [
      "Up to 50 products catalog setup & categorized collections",
      "Premium Shopify 2.0 theme customization with brand styling",
      "Razorpay, PayU or Cashfree UPI + COD payment setup",
      "Shiprocket or Delhivery courier integration",
      "Automated Indian GST invoice generator",
      "Standard mobile optimization & on-page SEO setup",
      "1 year of dedicated post-launch technical support",
    ],
    ctaText: "Get Starter Store Scope",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth Store",
    badge: "Most Popular",
    bestFor: "Established D2C brands, boutiques & scaling retailers",
    priceRange: "Custom Design & Scale",
    priceNote: "Fixed milestone roadmap",
    timeline: "2 to 4 Weeks",
    highlights: [
      "100+ products with variant matrices, swatches & size guides",
      "Fully bespoke Shopify theme sections (custom Liquid code)",
      "High-converting 1-page checkout & sticky Add to Cart bars",
      "WhatsApp automated order tracking & abandoned cart recovery",
      "Advanced Product Schema & Collection SEO architecture",
      "Core Web Vitals speed optimization (Green mobile score)",
      "1 year of free post-launch developer support",
    ],
    ctaText: "Get Growth Store Scope",
    popular: true,
  },
  {
    id: "b2b-wholesale",
    name: "B2B / Wholesale Store",
    badge: "Manufacturer Choice",
    bestFor: "Gujarat manufacturers, distributors & bulk commodity sellers",
    priceRange: "Wholesale & B2B Portal",
    priceNote: "Tailored to MOQ & dealer rules",
    timeline: "3 to 6 Weeks",
    highlights: [
      "Dealer-specific tiered pricing & quantity break rules",
      "Mandatory MOQ logic and custom Request a Quote (RFQ) forms",
      "Password-protected wholesale catalog with dealer account approvals",
      "Tally Prime or Zoho Books inventory & invoice synchronization",
      "Automated GSTIN verification and B2B tax calculation",
      "Bulk CSV order upload & custom payment terms (NEFT/RTGS)",
      "1 year of free dedicated technical support",
    ],
    ctaText: "Get B2B Wholesale Scope",
    popular: false,
  },
  {
    id: "custom-plus",
    name: "Custom / Plus / Headless",
    bestFor: "High-volume enterprises, international exporters & fast-scaling D2Cs",
    priceRange: "Enterprise Architecture",
    priceNote: "Custom technical roadmap",
    timeline: "6 to 12 Weeks",
    highlights: [
      "Custom headless storefront engineered with Next.js or Shopify Hydrogen",
      "Shopify Plus checkout extensions and multi-currency global routing",
      "Custom private Shopify app development for proprietary ERP workflows",
      "Dedicated caching, edge CDN rendering, and sub-second page loads",
      "Enterprise security audits and load-tested for 100,000+ daily visitors",
      "1 year of enterprise support & maintenance agreement included",
    ],
    ctaText: "Consult Technical Architect",
    popular: false,
  },
];

export const PLATFORM_COMPARISON_TABLE = [
  {
    factor: "Launch Speed",
    shopify: "Fast (1 to 4 weeks)",
    woocommerce: "Medium (4 to 8 weeks)",
    customBuilt: "Slow (3 to 6 months)",
  },
  {
    factor: "Hosting & Server Security",
    shopify: "100% managed by Shopify (PCI Level 1, auto-scaling, 99.99% uptime)",
    woocommerce: "You manage servers, security patches, PHP updates & SSL manually",
    customBuilt: "You manage cloud servers (AWS/GCP), DevOps, backups & database scaling",
  },
  {
    factor: "Scaling for Sales Spikes (Diwali/Sale)",
    shopify: "Flawless: handles millions of simultaneous checkouts without crashing",
    woocommerce: "Prone to database lockups and crashes unless running expensive VPS",
    customBuilt: "Requires custom load balancers and auto-scaling Kubernetes/Docker setup",
  },
  {
    factor: "Upfront Development Cost",
    shopify: "Low to Medium (Predictable fixed project pricing)",
    woocommerce: "Low to Medium (Plugin costs stack up over time)",
    customBuilt: "High (Requires dedicated backend and frontend engineering teams)",
  },
  {
    factor: "B2B & Wholesale Capabilities",
    shopify: "Outstanding with modern B2B features, custom apps, or Shopify Plus",
    woocommerce: "Good via complex plugin configurations, but can slow down database",
    customBuilt: "100% customizable, but requires high engineering budget and maintenance",
  },
  {
    factor: "Ongoing Maintenance Burden",
    shopify: "Minimal: zero core updates or server crashes to worry about",
    woocommerce: "High: frequent plugin conflicts, broken updates, and security vulnerabilities",
    customBuilt: "High: requires ongoing developer contracts for bug fixes and infrastructure",
  },
  {
    factor: "Best Recommended For",
    shopify: "D2C brands, manufacturers, and wholesalers who want fast, reliable sales",
    woocommerce: "Content-heavy WordPress blogs with a minor ecommerce component",
    customBuilt: "Very niche marketplaces with proprietary non-standard checkout logic",
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    clientType: "Ahmedabad Ethnic Wear & Saree Brand",
    industry: "Apparel & Fashion D2C",
    location: "CG Road / Navrangpura, Ahmedabad",
    challenge:
      "A heritage Ahmedabad saree brand was struggling with a slow WooCommerce website that took 6.5 seconds to load on mobile and crashed during Diwali festive sales, leading to 78% checkout drop-off.",
    solution:
      "We rebuilt their store on Shopify 2.0 with a custom lightweight theme, integrated 1-click Razorpay UPI checkout, set up Shiprocket logistics, and configured automated abandoned cart WhatsApp alerts.",
    results: [
      "Mobile page load time reduced from 6.5s to 1.7s",
      "Checkout conversion rate increased by 210%",
      "Zero downtime during peak festive traffic with ₹18L+ single-day sales handled seamlessly",
    ],
    badge: "D2C Scaling Success",
  },
  {
    clientType: "Industrial Packaging & Corrugated Box Manufacturer",
    industry: "B2B Manufacturing & Wholesale",
    location: "Odhav & Naroda Industrial Area, Ahmedabad",
    challenge:
      "The manufacturer received hundreds of phone inquiries every week for basic carton rates, wasting staff hours on unverified buyers who only wanted single boxes rather than bulk pallets.",
    solution:
      "We engineered a custom Shopify B2B portal featuring tiered quantity pricing (500, 2000, 5000+ pcs), strict MOQ enforcement, a custom box dimension quotation calculator, and automated GST invoice generation.",
    results: [
      "140+ recurring dealer orders processed directly through the portal every month",
      "Eliminated 90% of retail 1-piece time-wasters through MOQ filtration",
      "Direct Tally integration eliminated manual re-entry of sales invoices",
    ],
    badge: "B2B Manufacturer Success",
  },
  {
    clientType: "Organic Wellness & Ayurvedic Personal Care Brand",
    industry: "D2C Healthcare & FMCG",
    location: "Prahlad Nagar, Ahmedabad",
    challenge:
      "The brand wanted to migrate their 800+ SKU store from WooCommerce to Shopify without losing organic Google rankings for 50+ high-traffic keywords, while modernizing their mobile checkout.",
    solution:
      "Conducted a meticulous migration: preserved product descriptions and customer accounts, implemented comprehensive 1-to-1 301 redirect mapping, upgraded to rich Product Schema, and set up PhonePe UPI payment flow.",
    results: [
      "Zero drop in organic search traffic; keyword rankings improved across 32 terms",
      "48% reduction in checkout abandonment via UPI 1-click payment",
      "Mobile Core Web Vitals score improved from 41 to 96 (Green)",
    ],
    badge: "SEO Migration Success",
  },
];

export const AREAS_SERVED_AHMEDABAD = [
  { name: "SG Highway", type: "Corporate Hub" },
  { name: "Prahlad Nagar", type: "Commercial District" },
  { name: "Satellite", type: "Retail & Business" },
  { name: "Navrangpura", type: "Commercial & Tech" },
  { name: "CG Road", type: "Fashion & Retail Hub" },
  { name: "Vastrapur", type: "Modern Commerce" },
  { name: "Bopal & South Bopal", type: "Rapid Growth Suburb" },
  { name: "Maninagar", type: "Trade & Commerce" },
  { name: "Naroda GIDC", type: "Industrial & Manufacturing" },
  { name: "Odhav GIDC", type: "Industrial & Engineering" },
  { name: "Vatva GIDC", type: "Chemical & Industrial" },
  { name: "Sanand GIDC", type: "Automobile & Heavy Industry" },
  { name: "Changodar Industrial Area", type: "Logistics & Manufacturing" },
  { name: "Gandhinagar", type: "Gujarat Capital & Tech Hub" },
  { name: "Surat", type: "Textile & Diamond Capital" },
  { name: "Vadodara", type: "Chemical & Engineering" },
  { name: "Rajkot", type: "Foundry & Hardware Hub" },
];

export const SHOPIFY_FAQS: FAQItem[] = [
  {
    question: "Which is the best Shopify development company in Ahmedabad?",
    answer:
      "The best choice depends on your business type. Large agencies suit enterprise and international brands. EnquiryBazaar is a strong fit for Indian D2C brands, manufacturers and wholesalers that want a fixed price, founder-led engineering, B2B features and full ownership. Always check portfolios, live stores and client reviews before choosing any agency.",
    category: "Selection",
  },
  {
    question: "How much does Shopify development cost in Ahmedabad?",
    answer:
      "Shopify development cost depends on your store scope: product catalog size, custom theme requirements, B2B wholesale features (such as MOQs, tiered pricing, dealer logins), and ERP or Tally integrations. Rather than vague hourly retainers, EnquiryBazaar reviews your catalog during a free 15-minute discovery call and delivers a transparent, fixed-price proposal with milestone deliverables in 24 to 48 hours.",
    category: "Cost & Scope",
  },
  {
    question: "How long does it take to build a Shopify store?",
    answer:
      "A simple store takes 1 to 2 weeks. A custom design with integrations takes 2 to 4 weeks. B2B wholesale, migration or custom app projects take 3 to 12 weeks, depending on scope and number of products.",
    category: "Timeline",
  },
  {
    question: "Should I hire a Shopify freelancer or an agency in Ahmedabad?",
    answer:
      "A freelancer can work for a small, simple store at lower cost, but carries risks of delays or abandonment. An agency or founder-led engineering team like EnquiryBazaar is safer when you need design, development, SEO, integrations and ongoing support from experienced engineers, with continuity if one person is unavailable.",
    category: "Hiring",
  },
  {
    question: "Can Shopify handle B2B and wholesale selling in India?",
    answer:
      "Yes. Shopify supports wholesale pricing, quantity rules, company accounts and customer-specific catalogs, depending on plan and setup. We add MOQ rules, GST invoicing, quote request forms and dealer logins for Indian wholesale buyers.",
    category: "B2B Ecommerce",
  },
  {
    question: "Can you migrate my WooCommerce or Magento store to Shopify without losing SEO?",
    answer:
      "Yes. We move products, customers and orders, map every old URL to a new one with 301 redirects, keep meta titles and descriptions, and monitor Google Search Console after launch to protect rankings.",
    category: "Migration",
  },
  {
    question: "Does Shopify work with Indian payment gateways and shipping partners?",
    answer:
      "Yes. Shopify works with Razorpay, PayU, Cashfree and other Indian gateways for UPI, cards, wallets, net banking and COD, and with shipping apps such as Shiprocket and Delhivery. We configure and test all of this before launch.",
    category: "Indian Integrations",
  },
  {
    question: "Will my Shopify store support GST invoices?",
    answer:
      "Yes. We set up GST tax settings and configure GST-compliant invoices, including GSTIN fields for B2B buyers, so your accounts team gets clean records.",
    category: "Compliance",
  },
  {
    question: "Shopify or WooCommerce: which is better for my business?",
    answer:
      "Shopify is better for fast launch, security, scaling and low maintenance. WooCommerce suits businesses already running WordPress with heavy content needs. We recommend based on your products, budget and team, not on what is easiest for us.",
    category: "Platform Comparison",
  },
  {
    question: "Do I own my Shopify store and code?",
    answer:
      "Yes. Your store, domain, theme code, apps and customer data stay in your own Shopify account. We hand over full access and documentation at launch.",
    category: "Ownership",
  },
  {
    question: "Do you provide Shopify maintenance and support after launch?",
    answer:
      "Yes. Every project includes 1 full year of free dedicated support covering updates, bug fixes, speed checks, security monitoring, and walkthrough guidance for your team.",
    category: "Support",
  },
  {
    question: "Can you build a custom Shopify app or integrate Tally, Zoho or an ERP?",
    answer:
      "Yes. We build custom Shopify apps and integrations to sync inventory, orders and invoices with Tally, Zoho, ERP and CRM tools, plus WhatsApp notifications for orders and quotes.",
    category: "Integrations",
  },
  {
    question: "Will you help my Shopify store rank on Google?",
    answer:
      "Yes. We build with SEO from day one: clean structure, product schema, fast loading, optimized collection pages and a blog plan. SEO results take time, usually 3 to 6 months, and nobody can honestly guarantee rankings.",
    category: "SEO",
  },
  {
    question: "Can I get a Shopify store in Hindi or Gujarati?",
    answer:
      "Yes. We can build multilingual storefronts and offer WhatsApp support in Hindi, Gujarati and English.",
    category: "Localization",
  },
  {
    question: "How do I get started?",
    answer:
      "Message us on WhatsApp or fill the form below. We will schedule a free 15-minute call, understand your requirement and send a fixed-price proposal within 24 to 48 hours.",
    category: "Getting Started",
  },
];
