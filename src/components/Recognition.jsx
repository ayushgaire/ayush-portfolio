import { Link } from 'react-router-dom'
import { RECOGNITIONS } from '../data/content'

export default function Recognition() {
  if (!RECOGNITIONS?.length) return null
  return (
    <section
      id="recognition"
      className="rule mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24"
      aria-labelledby="recognition-heading"
    >
      <header className="mb-10">
        <p className="label mb-3">03 · Recognition</p>
        <h2
          id="recognition-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink"
        >
          Recognition
        </h2>
      </header>

      <ul className="divide-y divide-border border-y border-border">
        {RECOGNITIONS.map((r) => (
          <li
            key={r.title}
            className="py-6 grid gap-2 md:grid-cols-[1fr_auto] md:items-baseline"
          >
            <div className="max-w-3xl">
              <p className="text-xl font-semibold text-ink">{r.title}</p>
              <p className="text-sm text-ink-2 mt-1">
                {r.award} · {r.context}
              </p>
              {r.note && (
                <p className="text-sm text-ink-2 mt-2 leading-relaxed">
                  {r.note}
                </p>
              )}
            </div>
            {r.projectSlug && (
              <Link
                to={`/projects/${r.projectSlug}`}
                className="text-sm font-semibold text-ink hover:underline underline-offset-4 justify-self-start md:justify-self-end"
              >
                Case study →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
