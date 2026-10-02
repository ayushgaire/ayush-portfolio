import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { EARLIER_WORK } from '../data/content'

export default function EarlierWorkPage() {
  useEffect(() => {
    document.title = 'Earlier Work — Ayush Gaire'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Earlier work by Ayush Gaire — small websites, learning projects, and freelance builds kept here for reference.'
      )
    }
  }, [])

  return (
    <main className="mx-auto w-full max-w-6xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-10"
      >
        <ArrowLeft size={14} strokeWidth={2.2} />
        All projects
      </Link>

      <header className="mb-14">
        <p className="label mb-3">Archive</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Earlier Work
        </h1>
        <p className="mt-4 text-base sm:text-lg text-ink-2 max-w-2xl leading-relaxed">
          Earlier websites and learning projects. Kept here for reference. For
          current engineering work, see{' '}
          <Link to="/projects" className="underline underline-offset-4 text-ink">
            Projects
          </Link>
          .
        </p>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {EARLIER_WORK.map((w) => (
          <li
            key={w.name}
            className="py-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start"
          >
            <div className="max-w-3xl">
              <p className="label mb-2">{w.category}</p>
              <h2 className="text-xl sm:text-2xl font-semibold text-ink">
                {w.name}
              </h2>
              {w.location && (
                <p className="text-sm text-ink-3 mt-1">{w.location}</p>
              )}
              <p className="mt-3 text-base text-ink-2 leading-relaxed">
                {w.description}
              </p>
              {w.tech && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {w.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
            </div>
            {w.url && (
              <a
                href={w.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:underline underline-offset-4"
              >
                Live
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}
