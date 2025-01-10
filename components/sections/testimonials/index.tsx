"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "./testimonial-card";
import { testimonials } from "@/lib/constants/content";

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))
          ) : (
            <p>No testimonials available.</p> // Optional: Display a message if there are no testimonials
          )}
        </div>
      </div>
    </section>
  );
}