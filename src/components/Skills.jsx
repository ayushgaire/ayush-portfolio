import { motion } from 'framer-motion'
import { Code2, Layers, Wrench, Lightbulb, Languages } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'

const SKILLS = [
  {
    group: 'Programming',
    items: ['Python', 'C', 'Java', 'JavaScript', 'HTML5', 'CSS3'],
  },

  {
    group: 'Frameworks & Technologies',
    items: ['React.js', 'Node.js', 'Express.js', 'Vite', 'Supabase'],
  },

  {
    group: 'Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Render', 'Supabase'],
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
  },

  {
    group: 'Languages',
    items: [
      'Nepali',
      'English',
      'Japanese',
      'Hindi',
      'Urdu',
      'Spanish',
    ],
  },
]

const icons = {
  Programming: Code2,
  'Frameworks & Technologies': Layers,
  Tools: Wrench,
  Concepts: Lightbulb,
  Languages: Languages,
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        index="03"
        title="Technical Skills"
        subtitle="A versatile toolkit spanning languages, frameworks, infrastructure and the human languages that connect them."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s, i) => {
          const Icon = icons[s.group] || Code2

          return (
            <motion.div
              key={s.group}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl glass glass-hover p-7 ${
                i === 3 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-electric/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />

              <div className="mb-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-electric/15 text-electric-bright">
                  <Icon size={18} />
                </div>

                <h3 className="font-display text-xl font-bold">
                  {s.group}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-white/70 transition-all duration-300 hover:border-electric/50 hover:bg-electric/10 hover:text-white hover:shadow-glow"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}