import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../../data/content'
import { CASE_STUDIES } from './caseStudyData'

/**
 * Reusable case-study page. Driven by data in caseStudyData.js so pages stay
 * consistent and all facts live in one place.
 */
export default function CaseStudy() {
  const { slug } = useParams()
  const project = PROJECTS.find((p) => p.slug === slug)
  const detail = CASE_STUDIES[slug]

  useEffect(() => {
    if (!project || !detail) return
    document.title = `${project.name} — ${project.tagline.split('·')[0].trim()} | Ayush Gaire`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', detail.metaDescription || project.shortDescription)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [project, detail, slug])

  if (!project || !detail) return <Navigate to="/projects" replace />

  // Build an ordered index of other projects for prev/next navigation.
  const i = PROJECTS.findIndex((p) => p.slug === slug)
  const next = PROJECTS[(i + 1) % PROJECTS.length]

  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-10"
      >
        <ArrowLeft size={14} strokeWidth={2.2} />
        All projects
      </Link>

      <header className="mb-10">
        <p className="label mb-3">{project.tagline}</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink leading-[1.05]">
          {project.name}
        </h1>
        <p className="mt-5 text-lg text-ink-2 leading-relaxed max-w-2xl">
          {detail.overview || project.shortDescription}
        </p>

        {/* Links row */}
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-secondary"
            >
              Live site
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          )}
          {project.backend && (
            <a
              href={project.backend}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline underline-offset-4"
            >
              Backend
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline underline-offset-4"
            >
              Code
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          )}
          {project.devpost && (
            <a
              href={project.devpost}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline underline-offset-4"
            >
              Devpost
              <ArrowUpRight size={14} strokeWidth={2.2} />
            </a>
          )}
        </div>
      </header>

      {/* Optional screenshot */}
      {project.image && (
        <figure className="my-10">
          <img
            src={project.image}
            alt={`${project.name} — screenshot`}
            loading="lazy"
            width="1200"
            height="900"
            className="w-full aspect-[4/3] object-cover rounded-lg border border-border"
          />
        </figure>
      )}

      {/* Metadata grid */}
      <section className="my-10 border-y border-border py-6 grid gap-4 sm:grid-cols-3 text-sm">
        <div>
          <p className="label mb-1">Role</p>
          <p className="text-ink">{project.role}</p>
        </div>
        <div>
          <p className="label mb-1">Stack</p>
          <p className="text-ink">{project.tech.join(' · ')}</p>
        </div>
        {detail.timeframe && (
          <div>
            <p className="label mb-1">Timeframe</p>
            <p className="text-ink">{detail.timeframe}</p>
          </div>
        )}
      </section>

      {/* Case study body — ordered sections */}
      <article className="prose-content space-y-10 max-w-3xl">
        {detail.sections.map((s) => (
          <section key={s.title}>
            <h2 className="label mb-3">{s.title}</h2>
            {Array.isArray(s.body) ? (
              <ul className="space-y-2 text-base text-ink-2 leading-relaxed list-disc pl-5">
                {s.body.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            ) : (
              <p className="text-base text-ink-2 leading-relaxed">{s.body}</p>
            )}
          </section>
        ))}
      </article>

      {/* Next project */}
      {next && next.slug !== slug && (
        <div className="mt-16 pt-10 border-t border-border flex items-center justify-between">
          <Link
            to="/projects"
            className="text-sm text-ink-2 hover:text-ink"
          >
            ← All projects
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline underline-offset-4"
          >
            Next: {next.name}
            <ArrowRight size={14} strokeWidth={2.2} />
          </Link>
        </div>
      )}
    </main>
  )
}
