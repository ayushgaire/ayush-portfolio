import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { PROJECTS } from '../data/content'

// Featured = first 2 projects
const FEATURED = PROJECTS.slice(0, 2)

function FeaturedCard({ p, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group card card-hover flex flex-col overflow-hidden"
    >
      <div className="p-5 pb-0">
        <div
          className="relative h-48 w-full overflow-hidden rounded-2xl bg-surface border-2 border-border flex items-center justify-center"
          style={
            p.image
              ? undefined
              : {
                  background:
                    'linear-gradient(135deg, #f7eddc 0%, #ffffff 50%, #faf6ec 100%)',
                }
          }
        >
          {p.image ? (
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          ) : (
            <span
              className="text-4xl md:text-5xl font-black text-ink"
              style={{ letterSpacing: '-0.025em' }}
            >
              {p.name}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="label text-gold mb-2">{p.tagline}</p>
            <h3 className="text-2xl font-black text-ink leading-tight">
              {p.name}
            </h3>
          </div>
          <ArrowUpRight
            size={20}
            strokeWidth={2.5}
            className="mt-1 flex-shrink-0 text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
          />
        </div>

        <p className="text-sm md:text-base leading-relaxed text-ink-2 mb-5 font-medium line-clamp-3">
          {p.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {p.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-md border-2 border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] text-ink-2 font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-gold transition-colors group/cta"
        >
          See case study
          <ArrowRight
            size={14}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  )
}

export default function ProjectsSummary() {
  const total = PROJECTS.length
  const remaining = total - FEATURED.length

  return (
    <Section id="projects" className="border-t-2 border-border">
      <SectionHeader
        index="03."
        title="Featured Projects"
        subtitle="Full-stack applications, gaming platforms, and productivity tools — shipped end to end."
      />

      <div className="grid gap-6 md:grid-cols-2 mb-10">
        {FEATURED.map((p, i) => (
          <FeaturedCard key={p.name} p={p} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border-2 border-border bg-surface p-6"
      >
        <div>
          <p className="font-extrabold text-ink text-lg">
            {total} projects total
          </p>
          <p className="text-sm text-ink-2 mt-0.5 font-medium">
            {remaining > 0
              ? `+ ${remaining} more on the projects page`
              : 'Browse the full set on the projects page'}
          </p>
        </div>
        <Link to="/projects" className="btn-primary text-sm whitespace-nowrap">
          View All Projects
          <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </motion.div>
    </Section>
  )
}
