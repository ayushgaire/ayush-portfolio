import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock, Calendar } from 'lucide-react'
import { ARTICLES, SOCIALS } from '../data/content'

export default function BlogPage() {
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

        <span className="section-num">Writing</span>
        <span className="section-rule" />
        <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
          Articles
        </h1>
        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
          Writing on cybersecurity, culture, and the future of technology — published on{' '}
          <a
            href={SOCIALS.medium}
            target="_blank"
            rel="noreferrer"
            className="font-extrabold text-ink underline underline-offset-4 decoration-gold decoration-[3px] hover:decoration-ink transition-all"
          >
            Medium
          </a>
          .
        </p>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-24 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group card card-hover flex flex-col overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-full bg-gold-pale border-2 border-gold/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest font-bold text-gold mb-4">
                  {a.category}
                </span>

                <h3 className="text-lg font-black text-ink leading-snug transition-colors group-hover:text-gold flex-1">
                  {a.title}
                </h3>

                <div className="mt-5 pt-4 border-t-2 border-border flex items-center justify-between text-xs text-ink-3 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} strokeWidth={2.5} />
                    {a.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} strokeWidth={2.5} />
                    {a.readTime}
                  </span>
                </div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-ink group-hover:text-gold transition-colors">
                  Read on Medium
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/" className="btn-secondary text-sm inline-flex">
            <ArrowLeft size={15} strokeWidth={2.5} />
            Back to Home
          </Link>
        </div>
      </section>
    </motion.main>
  )
}
