/* eslint-disable @next/next/no-img-element, @next/next/no-page-custom-font */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dermis Elite | Clinical Prestige Dermatology',
};

const galleryItems = [
  {
    label: 'TECHNOLOGY',
    title: 'Laser Resurfacing',
    alt: 'Laser Resurfacing',
    className: 'md:col-span-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_JmzysJObrICd-byEoFCSSI171iReGLQHjsJzj-20UQwq9FLRPpfM1ewxF8EZUiIh6whOcLqjlYEdHY5oH8PmT448WzNuou4YcXoLYB4NwxMfUdpwXq-yRiOregQzjDMKwVv5R67nzmAKJ-r2wHAnTXaidXEjmCVnSutvvq8zB7SC3q4mTzCwkFg3jQHrjf6mSmjqGz5k77m1toPiBuIkfJpoze9styxd6UFPSLUS6a_MxMrW5jqm6_EVw2NBNiqcIZYSjq3qhWAK',
  },
  {
    label: 'RESTORATIVE',
    title: 'Elite Peels',
    alt: 'Medical Peels',
    className: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8cI4GgvMmhico6O1IGxrKZHe7n5IQwwGO40JLWGuDgjCm0qTjJfYB_kAGhmG7DoSq0SvoPgWNQ367b7RnFc0W9o7x0h-mrSYULAWy0o7sdmcEKWggm-QvoqdTtki-n385tludOgL-1PWxPCTDXr3Snb-kQMv9iBJ5V65bgxnkJNV_OyNn4Yi3XFSgbX8leuW43ElnaOVhtPJg1lsBYiu70kGTNwaMMfxmuCAfO2uK_UKqoL5COjjD9-onDtomn-FaeR8XbX_al__M',
  },
  {
    label: 'REMOTE ACCESS',
    title: 'Tele-Consult',
    alt: 'Tele-Consultation',
    className: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB6BiLL9Q5kGFv0ii_HsuRjHIlW855worqy3dMfuSZrTSmXXuV5mTqAXA_t7c3RJEXTecja5ee6S4KvPto4FmwwRZ1cyOuyAKpnX3dUkvrQv4nNryuNqCgGAdPd6MMDLYmWEg7b9H3NopzmFBT5LzVL6UgusGebmG48IA92fGzF907Yfzpf1ZhZM6DC7qguMPoJoc5_mP_yD1BJkZglzourP3OIadU2SGLCmGv9vR4WgUEb-VlnyTxvDbg2UZr5yu9fYyeQlbJ31jRg',
  },
  {
    label: 'AESTHETICS',
    title: 'Surgical Artistry',
    alt: 'Injectables',
    className: 'md:col-span-2',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCpvtslRjMP0Lpm8tHWxk0LKUhRb7PYoey-BCVTsFHjvXybaPxumaJsEIdMdYqtPXeeJrh_uRBRvpXqs4N19zhk_PzQAteg_yz37KA_1LVFlFD0quYl9oLOt14IO2LWNglV_edULy3H0KzEAPRtQgZBlyqMiDDBllC4gkkM-L133l1nagqfeDkrPM-CuAe6y5qKdcd8IQqaXvd7aUWgX92OW0g1d14KAWmBOhpgF9vAhuFzCc578sgjrtzszyxyopMuvHgPXUNzI9t2',
  },
];

const pricingPlans = [
  {
    label: 'ESSENTIAL',
    title: 'Aesthetic Base',
    body: 'Bi-monthly clinical facials and core skincare analysis.',
    price: '$290',
    featured: false,
  },
  {
    label: 'ADVANCED',
    title: 'Restorative Plus',
    body: 'Quarterly laser sessions and priority tele-consult access.',
    price: '$550',
    featured: true,
  },
  {
    label: 'PRESTIGE',
    title: 'Elite Concierge',
    body: 'Unlimited aesthetic access and bespoke formulation service.',
    price: '$1,200',
    featured: false,
  },
];

export default function DermisElitePreview() {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .ambient-glow {
          box-shadow: 0 10px 40px rgba(15, 23, 42, 0.05);
        }
        .hero-gradient {
          background: linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%);
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50 bg-surface-container-lowest shadow-sm">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-stack-md">
          <a className="font-display-lg text-[28px] md:text-[32px] font-semibold text-primary tracking-tight" href="#">
            Dermis Elite
          </a>
          <div className="hidden md:flex items-center space-x-10">
            <a className="font-body-md text-body-md text-primary border-b-2 border-primary pb-1" href="#portfolio">
              Portfolio
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#services">
              Services
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#process">
              Process
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#pricing">
              Pricing
            </a>
          </div>
          <button type="button" className="bg-primary text-on-primary px-8 py-3 font-label-sm text-label-sm uppercase hover:opacity-80 transition-opacity duration-200">
            Free Audit
          </button>
        </div>
      </nav>

      <main className="pt-24">
        <section className="relative min-h-[921px] flex items-center overflow-hidden hero-gradient">
          <div className="relative z-10 max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div className="space-y-stack-lg">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full">
                SURGICAL MASTERY • EDITORIAL PRECISION
              </span>
              <h1 className="font-display-lg text-display-lg text-primary">Advanced Aesthetics. Precise Results.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Dermis Elite merges clinical excellence with high-end aesthetic philosophy. Led by world-class dermatologists, we define the future of restorative skin science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button type="button" className="bg-primary text-on-primary px-10 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:scale-95 transition-transform duration-150">
                  Book Consultation
                </button>
                <button type="button" className="border border-outline text-primary px-10 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:bg-surface-container-low transition-colors duration-150">
                  Explore Procedures
                </button>
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/5] overflow-hidden rounded-xl ambient-glow">
                <img
                  alt="Advanced Dermatology Clinic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhxpVdiCSr3Q7bjjpDj2Avh9ebSIdHIyI_1EIZ6Kd0zzgoCYzywxv3_9RLF223c7r6GJYBHBDsZzKaJD132QS8m3x_LyVXsjqBzdnAjayDlMZi_eChVz_sBKKzhVmOHXFbQjTCMSjxxM7KIymx2HGl1zPkRPQ-OWd5l9JG8DcZ7XqUpqm9F-ZQbKJRshIlE8DXQGgumk5ofh8CEnJlBg2z5ea0i-bXpcMjL8zwe5IQfNIooX-qEY65p_8UOrji46EavJmKpxJPaigg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest" id="services">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-primary">Advanced Procedure Gallery</h2>
              <div className="w-20 h-1 bg-secondary mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.title} className={`${item.className} relative group overflow-hidden rounded-xl h-[400px]`}>
                  <img alt={item.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={item.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white">
                    <span className="font-label-sm text-label-sm mb-2 block text-secondary-fixed">{item.label}</span>
                    <h3 className="font-headline-md text-headline-md">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-low" id="portfolio">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-stack-md">
              <div className="max-w-2xl">
                <h2 className="font-headline-lg text-headline-lg text-primary">Patient Outcome Integrity</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
                  Witness the intersection of clinical precision and aesthetic transformation. Each case study represents our commitment to medical excellence.
                </p>
              </div>
              <a className="text-primary font-label-sm text-label-sm flex items-center group" href="#">
                VIEW FULL ARCHIVE
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface-container-lowest p-8 rounded-xl ambient-glow">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 aspect-square rounded-lg bg-surface overflow-hidden">
                    <img
                      alt="Before"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLJMEG7M6hgH16jTZBw6v_hupCmSWP08YPHZMe0Nwbiu25sAinbo5tonRRE5fWqBF0yd_6i4-GagZj7ea7R9HsdA3IV4VzCPBy9x0Q-ZNfZ-sgiwPwOWALWZnkZ4XQuH26iBp-sIQREjeZ2lUPTRjo07Lyz4bfJTmCN-nm_szw8NOt85vo4FR1fKDMQXnVQKKPUn5VlUikelt2wNXb5OJnM_lL8Unn6wu1ZZ9O1peyR_xsx0VwbIQoAbbPhBEctpgnpRFbeou4idLd"
                    />
                  </div>
                  <div className="flex-1 aspect-square rounded-lg bg-surface overflow-hidden">
                    <img
                      alt="After"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBflJpAEhaCT3sX70GZuFaQ-MYUYk5dE2UZXfPbKNjCRI22EpT8O_gM3jiH3cfR_nd_Ux-g8ShgnAQVwhxNfbTF6D2stTsvqeNKs8uCoIquucqIfsGyt-xE7Uu8_UnGpa58jDrL022tPSBiqfx44CwwLvBhdS6bnF4yrSj1xR8mXQP5kqT774dG5wJn7rF-1sMzQuSyphVsNeX5D_CEHs4oJd6mdsiAVM5TO0TK4OjjAvnPN0nRytaS2HASK3A0CL5J90V73IiPr7ZQ"
                    />
                  </div>
                </div>
                <h4 className="font-headline-md text-[24px] text-primary">Post-Inflammatory Treatment</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">6-week interval with custom chemical modulation and laser intervention.</p>
              </div>

              <div className="bg-surface-container-lowest p-8 rounded-xl ambient-glow">
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 aspect-square rounded-lg bg-surface overflow-hidden">
                    <img
                      alt="Before"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA81G0mXBub4As_xMV7mXu6yhOyDGqnymm_rEWLpLuCVEiqQ2oHzbOu0OsgFkWohpAnLkxek_VOshwZqmpBKrknMhwpftW38iO6Wj7Q9uObfW71lVl5j69IYWJSJonAnNJQwLH6TY2TxKU4DwhQKB4eVi7WaTEEdq0FXVGemViaoE7Sjr95hRAy-RcCza2nFo_fhKLqUHFEm-9K4flFn96tFl7iGvEipQCFpMj-g8GXRAxr-PA0dU84jCSPpx9zd1aQBVRUaJqqtQ-s"
                    />
                  </div>
                  <div className="flex-1 aspect-square rounded-lg bg-surface overflow-hidden">
                    <img
                      alt="After"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqhWiGIFrnIFrnxbvCAEuWLbkresctdRm1sRVOS1i5Ta5juEF_Pq3_tTrCx4u3sCHtb3qTtQyyXT4xzdaADpPkcw_s9wHJ9vWfzIswYxEIyS4JT2FaQMmTGSBpM7VhVDLPA1MNxbo_Tq9wfspsfNzhuCEPVQhpPWOiexsLOJvir9Stq9LUkLFjV1yohXGDOTD4CC9JjfU14KdzahYRvnn2iiOEgiquyh2DJ4qJwaNAl-va4h03-_6EiqPRSvXhUr7vSE8yzCX3YEux"
                    />
                  </div>
                </div>
                <h4 className="font-headline-md text-[24px] text-primary">Structural Volume Restoration</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-2">Precision dermal filler application focusing on anatomical symmetry.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest" id="process">
          <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div className="order-2 lg:order-1" />
            <div className="order-1 lg:order-2 space-y-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary">Specialized Skincare Protocols</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our proprietary formulations are designed to extend clinical results into your daily regimen. Every bottle represents a synthesis of pharmaceutical-grade actives and advanced lipid delivery systems.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <h5 className="font-body-md font-bold text-primary">Cellular Repair Serum</h5>
                    <p className="font-body-md text-on-surface-variant">DNA repair enzymes with stabilized ascorbic acid.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <div>
                    <h5 className="font-body-md font-bold text-primary">Barrier Fortification Cream</h5>
                    <p className="font-body-md text-on-surface-variant">Triple ceramide complex for post-procedure recovery.</p>
                  </div>
                </li>
              </ul>
              <button type="button" className="bg-primary text-on-primary px-10 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                Shop Clinic Collection
              </button>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-primary-container text-on-primary-container relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" />
          <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
            <div className="inline-flex items-center space-x-2 bg-on-primary-container/10 px-4 py-2 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container" />
              </span>
              <span className="font-label-sm text-label-sm text-secondary-fixed uppercase">Tele-Consult Readiness: Live</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-white mb-6">Expertise Without Boundaries</h2>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto mb-10">
              Access elite dermatological advice from anywhere. Our secure, HIPAA-compliant digital clinic offers real-time diagnostics and personalized treatment planning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button type="button" className="bg-secondary-fixed text-on-secondary-fixed px-12 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:scale-95 transition-transform duration-150">
                Start Digital Consult
              </button>
              <button type="button" className="border border-on-primary-container/30 text-white px-12 py-5 font-label-sm text-label-sm tracking-widest uppercase hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section className="py-section-padding bg-surface-container-lowest" id="pricing">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-primary">Clinic Membership &amp; Access</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">Tailored pathways for consistent aesthetic maintenance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className={
                    plan.featured
                      ? 'bg-surface-container p-10 flex flex-col h-full rounded-xl border-2 border-primary relative'
                      : 'border border-outline-variant p-10 flex flex-col h-full rounded-xl hover:border-primary transition-colors'
                  }
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                      MOST REQUESTED
                    </div>
                  )}
                  <span className="font-label-sm text-label-sm text-on-surface-variant mb-2">{plan.label}</span>
                  <h3 className="font-headline-md text-primary mb-4">{plan.title}</h3>
                  <p className="font-body-md text-on-surface-variant mb-8">{plan.body}</p>
                  <div className="mt-auto">
                    <div className="text-display-lg text-[40px] text-primary mb-8">
                      {plan.price}
                      <span className="text-label-sm">/mo</span>
                    </div>
                    <button
                      type="button"
                      className={
                        plan.featured
                          ? 'w-full py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase hover:opacity-90 transition-opacity'
                          : 'w-full py-4 border border-primary text-primary font-label-sm text-label-sm uppercase hover:bg-primary hover:text-on-primary transition-all'
                      }
                    >
                      Select Program
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-high dark:bg-surface-container-highest w-full py-section-padding px-gutter">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-10 md:mb-0 space-y-6">
            <div className="font-headline-md text-headline-md font-bold text-primary">Dermis Elite</div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs">
              Redefining clinical excellence in dermatology through surgical mastery and premium editorial aesthetics.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">share</span>
              </a>
              <a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors" href="#">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h6 className="font-label-sm text-label-sm text-primary uppercase mb-6">Expertise</h6>
              <ul className="space-y-4">
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Aesthetics</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Clinical</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Surgery</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-label-sm text-label-sm text-primary uppercase mb-6">Resources</h6>
              <ul className="space-y-4">
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Skincare Guide</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Patient Portal</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-label-sm text-label-sm text-primary uppercase mb-6">Terms</h6>
              <ul className="space-y-4">
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">HIPAA Notice</a></li>
                <li><a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto mt-20 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-90">© 2024 DoctorSite. All rights reserved. Clinical Prestige Studio.</p>
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
            <span className="font-label-sm text-label-sm text-primary">Mayfair Medical District, London</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
