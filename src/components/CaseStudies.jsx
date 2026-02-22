import { motion } from 'motion/react'
import AnimatedSection from './AnimatedSection'

const cases = [
  {
    name: 'Pocketworks',
    type: 'B2B Mobile App Agency',
    what: 'Moved away from hardcoded pages to a modular system where non-technical marketers build, test, and publish independently. Using 40+ reusable components, the team now launches new campaigns without waiting on engineering tickets.',
    stack: 'Astro + Dato CMS + Netlify',
    result: ' No Dev bottleneck, full marketing autonomy, faster marketing velocity.',
    url: 'https://pocketworks.co.uk',
    color: '#F48220',
    logo: '/pw.png',
    video: 'https://res.cloudinary.com/domd44kuh/video/upload/v1771750253/pw_snap_khvhmi.mov',
    floatingImage: '/image.png',
  },
  {
    name: 'Doctor Droid',
    type: 'AI-Powered Observability SaaS',
    what: 'Migrated 10,000+ complex records from Webflow to Sanity + Astro to solve content scaling bottlenecks. Mapped and preserved all legacy slugs and SEO metadata for zero traffic loss, and redesigned their core Slack Integration page.',
    stack: 'Astro + Sanity CMS + Vercel',
    result: 'Zero SEO impact. A lightning-fast content engine capable of handling 10k+ pages without Webflow\'s limits.',
    url: 'https://drdroid.io/engineering-tools/error-monitoring-tracking-open-source',
    color: '#9554FF',
    logo: '/drdroid.png',
    video: 'https://res.cloudinary.com/domd44kuh/video/upload/v1771750250/drdroid_slack_wwshzo.mov',
    floatingImage: '/drdroidCMS.png',
  },
]

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1450px] mx-auto px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            My work
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary max-w-3xl">
            B2B companies I've built for.
          </h2>
          <p className="mt-4 text-lg text-secondary max-w-xl">
            Modern Headless stack. Same process. Real results.
          </p>
        </AnimatedSection>

        <div className="mt-14 md:mt-20 flex flex-col gap-12">
          {cases.map((c, i) => (
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                style={{ backgroundColor: c.color }}
              >
                <div className="grid min-[1377px]:grid-cols-2 items-center min-h-[500px]">
                  
                  {/* Left: Content */}
                  <div className="p-8 md:p-12 lg:p-16 relative z-20 flex flex-col justify-center h-full">
                    {/* Logo */}
                    <div className="absolute top-8 left-8 md:top-12 md:left-12 h-12   flex items-center justify-center">
                      <img src={c.logo} alt={`${c.name} logo`} className="h-full w-auto object-contain rounded-sm" />
                    </div>

                    <div className="mt-16">
                      <span className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3 block">
                        {c.type}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-transform duration-300">
                        {c.name}
                      </h3>
                      <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                        {c.what}
                      </p>

                      <div className="flex flex-wrap gap-3 mb-8">
                        {c.stack.split(' + ').map((tech, j) => (
                          <span
                            key={j}
                            className="text-xs font-bold px-4 py-2 bg-white/20 text-white border border-white/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mb-8 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm inline-block">
                        <span className="text-white font-bold block text-sm uppercase tracking-wide mb-1 opacity-80">Result</span>
                        <span className="text-white text-lg font-medium">{c.result}</span>
                      </div>

                      <div className="flex items-center gap-3 text-white font-bold group-hover:gap-5 transition-all">
                        View Site
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Right: Gallery */}
                  <div className="hidden min-[1377px]:flex relative h-full min-h-[400px] lg:min-h-full items-center justify-center p-8 lg:p-12">
                    
                    {/* Floating Background Image */}
                    {c.floatingImage && (
                      <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 , type: "spring", stiffness: 70, damping: 20,}}
                        viewport={{ once: true }}
                        className="absolute max-w-xl right-0 top-64 z-0"
                      >
                        <img
                          src={c.floatingImage}
                          alt="Background decoration"
                          className="w-full scale-125"
                        />
                      </motion.div>
                    )}

                    {/* Video Loop */}
                    {c.video && (
                      <div className="absolute right-40 top-10 z-10 w-full max-w-xl">
                        <motion.div
                          initial={{ opacity: 0.4, y: 150 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 2, delay: 0.2,
                             type: "spring", 
                              stiffness: 70,   // lowered for a slower, more graceful float
                              damping: 20,    // prevents excess bouncing
                           }}
                          viewport={{ once: true }}
                        >
                          <div className="border-[5px] rounded-lg border-white/20">
                            <video
                              src={c.video}
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls={false}
                              className="w-full rounded-md shadow-2xl"
                            />
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </div>

                </div>
              </a>
          ))}
        </div>
      </div>
    </section>
  )
}
