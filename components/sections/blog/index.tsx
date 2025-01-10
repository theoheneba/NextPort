"use client";

import { motion } from "framer-motion";
import { BlogCard } from "./blog-card";
import { blogPosts } from "@/lib/constants/content"; // Ensure this is correctly imported

export function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts and insights about web development and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(blogPosts) && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))
          ) : (
            <p>No blog posts available.</p> // Optional: Display a message if there are no blog posts
          )}
        </div>
      </div>
    </section>
  );
}