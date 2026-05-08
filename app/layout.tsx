import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ErrorLogger from "@/components/ErrorLogger";

export const metadata: Metadata = {
  title: {
    default: "Barun Kumar Gupta | Full Stack Developer",
    template: "%s | Barun Kumar Gupta",
  },
  description:
    "Software Engineer and Full Stack Developer specializing in Java, React, and Node.js. Building scalable systems and AI applications.",
  keywords: [
    "Full Stack Developer",
    "Java Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
    "Web Development",
    "AI/ML",
  ],
  authors: [
    {
      name: "Barun Kumar Gupta",
      url: "https://barungupta.vercel.app",
    },
  ],
  creator: "Barun Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barungupta.vercel.app",
    siteName: "Barun Kumar Gupta",
    images: [
      {
        url: "https://barungupta.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Barun Kumar Gupta - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@barungupta",
    images: ["https://barungupta.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0D0F14" />
        <link rel="canonical" href="https://barungupta.vercel.app" />
      </head>
      <body className="bg-background text-text-primary overflow-x-hidden">
        <ErrorLogger />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
