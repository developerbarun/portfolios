"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Briefcase, GraduationCap } from "lucide-react";

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
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSnapshot() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 container-custom relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ x: [0, 26, -18, 0], y: [0, -16, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-10 w-56 h-56 bg-primary/10 rounded-full blur-[72px]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={item}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/35 bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-5">
            <BadgeCheck className="w-3.5 h-3.5" />
            About The Developer
          </div>

          <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
            Beyond The <span className="gradient-text">Codebase</span>
          </h2>

          <p className="text-text-muted mb-4 leading-relaxed text-base md:text-lg">
            I'm a passionate software engineer with a strong foundation in
            full-stack development, machine learning, and system design.
            Currently working at Volkswagen India, building scalable enterprise
            applications.
          </p>

          <p className="text-text-muted mb-8 leading-relaxed text-base md:text-lg">
            With experience spanning from AI/ML to real-time systems, I love
            solving complex problems and creating products that make an impact.
          </p>

          <motion.div variants={item} className="grid grid-cols-2 gap-3 mb-8">
            <div className="rounded-xl border border-border bg-surface/60 px-4 py-3">
              <p className="text-2xl font-clash font-bold text-primary">4+</p>
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Years Coding
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface/60 px-4 py-3">
              <p className="text-2xl font-clash font-bold text-secondary">
                20+
              </p>
              <p className="text-xs uppercase tracking-wide text-text-muted">
                Projects Built
              </p>
            </div>
          </motion.div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
          >
            Learn more about me
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="card-glass p-8 text-center border-primary/20 shadow-lg shadow-primary/10"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-primary to-secondary p-1">
            <div className="w-full h-full rounded-full bg-surface flex items-center justify-center text-4xl">
              📷
            </div>
          </div>
          <h3 className="text-2xl font-clash font-bold mb-2">
            Barun Kumar Gupta
          </h3>
          <p className="text-text-muted mb-4">
            Software Engineer @ Volkswagen India
          </p>

          <div className="space-y-3 text-left mt-6">
            <div className="flex items-center gap-3 text-sm text-text-muted rounded-lg border border-border px-3 py-2 bg-surface/60">
              <Briefcase className="w-4 h-4 text-primary" />
              Java Full Stack Developer
            </div>
            <div className="flex items-center gap-3 text-sm text-text-muted rounded-lg border border-border px-3 py-2 bg-surface/60">
              <GraduationCap className="w-4 h-4 text-secondary" />
              KIIT University | CGPA 8.54
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
