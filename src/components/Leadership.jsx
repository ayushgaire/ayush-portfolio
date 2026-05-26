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
    <Section id="leadership" className="border-t-2 border-border">
      <SectionHeader
        index="06."
        title="Leadership"
        subtitle="Coordinating programs, supporting communities, advocating for causes, and representing organizations on meaningful stages."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {LEADERSHIP.map(({ title, role, Icon }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group card card-hover p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-12 w-12 flex-shrink-0 rounded-xl bg-gold flex items-center justify-center">
                <Icon size={20} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="h-1 flex-1 bg-border rounded-full" />
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-ink leading-snug mb-3">
              {title}
            </h3>
            <p className="text-base md:text-lg text-ink-2 leading-relaxed font-medium">{role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
