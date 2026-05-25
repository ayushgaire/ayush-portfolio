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
    <footer className="relative border-t border-white/10 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-3"
        >
          <span className="font-display text-2xl font-bold">
            Ayush<span className="text-electric">.</span>
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-lg glass glass-hover text-white/50 transition-colors group-hover:text-electric-bright">
            <ArrowUp size={16} />
          </span>
        </button>

        <div className="flex gap-3">
          {socials.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-xl glass glass-hover text-white/55 transition-colors hover:text-electric-bright"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-2 border-t border-white/5 pt-8 text-center md:flex-row md:justify-between">
        <p className="text-xs text-white/40">
          © 2026 Ayush Gaire. All rights reserved.
        </p>
        <p className="font-mono text-xs text-white/35">
          Built with React + Vite
        </p>
      </div>
    </footer>
  )
}
