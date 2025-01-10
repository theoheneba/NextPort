import { blogPosts } from "@/lib/constants/content";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container px-4 py-24 mx-auto max-w-4xl">
      <article>
        <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>
        
        {/* This is where the full blog post content would go */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Full blog post content would be rendered here...</p>
        </div>
      </article>
    </main>
  );
}