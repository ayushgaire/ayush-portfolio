import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  Users,
  Globe2,
  Rocket,
  Map,
} from 'lucide-react'

const STATS = [
  { value: 1, suffix: '+', label: 'Company Founded', Icon: Building2 },
  { value: 10, suffix: '+', label: 'Volunteers Managed', Icon: Users },
  { value: 4, suffix: '+', label: 'Client Websites', Icon: Globe2 },
  { value: 5, suffix: '+', label: 'Projects Deployed', Icon: Rocket },
  { value: 3, suffix: '', label: 'Countries Lived In', Icon: Map },
]

function StatCard({ stat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const t0 = performance.now()
    const dur = 1100
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * stat.value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, stat.value])

  const Icon = stat.Icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="card card-hover p-5 sm:p-6 flex flex-col"
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gold-pale border-2 border-gold/40 text-gold mb-4">
        <Icon size={18} strokeWidth={2.2} />
      </div>
      <div className="font-black text-ink text-4xl sm:text-5xl leading-none tracking-tight">
        {n}
        <span className="text-gold">{stat.suffix}</span>
      </div>
      <p className="mt-3 label text-ink-2 leading-tight">{stat.label}</p>
    </motion.div>
  )
}

export default function Snapshot() {
  return (
    <section
      id="snapshot"
      className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 py-12 sm:py-16 border-t-2 border-border"
    >
      <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10">
        {STATS.map((s, i) => (
          <StatCard key={s.label} stat={s} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 border-border bg-surface p-6"
      >
        <div>
          <p className="font-extrabold text-ink text-lg leading-tight">
            Nepal 🇳🇵 · Japan 🇯🇵 · United States 🇺🇸
          </p>
          <p className="text-sm text-ink-2 mt-1 font-medium">
            A multicultural journey shaping how I build software.
          </p>
        </div>
        <Link to="/about" className="btn-primary text-sm whitespace-nowrap group">
          Read full story
          <ArrowRight
            size={15}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </section>
  )
}
