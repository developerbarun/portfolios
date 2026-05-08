"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  Cloud,
  Container,
  Database,
  Flower2,
  Leaf,
  Layers3,
  Orbit,
  Server,
  Sigma,
  TerminalSquare,
} from "lucide-react";

const skills = [
  { name: "TypeScript", icon: Braces },
  { name: "JavaScript", icon: Code2 },
  { name: "Python", icon: Sigma },
  { name: "Java", icon: TerminalSquare },
  { name: "Node.js", icon: Server },
  { name: "React", icon: Orbit },
  { name: "Next.js", icon: Layers3 },
  { name: "Spring Boot", icon: Flower2 },
  { name: "MongoDB", icon: Leaf },
  { name: "Docker", icon: Container },
  { name: "Redis", icon: Database },
  { name: "AWS", icon: Cloud },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.16,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22, filter: "blur(7px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsGrid() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container}
      className="py-20 container-custom rounded-2xl px-5 sm:px-8 bg-surface/30 border border-border/60 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 20, -12, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 bottom-0 w-72 h-72 rounded-full bg-primary/10 blur-[80px]"
        />
      </div>

      <motion.div variants={item} className="text-center mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/35 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-5">
          <Layers3 className="w-3.5 h-3.5" />
          Technical Arsenal
        </div>
        <h2 className="text-4xl md:text-5xl font-clash font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-text-muted max-w-2xl mx-auto text-base md:text-lg">
          Tools and technologies I use to build reliable, scalable, and
          high-performance software systems.
        </p>
      </motion.div>

      <motion.div variants={item} className="signal-strip mb-8 relative z-10">
        <div className="signal-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="signal-text">
              COMPILING SKILL GRAPH // VALIDATING STACK DEPENDENCIES // READY
              FOR PRODUCTION //
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5 relative z-10"
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            variants={item}
            whileHover={{ y: -6, scale: 1.03 }}
            className="flex flex-col items-center gap-3 p-5 card-glass rounded-xl hover:border-primary/60 hover:bg-surface transition-all"
          >
            <span className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-sm font-medium text-text-muted text-center">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
