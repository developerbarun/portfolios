"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container-custom max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Illustration */}
          <div className="mb-12">
            <h1 className="text-9xl font-clash font-bold gradient-text">404</h1>
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-clash font-bold mb-4">
              Page not found
            </h2>
            <p className="text-text-muted text-lg mb-12">
              Sorry, the page you're looking for doesn't exist or has been
              moved.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/" className="button-primary">
              Go Home
            </Link>
            <Link href="/projects" className="button-secondary">
              View Projects
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mt-16 text-6xl"
          >
            🚀
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
