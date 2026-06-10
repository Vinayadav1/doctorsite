'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WebsitePreviewModal from '@/components/modals/WebsitePreviewModal';

const designs = [
  {
    id: 'dr-priya',
    title: 'Dermatology Authority',
    specialty: 'Dermatologist',
    plan: 'professional',
    price: '₹7,999',
    previewUrl: '/previews/dr-priya',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    tone: 'Elegant skin clinic',
    palette: ['#7c3aed', '#f5d0fe', '#fbf9f8'],
    features: ['Doctor profile hero', 'Treatment sections', 'Appointment CTA'],
    bestFor: 'Specialists who need premium personal branding.',
  },
  {
    id: 'dr-rajesh',
    title: 'Orthopedic Precision',
    specialty: 'Orthopedic Surgeon',
    plan: 'professional',
    price: '₹7,999',
    previewUrl: '/previews/dr-rajesh',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80',
    tone: 'Clean surgical trust',
    palette: ['#2563eb', '#dbeafe', '#ffffff'],
    features: ['Trust-led hero', 'Procedure highlights', 'Strong CTA block'],
    bestFor: 'Surgeons and procedure-led practices.',
  },
  {
    id: 'smile-dental',
    title: 'Smile Dental Modern',
    specialty: 'Dental Clinic',
    plan: 'starter',
    price: '₹2,999',
    previewUrl: '/previews/smile-dental',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    tone: 'Bright appointment flow',
    palette: ['#0d9488', '#2563eb', '#ffffff'],
    features: ['Fast one-page layout', 'Service cards', 'Contact CTA'],
    bestFor: 'Clinics that want a sharp starter website.',
  },
  {
    id: 'dr-amit',
    title: 'Cardiac Specialist',
    specialty: 'Cardiologist',
    plan: 'professional',
    price: '₹7,999',
    previewUrl: '/previews/dr-amit',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    tone: 'High-confidence medical',
    palette: ['#dc2626', '#fee2e2', '#ffffff'],
    features: ['Emergency CTA', 'Specialty services', 'Credentials section'],
    bestFor: 'Doctors with urgent-care or specialist positioning.',
  },
  {
    id: 'healthcare-plus',
    title: 'Multi-Specialty System',
    specialty: 'Hospital / Clinic',
    plan: 'growth',
    price: '₹14,999',
    previewUrl: '/previews/healthcare-plus',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    tone: 'Hospital-grade structure',
    palette: ['#16a34a', '#dcfce7', '#ffffff'],
    features: ['Department sections', 'Facility blocks', 'Multi-service CTA'],
    bestFor: 'Clinics with multiple departments or locations.',
  },
  {
    id: 'bright-smile',
    title: 'Dental Conversion',
    specialty: 'Cosmetic Dentist',
    plan: 'professional',
    price: '₹7,999',
    previewUrl: '/previews/bright-smile',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    tone: 'Warm and visual',
    palette: ['#ea580c', '#ffedd5', '#ffffff'],
    features: ['Gallery flow', 'Before/after area', 'Consultation CTA'],
    bestFor: 'Dental and aesthetics clinics driven by visual outcomes.',
  },
  {
    id: 'city-medical',
    title: 'Family Medical Center',
    specialty: 'Primary Care',
    plan: 'growth',
    price: '₹14,999',
    previewUrl: '/previews/city-medical',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
    tone: 'Accessible family care',
    palette: ['#2563eb', '#bfdbfe', '#ffffff'],
    features: ['Package cards', 'Emergency CTA', 'Service breadth'],
    bestFor: 'Family clinics and walk-in medical centers.',
  },
  {
    id: 'dr-sneha',
    title: "Women's Care Studio",
    specialty: 'Gynecologist',
    plan: 'professional',
    price: '₹7,999',
    previewUrl: '/previews/dr-sneha',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
    tone: 'Soft clinical confidence',
    palette: ['#db2777', '#fce7f3', '#ffffff'],
    features: ['Care journey', 'Education block', 'Patient proof'],
    bestFor: "Women's health and patient-sensitive specialties.",
  },
  {
    id: 'dr-vikram',
    title: 'Neurosurgery Elite',
    specialty: 'Neurosurgeon',
    plan: 'growth',
    price: '₹14,999',
    previewUrl: '/previews/dr-vikram',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    tone: 'Dark specialist authority',
    palette: ['#1e3a8a', '#111827', '#dbeafe'],
    features: ['Dark authority hero', 'Advanced services', 'Credential depth'],
    bestFor: 'High-trust specialists and advanced procedures.',
  },
];

const categories = ['All', 'Doctor', 'Clinic', 'Hospital', 'Dental'];

function getCategory(design: (typeof designs)[number]) {
  if (design.specialty.includes('Dental')) return 'Dental';
  if (design.specialty.includes('Hospital') || design.specialty.includes('Clinic')) return 'Clinic';
  return 'Doctor';
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [previewDesign, setPreviewDesign] = React.useState<(typeof designs)[number] | null>(null);

  const visibleDesigns = designs.filter((design) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Hospital') return design.specialty.includes('Hospital');
    return getCategory(design) === activeCategory;
  });

  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Design Shop</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Choose A Website Design <span className="italic text-[#775a19]">Before We Build</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#444748]">
            Browse ready medical website directions, preview each design live, then select the one that best matches your specialty and patient experience.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#designs" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Browse Designs
            </a>
            <button
              type="button"
              data-consultation-modal
              className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Need Help Choosing?
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div className="bg-black p-6 text-white">
              <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
                <div
                  className="min-h-[430px] border border-white/15 bg-cover bg-center p-5"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.62)), url(${designs[0].image})` }}
                >
                  <div className="flex h-full items-end border border-[#e9c176]/40 bg-black/15 p-5">
                    <p className="max-w-xs font-secondary text-4xl font-bold leading-tight">Royalty-free medical imagery, selected for trust.</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-4">
                  {designs.slice(0, 3).map((design, index) => (
                    <div key={design.id} className="border border-white/15 bg-white/5 p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#e9c176]">0{index + 1}</p>
                      <h2 className="mt-4 font-secondary text-2xl font-bold">{design.title}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 left-8 bg-[#775a19] px-8 py-5 text-white">
              <p className="font-secondary text-4xl font-bold">9</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Live previews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 sm:px-8 lg:px-16">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`border px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                activeCategory === category
                  ? 'border-black bg-black text-white'
                  : 'border-black/20 text-[#444748] hover:border-black hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section id="designs" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[5fr_7fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Available Designs</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Preview, Select, Buy.</h2>
            </div>
              <p className="text-lg leading-8 text-[#444748]">
              Each design includes responsive structure, contact paths, and specialty-ready sections. Preview images are sourced from Unsplash&apos;s free-use library to avoid copyright issues.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleDesigns.map((design, index) => (
              <motion.article
                key={design.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="group border border-black bg-white"
              >
                <div className="border-b border-black bg-[#f5f3f3] p-5">
                  <div className="h-64 border border-black/20 bg-white p-4">
                    <div
                      className="relative flex h-full flex-col justify-between overflow-hidden bg-[#111312] bg-cover bg-center p-4 text-white"
                      style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.78)), url(${design.image})` }}
                    >
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="h-2 w-20 bg-white" />
                        <div className="flex gap-2">
                          {design.palette.map((color) => (
                            <span key={color} className="h-4 w-4 border border-white/40" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">{design.specialty}</p>
                        <h3 className="mt-3 font-secondary text-3xl font-bold leading-tight">{design.title}</h3>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <span className="h-10 border border-white/20 bg-white/15" />
                        <span className="h-10 border border-white/20 bg-white/15" />
                        <span className="h-10 border border-white/20 bg-white/15" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">{design.tone}</p>
                      <h3 className="mt-3 font-secondary text-3xl font-bold tracking-[-0.02em]">{design.title}</h3>
                    </div>
                    <p className="font-secondary text-3xl font-bold">{design.price}</p>
                  </div>

                  <p className="min-h-[56px] text-sm leading-7 text-[#444748]">{design.bestFor}</p>
                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#775a19]">Image source: Unsplash free-use library</p>

                  <ul className="mt-6 space-y-3">
                    {design.features.map((feature) => (
                      <li key={feature} className="border-t border-black/10 pt-3 text-sm text-[#444748]">
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setPreviewDesign(design)}
                      className="border border-black px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white"
                    >
                      Live Preview
                    </button>
                    <Link
                      href={`/checkout?plan=${design.plan}&design=${design.id}`}
                      className="border border-black bg-black px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]"
                    >
                      Buy Design
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-center text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Custom Direction</p>
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-6xl">
            Not Sure Which Design Fits Your Practice?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Share your specialty and goals. We can recommend a design or create a custom direction for your clinic.
          </p>
          <button
            type="button"
            data-consultation-modal
            className="mt-10 bg-[#e9c176] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white"
          >
            Ask For Recommendation
          </button>
        </div>
      </section>

      <WebsitePreviewModal
        isOpen={Boolean(previewDesign)}
        onClose={() => setPreviewDesign(null)}
        projectName={previewDesign?.title || ''}
        previewUrl={previewDesign?.previewUrl || ''}
        websiteUrl={previewDesign ? `doctorsite.com/shop/${previewDesign.id}` : 'doctorsite.com/shop'}
      />
    </div>
  );
}
