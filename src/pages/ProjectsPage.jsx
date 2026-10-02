import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data/content'

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects — Ayush Gaire'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Projects by Ayush Gaire — NepalDisaster, Namaste Kalika, FORESIGHT, and FarmFix. Full-stack systems and data-driven applications.'
      )
    }
  }, [])

  return (
    <main className="mx-auto w-full max-w-6xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-10"
      >
        <ArrowLeft size={14} strokeWidth={2.2} />
        Back to home
      </Link>

      <header className="mb-14">
        <p className="label mb-3">Projects</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Projects
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ink-2 max-w-2xl leading-relaxed">
          Full-stack systems, data-driven applications, and real-world
          technology.
        </p>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {PROJECTS.map((p, i) => (
          <li key={p.slug} className="py-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div className="max-w-3xl">
              <p className="label mb-2">
                {`0${i + 1}`.slice(-2)} · {p.tagline}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-ink">
                <Link
                  to={`/projects/${p.slug}`}
                  className="hover:underline underline-offset-6 decoration-1"
                >
                  {p.name}
                </Link>
              </h2>
              <p className="mt-3 text-base text-ink-2 leading-relaxed">
                {p.shortDescription}
              </p>
              {p.tech && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm whitespace-nowrap">
              <Link
                to={`/projects/${p.slug}`}
                className="inline-flex items-center gap-1.5 font-semibold text-ink hover:underline underline-offset-4"
              >
                Case study
                <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-ink-2 hover:text-ink"
                >
                  Live
                  <ArrowUpRight size={14} strokeWidth={2.2} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-16 pt-10 border-t border-border">
        <Link
          to="/earlier-work"
          className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink"
        >
          Earlier work
          <ArrowRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </main>
  )
}
