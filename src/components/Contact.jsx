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
    <Section id="contact">
      <SectionHeader
        index="09"
        title="Let's Connect"
        subtitle="Interested in collaboration, internships, freelance work, or innovative projects? Let's connect."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <motion.a
          href={`mailto:${SOCIALS.email}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6 }}
          className="group relative overflow-hidden rounded-3xl glass-strong p-9"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-60" />
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex items-start justify-between">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric/15 text-electric-bright shadow-glow">
              <Mail size={24} />
            </div>
            <ArrowUpRight
              size={22}
              className="text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-electric-bright"
            />
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Email
          </p>
          <p className="mt-2 break-all font-display text-xl font-bold transition-colors group-hover:text-electric-bright">
            {SOCIALS.email}
          </p>
        </motion.a>

        <motion.a
          href={`tel:${SOCIALS.phone}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl glass-strong p-9"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-electric to-transparent opacity-60" />
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-electric/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex items-start justify-between">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-electric/15 text-electric-bright shadow-glow">
              <Phone size={24} />
            </div>
            <ArrowUpRight
              size={22}
              className="text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-electric-bright"
            />
          </div>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            Phone
          </p>
          <p className="mt-2 font-display text-xl font-bold transition-colors group-hover:text-electric-bright">
            +1 507 817 9236
          </p>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-6 flex flex-col items-center justify-between gap-6 rounded-3xl glass p-8 sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-electric/15 text-electric-bright">
            <Globe size={20} />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
              Around the web
            </p>
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/75 transition-colors hover:text-electric-bright"
            >
              codyza.com
            </a>
          </div>
        </div>

        <div className="flex gap-3">
          {socials.map(({ Icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-xl glass glass-hover text-white/55 transition-colors hover:text-electric-bright"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
