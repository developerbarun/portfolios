'use client';

import { projects } from '@/content/projects';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import { ExternalLink, Github, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-clash font-bold mb-4">Project not found</h1>
          <p className="text-text-muted mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects" className="button-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Back Link */}
        <Link href="/projects" className="text-primary hover:text-secondary mb-8 inline-flex items-center gap-2">
          ← Back to Projects
        </Link>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full h-80 bg-surface border border-border rounded-xl mb-12 flex items-center justify-center text-6xl"
        >
          🎨
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="text-2xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium"
              >
                {cat}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-clash font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-text-muted max-w-3xl">{project.description}</p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem */}
            {project.problem && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-clash font-bold mb-4">The Problem</h2>
                <p className="text-text-muted leading-relaxed">{project.problem}</p>
              </motion.div>
            )}

            {/* Solution */}
            {project.solution && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-clash font-bold mb-4">The Solution</h2>
                <p className="text-text-muted leading-relaxed">{project.solution}</p>
              </motion.div>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-clash font-bold mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="inline-block w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Results */}
            {project.results && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-3xl font-clash font-bold mb-4">Results</h2>
                <p className="text-text-muted leading-relaxed">{project.results}</p>
              </motion.div>
            )}

            {/* Key Takeaways */}
            {project.keyTakeaways && project.keyTakeaways.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-clash font-bold mb-6">Key Takeaways</h2>
                <ul className="space-y-3">
                  {project.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="inline-block w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                      <span className="text-text-muted">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            {/* Tech Stack */}
            <div className="card-glass p-6 rounded-xl mb-8">
              <h3 className="text-xl font-clash font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="card-glass p-6 rounded-xl">
              <h3 className="text-xl font-clash font-bold mb-6">Links</h3>
              <div className="space-y-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-surface hover:bg-border rounded-lg transition-colors group"
                  >
                    <Github className="w-5 h-5 text-primary" />
                    <span className="font-medium group-hover:text-primary transition-colors">
                      GitHub Repository
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto text-text-muted" />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-surface hover:bg-border rounded-lg transition-colors group"
                  >
                    <Globe className="w-5 h-5 text-secondary" />
                    <span className="font-medium group-hover:text-secondary transition-colors">
                      Live Demo
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto text-text-muted" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Next Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <h2 className="text-3xl font-clash font-bold mb-8">Explore More</h2>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 button-secondary"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
