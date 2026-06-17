import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Users,
  HeartHandshake,
  Mic,
  Award,
  Trophy,
  Medal,
  Star,
  GraduationCap,
  MapPin,
  CalendarCheck,
  BookOpen,
} from 'lucide-react'
import {
  JOURNEY,
  SOCIALS,
  EDUCATION,
  LEADERSHIP,
  ACHIEVEMENTS,
} from '../data/content'

const iconMap = {
  Users,
  HeartHandshake,
  Mic,
  Award,
  Trophy,
  Medal,
  Star,
}

const pillars = [
  {
    title: 'Innovation',
    text: 'Driven by a relentless passion for technology that solves real problems and creates meaningful experiences.',
  },
  {
    title: 'Creativity & Leadership',
    text: 'Bridging engineering precision with multicultural team leadership across Nepal, Japan, and the United States.',
  },
  {
    title: 'Future Vision',
    text: 'Building products and ventures that scale across borders — from Codyza to the next big idea.',
  },
]

export default function AboutPage() {
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
      {/* HEADER */}
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

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-10">
          {/* Profile photo */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-2 rounded-full bg-gold/15 blur-2xl" />
            <img
              src="/profile.jpg"
              alt="Ayush Gaire"
              className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full object-cover border-4 border-card shadow-card-hover"
              onError={(e) => {
                e.currentTarget.outerHTML =
                  '<div class="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-ink text-bg grid place-items-center font-extrabold text-4xl tracking-tight border-4 border-card shadow-card-hover">AG</div>'
              }}
            />
          </div>

          <div className="flex-1">
            <span className="section-num">About</span>
            <span className="section-rule" />
            <h1 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl leading-[0.95]">
              Ayush Gaire
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-bold text-gold">
              Computer Science Student · Co-Founder of{' '}
              <a
                href={SOCIALS.codyza}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 decoration-gold decoration-[3px] hover:text-ink transition-colors"
              >
                Codyza
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* STORY + JOURNEY */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-20 md:pb-28">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 sm:space-y-8"
          >
            <p className="text-lg sm:text-xl leading-relaxed text-ink-2 md:text-2xl font-medium">
              Experienced across{' '}
              <span className="text-ink font-extrabold">
                Nepal, Japan, and the United States
              </span>{' '}
              with strong multicultural communication, leadership, and project
              development experience.
            </p>
            <p className="text-lg leading-relaxed text-ink-2 font-medium">
              From co-founding{' '}
              <a
                href={SOCIALS.codyza}
                target="_blank"
                rel="noreferrer"
                className="text-ink font-bold underline underline-offset-4 decoration-gold decoration-[3px]"
              >
                Codyza
              </a>{' '}
              to competing at{' '}
              <span className="text-ink font-bold">
                national-level athletics in Japan
              </span>
              , my journey blends discipline, creativity, and a builder's
              mindset.
            </p>

            <div className="space-y-4 pt-4">
              {pillars.map(({ title, text }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="card card-hover flex gap-5 p-6"
                >
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-gold" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-ink text-lg mb-2">
                      {title}
                    </h4>
                    <p className="text-base leading-relaxed text-ink-2 font-medium">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey timeline */}
          <div className="relative pl-7 sm:pl-10">
            <div className="timeline-line" />
            {JOURNEY.map((j, i) => (
              <motion.div
                key={j.country}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative mb-8 sm:mb-10 last:mb-0"
              >
                <span className="absolute -left-[30px] sm:-left-[42px] top-6 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-gold border-4 border-bg shadow-sm" />
                <div className="card card-hover p-6">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="flex items-center gap-3 text-2xl font-black text-ink leading-tight">
                      <span className="text-3xl">{j.flag}</span>
                      {j.country}
                    </h3>
                    <span className="label text-gold whitespace-nowrap mt-2">
                      {j.period}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-ink-2 font-medium">
                    {j.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-20 md:pb-28 border-t-2 border-border pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl leading-[0.95]">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card card-hover p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
            <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-gold-pale border-2 border-gold text-gold">
              <GraduationCap size={28} strokeWidth={2.2} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-black text-ink leading-tight">
                {EDUCATION.school}
              </h3>
              <p className="mt-2 text-lg font-bold text-gold">
                {EDUCATION.degree}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2 font-semibold">
                <span className="flex items-center gap-2">
                  <MapPin size={14} strokeWidth={2.5} className="text-gold" />
                  {EDUCATION.location}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarCheck
                    size={14}
                    strokeWidth={2.5}
                    className="text-gold"
                  />
                  {EDUCATION.graduation}
                </span>
              </div>
            </div>
          </div>

          {EDUCATION.coursework && (
            <div className="mt-8 pt-8 border-t-2 border-border">
              <p className="label text-ink-2 mb-4 flex items-center gap-2">
                <BookOpen size={13} strokeWidth={2.5} />
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {EDUCATION.coursework.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border-2 border-border bg-surface px-3 py-1.5 text-sm text-ink-2 font-semibold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* LEADERSHIP */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-20 md:pb-28 border-t-2 border-border pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl leading-[0.95]">
            Leadership & Involvement
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {LEADERSHIP.map((l, i) => {
            const Icon = iconMap[l.icon] || Users
            return (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card card-hover flex gap-5 p-7"
              >
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gold-pale border-2 border-gold text-gold">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-black text-ink text-lg leading-tight">
                    {l.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-2 font-medium leading-relaxed">
                    {l.role}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mx-auto w-full max-w-7xl px-5 sm:px-6 pb-24 md:pb-32 border-t-2 border-border pt-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-black tracking-tight text-ink sm:text-5xl md:text-6xl leading-[0.95]">
            Achievements
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = iconMap[a.icon] || Trophy
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="card card-hover p-8 text-center"
              >
                <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gold-pale border-2 border-gold text-gold">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <div className="font-black text-ink text-5xl leading-none">
                  {a.stat}
                </div>
                <p className="mt-3 label text-ink-2">{a.label}</p>
                <p className="mt-4 text-sm text-ink-2 font-medium leading-relaxed">
                  {a.detail}
                </p>
              </motion.div>
            )
          })}
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
