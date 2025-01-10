"use client";

import { motion } from "framer-motion";
import { TimelineItem } from "./timeline-item";
import { experience } from "@/lib/constants/content";

export function Experience() {
  return (
    <section className="py-24 bg-muted/30" id="experience">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and key achievements
          </p>
        </motion.div>

        <div className="relative space-y-8">
          {experience.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}