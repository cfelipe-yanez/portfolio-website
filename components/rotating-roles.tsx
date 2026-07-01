'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function RotatingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2600)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
          className="whitespace-nowrap text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
