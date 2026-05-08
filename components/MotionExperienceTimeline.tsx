"use client";

import { motion } from "framer-motion";
import { experience } from "@/content/experience";

export function MotionExperienceTimeline() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-8"
    >
      {experience.map((exp) => (
        <motion.div key={exp.id} variants={item} className="relative">
          {/* Timeline markers */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
            <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            {experience.indexOf(exp) !== experience.length - 1 && (
              <div className="absolute left-[7px] top-12 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent" />
            )}
          </div>

          {/* Content */}
          <div className="ml-12 card-glass p-8 rounded-xl border-l-4 border-primary hover:border-secondary transition-all">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-clash font-bold">{exp.role}</h3>
                  {exp.isCurrentRole && (
                    <span className="text-2xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                      Current Role
                    </span>
                  )}
                </div>
                <p className="text-lg text-secondary font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-text-muted mb-4">{exp.description}</p>
              </div>

              <div className="md:text-right flex-shrink-0">
                <p className="text-text-muted font-medium">
                  {exp.startDate} – {exp.endDate}
                </p>
                <p className="text-2xs text-text-muted uppercase mt-1">
                  {exp.type === "full-time" ? "Full Time" : "Internship"}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="font-medium text-primary mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-text-muted flex gap-2">
                    <span className="text-secondary flex-shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-medium text-secondary mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-2xs px-3 py-1 bg-surface border border-border rounded-full text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
