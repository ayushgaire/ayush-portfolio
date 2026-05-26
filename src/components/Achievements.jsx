import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Medal, Star } from 'lucide-react'
import { Section, SectionHeader } from './Section'

const ACHIEVEMENTS = [
  {
    stat: '01',
    label: 'Prefectural Athlete',
    detail:
      'Recognized as a Prefectural-Level Athlete in Japan through discipline, consistency, and competitive performance.',
    Icon: Trophy,
  },
  {
    stat: '3+',
    label: 'Years Experience',
    detail:
      'Experience in leadership, technology, management, and creative digital development across three countries.',
    Icon: Medal,
  },
  {
    stat: '10+',
    label: 'Projects Built',
    detail:
      'Designed and developed modern websites, platforms, and full-stack digital products.',
    Icon: Star,
  },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  const numeric = parseInt(value, 10)
  const isNum = !isNaN(numeric)

  useEffect(() => {
    if (!inView || !isNum) return
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setN(Math.floor(ease * numeric))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, isNum, numeric])

  return (
    <span ref={ref} className="text-7xl font-black text-ink md:text-8xl">
      {isNum ? n : value}
    </span>
  )
}

export default function Achievements() {
  return (
    <Section id="achievements" className="border-t-2 border-border">
      <SectionHeader
        index="07."
        title="Achievements"
        subtitle="Recognition earned through discipline, competition, and representing at the highest levels."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {ACHIEVEMENTS.map(({ stat, label, detail, Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="card card-hover p-8 text-center"
          >
            <div className="h-1.5 w-12 bg-gold mx-auto mb-7 rounded-full" />

            <div className="mb-3 flex items-baseline justify-center">
              <Counter value={stat} />
              {stat.includes('+') && (
                <span className="text-5xl md:text-6xl font-black text-gold">+</span>
              )}
            </div>

            <p className="label text-gold mb-5">{label}</p>

            <div className="h-px w-12 bg-border mx-auto mb-5" />

            <p className="text-base leading-relaxed text-ink-2 font-medium">{detail}</p>

            <div className="mt-6 flex justify-center">
              <div className="h-12 w-12 rounded-xl bg-gold flex items-center justify-center">
                <Icon size={18} className="text-white" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
