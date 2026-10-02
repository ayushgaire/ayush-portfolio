import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { EXPERIENCE } from '../data/content'

export default function ExperienceSummary() {
  return (
    <section
      id="experience"
      className="rule mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24"
      aria-labelledby="experience-heading"
    >
      <header className="mb-10">
        <p className="label mb-3">04 · Experience</p>
        <h2
          id="experience-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink"
        >
          Experience
        </h2>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {EXPERIENCE.map((e) => (
          <li
            key={e.org}
            className="py-6 grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline"
          >
            <div className="max-w-3xl">
              <p className="text-xl font-semibold text-ink">
                {e.role} · {e.org}
              </p>
              {e.bullets?.[0] && (
                <p className="text-sm text-ink-2 mt-2 leading-relaxed">
                  {e.bullets[0]}
                </p>
              )}
            </div>
            <p className="label md:text-right whitespace-nowrap">{e.period}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          to="/experience"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline underline-offset-4"
        >
          Full experience
          <ArrowRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  )
}
