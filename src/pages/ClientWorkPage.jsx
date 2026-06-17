import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowLeft, Check, ArrowUpRight } from 'lucide-react'
import { CLIENT_WORK } from '../data/content'

function ClientCover({ name, image }) {
  const [error, setError] = useState(!image)

  if (error || !image) {
    return (
      <div
        className="relative h-64 w-full overflow-hidden flex items-center justify-center"
        style={{
          background:
            'linear-gradient(135deg, #f7eddc 0%, #ffffff 50%, #faf6ec 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(176,131,68,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(176,131,68,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <span
          className="relative text-4xl md:text-5xl font-black text-ink text-center px-6"
          style={{ letterSpacing: '-0.025em' }}
        >
          {name}
        </span>
      </div>
    )
  }

  return (
    <div className="overflow-hidden h-64">
      <img
        src={image}
        alt={name}
        onError={() => setError(true)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  )
}

const credentials = [
  'Real Clients',
  'Production Deployments',
  'Business Websites',
  'Portfolio Websites',
  'International Projects',
]

export default function ClientWorkPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const count = CLIENT_WORK.length

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-28 sm:pt-32"
    >
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 label text-ink-3 hover:text-gold transition-colors group mb-6"
          >
            <ArrowLeft
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Home
          </Link>

          <span className="section-num">04b.</span>
          <span className="section-rule" />
          <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
            Client Work
          </h1>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="text-5xl md:text-6xl font-black text-gold leading-none">
              {count}+
            </span>
            <span className="text-2xl md:text-3xl font-black text-ink leading-none">
              Websites Delivered
            </span>
          </div>

          <p className="mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
            Real websites designed and developed for professionals, local
            businesses, and organizations through{' '}
            <span className="font-extrabold text-ink">Codyza</span>. From
            portfolio websites to commercial business platforms — each project
            built with a focus on usability, performance, and real-world
            deployment.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-surface px-4 py-2 text-sm font-semibold text-ink-2"
              >
                <Check size={13} strokeWidth={3} className="text-gold" />
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2">
          {CLIENT_WORK.map((w, i) => (
            <motion.article
              key={w.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group card card-hover flex flex-col overflow-hidden"
            >
              <ClientCover name={w.name} image={w.image} />

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    {w.category && (
                      <p className="label text-gold mb-2">{w.category}</p>
                    )}
                    <h3 className="text-3xl font-black text-ink leading-tight">
                      {w.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={2.5}
                    className="mt-2 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
                  />
                </div>

                {w.badge && (
                  <span className="self-start mb-4 inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest font-bold text-gold">
                    {w.badge}
                  </span>
                )}

                <p className="text-base md:text-lg leading-relaxed text-ink-2 mb-5 font-medium">
                  {w.description}
                </p>

                {w.contributions && (
                  <div className="grid grid-cols-1 gap-y-2 mb-6">
                    {w.contributions.map((c) => (
                      <span
                        key={c}
                        className="flex items-center gap-2 text-sm text-ink-2 font-semibold"
                      >
                        <Check
                          size={14}
                          className="text-gold flex-shrink-0"
                          strokeWidth={3}
                        />
                        {c}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {w.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border-2 border-border bg-surface px-3 py-1 font-mono text-xs text-ink-2 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={w.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm inline-flex mt-auto self-start"
                >
                  <ExternalLink size={15} strokeWidth={2.5} />
                  Visit Website
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to="/" className="btn-secondary text-sm inline-flex">
            <ArrowLeft size={15} strokeWidth={2.5} />
            Back to Home
          </Link>
        </motion.div>
      </section>
    </motion.main>
  )
}
