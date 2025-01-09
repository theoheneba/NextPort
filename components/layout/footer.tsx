"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { siteConfig } from "@/lib/constants/content";

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={siteConfig.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">About</h3>
            <p className="text-muted-foreground">
              Professional full-stack developer specializing in building exceptional
              digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border text-center text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}