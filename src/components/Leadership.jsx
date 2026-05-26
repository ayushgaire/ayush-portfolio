import { motion } from 'framer-motion'
import { Users, Mic, Award, HeartHandshake } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'

const LEADERSHIP = [
  {
    title: 'International Student Organization',
    role: 'Program Coordinator — SMSU ISO',
    Icon: Users,
  },
  {
    title: 'American Red Cross',
    role: 'Information & Planning Volunteer Generalist — Southwest Minnesota',
    Icon: HeartHandshake,
  },
  {
    title: 'UNICEF Speaker',
    role: 'Spoke on water problems — UNICEF event, Kagoshima, Japan',
    Icon: Mic,
  },
  {
    title: 'ISA Award Nepal',
    role: 'Student Coordinator',
    Icon: Award,
  },
]

export default function Leadership() {
  return (
    <Section id="leadership" className="border-t border-border">
      <SectionHeader
        index="06."
        title="Leadership"
        subtitle="Coordinating programs, supporting communities, advocating for causes, and representing organizations on meaningful stages."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {LEADERSHIP.map(({ title, role, Icon }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group card card-hover p-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-gold-pale border border-gold-light flex items-center justify-center">
                <Icon size={17} className="text-gold" />
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            <h3 className="font-display text-2xl font-bold text-ink leading-snug mb-2.5">
              {title}
            </h3>
            <p className="text-base text-ink-2 leading-relaxed font-medium">{role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
