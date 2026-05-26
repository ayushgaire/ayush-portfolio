import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ArrowDown,
  ArrowUpRight,
  FolderGit2,
  Download,
  Mail,
} from 'lucide-react'
import { ROLES, SOCIALS } from '../data/content'

function Typewriter() {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const full = ROLES[idx]
    let t
    if (!del && sub.length < full.length) {
      t = setTimeout(() => setSub(full.slice(0, sub.length + 1)), 70)
    } else if (!del && sub.length === full.length) {
      t = setTimeout(() => setDel(true), 1600)
    } else if (del && sub.length > 0) {
      t = setTimeout(() => setSub(full.slice(0, sub.length - 1)), 35)
    } else {
      setDel(false)
      setIdx((i) => (i + 1) % ROLES.length)
    }
    return () => clearTimeout(t)
  }, [sub, del, idx])

  return (
    <span className="text-electric-bright text-glow">
      {sub}
      <span className="ml-0.5 inline-block h-[1em] w-[3px] -translate-y-[2px] animate-pulse bg-electric-bright align-middle" />
    </span>
  )
}

function ProfileVisual() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2.4 }}
      className="relative mx-auto"
      style={{ perspective: 900 }}
    >
      {/* glowing animated ring */}
      <div className="absolute -inset-6 rounded-full bg-electric/10 blur-3xl animate-pulse-glow" />

      {imgOk ? (
        <div className="relative h-60 w-60 md:h-72 md:w-72">
          <div className="absolute inset-0 rounded-[2.2rem] border border-electric/40 shadow-glow-lg" />
          <div className="absolute -inset-2 rounded-[2.6rem] border border-white/5" />
          <img
            src="/profile.jpg"
            alt="Ayush Gaire"
            onError={() => setImgOk(false)}
            className="h-full w-full rounded-[2rem] object-cover"
          />
          <a
            href={SOCIALS.codyza}
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-4 -right-4 grid h-16 w-16 place-items-center rounded-2xl glass-strong shadow-glow"
            aria-label="Visit Codyza"
          >
            <span className="font-display text-2xl font-bold text-gradient">
              C
            </span>
          </a>
        </div>
      ) : (
        <a
          href={SOCIALS.codyza}
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Codyza"
          className="block"
        >
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative grid h-44 w-44 place-items-center md:h-56 md:w-56"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-electric/30 bg-glass-grad backdrop-blur-2xl shadow-glow-lg" />
            <div className="absolute inset-3 rounded-[1.6rem] border border-white/10" />
            <span className="relative font-display text-7xl font-bold text-gradient md:text-8xl">
              C
            </span>
            <span className="absolute -bottom-2 font-mono text-[10px] tracking-[0.45em] text-electric-bright">
              CODYZA
            </span>
          </motion.div>
        </a>
      )}
    </motion.div>
  )
}

const socialList = [
  { Icon: Linkedin, url: SOCIALS.linkedin, label: 'LinkedIn' },
  { Icon: Github, url: SOCIALS.github, label: 'GitHub' },
  { Icon: Instagram, url: SOCIALS.instagram, label: 'Instagram' },
  { Icon: Facebook, url: SOCIALS.facebook, label: 'Facebook' },
]

export default function Hero() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* floating socials */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
        className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 xl:flex"
      >
        {socialList.map(({ Icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="group grid h-11 w-11 place-items-center rounded-xl glass glass-hover"
          >
            <Icon
              size={18}
              className="text-white/55 transition-colors group-hover:text-electric-bright"
            />
          </a>
        ))}
        <div className="mx-auto h-20 w-px bg-gradient-to-b from-electric/50 to-transparent" />
      </motion.div>

      <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.a
            href={SOCIALS.codyza}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="group mb-6 inline-flex items-center gap-2 rounded-full glass glass-hover px-4 py-1.5 font-mono text-xs tracking-widest text-electric-bright"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-electric" />
            FOUNDER & CEO OF CODYZA
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.3 }}
            className="font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl"
          >
            <span className="text-gradient">Ayush</span>
            <br />
            <span className="text-white">Gaire</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 2.6 }}
            className="mt-6 font-mono text-xl md:text-2xl"
          >
            <Typewriter />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/55 md:text-lg"
          >
            Crafting elegant, high-performance digital products across three
            continents. Founder & CEO of{' '}
            <a
              href={SOCIALS.codyza}
              target="_blank"
              rel="noreferrer"
              className="text-electric-bright underline decoration-electric/40 underline-offset-4 transition-colors hover:text-white"
            >
              Codyza
            </a>
            . Computer Science at SMSU.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => go('projects')}
              className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-electric px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              <FolderGit2 size={17} />
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl glass glass-hover px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              <Download size={17} />
              Download Resume
            </a>
            <button
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-electric/40 px-6 py-3.5 text-sm font-semibold text-electric-bright transition-all hover:bg-electric/10 hover:scale-[1.03]"
            >
              <Mail size={17} />
              Contact Me
            </button>
          </motion.div>
        </div>

        <ProfileVisual />
      </div>

      <motion.button
        onClick={() => go('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 3.2, duration: 1 },
          y: { repeat: Infinity, duration: 2 },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <ArrowDown size={16} className="text-electric-bright" />
      </motion.button>
    </section>
  )
}
