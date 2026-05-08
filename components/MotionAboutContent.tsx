"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

const skilCategories = [
  {
    name: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "Java"],
  },
  {
    name: "Backend & Full-Stack",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "React.js",
      "Next.js",
      "Spring Boot",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "Cassandra", "Neo4j", "MongoDB", "MySQL"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Redis", "Docker", "Kubernetes", "Git", "Linux", "AWS", "Postman"],
  },
  {
    name: "Other",
    skills: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "OOP Design",
      "System Design",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function MotionAboutContent() {
  return (
    <div className="space-y-16">
      {/* Bio Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-12"
      >
        {/* Left: Bio */}
        <div>
          <h2 className="text-3xl font-clash font-bold mb-6">Who I Am</h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              I'm a software engineer with a passion for building scalable
              systems and solving complex problems. Currently, I'm working at
              Volkswagen India as a Java Full Stack Developer, where I
              contribute to enterprise applications using modern technologies.
            </p>

            <p>
              My journey in tech started with curiosity and has evolved through
              various experiences—from machine learning internships to real-time
              collaborative systems. I enjoy working across the full stack, from
              database optimization to UI design.
            </p>

            <p>
              When I'm not coding, you'll find me exploring new technologies,
              reading about system design, or contributing to open-source
              projects. I believe in continuous learning and staying updated
              with the latest trends in tech.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <h3 className="font-clash font-bold text-lg">Education</h3>
            <div className="card-glass p-6 rounded-lg">
              <h4 className="font-bold mb-2">KIIT University, Bhubaneswar</h4>
              <p className="text-text-muted text-sm mb-2">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <p className="text-secondary font-medium">CGPA: 8.54</p>
            </div>
          </div>
        </div>

        {/* Right: Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl shadow-primary/20">
            <div className="w-full h-full rounded-2xl bg-surface flex items-center justify-center text-8xl">
              📸
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-12"
      >
        <h2 className="text-3xl font-clash font-bold mb-12">
          Skills & Expertise
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skilCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="card-glass p-6 rounded-xl"
            >
              <h3 className="text-lg font-clash font-bold mb-4 text-primary">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-text-muted hover:border-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-glass p-12 rounded-xl text-center"
      >
        <h2 className="text-3xl font-clash font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-text-muted mb-8 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you'd like to collaborate!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <Link
            href="/contact"
            className="button-primary inline-flex items-center justify-center gap-2"
          >
            Get In Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
