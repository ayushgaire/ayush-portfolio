import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data/content'

// Homepage shows the four primary projects in brief-defined order.
function ProjectRow({ project, index }) {
  const isReversed = index % 2 === 1
  const num = `0${index + 1}`.slice(-2)
  return (
    <article
      className={`grid gap-8 md:gap-12 items-center md:grid-cols-2 ${
        isReversed ? 'md:[&>*:first-child]:order-last' : ''
      }`}
    >
      {/* Image or placeholder */}
      <Link
        to={`/projects/${project.slug}`}
        className="block group"
        aria-label={`${project.name} case study`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            loading="lazy"
            width="800"
            height="600"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-border group-hover:border-ink transition-colors"
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-lg border border-border bg-bg-deep grid place-items-center group-hover:border-ink transition-colors">
            <span className="label">{project.name}</span>
          </div>
        )}
      </Link>

      {/* Text */}
      <div>
        <p className="label mb-3">
          {num} · {project.tagline}
        </p>
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:underline underline-offset-6 decoration-1"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-4 text-base text-ink-2 leading-relaxed">
          {project.shortDescription}
        </p>

        {project.role && (
          <p className="mt-5 text-sm text-ink-2">
            <span className="label mr-2">Role</span>
            {project.role}
          </p>
        )}

        {project.tech && (
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 6).map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline underline-offset-4"
          >
            Case study
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
            >
              Live
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="rule mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24"
      aria-labelledby="work-heading"
    >
      <header className="mb-14">
        <p className="label mb-3">02 · Selected Work</p>
        <h2
          id="work-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink"
        >
          Projects
        </h2>
      </header>

      <div className="space-y-20 sm:space-y-24">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-border">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline underline-offset-4"
        >
          All projects
          <ArrowRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  )
}
