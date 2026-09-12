import type { Metadata } from "next";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/components/blog/blogData";

export const metadata: Metadata = {
  title: "Blog | B2B Marketing and Lead Generation Insights | EnquiryBazaar",
  description:
    "Expert tips, case studies, and practical strategies for Indian businesses to get direct buyer inquiries, Google ranking, Google Ads, Meta Ads, and WhatsApp setup.",
  alternates: {
    canonical: "https://enquirybazaar.in/blog",
  },
};

export default function BlogListingPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-24 pb-14 px-4 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-orange-500 uppercase mb-3">
            EnquiryBazaar Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Insights for Indian{" "}
            <span className="text-orange-500">Manufacturers</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            B2B marketing strategies, Google ranking tips, and case studies
            crafted for factory owners & MSME businesses.
          </p>
        </section>

        {/* Posts Grid */}
        <section className="max-w-5xl mx-auto px-4 py-12">
          {blogPosts.length === 0 ? (
            <div className="text-center text-gray-400 py-20">
              <p className="text-5xl mb-4">✍️</p>
              <p className="text-lg font-medium">Posts coming soon…</p>
              <p className="text-sm mt-2">
                blogData.ts mein apna pehla post add karo.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
