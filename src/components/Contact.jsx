import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { SOCIALS } from '../data/content'

export default function Contact() {
  const items = [
    { Icon: Mail, label: SOCIALS.email, href: `mailto:${SOCIALS.email}`, external: false },
    { Icon: Github, label: 'GitHub', href: SOCIALS.github, external: true },
    { Icon: Linkedin, label: 'LinkedIn', href: SOCIALS.linkedin, external: true },
  ]

  return (
    <section
      id="contact"
      className="rule mx-auto w-full max-w-6xl px-5 sm:px-6 py-20 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <header className="mb-10">
        <p className="label mb-3">06 · Contact</p>
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink"
        >
          Contact
        </h2>
      </header>

      <p className="max-w-2xl text-base sm:text-lg text-ink-2 leading-relaxed mb-8">
        Open to software engineering internships and technical collaborations.
        Email is the fastest way to reach me.
      </p>

      <ul className="divide-y divide-border border-y border-border">
        {items.map(({ Icon, label, href, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer noopener' : undefined}
              className="group flex items-center gap-4 py-5 text-ink hover:bg-bg-deep/40 transition-colors px-2 -mx-2 rounded"
            >
              <Icon size={18} strokeWidth={2.2} className="text-ink-2" />
              <span className="text-base sm:text-lg font-medium">{label}</span>
              <ArrowUpRight
                size={16}
                strokeWidth={2.2}
                className="ml-auto text-ink-3 group-hover:text-ink transition-colors"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
