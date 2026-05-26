import { Linkedin, Github, Instagram, Facebook, ArrowUp } from 'lucide-react'
import { SOCIALS } from '../data/content'

const socials = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-border px-6 py-16 bg-bg-deep">
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between mb-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3"
          >
            <span className="text-3xl font-extrabold tracking-tight text-ink">
              Ayush<span className="text-gold">.</span>
            </span>
            <span className="h-10 w-10 rounded-xl border-2 border-border bg-card text-ink-2 group-hover:border-gold group-hover:bg-gold group-hover:text-white transition-all duration-300 flex items-center justify-center">
              <ArrowUp size={16} strokeWidth={2.5} />
            </span>
          </button>

          <div className="flex gap-2">
            {socials.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-11 w-11 rounded-xl border-2 border-border bg-card text-ink-2 hover:border-gold hover:bg-gold hover:text-white transition-all duration-200 flex items-center justify-center"
              >
                <Icon size={16} strokeWidth={2.2} />
              </a>
            ))}
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
