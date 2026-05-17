import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowUpRight, Check } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { PROJECTS } from '../data/content'

function ProjectVisual({ name, accent }) {
  return (
    <div
      className="relative h-52 overflow-hidden rounded-2xl"
      style={{
        background: `radial-gradient(120% 120% at 30% 20%, ${accent}33, transparent 60%), linear-gradient(160deg, #0d0d11, #050505)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div
        className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"
        style={{ background: accent, opacity: 0.25 }}
      />
      <span
        className="absolute bottom-5 left-6 font-display text-5xl font-bold tracking-tight"
        style={{ color: accent }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        index="04"
        title="Projects"
        subtitle="Selected full-stack work — built end to end with modern tooling and a focus on real usability."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-3xl glass glass-hover p-6"
          >
            <ProjectVisual name={p.name} accent={p.accent} />

            <div className="flex flex-1 flex-col p-2 pt-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-electric-bright">
                    {p.tagline}
                  </p>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-white/30 transition-all duration-300 group-hover:text-electric-bright group-hover:rotate-45"
                  size={22}
                />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {p.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 text-xs text-white/60"
                  >
                    <Check size={12} className="text-electric-bright" />
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/55"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-3 pt-1">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
                <a
                  href={p.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl glass glass-hover px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105 ${
                    p.github ? 'text-white' : 'text-white/40'
                  }`}
                >
                  <Github size={15} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
