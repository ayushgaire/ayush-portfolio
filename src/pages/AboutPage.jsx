import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { JOURNEY, EDUCATION, SKILLS, SPOKEN_LANGUAGES } from '../data/content'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About — Ayush Gaire'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'About Ayush Gaire — Computer Science student at Southwest Minnesota State University, software engineer with a background across Nepal, Japan, and the United States.'
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
        <p className="label mb-3">About</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink">
          About
        </h1>
      </header>

      <section className="space-y-5 text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl">
        <p>
          I grew up in Nepal, spent four years in Japan where I studied
          agriculture, and I now study Computer Science at Southwest Minnesota
          State University in Marshall, Minnesota.
        </p>
        <p>
          My work focuses on real systems — platforms that store, move, and make
          sense of data for actual people. I prefer building small, reliable
          pieces and shipping them end to end over writing about technology.
        </p>
        <p>
          Outside class and projects, I was selected for Kagoshima
          Prefecture&apos;s four-member canoeing team in Japan and competed at
          national-level events.
        </p>
      </section>

      <section className="mt-16 border-t border-border pt-12">
        <h2 className="label mb-5">Journey</h2>
        <ul className="space-y-5">
          {JOURNEY.map((j) => (
            <li key={j.country} className="grid gap-2 sm:grid-cols-[200px_1fr]">
              <div>
                <p className="font-semibold text-ink">{j.country}</p>
                <p className="label mt-1">{j.period}</p>
              </div>
              <p className="text-ink-2 leading-relaxed">{j.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 border-t border-border pt-12">
        <h2 className="label mb-5">Education</h2>
        <p className="text-lg font-semibold text-ink">{EDUCATION.school}</p>
        <p className="text-ink-2 mt-1">{EDUCATION.degree}</p>
        <p className="text-ink-3 text-sm mt-1">
          {EDUCATION.location} · {EDUCATION.graduation}
        </p>
      </section>

      <section className="mt-12 border-t border-border pt-12">
        <h2 className="label mb-5">Skills</h2>
        <dl className="grid gap-6 sm:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <dt className="label mb-2">{s.group}</dt>
              <dd className="text-ink-2 leading-relaxed">
                {s.items.join(', ')}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12 border-t border-border pt-12">
        <h2 className="label mb-5">Spoken Languages</h2>
        <ul className="space-y-1 text-ink-2">
          {SPOKEN_LANGUAGES.map((l) => (
            <li key={l.name}>
              <span className="text-ink">{l.name}</span> — {l.level}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
