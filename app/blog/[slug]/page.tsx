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

          {/* Feedback Section */}
          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Have feedback or suggestions?</h3>
            <p className="text-gray-600 mb-6 text-sm max-w-lg mx-auto">
              We are always looking to improve our content. If you have any thoughts, corrections, or just want to say hi, we would love to hear from you!
            </p>
            <a 
              href={`https://wa.me/919696717305?text=${encodeURIComponent(`Hi EnquiryBazaar! I just read your blog post "${post.title}" and I have some feedback:`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-2.5 px-6 rounded-xl transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Share Feedback on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
