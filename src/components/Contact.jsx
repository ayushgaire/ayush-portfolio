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
    <Section id="contact" className="border-t-2 border-border">
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
        className="mb-12 max-w-4xl"
      >
        <p className="text-3xl md:text-5xl font-extrabold text-ink-2 leading-tight">
          Whether it's a startup idea, a web project, or just a conversation —
          <span className="text-ink"> my inbox is open.</span>
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 mb-5">
        <motion.a
          href={`mailto:${SOCIALS.email}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="group card card-hover p-8 flex flex-col"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="h-14 w-14 rounded-2xl bg-gold flex items-center justify-center">
              <Mail size={22} className="text-white" strokeWidth={2.5} />
            </div>
            <ArrowUpRight
              size={22}
              strokeWidth={2.5}
              className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
            />
          </div>
          <span className="label text-gold mb-3">Email</span>
          <p className="text-2xl md:text-3xl font-black text-ink break-all group-hover:text-gold transition-colors duration-300">
            {SOCIALS.email}
          </p>
        </motion.a>

        <motion.a
          href={`tel:${SOCIALS.phone}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="group card card-hover p-8 flex flex-col"
        >
          <div className="flex items-start justify-between mb-8">
            <div className="h-14 w-14 rounded-2xl bg-gold flex items-center justify-center">
              <Phone size={22} className="text-white" strokeWidth={2.5} />
            </div>
            <ArrowUpRight
              size={22}
              strokeWidth={2.5}
              className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
            />
          </div>
          <span className="label text-gold mb-3">Phone</span>
          <p className="text-2xl md:text-3xl font-black text-ink group-hover:text-gold transition-colors duration-300">
            +1 507 817 9236
          </p>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.14 }}
        className="card p-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gold flex items-center justify-center">
            <Globe size={18} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <span className="label text-gold block mb-1">Around the web</span>
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="text-base text-ink font-bold hover:text-gold transition-colors underline underline-offset-4 decoration-gold decoration-2"
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
              className="h-11 w-11 rounded-xl border-2 border-border text-ink-2 hover:border-gold hover:bg-gold hover:text-white transition-all duration-200 bg-card flex items-center justify-center"
            >
              <Icon size={17} strokeWidth={2.2} />
            </a>
          ))}
        </div>
      </motion.div>
    </Section>
  )
}
