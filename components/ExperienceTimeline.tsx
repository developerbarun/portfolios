"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";
import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";

export default function ExperienceTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -24, filter: "blur(8px)" },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="py-20 container-custom relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 24, -14, 0], y: [0, -12, 18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-24 w-72 h-72 rounded-full bg-primary/10 blur-[88px]"
        />
      </div>

      <motion.div variants={item} className="mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/35 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-5">
          <Briefcase className="w-3.5 h-3.5" />
          Career Timeline
        </div>

        <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
          Experience
        </h2>
        <p className="text-text-muted max-w-2xl text-base md:text-lg">
          My professional journey through startups and established
          organizations.
        </p>

        <div className="mt-6 signal-strip">
          <div className="signal-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="signal-text">
                INDEXING WORK HISTORY // LOADING IMPACT METRICS // TIMELINE
                READY //
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={container} className="space-y-6 relative z-10">
        {experience.map((exp, index) => (
          <motion.div key={exp.id} variants={item} className="relative">
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
              <div className="absolute left-2.5 top-7 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              {index !== experience.length - 1 && (
                <div className="absolute left-4 top-11 w-0.5 h-[calc(100%+20px)] bg-gradient-to-b from-primary/70 to-transparent" />
              )}
            </div>

            <div className="ml-10 card-glass p-6 rounded-2xl border-l-4 border-primary hover:border-secondary transition-all hover:translate-y-[-2px]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h3 className="text-xl font-clash font-bold">{exp.role}</h3>
                    {exp.isCurrentRole && (
                      <span className="text-2xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-secondary font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-text-muted text-sm mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.slice(0, 2).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-text-muted text-sm flex gap-2"
                      >
                        <span className="text-primary">&gt;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 flex-1">
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-2xs px-2 py-1 bg-surface border border-border rounded text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="text-2xs px-2 py-1 text-text-muted">
                        +{exp.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="md:text-right flex-shrink-0">
                  <p className="text-text-muted text-sm font-medium">
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-2xs text-text-muted uppercase mt-1">
                    {exp.type === "full-time" ? "Full Time" : "Internship"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={item} className="mt-12 text-center">
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
        >
          View complete timeline
          <Sparkles className="w-4 h-4" />
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
