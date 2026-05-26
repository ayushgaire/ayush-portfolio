import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Check } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { PROJECTS } from '../data/content'

function ProjectCover({ name, image, accent, tagline }) {
  const [imgError, setImgError] = useState(!image)

  if (imgError || !image) {
    return (
      <div
        className="relative h-64 w-full overflow-hidden rounded-2xl flex flex-col items-center justify-center text-center px-6 border-2 border-border"
        style={{
          background: `linear-gradient(135deg, #f7eddc 0%, #ffffff 50%, #faf6ec 100%)`,
        }}
      >
        {/* Pattern grid */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(176,131,68,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(176,131,68,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Soft accent blob */}
        <div
          className="absolute -right-12 -top-12 h-44 w-44 rounded-full blur-3xl opacity-50"
          style={{ background: accent }}
        />
        <div
          className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full blur-3xl opacity-25"
          style={{ background: accent }}
        />

        <span className="relative label text-gold mb-4">{tagline}</span>

        <h3
          className="relative text-5xl md:text-6xl font-black text-ink leading-none"
          style={{ letterSpacing: '-0.025em' }}
        >
          {name}
        </h3>

        <div className="relative mt-5 flex items-center gap-2">
          <div className="h-1 w-14 bg-gold rounded-full" />
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: accent }}
          />
          <div className="h-1 w-14 bg-gold rounded-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-surface border-2 border-border">
      <img
        src={image}
        alt={name}
        onError={() => setImgError(true)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
        <span
          className="text-3xl font-black text-white"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
        >
          {name}
        </span>
        <div
          className="h-3 w-3 rounded-full"
          style={{ background: accent, boxShadow: `0 0 16px ${accent}` }}
        />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="border-t-2 border-border">
      <SectionHeader
        index="04."
        title="Projects"
        subtitle="Selected full-stack work — built end to end with modern tooling and a focus on real, usable products."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group card card-hover flex flex-col overflow-hidden"
          >
            <div className="p-5 pb-0">
              <ProjectCover
                name={p.name}
                image={p.image}
                accent={p.accent}
                tagline={p.tagline}
              />
            </div>

            <div className="flex flex-1 flex-col p-7 pt-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="label text-gold mb-2">{p.tagline}</p>
                  <h3 className="text-3xl font-black text-ink leading-tight">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight
                  size={22}
                  strokeWidth={2.5}
                  className="mt-2 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
                />
              </div>

              <p className="text-base md:text-lg leading-relaxed text-ink-2 font-medium mb-5">
                {p.description}
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 text-sm text-ink-2 font-semibold"
                  >
                    <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border-2 border-border bg-surface px-3 py-1 font-mono text-xs text-ink-2 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm py-3 px-6"
                  >
                    <ExternalLink size={15} strokeWidth={2.5} />
                    Live Demo
                  </a>
                )}
                <a
                  href={p.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-secondary text-sm py-3 px-6 ${!p.github ? 'opacity-40 pointer-events-none' : ''}`}
                >
                  <Github size={15} strokeWidth={2.5} />
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
