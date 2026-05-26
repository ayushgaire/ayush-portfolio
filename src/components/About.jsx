import { motion } from 'framer-motion'
import { Section, SectionHeader, fadeUp } from './Section'
import { JOURNEY } from '../data/content'
import { SOCIALS } from '../data/content'

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

export default function About() {
  return (
    <Section id="about" className="border-t border-border">
      <SectionHeader
        index="01."
        title="About"
        subtitle="A motivated Computer Science student at Southwest Minnesota State University with a passion for software engineering, full-stack development, and technology-driven innovation."
      />

      <div className="grid gap-20 lg:grid-cols-[1.1fr_1fr]">

        {/* Left — Storytelling text & pillars */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-lg leading-loose text-ink-2 md:text-xl">
            Experienced across{' '}
            <span className="text-ink font-bold">Nepal, Japan, and the United States</span>
            {' '}with strong multicultural communication, leadership, and project
            development experience.
          </p>
          <p className="text-lg leading-loose text-ink-2">
            From founding{' '}
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="text-ink font-bold underline underline-offset-4 decoration-gold decoration-2 hover:decoration-ink transition-all"
            >
              Codyza
            </a>
            {' '}to competing at{' '}
            <span className="text-ink font-semibold">national-level athletics in Japan</span>,
            my journey blends discipline, creativity, and a builder's mindset.
          </p>

          {/* Pillars */}
          <div className="space-y-4 pt-2">
            {pillars.map(({ title, text }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card card-hover flex gap-5 p-5"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="dot-gold" style={{ opacity: 1 }} />
                </div>
                <div>
                  <h4 className="font-bold text-ink text-base mb-1.5">{title}</h4>
                  <p className="text-sm leading-relaxed text-ink-2">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Journey timeline */}
        <div className="relative pl-8">
          <div className="timeline-line" />

          {JOURNEY.map((j, i) => (
            <motion.div
              key={j.country}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[33px] top-5 h-3 w-3 rounded-full bg-gold border-2 border-bg shadow-sm" />

              <div className="card card-hover p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-3xl font-bold flex items-center gap-3 text-ink">
                    <span className="text-3xl">{j.flag}</span>
                    {j.country}
                  </h3>
                  <span className="label text-gold font-bold whitespace-nowrap pt-1">
                    {j.period}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-ink-2">
                  {j.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
