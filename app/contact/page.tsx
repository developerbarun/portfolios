'use client';

import { MotionContactForm } from '@/components/MotionContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-clash font-bold mb-4">
            Let's Build Something Together
          </h1>
          <p className="text-text-muted text-lg">
            Have a project idea or want to collaborate? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        <MotionContactForm />
      </div>
    </div>
  );
}
