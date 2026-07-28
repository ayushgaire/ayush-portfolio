import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Github, ArrowUpRight, ArrowLeft } from 'lucide-react'
import { PROJECTS } from '../data/content'

function ProjectCover({ name, image, accent, tagline }) {
  const [imgError, setImgError] = useState(!image)

  if (imgError || !image) {
    return (
      <div
        className="relative h-44 w-full overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center px-6 border-2 border-border"
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
        <div
          className="absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl opacity-50"
          style={{ background: accent }}
        />
        <div
          className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full blur-3xl opacity-25"
          style={{ background: accent }}
        />
        <span className="relative label text-gold mb-3">{tagline}</span>
        <h3
          className="relative text-4xl md:text-5xl font-black text-ink leading-none"
          style={{ letterSpacing: '-0.025em' }}
        >
          {name}
        </h3>
        <div className="relative mt-4 flex items-center gap-2">
          <div className="h-1 w-10 bg-gold rounded-full" />
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: accent }}
          />
          <div className="h-1 w-10 bg-gold rounded-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-surface border-2 border-border">
      <img
        src={image}
        alt={`${name} — ${tagline}`}
        loading="lazy"
        onError={() => setImgError(true)}
        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-80"
        style={{ background: accent }}
      />
    </div>
  )
}

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

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

          <span className="section-num">04.</span>
          <span className="section-rule" />
          <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
            All Projects
          </h1>
          <p className="mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
            Selected full-stack work — built end to end with modern tooling and
            a focus on real, usable products.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-24 md:pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group card card-hover flex flex-col overflow-hidden"
            >
              <div className="p-4 pb-0">
                <ProjectCover
                  name={p.name}
                  image={p.image}
                  accent={p.accent}
                  tagline={p.tagline}
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <p className="label text-gold">{p.tagline}</p>
                  {p.role && (
                    <span className="inline-flex items-center rounded-full bg-gold-pale border border-gold/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest font-bold text-gold">
                      {p.role}
                    </span>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h3 className="text-xl font-black text-ink leading-tight">
                    {p.name}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.5}
                    className="mt-0.5 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
                  />
                </div>

                <p className="text-sm leading-relaxed text-ink-2 font-medium mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface px-2 py-0.5 font-mono text-[10px] text-ink-2 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-1">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${p.name} website (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-gold transition-colors group/cta"
                    >
                      Visit Website
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                      />
                    </a>
                  ) : p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${p.name} on GitHub (opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-ink hover:text-gold transition-colors"
                    >
                      <Github size={14} strokeWidth={2.5} />
                      View on GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-ink-3">
                      <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
                      In Development
                    </span>
                  )}
                </div>
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
