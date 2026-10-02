import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Github,
  Mail,
  Download,
  ArrowRight,
} from 'lucide-react'
import { SOCIALS, IDENTITY } from '../data/content'

export default function Hero() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <section
      id="home"
      className="relative px-5 sm:px-6 pt-28 sm:pt-32 pb-16 sm:pb-20"
      aria-labelledby="hero-name"
    >
      <div className="mx-auto w-full max-w-6xl grid gap-10 md:gap-14 items-center md:grid-cols-[1fr_auto]">

        {/* Left — content */}
        <div>
          <p className="label mb-4">Software Engineer · Marshall, Minnesota</p>

          <h1
            id="hero-name"
            className="font-semibold tracking-tight text-ink leading-[1.02]"
            style={{ fontSize: 'clamp(44px, 6.2vw, 76px)' }}
          >
            Ayush Gaire
          </h1>

          <p className="mt-5 text-xl sm:text-2xl text-ink font-medium leading-snug max-w-2xl">
            {IDENTITY}
          </p>

          <p className="mt-6 text-base sm:text-lg text-ink-2 leading-relaxed max-w-2xl">
            I build full-stack systems, data-driven applications, and
            technology for real-world problems. Currently studying Computer
            Science at Southwest Minnesota State University.
          </p>

          {/* Metadata — plain text, no cards */}
          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-8 max-w-xl text-sm">
            <div className="flex gap-3">
              <dt className="label min-w-[72px] pt-0.5">Based</dt>
              <dd className="text-ink">Marshall, Minnesota</dd>
            </div>
            <div className="flex gap-3">
              <dt className="label min-w-[72px] pt-0.5">Studying</dt>
              <dd className="text-ink">B.S. Computer Science</dd>
            </div>
            <div className="flex gap-3">
              <dt className="label min-w-[72px] pt-0.5">School</dt>
              <dd className="text-ink">Southwest Minnesota State University</dd>
            </div>
            <div className="flex gap-3">
              <dt className="label min-w-[72px] pt-0.5">Grad</dt>
              <dd className="text-ink">Expected May 2028</dd>
            </div>
          </dl>

          {/* Primary actions */}
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} strokeWidth={2.2} />
            </Link>
            <Link to="/resume" className="btn-secondary">
              <Download size={16} strokeWidth={2.2} />
              Résumé
            </Link>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost"
            >
              <Github size={16} strokeWidth={2.2} />
              GitHub
            </a>
          </div>

          {/* Secondary contact — minimal */}
          <div className="mt-8 flex items-center gap-5 text-sm text-ink-2">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center gap-2 hover:text-ink transition-colors"
            >
              <Mail size={14} strokeWidth={2.2} />
              {SOCIALS.email}
            </a>
          </div>
        </div>

        {/* Right — small portrait, no decoration */}
        <div className="order-first md:order-last">
          {imgOk ? (
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.jpg"
                alt="Ayush Gaire, computer science student and software engineer in Minnesota"
                onError={() => setImgOk(false)}
                className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 rounded-full object-cover border border-border"
                width="224"
                height="224"
              />
            </picture>
          ) : (
            <div
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 rounded-full border border-border bg-bg-deep"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  )
}
