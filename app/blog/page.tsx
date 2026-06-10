const categories = ['Clinic Growth', 'Medical SEO', 'Patient Trust', 'Website Strategy', 'Branding', 'Appointments'];

const dispatches = [
  {
    title: 'Digital Trust: The Silent Patient Experience',
    body: 'How patients judge credibility before reading your full services page.',
  },
  {
    title: 'Google & Appointment Flow: Search To Specialist',
    body: 'Why discovery and booking should be designed as one patient journey.',
  },
  {
    title: 'Specialty Positioning For The Local Market',
    body: 'How specialist practices can communicate authority without sounding generic.',
  },
];

const questions = [
  'Why do patients leave my website without booking?',
  'How can a clinic look more credible online?',
  'What pages should every doctor website include?',
];

const professionalAnswers = [
  {
    title: 'Doctors',
    body: 'Need websites that translate expertise into patient confidence.',
  },
  {
    title: 'Clinics',
    body: 'Need service architecture that helps patients navigate care options.',
  },
  {
    title: 'Specialists',
    body: 'Need authority-led pages for procedures, conditions, and consultations.',
  },
];

const reasons = [
  {
    title: 'Written For Clinics',
    body: 'Every insight is focused on healthcare websites, patient trust, and clinical growth.',
  },
  {
    title: 'No Generic Marketing',
    body: 'We avoid recycled advice and focus on what makes medical websites convert.',
  },
  {
    title: 'Conversion First',
    body: 'Each article connects design, copy, SEO, and booking behavior.',
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Insights</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Healthcare <span className="italic text-[#775a19]">Digital Insights</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#444748]">
            Practical strategies for doctors, clinics, and healthcare brands that want to build trust, improve visibility, and convert more patients online.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#latest" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Read Articles
            </a>
            <a href="#subscribe" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Stay Informed
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full border border-black bg-black p-8 text-white">
            <div className="mb-8 h-[420px] bg-[radial-gradient(circle_at_35%_45%,#f2f0f0_0%,#555_14%,#111_45%,#030303_74%)] p-8">
              <div className="h-full border border-white/15 bg-white/5" />
            </div>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9c176]">Latest Field Note</p>
                <h2 className="mt-3 font-secondary text-3xl font-bold">Clinic visibility audit</h2>
              </div>
              <span className="bg-[#775a19] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em]">Featured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-4 px-5 sm:px-8 lg:px-16">
          {categories.map((category) => (
            <span key={category} className="border border-black/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#444748]">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section id="latest" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="border border-black bg-[#e4e2e2] p-8">
            <div className="h-[460px] bg-[linear-gradient(135deg,#f2f0f0,#1b1c1c_62%,#050505)]" />
          </div>
          <article className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Featured Article</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Why Every Modern Clinic Needs A Professional Website
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#444748]">
              A medical website is no longer a digital brochure. It is the first credibility check, the first consultation signal, and often the deciding factor before a patient books.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-[#775a19]" />
              <div>
                <p className="text-sm font-bold">DoctorSite Editorial</p>
                <p className="text-xs uppercase tracking-[0.14em] text-[#444748]">Healthcare Website Strategy</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-black pb-8 lg:flex-row lg:items-end">
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Latest Dispatches</h2>
            <a href="#subscribe" className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Subscribe For Updates</a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dispatches.map((post, index) => (
              <article key={post.title} className="border border-black bg-white p-5">
                <div className={`mb-6 h-56 ${index === 0 ? 'bg-[linear-gradient(135deg,#0b7776,#030303)]' : index === 1 ? 'bg-[radial-gradient(circle_at_center,#0b7776,#111_55%,#030303)]' : 'bg-[linear-gradient(135deg,#f2f0f0,#5f5e5e,#111)]'}`} />
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Clinic Insight</p>
                <h3 className="font-secondary text-2xl font-bold leading-tight">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#444748]">{post.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <blockquote className="font-secondary text-4xl font-bold italic leading-tight tracking-[-0.03em] lg:text-6xl">
            A doctor&apos;s digital footprint is no longer a luxury; it is the modern extension of their bedside manner.
          </blockquote>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">DoctorSite Insight Principle</p>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div className="space-y-5">
            {questions.map((question) => (
              <div key={question} className="border border-black/15 bg-white p-6 text-sm leading-6 text-[#444748]">
                {question}
              </div>
            ))}
          </div>
          <div className="border border-black bg-white p-10">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Who Reads This</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Healthcare Professionals Are Asking:</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {professionalAnswers.map((item) => (
                <article key={item.title}>
                  <h3 className="font-secondary text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#444748]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div className="bg-black p-10 text-white">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Clinic Growth Resource</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em]">The 2024 Clinic Digital Audit Checklist</h2>
            <p className="mt-6 text-sm leading-7 text-white/65">
              A practical framework for evaluating patient trust, service clarity, mobile usability, SEO readiness, and booking friction.
            </p>
            <a href="#subscribe" className="mt-10 inline-flex bg-[#775a19] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Get Checklist
            </a>
          </div>
          <div className="border border-black bg-[#e4e2e2] p-8">
            <div className="h-[430px] bg-[linear-gradient(135deg,#f2f0f0,#5f5e5e_60%,#111)] p-8">
              <div className="h-full border border-white/30 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Why Read</p>
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Why Read DoctorSite Insights?</h2>
          <div className="mt-14 grid gap-px bg-black/15 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="bg-[#fbf9f8] p-8">
                <span className="mx-auto mb-8 block h-10 w-10 border border-[#775a19]" />
                <h3 className="font-secondary text-2xl font-bold">{reason.title}</h3>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Newsletter</p>
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Stay Informed</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#444748]">
            Receive occasional insights on healthcare websites, clinic visibility, patient trust, and appointment conversion.
          </p>
          <form data-lead-form data-form-type="newsletter" className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              name="email"
              required
              aria-label="Email address"
              placeholder="Email address"
              className="min-h-[52px] flex-1 border border-black bg-transparent px-5 text-sm outline-none focus:border-[#775a19]"
            />
            <button className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Need More Than Advice?</h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book Audit
            </a>
            <a href="/services" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
