import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { blogPosts } from "@/components/blog/blogData";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | EnquiryBazaar Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://enquirybazaar.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main id="main-content" className="bg-white min-h-screen">
        {/* Back link */}
        <div className="max-w-3xl mx-auto px-4 pt-24 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-600 font-medium transition-colors"
          >
            <ArrowLeft size={15} /> Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-3xl mx-auto px-4 pb-20">
          <header className="mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-4">
              <Tag size={11} /> {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readingTime}
              </span>
              <span className="font-medium text-gray-600">
                ✍️ {post.author}
              </span>
            </div>
          </header>

          {/* Cover Image */}
          {post.coverImage && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-2xl mb-8 object-cover max-h-96"
            />
          )}

          {/* ──────────────────────────────────────────────────────────────
              BLOG CONTENT GOES HERE
              blogData.ts mein apna post add karne ke baad yahan content
              automatically render hoga agar tum `content` field use karo.
              Abhi placeholder dikhega.
          ─────────────────────────────────────────────────────────────── */}
          <div className="prose prose-orange max-w-none text-gray-700 leading-relaxed mt-8">
            <p className="text-lg text-gray-500 italic border-l-4 border-orange-200 pl-4 mb-8">
              {post.excerpt}
            </p>

            {post.contentHtml ? (
              <div 
                dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
                className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h2]:pb-2 [&>h2]:border-b [&>h2]:border-gray-100 [&>p]:mb-5 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul>li]:mb-2 [&>ul>li>strong]:text-gray-900"
              />
            ) : (
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 text-center text-gray-400">
                <p className="text-3xl mb-2">✍️</p>
                <p className="font-medium text-gray-600">Content coming soon</p>
                <p className="text-sm mt-1">
                  blogData.ts mein is post ka content add karo.
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
