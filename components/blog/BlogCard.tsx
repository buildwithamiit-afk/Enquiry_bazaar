"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, Clock, Heart } from "lucide-react";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  coverImage?: string;
  tags?: string[];
  contentHtml?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  // Generate a consistent pseudo-random view count based on the slug
  const initialViewCount = React.useMemo(() => {
    let hash = 0;
    for (let i = 0; i < post.slug.length; i++) {
      hash = post.slug.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 4000 + 1000;
  }, [post.slug]);

  const [likes, setLikes] = useState(() => Math.abs(initialViewCount % 150) + 12);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
      {/* Invisible link covering the entire card */}
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-0" aria-label={`Read ${post.title}`} />

      {/* Cover Image */}
      <div className="w-full aspect-video bg-gray-100 flex flex-col items-center justify-center overflow-hidden relative pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.coverImage || "https://res.cloudinary.com/dxcakk4vq/image/upload/v1789206637/ChatGPT_Image_Sep_12_2026_03_19_53_PM_gkc2n6.png"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between relative pointer-events-none">
        <div>
          <span className="inline-block text-[10px] font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded uppercase tracking-wider mb-3">
            {post.category}
          </span>
          <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-tight text-lg line-clamp-2 mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs font-medium text-gray-400 mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <Eye size={14} className="text-gray-400" /> 
              {initialViewCount.toLocaleString()}
            </span>
            <button 
              onClick={handleLike}
              className={`relative pointer-events-auto flex items-center gap-1.5 transition-colors ${hasLiked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
              aria-label="Like post"
            >
              <Heart size={14} className={hasLiked ? "fill-current" : ""} />
              {likes}
            </button>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-gray-400" /> {post.readingTime}
          </span>
        </div>
      </div>
    </div>
  );
}
