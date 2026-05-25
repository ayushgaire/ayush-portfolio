import { motion } from 'framer-motion'
import { Users, Mic, Award, HeartHandshake } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'

const LEADERSHIP = [
  {
    title: 'International Student Organization (ISO)',
    role: 'Program Coordinator',
  },

  {
    title: 'American Red Cross',
    role: 'Information & Planning Volunteer Generalist — Southwest Minnesota',
  },

  {
    title: 'UNICEF Speaker',
    role: 'Spoke on water problems — UNICEF event, Kagoshima, Japan',
  },

  {
    title: 'ISA Award Nepal',
    role: 'Student Coordinator',
  },
]

const icons = [Users, HeartHandshake, Mic, Award]

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeader
        index="06"
        title="Leadership & Involvement"
        subtitle="Coordinating programs, supporting communities, advocating for causes, and representing organizations on meaningful stages."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {LEADERSHIP.map((l, i) => {
          const Icon = icons[i % icons.length]

          return (
            <motion.div
              key={l.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl glass glass-hover p-8"
            >
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-electric/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-electric/15 text-electric-bright shadow-glow">
                <Icon size={24} />
              </div>

              <h3 className="font-display text-xl font-bold leading-snug">
                {l.title}
              </h3>

              <p className="mt-3 text-sm text-electric-bright">
                {l.role}
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}