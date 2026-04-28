import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: any) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
        {post.title}
      </h1>

      {/* Description */}
      <p className="text-center opacity-70 mt-4">
        {post.description}
      </p>

      {/* Divider */}
      <div className="w-16 h-[2px] bg-white mx-auto my-8 opacity-30"></div>

      {/* Content */}
      <div className="space-y-10 text-lg leading-8">
        {post.content.split("\n").map((line, i) => (
          <p
            key={i}
            className="text-center text-xl md:text-2xl font-medium tracking-wide"
          >
            {line}
          </p>
        ))}
      </div>

      {/* Share Section */}
      <div className="mt-12 text-center">
        <p className="mb-4 opacity-60">Share this Shayari</p>

        <div className="flex justify-center gap-4">
          <a
            href={`https://wa.me/?text=${encodeURIComponent(post.title)}`}
            target="_blank"
            className="px-4 py-2 border rounded-full hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>

          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
            target="_blank"
            className="px-4 py-2 border rounded-full hover:bg-white hover:text-black"
          >
            Twitter
          </a>
        </div>
      </div>
    </article>
  );
}