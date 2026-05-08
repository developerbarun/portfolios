"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setSubscribeMessage("Please enter your email");
      setSubscribeStatus("error");
      return;
    }

    setSubscribeStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubscribeStatus("success");
        setSubscribeMessage("Successfully subscribed! Check your email.");
        setEmail("");
        setTimeout(() => setSubscribeStatus("idle"), 3000);
      } else {
        setSubscribeStatus("error");
        setSubscribeMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setSubscribeStatus("error");
      setSubscribeMessage("An error occurred. Please try again.");
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/developerbarun",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/barun-kumar-gupta-68960a237/",
      label: "LinkedIn",
    },
    { icon: Twitter, href: "https://x.com/Barun_G18", label: "X" },
    { icon: Mail, href: "mailto:barung2023@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-custom py-12 md:py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 pb-12 border-b border-border"
        >
          <h3 className="text-2xl font-clash font-bold mb-4">Stay Updated</h3>
          <p className="text-text-muted mb-6 max-w-sm">
            Get notified when I publish new articles on tech, career, and
            projects.
          </p>

          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={subscribeStatus === "loading"}
              className="flex-1 bg-background border border-border px-4 py-3 rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              disabled={subscribeStatus === "loading"}
              className="button-accent px-6 py-3 flex items-center gap-2 disabled:opacity-50"
              aria-label="Subscribe to newsletter"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {subscribeMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`mt-3 text-sm ${
                subscribeStatus === "success"
                  ? "text-primary"
                  : "text-secondary"
              }`}
            >
              {subscribeMessage}
            </motion.p>
          )}
        </motion.div>

        {/* Links & Social */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-clash font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/about", label: "About" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-clash font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
                { href: "/resume.pdf", label: "Resume" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text-muted hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-clash font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: "#7C3AED" }}
                  className="text-text-muted hover:text-primary transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-text-muted text-sm">
          <p>© 2025 Barun Kumar Gupta. Built with Next.js & ☕</p>
        </div>
      </div>
    </footer>
  );
}
