import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CalendarCheck, BookOpen } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'
import { EDUCATION } from '../data/content'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        index="02"
        title="Education"
        subtitle="Academic foundation in Computer Science with a focus on engineering fundamentals and applied problem solving."
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden rounded-3xl glass-strong p-8 md:p-12"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex gap-6">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-electric/15 text-electric-bright shadow-glow">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="font-display text-3xl font-bold md:text-4xl">
                {EDUCATION.school}
              </h3>
              <p className="mt-3 text-lg text-electric-bright">
                {EDUCATION.degree}
              </p>
              <div className="mt-4 flex flex-wrap gap-5 text-sm text-white/55">
                <span className="flex items-center gap-2">
                  <MapPin size={15} /> {EDUCATION.location}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarCheck size={15} /> {EDUCATION.graduation}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8">
          <h4 className="mb-5 flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-white/50">
            <BookOpen size={14} /> RELEVANT COURSEWORK
          </h4>
          <div className="flex flex-wrap gap-3">
            {EDUCATION.coursework.map((c, i) => (
              <motion.span
                key={c}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/75 transition-colors hover:border-electric/40 hover:text-white"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
