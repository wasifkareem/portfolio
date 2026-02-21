import AnimatedSection from './AnimatedSection'

const steps = [
  {
    number: '01',
    title: 'Audit & Plan',
    duration: 'Kickoff',
    desc: "We start with a focused call to diagnose site bottlenecks. We'll map out your migration strategy, select the optimal CMS and framework, and build a rock-solid plan to preserve your SEO and traffic.",
  },
  {
    number: '02',
    title: 'Align & Communicate',
    duration: 'Ongoing',
    desc: "I operate as a direct extension of your team. With a shared Slack channel, we establish rapid feedback loops and gather input from your team to perfectly align the migration with your vision.",
  },
  {
    number: '03',
    title: 'Build & Migrate',
    duration: 'Execution',
    desc: "Pages move seamlessly to a headless stack without a second of downtime. Every URL stays alive. HubSpot forms, Intercom scripts, and analytics work exactly as before, but with total autonomy.",
  },
  {
    number: '04',
    title: 'Launch & Handoff',
    duration: 'Delivery',
    desc: "After deployment and rigid QA, I train your team on the CMS. By week's end, you'll ship new landing pages instantly without relying on engineering. Plus, I stay on call for 2 weeks post-launch.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1450px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            How I work
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-snug md:leading-tight tracking-tight text-primary max-w-3xl">
            Three weeks. Zero disruption to your pipeline.
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-2xl">
            Your sales team keeps selling, your marketing team keeps running campaigns, 
            and I handle the migration in the background. Here's how.
          </p>
        </AnimatedSection>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative bg-white border border-border p-7 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-extrabold text-surface">{step.number}</span>
                  <span className="text-xs font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3 py-1.5">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-base text-secondary mt-3 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
