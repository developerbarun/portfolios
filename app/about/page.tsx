import { Metadata } from 'next';
import { MotionAboutContent } from '@/components/MotionAboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Barun Kumar Gupta, a software engineer passionate about building scalable systems.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-clash font-bold mb-4">About Me</h1>
          <p className="text-text-muted text-lg max-w-3xl">
            Software engineer passionate about building scalable systems,
            solving complex problems, and creating products that make a real
            impact.
          </p>
        </div>

        <MotionAboutContent />
      </div>
    </div>
  );
}
