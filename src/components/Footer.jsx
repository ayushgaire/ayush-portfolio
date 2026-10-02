import { SOCIALS, IDENTITY } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 sm:px-6 py-10 border-t border-border">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-ink">Ayush Gaire</p>
          <p className="text-sm text-ink-2 mt-1">{IDENTITY}</p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-5 text-sm text-ink-2">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="hover:text-ink transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
      <p className="mt-6 text-xs text-ink-3">
        © {year} Ayush Gaire
      </p>
    </footer>
  )
}
