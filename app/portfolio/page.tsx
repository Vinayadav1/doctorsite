const stats = [
  { value: 'Mobile', label: 'Optimized patient experience' },
  { value: 'Booking', label: 'Appointment-focused journeys' },
  { value: 'Google', label: 'Local search-ready structure' },
  { value: 'Trust', label: 'Healthcare-specific proof' },
];

const projectHighlights = [
  'Specialty-first homepage architecture',
  'Trust-building doctor profile and credentials',
  'Appointment path designed for mobile patients',
  'Service pages structured for local search intent',
];

const projects = [
  {
    title: 'Cardiology Practice Website',
    type: 'Specialist Website',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dental Implant Clinic',
    type: 'Conversion Landing Page',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Multi-Specialty Care Studio',
    type: 'Clinic Growth System',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80',
  },
];

const outcomes = [
  {
    title: 'More patient confidence',
    body: 'Clear expertise, services, and proof help visitors feel safer before reaching out.',
  },
  {
    title: 'Better appointment flow',
    body: 'Every page guides patients toward WhatsApp, forms, or phone calls without confusion.',
  },
  {
    title: 'Stronger local discovery',
    body: 'Service pages and structure make it easier for Google to understand what you offer.',
  },
];

const strategy = [
  {
    title: 'Specialty-first structure',
    body: 'Each project begins by mapping the exact services, conditions, and patient concerns that matter most.',
  },
  {
    title: 'Conversion-focused copy',
    body: 'We write for patients who need reassurance, clarity, and a simple next step.',
  },
  {
    title: 'Premium visual trust',
    body: 'Editorial layouts, sharp spacing, and strong contrast help practices feel credible and established.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-16 pt-24 sm:px-8 sm:pt-28 lg:min-h-screen lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-24 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Portfolio</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Healthcare Case Studies Designed To <span className="italic text-[#775a19]">Book Consultations.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#444748]">
            A curated view of healthcare website systems built to improve credibility, patient clarity, Google visibility, and appointment conversion.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              View Projects
            </a>
            <a href="/contact#consultation" data-consultation-modal className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Book Free Website Audit
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div className="bg-black p-6 text-white">
              <div className="mb-6 border border-white/15 p-5">
                <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
                  <span className="h-2 w-24 bg-white" />
                  <span className="h-2 w-16 bg-[#e9c176]" />
                </div>
                <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
                  <div
                    className="h-72 bg-cover bg-center"
                    style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.58)), url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80)' }}
                  />
                  <div className="space-y-4">
                    <div className="h-20 border border-white/15 bg-white/10" />
                    <div className="h-20 border border-white/15 bg-white/10" />
                    <div className="h-20 border border-white/15 bg-white/10" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Website Case Study</p>
              <h2 className="mt-3 font-secondary text-3xl font-bold">Trust-first clinical interface</h2>
            </div>
            <div className="absolute -bottom-8 left-8 bg-[#775a19] px-8 py-5 text-white">
              <p className="font-secondary text-4xl font-bold">Audit</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Ready</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em]">
            Selected Healthcare Projects
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-secondary text-4xl font-bold text-[#775a19]">{stat.value}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#444748]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Featured Project</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Dr. Sarah Dermatology Clinic</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#444748]">
              A premium dermatology website designed to help patients understand treatments, trust the doctor, and book with confidence.
            </p>
            <ul className="mt-10">
              {projectHighlights.map((item) => (
                <li key={item} className="border-t border-black/15 py-4 text-sm text-[#444748]">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative border border-black bg-white p-8">
            <div className="h-[460px] bg-[#e4e2e2] p-8">
              <div
                className="flex h-full items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.48)), url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80)' }}
              >
                <div className="h-44 w-44 rounded-full border border-[#e9c176] bg-[#e9c176]/20" />
              </div>
            </div>
            <div className="absolute -right-6 top-10 rounded-full bg-[#775a19] px-5 py-6 text-center text-white">
              <p className="font-secondary text-2xl font-bold">Case</p>
              <p className="text-xs font-bold uppercase tracking-[0.12em]">Study</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-black pb-8 lg:flex-row lg:items-end">
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">More Healthcare Projects</h2>
            <a href="/contact#consultation" data-consultation-modal className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Book Free Website Audit</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="border border-black bg-white p-5">
                <div
                  className="mb-6 h-64 bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.48)), url(${project.image})` }}
                />
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">{project.type}</p>
                <h3 className="mt-3 font-secondary text-2xl font-bold">{project.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="bg-black p-10 text-white">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Conversion Design</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em]">Every Website Is Built Around Trust.</h2>
            <div className="mt-10 space-y-6 text-sm leading-7 text-white/65">
              <p>Patients compare credibility before they book. We design every page to answer their doubts quickly and professionally.</p>
              <p>Credentials, treatments, outcomes, calls to action, and appointment paths are structured to reduce hesitation.</p>
            </div>
          </div>
          <div className="border border-black bg-[#e4e2e2] p-8">
            <div className="h-[430px] bg-[linear-gradient(135deg,#0b0b0b,#2f3538,#d5d1cc)] p-8">
              <div className="h-full border border-white/25 bg-black/30" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Responsive Systems</p>
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Designed For Every Device</h2>
          <div className="mx-auto mt-14 max-w-5xl border border-white/15 bg-[#050706] p-8">
            <div className="relative mx-auto h-[520px] max-w-4xl bg-[radial-gradient(circle_at_center,#0b7776,#062a2a_40%,#020303_70%)]">
              <div className="absolute left-1/2 top-12 h-64 w-[520px] -translate-x-1/2 border border-cyan-300/50 bg-cyan-300/10" />
              <div className="absolute bottom-20 left-24 h-56 w-36 border border-cyan-300/50 bg-cyan-300/10" />
              <div className="absolute bottom-16 right-24 h-48 w-64 border border-cyan-300/50 bg-cyan-300/10" />
              <div className="absolute bottom-12 left-1/2 h-28 w-[640px] -translate-x-1/2 border border-cyan-300/40 bg-black/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Outcomes</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">What A Better Website Can Achieve</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome.title} className="border border-black/15 bg-white p-7">
                <h3 className="font-secondary text-2xl font-bold">{outcome.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{outcome.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 border-b border-white/15 pb-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Strategy</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Strategy Behind The Design</h2>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-3">
            {strategy.map((item) => (
              <article key={item.title} className="bg-black p-8">
                <h3 className="font-secondary text-2xl font-bold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/60">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Start Your Project</p>
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            Ready To Create A Website That <span className="italic text-[#775a19]">Reflects Your Expertise?</span>
          </h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Free Website Audit
            </a>
            <a href="tel:+918840734369" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
