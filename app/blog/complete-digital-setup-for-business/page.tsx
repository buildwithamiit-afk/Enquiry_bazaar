import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Calendar,
  Clock,
  ArrowLeft,
  CheckCircle2,
  Globe,
  Share2,
  MapPin,
  Target,
  Search,
  MessageSquare,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  TrendingUp,
  Building2,
  Layers,
  Users,
} from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { whatsappCta } from "@/components/landing/content";

export const metadata: Metadata = {
  title: "Complete Digital Setup for Business | Website, Social Media & Ads",
  description:
    "Get a complete digital setup for your business including landing page, social media, Google Business Profile, Meta Ads, Google Ads, WhatsApp Business and basic training.",
  keywords: [
    "complete digital setup for business",
    "digital setup for business",
    "complete digital marketing setup",
    "online business setup",
    "business website and social media setup",
    "digital marketing setup services",
    "business online presence setup",
    "Google Business Profile optimisation",
    "Meta Ads setup",
    "Google Ads setup",
    "WhatsApp Business setup",
    "B2B lead generation India",
    "EnquiryBazaar",
  ],
  authors: [{ name: "Amit Pandey", url: "https://enquirybazaar.in/about" }],
  creator: "EnquiryBazaar",
  publisher: "EnquiryBazaar",
  alternates: {
    canonical: "https://enquirybazaar.in/blog/complete-digital-setup-for-business",
  },
  openGraph: {
    title: "Complete Digital Setup for Business: Everything You Need to Start Growing Online",
    description:
      "A simple, honest guide to setting up your business website, social media, Google Business Profile, ads, and WhatsApp Business in one place.",
    url: "https://enquirybazaar.in/blog/complete-digital-setup-for-business",
    siteName: "EnquiryBazaar",
    locale: "en_IN",
    type: "article",
    publishedTime: "2026-09-12T00:00:00.000Z",
    authors: ["Amit Pandey"],
    tags: [
      "Complete Digital Setup",
      "Digital Marketing Setup",
      "Google Business Profile",
      "Meta Ads",
      "Google Ads",
      "WhatsApp Business",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Digital Setup for Business | Website, Social Media & Ads",
    description:
      "Everything your business needs to build trust, get found on Google, run ads, and receive direct buyer inquiries.",
  },
};

export default function CompleteDigitalSetupBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Digital Setup for Business: Everything You Need to Start Growing Online",
    description:
      "A complete one time setup service covering your landing page website, social media profiles, Google Business Profile, advertising accounts, and WhatsApp Business.",
    author: {
      "@type": "Person",
      name: "Amit Pandey",
      url: "https://enquirybazaar.in/about",
      jobTitle: "Founder",
    },
    publisher: {
      "@type": "Organization",
      name: "EnquiryBazaar",
      url: "https://enquirybazaar.in",
      logo: {
        "@type": "ImageObject",
        url: "https://enquirybazaar.in/icon.png",
      },
    },
    datePublished: "2026-09-12T08:00:00+05:30",
    dateModified: "2026-09-12T08:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://enquirybazaar.in/blog/complete-digital-setup-for-business",
    },
    keywords:
      "complete digital setup for business, digital setup for business, complete digital marketing setup, online business setup, Google Business Profile optimisation, Meta Ads setup, Google Ads setup, WhatsApp Business setup",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is a website included in the package?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A fast, mobile friendly business landing page is included. It clearly explains your business, your products, your pricing or MOQ, and gives visitors direct buttons to call or message you on WhatsApp.",
        },
      },
      {
        "@type": "Question",
        name: "Is social media management included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The package covers complete profile setup, bio writing, branding banners, and link integration on Instagram, Facebook, LinkedIn, Pinterest, and YouTube. Daily posting and regular content creation are separate services if you need them later.",
        },
      },
      {
        "@type": "Question",
        name: "Are Meta Ads and Google Ads included?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The package sets up your ad accounts, business manager, tracking pixel, lead form, and first campaign structure. Ongoing ad management and the budget you pay directly to Google or Meta are separate.",
        },
      },
      {
        "@type": "Question",
        name: "Will I get guaranteed leads?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No genuine marketing agency can promise a fixed number of leads without testing your market, product demand, and advertising budget. What this package does is build the right foundation so you stop wasting visitors and start capturing inquiries smoothly.",
        },
      },
      {
        "@type": "Question",
        name: "Can I manage everything myself after the setup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We give you full master access to all your logins. We also provide simple 1 on 1 training so you and your staff can update contact numbers, add products, and reply to customers with full confidence.",
        },
      },
      {
        "@type": "Question",
        name: "Is this suitable for a traditional or new business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. It is made for factory owners, wholesalers, traders, local service providers, and new startups who want a solid online presence without wasting months dealing with multiple freelancers.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main id="main-content" className="bg-slate-50 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="max-w-4xl mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-orange-600 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate">
              Complete Digital Setup for Business
            </span>
          </nav>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full transition-colors"
          >
            <ArrowLeft size={13} /> Back to all articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 pb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider bg-orange-600 text-white px-3 py-1 rounded-full">
              Business Growth Guide
            </span>
            <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
              Digital Marketing Setup Services
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.18] mb-6">
            Complete Digital Setup for Business: Everything You Need to Start Growing Online
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed mb-6">
            Starting a business is one thing. Getting customers online is another. Instead of hiring five different freelancers for your website, social media, Google profile, ads, and WhatsApp, here is how to get the entire digital foundation done in one place.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200 text-xs md:text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  AP
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Amit Pandey</p>
                  <p className="text-[11px] text-gray-500">Founder, EnquiryBazaar</p>
                </div>
              </div>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-1">
                <Calendar size={14} className="text-orange-500" /> 12 Sep 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} className="text-orange-500" /> 7 min read
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                <ShieldCheck size={13} /> Practical &amp; To The Point
              </span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <article className="bg-white rounded-2xl border border-gray-200 p-6 md:p-12 shadow-sm space-y-12">
            
            {/* Quick Summary Box */}
            <section className="bg-gradient-to-br from-orange-50 via-amber-50/40 to-white rounded-xl border border-orange-200 p-6 md:p-8">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-orange-500 text-white rounded-lg mt-0.5 shadow-sm">
                  <Sparkles size={18} />
                </div>
                <div className="space-y-3">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    What Is a Complete Digital Setup for Business?
                  </h2>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    A <strong>Complete Digital Setup for Business</strong> is a one time setup service that prepares your company for online customer inquiries. It covers your <strong>website landing page, social media profiles, Google Business Profile, advertising accounts, and WhatsApp Business</strong>.
                  </p>
                  <p className="text-gray-800 font-semibold text-sm">
                    The goal is very simple: Make your business easy to find, easy to trust, and easy to contact online.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-medium text-gray-700">
                    <div className="bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <Globe size={14} className="text-orange-600 shrink-0" />
                      <span>1. Web Landing Page</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <MapPin size={14} className="text-orange-600 shrink-0" />
                      <span>2. Google Profile</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <Target size={14} className="text-orange-600 shrink-0" />
                      <span>3. Meta &amp; Google Ads</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-orange-100 flex items-center gap-2">
                      <MessageSquare size={14} className="text-orange-600 shrink-0" />
                      <span>4. WhatsApp Business</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Realistic Scenario */}
            <section className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
              <h2 className="text-2xl font-bold text-gray-900">Why Most Businesses Struggle to Get Online Inquiries</h2>
              <p>
                Think about how customers buy today. When someone looks for a supplier, manufacturer, or service in India, they usually take these steps:
              </p>
              <div className="bg-slate-50 border border-gray-200 rounded-xl p-5 space-y-2 text-sm md:text-base">
                <p>1. They search on Google to see who is nearby or who provides the service.</p>
                <p>2. They check your Google reviews to see if people trust you.</p>
                <p>3. They look at your social media pages to see if your business is active.</p>
                <p>4. They open your website to check your products and minimum order quantity.</p>
                <p>5. If they like what they see, they click WhatsApp or call you directly.</p>
              </div>
              <p>
                Now imagine what happens if any of these pieces is missing. If your website takes 10 seconds to load, if your Instagram has zero posts, or if there is no direct WhatsApp button, the customer simply clicks the back button and calls your competitor.
              </p>
              <p>
                Instead of managing different people for website design, social media posts, Google Maps, ad campaigns, and WhatsApp, you can get the complete digital setup done together.
              </p>
            </section>

            {/* What is Included: 7 Clear Inclusions */}
            <section className="space-y-8">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">
                  Clear Deliverables
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  What Is Included in the Complete Digital Setup?
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Here is the exact work done for your business under this setup:
                </p>
              </div>

              {/* 1. Landing Page */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    1
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Professional Business Landing Page
                      </h3>
                      <span className="text-xs bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full font-medium">
                        Your Digital Showroom
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Your website is often the first place where a buyer learns about your business. We build a clean, mobile friendly landing page focused on getting calls and WhatsApp chats. It covers:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Clear explanation of what your business does
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Product photos, specifications, and MOQ
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Why customers should choose you over competitors
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> 1-tap WhatsApp button and phone call buttons
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Simple inquiry lead capture form
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Fast page speed on all mobile devices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Social Media Setup */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    2
                  </div>
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Complete Social Media Setup across 5 Platforms
                      </h3>
                      <span className="text-xs bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full font-medium">
                        Trust &amp; Verification
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Buyers check social media to see if you are a legitimate operating company. We create, brand, and set up your profiles on all major networks:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-100">
                        <p className="font-bold text-gray-900 text-sm mb-1">Instagram Business</p>
                        <p className="text-xs text-gray-600">
                          Professional bio, business category, contact buttons, highlights structure, and direct link to your website or WhatsApp.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-100">
                        <p className="font-bold text-gray-900 text-sm mb-1">Facebook Business Page</p>
                        <p className="text-xs text-gray-600">
                          Cover banner, about section, operational hours, verified address, and WhatsApp message button setup.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-100">
                        <p className="font-bold text-gray-900 text-sm mb-1">LinkedIn Company Page</p>
                        <p className="text-xs text-gray-600">
                          Important for B2B companies, factories, and consultants. Business overview, company size, industry tag, and contact links.
                        </p>
                      </div>
                      <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-100">
                        <p className="font-bold text-gray-900 text-sm mb-1">Pinterest &amp; YouTube</p>
                        <p className="text-xs text-gray-600">
                          Pinterest visual boards for product visibility, and YouTube channel setup with brand banners ready for your future product videos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Google Business Profile */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    3
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Google Business Profile Optimisation
                      </h3>
                      <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">
                        Local Calls &amp; Enquiries
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      When someone in your city or region searches for your product or service on Google, your Google Business Profile brings customers to your door. We optimise your profile so customers can easily call you, visit your website, or find directions.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Primary and secondary category setup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Full products and services list with descriptions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Correct business hours and location pinpoint
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Review link generation to collect customer reviews easily
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Link
                        href="/google-business-profile-optimization-agency-navi-mumbai"
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 underline"
                      >
                        Learn more about our Google Business Profile optimization services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Meta Ads Setup */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    4
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Meta Ads Setup (Facebook &amp; Instagram Ads)
                      </h3>
                      <span className="text-xs bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full font-medium">
                        Paid Lead Generation Ready
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Facebook and Instagram ads can be very effective for generating wholesale and retail inquiries. Instead of simply clicking &ldquo;Boost Post&rdquo; and wasting money, we set up your official advertising backend:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Meta Business account and Ad account setup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Meta tracking pixel installed on your website
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Instant lead generation form configuration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Click-to-WhatsApp ad campaign setup
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Google Ads Setup */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    5
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Google Ads Setup
                      </h3>
                      <span className="text-xs bg-orange-50 text-orange-700 px-2.5 py-0.5 rounded-full font-medium">
                        Capture Active Buyers
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Google Search Ads show your business to people who are actively typing what you sell right now. We build the exact foundation required to start search campaigns:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Google Ads account creation and billing configuration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> High-intent keyword research for your products
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Negative keyword list to avoid wasted ad spend
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Conversion tracking setup for phone clicks and form leads
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Link
                        href="/b2b-google-ads-agency-navi-mumbai"
                        className="text-xs font-semibold text-orange-600 hover:text-orange-700 underline"
                      >
                        Explore our full B2B Google Ads agency services →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. WhatsApp Business */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    6
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        WhatsApp Business Setup &amp; Routing
                      </h3>
                      <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">
                        Instant Closing Channel
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      In India, customers prefer WhatsApp because it is fast and familiar. We configure your official WhatsApp Business account properly:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Professional business profile, description, and website link
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> WhatsApp product catalog setup with photos and descriptions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Automated welcome greeting and quick reply templates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Direct link integration connecting website visitors to your chat
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 7. Basic Training */}
              <div className="border border-gray-200 rounded-xl p-6 md:p-8 hover:border-orange-300 transition-colors bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-bold text-lg">
                    7
                  </div>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        Basic Hands-on Training Included
                      </h3>
                      <span className="text-xs bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full font-medium">
                        Zero Agency Dependency
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">
                      Setting everything up is only the first step. You and your team should know how to handle things after the setup is done. We do not keep you dependent on us for small changes. We provide simple guidance on:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 pt-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> How to update your contact details, address, and catalog
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> How to quickly respond to WhatsApp and website inquiries
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> How to manage your Google Business Profile and reviews
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" /> Basic understanding of your Google and Meta ad dashboards
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* The Connected Customer Journey */}
            <section className="bg-gradient-to-r from-orange-50 via-amber-50 to-orange-50 rounded-2xl p-6 md:p-10 border border-orange-200">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 text-center">
                How It Works for Your Customer
              </h2>
              <p className="text-gray-600 text-sm md:text-base text-center max-w-2xl mx-auto mb-8">
                When your digital presence is connected properly, this is the smooth journey your customer experiences:
              </p>

              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center text-xs md:text-sm font-semibold">
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 w-full md:w-auto flex-1">
                  <span className="text-orange-500 font-bold block text-base mb-1">Step 1</span>
                  Google Search or Ad
                  <p className="text-[11px] font-normal text-gray-500 mt-1">
                    Customer searches for your product
                  </p>
                </div>
                <div className="text-orange-400 font-bold text-lg hidden md:block">→</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 w-full md:w-auto flex-1">
                  <span className="text-orange-500 font-bold block text-base mb-1">Step 2</span>
                  Landing Page
                  <p className="text-[11px] font-normal text-gray-500 mt-1">
                    Sees clear products, MOQ &amp; specs
                  </p>
                </div>
                <div className="text-orange-400 font-bold text-lg hidden md:block">→</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 w-full md:w-auto flex-1">
                  <span className="text-orange-500 font-bold block text-base mb-1">Step 3</span>
                  Trust &amp; Reviews
                  <p className="text-[11px] font-normal text-gray-500 mt-1">
                    Validates Google profile &amp; socials
                  </p>
                </div>
                <div className="text-orange-400 font-bold text-lg hidden md:block">→</div>
                <div className="bg-white p-4 rounded-xl shadow-sm border border-orange-100 w-full md:w-auto flex-1">
                  <span className="text-orange-500 font-bold block text-base mb-1">Step 4</span>
                  Direct Inquiry
                  <p className="text-[11px] font-normal text-gray-500 mt-1">
                    Sends message on WhatsApp or calls
                  </p>
                </div>
              </div>
            </section>

            {/* Setup First. Marketing Next. */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Setup First. Marketing Next.
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Many business owners make the mistake of running ads before their website or WhatsApp is set up properly. That is like putting money into a bucket with holes in it.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                The setup creates the foundation. Marketing brings people to that foundation. Once your complete setup is ready, your marketing budget actually produces results:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <h3 className="text-base font-bold text-emerald-900 mb-2">
                    Phase 1: Complete Digital Setup (One-Time)
                  </h3>
                  <ul className="text-xs md:text-sm text-emerald-800 space-y-2">
                    <li>✓ High-converting business landing page</li>
                    <li>✓ 5 branded social media profiles</li>
                    <li>✓ Fully optimized Google Business Profile</li>
                    <li>✓ Business WhatsApp profile and catalog</li>
                    <li>✓ Google Ads and Meta Ads account foundation</li>
                    <li>✓ Tracking setup and basic owner training</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                  <h3 className="text-base font-bold text-blue-900 mb-2">
                    Phase 2: Ongoing Marketing (Whenever You Are Ready)
                  </h3>
                  <ul className="text-xs md:text-sm text-blue-800 space-y-2">
                    <li>→ Running regular Google Ads search campaigns</li>
                    <li>→ Running Meta lead generation campaigns</li>
                    <li>→ Posting updates on social media</li>
                    <li>→ Gathering more customer reviews</li>
                    <li>→ Long term SEO ranking for local queries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Who Needs This Package */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Who Needs a Complete Digital Setup?
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                This package is suitable for businesses that are starting fresh or have an incomplete online presence:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                {[
                  { title: "Manufacturers & Factory Owners", desc: "Factories that want direct buyer inquiries on phone and WhatsApp without relying on commission portals." },
                  { title: "Wholesalers & Traders", desc: "Dealers and distributors looking to get bulk orders from retailers and commercial buyers." },
                  { title: "New Startups & Businesses", desc: "Founders launching a new brand who need professional online credibility from day one." },
                  { title: "Service Providers & Consultants", desc: "Agencies, contractors, and corporate consultants who need an authoritative online profile." },
                  { title: "Local Retail & MSMEs", desc: "Local business owners who want to show up on Google Maps when people search nearby." },
                  { title: "Traditional Offline Businesses", desc: "Family-run businesses moving from word-of-mouth to modern digital channels." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl border border-gray-200 bg-slate-50/50 hover:bg-white hover:border-orange-200 transition-all"
                  >
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step Implementation */}
            <section className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase">
                  Simple 6-Step Process
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  How the Process Works
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  We keep the workflow straightforward and transparent:
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    step: "01",
                    title: "Understand Your Business",
                    desc: "We discuss what you sell, your target customers, your pricing, and your primary location.",
                  },
                  {
                    step: "02",
                    title: "Collect Business Information",
                    desc: "You send us your company logo, product photos, contact phone numbers, and basic details.",
                  },
                  {
                    step: "03",
                    title: "Build Your Digital Foundation",
                    desc: "We design your landing page, set up your 5 social profiles, configure your Google Business Profile, and prepare your ad accounts.",
                  },
                  {
                    step: "04",
                    title: "Connect Everything",
                    desc: "We test your WhatsApp buttons, inquiry form, and tracking to make sure every customer lead reaches you directly.",
                  },
                  {
                    step: "05",
                    title: "Basic Training & Handover",
                    desc: "We show you how to manage your profiles and hand over all master logins to you.",
                  },
                  {
                    step: "06",
                    title: "Start Marketing",
                    desc: "Your business is now ready to receive customers from Google search, ads, and word-of-mouth.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-orange-200 transition-colors"
                  >
                    <span className="text-orange-600 font-extrabold text-sm md:text-base bg-orange-50 px-2.5 py-1 rounded-md shrink-0">
                      {s.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm md:text-base">{s.title}</h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Comparison Table */}
            <section className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                Complete Digital Setup vs. The Other Options
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 bg-slate-100">
                      <th className="p-3 font-bold text-gray-700">Feature</th>
                      <th className="p-3 font-bold text-orange-600 bg-orange-50/80">EnquiryBazaar Setup</th>
                      <th className="p-3 font-bold text-gray-700">Multiple Freelancers</th>
                      <th className="p-3 font-bold text-gray-700">Listing Portals (IndiaMART etc.)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr>
                      <td className="p-3 font-semibold">Account Ownership</td>
                      <td className="p-3 bg-orange-50/40 text-emerald-700 font-medium">100% owned by you</td>
                      <td className="p-3">Scattered across different people</td>
                      <td className="p-3 text-red-600">You do not own the platform</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Lead Sharing</td>
                      <td className="p-3 bg-orange-50/40 text-emerald-700 font-medium">Direct to your phone only</td>
                      <td className="p-3">Direct to you</td>
                      <td className="p-3 text-red-600">Shared with 5 to 10 competitors</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Brand Consistency</td>
                      <td className="p-3 bg-orange-50/40 text-emerald-700 font-medium">Same logo, colors, and tone</td>
                      <td className="p-3 text-amber-700">Mismatch in design</td>
                      <td className="p-3">Generic directory listing</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Pricing Structure</td>
                      <td className="p-3 bg-orange-50/40 font-medium">Clear one-time setup</td>
                      <td className="p-3">Unclear hourly costs</td>
                      <td className="p-3 text-red-600">Costly recurring yearly renewal</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold">Training Provided</td>
                      <td className="p-3 bg-orange-50/40 text-emerald-700 font-medium">Yes, 1-on-1 walkthrough</td>
                      <td className="p-3">Almost never</td>
                      <td className="p-3">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Internal Resources Link Box */}
            <section className="bg-slate-100/80 rounded-xl p-6 border border-gray-200 space-y-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Layers size={18} className="text-orange-600" /> Helpful Free Resources for Business Growth
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                You can also try our free utility calculators built for Indian businesses:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <Link
                  href="/tools/wholesale-moq-landed-price-calculator"
                  className="text-xs font-semibold text-gray-800 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                >
                  Wholesale Landed Price Calculator →
                </Link>
                <Link
                  href="/tools/gmb-rating-calculator"
                  className="text-xs font-semibold text-gray-800 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                >
                  Google Maps Rating Calculator →
                </Link>
                <Link
                  href="/lead-generation-agency-for-manufacturers-navi-mumbai"
                  className="text-xs font-semibold text-gray-800 bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-orange-500 transition-colors"
                >
                  Lead Generation for Manufacturers →
                </Link>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-6 pt-4 border-t border-gray-200">
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-orange-600 uppercase flex items-center gap-1.5">
                  <HelpCircle size={14} /> Clear Answers
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                  Here are straightforward answers to common questions about this package:
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    q: "Is a website included in the package?",
                    a: "Yes. A modern, mobile-friendly business landing page is included as part of the digital setup. It covers your products, why customers should choose you, and direct buttons to contact you on WhatsApp or phone.",
                  },
                  {
                    q: "Is social media management included?",
                    a: "The package includes complete profile setup, bio writing, branding banners, and link integration across Instagram, Facebook, LinkedIn, Pinterest, and YouTube. Regular daily posting and ongoing content creation can be taken as a separate ongoing service if needed.",
                  },
                  {
                    q: "Are Meta Ads and Google Ads included?",
                    a: "The package includes the initial advertising setup and account configuration. Ongoing campaign management and your direct ad budget paid to Google or Meta are separate.",
                  },
                  {
                    q: "Will I get guaranteed leads?",
                    a: "No genuine digital marketing service should promise a fixed number of leads without considering your business, market, offer, audience, and ad budget. The purpose of this package is to create the right digital foundation so your business is ready for marketing and lead generation.",
                  },
                  {
                    q: "Can I manage everything myself after the setup?",
                    a: "Yes. Basic training is included to help you understand how to manage your important platforms, make basic updates, and reply to customers.",
                  },
                  {
                    q: "Is this suitable for a new business?",
                    a: "Yes. It is especially useful for businesses starting their online presence and wanting to establish the essential digital channels from the very beginning.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-gray-200 bg-slate-50/50 space-y-2 hover:border-orange-200 transition-colors"
                  >
                    <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                      <span className="text-orange-600 font-bold">Q:</span> {faq.q}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed pl-5">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Final CTA Box */}
            <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-xl">
              <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                Build Your Online Presence
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Get Your Digital Foundation Ready. <br className="hidden sm:inline" />
                Then Focus on Growing Your Business.
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                If your business needs a professional digital presence and you want to prepare your website, social media, Google Business Profile, WhatsApp, and advertising setup in one place, Complete Digital Setup for Business is a practical starting point.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={whatsappCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-emerald-900/30"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  Chat on WhatsApp with Us
                </a>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm shadow-lg shadow-orange-900/30"
                >
                  Book Free Consultation <ArrowRight size={15} />
                </Link>
              </div>
              <p className="text-xs text-slate-400">
                Direct discussion with Amit Pandey and the EnquiryBazaar team.
              </p>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
