import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { EXPERIENCE } from '../data/content'

export default function ExperiencePage() {
  useEffect(() => {
    document.title = 'Experience — Ayush Gaire'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Experience and leadership of Ayush Gaire — Codyza and American Red Cross.'
      )
    }
  }, [])

  return (
    <main className="mx-auto w-full max-w-4xl px-5 sm:px-6 pt-28 sm:pt-32 pb-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink mb-10"
      >
        <ArrowLeft size={14} strokeWidth={2.2} />
        Back to home
      </Link>

      <header className="mb-12">
        <p className="label mb-3">Experience</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          Experience
        </h1>
      </header>

      <div className="space-y-12">
        {EXPERIENCE.map((e, i) => (
          <article
            key={`${e.org}-${i}`}
            className="border-t border-border pt-8"
          >
            <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline">
              <div>
                <p className="text-xl font-semibold text-ink">{e.role}</p>
                <p className="text-ink-2 mt-1">{e.org}</p>
              </div>
              <p className="label md:text-right whitespace-nowrap">{e.period}</p>
            </div>
            {e.bullets && (
              <ul className="mt-4 space-y-2 text-base text-ink-2 leading-relaxed list-disc pl-5 max-w-2xl">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </main>
  )
}
