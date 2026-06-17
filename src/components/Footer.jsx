import { Link } from 'react-router-dom'
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowUp,
  Mail,
} from 'lucide-react'
import { SOCIALS } from '../data/content'

const socials = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

const pageLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/client-work', label: 'Client Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-border px-5 sm:px-6 py-14 sm:py-16 bg-bg-deep">
      <div className="mx-auto max-w-7xl">

        {/* Top — brand + tagline + CTA */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] mb-12">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 mb-4"
            >
              <span className="text-3xl font-extrabold tracking-tight text-ink">
                Ayush<span className="text-gold">.</span>
              </span>
              <span className="h-10 w-10 rounded-xl border-2 border-border bg-card text-ink-2 group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex items-center justify-center">
                <ArrowUp size={16} strokeWidth={2.5} />
              </span>
            </button>
            <p className="text-base text-ink-2 font-medium max-w-md leading-relaxed">
              Co-Founder of{' '}
              <a
                href={SOCIALS.codyza}
                target="_blank"
                rel="noreferrer"
                className="font-bold text-ink underline underline-offset-4 decoration-gold decoration-[2px]"
              >
                Codyza
              </a>
              . Building digital products and websites across three continents.
            </p>
          </div>

          <div>
            <p className="label text-ink-2 mb-4">Pages</p>
            <ul className="space-y-2">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm font-semibold text-ink-2 hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label text-ink-2 mb-4">Connect</p>
            <a
              href={`mailto:${SOCIALS.email}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-ink hover:text-gold transition-colors mb-4"
            >
              <Mail size={14} strokeWidth={2.5} />
              {SOCIALS.email}
            </a>
            <div className="flex gap-2 mt-2">
              {socials.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-xl border-2 border-border bg-card text-ink-2 hover:border-gold hover:bg-gold hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <Icon size={15} strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border pt-8 flex flex-col items-center gap-2 md:flex-row md:justify-between text-center">
          <p className="text-sm text-ink-2 font-semibold">
            © 2026 Ayush Gaire. All rights reserved.
          </p>
          <p className="font-mono text-xs text-ink-2 font-semibold">
            Built with React + Vite · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
