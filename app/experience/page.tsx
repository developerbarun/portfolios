import { Metadata } from 'next';
import { MotionExperienceTimeline } from '@/components/MotionExperienceTimeline';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'My professional experience and internships in software development and data science.',
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-clash font-bold mb-4">Experience</h1>
          <p className="text-text-muted text-lg max-w-3xl">
            My professional journey through full-time positions and internships,
            building experience in full-stack development, machine learning, and
            enterprise systems.
          </p>
        </div>

        {/* Timeline */}
        <MotionExperienceTimeline />
      </div>
    </div>
  );
}
