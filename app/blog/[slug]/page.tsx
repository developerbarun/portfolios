'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';

const blogPostsData: Record<string, any> = {
  'building-scalable-systems-spring-boot': {
    title: 'Building Scalable Systems with Java Spring Boot',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    category: 'Tech',
    tags: ['Java', 'Spring Boot', 'Backend', 'Architecture'],
    content: `
      <h2>Why Spring Boot?</h2>
      <p>Spring Boot simplifies enterprise Java development by providing:</p>
      <ul>
        <li><strong>Auto-configuration:</strong> Reduces boilerplate code significantly</li>
        <li><strong>Embedded servers:</strong> No need for application servers</li>
        <li><strong>Production-ready features:</strong> Built-in monitoring and logging</li>
        <li><strong>Extensive ecosystem:</strong> Integration with Spring Data, Security, Actuator, etc.</li>
      </ul>

      <h2>Key Principles for Scalability</h2>
      <h3>1. Database Optimization</h3>
      <p>Using lazy loading and proper indexing prevents N+1 query problems.</p>

      <h3>2. Caching Strategy</h3>
      <p>Redis integration with Spring Cache abstraction significantly improves performance.</p>

      <h3>3. Asynchronous Processing</h3>
      <p>For long-running tasks, use @Async annotation to handle operations asynchronously.</p>

      <h2>Monitoring and Observability</h2>
      <p>Spring Boot Actuator provides endpoints for health checks and metrics. Configure management endpoints to expose health, metrics, and Prometheus data.</p>

      <h2>Conclusion</h2>
      <p>Building scalable systems requires thoughtful architecture, proper use of frameworks, and continuous monitoring. Spring Boot provides the tools; developers must use them wisely.</p>

      <h3>Key takeaways:</h3>
      <ul>
        <li>Use JPA efficiently with proper loading strategies</li>
        <li>Implement caching for frequently accessed data</li>
        <li>Monitor your application in production</li>
        <li>Keep your code clean and maintainable</li>
      </ul>
    `,
  },
  'fullstack-development-react-nodejs': {
    title: 'Full Stack Development: From React to Node.js',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
    category: 'Tech',
    tags: ['React', 'Node.js', 'Full Stack', 'TypeScript'],
    content: `
      <h2>The Modern Full Stack</h2>
      <p>The JavaScript/TypeScript ecosystem provides a cohesive development experience:</p>
      <ul>
        <li>Frontend: React with TypeScript for type safety</li>
        <li>Backend: Node.js with Express for API development</li>
        <li>Database: MongoDB for flexible data models</li>
        <li>Tooling: Same language across the stack</li>
      </ul>

      <h2>Frontend Architecture with React</h2>
      <p>React with TypeScript allows you to build type-safe, component-based UIs with confidence.</p>

      <h2>Backend with Express and TypeScript</h2>
      <p>Express.js provides a lightweight framework for building RESTful APIs with minimal overhead.</p>

      <h2>Database Design with MongoDB</h2>
      <p>MongoDB's flexible schema allows you to evolve your data structure without migrations.</p>

      <h2>API Best Practices</h2>
      <ul>
        <li>Consistent Error Handling</li>
        <li>Input Validation with zod or joi</li>
        <li>Authentication with JWT tokens</li>
        <li>Rate Limiting to prevent abuse</li>
        <li>CORS configuration for security</li>
      </ul>

      <h2>Lessons Learned</h2>
      <p>Building full stack applications with JavaScript/TypeScript taught me:</p>
      <ul>
        <li>Type safety with TypeScript prevents bugs early</li>
        <li>Proper API design makes frontend development faster</li>
        <li>Database indexing is crucial for search features</li>
        <li>Error handling must be comprehensive</li>
      </ul>

      <h2>Next Steps</h2>
      <p>Start building! Choose a simple project and gradually add complexity. Full stack development is a journey of continuous learning.</p>
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-clash font-bold mb-4">Post not found</h1>
          <p className="text-text-muted mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog" className="button-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        {/* Back Link */}
        <Link href="/blog" className="text-primary hover:text-secondary mb-8 inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="text-2xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl font-clash font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-text-muted mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-2xs px-2 py-1 bg-surface border border-border rounded text-text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Post Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-border space-y-8"
        >
          <div>
            <h3 className="font-clash font-bold mb-4">Share this article</h3>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${post.title}&url=https://barungupta.vercel.app/blog/${slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-clash font-bold mb-4">More articles</h3>
            <Link href="/blog" className="button-secondary inline-block">
              View all posts
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
