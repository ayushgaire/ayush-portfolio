import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { Section, SectionHeader } from './Section'

const EXPERIENCE = [
  {
    role: 'Public Safety Assistant',
    org: 'Southwest Minnesota State University Public Safety',
    location: 'Marshall, MN',
    period: 'Jan 2025 — Apr 2025',
  },

  {
    role: 'Student Worker',
    org: 'Chartwells Higher Education Dining Services',
    location: 'Marshall, MN',
    period: 'Sept 2024 — May 2025',
  },

  {
    role: 'Restaurant Manager',
    org: 'Asian Kitchen Bar Bhawana',
    location: 'Japan',
    period: 'Nov 2020 — Jun 2024',
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="05"
        title="Professional Experience"
        subtitle="Roles across operations, management and campus services — building responsibility and a strong work ethic."
      />

      <div className="relative">
        <div className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-electric via-electric/40 to-transparent md:left-1/2" />

        {EXPERIENCE.map((e, i) => {
          const left = i % 2 === 0

          return (
            <motion.div
              key={e.role + i}
              initial={{ opacity: 0, x: left ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative mb-10 pl-14 last:mb-0 md:w-1/2 md:pl-0 ${
                left ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
              }`}
            >
              <span
                className={`absolute top-5 grid h-5 w-5 place-items-center rounded-full bg-electric shadow-glow left-[11px] md:left-auto ${
                  left ? 'md:-right-[10px]' : 'md:-left-[10px]'
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="rounded-2xl glass glass-hover p-6">
                <div
                  className={`mb-3 flex items-center gap-3 ${
                    left ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-electric/15 text-electric-bright">
                    <Briefcase size={16} />
                  </div>

                  <span className="font-mono text-xs text-electric-bright">
                    {e.period}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold">
                  {e.role}
                </h3>

                <p className="mt-1 text-sm text-white/65">
                  {e.org}
                </p>

                <p
                  className={`mt-2 flex items-center gap-1.5 text-xs text-white/45 ${
                    left ? 'md:justify-end' : ''
                  }`}
                >
                  <MapPin size={12} /> {e.location}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}