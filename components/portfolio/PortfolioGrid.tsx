'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import WebsitePreviewModal from '../modals/WebsitePreviewModal';

const PortfolioGrid: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  const [activeFilter, setActiveFilter] = React.useState('all');
  const [previewModal, setPreviewModal] = React.useState<{
    isOpen: boolean;
    projectName: string;
    previewUrl: string;
    websiteUrl: string;
  }>({
    isOpen: false,
    projectName: '',
    previewUrl: '',
    websiteUrl: '',
  });

  const openPreview = (name: string, url: string, websiteUrl: string) => {
    setPreviewModal({
      isOpen: true,
      projectName: name,
      previewUrl: url,
      websiteUrl,
    });
  };

  const closePreview = () => {
    setPreviewModal({
      ...previewModal,
      isOpen: false,
    });
  };

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'dentist', label: 'Dentists' },
    { id: 'surgeon', label: 'Surgeons' },
    { id: 'clinic', label: 'Clinics' },
    { id: 'specialist', label: 'Specialists' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Dr. Rajesh Kumar',
      specialty: 'Orthopedic Surgeon',
      category: 'surgeon',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      location: 'Mumbai',
      previewUrl: '/previews/dr-rajesh',
      websiteUrl: 'drrajeshkumar.com',
    },
    {
      id: 2,
      title: 'Dr. Priya Sharma',
      specialty: 'Dermatologist',
      category: 'specialist',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      location: 'Delhi',
      previewUrl: '/previews/dr-priya',
      websiteUrl: 'drpriyasharma.com',
    },
    {
      id: 3,
      title: 'Smile Dental Clinic',
      specialty: 'Dental Care',
      category: 'dentist',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
      location: 'Bangalore',
      previewUrl: '/previews/smile-dental',
      websiteUrl: 'smiledentalclinic.com',
    },
    {
      id: 4,
      title: 'Dr. Amit Patel',
      specialty: 'Cardiologist',
      category: 'specialist',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop',
      location: 'Ahmedabad',
      previewUrl: '/previews/dr-amit',
      websiteUrl: 'dramitpatel.com',
    },
    {
      id: 5,
      title: 'HealthCare Plus Clinic',
      specialty: 'Multi-Specialty',
      category: 'clinic',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
      location: 'Pune',
      previewUrl: '/previews/healthcare-plus',
      websiteUrl: 'healthcareplus.com',
    },
    {
      id: 6,
      title: 'Dr. Sneha Reddy',
      specialty: 'Gynecologist',
      category: 'specialist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=400&fit=crop',
      location: 'Hyderabad',
      previewUrl: '/previews/dr-sneha',
      websiteUrl: 'drsnehareddy.com',
    },
    {
      id: 7,
      title: 'Dr. Vikram Singh',
      specialty: 'Neurosurgeon',
      category: 'surgeon',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=400&fit=crop',
      location: 'Chennai',
      previewUrl: '/previews/dr-vikram',
      websiteUrl: 'drvikramsingh.com',
    },
    {
      id: 8,
      title: 'Bright Smile Dentistry',
      specialty: 'Cosmetic Dentistry',
      category: 'dentist',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop',
      location: 'Kolkata',
      previewUrl: '/previews/bright-smile',
      websiteUrl: 'brightsmiledentistry.com',
    },
    {
      id: 9,
      title: 'City Medical Center',
      specialty: 'General Practice',
      category: 'clinic',
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&h=400&fit=crop',
      location: 'Jaipur',
      previewUrl: '/previews/city-medical',
      websiteUrl: 'citymedicalcenter.com',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* View button on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => openPreview(project.title, project.previewUrl, project.websiteUrl)}
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
                    >
                      View Website
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {project.specialty}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Your Own Professional Website?
          </h3>
          <button 
            onClick={() => router.push('/pricing')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105 shadow-md"
          >
            Start Your Project
          </button>
        </motion.div>
      </div>

      {/* Website Preview Modal */}
      <WebsitePreviewModal
        isOpen={previewModal.isOpen}
        onClose={closePreview}
        projectName={previewModal.projectName}
        previewUrl={previewModal.previewUrl}
        websiteUrl={previewModal.websiteUrl}
      />
    </section>
  );
};

export default PortfolioGrid;

