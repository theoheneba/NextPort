"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";
import type { Experience } from "@/lib/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 h-full w-px bg-border -translate-x-1/2" />
      
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
        className={`flex flex-col md:flex-row gap-8 ${
          index % 2 === 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Timeline dot */}
        <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
        </div>

        <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
          <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50" />
            <CardHeader>
              <CardTitle className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {experience.role}
                  </h3>
                  <Badge variant="secondary">{experience.period}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>{experience.company}</span>
                  </div>
                  {experience.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience.location}</span>
                    </div>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
              {experience.technologies && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}