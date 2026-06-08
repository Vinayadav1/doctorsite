const plans = [
  {
    eyebrow: 'Essential',
    name: 'Practice',
    price: '₹2,999',
    description: 'A focused one-page website for doctors starting their digital presence.',
    features: ['Professional homepage', 'Contact form', 'WhatsApp button', 'Mobile responsive'],
  },
  {
    eyebrow: 'Most Chosen',
    name: 'Growth',
    price: '₹7,999',
    description: 'A complete practice website built to convert search traffic into appointments.',
    features: ['5-page website', 'Service pages', 'SEO structure', 'Appointment flow', 'Trust content'],
    featured: true,
  },
  {
    eyebrow: 'Custom',
    name: 'Authority',
    price: 'Custom',
    description: 'A premium digital system for specialists, clinics, and multi-location practices.',
    features: ['Custom page strategy', 'Advanced SEO plan', 'Automation setup', 'Performance review'],
  },
];

const comparisonRows = [
  ['Pages included', '1', '5', 'Custom'],
  ['Mobile responsive', 'Yes', 'Yes', 'Yes'],
  ['SEO structure', 'Basic', 'Advanced', 'Advanced'],
  ['Service pages', '-', 'Yes', 'Custom'],
  ['Appointment journey', 'Basic', 'Optimized', 'Advanced'],
  ['Trust content', '-', 'Yes', 'Yes'],
  ['Growth consultation', '-', 'Included', 'Included'],
];

const inclusions = [
  'Strategy call',
  'Mobile-first design',
  'Medical copy structure',
  'Contact and WhatsApp setup',
  'Performance basics',
  'Launch assistance',
  'SEO-ready metadata',
  'Post-launch support',
];

const addOns = [
  'Google Business Profile setup',
  'Professional copywriting',
  'Appointment automation',
  'Advanced SEO setup',
];

const faqs = [
  {
    question: 'Which pricing plan should I choose?',
    answer: 'Starter clinics usually begin with Practice. If you want service pages, stronger SEO, and better conversion flow, Growth is the best fit.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes. Your website can be expanded with more pages, specialty content, SEO improvements, and booking automation.',
  },
  {
    question: 'Do you include hosting and domain setup?',
    answer: 'We guide setup and launch. If you need managed support, we can include it in a custom plan.',
  },
  {
    question: 'Are there recurring monthly charges?',
    answer: 'The listed plans are website build prices. Optional monthly support, SEO, or maintenance can be added separately.',
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[#fbf9f8] text-[#1b1c1c]">
      <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-5 pb-20 pt-28 sm:px-8 lg:grid-cols-[6fr_6fr] lg:px-16 lg:pb-28 lg:pt-32">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Pricing</p>
          <h1 className="font-secondary text-5xl font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-6xl lg:text-[72px]">
            Transparent Pricing For Modern Healthcare Practices
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-8 text-[#444748]">
            Choose the right level of digital presence for your clinic, specialty, or healthcare practice.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#plans" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              View Plans
            </a>
            <a href="#contact" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Ask Question
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 border-t border-black/15 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-[#444748]">
            <span>No hidden costs</span>
            <span>One-time build pricing</span>
            <span>Upgrade anytime</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative w-full border border-black bg-[#e4e2e2] p-6">
            <div className="h-[520px] bg-[linear-gradient(135deg,#0c0c0c,#5f5e5e_52%,#e5e2e1)] p-8">
              <div className="h-full border border-white/20 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0_2px,transparent_2px_26px)]" />
            </div>
            <div className="absolute bottom-14 left-0 bg-[#775a19] px-8 py-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.16em]">From</p>
              <p className="font-secondary text-4xl font-bold">₹2,999</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[5fr_7fr] lg:px-16">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            Built For Practices Of <span className="italic text-[#775a19]">Every Size</span>
          </h2>
          <p className="text-lg leading-8 text-[#444748]">
            Whether you need a precise one-page presence or a complete practice growth system, each plan is structured to create trust, clarify services, and guide patients toward booking.
          </p>
        </div>
      </section>

      <section id="plans" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`border p-8 ${plan.featured ? 'border-black bg-black text-white' : 'border-black/20 bg-white text-black'}`}>
                <p className={`mb-5 text-xs font-bold uppercase tracking-[0.16em] ${plan.featured ? 'text-[#e9c176]' : 'text-[#775a19]'}`}>{plan.eyebrow}</p>
                <h3 className="font-secondary text-4xl font-bold">{plan.name}</h3>
                <p className={`mt-5 min-h-[84px] text-sm leading-7 ${plan.featured ? 'text-white/65' : 'text-[#444748]'}`}>{plan.description}</p>
                <p className="mt-8 font-secondary text-5xl font-bold">{plan.price}</p>
                <ul className="mt-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`border-t py-4 text-sm ${plan.featured ? 'border-white/15' : 'border-black/15'}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex w-full justify-center border px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] transition-colors ${plan.featured ? 'border-[#e9c176] bg-[#e9c176] text-black hover:bg-white' : 'border-black text-black hover:bg-black hover:text-white'}`}>
                  Select Plan
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Comparison</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Meticulous Specification</h2>
          </div>
          <div className="overflow-x-auto border border-black/20 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-black">
                  <th className="p-5 text-xs font-bold uppercase tracking-[0.14em]">Feature</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-[0.14em]">Practice</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-[0.14em]">Growth</th>
                  <th className="p-5 text-xs font-bold uppercase tracking-[0.14em]">Authority</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row[0]} className="border-b border-black/10">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${cell}`} className={`p-5 ${index === 0 ? 'font-semibold text-black' : 'text-[#444748]'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="included" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Included</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Every DoctorSite Project Includes</h2>
          </div>
          <div className="grid gap-px bg-black/20 md:grid-cols-2 lg:grid-cols-4">
            {inclusions.map((item) => (
              <div key={item} className="bg-white p-7">
                <span className="mb-10 flex h-10 w-10 items-center justify-center border border-[#775a19] text-[#775a19]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <h3 className="font-secondary text-2xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="addons" className="bg-black py-24 text-white lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">
          <div className="mb-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#e9c176]">Add-ons</p>
            <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em] lg:text-5xl">Enhance Your Digital Presence</h2>
          </div>
          <div className="grid gap-px bg-white/20 md:grid-cols-2">
            {addOns.map((item) => (
              <div key={item} className="flex items-center justify-between bg-black p-8">
                <h3 className="font-secondary text-2xl font-semibold">{item}</h3>
                <span className="text-[#e9c176]">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[4fr_8fr] lg:px-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#775a19]">Questions</p>
            <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-black/15 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold">
                  {faq.question}
                  <span className="text-[#775a19]">+</span>
                </summary>
                <p className="mt-5 text-sm leading-7 text-[#444748]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e4e2e2] py-24 text-center lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <h2 className="font-secondary text-4xl font-bold leading-tight tracking-[-0.03em] lg:text-5xl">
            A Professional Website Is An Investment In Trust
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#444748]">
            Patients search, compare, and decide before they call. A clear, premium website helps your practice earn confidence before the first appointment.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-16">
          <h2 className="font-secondary text-4xl font-bold tracking-[-0.03em]">Find The Right Solution For Your Practice</h2>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="mailto:vinaysalempur45@gmail.com" className="border border-black bg-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-[#775a19] hover:bg-[#775a19]">
              Request Proposal
            </a>
            <a href="tel:+918840734369" className="border border-black px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-black hover:text-white">
              Call For Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
