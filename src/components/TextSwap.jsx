import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const platforms = ['WordPress', 'Webflow', 'Squarespace', 'Wix', 'HubSpot CMS']

const colors = {
  WordPress: '#2563EB',
  Webflow: '#4338CA',
  Squarespace: '#0EA5E9',
  Wix: '#7C3AED',
  'HubSpot CMS': '#F59E0B',
}

export default function TextSwap() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % platforms.length)
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-flex ">
      <AnimatePresence mode="wait">
        <motion.span
          key={platforms[index]}
          initial={{ opacity: 0, x: 5 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -5 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-semibold ml-1 underline decoration-2 underline-offset-4"
          style={{ color: colors[platforms[index]], textDecorationColor: colors[platforms[index]] + '40' }}
        >
          {platforms[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
