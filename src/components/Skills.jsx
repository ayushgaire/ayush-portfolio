import { motion } from 'framer-motion'
import { Section, SectionHeader, fadeUp } from './Section'

const SKILLS = [
  {
    group: 'Programming',
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
    note: 'Core languages',
  },
  {
    group: 'Frameworks & Tech',
    items: ['React.js', 'Node.js', 'Express.js', 'Vite', 'Supabase'],
    note: 'Full-stack toolkit',
  },
  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Render', 'Supabase'],
    note: 'Dev environment',
  },
  {
    group: 'Concepts',
    items: [
      'Full Stack Development',
      'Frontend & Backend Integration',
      'Database Management',
      'Problem Solving',
      'Team Collaboration',
    ],
    note: 'Engineering mindset',
  },
  {
    group: 'Languages',
    items: ['🇳🇵 Nepali', '🇺🇸 English', '🇯🇵 Japanese', '🇮🇳 Hindi', '🇵🇰 Urdu', '🇪🇸 Spanish'],
    note: 'Spoken languages',
  },
]

export default function Skills() {
  return (
    <Section id="skills" className="border-t border-border">
      <SectionHeader
        index="03."
        title="Skills"
        subtitle="A versatile toolkit spanning languages, frameworks, infrastructure — and the human languages that connect them."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => (
          <motion.div
            key={s.group}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className={`card card-hover p-6 ${i === 3 ? 'lg:col-span-2' : ''}`}
          >
            <div className="flex items-start justify-between mb-5">
              <h3 className="font-display text-2xl font-bold text-ink">
                {s.group}
              </h3>
              <span className="label text-gold font-semibold mt-1">{s.note}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <span key={it} className="tag">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
