import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
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
    <Section id="experience" className="border-t-2 border-border">
      <SectionHeader
        index="05."
        title="Experience"
        subtitle="Roles across operations, management, and campus services — building responsibility and a strong work ethic."
      />

      <div className="relative pl-10">
        <div className="timeline-line" />

        {EXPERIENCE.map((e, i) => (
          <motion.div
            key={e.role + i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[42px] top-7 h-4 w-4 rounded-full bg-gold border-4 border-bg" />

            <div className="card card-hover p-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                <span className="label text-gold">{e.period}</span>
                <span className="flex items-center gap-1.5 text-sm text-ink-2 font-semibold">
                  <MapPin size={13} className="text-gold" strokeWidth={2.5} />
                  {e.location}
                </span>
              </div>

              <h3 className="text-3xl font-black text-ink leading-tight">
                {e.role}
              </h3>
              <p className="mt-2 text-lg text-ink-2 font-semibold">{e.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
