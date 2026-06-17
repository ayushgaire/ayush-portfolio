import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowUpRight,
  Download,
  Mail,
  FolderGit2,
  MapPin,
  GraduationCap,
  Globe,
  Briefcase,
  Rocket,
} from 'lucide-react'
import { SOCIALS } from '../data/content'

const socialList = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

const infoRow = [
  { Icon: MapPin, text: 'Marshall, Minnesota' },
  { Icon: GraduationCap, text: 'B.S. Computer Science, SMSU (2028)' },
  { Icon: Globe, text: 'Nepal → Japan → USA' },
  { Icon: Briefcase, text: 'Open to Internships' },
  { Icon: Rocket, text: 'Founder of Codyza' },
]

const anim = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

function PhotoBlock() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="relative w-full max-w-[380px] mx-auto aspect-square">
      {/* Glassmorphism backing card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-4 sm:inset-6 rounded-[2rem] border-2 border-gold/30 bg-card/60 backdrop-blur-sm shadow-card-hover"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.55) 0%, rgba(247,237,220,0.4) 100%)',
        }}
      />

      {/* Gold radial glow behind photo */}
      <div
        className="absolute inset-10 rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(176,131,68,0.35) 0%, transparent 70%)',
        }}
      />

      {/* Circular photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative h-full w-full grid place-items-center"
      >
        <div className="relative h-[78%] w-[78%]">
          <div className="absolute -inset-2 rounded-full bg-gold/20 blur-xl" />
          {imgOk ? (
            <img
              src="/profile.jpg"
              alt="Ayush Gaire"
              onError={() => setImgOk(false)}
              className="relative h-full w-full rounded-full object-cover border-[6px] border-card shadow-card-hover"
            />
          ) : (
            <div
              className="relative h-full w-full rounded-full border-[6px] border-card shadow-card-hover"
              style={{
                background:
                  'linear-gradient(135deg, #f7eddc 0%, #ece6d8 100%)',
              }}
            />
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      <div className="w-full max-w-7xl mx-auto grid items-center gap-12 lg:gap-16 lg:grid-cols-[3fr_2fr]">

        {/* LEFT — content */}
        <div className="order-2 lg:order-1">
          {/* Founder badge */}
          <motion.div {...anim(1.9)} className="inline-flex items-center gap-2.5 rounded-full border-2 border-gold/40 bg-gold-pale px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="label text-gold">Founder & CEO of</span>
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="label text-ink hover:text-gold transition-colors flex items-center gap-1"
            >
              Codyza
              <ArrowUpRight size={12} strokeWidth={3} />
            </a>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            className="font-black leading-[0.95] tracking-tight text-ink mb-4"
            style={{ fontSize: 'clamp(48px, 7vw, 88px)' }}
          >
            Ayush <span className="text-gold">Gaire</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            {...anim(2.1)}
            className="text-base sm:text-lg md:text-xl font-bold text-ink-2 leading-snug mb-6"
          >
            Computer Science Student <span className="text-gold">•</span>{' '}
            Full Stack Developer <span className="text-gold">•</span>{' '}
            Entrepreneur
          </motion.p>

          {/* Bio paragraph 1 */}
          <motion.p
            {...anim(2.2)}
            className="text-base leading-relaxed text-ink-2 font-medium mb-4 max-w-2xl"
          >
            Born in{' '}
            <span className="font-bold text-ink">Nepal</span>, educated in{' '}
            <span className="font-bold text-ink">Japan</span>, and currently
            pursuing Computer Science in the{' '}
            <span className="font-bold text-ink">United States</span>. I enjoy
            building products, websites, and communities that create real-world
            impact. As the Founder & CEO of{' '}
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-ink underline underline-offset-4 decoration-gold decoration-[3px] hover:decoration-ink transition-all"
            >
              Codyza
            </a>
            , I lead a volunteer-driven initiative helping students gain
            practical experience while supporting local businesses through
            technology.
          </motion.p>

          {/* Bio paragraph 2 */}
          <motion.p
            {...anim(2.3)}
            className="text-base leading-relaxed text-ink-2 font-medium mb-6 max-w-2xl"
          >
            My journey across three countries has shaped my perspective on
            technology, leadership, and collaboration. I am passionate about{' '}
            <span className="font-bold text-ink">software engineering</span>,{' '}
            <span className="font-bold text-ink">entrepreneurship</span>,{' '}
            <span className="font-bold text-ink">cloud technologies</span>, and
            building solutions that solve meaningful problems.
          </motion.p>

          {/* Info row */}
          <motion.div
            {...anim(2.4)}
            className="flex flex-wrap gap-x-5 gap-y-2.5 mb-7 text-sm text-ink-2 font-semibold"
          >
            {infoRow.map(({ Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
              >
                <Icon size={14} strokeWidth={2.5} className="text-gold" />
                {text}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...anim(2.5)} className="flex flex-wrap gap-3 mb-6">
            <Link to="/projects" className="btn-primary">
              <FolderGit2 size={17} strokeWidth={2.5} />
              View Projects
            </Link>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={17} strokeWidth={2.5} />
              Download Resume
            </a>
            <button onClick={() => go('contact')} className="btn-ghost">
              <Mail size={16} strokeWidth={2.5} />
              Contact Me
            </button>
          </motion.div>

          {/* Social icons */}
          <motion.div {...anim(2.6)} className="flex items-center gap-2.5">
            <span className="label text-gold mr-1">Find me on</span>
            {socialList.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-xl border-2 border-border bg-card text-ink-2 hover:border-gold hover:bg-gold hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              >
                <Icon size={16} strokeWidth={2.2} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — photo + floating cards */}
        <div className="order-1 lg:order-2 flex justify-center px-4 sm:px-8 lg:px-0">
          <PhotoBlock />
        </div>
      </div>
    </section>
  )
}
