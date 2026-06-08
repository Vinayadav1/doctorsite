const metrics = [
  { value: '0.8s', label: 'Credibility window', body: 'Patients decide whether your clinic feels trusted before reading your services.' },
  { value: '73%', label: 'Patient trust', body: 'Searchers compare your website, reviews, and appointment path before calling.' },
  { value: '3.4x', label: 'SEO and AI', body: 'Structured pages make your expertise easier for Google and AI answers to understand.' },
  { value: '24/7', label: 'Booking', body: 'Clear calls to action convert anxious research into scheduled consultations.' },
];

const solutions = [
  { title: 'Website and conversion systems', body: 'Editorial medical pages, service architecture, trust proof, and conversion paths engineered for high-intent patients.' },
  { title: 'Doctor search engine optimization', body: 'Local SEO pages, specialty landing pages, schema, and content designed to rank for treatment searches.' },
  { title: 'Smart booking', body: 'WhatsApp, contact, consultation, and follow-up flows that reduce friction between discovery and appointment.' },
  { title: 'Reputation architecture', body: 'Testimonials, credentials, case signals, and clinical proof arranged with institutional clarity.' },
];

const workflow = [
  { step: '01', title: 'Diagnosis', body: 'We audit your current online presence, patient journey, search visibility, and conversion leaks.' },
  { step: '02', title: 'Digital operation', body: 'We design the website structure, copy, visual system, and booking flow with surgical precision.' },
  { step: '03', title: 'Verification', body: 'We test speed, mobile usability, search metadata, conversion clarity, and page-level trust signals.' },
  { step: '04', title: 'Launch and scale', body: 'We publish, monitor, and improve the site so it compounds into a stronger patient acquisition asset.' },
];

const plans = [
  {
    name: 'Starter',
    price: '₹2,999',
    description: 'For clinics that need a refined one-page presence.',
    features: ['1-page website', 'Mobile responsive', 'WhatsApp booking', 'Basic SEO setup'],
  },
  {
    name: 'Precision',
    price: '₹7,999',
    description: 'For specialists ready to convert search traffic.',
    features: ['5-page website', 'Service pages', 'Google visibility setup', 'Conversion copy'],
    featured: true,
  },
  {
    name: 'Elite',
    price: '₹14,999',
    description: 'For practices that want a complete growth system.',
    features: ['10-page website', 'Advanced SEO structure', 'Appointment automation', 'Monthly growth plan'],
  },
];

const portfolio = [
  { title: 'Cardiac Care Studio', tag: 'Specialist Website' },
  { title: 'Surgical Landing Suite', tag: 'Conversion System' },
];

export default function Home() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Surgical Excellence</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Professional Websites For <span className="italic text-[#775a19]">Doctors & Clinics</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[#444748]">
            We engineer high-converting medical websites that turn local searches into booked patient appointments with surgical precision.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Audit
            </a>
            <a href="#portfolio" className="inline-flex border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              View Work
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] border border-black bg-[#e4e2e2] p-6">
          <div className="absolute inset-6 border border-black/20" />
          <div className="absolute bottom-10 left-10 right-10 top-10 bg-[#101111] p-6 text-white">
            <div className="grid h-full grid-cols-[1fr_1.35fr] gap-4">
              <div className="border border-white/20 bg-white/5 p-4">
                <div className="mb-10 h-px bg-white/30" />
                <p className="font-secondary text-3xl leading-tight">Clinical Web Presence</p>
                <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#e9c176]">Audit Dashboard</p>
              </div>
              <div className="flex flex-col justify-end border border-white/20 bg-[linear-gradient(135deg,#2b2b2b,#0b0b0b)] p-5">
                <div className="mb-4 h-24 border border-white/15 bg-white/10" />
                <div className="grid grid-cols-3 gap-2">
                  <span className="h-10 border border-white/15 bg-white/10" />
                  <span className="h-10 border border-white/15 bg-white/10" />
                  <span className="h-10 border border-white/15 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr]">
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Your Website Is Often The <span className="italic text-[#e9c176]">First Consultation.</span>
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Before a patient calls, they have already judged your expertise, professionalism, and trustworthiness. A generic website quietly loses patients to competitors with clearer authority.
            </p>
          </div>
          <div className="mt-16 grid border-t border-white/20 md:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-b border-white/20 p-6 lg:border-r">
                <p className="font-secondary text-4xl font-bold text-[#e9c176]">{metric.value}</p>
                <h3 className="mt-6 text-xs font-bold uppercase tracking-[0.16em]">{metric.label}</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">{metric.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-16 flex items-end justify-between gap-8 border-b border-black pb-8">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">What We Build</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Precision-Engineered Solutions</h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-6 text-[#444748] lg:block">
              Every page is treated like a clinical asset: structured, measured, and built to move patients toward action.
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

      <section id="portfolio" className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex items-center justify-between border-b border-white/20 pb-8">
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em]">The Clinical Portfolio</h2>
            <a href="#contact" className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Request Preview</a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolio.map((item) => (
              <article key={item.title} className="border border-white/20 bg-white/[0.03] p-5">
                <div className="mb-6 h-64 border border-white/15 bg-[linear-gradient(135deg,#343434,#080908)] p-5">
                  <div className="h-full border border-white/10 bg-[radial-gradient(circle_at_center,#555,transparent_45%)]" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">{item.tag}</p>
                <h3 className="mt-3 font-secondary text-2xl font-semibold">{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid gap-16 lg:grid-cols-[4fr_8fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Process</p>
              <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
                The Surgical <span className="italic">Workflow.</span>
              </h2>
            </div>
            <div className="border-t border-black">
              {workflow.map((item) => (
                <article key={item.step} className="grid gap-8 border-b border-black py-10 md:grid-cols-[120px_1fr]">
                  <p className="font-secondary text-5xl text-black/10">{item.step}</p>
                  <div>
                    <h3 className="font-secondary text-3xl font-semibold">{item.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#444748]">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Investment</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Transparent Pricing for Elite Care</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`border p-8 ${plan.featured ? 'border-[#e9c176] bg-white text-black' : 'border-white/20 bg-white/[0.03]'}`}>
                <h3 className="font-secondary text-3xl font-semibold">{plan.name}</h3>
                <p className={`mt-4 text-sm leading-6 ${plan.featured ? 'text-[#444748]' : 'text-white/60'}`}>{plan.description}</p>
                <p className="mt-8 font-secondary text-5xl font-bold">{plan.price}</p>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`border-t pt-4 text-sm ${plan.featured ? 'border-black/20' : 'border-white/15'}`}>{feature}</li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-10 inline-flex w-full justify-center border px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-black bg-black text-white hover:border-[#775a19] hover:bg-[#775a19]' : 'border-white text-white hover:bg-white hover:text-black'}`}>
                  Start Build
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:px-16">
          <blockquote className="font-secondary text-4xl font-semibold italic leading-tight tracking-[-0.03em] lg:text-5xl">
            The implementation transformed our website. Patients understood our expertise before the first call, and inquiries became dramatically more qualified.
          </blockquote>
          <div className="border border-black bg-[#e4e2e2] p-8">
            <div className="mb-8 h-64 border border-black/20 bg-[linear-gradient(135deg,#2f302f,#d7d2cb)]" />
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Clinical Director</p>
            <p className="mt-2 font-secondary text-2xl font-semibold">Heart Care Institute</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#775a19] py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-16 lg:text-left">
          <h2 className="font-secondary text-3xl font-bold tracking-[-0.03em] lg:text-4xl">Ready For A Surgical Audit of Your Presence?</h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="mailto:vinaysalempur45@gmail.com" className="border border-white bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Request Audit
            </a>
            <a href="tel:+918840734369" className="border border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Call Studio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
