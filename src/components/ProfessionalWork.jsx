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
  },
  {
    name: 'Gedion Gizaw Portfolio',
    description:
      'Built a professional portfolio website with modern 3D-inspired sections and clean visual hierarchy for Gedion Tilahun Gizaw.',
    tech: ['React', 'Tailwind CSS', '3D UI'],
    image: '/projects/gedion-project.jpg',
    url: 'https://www.gediontilahungizaw.com/',
  },
]

function WorkCover({ name, image }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div
        className="relative h-64 w-full overflow-hidden flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #f7eddc 0%, #ffffff 50%, #faf6ec 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'linear-gradient(rgba(176,131,68,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(176,131,68,0.12) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <span
          className="relative text-4xl md:text-5xl font-black text-ink text-center px-6"
          style={{ letterSpacing: '-0.025em' }}
        >
          {name}
        </span>
      </div>
    )
  }
  return (
    <div className="overflow-hidden h-64">
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
      className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 py-20 sm:py-24 md:py-32 lg:py-36 border-t-2 border-border"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <span className="section-num">04b.</span>
        <span className="section-rule" />
        <h2 className="text-5xl font-black tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
          Client Work
        </h2>
        <p className="mt-5 sm:mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-2 md:text-xl font-medium">
          Real-world portfolio websites designed and developed for professionals through{' '}
          <span className="font-extrabold text-ink">Codyza</span> — focused on premium UI/UX
          and production-ready deployment.
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
            <WorkCover name={w.name} image={w.image} />

            <div className="p-7">
              <h3 className="text-3xl font-black text-ink mb-3 leading-tight">
                {w.name}
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-ink-2 mb-5 font-medium">
                {w.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {w.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border-2 border-border bg-surface px-3 py-1 font-mono text-xs text-ink-2 font-semibold"
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
                <ExternalLink size={15} strokeWidth={2.5} />
                Visit Website
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
