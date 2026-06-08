const essentials = [
  'Clinic website',
  'Doctor profile',
  'Service pages',
  'Google visibility',
  'WhatsApp booking',
  'Trust content',
];

const developmentFeatures = [
  'Specialty-focused website strategy',
  'Mobile-first patient experience',
  'Conversion-focused service pages',
  'Fast, secure, SEO-ready build',
];

const brandingFeatures = [
  'Doctor profile positioning',
  'Credential and expertise storytelling',
  'Authority-building visual system',
  'Patient-first communication',
];

const specialties = [
  'Dentists',
  'Dermatologists',
  'Surgeons',
  'Physicians',
  'Pediatricians',
  'Orthopedic doctors',
  'Gynecologists',
  'Multi-specialty clinics',
];

const healthcareSystems = [
  {
    title: 'Medical Websites',
    body: 'Premium websites built around trust, clarity, services, credentials, and patient conversion.',
  },
  {
    title: 'Built For SEO',
    body: 'Search-ready pages structured for local discovery, specialty keywords, and Google visibility.',
  },
  {
    title: 'Booking Experience',
    body: 'Clear contact flows, WhatsApp actions, inquiry forms, and appointment-focused calls to action.',
  },
];

const launchSteps = [
  { label: 'Consultation', body: 'We understand your practice, specialty, patient audience, and goals.' },
  { label: 'Strategy', body: 'We map the website structure, service pages, messaging, and booking path.' },
  { label: 'Build', body: 'We design and develop a clean, responsive, credibility-first medical website.' },
  { label: 'Launch', body: 'We publish, verify, and support your site so it is ready for real patients.' },
];

const faqs = [
  {
    question: 'Can you redesign my existing clinic website?',
    answer: 'Yes. We can modernize the design, improve messaging, rebuild service pages, and make the booking journey clearer.',
  },
  {
    question: 'Do you write the website content?',
    answer: 'Yes. We create patient-friendly copy around your specialty, services, credentials, and local search needs.',
  },
  {
    question: 'Is SEO included?',
    answer: 'Every build includes SEO-ready structure. Higher plans can include deeper local SEO and specialty page planning.',
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Our Services</p>
          <h1 className="font-secondary text-5xl font-semibold leading-[1.1] tracking-[-0.03em] text-[#0b1c30] sm:text-6xl lg:text-[64px]">
            Healthcare Digital Solutions Designed For Modern Practices
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 tracking-[0.01em] text-[#45464d]">
            We create premium medical websites, personal branding systems, and patient acquisition experiences for doctors, clinics, and healthcare teams.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#services" className="rounded border border-[#0b1c30] bg-[#0b1c30] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#725b26]">
              Explore Services
            </a>
            <a href="#contact" className="rounded border border-[#bec6e0] bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#0b1c30] transition-colors hover:border-[#0b1c30]">
              Book Free Audit
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[520px] rounded-lg bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="rounded-lg bg-[#131b2e] p-6 text-white">
              <div className="mb-8 rounded bg-[#0b1c30] p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <div className="mx-auto h-56 w-56 rounded-full border border-[#fcdc9a]/40 bg-[radial-gradient(circle_at_center,#fcdc9a_0%,#bec6e0_18%,#35445c_42%,#0b1c30_72%)]" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fcdc9a]">Digital Practice Engine</p>
              <h2 className="mt-4 font-secondary text-3xl font-medium">Medical Presence OS</h2>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <span className="h-16 rounded bg-white/10" />
                <span className="h-16 rounded bg-white/10" />
                <span className="h-16 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Practice Infrastructure</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              Everything Your Practice Needs Online
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-[#45464d]">
              A complete digital foundation for practices that need more than a simple online brochure.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {essentials.map((item, index) => (
              <article key={item} className="rounded-lg bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
                <span className="mb-12 flex h-10 w-10 items-center justify-center rounded-full bg-[#eff4ff] text-[#725b26]">
                  {index + 1}
                </span>
                <h3 className="font-secondary text-2xl font-medium">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="space-y-0">
        <article className="bg-white py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
            <div className="rounded-lg bg-[#eff4ff] p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
              <div className="h-[360px] rounded-md bg-[linear-gradient(135deg,#d3e4fe,#0b1c30)] p-5">
                <div className="h-full rounded border border-white/30 bg-white/20" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Core Service</p>
              <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">Medical Website Development</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#45464d]">
                Premium websites designed for doctors and clinics who need credibility, clarity, and a direct path from search to appointment.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {developmentFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#45464d]">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#725b26]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        <article className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:px-16">
            <div className="flex flex-col justify-center">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Authority Service</p>
              <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">Doctor Personal Branding</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#45464d]">
                Position your medical expertise with refined messaging, professional presentation, and trust-building content that helps patients feel confident.
              </p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {brandingFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-[#45464d]">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#725b26]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
              <div className="h-[380px] rounded-md bg-[linear-gradient(135deg,#0b1c30,#8795ab_55%,#f8f9ff)] p-5">
                <div className="ml-auto h-full w-2/3 rounded border border-white/30 bg-white/10" />
              </div>
            </div>
          </div>
        </article>
      </section>

      <section id="specialties" className="bg-[#131b2e] py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#fcdc9a]">Specialties</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              Healthcare Specialties We Serve
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((specialty) => (
              <div key={specialty} className="rounded-lg bg-white/5 p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
                <span className="mb-10 block h-8 w-8 rounded-full bg-[#fcdc9a]" />
                <p className="text-sm font-semibold">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="built-for" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Built Around Outcomes</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              Built Exclusively For Healthcare
            </h2>
            <div className="mt-10 space-y-6">
              {healthcareSystems.map((item) => (
                <article key={item.title} className="rounded-lg bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
                  <h3 className="font-secondary text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#45464d]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <blockquote className="rounded-lg bg-white p-10 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <p className="font-secondary text-3xl font-medium italic leading-tight">
                Your website should feel like a trusted extension of your practice, not a generic template.
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">DoctorSite Service Standard</p>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="launch" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Delivery</p>
            <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">From Consultation To Launch</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {launchSteps.map((step, index) => (
              <article key={step.label} className="rounded-lg bg-[#f8f9ff] p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
                <p className="font-secondary text-5xl text-[#bec6e0]">0{index + 1}</p>
                <h3 className="mt-8 font-secondary text-2xl font-medium">{step.label}</h3>
                <p className="mt-4 text-sm leading-7 text-[#45464d]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-[#d3e4fe] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#725b26]">Questions</p>
          <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-4 text-left">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.05)]">
                <h3 className="font-secondary text-2xl font-medium">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-[#45464d]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <h2 className="mx-auto max-w-3xl font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
            Your Practice Deserves A Better Digital Experience
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Let us create a premium medical website and online patient journey that reflects the quality of your care.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:vinaysalempur45@gmail.com" className="rounded border border-[#725b26] bg-[#725b26] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Start Your Website
            </a>
            <a href="tel:+918840734369" className="rounded border border-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Ask Your Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
