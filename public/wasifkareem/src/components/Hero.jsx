import { motion } from 'motion/react'
import TextSwap from './TextSwap'

export default function Hero() {
  return (
    <section className="min-h-dvh flex items-center pt-24 pb-12 bg-white overflow-hidden">
      <div className="flex justify-center flex-col items-center mx-auto px-6  max-w-[1450px]">
        
        {/* Full Width Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-6">
            B2B SaaS Migration Specialist
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.08] tracking-tight text-primary text-start">
            I build headless websites
            for the fastest-growing{" "}
            <span className="text-accent">B2B companies.</span>
          </h1>
        </motion.div>

        {/* Bottom Row: 2/3 Content + 1/3 Image */}
        <div className="mt-12 pr-20 pl-5  md:mt-20 grid lg:grid-cols-3 gap-12">
          
          {/* Left Column (Bullets & CTA) */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <ul className="space-y-6 w-full text-start">
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-2.5 h-2.5 mt-2.5 rounded-full bg-linear-to-br from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
                  <p className="text-lg md:text-xl text-secondary leading-relaxed">
                    Your landing pages are stuck in the engineering backlog. Your marketing team 
                    is is unable to update content. Your devs are debugging the Site instead of 
                    shipping product.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="shrink-0 w-2.5 h-2.5 mt-2.5 rounded-full bg-linear-to-br from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"></span>
                  <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed">
                    I fix all of that, by migrating your <TextSwap /><br/> 
                    site to a composable stack your team actually owns.
                  </p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4 text-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center md:ml-5 gap-2 px-8 py-4 bg-primary text-white text-base  hover:bg-accent rounded-full transition-colors"
              >
                Start Migration
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
             
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-12"
            >
              {[
                { value: '$2,000', label: 'Flat fee' },
                { value: '3 weeks', label: 'Delivery' },
                { value: 'Zero', label: 'Downtime' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col text-start">
                  <span className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
                  <span className="text-sm text-tertiary font-medium mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column (Image) - 1/3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-1 relative  place-items-end-safe hidden lg:block"
          >
            <div className="relative z-10">
               <img 
                 src="/wasif.jpg" 
                 alt="Wasif Kareem" 
                 className="w-full max-w-80 mx-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" 
               />
            </div>
           
          </motion.div>

        </div>
      </div>
    </section>
  )
}
