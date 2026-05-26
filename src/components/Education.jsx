import { motion } from 'framer-motion'
import { GraduationCap, MapPin, CalendarCheck, BookOpen } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'

const EDUCATION = {
  school: 'Southwest Minnesota State University',
  location: 'Marshall, Minnesota',
  degree: 'Bachelor of Science in Computer Science',
  graduation: 'Expected Graduation: May 2028',
  coursework: [
    'Programming Fundamentals',
    'Data Structures',
    'Problem Solving',
    'Web Development',
    'Computer Science Concepts',
  ],
}

export default function Education() {
  return (
    <Section id="education" className="border-t border-border">
      <SectionHeader
        index="02."
        title="Education"
        subtitle="Academic foundation in Computer Science with a focus on engineering fundamentals and applied problem solving."
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="card overflow-hidden"
      >
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-gold-light via-gold to-gold-light" />

        <div className="p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="h-12 w-12 rounded-xl bg-gold-pale border border-gold-light flex items-center justify-center">
                  <GraduationCap size={22} className="text-gold" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-3xl font-bold text-ink md:text-5xl leading-tight">
                  {EDUCATION.school}
                </h3>
                <p className="mt-3 text-xl text-ink-2 font-semibold">
                  {EDUCATION.degree}
                </p>
                <div className="mt-5 flex flex-wrap gap-5 text-base text-ink-2 font-medium">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-gold" />
                    {EDUCATION.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarCheck size={16} className="text-gold" />
                    {EDUCATION.graduation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h4 className="mb-5 flex items-center gap-2 label text-ink-3">
              <BookOpen size={13} className="text-gold" />
              Relevant Coursework
            </h4>

            <div className="flex flex-wrap gap-2.5">
              {EDUCATION.coursework.map((c, i) => (
                <motion.span
                  key={c}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="tag"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
