import { motion } from 'framer-motion'
import { Sparkles, Compass, Target } from 'lucide-react'
import { Section, SectionHeader, fadeUp } from './Section'
import { JOURNEY } from '../data/content'

const pillars = [
  { Icon: Sparkles, title: 'Innovation', text: 'Driven by a relentless passion for technology that solves real problems.' },
  { Icon: Compass, title: 'Creativity & Leadership', text: 'Bridging engineering precision with multicultural team leadership.' },
  { Icon: Target, title: 'Future Goals', text: 'Building products and ventures that scale across borders.' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        index="01"
        title="About"
        subtitle="A motivated and result-driven Computer Science student at Southwest Minnesota State University with a passion for software engineering, full-stack development, cloud applications, and technology-driven innovation."
      />

      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-base leading-relaxed text-white/65 md:text-lg"
        >
          <p>
            Experienced across{' '}
            <span className="text-white">Nepal, Japan, and the United States</span>{' '}
            with strong multicultural communication, leadership, and project
            development experience.
          </p>
          <p>
            From founding{' '}
            <a
              href="https://codyza.com/"
              target="_blank"
              rel="noreferrer"
              className="text-electric-bright underline decoration-electric/40 underline-offset-4 transition-colors hover:text-white"
            >
              Codyza
            </a>{' '}
            to competing at national-level athletics in Japan, my journey blends
            discipline, creativity and a builder's mindset.
          </p>

          <div className="grid gap-4 pt-4 sm:grid-cols-1">
            {pillars.map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex gap-4 rounded-2xl glass glass-hover p-5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-electric/15 text-electric-bright">
                  <Icon size={19} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{title}</h4>
                  <p className="mt-1 text-sm text-white/55">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* journey timeline */}
        <div className="relative pl-8">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-electric via-electric/40 to-transparent" />
          {JOURNEY.map((j, i) => (
            <motion.div
              key={j.country}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[29px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-electric shadow-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <div className="rounded-2xl glass glass-hover p-6">
                <div className="flex items-center justify-between">
                  <h3 className="flex items-center gap-3 font-display text-2xl font-bold">
                    <span className="text-3xl">{j.flag}</span>
                    {j.country}
                  </h3>
                  <span className="font-mono text-xs text-electric-bright">
                    {j.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {j.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
