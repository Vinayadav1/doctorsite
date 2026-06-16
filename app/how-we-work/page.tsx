const executionSteps = [
  {
    step: '01',
    title: 'Discovery',
    focus: 'Practice diagnosis',
    detail: 'We understand your specialty, city, services, patients, current website, and growth goals.',
    output: 'Audit notes, audience map, website priorities',
  },
  {
    step: '02',
    title: 'Strategy',
    focus: 'Patient journey',
    detail: 'We plan the pages, content hierarchy, calls to action, trust signals, and appointment flow.',
    output: 'Sitemap, section plan, conversion structure',
  },
  {
    step: '03',
    title: 'Design',
    focus: 'Editorial interface',
    detail: 'We create a premium healthcare visual system that feels authoritative, calm, and precise.',
    output: 'Homepage direction, page layouts, visual language',
  },
  {
    step: '04',
    title: 'Development',
    focus: 'Responsive build',
    detail: 'We build the website for desktop, tablet, and mobile with fast loading and clean structure.',
    output: 'Working website, forms, WhatsApp flow, SEO basics',
  },
  {
    step: '05',
    title: 'Launch',
    focus: 'Patient-ready handoff',
    detail: 'We review, refine, publish, and help you understand how the website supports your practice.',
    output: 'Live website, launch support, next-step roadmap',
  },
];

const timeline = [
  {
    title: 'Discovery & Planning',
    duration: 'Day 1',
    body: 'We collect core details, identify gaps, and define the project scope.',
  },
  {
    title: 'Website Strategy',
    duration: 'Day 2',
    body: 'We map content, page structure, services, and conversion priorities.',
  },
  {
    title: 'Design & Development',
    duration: 'Days 3-5',
    body: 'We design, build, and optimize the website across devices.',
  },
  {
    title: 'Review & Launch',
    duration: 'Day 6+',
    body: 'We finalize changes, connect essentials, and prepare the live launch.',
  },
];

const inclusions = [
  {
    title: 'Website strategy',
    body: 'A clear structure built around your specialty, services, and patient journey.',
  },
  {
    title: 'Mobile-first design',
    body: 'Layouts designed for patients searching and booking from their phones.',
  },
  {
    title: 'Conversion copy',
    body: 'Patient-friendly content that explains expertise, trust, and next steps.',
  },
  {
    title: 'Technical setup',
    body: 'Forms, WhatsApp actions, responsive pages, speed basics, and launch support.',
  },
  {
    title: 'Trust architecture',
    body: 'Credentials, services, proof, and calls to action arranged with intention.',
  },
  {
    title: 'SEO foundation',
    body: 'Page structure and metadata prepared for local and specialty visibility.',
  },
];

const healthcarePoints = [
  'Specialty-specific page planning',
  'Patient trust and privacy-aware form strategy',
  'Clear appointment paths for high-intent visitors',
  'Professional presentation for clinical expertise',
];

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Most focused medical websites can be planned, designed, and launched in about one week depending on content readiness and scope.',
  },
  {
    question: 'Do you write the content?',
    answer: 'Yes. We create patient-friendly website copy that explains your services, expertise, and appointment flow clearly.',
  },
  {
    question: 'What do you need from my side?',
    answer: 'We need your specialty, services, practice details, preferred contact methods, existing assets, and any credentials or proof you want highlighted.',
  },
  {
    question: 'Can the website grow later?',
    answer: 'Yes. The structure can expand with service pages, SEO content, booking automation, and ongoing improvement.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[6fr_6fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">How We Work</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[56px] xl:text-[62px]">
            A Proven Process For <span className="italic text-[#775a19]">Exceptional Healthcare Websites</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#444748]">
            A focused, transparent process for building premium medical websites that communicate expertise, improve patient trust, and support appointment growth.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="#execution" className="border border-black bg-black px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              View Process
            </a>
            <a href="/contact#consultation" data-consultation-modal className="border border-black px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Start Project
            </a>
            <a href="https://wa.me/917291978840" target="_blank" rel="noreferrer" className="border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div
              className="h-[380px] bg-cover bg-center p-5 sm:h-[520px] sm:p-8 lg:h-[500px] xl:h-[540px]"
              style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.58)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="flex h-full items-end border border-white/30 bg-black/20 p-6 text-white">
                <p className="font-secondary text-4xl font-bold leading-tight">Strategy before design.</p>
              </div>
            </div>
            <div className="absolute left-0 top-10 bg-white px-6 py-4 text-black ring-1 ring-black sm:left-8 sm:px-8 sm:py-5">
              <p className="font-secondary text-4xl font-bold">0.01mm</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Process precision</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            Great Websites Begin With Understanding
          </h2>
          <div>
            <p className="text-lg leading-8 text-white/70">
              We do not start with templates. We begin by understanding your practice, patients, services, local competition, and the trust gaps that stop visitors from booking.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <article className="border-t border-white/20 pt-6">
                <h3 className="font-secondary text-2xl font-bold">Clinical context</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">Your specialty, services, credentials, and patient decision-making shape the website structure.</p>
              </article>
              <article className="border-t border-white/20 pt-6">
                <h3 className="font-secondary text-2xl font-bold">Patient behavior</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">We design around what anxious, high-intent patients need to see before they contact you.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="execution" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Process</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Meticulous Execution</h2>
          </div>
          <div className="border-t border-black">
            {executionSteps.map((item) => (
              <article key={item.step} className="grid gap-6 border-b border-black/20 py-8 lg:grid-cols-[90px_2fr_3fr_2fr]">
                <p className="font-secondary text-3xl font-bold text-black/20">{item.step}</p>
                <div>
                  <h3 className="font-secondary text-3xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#775a19]">{item.focus}</p>
                </div>
                <p className="text-sm leading-7 text-[#444748]">{item.detail}</p>
                <p className="text-sm leading-7 text-[#444748]">{item.output}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3f3] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Timeline</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Typical Project Timeline</h2>
          </div>
          <div className="grid gap-px bg-black/15 md:grid-cols-4">
            {timeline.map((item) => (
              <article key={item.title} className="bg-[#fbf9f8] p-8">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#775a19]">{item.duration}</p>
                <h3 className="mt-8 font-secondary text-3xl font-bold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[5fr_7fr]">
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">What&apos;s Included In Every Project</h2>
            <p className="text-lg leading-8 text-[#444748]">
              Every build includes the essential strategy, structure, design, and launch details needed for a professional healthcare website.
            </p>
          </div>
          <div className="grid gap-px bg-black/15 md:grid-cols-2 lg:grid-cols-3">
            {inclusions.map((item) => (
              <article key={item.title} className="bg-white p-8">
                <span className="mb-10 block h-8 w-8 border border-[#775a19]" />
                <h3 className="font-secondary text-2xl font-bold">{item.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="border border-black bg-black p-8">
            <div
              className="h-[430px] bg-cover bg-center p-8"
              style={{ backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.62)), url(https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80)' }}
            >
              <div className="flex h-full items-end border border-white/20 bg-black/25 p-6 text-white">
                <p className="font-secondary text-3xl font-bold leading-tight">Built around clinical trust.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Built For Medical Teams</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Built Around Healthcare</h2>
            <p className="mt-6 text-lg leading-8 text-[#444748]">
              A healthcare website needs more than attractive pages. It needs clear service explanation, trust-building, patient privacy awareness, and a direct path to consultation.
            </p>
            <ul className="mt-10">
              {healthcarePoints.map((point) => (
                <li key={point} className="border-t border-black/20 py-4 text-sm leading-7 text-[#444748]">{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">FAQ</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Questions About Our Process</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="border border-black/15 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-secondary text-2xl font-bold">
                  {faq.question}
                  <span className="font-primary text-base text-[#775a19]">+</span>
                </summary>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-24 text-center text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-6xl">Ready To Build Something Exceptional?</h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-[#e9c176]">
              Start A Project
            </a>
            <a href="tel:+917291978840" className="border border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Book A Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
