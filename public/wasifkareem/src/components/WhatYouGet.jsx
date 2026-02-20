import AnimatedSection from './AnimatedSection'

const included = [
  'Full site rebuild on Astro or Next.js',
  'Sanity CMS with content models tailored to your SaaS',
  'All existing content migrated — blogs, docs, landing pages',
  'SEO preserved — 301 redirects, meta, sitemaps, schema',
  'Your HubSpot/Intercom/analytics integrations reconnected',
  'Vercel deployment with preview branches & CI/CD',
  'Mobile-responsive, accessible, WCAG-compliant',
  'Full CMS training for your marketing team',
  '2 weeks post-launch support included',
  '95+ Lighthouse performance score — guaranteed',
]

export default function WhatYouGet() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1450px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            What's included
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary max-w-3xl">
            Everything your SaaS website needs for{' '}
            <span className="text-accent">$2,000.</span>
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl">
            No hourly billing. No scope creep. No "oh, that's extra." 
            One flat price, everything your B2B SaaS site needs to compete.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-14 md:mt-16">
          <div className="bg-surface border border-border p-8 md:p-12 max-w-2xl">
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl md:text-6xl font-extrabold text-primary">$2,000</span>
              <span className="text-lg text-secondary font-medium">flat fee</span>
            </div>
            <ul className="space-y-4">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base text-primary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-secondary">
                <span className="font-semibold text-primary">Need ongoing support?</span>{' '}
                I offer monthly retainers starting at $800/month for continuous development — 
                new landing pages, A/B test variants, integration pages, and performance optimization.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
