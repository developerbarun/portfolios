"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    slug: "building-scalable-systems-spring-boot",
    title: "Building Scalable Systems with Java Spring Boot",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    excerpt:
      "A deep dive into building enterprise-grade backend systems using Spring Boot and best practices for scalability.",
    tags: ["Java", "Spring Boot", "Backend", "Architecture"],
    category: "Tech",
  },
  {
    slug: "fullstack-development-react-nodejs",
    title: "Full Stack Development: From React to Node.js",
    date: "Oct 28, 2024",
    readTime: "6 min read",
    excerpt:
      "Complete guide to full stack JavaScript development with React frontend and Node.js backend.",
    tags: ["React", "Node.js", "Full Stack", "TypeScript"],
    category: "Tech",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function MotionBlogGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {blogPosts.map((post) => (
        <motion.article
          key={post.slug}
          variants={item}
          className="card-glass p-8 rounded-xl hover:border-primary transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex-1">
              {/* Category Badge */}
              <div className="mb-3">
                <span className="text-2xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-clash font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-text-muted mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2 text-text-muted text-sm">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-2xs px-2 py-1 bg-surface border border-border rounded text-text-muted hover:text-primary transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Read More Link */}
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-all group/link whitespace-nowrap mt-4 md:mt-0"
            >
              Read Article
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
