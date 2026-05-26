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
      {/* Warm paper backing — visible behind/around the image */}
      <div
        className="absolute -top-8 -left-8 -right-2 -bottom-2 rounded-[2rem] bg-surface border border-border"
        style={{ zIndex: 0 }}
      />

      {/* Decorative corner lines — warm editorial detail */}
      <div className="absolute -top-12 -right-4 w-16 h-px bg-gold opacity-50 z-20" />
      <div className="absolute -top-12 -right-4 w-px h-16 bg-gold opacity-50 z-20" />
      <div className="absolute -bottom-6 -left-12 w-14 h-px bg-gold opacity-40 z-20" />
      <div className="absolute -bottom-6 -left-12 w-px h-14 bg-gold opacity-40 z-20" />

      {/* Outer gold ring frame (matches warm theme, integrates with dark photo) */}
      <div
        className="relative z-10 rounded-[1.4rem] p-2"
        style={{
          background: 'linear-gradient(135deg, #f7f5f1 0%, #ffffff 50%, #f0ece6 100%)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(196,149,90,0.18)',
        }}
      >
        {/* Inner gold accent ring */}
        <div
          className="overflow-hidden rounded-[1rem] relative"
          style={{
            width: 340,
            height: 400,
            boxShadow: 'inset 0 0 0 1.5px rgba(196,149,90,0.35)',
          }}
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
              <span className="font-display text-8xl font-medium text-gold">AG</span>
            </div>
          )}

          {/* Warm vignette overlay — blends dark photo with cream theme */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(196,149,90,0.10) 100%)',
            }}
          />
          {/* Bottom warm fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(247,245,241,0.45), transparent)',
            }}
          />
        </div>
      </div>

      {/* Floating Codyza badge — strong & legible */}
      <motion.a
        href={SOCIALS.codyza}
        target="_blank"
        rel="noreferrer"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-7 -right-6 z-30 flex items-center gap-3 rounded-2xl bg-card border border-border shadow-card-hover px-5 py-3.5"
        aria-label="Visit Codyza"
      >
        <span className="font-display text-2xl font-semibold text-gold leading-none">C</span>
        <div>
          <p className="label leading-none text-ink-3 mb-1">Founder</p>
          <p className="text-sm font-bold text-ink leading-none">Codyza</p>
        </div>
        <ArrowUpRight size={14} className="text-ink-2" />
      </motion.a>

      {/* Three decorative dots */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2.5 z-20">
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
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16"
    >
      <div className="w-full max-w-6xl mx-auto grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">

        {/* Left content */}
        <div className="order-2 lg:order-1">

          {/* Founder label */}
          <motion.div {...anim(1.9)} className="flex items-center gap-3 mb-8">
            <span className="label">Founder & CEO of</span>
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="label text-gold hover:text-ink transition-colors flex items-center gap-1"
            >
              Codyza
              <ArrowUpRight size={11} />
            </a>
          </motion.div>

          {/* Cinematic heading — bolder, heavier */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold leading-[0.86] tracking-tight text-ink"
              style={{ fontSize: 'clamp(80px, 11vw, 144px)' }}
            >
              Ayush
              <br />
              <em className="not-italic">Gaire.</em>
            </motion.h1>
          </div>

          {/* Role underline — bolder, bigger */}
          <motion.div
            {...anim(2.2)}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-[2px] w-10 bg-gold flex-shrink-0" />
            <p className="text-ink font-semibold text-xl md:text-2xl leading-snug">
              Full Stack Developer &amp; <span className="text-gold">Founder</span>
            </p>
          </motion.div>

          {/* Description — larger, more readable */}
          <motion.p
            {...anim(2.4)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2"
          >
            Crafting{' '}
            <span className="font-semibold text-ink">elegant, high-performance digital products</span>
            {' '}across three continents. Computer Science at{' '}
            <span className="font-semibold text-ink">SMSU</span>, building{' '}
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline underline-offset-4 decoration-gold decoration-2 hover:decoration-ink transition-all"
            >
              Codyza
            </a>{' '}
            — a digital agency delivering premium web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...anim(2.6)}
            className="mt-10 flex flex-wrap gap-3"
          >
            <button
              onClick={() => go('projects')}
              className="btn-primary"
            >
              <FolderGit2 size={15} />
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
            >
              <Download size={15} />
              Resume
            </a>
            <button
              onClick={() => go('contact')}
              className="btn-ghost"
            >
              <Mail size={14} />
              Say Hello
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            {...anim(2.8)}
            className="mt-10 flex items-center gap-1"
          >
            <span className="label mr-3">Find me on</span>
            {socialList.map(({ Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-ink-3 hover:border-ink hover:text-ink transition-all duration-200 bg-card"
              >
                <Icon size={15} />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-3"
        aria-label="Scroll down"
      >
        <span className="label">Scroll</span>
        <ArrowDown size={14} className="text-gold" />
      </motion.button>
    </section>
  )
}
