import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function AboutSummary() {
  return (
    <section
      id="about"
      className="rule mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24"
      aria-labelledby="about-heading"
    >
      <header className="mb-10">
        <p className="label mb-3">05 · About</p>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink"
        >
          About
        </h2>
      </header>

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="max-w-2xl space-y-5 text-base sm:text-lg text-ink-2 leading-relaxed">
          <p>
            I grew up in Nepal, spent four years in Japan where I studied
            agriculture, and I am now studying Computer Science at Southwest
            Minnesota State University.
          </p>
          <p>
            My work focuses on real systems: platforms that store, move, and
            make sense of data for actual people. I prefer building small,
            reliable pieces and shipping them end to end over writing about
            technology.
          </p>
        </div>

        <div className="space-y-6 text-sm">
          <div>
            <p className="label mb-2">Education</p>
            <p className="text-ink">Southwest Minnesota State University</p>
            <p className="text-ink-2">B.S. Computer Science · Expected May 2028</p>
          </div>
          <div>
            <p className="label mb-2">Languages</p>
            <p className="text-ink-2 leading-relaxed">
              Nepali (native) · English (fluent) · Japanese (advanced) ·
              Hindi (advanced)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline underline-offset-4"
        >
          More about me
          <ArrowRight size={14} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  )
}
