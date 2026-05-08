import { Metadata } from 'next';
import { MotionBlogGrid } from '@/components/MotionBlogGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and insights about software development, technology, and career growth.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-clash font-bold mb-4">Blog</h1>
          <p className="text-text-muted text-lg max-w-3xl">
            Articles and insights about software development, system design,
            career growth, and lessons learned from building products at scale.
          </p>
        </div>

        <MotionBlogGrid />
      </div>
    </div>
  );
}
