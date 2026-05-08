"use client";

import React, { FormEvent, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowDown,
  ExternalLink,
  Github,
  Linkedin,
  Terminal,
  FileText,
} from "lucide-react";

export default function Hero() {
  const router = useRouter();

  const heroLines = [
    "INITIALIZING PORTFOLIO KERNEL...",
    "LOADED MODULES: [EXPERIENCE, PROJECTS, SKILLS]",
    "STATUS: AVAILABLE FOR OPPORTUNITIES",
    "Type 'help' to list available commands.",
  ];

  const helpText = useMemo(
    () => "Available commands: help, about, projects, contact, resume, clear",
    [],
  );

  const [cliLines, setCliLines] = useState<string[]>(heroLines);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const runCommand = (rawCommand: string) => {
    const normalized = rawCommand.trim().toLowerCase();
    if (!normalized) return;

    setHistory((h) => [...h, rawCommand]);
    setHistoryIndex(-1);

    if (normalized === "clear") {
      setCliLines([
        "SYSTEM CLEARED.",
        "Type 'help' to list available commands.",
      ]);
      return;
    }

    const responses: Record<string, string> = {
      help: helpText,
      about:
        "Barun Kumar Gupta: Full stack engineer focused on scalable systems, backend architecture, and polished UX.",
      projects: "Opening projects...",
      contact: "Opening contact...",
      resume: "Opening resume...",
    };

    const response = responses[normalized] || "Unknown command. Type 'help'.";

    setCliLines((prev) => {
      const next = [...prev, `> ${rawCommand}`, response];
      return next.slice(-12);
    });

    if (normalized === "about") router.push("/about");
    if (normalized === "projects") router.push("/projects");
    if (normalized === "contact") router.push("/contact");
    if (normalized === "resume") router.push("/resume.pdf");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!command.trim()) return;
    runCommand(command);
    setCommand("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex =
        historyIndex === -1 ? history.length - 1 : historyIndex - 1;
      if (nextIndex >= 0) {
        setHistoryIndex(nextIndex);
        setCommand(history[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex < history.length) {
        setHistoryIndex(nextIndex);
        setCommand(history[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.75 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden hero-ambient-bg">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -28, 22, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-44 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-[90px]"
        />
        <motion.div
          animate={{
            x: [0, -60, 20, 0],
            y: [0, 18, -26, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-56 -right-20 w-[30rem] h-[30rem] rounded-full bg-secondary/20 blur-[110px]"
        />
        <div className="absolute inset-0 hero-grid-overlay" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-7 flex justify-center gap-3 flex-wrap"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-surface/90 border border-border rounded-full text-sm font-medium text-primary shadow-lg shadow-primary/10">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Identity Verified: Barun Kumar Gupta
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-xs font-semibold tracking-wide text-secondary">
              IMMEDIATELY AVAILABLE
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-clash font-bold mb-6 leading-[1.05]"
          >
            The Next Gen <span className="gradient-text">Engineer</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-text-muted mb-8 max-w-3xl mx-auto"
          >
            Crafting immersive digital experiences with clean code, reliable
            architecture, and product-first thinking.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Link
              href="/projects"
              className="button-primary flex items-center justify-center gap-2 group"
            >
              View My Work
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="button-secondary flex items-center justify-center gap-2"
            >
              Get In Touch
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 mb-10 flex-wrap"
          >
            <a
              href="https://github.com/developerbarun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-border bg-surface/70 text-sm text-text-muted hover:text-primary hover:border-primary/60 transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/barungupta"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-border bg-surface/70 text-sm text-text-muted hover:text-primary hover:border-primary/60 transition-colors inline-flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-border bg-surface/70 text-sm text-text-muted hover:text-primary hover:border-primary/60 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto mb-14"
          >
            <div
              className="card-glass rounded-2xl overflow-hidden border-primary/20 text-left"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="px-4 sm:px-6 py-3 border-b border-border flex items-center gap-3 text-sm text-text-muted">
                <Terminal className="w-4 h-4 text-primary" /> Portfolio_CLI
              </div>
              <div className="px-4 sm:px-6 py-5 text-sm sm:text-base font-mono text-text-primary">
                <div className="space-y-2 mb-3">
                  {cliLines.map((line, index) => (
                    <motion.p
                      key={`${line}-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`leading-relaxed ${line.startsWith(">") ? "text-primary" : "text-text-primary"}`}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>

                <form onSubmit={onSubmit} className="flex items-center gap-2">
                  <span className="text-primary">&gt;</span>
                  <span className="text-text-muted">~</span>
                  <input
                    ref={inputRef}
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="flex-1 bg-transparent outline-none text-text-primary placeholder:text-text-muted/70"
                    placeholder="type command and press Enter"
                    aria-label="Portfolio CLI input"
                    autoComplete="off"
                  />
                  <span className="terminal-cursor text-primary">_</span>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 signal-strip">
            <div className="signal-track">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="signal-text">
                  INITIALIZING SYSTEM INTERFACE // LOADING MODULES //
                  ESTABLISHING SECURE CONNECTION // READY FOR INPUT //
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center"
          >
            <ArrowDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
