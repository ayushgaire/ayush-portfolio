import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Sprout,
  Wrench,
  History,
  BellRing,
  ClipboardList,
  ExternalLink,
  ArrowRight,
  Tractor,
} from 'lucide-react'
import { FARMFIX } from '../data/content'

const capIcons = [Tractor, History, Wrench, BellRing, ClipboardList]

export default function FarmFixSpotlight() {
  return (
    <section
      id="farmfix"
      className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 py-20 sm:py-24 md:py-32 border-t-2 border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-14"
      >
        <span className="inline-flex items-center gap-2 rounded-full border-2 border-gold/40 bg-gold-pale px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-gold">
          <Sprout size={13} strokeWidth={2.5} />
          {FARMFIX.kicker}
        </span>
        <span className="section-rule" />
        <h2 className="text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl leading-[0.92]">
          {FARMFIX.tagline}
        </h2>
        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
          {FARMFIX.summary}
        </p>
      </motion.div>

      <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 lg:items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <div className="group relative">
            <div
              className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-40 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(63,125,78,0.35), transparent 70%)' }}
            />
            <div className="relative card overflow-hidden p-4">
              <img
                src={FARMFIX.image}
                alt="FarmFix — agriculture technology platform"
                className="w-full rounded-2xl border-2 border-border transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="text-base md:text-lg leading-relaxed text-ink-2 font-medium mb-7">
            {FARMFIX.story}
          </p>

          <div className="space-y-3 mb-8">
            {FARMFIX.capabilities.map((c, i) => {
              const Icon = capIcons[i] || Sprout
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-0.5 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gold-pale border-2 border-gold/40 text-gold">
                    <Icon size={18} strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="font-black text-ink leading-tight">{c.title}</p>
                    <p className="text-sm text-ink-2 font-medium leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {FARMFIX.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border-2 border-border bg-surface px-3 py-1 font-mono text-xs text-ink-2 font-semibold"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={FARMFIX.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the FarmFix website (opens in a new tab)"
              className="btn-primary"
            >
              <ExternalLink size={17} strokeWidth={2.5} />
              Visit Website
            </a>
            <Link to="/projects" className="btn-secondary">
              Learn More
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
