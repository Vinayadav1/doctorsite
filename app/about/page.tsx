const healthcareDifferences = [
  {
    title: 'Patients are anxious, not casual shoppers',
    body: 'They need reassurance, clarity, credentials, and a simple next step before they contact a clinic.',
  },
  {
    title: 'Trust is built before the first call',
    body: 'Doctor profiles, service explanations, reviews, and professional presentation shape the decision early.',
    featured: true,
  },
  {
    title: 'Local visibility matters',
    body: 'A strong healthcare website must support Google Maps, specialty searches, and location-based patient intent.',
    gold: true,
  },
  {
    title: 'Booking friction loses patients',
    body: 'The path from search to WhatsApp, phone, form, or appointment must be obvious on mobile.',
  },
  {
    title: 'Medical content needs structure',
    body: 'Services, conditions, FAQs, schema, and internal links help patients and search engines understand your expertise.',
  },
  {
    title: 'Generic agencies miss the patient journey',
    body: 'Most agencies design pages. We design the route from discovery to trust to booked consultation.',
    dark: true,
  },
];

const genericFailures = [
  'Template layouts that do not match the specialty',
  'Pretty pages with no appointment strategy',
  'Weak doctor authority and credential presentation',
  'No local SEO or Google Maps thinking',
  'Poor mobile CTA hierarchy',
  'Copy that sounds like an agency, not a clinic',
];

const workflow = [
  { step: '01', title: 'Audit The Current Presence', body: 'We review your website, Google visibility, mobile experience, trust proof, and conversion path.' },
  { step: '02', title: 'Map The Patient Journey', body: 'We identify how patients search, compare, hesitate, inquire, and book in your specialty.' },
  { step: '03', title: 'Design The Growth System', body: 'We plan the site architecture, copy, visuals, local SEO pages, and appointment CTAs.' },
  { step: '04', title: 'Build With Healthcare Standards', body: 'We create a premium, mobile-first website with service pages, schema, forms, and WhatsApp paths.' },
  { step: '05', title: 'Launch, Measure, Improve', body: 'We help publish the site and keep improving trust, visibility, inquiries, and booked consultations.' },
];

const disciplines = ['Dentists', 'Surgeons', 'Dermatologists', 'Physicians', 'Hospitals', 'Specialists'];

const expertiseItems = [
  'Doctor website design',
  'Clinic website design',
  'Medical SEO and local search',
  'AI search optimization',
  'WhatsApp inquiry funnels',
  'Trust-first healthcare copy',
];

const credibilityItems = [
  'Healthcare-only positioning',
  'Transparent audit process',
  'Real specialty page planning',
  'Mobile booking focus',
  'Google-ready technical structure',
  'Conversion-first content strategy',
];

export default function AboutPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Why DoctorSite Exists</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[56px] xl:text-[62px]">
            Healthcare Growth Is Different From <span className="italic text-[#775a19]">Website Design</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 tracking-[0.01em] text-[#45464d]">
            DoctorSite was created for doctors, clinics, surgeons, hospitals, and specialists who need more patient trust, better visibility, and easier consultation booking.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="https://wa.me/917291978840" target="_blank" rel="noreferrer" className="border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full border border-black bg-white p-4 sm:p-6">
            <div
              className="border border-black/20 bg-[#e4e2e2] bg-cover bg-center p-4 sm:p-5 lg:max-h-[500px] lg:overflow-hidden"
              style={{ backgroundImage: 'linear-gradient(90deg, rgba(228,226,226,0.94), rgba(228,226,226,0.42)), url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="mb-4 flex items-center justify-between border-b border-[#c6c6cd] pb-3">
                <span className="h-3 w-24 bg-black" />
                <span className="h-3 w-16 bg-[#e9c176]" />
              </div>
              <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
                <div className="border border-black/15 bg-white p-4 sm:p-5">
                  <div
                    className="mb-5 h-28 bg-cover bg-center sm:h-32"
                    style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.45)), url(https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=80)' }}
                  />
                  <div className="space-y-3">
                    <span className="block h-3 w-5/6 bg-[#e4e2e2]" />
                    <span className="block h-3 w-2/3 bg-[#e4e2e2]" />
                    <span className="inline-flex bg-black px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      Patient Trust
                    </span>
                  </div>
                </div>
                <div className="bg-[#111312]/90 p-4 text-white sm:p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Healthcare Growth System</p>
                  <p className="mt-6 font-secondary text-2xl leading-tight sm:text-3xl">Trust-first patient acquisition.</p>
                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <span className="flex h-14 items-center justify-center border border-white/15 bg-white/10 px-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/75">
                      Google Ready
                    </span>
                    <span className="flex h-14 items-center justify-center border border-white/15 bg-white/10 px-3 text-center text-[10px] font-bold uppercase tracking-[0.12em] text-white/75">
                      Booking Path
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="disciplines" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
            Doctors Do Not Buy Websites. They Buy <span className="italic text-[#775a19]">Patient Growth.</span>
          </h2>
          <div className="space-y-6 text-lg leading-8 text-[#45464d]">
            <p>
              A medical website should help more patients find your practice, trust your expertise, ask better questions, and book consultations with less friction.
            </p>
            <p>
              That is why DoctorSite focuses on healthcare only: the strategy, copy, SEO, visual hierarchy, and calls to action must match how patients make medical decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="border border-white/15 bg-white/5 p-5">
            <div
              className="h-[420px] border border-white/15 bg-cover bg-center p-5"
              style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.62)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="flex h-full items-end border border-white/20 bg-black/20 p-5">
                <p className="font-secondary text-3xl font-bold leading-tight">Built for doctors who need patient trust online.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Founder Story</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              We Saw Good Doctors Losing Trust Online
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
              <p>
                DoctorSite began with a simple observation: many excellent healthcare professionals had websites that looked acceptable but failed to explain expertise, answer patient doubts, or make booking easy.
              </p>
              <p>
                We built a focused practice around healthcare because generic agency thinking does not solve medical trust. Doctors need a digital growth partner who understands patient psychology, local search, reputation, and appointment conversion.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="standards" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Why Healthcare Is Different</p>
            <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
              A Healthcare Website Must Earn Trust Before It Sells.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {healthcareDifferences.map((card) => (
              <article
                key={card.title}
                className={`min-h-[230px] border border-black p-7 ${
                  card.featured
                    ? 'bg-[#111312] text-white'
                    : card.gold
                      ? 'bg-[#775a19] text-white'
                      : card.dark
                        ? 'bg-[#191c1e] text-white'
                        : 'bg-white text-black'
                }`}
              >
                <span className={`mb-10 inline-flex h-9 w-9 items-center justify-center border ${card.featured || card.gold || card.dark ? 'border-white/20 text-[#e9c176]' : 'border-[#775a19] text-[#775a19]'}`}>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-secondary text-2xl font-medium">{card.title}</h3>
                <p className={`mt-5 text-sm leading-7 ${card.featured || card.gold || card.dark ? 'text-white/70' : 'text-[#45464d]'}`}>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Why Generic Agencies Fail Doctors</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              Beautiful Design Alone Does Not Book Consultations
            </h2>
          </div>
          <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">
            {genericFailures.map((item) => (
              <div key={item} className="bg-[#fbf9f8] p-6">
                <span className="mb-8 block h-px w-12 bg-[#775a19]" />
                <p className="font-secondary text-2xl font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Our Process</p>
              <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
                From Free Audit To Patient Acquisition System
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/60">
              A transparent process for turning medical expertise into search visibility, trust, inquiries, and booked consultations.
            </p>
          </div>
          <div className="border-t border-white/15">
            {workflow.map((item) => (
              <article key={item.step} className="grid gap-6 border-b border-white/15 py-8 md:grid-cols-[120px_1fr]">
                <p className="font-secondary text-4xl text-white/20">{item.step}</p>
                <div className="grid gap-4 lg:grid-cols-[4fr_7fr]">
                  <h3 className="font-secondary text-2xl font-medium">{item.title}</h3>
                  <p className="text-sm leading-7 text-white/60">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Trusted By</p>
            <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
              Professionals Across <span className="italic">All Disciplines.</span>
            </h2>
          </div>
          <div className="grid gap-px bg-black/15 border border-black sm:grid-cols-2 lg:grid-cols-6">
            {disciplines.map((discipline) => (
              <div key={discipline} className="bg-[#fbf9f8] p-6 text-center">
                <span className="mx-auto mb-4 block h-8 w-8 border border-[#775a19]" />
                <p className="text-sm font-semibold text-[#45464d]">{discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111312] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:px-16">
          <article className="border border-white/15 bg-white/5 p-8">
            <h3 className="font-secondary text-3xl font-medium">We help local doctors compete with stronger digital brands.</h3>
            <p className="mt-5 text-base leading-8 text-white/60">
              Patients often choose the provider who communicates trust most clearly. We make independent practices look credible, searchable, and ready for patient action.
            </p>
          </article>
          <article className="border border-white/15 bg-white/5 p-8">
            <h3 className="font-secondary text-3xl font-medium">We focus on healthcare because patient trust is specialized.</h3>
            <p className="mt-5 text-base leading-8 text-white/60">
              From doctor authority to appointment funnels, we build assets that support long-term patient acquisition rather than one-time design delivery.
            </p>
          </article>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Expertise</p>
          <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
            Healthcare Growth Capabilities
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {expertiseItems.map((item) => (
              <div key={item} className="border border-black bg-white p-6">
                <span className="mx-auto mb-5 flex h-10 w-10 items-center justify-center border border-[#775a19] text-[#775a19]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <p className="text-sm font-semibold leading-6 text-[#45464d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Credibility</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              What Makes DoctorSite A Healthcare Growth Partner
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {credibilityItems.map((item) => (
              <div key={item} className="border border-black bg-[#fbf9f8] p-6">
                <span className="mb-8 flex h-9 w-9 items-center justify-center border border-[#775a19] text-[#775a19]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="font-secondary text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#775a19] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-16 lg:text-left">
          <h2 className="max-w-2xl font-secondary text-4xl font-medium leading-tight tracking-[-0.02em]">
            Let&apos;s Audit Your Practice Website For Trust, Search, And Booking
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-white bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Book Free Website Audit
            </a>
            <a href="tel:+917291978840" className="border border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Call DoctorSite
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
