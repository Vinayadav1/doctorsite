const heroMetrics = [
  { value: '24+', label: 'Healthcare projects' },
  { value: '6', label: 'Clinical specialties' },
  { value: '90%', label: 'Trust clarity score' },
];

const casePoints = [
  'Repositioned the clinic from treatment listing to specialist authority.',
  'Built a consultation-first patient journey for sensitive medical decisions.',
  'Created clear service structure, trust signals, and appointment pathways.',
  'Improved mobile confidence for visitors comparing specialists privately.',
];

const gallery = [
  {
    title: 'Dr. Sneha Dermatology Clinic',
    type: 'Dermatology',
    body: 'A refined skin care website focused on treatment clarity and patient reassurance.',
  },
  {
    title: 'Elite Smile Dental',
    type: 'Dental Clinic',
    body: 'A premium dental presence built around trust, procedures, and appointment conversion.',
  },
  {
    title: 'Advanced Sports Medicine',
    type: 'Orthopedic Care',
    body: 'A high-contrast specialty website for injury care, recovery, and local search visibility.',
  },
  {
    title: 'Metro Heart Institute',
    type: 'Cardiology',
    body: 'A clinical authority platform designed for high-intent cardiac patients and families.',
  },
  {
    title: 'Nova Aesthetics',
    type: 'Aesthetics',
    body: 'A discreet, editorial website for consultations, treatments, and premium patient trust.',
  },
  {
    title: "City Children's Hospital",
    type: 'Pediatric Care',
    body: 'A calm hospital website that helps parents understand services and book faster.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Case Studies</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Healthcare Projects That <span className="italic text-[#775a19]">Made A Difference</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#444748]">
            Selected healthcare website projects built to improve trust, clarity, patient confidence, and consultation conversion.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#gallery" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              View Case Studies
            </a>
            <a href="/contact#consultation" data-consultation-modal className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div className="bg-black p-8 text-white">
              <div className="h-[460px] bg-[linear-gradient(135deg,#0b0b0b,#4b4b4b_45%,#111)] p-8">
                <div className="h-full border border-white/15 bg-[radial-gradient(circle_at_35%_45%,rgba(255,255,255,0.55),transparent_28%)]" />
              </div>
            </div>
            <div className="absolute -bottom-8 left-8 bg-white px-8 py-5 text-black ring-1 ring-black">
              <p className="font-secondary text-4xl font-bold">24+</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Projects shipped</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            More Than Just Websites
          </h2>
          <div>
            <p className="text-lg leading-8 text-[#444748]">
              Every healthcare project is designed around credibility, patient decision-making, specialty positioning, and appointment conversion.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-secondary text-4xl font-bold text-[#775a19]">{metric.value}</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#444748]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:px-16">
          <div className="border border-black bg-[#e4e2e2] p-8">
            <div className="h-[520px] bg-[linear-gradient(135deg,#f2f0f0,#2a2a2a_58%,#030303)] p-8">
              <div className="h-full border border-white/30 bg-black/20" />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Featured Case Study</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              The Gynecomastia Clinic
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#444748]">
              A sensitive specialty website redesigned to build confidence, explain treatment options, and help patients take the next step privately.
            </p>
            <ul className="mt-10">
              {casePoints.map((point) => (
                <li key={point} className="border-t border-black/15 py-4 text-sm leading-7 text-[#444748]">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-black pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Clinical Impact Gallery</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Clinical Impact Gallery</h2>
            </div>
            <a href="/contact#consultation" data-consultation-modal className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Start Your Project</a>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <article key={item.title} className="group">
                <div className={`mb-6 h-72 border border-black p-4 ${
                  index % 3 === 0
                    ? 'bg-[linear-gradient(135deg,#f2f0f0,#111)]'
                    : index % 3 === 1
                      ? 'bg-[radial-gradient(circle_at_center,#d5d1cc,#555_34%,#111_70%)]'
                      : 'bg-[linear-gradient(135deg,#111,#5f5e5e,#f2f0f0)]'
                }`}>
                  <span className="inline-block bg-black px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-secondary text-3xl font-bold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#444748]">{item.body}</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[#775a19]">View project notes</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black py-24 text-center text-white lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Start Your Project</p>
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-6xl">
            Let&apos;s Create Something Exceptional For Your Practice
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Professional healthcare websites designed to support your reputation and create confidence for every patient that finds you.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="bg-[#e9c176] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-white">
              Start A Case Study
            </a>
            <a href="tel:+918840734369" className="border border-white px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-black">
              Book A Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
