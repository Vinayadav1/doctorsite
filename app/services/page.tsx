const problems = [
  {
    problem: 'Website looks outdated and unprofessional',
    solution: 'We redesign your digital presence with premium visuals, clearer messaging, and trust-building layouts.',
    outcome: 'Stronger first impressions and more confidence from potential customers.',
  },
  {
    problem: 'Not getting enough leads',
    solution: 'We create conversion paths, better CTAs, inquiry forms, and landing pages built around customer intent.',
    outcome: 'More qualified inquiries from the traffic you already have.',
  },
  {
    problem: 'Poor Google visibility',
    solution: 'We improve technical SEO, on-page structure, page speed, content hierarchy, and search-friendly architecture.',
    outcome: 'Better discoverability and more organic traffic over time.',
  },
  {
    problem: 'Low conversion rates',
    solution: 'We refine your user journey, message hierarchy, trust proof, forms, and page-level calls to action.',
    outcome: 'More visitors turn into leads, calls, bookings, or sales.',
  },
  {
    problem: 'Slow website performance',
    solution: 'We optimize code, assets, loading behavior, responsiveness, and technical foundations.',
    outcome: 'Better user retention, stronger SEO signals, and fewer drop-offs.',
  },
  {
    problem: 'Weak online presence',
    solution: 'We align your website, brand, SEO, social content, and conversion strategy into one digital growth system.',
    outcome: 'A more credible presence that helps you compete online.',
  },
  {
    problem: 'Inconsistent branding',
    solution: 'We define visual direction, typography, color systems, messaging, and digital consistency across channels.',
    outcome: 'A more memorable brand that feels professional and trustworthy.',
  },
  {
    problem: 'Social media not generating results',
    solution: 'We plan content, improve creative direction, and connect social activity to trust and lead generation.',
    outcome: 'Stronger awareness, better engagement, and a clearer reason to follow or inquire.',
  },
  {
    problem: 'Losing customers to competitors',
    solution: 'We position your business with clearer value, better digital proof, and a stronger conversion experience.',
    outcome: 'More buyers understand why they should choose you.',
  },
];

const services = [
  {
    name: 'Web Design',
    problem: "Your website doesn't create trust or convert visitors.",
    solution: 'Modern UI/UX design focused on credibility and conversion.',
    outcome: 'Higher engagement and stronger first impressions.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Web Development',
    problem: 'Slow, outdated, or poorly built websites.',
    solution: 'Fast, scalable, responsive websites built with modern technologies.',
    outcome: 'Better performance, user experience, and growth potential.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Website Redesign',
    problem: 'Your current website feels outdated and loses potential customers.',
    solution: 'Complete redesign with modern visuals and improved user journeys.',
    outcome: 'More trust, better engagement, higher conversions.',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'SEO Optimization',
    problem: 'Customers cannot find you on Google.',
    solution: 'Technical SEO, on-page SEO, content optimization, and visibility improvements.',
    outcome: 'More organic traffic and qualified leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Social Media Management',
    problem: 'Inconsistent content and weak online engagement.',
    solution: 'Content planning, creative design, posting strategy, and audience growth.',
    outcome: 'Stronger brand awareness and customer trust.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Landing Page Development',
    problem: 'Advertising campaigns are not converting.',
    solution: 'Conversion-focused landing pages designed for lead generation.',
    outcome: 'Lower acquisition costs and higher conversion rates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'E-Commerce Development',
    problem: 'Limited online sales opportunities.',
    solution: 'Custom online stores with secure payment integration.',
    outcome: 'Increased revenue and digital scalability.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Performance Optimization',
    problem: 'Slow websites causing visitor drop-offs.',
    solution: 'Speed optimization and technical improvements.',
    outcome: 'Better rankings and user retention.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Branding & Digital Identity',
    problem: 'Business lacks a memorable and professional identity.',
    solution: 'Brand strategy, visual identity, and digital consistency.',
    outcome: 'Stronger market positioning and trust.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Maintenance & Support',
    problem: 'Websites become outdated, vulnerable, and difficult to manage.',
    solution: 'Ongoing updates, monitoring, backups, and support.',
    outcome: 'Long-term stability and peace of mind.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    body: 'We clarify your goals, audience, competitors, offers, and the business outcome your digital system must create.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-6 0a2 2 0 002 2h2a2 2 0 002-2m-6 0a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    step: '02',
    title: 'Design & Planning',
    body: 'We plan the user journey, page structure, visual direction, content hierarchy, and conversion strategy.',
    icon: 'M4 5a2 2 0 012-2h3.5a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm10 0a2 2 0 012-2h2a2 2 0 012 2v5a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z',
  },
  {
    step: '03',
    title: 'Development & Optimization',
    body: 'We build fast, responsive, scalable pages and optimize performance, SEO foundations, forms, and technical details.',
    icon: 'M8 9l3 3-3 3m5 0h3M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
  },
  {
    step: '04',
    title: 'Launch & Testing',
    body: 'We test responsive behavior, speed, forms, tracking, metadata, and launch readiness before the site goes live.',
    icon: 'M5 13l4 4L19 7',
  },
  {
    step: '05',
    title: 'Growth & Support',
    body: 'We help improve visibility, conversions, content, campaigns, and stability as your business grows online.',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  },
];

const results = [
  'More Leads',
  'Better Google Visibility',
  'Stronger Brand Authority',
  'Faster Website Performance',
  'Higher Conversion Rates',
  'Improved Customer Trust',
];

export default function ServicesPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-14 pt-24 sm:px-8 sm:pt-28 lg:mt-16 lg:min-h-[calc(90vh-64px)] lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-8 lg:px-16 lg:pb-8 lg:pt-4">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Digital Growth Services</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl lg:text-[56px] xl:text-[62px]">
            More Than Websites. We Build <span className="italic text-[#775a19]">Digital Growth Systems.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 tracking-[0.01em] text-[#45464d]">
            From website design and development to SEO, branding, and social media management, we help businesses attract more customers, generate more leads, and build a stronger online presence.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Let&apos;s Grow Your Business
            </a>
            <a href="https://wa.me/917291978840" target="_blank" rel="noreferrer" className="border border-[#25D366] bg-[#25D366] px-6 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-4 sm:p-6">
            <div
              className="min-h-[420px] border border-black/20 bg-[#111312] bg-cover bg-center p-4 text-white sm:p-5 lg:min-h-0 lg:h-[500px] xl:h-[540px]"
              style={{ backgroundImage: 'linear-gradient(90deg, rgba(17,19,18,0.94), rgba(17,19,18,0.38)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80)' }}
            >
              <div className="grid h-full gap-4 sm:grid-cols-[1fr_1.25fr]">
                <div className="flex flex-col justify-between border border-white/20 bg-black/30 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Strategy / Design / Growth</p>
                  <h2 className="font-secondary text-3xl font-bold leading-tight sm:text-4xl">From clicks to customers.</h2>
                </div>
                <div className="flex flex-col justify-end gap-3">
                  {['Lead Generation', 'Search Visibility', 'Conversion Strategy'].map((item) => (
                    <div key={item} className="border border-white/15 bg-white/10 p-4 text-sm font-semibold">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-10 bg-[#775a19] px-6 py-4 text-white sm:left-8 sm:px-8 sm:py-5">
              <p className="font-secondary text-4xl font-bold">10</p>
              <p className="text-xs font-bold uppercase tracking-[0.16em]">Growth services</p>
            </div>
          </div>
        </div>
      </section>

      <section id="problems" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[5fr_7fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Problems We Solve</p>
              <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
                Business Problems First. Services Second.
              </h2>
            </div>
            <p className="text-lg leading-8 text-white/65">
              Most businesses do not need random deliverables. They need a sharper digital system that creates trust, brings qualified traffic, and turns attention into revenue opportunities.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((item) => (
              <article key={item.problem} className="bg-[#111312] p-6">
                <span className="mb-8 block h-px w-12 bg-[#e9c176]" />
                <h3 className="font-secondary text-2xl font-semibold">{item.problem}</h3>
                <p className="mt-5 text-sm leading-7 text-white/60"><span className="font-bold text-white">Solution:</span> {item.solution}</p>
                <p className="mt-4 text-sm leading-7 text-[#e9c176]"><span className="font-bold text-white">Outcome:</span> {item.outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-black pb-8 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Services</p>
              <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Premium Digital Services Built Around Growth</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#444748]">
              Every service is positioned around a business problem, a strategic solution, and a measurable outcome.
            </p>
          </div>
          <div className="grid gap-6">
            {services.map((service, index) => (
              <article key={service.name} className={`grid overflow-hidden border border-black bg-white lg:grid-cols-[5fr_7fr] ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div
                    className="h-full min-h-[320px] bg-[#111312] bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.48)), url(${service.image})` }}
                    aria-label={`${service.name} service image`}
                  />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">0{index + 1}</p>
                  <h3 className="font-secondary text-4xl font-bold tracking-[-0.03em]">{service.name}</h3>
                  <div className="mt-8 grid gap-5">
                    <div className="border-t border-black/15 pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-black">Problem We Solve</p>
                      <p className="mt-3 text-sm leading-7 text-[#444748]">{service.problem}</p>
                    </div>
                    <div className="border-t border-black/15 pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-black">Solution</p>
                      <p className="mt-3 text-sm leading-7 text-[#444748]">{service.solution}</p>
                    </div>
                    <div className="border-t border-black/15 pt-5">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#775a19]">Expected Business Outcome</p>
                      <p className="mt-3 font-secondary text-2xl font-semibold leading-tight">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#e4e2e2] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 grid gap-8 lg:grid-cols-[4fr_8fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Process</p>
              <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">A Clear System From Strategy To Growth</h2>
            </div>
            <p className="text-lg leading-8 text-[#444748]">
              We move from business diagnosis to launch and ongoing improvement, so the work connects to leads, trust, visibility, and revenue outcomes.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.step} className="border border-black bg-[#fbf9f8] p-6">
                <span className="mb-8 flex h-12 w-12 items-center justify-center border border-[#775a19] text-[#775a19]">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                  </svg>
                </span>
                <p className="font-secondary text-5xl text-black/10">{step.step}</p>
                <h3 className="mt-5 font-secondary text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#444748]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="bg-[#111312] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Results</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
              Outcomes That Matter To A Growing Business
            </h2>
            <p className="mt-6 text-base leading-8 text-white/60">
              The goal is not just to look better. The goal is to become easier to find, easier to trust, and easier to buy from.
            </p>
          </div>
          <div className="grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((result) => (
              <div key={result} className="bg-[#111312] p-7">
                <span className="mb-10 flex h-10 w-10 items-center justify-center border border-[#e9c176] text-[#e9c176]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </span>
                <h3 className="font-secondary text-2xl font-semibold">{result}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[7fr_5fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Start Growing</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-6xl">
              Ready to Turn Your Website Into a Growth Engine?
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#444748]">
              Whether you need a brand-new website, better rankings, or a complete digital strategy, we can help your business grow online.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a href="/contact#consultation" data-consultation-modal className="border border-black bg-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Book a Free Consultation
            </a>
            <a href="/portfolio" className="border border-black px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
