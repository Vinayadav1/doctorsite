const trustSegments = ['Doctors', 'Dentists', 'Surgeons', 'Clinics', 'Healthcare Specialists'];

const problems = [
  'Difficult booking process',
  'Low Google visibility',
  'Poor mobile experience',
  'Lack of patient trust',
  'Weak online reputation',
  'No conversion strategy',
];

const valueIndicators = [
  'Mobile Optimized',
  'Appointment Focused',
  'Google Ready',
  'Healthcare Specific',
  'WhatsApp Integrated',
  'Conversion Focused',
];

const solutions = [
  { title: 'Patient Acquisition Websites', body: 'Premium healthcare websites that communicate trust, explain services clearly, and guide visitors toward consultation requests.' },
  { title: 'Google & Local Search Visibility', body: 'Specialty pages, local SEO structure, Google Maps signals, schema, and content clusters built around patient search intent.' },
  { title: 'Appointment Conversion Systems', body: 'WhatsApp, phone, form, and booking journeys designed to reduce friction for patients on mobile devices.' },
  { title: 'Trust & Authority Building', body: 'Doctor profiles, credentials, testimonials, outcomes, treatment education, and proof arranged with clinical clarity.' },
];

const funnel = [
  { title: 'Google Search', body: 'Patients search by condition, treatment, specialty, or location.' },
  { title: 'Website Visit', body: 'They compare your expertise, reviews, clinic details, and mobile experience.' },
  { title: 'Trust Building', body: 'Credentials, service pages, FAQs, and proof reduce hesitation.' },
  { title: 'WhatsApp Inquiry', body: 'Clear CTAs move high-intent patients into a simple conversation.' },
  { title: 'Appointment Booking', body: 'The inquiry path is designed to become a booked consultation.' },
];

const aiSearchSignals = [
  'AI-ready patient education content',
  'Structured medical schema',
  'Local authority pages',
  'Specialty and condition clusters',
  'Knowledge graph signals',
  'Search intent optimization',
];

const caseStudies = [
  {
    title: 'Cardiology Practice Growth System',
    clinicType: 'Cardiologist',
    challenge: 'Patients needed faster confidence for urgent cardiac symptoms and diagnostics.',
    solution: 'Emergency-first CTAs, doctor authority, diagnostics pathways, and Google-ready service pages.',
    expected: 'More qualified calls, clearer patient trust, and stronger local visibility.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dental Implant Consultation Funnel',
    clinicType: 'Dental Clinic',
    challenge: 'The clinic needed patients to understand premium treatments before price comparison.',
    solution: 'Before-after positioning, treatment explainers, trust proof, and WhatsApp consultation prompts.',
    expected: 'Higher confidence inquiries and easier booking for implant consultations.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Surgical Specialist Authority Website',
    clinicType: 'Surgeon',
    challenge: 'Complex procedures required more authority, reassurance, and patient education.',
    solution: 'Procedure pages, recovery guidance, credentials, FAQs, and conversion-focused mobile CTAs.',
    expected: 'Better patient understanding and more prepared consultation requests.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80',
  },
];

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    specialty: 'Dermatologist',
    city: 'Delhi',
    result: 'More WhatsApp inquiries from patients who already understood the treatments.',
    quote: 'The new website made our clinic feel more premium and helped patients choose the right consultation before contacting us.',
  },
  {
    name: 'Dr. Rajesh Kumar',
    specialty: 'Orthopedic Surgeon',
    city: 'Mumbai',
    result: 'Easier appointment flow for joint pain and sports injury patients.',
    quote: 'Patients now mention that the website helped them trust the process before their first visit.',
  },
  {
    name: 'Dr. Sneha Reddy',
    specialty: 'Gynecologist',
    city: 'Hyderabad',
    result: 'Stronger digital presence for sensitive, trust-led consultations.',
    quote: 'DoctorSite understood how patients evaluate healthcare online. The site feels clear, calm, and credible.',
  },
];

const plans = [
  {
    name: 'Starter',
    audience: 'For individual doctors and small clinics',
    price: '₹4,999',
    description: 'A premium single-page medical website for practices establishing a professional online presence.',
    features: ['HTML5, CSS3, JavaScript', 'Mobile responsive design', 'Doctor profile and services sections', 'WhatsApp, contact form, Google Maps, basic SEO'],
  },
  {
    name: 'Growth',
    audience: 'Most Popular / For growing specialists',
    price: '₹9,999',
    description: 'A modern React and Next.js website designed for stronger visibility, credibility, and patient inquiries.',
    features: ['Up to 5 custom pages', 'SEO-friendly Next.js setup', 'Appointment request and WhatsApp booking', 'Analytics, blog, FAQ, testimonials, 30-day support'],
    featured: true,
  },
  {
    name: 'Elite',
    audience: 'For multi-specialty clinics and hospitals',
    price: '₹24,999',
    description: 'A complete MERN stack digital growth platform with dashboards, lead tracking, and scalable clinic workflows.',
    features: ['Up to 15 custom pages', 'Dynamic admin dashboard', 'Appointment and inquiry management', 'Lead tracking, database, email notifications, priority support'],
  },
];

const faqs = [
  {
    question: 'How long does a healthcare website take?',
    answer: 'Most focused clinic websites take 2 to 4 weeks after content and approvals. Larger specialist or multi-location systems are planned after the audit.',
  },
  {
    question: 'Do you provide SEO?',
    answer: 'Yes. We build Google-ready structure, local search pages, metadata, schema, internal links, and content direction for doctors and clinics.',
  },
  {
    question: 'Can patients book appointments online?',
    answer: 'Yes. We can connect WhatsApp, phone, contact forms, calendar tools, or your existing appointment system.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. The free audit identifies trust gaps, mobile issues, SEO problems, and conversion leaks before we recommend a rebuild or redesign.',
  },
  {
    question: 'Do you support clinics outside India?',
    answer: 'Yes. The strategy works for healthcare professionals in India and international markets, with local SEO adapted to your city and audience.',
  },
  {
    question: 'Do you optimize for AI search?',
    answer: 'Yes. We structure content, schema, specialty pages, and entity signals so your practice is easier for Google, ChatGPT, and AI search systems to understand.',
  },
];

const seoClusters = [
  'Doctor Website Design',
  'Clinic Website Design',
  'Medical SEO',
  'Healthcare Marketing',
  'Google Maps SEO For Doctors',
  'AI Search Optimization For Doctors',
];

export default function Home() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center lg:h-full">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Healthcare Growth Partner</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[54px] xl:text-[60px]">
            Get More Patient Appointments With A Website Built For <span className="italic text-[#775a19]">Healthcare</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#444748]">
            We create healthcare websites that improve patient trust, rank on Google, streamline bookings, and convert visitors into consultations.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="inline-flex justify-center border border-black bg-black px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="https://wa.me/918840734369" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_30px_rgba(37,211,102,0.24)]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.76 14.18c-.24.68-1.2 1.25-1.88 1.41-.5.11-1.15.2-3.34-.7-2.81-1.16-4.62-4.02-4.76-4.2-.13-.18-1.14-1.52-1.14-2.9s.72-2.05.98-2.34c.24-.27.64-.39 1.03-.39.13 0 .25.01.36.01.31.01.47.03.68.53.26.63.88 2.15.96 2.31.08.16.16.37.05.59-.1.23-.19.33-.36.53-.18.2-.35.35-.53.57-.16.19-.34.4-.14.75.19.34.86 1.42 1.84 2.3 1.27 1.13 2.29 1.49 2.68 1.65.29.12.64.09.84-.13.27-.29.6-.77.94-1.25.24-.34.55-.38.87-.26.33.11 2.07.98 2.43 1.15.36.18.59.27.68.42.08.15.08.86-.16 1.54z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative min-h-[380px] border border-black bg-[#e4e2e2] p-4 sm:min-h-[420px] sm:p-6 lg:h-[520px] lg:min-h-0 xl:h-[560px]">
          <div className="absolute inset-6 border border-black/20" />
          <div
            className="absolute bottom-7 left-7 right-7 top-7 bg-[#101111] bg-cover bg-center p-4 text-white sm:bottom-10 sm:left-10 sm:right-10 sm:top-10 sm:p-6"
            style={{ backgroundImage: 'linear-gradient(90deg, rgba(16,17,17,0.92), rgba(16,17,17,0.38)), url(/images/home_page/hero.png)' }}
          >
            <div className="grid h-full gap-4 sm:grid-cols-[1fr_1.35fr]">
              <div className="border border-white/20 bg-white/5 p-4">
                <div className="mb-8 h-px bg-white/30" />
                <p className="font-secondary text-3xl leading-tight">Patient Growth Audit</p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#e9c176]">Trust. Search. Booking.</p>
              </div>
              <div className="flex flex-col justify-end border border-white/20 bg-black/30 p-5">
                <div className="mb-4 border border-white/15 bg-white/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Next Patient Action</p>
                  <p className="mt-3 font-secondary text-3xl">Book Consultation</p>
                </div>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  <span className="border border-white/15 bg-white/10 p-3 text-xs">Google Ready</span>
                  <span className="border border-white/15 bg-white/10 p-3 text-xs">WhatsApp CTA</span>
                  <span className="border border-white/15 bg-white/10 p-3 text-xs">Trust Proof</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white py-5">
        <div className="mx-auto grid max-w-7xl items-center gap-4 px-5 sm:px-8 md:grid-cols-[140px_1fr] lg:px-16">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-[#775a19] md:text-left">Trusted By</p>
          <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {trustSegments.map((segment) => (
              <div key={segment} className="flex min-h-[58px] items-center justify-center gap-3 bg-white px-4 py-3 text-center">
                <span className="flex h-8 w-8 items-center justify-center border border-[#775a19] text-[#775a19]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold leading-tight text-[#444748]">{segment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="problem" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Why Most Medical Websites <span className="italic text-[#e9c176]">Fail</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Doctors do not need another online brochure. Patients search, compare, hesitate, and leave when your website does not make trust, location, services, and booking obvious.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div key={problem} className="bg-[#111312] p-6">
                <span className="mb-8 block h-px w-12 bg-[#e9c176]" />
                <p className="font-secondary text-2xl font-semibold">{problem}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-4 border border-white/15 bg-white/[0.04] p-5 sm:grid-cols-2 lg:grid-cols-3">
            {valueIndicators.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-5 w-5 items-center justify-center border border-[#e9c176] text-[#e9c176]">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-16 flex items-end justify-between gap-8 border-b border-black pb-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Healthcare Growth Systems</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Built To Attract, Reassure, And Book Patients</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-[#444748] lg:block">
              DoctorSite supports every stage of patient acquisition, from search discovery to WhatsApp inquiry and booked appointment.
            </p>
          </div>
          <div className="grid border-l border-t border-black md:grid-cols-2">
            {solutions.map((solution, index) => (
              <article key={solution.title} className={`min-h-[230px] border-b border-r border-black p-8 ${index === 2 ? 'bg-[#775a19] text-white' : index === 1 ? 'bg-[#111312] text-white' : 'bg-white'}`}>
                <p className="mb-8 text-xs font-bold uppercase tracking-[0.16em] opacity-60">0{index + 1}</p>
                <h3 className="font-secondary text-2xl font-semibold">{solution.title}</h3>
                <p className="mt-5 text-sm leading-7 opacity-70">{solution.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="funnel" className="bg-[#e4e2e2] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[5fr_7fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Appointment Funnel</p>
              <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">From Search To Scheduled Consultation</h2>
            </div>
            <p className="text-lg leading-8 text-[#444748]">
              Your website should connect the full patient journey: visibility, trust, inquiry, and appointment booking. Every section has a job.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {funnel.map((step, index) => (
              <article key={step.title} className="relative border border-black bg-[#fbf9f8] p-6">
                <p className="mb-8 font-secondary text-5xl text-black/10">0{index + 1}</p>
                <h3 className="font-secondary text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#444748]">{step.body}</p>
                {index < funnel.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center border border-black bg-[#e9c176] text-sm font-bold lg:flex" aria-hidden="true">
                    <svg className="h-3 w-3 -rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ai-search" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Future-Ready Visibility</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Be Found On Google, ChatGPT &amp; AI Search
            </h2>
            <p className="mt-6 text-base leading-8 text-white/65">
              Patients are starting to discover healthcare answers through AI summaries, maps, and search assistants. We structure your content so your practice is easier to understand, cite, and recommend.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2">
            {aiSearchSignals.map((signal) => (
              <div key={signal} className="bg-[#111312] p-6">
                <span className="mb-8 flex h-9 w-9 items-center justify-center border border-[#e9c176] text-[#e9c176]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <h3 className="font-secondary text-2xl font-semibold">{signal}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex items-center justify-between border-b border-white/20 pb-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Case Studies</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Healthcare Websites Built Around Business Outcomes</h2>
            </div>
            <a href="/contact#consultation" data-consultation-modal className="hidden text-xs font-bold uppercase tracking-[0.16em] text-[#775a19] lg:inline">Book Free Website Audit</a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="border border-black bg-white p-5">
                <div
                  className="mb-6 h-64 border border-black/15 bg-cover bg-center p-5"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.58)), url(${item.image})` }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">{item.clinicType}</p>
                <h3 className="mt-3 font-secondary text-2xl font-semibold">{item.title}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-[#444748]">
                  <p><span className="font-bold text-black">Challenge:</span> {item.challenge}</p>
                  <p><span className="font-bold text-black">Solution:</span> {item.solution}</p>
                  <p><span className="font-bold text-black">Expected results:</span> {item.expected}</p>
                </div>
                <a href="/case-studies" className="mt-6 inline-flex border border-black px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
                  View Full Case Study
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Client Results</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Healthcare Professionals Want Trust, Inquiries, And Easier Booking</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="border border-white/15 bg-white/[0.04] p-7">
                <div className="mb-7 h-20 w-20 border border-[#e9c176] bg-[linear-gradient(135deg,#f2f0f0,#775a19)]" />
                <p className="text-sm leading-7 text-white/70">&quot;{item.quote}&quot;</p>
                <div className="mt-8 border-t border-white/15 pt-6">
                  <p className="font-secondary text-2xl font-semibold">{item.name}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#e9c176]">{item.specialty} / {item.city}</p>
                  <p className="mt-5 text-sm font-semibold text-white">{item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Investment</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Transparent Pricing for Modern Clinics &amp; Specialists</h2>
            <p className="mt-5 text-base leading-8 text-[#444748]">
              Choose the solution that best fits your clinic&apos;s growth stage, from a professional online presence to a complete patient acquisition system.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`border p-8 ${plan.featured ? 'border-black bg-black text-white' : 'border-black bg-white text-black'}`}>
                <p className={`mb-4 text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>{plan.audience}</p>
                <h3 className="font-secondary text-3xl font-semibold">{plan.name}</h3>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-white/65' : 'text-[#444748]'}`}>{plan.description}</p>
                <p className="mt-8 font-secondary text-5xl font-bold">{plan.price}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`border-t pt-4 text-sm ${plan.featured ? 'border-white/15' : 'border-black/20'}`}>{feature}</li>
                  ))}
                </ul>
                <a href="/contact#consultation" data-consultation-modal className={`mt-10 inline-flex w-full justify-center border px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-[#e9c176] bg-[#e9c176] text-black hover:bg-white' : 'border-black bg-black text-white hover:border-[#775a19] hover:bg-[#775a19]'}`}>
                  Book Free Website Audit
                </a>
                <a href="/pricing" className={`mt-3 inline-flex w-full justify-center border px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-white/25 text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
                  View Full Package
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="seo-clusters" className="bg-[#e4e2e2] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">SEO Content Clusters</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Build Authority Around How Patients Actually Search
            </h2>
          </div>
          <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">
            {seoClusters.map((cluster) => (
              <a key={cluster} href="/blog" className="bg-[#fbf9f8] p-6 font-secondary text-2xl font-semibold transition-colors hover:bg-black hover:text-white">
                {cluster}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Questions Doctors Ask</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Before You Book The Free Audit</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-black bg-white p-6">
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

      <section id="contact" className="bg-[#775a19] py-16 text-white lg:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-16 lg:text-left">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-white/70">Free Website Audit</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Ready To Attract More Patients Online?</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Book a free website audit and discover how your digital presence can generate more trust, inquiries, and appointments.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-white bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Book Free Website Audit
            </a>
            <a href="tel:+918840734369" className="border border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Call DoctorSite
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
