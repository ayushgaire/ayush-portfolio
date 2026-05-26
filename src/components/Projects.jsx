import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Check } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { PROJECTS } from '../data/content'

function ProjectCover({ name, image, accent, tagline }) {
  const [imgError, setImgError] = useState(!image)

  // Beautiful editorial fallback cover — used when no image is available
  if (imgError || !image) {
    return (
      <div
        className="relative h-60 w-full overflow-hidden rounded-xl flex flex-col items-center justify-center text-center px-6"
        style={{
          background: `linear-gradient(135deg, #f7f5f1 0%, #ffffff 50%, #fdf8f3 100%)`,
        }}
      >
        {/* Subtle pattern grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(196,149,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,90,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Soft gold blob */}
        <div
          className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-40"
          style={{ background: accent }}
        />
        <div
          className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full blur-3xl opacity-20"
          style={{ background: accent }}
        />

        {/* Top label */}
        <span className="relative label text-gold mb-3">{tagline}</span>

        {/* Big editorial name */}
        <h3
          className="relative font-display text-5xl md:text-6xl font-bold text-ink leading-none"
          style={{ letterSpacing: '-0.02em' }}
        >
          {name}
        </h3>

        {/* Bottom accent line */}
        <div className="relative mt-4 flex items-center gap-2">
          <div className="h-px w-12 bg-gold" />
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: accent }}
          />
          <div className="h-px w-12 bg-gold" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-60 w-full overflow-hidden rounded-xl bg-surface">
      <img
        src={image}
        alt={name}
        onError={() => setImgError(true)}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Editorial overlay with name */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
        <span
          className="font-display text-3xl font-bold text-white"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.5)' }}
        >
          {name}
        </span>
        <div
          className="h-2.5 w-2.5 rounded-full"
          style={{ background: accent, boxShadow: `0 0 14px ${accent}` }}
        />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" className="border-t border-border">
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
            {/* Project visual */}
            <div className="p-4 pb-0">
              <ProjectCover
                name={p.name}
                image={p.image}
                accent={p.accent}
                tagline={p.tagline}
              />
            </div>

            <div className="flex flex-1 flex-col p-6 pt-5">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <p className="label text-gold mb-1.5 font-semibold">{p.tagline}</p>
                  <h3 className="font-display text-3xl font-bold text-ink leading-tight">
                    {p.name}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="mt-2 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
                />
              </div>

              <p className="text-base leading-relaxed text-ink-2 mb-5">
                {p.description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                {p.features.map((f) => (
                  <span
                    key={f}
                    className="flex items-center gap-2 text-sm text-ink-2 font-medium"
                  >
                    <Check size={13} className="text-gold flex-shrink-0" strokeWidth={2.5} />
                    {f}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-ink-2 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-auto flex gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm py-2.5 px-5"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                <a
                  href={p.github || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`btn-secondary text-sm py-2.5 px-5 ${!p.github ? 'opacity-40 pointer-events-none' : ''}`}
                >
                  <Github size={14} />
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
