'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WebsitePreviewModal from '@/components/modals/WebsitePreviewModal';

const designs = [
  {
    id: 'dermis-elite',
    title: 'Dermis Elite',
    specialty: 'Dermatology Clinic',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/dermis-elite',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhxpVdiCSr3Q7bjjpDj2Avh9ebSIdHIyI_1EIZ6Kd0zzgoCYzywxv3_9RLF223c7r6GJYBHBDsZzKaJD132QS8m3x_LyVXsjqBzdnAjayDlMZi_eChVz_sBKKzhVmOHXFbQjTCMSjxxM7KIymx2HGl1zPkRPQ-OWd5l9JG8DcZ7XqUpqm9F-ZQbKJRshIlE8DXQGgumk5ofh8CEnJlBg2z5ea0i-bXpcMjL8zwe5IQfNIooX-qEY65p_8UOrji46EavJmKpxJPaigg',
    imageSource: 'Provided template imagery',
    tone: 'Clinical prestige dermatology',
    palette: ['#000000', '#fcdc9a', '#eff4ff'],
    visualStyle: 'Black-gold luxury editorial with procedure-led gallery blocks.',
    structure: 'Hero, aesthetic services, procedure gallery, premium programs, concierge booking.',
    conversionAngle: 'Positions the clinic as a premium skin destination for high-value aesthetic treatments.',
    outcomes: ['Premium brand perception', 'More aesthetic consultation requests', 'Clear procedure discovery'],
    features: ['Prestige landing page', 'Procedure gallery', 'Membership pricing'],
    bestFor: 'Dermatology and aesthetics clinics that want an editorial luxury look.',
    layout: 'luxury',
  },
  {
    id: 'dr-priya',
    title: 'Priya Skin Institute',
    specialty: 'Dermatologist',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/dr-priya',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    tone: 'Editorial dermatology authority',
    palette: ['#7c3aed', '#f5d0fe', '#fbf9f8'],
    visualStyle: 'Soft violet medical editorial with concern-led treatment navigation.',
    structure: 'Concern finder, doctor authority page, laser services, skincare plans, FAQ education.',
    conversionAngle: 'Builds trust before the appointment by educating patients about concerns and treatments.',
    outcomes: ['Better treatment clarity', 'Stronger doctor authority', 'More informed skin inquiries'],
    features: ['Treatment-led navigation', 'Laser and aesthetic sections', 'Premium skincare programs'],
    bestFor: 'Dermatologists who want a refined medical and aesthetic positioning.',
    layout: 'editorial',
  },
  {
    id: 'dr-rajesh',
    title: 'OrthoAxis Surgical Center',
    specialty: 'Orthopedic Surgeon',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/dr-rajesh',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80',
    tone: 'Precision surgical recovery',
    palette: ['#2563eb', '#dbeafe', '#ffffff'],
    visualStyle: 'Sharp blue surgical interface with recovery timelines and procedure confidence.',
    structure: 'Procedure pages, recovery journey, surgery planner, sports injury path, trauma contact.',
    conversionAngle: 'Helps patients understand surgery, recovery, and urgency before booking.',
    outcomes: ['More prepared surgery inquiries', 'Better procedure confidence', 'Clearer recovery expectations'],
    features: ['Procedure confidence pages', 'Recovery journey blocks', 'Surgery planning offers'],
    bestFor: 'Orthopedic surgeons, sports injury clinics, and joint replacement practices.',
    layout: 'surgical',
  },
  {
    id: 'smile-dental',
    title: 'Smile Dental Modern',
    specialty: 'Dental Clinic',
    plan: 'starter',
    price: '₹4,999',
    previewUrl: '/previews/smile-dental',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
    tone: 'Bright family appointment flow',
    palette: ['#0d9488', '#2563eb', '#ffffff'],
    visualStyle: 'Fresh teal family clinic layout with approachable service cards.',
    structure: 'Family dentistry, emergency path, pediatric care, recall reminders, WhatsApp booking.',
    conversionAngle: 'Makes it easy for families to choose a service and book without confusion.',
    outcomes: ['More family appointments', 'Faster emergency inquiries', 'Higher trust from first-time patients'],
    features: ['Family-friendly service cards', 'Emergency dental path', 'Recall and hygiene messaging'],
    bestFor: 'Dental clinics that need a welcoming, conversion-focused starter website.',
    layout: 'friendly',
  },
  {
    id: 'dr-amit',
    title: 'Amit Cardiac Institute',
    specialty: 'Cardiologist',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/dr-amit',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
    tone: 'Urgent cardiac confidence',
    palette: ['#dc2626', '#fee2e2', '#ffffff'],
    visualStyle: 'High-contrast cardiac trust design with urgent CTAs and diagnostics hierarchy.',
    structure: 'Emergency CTA, chest pain pathway, diagnostics guide, preventive cardiology, doctor proof.',
    conversionAngle: 'Communicates urgency without panic and moves patients toward quick consultation.',
    outcomes: ['More urgent calls', 'Clearer diagnostic pathways', 'Stronger specialist credibility'],
    features: ['Emergency-first CTA', 'Diagnostics pathway', 'Cardiac wellness programs'],
    bestFor: 'Cardiologists and heart centers where urgency and trust matter.',
    layout: 'urgent',
  },
  {
    id: 'healthcare-plus',
    title: 'HealthCare Plus System',
    specialty: 'Hospital / Clinic',
    plan: 'growth',
    price: '₹24,999',
    previewUrl: '/previews/healthcare-plus',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
    tone: 'Hospital-grade department system',
    palette: ['#16a34a', '#dcfce7', '#ffffff'],
    visualStyle: 'Structured green hospital system with departments, facilities, and admin-ready blocks.',
    structure: 'Department directory, doctor profiles, emergency/ICU, health packages, patient facilities.',
    conversionAngle: 'Turns a large clinic or hospital into a searchable, organized patient navigation system.',
    outcomes: ['Better department discovery', 'Less reception confusion', 'More multi-service inquiries'],
    features: ['Department directory', 'Emergency and ICU blocks', 'Health package pricing'],
    bestFor: 'Clinics with multiple departments or locations.',
    layout: 'system',
  },
  {
    id: 'bright-smile',
    title: 'Bright Smile Studio',
    specialty: 'Cosmetic Dentist',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/bright-smile',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80',
    tone: 'Warm visual smile design',
    palette: ['#ea580c', '#ffedd5', '#ffffff'],
    visualStyle: 'Warm cosmetic dental layout with visual proof, smile-gallery sections, and package cards.',
    structure: 'Smile makeover gallery, implants, veneers, aligners, before-after consultation flow.',
    conversionAngle: 'Sells cosmetic confidence through outcomes, treatment packages, and visual trust.',
    outcomes: ['More cosmetic inquiries', 'Better implant and veneer positioning', 'Higher treatment confidence'],
    features: ['Smile gallery positioning', 'Implant and veneer packages', 'Before-after consultation flow'],
    bestFor: 'Cosmetic dental clinics driven by visual outcomes and premium treatment plans.',
    layout: 'visual',
  },
  {
    id: 'city-medical',
    title: 'City Medical Center',
    specialty: 'Primary Care',
    plan: 'growth',
    price: '₹24,999',
    previewUrl: '/previews/city-medical',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80',
    tone: 'Accessible primary care',
    palette: ['#2563eb', '#bfdbfe', '#ffffff'],
    visualStyle: 'Clean family-care layout with simple navigation and health package clarity.',
    structure: 'Family medicine, pediatrics, preventive packages, telemedicine, home visit flow.',
    conversionAngle: 'Organizes everyday healthcare needs so families can find and book quickly.',
    outcomes: ['More preventive package bookings', 'Clearer family-care navigation', 'Higher repeat patient trust'],
    features: ['Family medicine services', 'Preventive package cards', 'Telemedicine and home visit flow'],
    bestFor: 'Family clinics, walk-in medical centers, and primary care practices.',
    layout: 'accessible',
  },
  {
    id: 'dr-sneha',
    title: "Sneha Women's Care",
    specialty: 'Gynecologist',
    plan: 'professional',
    price: '₹9,999',
    previewUrl: '/previews/dr-sneha',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=900&q=80',
    tone: 'Soft women-centered care',
    palette: ['#db2777', '#fce7f3', '#ffffff'],
    visualStyle: 'Soft privacy-first women care design with life-stage pathways and calm education.',
    structure: 'Pregnancy care, PCOS, fertility, gynecology, privacy FAQs, gentle appointment flow.',
    conversionAngle: 'Reduces hesitation for sensitive consultations through warmth, clarity, and privacy.',
    outcomes: ['More sensitive-care bookings', 'Higher patient comfort', 'Clearer life-stage care paths'],
    features: ['Life-stage care paths', 'Pregnancy and PCOS programs', 'Privacy-conscious patient education'],
    bestFor: "Women's health clinics and patient-sensitive specialties.",
    layout: 'warm',
  },
  {
    id: 'dr-vikram',
    title: 'NeuroVanguard Institute',
    specialty: 'Neurosurgeon',
    plan: 'growth',
    price: '₹24,999',
    previewUrl: '/previews/dr-vikram',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80',
    tone: 'Dark advanced specialist authority',
    palette: ['#1e3a8a', '#111827', '#dbeafe'],
    visualStyle: 'Dark institutional interface for high-stakes brain and spine care.',
    structure: 'Brain surgery, spine pathways, scan review, trauma access, case complexity sections.',
    conversionAngle: 'Builds authority for complex procedures where families need confidence fast.',
    outcomes: ['Stronger advanced specialist authority', 'Clearer case review requests', 'More prepared family inquiries'],
    features: ['Complex case positioning', 'Brain and spine pathways', 'Emergency neurosurgery trust'],
    bestFor: 'High-trust specialists and advanced procedures.',
    layout: 'advanced',
  },
];

const categories = ['All', 'Doctor', 'Clinic', 'Hospital', 'Dental'];

const solutionBenefits = [
  'Specialty-ready website structure',
  'Mobile appointment CTA hierarchy',
  'Trust-building service sections',
  'WhatsApp and contact flow',
];

const trustSignals = [
  'Healthcare specific',
  'Google ready',
  'Conversion focused',
  'Launch faster',
];

const cardStyles = {
  luxury: 'bg-black text-white',
  editorial: 'bg-[#fbf7ff] text-[#17111f]',
  surgical: 'bg-[#f6f9ff] text-[#111827]',
  friendly: 'bg-[#f2fffc] text-[#10201f]',
  urgent: 'bg-[#fff7f7] text-[#1f1414]',
  system: 'bg-[#f5fff8] text-[#102117]',
  visual: 'bg-[#fff8f1] text-[#24170d]',
  accessible: 'bg-[#f6f9ff] text-[#111827]',
  warm: 'bg-[#fff7fb] text-[#25121c]',
  advanced: 'bg-[#070b14] text-white',
};

const cardImageLayouts = {
  luxury: 'rounded-none grayscale contrast-125',
  editorial: 'rounded-t-[48px]',
  surgical: 'clip-path-none',
  friendly: 'rounded-[32px]',
  urgent: 'rounded-none saturate-150',
  system: 'rounded-none',
  visual: 'rounded-[40px_8px_40px_8px]',
  accessible: 'rounded-2xl',
  warm: 'rounded-[48px]',
  advanced: 'rounded-none brightness-75 contrast-125',
};

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
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Ready-Made Medical Website Solutions</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[56px] xl:text-[62px]">
            Choose A Proven Website Structure Tailored To Your <span className="italic text-[#775a19]">Specialty</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#444748]">
            Launch faster with healthcare website systems planned around patient trust, Google visibility, WhatsApp inquiries, and appointment conversion.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="https://wa.me/917291978840" target="_blank" rel="noreferrer" className="border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {solutionBenefits.map((benefit) => (
              <div key={benefit} className="border border-black/15 bg-white px-4 py-3 text-sm font-semibold text-[#444748]">
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-3 sm:p-6">
            <div className="bg-black p-3 text-white sm:p-6">
              <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
                <div
                  className="min-h-[300px] border border-white/15 bg-cover bg-center p-4 sm:min-h-[430px] sm:p-5"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.62)), url(${designs[0].image})` }}
                >
                  <div className="flex h-full items-end border border-[#e9c176]/40 bg-black/15 p-4 sm:p-5">
                    <p className="max-w-xs font-secondary text-3xl font-bold leading-tight sm:text-4xl">Specialty-ready website systems for faster launch.</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:flex md:flex-col md:justify-between md:gap-4">
                  {trustSignals.map((signal, index) => (
                    <div key={signal} className="min-h-[92px] border border-white/15 bg-white/5 p-3 sm:p-4 md:min-h-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#e9c176] sm:text-xs">0{index + 1}</p>
                      <h2 className="mt-2 font-secondary text-base font-bold leading-tight sm:text-xl md:mt-4 md:text-2xl">{signal}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 inline-flex items-center gap-4 bg-[#775a19] px-5 py-4 text-white sm:absolute sm:-bottom-8 sm:left-8 sm:mt-0 sm:block sm:px-8 sm:py-5">
              <p className="font-secondary text-3xl font-bold sm:text-4xl">{designs.length}</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] sm:text-xs">Ready solutions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-3xl font-bold tracking-[-0.03em] lg:text-4xl">
            Not a template marketplace. A faster route to a healthcare growth website.
          </h2>
          <p className="text-base leading-8 text-[#444748]">
            Choose a proven medical structure, then we adapt it to your specialty, services, doctor profile, local SEO needs, and appointment funnel.
          </p>
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

      <section id="designs" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[5fr_7fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Available Solutions</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Preview, Adapt, Launch Faster.</h2>
            </div>
            <p className="text-lg leading-8 text-[#444748]">
              Each solution includes a responsive structure, specialty-ready sections, trust signals, and conversion paths. Preview the direction, then book an audit so we can recommend the right fit.
            </p>
          </div>

          <div className="mb-8 border border-black bg-black p-4 text-white sm:p-6">
            <div className="grid gap-6 border border-[#e9c176]/35 p-5 sm:p-7 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Need Something Different?</p>
                <h3 className="font-secondary text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Get A Custom Healthcare Website Designed Around Your Clinic.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65">
                  If your specialty, services, branding, or appointment flow needs a more tailored structure, we can design a custom website system from scratch.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Custom layout', 'Specialty pages', 'SEO structure', 'Booking funnel'].map((item) => (
                    <div key={item} className="border border-white/15 bg-white/[0.04] px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white/75">
                      {item}
                    </div>
                  ))}
                </div>
                <a href="/contact#consultation" data-consultation-modal className="inline-flex justify-center bg-[#e9c176] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white">
                  Book Custom Website Audit
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleDesigns.map((design, index) => (
              <motion.article
                key={design.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`group border border-black ${cardStyles[design.layout as keyof typeof cardStyles]} shadow-[8px_8px_0_rgba(0,0,0,0.05)]`}
              >
                <div className={`border-b border-black p-3 ${design.layout === 'luxury' || design.layout === 'advanced' ? 'bg-white/5' : 'bg-white/55'}`}>
                  <div className={`h-48 border p-3 ${design.layout === 'luxury' || design.layout === 'advanced' ? 'border-white/20 bg-black' : 'border-black/20 bg-white'}`}>
                    <div
                      className={`relative flex h-full flex-col justify-between overflow-hidden bg-[#111312] bg-cover bg-center p-3 text-white ${cardImageLayouts[design.layout as keyof typeof cardImageLayouts]}`}
                      style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.78)), url(${design.image})` }}
                    >
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="h-1.5 w-14 bg-white" />
                        <div className="flex gap-2">
                          {design.palette.map((color) => (
                            <span key={color} className="h-3.5 w-3.5 border border-white/40" style={{ backgroundColor: color }} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">{design.specialty}</p>
                        <h3 className="mt-2 font-secondary text-2xl font-bold leading-tight">{design.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-[0.16em] ${design.layout === 'luxury' || design.layout === 'advanced' ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>Recommended for {design.specialty}</p>
                      <h3 className="mt-2 font-secondary text-2xl font-bold tracking-[-0.02em]">{design.title}</h3>
                    </div>
                    <p className="font-secondary text-2xl font-bold">{design.price}</p>
                  </div>

                  <div className={`space-y-3 text-sm leading-6 ${design.layout === 'luxury' || design.layout === 'advanced' ? 'text-white/70' : 'text-[#444748]'}`}>
                    <p>{design.bestFor}</p>
                    <div className="flex flex-wrap gap-2">
                      {[design.tone, design.visualStyle].map((item) => (
                        <span
                          key={item}
                          className={`border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] ${
                            design.layout === 'luxury' || design.layout === 'advanced'
                              ? 'border-white/15 text-white/70'
                              : 'border-black/10 text-[#444748]'
                          }`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={`mt-5 border-t pt-4 ${design.layout === 'luxury' || design.layout === 'advanced' ? 'border-white/15' : 'border-black/10'}`}>
                    <p className={`text-xs font-bold uppercase tracking-[0.16em] ${design.layout === 'luxury' || design.layout === 'advanced' ? 'text-white' : 'text-black'}`}>Best outcome</p>
                    <p className={`mt-2 text-sm leading-6 ${design.layout === 'luxury' || design.layout === 'advanced' ? 'text-white/70' : 'text-[#444748]'}`}>
                      {design.outcomes[0]}
                    </p>
                  </div>

                  <div className="mt-6 grid gap-3">
                    <button
                      type="button"
                      data-consultation-modal
                      className={`border px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] transition-colors ${design.layout === 'luxury' || design.layout === 'advanced' ? 'border-[#e9c176] bg-[#e9c176] text-black hover:bg-white' : 'border-black bg-black text-white hover:border-[#775a19] hover:bg-[#775a19]'}`}
                    >
                      Book Free Website Audit
                    </button>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <a
                        href={design.previewUrl}
                        onClick={(event) => {
                          event.preventDefault();
                          setPreviewDesign(design);
                        }}
                        className={`border px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] transition-colors ${design.layout === 'luxury' || design.layout === 'advanced' ? 'border-white/25 text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                      >
                        Live Preview
                      </a>
                      <Link
                        href={`/checkout?plan=${design.plan}&design=${design.id}`}
                        className={`border px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] transition-colors ${design.layout === 'luxury' || design.layout === 'advanced' ? 'border-white/25 text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}
                      >
                        Start From This
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-center text-white lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Not Sure Which Solution Fits?</p>
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-6xl">
            Book A Free Audit Before You Choose
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Share your specialty, city, services, and goals. We will recommend the structure most likely to improve trust, search visibility, and appointment inquiries.
          </p>
          <button
            type="button"
            data-consultation-modal
            className="mt-10 bg-[#e9c176] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white"
          >
            Book Free Website Audit
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
