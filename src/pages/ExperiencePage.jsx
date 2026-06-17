import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Briefcase, MapPin, Calendar } from 'lucide-react'
import { EXPERIENCE } from '../data/content'

export default function ExperiencePage() {
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

        <span className="section-num">Experience</span>
        <span className="section-rule" />
        <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
          Experience
        </h1>
        <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
          Roles across management, operations, and campus services — building
          responsibility, discipline, and a strong work ethic alongside my
          studies.
        </p>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 sm:px-6 pb-24 md:pb-32">
        <div className="relative pl-7 sm:pl-10">
          <div className="timeline-line" />
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative mb-10 sm:mb-12 last:mb-0"
            >
              <span className="absolute -left-[30px] sm:-left-[42px] top-6 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-gold border-4 border-bg shadow-sm" />
              <div className="card card-hover p-7 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-gold-pale border-2 border-gold text-gold">
                      <Briefcase size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-ink leading-tight">
                        {e.role}
                      </h3>
                      <p className="mt-1 text-base font-bold text-gold">
                        {e.org}
                      </p>
                    </div>
                  </div>
                  <span className="label text-ink-2 md:text-right whitespace-nowrap md:ml-4 inline-flex items-center gap-1.5">
                    <Calendar size={12} strokeWidth={2.5} />
                    {e.period}
                  </span>
                </div>
                <p className="text-sm text-ink-3 font-semibold flex items-center gap-1.5">
                  <MapPin size={12} strokeWidth={2.5} />
                  {e.location}
                </p>
              </div>
            </motion.div>
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
