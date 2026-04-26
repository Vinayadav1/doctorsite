import * as React from 'react';
import BlogHero from '@/components/blog/BlogHero';
import BlogGrid from '@/components/blog/BlogGrid';

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogGrid />
    </main>
  );
}
