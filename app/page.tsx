import { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSnapshot from "@/components/AboutSnapshot";
import FeaturedProjects from "@/components/FeaturedProjects";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore my portfolio showcasing full-stack development projects, AI/ML solutions, and real-time systems.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnapshot />
      <FeaturedProjects />
      <SkillsGrid />
      <ExperienceTimeline />
    </>
  );
}
