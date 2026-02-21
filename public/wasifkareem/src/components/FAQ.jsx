import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import AnimatedSection from './AnimatedSection'

const faqs = [
  {
    q: 'What platforms can you migrate from?',
    a: "WordPress, Webflow, Squarespace, Wix, HubSpot CMS, Ghost, or any legacy CMS. If your B2B SaaS site lives on it, I can migrate it.",
  },
  {
    q: 'Will my HubSpot / Intercom / analytics integrations still work?',
    a: "Yes. I reconnect every integration — HubSpot forms, Intercom chat, Google Analytics, Segment, Mixpanel, whatever you're running. Nothing breaks, everything just works faster.",
  },
  {
    q: 'Do you handle the design too?',
    a: "I can work with your existing design or do a light visual refresh during migration. For full redesigns, I partner with a designer who understands B2B SaaS. Either way, the end result will look like a Series C website.",
  },
  {
    q: 'What about our SEO rankings?',
    a: "This is non-negotiable. I set up proper 301 redirects for every URL, preserve all meta data, sitemaps, and structured data. Your rankings stay intact — and they'll likely improve because faster page speeds directly boost Core Web Vitals.",
  },
  {
    q: 'What if we need ongoing support after launch?',
    a: "2 weeks of post-launch support is included. After that, I offer monthly retainers starting at $800/month — perfect for teams that need continuous landing pages, new integration pages, or conversion optimization.",
  },
  {
    q: 'Why Sanity CMS over Contentful or others?',
    a: "Sanity gives your marketing team the most flexibility — they can edit pages, sections, CTAs, and content without touching code. That said, I'm also experienced with Contentful and Storyblok if you have a preference or existing contract.",
  },
  {
    q: 'What if our site is large or has complex integrations?',
    a: "The $2,000 covers most B2B SaaS sites (up to ~50 pages). For larger sites with complex multi-language setups, custom CRM integrations, or gated content systems, I'll give you a custom quote after the audit. Still very competitive vs. agencies charging $50K+.",
  },
  {
    q: 'How is this so much cheaper than agencies?',
    a: "No office overhead, no project managers, no account executives. It's just me — a specialized developer who does this every day. You get the same composable stack (Astro + Sanity + Vercel) without the agency markup.",
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group"
      >
        <span className="text-base md:text-lg font-semibold text-primary pr-4 group-hover:text-accent transition-colors">
          {faq.q}
        </span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center border border-border text-secondary transition-all duration-300 ${isOpen ? 'rotate-45 bg-primary text-white border-primary' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="text-base text-secondary leading-relaxed pb-5 md:pb-6 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1450px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary max-w-2xl">
            Questions SaaS teams ask me.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15} className="mt-12 md:mt-16 max-w-3xl">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </AnimatedSection>
      </div>
    </section>
  )
}
