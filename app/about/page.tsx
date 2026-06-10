const specialtyCards = [
  {
    title: 'Healthcare-Focused Expertise',
    body: 'Every layout, message, and call-to-action is built around how patients evaluate medical expertise online.',
  },
  {
    title: 'Patient-Centered Design',
    body: 'We create calm, clear paths from first impression to appointment so visitors know what to do next.',
    featured: true,
  },
  {
    title: 'Websites That Adapt',
    body: 'Responsive systems designed for mobile searches, clinic discovery, service pages, and trust-building content.',
    gold: true,
  },
  {
    title: 'Professional First Impression',
    body: 'A premium visual presence that makes your practice feel established before a patient calls.',
  },
  {
    title: 'Built to Earn Trust',
    body: 'Credentials, testimonials, services, and patient guidance organized into a reassuring digital experience.',
  },
  {
    title: 'Quality Over Templates',
    body: 'No generic clinic clones. Every website is planned for your specialty, practice model, and growth goals.',
    dark: true,
  },
];

const workflow = [
  { step: '01', title: 'Understand The Practice', body: 'We study your specialty, patients, services, competition, and current online position.' },
  { step: '02', title: 'Plan The Patient Experience', body: 'We map the journey from search intent to trust, inquiry, and booking.' },
  { step: '03', title: 'Create With Trust In Mind', body: 'We design and write pages that explain expertise clearly and reduce patient hesitation.' },
  { step: '04', title: 'Test & Optimize', body: 'We check mobile usability, speed, messaging, forms, SEO basics, and conversion clarity.' },
  { step: '05', title: 'Launch & Support', body: 'We help publish the site and keep improving it as your digital presence grows.' },
];

const disciplines = ['Dentists', 'Surgeons', 'Dermatologists', 'Physicians', 'Clinics', 'Specialists'];

const performanceItems = [
  'Clear patient journey',
  'Mobile-first experience',
  'Trust-building structure',
  'SEO-ready pages',
  'Appointment-focused CTAs',
  'Professional brand presence',
];

export default function AboutPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">About DoctorSite</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Built Exclusively For <span className="italic text-[#775a19]">Healthcare Professionals</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 tracking-[0.01em] text-[#45464d]">
            We are a specialized website studio creating digital systems for doctors, clinics, and medical teams who need trust, clarity, and patient growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#workflow" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              How We Work
            </a>
            <a href="#standards" className="border border-black bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Our Standards
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full border border-black bg-white p-6">
            <div
              className="border border-black/20 bg-[#e4e2e2] bg-cover bg-center p-5"
              style={{ backgroundImage: 'linear-gradient(90deg, rgba(228,226,226,0.94), rgba(228,226,226,0.42)), url(https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="mb-5 flex items-center justify-between border-b border-[#c6c6cd] pb-4">
                <span className="h-3 w-24 bg-black" />
                <span className="h-3 w-16 bg-[#e9c176]" />
              </div>
              <div className="grid gap-4 md:grid-cols-[1.3fr_1fr]">
                <div className="border border-black/15 bg-white p-5">
                  <div className="mb-8 h-32 bg-[linear-gradient(135deg,#111312,#c9c6c5)]" />
                  <div className="space-y-3">
                    <span className="block h-3 w-5/6 bg-[#e4e2e2]" />
                    <span className="block h-3 w-2/3 bg-[#e4e2e2]" />
                    <span className="block h-8 w-28 bg-black" />
                  </div>
                </div>
                <div className="bg-[#111312]/90 p-5 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Practice System</p>
                  <p className="mt-8 font-secondary text-3xl leading-tight">Trust-first medical websites.</p>
                  <div className="mt-10 grid grid-cols-2 gap-3">
                    <span className="h-16 border border-white/15 bg-white/10" />
                    <span className="h-16 border border-white/15 bg-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="disciplines" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
            A Great Medical Website Does More Than <span className="italic text-[#775a19]">Look Good.</span>
          </h2>
          <div className="space-y-6 text-lg leading-8 text-[#45464d]">
            <p>
              It explains your expertise, reduces patient hesitation, builds confidence, and makes booking the next step obvious.
            </p>
            <p>
              DoctorSite exists because healthcare professionals deserve a digital presence as thoughtful, reliable, and precise as the care they provide.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="border border-white/15 bg-white/5 p-5">
            <div className="h-[420px] border border-white/15 bg-[linear-gradient(135deg,#f2f0f0,#5f5e5e_48%,#111312)] p-5">
              <div className="h-full border border-white/20 bg-white/10" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Our Purpose</p>
            <h2 className="font-secondary text-4xl font-medium leading-tight tracking-[-0.02em] lg:text-5xl">
              Why DoctorSite Was Created
            </h2>
            <div className="mt-8 space-y-6 text-base leading-8 text-white/70">
              <p>
                Most healthcare websites are either generic templates or overcomplicated corporate pages. Neither helps a patient quickly understand why they should trust a doctor.
              </p>
              <p>
                We built DoctorSite to give medical professionals a focused digital partner: one that understands clinical credibility, patient psychology, and conversion strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="standards" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Built For Healthcare</p>
            <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
              Built For Healthcare. <span className="italic">Not Everyone.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialtyCards.map((card) => (
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

      <section id="workflow" className="bg-[#111312] py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Our Method</p>
              <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
                The Surgical <span className="italic">Workflow.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/60">
              A clear process for turning medical expertise into a patient-ready digital presence.
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

      <section className="py-24 lg:py-32">
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
            <h3 className="font-secondary text-3xl font-medium">We help local doctors compete with larger hospitals.</h3>
            <p className="mt-5 text-base leading-8 text-white/60">
              Patients often choose the provider who communicates trust most clearly. We make independent practices look credible, modern, and prepared.
            </p>
          </article>
          <article className="border border-white/15 bg-white/5 p-8">
            <h3 className="font-secondary text-3xl font-medium">We become the digital partner behind your growth.</h3>
            <p className="mt-5 text-base leading-8 text-white/60">
              From brand positioning to appointment funnels, we build assets that support long-term patient acquisition.
            </p>
          </article>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Outcome</p>
          <h2 className="font-secondary text-4xl font-medium tracking-[-0.02em] lg:text-5xl">
            Presence That <span className="italic">Performs.</span>
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {performanceItems.map((item) => (
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

      <section id="contact" className="bg-[#775a19] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:px-16 lg:text-left">
          <h2 className="max-w-2xl font-secondary text-4xl font-medium leading-tight tracking-[-0.02em]">
            Let&apos;s Build A Website Worthy Of Your Expertise
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-white bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
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
