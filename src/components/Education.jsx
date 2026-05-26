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
    <Section id="education" className="border-t-2 border-border">
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
        {/* Top accent bar */}
        <div className="h-2 w-full bg-gold" />

        <div className="p-6 sm:p-8 md:p-12">
          <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-2xl bg-gold flex items-center justify-center shadow-card">
                  <GraduationCap size={28} className="text-white" strokeWidth={2.5} />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black text-ink md:text-5xl leading-tight">
                  {EDUCATION.school}
                </h3>
                <p className="mt-3 text-xl md:text-2xl text-gold font-bold">
                  {EDUCATION.degree}
                </p>
                <div className="mt-5 flex flex-wrap gap-5 text-base text-ink-2 font-semibold">
                  <span className="flex items-center gap-2">
                    <MapPin size={17} className="text-gold" strokeWidth={2.5} />
                    {EDUCATION.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <CalendarCheck size={17} className="text-gold" strokeWidth={2.5} />
                    {EDUCATION.graduation}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t-2 border-border pt-8">
            <h4 className="mb-6 flex items-center gap-2 label text-gold text-sm">
              <BookOpen size={15} strokeWidth={2.5} />
              Relevant Coursework
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
