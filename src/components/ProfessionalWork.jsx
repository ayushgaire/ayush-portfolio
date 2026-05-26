import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { fadeUp } from './Section'

const CLIENT_WORK = [
  {
    name: 'Raman Dahal Portfolio',
    description:
      'Designed and developed a modern responsive portfolio website for Raman Dahal with a clean premium UI inspired by modern Apple-style aesthetics.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/raman-project.jpg',
    url: 'https://www.ramandahal.com/',
    accent: '#c4955a',
  },
  {
    name: 'Gedion Gizaw Portfolio',
    description:
      'Built a professional portfolio website with modern 3D-inspired sections and clean visual hierarchy for Gedion Tilahun Gizaw.',
    tech: ['React', 'Tailwind CSS', '3D UI'],
    image: '/projects/gedion-project.jpg',
    url: 'https://www.gediontilahungizaw.com/',
    accent: '#8b6f47',
  },
]

function WorkCover({ name, image, accent }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div
        className="relative h-60 w-full overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #f7f5f1 0%, #ffffff 50%, #fdf8f3 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'linear-gradient(rgba(196,149,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(196,149,90,0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <span
          className="relative font-display text-4xl font-bold text-ink text-center px-6"
          style={{ letterSpacing: '-0.02em' }}
        >
          {name}
        </span>
      </div>
    )
  }
  return (
    <div className="overflow-hidden h-60">
      <img
        src={image}
        alt={name}
        onError={() => setError(true)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  )
}

export default function ProfessionalWork() {
  return (
    <section
      id="client-work"
      className="relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36 border-t border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="section-num font-semibold">04b.</span>
        <span className="section-rule" />
        <h2 className="font-display text-6xl font-semibold tracking-tight text-ink md:text-8xl leading-[0.95]">
          Client Work
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl">
          Real-world portfolio websites designed and developed for professionals through{' '}
          <span className="font-semibold text-ink">Codyza</span> — focused on premium
          UI/UX and production-ready deployment.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        {CLIENT_WORK.map((w, i) => (
          <motion.div
            key={w.name}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group card card-hover overflow-hidden"
          >
            <WorkCover name={w.name} image={w.image} accent={w.accent} />

            <div className="p-7">
              <h3 className="font-display text-3xl font-bold text-ink mb-3 leading-tight">
                {w.name}
              </h3>
              <p className="text-base leading-relaxed text-ink-2 mb-5">
                {w.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {w.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-ink-2 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm inline-flex"
              >
                <ExternalLink size={14} />
                Visit Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
