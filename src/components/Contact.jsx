import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowUpRight,
  ArrowRight,
  Globe,
  Users,
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

      {/* Premium work-together CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-5 overflow-hidden rounded-[24px] border-2 border-gold/40 p-8 sm:p-12 backdrop-blur-sm shadow-card-hover"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(247,237,220,0.75) 100%)',
        }}
      >
        <div
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(176,131,68,0.5), transparent 70%)' }}
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <span className="label text-gold">Let's collaborate</span>
            <h3 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-ink leading-[0.95]">
              Want to work together?
            </h3>
            <p className="mt-4 text-lg sm:text-xl font-medium text-ink-2 leading-relaxed">
              Let's build something meaningful together.
            </p>
          </div>

          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label={`Email Ayush Gaire at ${SOCIALS.email}`}
            className="group inline-flex items-center gap-3 self-start rounded-2xl bg-ink px-7 py-5 text-white transition-all duration-300 hover:bg-gold hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(176,131,68,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-white/15">
              <Mail size={20} strokeWidth={2.5} />
            </span>
            <span className="flex flex-col text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                Email me directly
              </span>
              <span className="text-base sm:text-lg font-black break-all">{SOCIALS.email}</span>
            </span>
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="ml-1 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 mb-5">
        <motion.a
          href={`mailto:${SOCIALS.teamEmail}`}
          aria-label={`Email the Codyza team at ${SOCIALS.teamEmail}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="group card card-hover p-6 sm:p-8 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <div className="flex items-start justify-between mb-6 sm:mb-8">
            <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gold flex items-center justify-center">
              <Users size={22} className="text-white" strokeWidth={2.5} />
            </div>
            <ArrowUpRight
              size={22}
              strokeWidth={2.5}
              className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
            />
          </div>
          <span className="label text-gold mb-3">Join Codyza</span>
          <p className="text-lg md:text-xl font-black text-ink group-hover:text-gold transition-colors duration-300 leading-snug">
            Want to build as a team? Work with Codyza.
          </p>
          <p className="mt-2 text-sm text-ink-2 font-semibold break-all">
            {SOCIALS.teamEmail}
          </p>
        </motion.a>

      <motion.a
  href={SOCIALS.appointment}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a 30-minute call with Ayush Gaire"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65, delay: 0.08 }}
  className="group card card-hover p-6 sm:p-8 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
>
  <div className="flex items-start justify-between mb-6 sm:mb-8">
    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gold flex items-center justify-center">
      <Phone size={22} className="text-white" strokeWidth={2.5} />
    </div>
    <ArrowUpRight
      size={22}
      strokeWidth={2.5}
      className="text-ink-3 transition-all duration-300 group-hover:text-gold group-hover:rotate-12"
    />
  </div>

  <span className="label text-gold mb-3">Appointment</span>

  <p className="text-2xl md:text-3xl font-black text-ink group-hover:text-gold transition-colors duration-300">
    Book a 30-Minute Call
  </p>
</motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.14 }}
        className="card p-5 sm:p-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
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
