import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Star } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { ACHIEVEMENTS } from '../data/content'

const icons = [Trophy, Medal, Star]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  const numeric = parseInt(value, 10)
  const isNum = !isNaN(numeric)

  useEffect(() => {
    if (!inView || !isNum) return

    const duration = 1200
    const startTime = performance.now()

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      setN(Math.floor(progress * numeric))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [inView, isNum, numeric])

  return (
    <span
      ref={ref}
      className="font-display text-3xl md:text-4xl font-bold text-gradient break-words"
    >
      {isNum ? n : value}
    </span>
  )
}

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        index="07"
        title="Achievements"
        subtitle="Recognition earned through discipline, competition and representing at the highest levels."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = icons[i % icons.length]

          return (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl glass-strong p-5 text-center"
            >
              {/* top glow line */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-50" />

              {/* icon */}
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-electric/15 text-electric-bright shadow-glow transition-transform duration-500 group-hover:scale-105">
                <Icon size={20} />
              </div>

              {/* stat */}
              <Counter value={a.stat} />

              {/* label */}
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-electric-bright">
                {a.label}
              </p>

              {/* detail */}
              <p className="mt-3 text-xs leading-relaxed text-white/55">
                {a.detail}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}