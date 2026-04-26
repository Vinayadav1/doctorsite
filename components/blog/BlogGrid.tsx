'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Image from 'next/image';

const BlogGrid: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogPosts = [
    {
      id: 1,
      title: '10 Essential Features Every Doctor Website Needs',
      excerpt: 'Discover the must-have features that make a medical website effective in attracting and converting patients.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      category: 'Web Design',
      date: 'March 15, 2024',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Rank Your Medical Practice on Google',
      excerpt: 'Learn proven SEO strategies to improve your local search rankings and attract more patients.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=600&h=400&fit=crop',
      category: 'SEO',
      date: 'March 12, 2024',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Building Trust Online: A Guide for Doctors',
      excerpt: 'Establish credibility and build patient trust through your online presence and website design.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop',
      category: 'Marketing',
      date: 'March 10, 2024',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'The Power of Patient Testimonials',
      excerpt: 'How to collect and showcase patient reviews to grow your practice and build social proof.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      category: 'Marketing',
      date: 'March 8, 2024',
      readTime: '4 min read',
    },
    {
      id: 5,
      title: 'Mobile-First Design for Medical Websites',
      excerpt: 'Why mobile optimization is crucial for healthcare websites and how to get it right.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      category: 'Web Design',
      date: 'March 5, 2024',
      readTime: '5 min read',
    },
    {
      id: 6,
      title: 'HIPAA Compliance for Doctor Websites',
      excerpt: 'Understanding HIPAA requirements and ensuring your website protects patient privacy.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      category: 'Compliance',
      date: 'March 3, 2024',
      readTime: '8 min read',
    },
  ];

  const categories = ['All', 'Web Design', 'SEO', 'Marketing', 'Compliance'];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content - Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <button className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 sticky top-24"
            >
              {/* Search */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                  <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-gray-700">
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest tips delivered to your inbox
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-3 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

