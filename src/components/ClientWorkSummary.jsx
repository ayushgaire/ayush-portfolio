import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { CLIENT_WORK } from '../data/content'

// Show first 2 client projects on the homepage; rest live on /client-work
const FEATURED = CLIENT_WORK.slice(0, 2)

function FeaturedClientCard({ w, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group card card-hover flex flex-col overflow-hidden"
    >
      <div className="overflow-hidden h-48 relative">
        {w.image ? (
          <img
            src={w.image}
            alt={w.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.parentElement.classList.add('bg-surface')
            }}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background:
                'linear-gradient(135deg, #f7eddc 0%, #ffffff 50%, #faf6ec 100%)',
            }}
          >
            <span
              className="text-3xl md:text-4xl font-black text-ink text-center px-6"
              style={{ letterSpacing: '-0.025em' }}
            >
              {w.name}
            </span>
          </div>
        )}
        {w.flag && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-card/95 backdrop-blur px-3 py-1.5 text-xs font-bold text-ink shadow-soft">
            <span className="text-base leading-none">{w.flag}</span>
            {w.location}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="label text-gold mb-2">{w.category}</p>
            <h3 className="text-2xl font-black text-ink leading-tight">
              {w.name}
            </h3>
          </div>
          <ArrowUpRight
            size={20}
            strokeWidth={2.5}
            className="mt-1 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
          />
        </div>

        <p className="text-sm md:text-base leading-relaxed text-ink-2 mb-5 font-medium line-clamp-3">
          {w.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {w.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border-2 border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] text-ink-2 font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={w.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-gold transition-colors group/cta self-start"
        >
          Visit live site
          <ArrowUpRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  )
}

export default function ClientWorkSummary() {
  const total = CLIENT_WORK.length
  const remaining = total - FEATURED.length

  return (
    <section
      id="client-work"
      className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 py-20 sm:py-24 md:py-32 border-t-2 border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 sm:mb-14"
      >
        <span className="section-num">04.</span>
        <span className="section-rule" />
        <h2 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl leading-[0.9]">
          Client Work
        </h2>
        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
          Real websites delivered for businesses across the United States 🇺🇸 and Japan 🇯🇵 through{' '}
          <span className="font-extrabold text-ink">Codyza</span>.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {FEATURED.map((w, i) => (
          <FeaturedClientCard key={w.name} w={w} index={i} />
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
          <p className="font-extrabold text-ink text-lg">
            {total}+ websites delivered
          </p>
          <p className="text-sm text-ink-2 mt-0.5 font-medium">
            {remaining > 0
              ? `+ ${remaining} more on the client work page`
              : 'Browse all case studies on the client work page'}
          </p>
        </div>
        <Link
          to="/client-work"
          className="btn-primary text-sm whitespace-nowrap"
        >
          View Client Projects
          <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </motion.div>
    </section>
  )
}
