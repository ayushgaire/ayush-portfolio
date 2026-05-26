import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-surface shadow-soft' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => go('home')}
          className="font-display text-xl font-light tracking-tight text-ink"
        >
          Ayush<span className="text-gold italic">.</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative px-3 py-1.5 text-sm transition-colors duration-200 ${
                  active === l.id
                    ? 'text-ink font-medium'
                    : 'text-ink-3 hover:text-ink-2'
                }`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-md bg-surface border border-border"
                    transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-ink-2 hover:text-ink transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 overflow-hidden rounded-2xl border border-border bg-card shadow-soft lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1 p-3">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={`rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                    active === l.id
                      ? 'bg-surface text-ink font-medium border border-border'
                      : 'text-ink-2 hover:bg-surface hover:text-ink'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
