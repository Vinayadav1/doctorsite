const auditCards = [
  {
    title: 'WhatsApp Consultation',
    body: 'Quick discovery call for doctors who want immediate clarity.',
  },
  {
    title: 'Email Planning',
    body: 'Send your current website or idea and receive structured next steps.',
  },
  {
    title: 'Website Audit Call',
    body: 'A detailed review of your patient journey, trust signals, and conversion gaps.',
  },
  {
    title: 'Practice Strategy',
    body: 'For clinics that need a full growth system and long-term digital roadmap.',
  },
];

const contactMethods = [
  { value: '+91 88407 34369', label: 'Call or WhatsApp' },
  { value: 'vinaysalempur45@gmail.com', label: 'Email address' },
  { value: 'India-wide', label: 'Remote consultation' },
  { value: '24-48 hrs', label: 'Average response' },
];

const process = [
  { step: '01', title: 'Share your practice', body: 'Tell us your specialty, city, current website, and goals.' },
  { step: '02', title: 'We review the gaps', body: 'We examine trust, clarity, mobile experience, and booking flow.' },
  { step: '03', title: 'Receive direction', body: 'You get a practical recommendation for your digital presence.' },
  { step: '04', title: 'Scope the project', body: 'We define pages, timeline, pricing, and the right build path.' },
  { step: '05', title: 'Begin the build', body: 'Once approved, we start designing your patient-ready website.' },
];

const faqs = [
  {
    question: 'How long does a consultation take?',
    answer: 'Most discovery calls take 20-30 minutes. We focus on your goals, current gaps, and the right next step.',
  },
  {
    question: 'Do you handle HIPAA compliance?',
    answer: 'We design with privacy-conscious structure and can avoid collecting sensitive medical details through public forms.',
  },
  {
    question: 'Can you help if I have no website?',
    answer: 'Yes. We can start from zero and build your complete digital presence, from strategy to launch.',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Contact</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Let&apos;s Discuss <span className="italic text-[#775a19]">Your Practice.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#444748]">
            Whether you are launching a new clinic, redesigning an existing website, or planning a better patient acquisition system, start the conversation here.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#consultation" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Start Conversation
            </a>
            <a href="tel:+918840734369" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Call The Studio
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div className="bg-black p-8 text-white">
              <div className="mx-auto h-[360px] max-w-md bg-[radial-gradient(circle_at_70%_45%,#f2f0f0_0%,#777_12%,#222_34%,#030303_70%)] p-8">
                <div className="h-full border border-white/15 bg-white/10" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-8 bg-white px-8 py-5 text-black shadow-none ring-1 ring-black">
              <p className="font-secondary text-4xl font-bold">24h</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Reply window</p>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Project Inquiry</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Start The Conversation</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-[#444748]">
              Share the essentials and we&apos;ll respond with the clearest next step for your website, audit, or growth system.
            </p>
          </div>

          <form className="border border-black bg-white p-8">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Request Consultation</p>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">Full name</span>
                <input className="h-12 w-full border border-black/20 bg-transparent px-4 text-sm outline-none focus:border-[#775a19]" type="text" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">Phone number</span>
                <input className="h-12 w-full border border-black/20 bg-transparent px-4 text-sm outline-none focus:border-[#775a19]" type="tel" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">Email address</span>
                <input className="h-12 w-full border border-black/20 bg-transparent px-4 text-sm outline-none focus:border-[#775a19]" type="email" />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">Practice type</span>
                <input className="h-12 w-full border border-black/20 bg-transparent px-4 text-sm outline-none focus:border-[#775a19]" type="text" />
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">What do you need?</span>
                <select className="h-12 w-full border border-black/20 bg-transparent px-4 text-sm outline-none focus:border-[#775a19]">
                  <option>New medical website</option>
                  <option>Website redesign</option>
                  <option>SEO and patient growth</option>
                  <option>Free website audit</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">Message</span>
                <textarea className="min-h-[130px] w-full border border-black/20 bg-transparent p-4 text-sm outline-none focus:border-[#775a19]" />
              </label>
            </div>
            <button className="mt-8 w-full border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]" type="submit">
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      <section className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Audit Offer</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Get A Free Website Audit</h2>
            <p className="mt-6 max-w-md text-base leading-8 text-white/65">
              A practical assessment covering trust, conversion clarity, mobile experience, and the next best move for your practice website.
            </p>
            <a href="#consultation" className="mt-10 inline-flex bg-[#775a19] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Get Free Audit
            </a>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-2">
            {auditCards.map((card) => (
              <article key={card.title} className="bg-black p-8">
                <span className="mb-10 block h-8 w-8 border border-[#e9c176]" />
                <h3 className="font-secondary text-2xl font-bold">{card.title}</h3>
                <p className="mt-5 text-sm leading-7 text-white/60">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-px bg-black/15 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-16">
          {contactMethods.map((method) => (
            <article key={method.label} className="bg-[#fbf9f8] p-8 text-center">
              <span className="mx-auto mb-6 block h-10 w-10 border border-[#775a19]" />
              <h3 className="font-secondary text-2xl font-bold">{method.value}</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#444748]">{method.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">How It Works</p>
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Consultation Process</h2>
          <div className="mt-14 grid gap-px bg-black/15 md:grid-cols-5">
            {process.map((item) => (
              <article key={item.step} className="bg-[#fbf9f8] p-7">
                <p className="font-secondary text-5xl font-bold text-black/10">{item.step}</p>
                <h3 className="mt-8 font-secondary text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#444748]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Support</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Common Queries</h2>
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

      <section className="bg-[#e4e2e2] py-24 text-center lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Coverage</p>
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Serving Healthcare Professionals Across India</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#444748]">
            We work remotely with doctors, specialists, clinics, and healthcare teams across major Indian cities.
          </p>
          <div className="mx-auto mt-14 max-w-5xl border border-black bg-[#c9c6c5] p-8">
            <div className="h-[420px] bg-[radial-gradient(circle_at_center,#f2f0f0_0%,#777_22%,#444_45%,#222_75%)] opacity-80" />
          </div>
        </div>
      </section>

      <section className="py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Ready To Build A Better Digital Presence?</h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#consultation" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Start Conversation
            </a>
            <a href="/portfolio" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
