"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/content/projects";
import { ExternalLink, Layers3, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.14,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className="py-20 container-custom relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, -24, 14, 0], y: [0, 16, -12, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-16 w-64 h-64 rounded-full bg-secondary/10 blur-[82px]"
        />
      </div>

      <motion.div variants={item} className="mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-secondary/40 bg-secondary/10 text-secondary text-xs font-semibold tracking-wide mb-5">
          <Layers3 className="w-3.5 h-3.5" />
          Selected Projects
        </div>

        <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-text-muted max-w-2xl text-base md:text-lg">
          A selection of projects that showcase my skills in full-stack
          development, AI/ML, and real-time systems.
        </p>

        <div className="mt-6 signal-strip">
          <div className="signal-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="signal-text">
                LOADING PROJECT INDEX // ANALYZING SYSTEM DESIGN // DISPLAYING
                FEATURED MODULES //
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        className="grid md:grid-cols-3 gap-6 relative z-10"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -8, scale: 1.01 }}
            className="card-glass p-6 rounded-2xl hover:border-primary/70 transition-all duration-300 group shadow-lg shadow-black/20"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-2xs px-2.5 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-clash font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-text-muted text-sm mb-6 line-clamp-3">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-2xs px-2 py-1 bg-surface border border-border rounded text-text-muted"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-2xs px-2 py-1 text-text-muted">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  Live
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <Link
                href={`/projects/${project.id}`}
                className="ml-auto text-primary hover:text-secondary font-medium text-sm transition-colors inline-flex items-center gap-1"
              >
                View Details
                <Sparkles className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="mt-12 text-center">
        <Link
          href="/projects"
          className="button-secondary inline-flex items-center gap-2"
        >
          View All Projects
          <ExternalLink className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
