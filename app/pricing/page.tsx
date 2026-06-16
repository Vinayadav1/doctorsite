const plans = [
  {
    name: 'Starter',
    price: '₹4,999',
    eyebrow: 'Online Presence',
    tagline: 'Perfect for individual doctors and small clinics establishing their online presence.',
    technology: 'HTML5, CSS3, JavaScript',
    bestFor: 'New clinics, individual practitioners, local healthcare professionals.',
    delivery: '3-5 days',
    revisions: '1 revision round',
    features: [
      'Premium single-page website',
      'Fully mobile responsive design',
      'Doctor profile section',
      'Services/treatments section',
      'WhatsApp appointment button',
      'Contact form integration',
      'Google Maps integration',
      'SSL security setup',
      'Basic SEO optimization',
      'Fast loading performance',
      'Social media links',
      'Professional UI design',
      '1 revision round',
      'Delivery within 3-5 days',
    ],
  },
  {
    name: 'Growth',
    price: '₹9,999',
    eyebrow: 'Most Popular',
    tagline: 'Designed for specialists who want more visibility, credibility, and patient inquiries.',
    technology: 'React.js + Next.js',
    bestFor: 'Gynecologists, Dentists, Orthopedic Specialists, Dermatologists, Physiotherapists, and growing clinics.',
    delivery: '7-12 days',
    revisions: '2 revision rounds',
    featured: true,
    features: [
      'Up to 5 custom pages',
      'Modern React-based architecture',
      'SEO-friendly Next.js setup',
      'Doctor profile page',
      'Dedicated services/treatments pages',
      'Online appointment request form',
      'Advanced contact forms',
      'WhatsApp booking integration',
      'Google Business Profile integration',
      'Speed optimization',
      'On-page SEO setup',
      'Professional content structure',
      'Testimonials section',
      'FAQ section',
      'Analytics integration',
      'Conversion-focused copywriting',
      'Blog setup',
      'Technical support for 30 days',
      '2 revision rounds',
    ],
  },
  {
    name: 'Elite',
    price: '₹24,999',
    eyebrow: 'Complete Platform',
    tagline: 'A complete digital growth platform for established clinics and multi-specialty practices.',
    technology: 'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
    bestFor: 'Multi-specialty clinics, healthcare centers, cosmetic clinics, hospitals, and practices looking to scale online.',
    delivery: '3-5 weeks',
    revisions: '3 revision rounds',
    features: [
      'Up to 15 custom pages',
      'Fully dynamic admin dashboard',
      'Secure patient inquiry management',
      'Appointment management system',
      'Lead tracking dashboard',
      'Dynamic content management',
      'Multiple doctor profiles',
      'Department management',
      'Blog management system',
      'Advanced SEO architecture',
      'Google Analytics integration',
      'Performance monitoring',
      'Database integration',
      'Secure backend infrastructure',
      'Custom forms and workflows',
      'Patient lead storage',
      'Email notification system',
      'Priority support',
      'Monthly maintenance guidance',
      'Scalability for future growth',
      'Premium design customization',
      '3 revision rounds',
    ],
  },
];

const comparisonRows = [
  ['Technology', 'HTML5, CSS3, JS', 'React + Next.js', 'MERN Stack'],
  ['Pages included', '1 premium page', 'Up to 5 pages', 'Up to 15 pages'],
  ['Mobile responsive', 'Included', 'Included', 'Included'],
  ['Doctor profile', 'Section', 'Dedicated page', 'Multiple profiles'],
  ['Services/treatments', 'Section', 'Dedicated pages', 'Department system'],
  ['WhatsApp booking', 'Included', 'Included', 'Included'],
  ['Appointment system', 'Contact form', 'Request form', 'Management dashboard'],
  ['Admin dashboard', '-', '-', 'Included'],
  ['Lead tracking', '-', 'Basic analytics', 'Lead dashboard'],
  ['SEO setup', 'Basic SEO', 'On-page SEO', 'Advanced SEO architecture'],
  ['Blog', '-', 'Blog setup', 'Blog management system'],
  ['Analytics', '-', 'Included', 'Advanced integration'],
  ['Support', 'Launch support', '30 days', 'Priority support'],
  ['Revision rounds', '1', '2', '3'],
];

const trustItems = ['Doctors', 'Dentists', 'Surgeons', 'Specialists', 'Clinics', 'Healthcare Centers'];

const faqs = [
  {
    question: 'How long does delivery take?',
    answer: 'Starter usually takes 3-5 days. Growth typically takes 7-12 days. Elite timelines depend on dashboard, content, and workflow scope, but most projects take 3-5 weeks.',
  },
  {
    question: 'Do you provide hosting support?',
    answer: 'Yes. We guide domain, hosting, SSL, deployment, and launch setup. If you want managed hosting support, we can recommend the right setup during the audit.',
  },
  {
    question: 'Can I upgrade later?',
    answer: 'Yes. You can start with Starter or Growth and later upgrade to more pages, better SEO, appointment workflows, dashboards, or a complete MERN platform.',
  },
  {
    question: 'Will my website rank on Google?',
    answer: 'Every package includes SEO foundations. Rankings depend on competition, location, content, Google Business Profile quality, and ongoing SEO, but Growth and Elite are structured for stronger search visibility.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer: 'Yes. Maintenance, SEO content, security updates, analytics review, and technical support can be added after launch based on your clinic requirements.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[6fr_6fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Pricing</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[56px] xl:text-[62px]">
            Transparent Pricing For Modern <span className="italic text-[#775a19]">Clinics &amp; Specialists</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#444748]">
            Choose the solution that best fits your clinic&apos;s growth stage. From a professional online presence to a complete patient acquisition system.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="#plans" className="border border-black px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              View Packages
            </a>
            <a href="https://wa.me/917291978840" target="_blank" rel="noreferrer" className="border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 border-t border-black/15 pt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#444748]">
            <span>Outcome-led scope</span>
            <span>Clear technology fit</span>
            <span>Upgrade anytime</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div
              className="h-[420px] bg-cover bg-center p-5 sm:h-[500px] sm:p-8 lg:h-[500px] xl:h-[540px]"
              style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.62)), url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="flex h-full items-end border border-white/20 bg-black/20 p-5 text-white sm:p-6">
                <p className="ml-auto max-w-[280px] text-right font-secondary text-3xl font-bold leading-tight sm:text-4xl">Choose the right growth stage.</p>
              </div>
            </div>
            <div className="absolute left-0 top-10 bg-[#775a19] px-6 py-5 text-white sm:px-8 sm:py-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em]">From</p>
              <p className="font-secondary text-4xl font-bold">₹4,999</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            Built For Practices Of <span className="italic text-[#775a19]">Every Size</span>
          </h2>
          <p className="text-lg leading-8 text-[#444748]">
            Each plan is designed around a different growth stage: simple credibility, stronger visibility, or a dynamic clinic platform with lead and appointment management.
          </p>
        </div>
      </section>

      <section id="plans" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`relative border p-7 shadow-[10px_10px_0_rgba(0,0,0,0.04)] ${plan.featured ? 'border-black bg-black text-white shadow-[12px_12px_0_rgba(119,90,25,0.24)]' : 'border-black/20 bg-white text-black'}`}>
                {plan.featured && (
                  <div className="absolute right-5 top-5 border border-[#e9c176] bg-[#e9c176] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-black">
                    Most Popular
                  </div>
                )}
                <p className={`mb-5 max-w-[180px] text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>{plan.eyebrow}</p>
                <h3 className="font-secondary text-4xl font-bold">{plan.name}</h3>
                <p className={`mt-5 min-h-[84px] text-sm leading-7 ${plan.featured ? 'text-white/65' : 'text-[#444748]'}`}>{plan.tagline}</p>
                <p className="mt-8 font-secondary text-5xl font-bold">{plan.price}</p>
                <div className={`mt-7 grid gap-3 border-y py-5 text-xs font-bold uppercase tracking-[0.12em] ${plan.featured ? 'border-white/15 text-white/70' : 'border-black/15 text-[#444748]'}`}>
                  <span>Technology: {plan.technology}</span>
                  <span>Delivery: {plan.delivery}</span>
                  <span>{plan.revisions}</span>
                </div>
                <ul className="mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-sm leading-6 ${plan.featured ? 'text-white/75' : 'text-[#444748]'}`}>
                      <span className={`mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center border ${plan.featured ? 'border-[#e9c176] text-[#e9c176]' : 'border-[#775a19] text-[#775a19]'}`}>
                        <svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`mt-8 border-t pt-6 ${plan.featured ? 'border-white/15' : 'border-black/15'}`}>
                  <p className={`mb-2 text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>Best For</p>
                  <p className={`text-sm leading-7 ${plan.featured ? 'text-white/65' : 'text-[#444748]'}`}>{plan.bestFor}</p>
                </div>
                <a href="/contact#consultation" data-consultation-modal className={`mt-8 inline-flex w-full justify-center border px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-[#e9c176] bg-[#e9c176] text-black hover:bg-white' : 'border-black text-black hover:bg-black hover:text-white'}`}>
                  Book Free Website Audit
                </a>
                <a href={`https://wa.me/917291978840?text=${encodeURIComponent(`Hi DoctorSite, I am interested in the ${plan.name} package.`)}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex w-full justify-center border border-[#25D366] bg-[#25D366] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white">
                  WhatsApp This Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Comparison</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Growth Package Comparison</h2>
          </div>
          <div className="overflow-hidden border border-black/20 bg-white">
            <table className="w-full table-fixed border-collapse text-left text-[9px] leading-tight sm:text-xs lg:text-sm">
              <thead>
                <tr className="border-b border-black">
                  <th className="w-[28%] p-2 text-[9px] font-bold uppercase tracking-[0.04em] sm:p-4 sm:text-xs sm:tracking-[0.12em]">Feature</th>
                  <th className="w-[24%] p-2 text-[9px] font-bold uppercase tracking-[0.04em] sm:p-4 sm:text-xs sm:tracking-[0.12em]">Starter</th>
                  <th className="w-[24%] p-2 text-[9px] font-bold uppercase tracking-[0.04em] sm:p-4 sm:text-xs sm:tracking-[0.12em]">Growth</th>
                  <th className="w-[24%] p-2 text-[9px] font-bold uppercase tracking-[0.04em] sm:p-4 sm:text-xs sm:tracking-[0.12em]">Elite</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-black/10">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${cell}`} className={`break-words p-2 align-top sm:p-4 ${index === 0 ? 'font-semibold text-black' : index === 2 ? 'bg-black text-white' : 'text-[#444748]'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Trust</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Trusted by Doctors &amp; Healthcare Professionals</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
              Built for practices where credibility, clarity, and patient confidence directly influence appointment decisions.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => (
              <div key={item} className="bg-[#111312] p-6 text-center">
                <span className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-[#e9c176] text-[#e9c176]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="text-sm font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-16">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="border border-black bg-[#fbf9f8] p-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Custom Requirements</p>
            <h2 className="font-secondary text-3xl font-bold tracking-[-0.03em] lg:text-4xl">Need Something Custom?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#444748]">
              We can create a tailored solution based on your clinic&apos;s requirements, specialty, locations, workflows, and patient acquisition goals.
            </p>
            <a href="/contact#consultation" data-consultation-modal className="mt-8 inline-flex border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Discuss Custom Solution
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Questions</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-black/15 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                  {faq.question}
                  <span className="text-[#775a19]">+</span>
                </summary>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-20 text-center lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">A Healthcare Website Is An Investment In Patient Acquisition</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#444748]">
            Patients search, compare, and decide before they call. A clear, premium website helps your practice earn trust, visibility, and appointment inquiries before the first visit.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em]">Find The Right Growth Package For Your Practice</h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="tel:+917291978840" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Call For Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
