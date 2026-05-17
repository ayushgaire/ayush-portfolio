import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { ARTICLES } from '../data/content'

const themeAccent = {
  security: { glow: 'rgba(255,60,60,0.35)', tag: 'text-red-400', label: '⚠ SYSTEM ALERT' },
  culture: { glow: 'rgba(18,133,255,0.35)', tag: 'text-electric-bright', label: '🗓 2083 · TIME' },
  ai: { glow: 'rgba(77,163,255,0.35)', tag: 'text-electric-bright', label: '⚡ AI · NEURAL' },
}

function Cover({ theme, image, title }) {
  const a = themeAccent[theme] || themeAccent.ai
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink-card">
      <img
        src={image}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.55) 60%, rgba(5,5,5,0.92) 100%)`,
        }}
      />
      <div
        className="absolute -right-8 -top-8 h-36 w-36 rounded-full blur-3xl"
        style={{ background: a.glow }}
      />
      <span
        className={`absolute bottom-5 left-6 font-mono text-xs tracking-[0.3em] ${a.tag}`}
      >
        {a.label}
      </span>
    </div>
  )
}

export default function Blog() {
  return (
    <Section id="blog">
      <SectionHeader
        index="08"
        title="Blog & Articles"
        subtitle="Writing on cybersecurity, culture and the future of technology — published on Medium."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <motion.a
            key={a.title}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10 }}
            className="group flex flex-col overflow-hidden rounded-3xl glass glass-hover"
          >
            <div className="h-48 overflow-hidden">
              <div className="h-full w-full transition-transform duration-700 group-hover:scale-110">
                <Cover theme={a.theme} image={a.image} title={a.title} />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-electric/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-electric-bright">
                  {a.category}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold leading-snug transition-colors group-hover:text-electric-bright">
                {a.title}
              </h3>

              <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-white/45">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> {a.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> {a.readTime}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-electric-bright">
                Read Article
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}
