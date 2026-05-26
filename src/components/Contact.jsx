import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowUpRight,
  Globe,
} from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { SOCIALS } from '../data/content'

const socials = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

export default function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <SectionHeader
        index="09."
        title="Let's Connect"
        subtitle="Interested in collaboration, internships, freelance work, or innovative projects? I'd love to hear from you."
      />

      {/* Personal warm message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 max-w-3xl"
      >
        <p className="font-display text-3xl font-semibold text-ink-2 leading-tight md:text-5xl">
          Whether it's a startup idea, a web project, or just a conversation —
          <em className="text-ink font-bold not-italic"> my inbox is open.</em>
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 mb-4">
        {/* Email */}
        <motion.a
          href={`mailto:${SOCIALS.email}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="group card card-hover p-8 flex flex-col"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="h-11 w-11 rounded-xl bg-gold-pale border border-gold-light flex items-center justify-center">
              <Mail size={18} className="text-gold" />
            </div>
            <ArrowUpRight
              size={18}
              className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
            />
          </div>
          <span className="label text-ink-3 mb-2 font-bold">Email</span>
          <p className="font-display text-2xl font-bold text-ink break-all group-hover:text-gold transition-colors duration-300">
            {SOCIALS.email}
          </p>
        </motion.a>

        {/* Phone */}
        <motion.a
          href={`tel:${SOCIALS.phone}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="group card card-hover p-8 flex flex-col"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="h-11 w-11 rounded-xl bg-gold-pale border border-gold-light flex items-center justify-center">
              <Phone size={18} className="text-gold" />
            </div>
            <ArrowUpRight
              size={18}
              className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
            />
          </div>
          <span className="label text-ink-3 mb-2 font-bold">Phone</span>
          <p className="font-display text-2xl font-bold text-ink group-hover:text-gold transition-colors duration-300">
            +1 507 817 9236
          </p>
        </motion.a>
      </div>

      {/* Social row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.14 }}
        className="card p-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-gold-pale border border-gold-light flex items-center justify-center">
            <Globe size={16} className="text-gold" />
          </div>
          <div>
            <span className="label text-ink-3 block mb-0.5">Around the web</span>
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink-2 hover:text-ink transition-colors underline underline-offset-3 decoration-gold/40 hover:decoration-ink"
            >
              codyza.com
            </a>
          </div>
        </div>

        <div className="flex gap-2">
          {socials.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="h-10 w-10 rounded-xl border border-border text-ink-3 hover:border-ink hover:text-ink transition-all duration-200 bg-card flex items-center justify-center"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
