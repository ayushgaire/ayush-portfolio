import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  FolderGit2,
} from 'lucide-react'
import { SOCIALS } from '../data/content'

const socialList = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

const anim = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

function ProfileVisual() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Warm cream backing — paper-like, slightly offset */}
      <div
        className="absolute -top-8 -left-8 -right-2 -bottom-2 rounded-[2rem] bg-surface border-2 border-border"
        style={{ zIndex: 0 }}
      />

      {/* Decorative corner brackets */}
      <div className="absolute -top-12 -right-4 w-20 h-1 bg-gold rounded-full z-20" />
      <div className="absolute -top-12 -right-4 w-1 h-20 bg-gold rounded-full z-20" />
      <div className="absolute -bottom-6 -left-12 w-16 h-1 bg-gold rounded-full z-20" />
      <div className="absolute -bottom-6 -left-12 w-1 h-16 bg-gold rounded-full z-20" />

      {/* Outer gold frame */}
      <div
        className="relative z-10 rounded-[1.5rem] p-3"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f7eddc 50%, #ffffff 100%)',
          boxShadow: '0 24px 80px rgba(60,45,20,0.15), 0 0 0 2px rgba(176,131,68,0.25)',
        }}
      >
        <div
          className="overflow-hidden rounded-[1.1rem] relative bg-card"
          style={{ width: 360, height: 420 }}
        >
          {imgOk ? (
            <img
              src="/profile.jpg"
              alt="Ayush Gaire"
              onError={() => setImgOk(false)}
              className="h-full w-full object-cover"
              style={{ filter: 'saturate(1.05) contrast(1.02)' }}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-surface">
              <span className="text-8xl font-extrabold text-gold">AG</span>
            </div>
          )}

          {/* Warm vignette overlay — blends dark photo with cream theme */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 50%, rgba(176,131,68,0.15) 100%)',
            }}
          />
        </div>
      </div>

      {/* Floating Codyza badge — big, strong, legible */}
      <motion.a
        href={SOCIALS.codyza}
        target="_blank"
        rel="noreferrer"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-8 -right-6 z-30 flex items-center gap-3 rounded-2xl bg-card border-2 border-border shadow-card-hover px-6 py-4"
        aria-label="Visit Codyza"
      >
        <div className="h-12 w-12 rounded-xl bg-ink flex items-center justify-center">
          <span className="text-2xl font-extrabold text-gold leading-none">C</span>
        </div>
        <div>
          <p className="label leading-none text-gold mb-1.5">Founder</p>
          <p className="text-base font-extrabold text-ink leading-none">Codyza</p>
        </div>
        <ArrowUpRight size={16} className="text-ink-2" strokeWidth={2.5} />
      </motion.a>

      {/* Three decorative dots */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-20">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="dot-gold"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-36 pb-16"
    >
      <div className="w-full max-w-7xl mx-auto grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">

        {/* Left content */}
        <div className="order-2 lg:order-1">

          {/* Founder label */}
          <motion.div {...anim(1.9)} className="flex items-center gap-3 mb-10">
            <span className="h-1 w-8 bg-gold rounded-full" />
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

          {/* Cinematic heading — big, bold, normal sans-serif */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-black leading-[0.85] tracking-tight text-ink"
              style={{ fontSize: 'clamp(72px, 11vw, 148px)' }}
            >
              Ayush
              <br />
              <span className="text-gold">Gaire.</span>
            </motion.h1>
          </div>

          {/* Role */}
          <motion.div
            {...anim(2.2)}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-1 w-12 bg-gold rounded-full flex-shrink-0" />
            <p className="text-ink font-bold text-2xl md:text-3xl leading-snug">
              Full Stack Developer &amp; <span className="text-gold">Founder</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            {...anim(2.4)}
            className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-ink-2 font-medium"
          >
            Crafting{' '}
            <span className="font-bold text-ink">elegant, high-performance digital products</span>
            {' '}across three continents. Computer Science at{' '}
            <span className="font-bold text-ink">SMSU</span>, building{' '}
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-ink underline underline-offset-4 decoration-gold decoration-[3px] hover:decoration-ink transition-all"
            >
              Codyza
            </a>{' '}
            — a digital agency delivering premium web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...anim(2.6)}
            className="mt-12 flex flex-wrap gap-4"
          >
            <button
              onClick={() => go('projects')}
              className="btn-primary"
            >
              <FolderGit2 size={17} strokeWidth={2.5} />
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <Download size={17} strokeWidth={2.5} />
              Resume
            </a>
            <button
              onClick={() => go('contact')}
              className="btn-ghost"
            >
              <Mail size={16} strokeWidth={2.5} />
              Say Hello
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...anim(2.8)}
            className="mt-12 flex items-center gap-3"
          >
            <span className="label text-gold mr-2">Find me on</span>
            {socialList.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border-2 border-border bg-card text-ink-2 hover:border-gold hover:bg-gold hover:text-white transition-all duration-200"
              >
                <Icon size={17} strokeWidth={2.2} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — Profile */}
        <div className="order-1 lg:order-2 flex justify-center">
          <ProfileVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => go('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3.2, duration: 1 },
          y: { repeat: Infinity, duration: 2.4, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3 font-bold"
        aria-label="Scroll down"
      >
        <span className="label text-gold">Scroll</span>
        <ArrowDown size={18} className="text-gold" strokeWidth={2.5} />
      </motion.button>
    </section>
  )
}
