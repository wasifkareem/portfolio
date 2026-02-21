import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { getCalApi } from '@calcom/embed-react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])



  return (
    <motion.nav
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1450px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-primary">
          wasif.
        </a>

        <div className="flex items-center gap-6">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">

            <button
              data-cal-namespace="30min"
              data-cal-link="wasifkareem/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="text-sm font-semibold px-4 md:px-6 py-2 md:py-2.5 bg-primary text-white hover:bg-accent rounded-full transition-colors cursor-pointer origin-right scale-90 md:scale-100"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
