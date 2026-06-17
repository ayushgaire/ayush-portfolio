import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (link) => {
    setOpen(false)
    if (link.to) {
      if (location.pathname !== link.to) navigate(link.to)
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (link.scroll) {
      if (!onHome) {
        navigate('/')
        setTimeout(() => {
          document
            .getElementById(link.scroll)
            ?.scrollIntoView({ behavior: 'smooth' })
        }, 320)
      } else {
        document
          .getElementById(link.scroll)
          ?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const goHome = () => {
    setOpen(false)
    if (!onHome) {
      navigate('/')
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 280)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isActive = (link) => {
    if (link.to) return location.pathname === link.to
    return false
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !onHome ? 'nav-surface shadow-navbar' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 py-4 sm:py-5">
        <button
          onClick={goHome}
          className="group inline-flex items-center gap-3 hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-ink text-bg font-extrabold text-base tracking-tight ring-2 ring-gold/40 group-hover:ring-gold transition-all">
            AG
          </span>
          <span className="hidden sm:inline text-xl font-extrabold tracking-tight text-ink">
            Ayush Gaire<span className="text-gold">.</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => go(l)}
                className={`relative px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive(l)
                    ? 'text-ink'
                    : 'text-ink-3 hover:text-ink'
                }`}
              >
                {l.label}
                {isActive(l) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-card border-2 border-gold"
                    transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                  />
                )}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go({ scroll: 'contact' })}
              className="ml-2 inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2.5 text-sm font-bold text-bg hover:bg-gold transition-colors duration-200"
            >
              <Mail size={14} strokeWidth={2.5} />
              Get in Touch
            </button>
          </li>
        </ul>

        <button
          className="lg:hidden text-ink hover:text-gold transition-colors p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mb-4 overflow-hidden rounded-2xl border-2 border-border bg-card shadow-soft lg:hidden"
          >
            <div className="grid grid-cols-2 gap-1 p-3">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.label}
                  onClick={() => go(l)}
                  className={`rounded-lg px-4 py-3.5 text-left text-base font-semibold transition-colors ${
                    isActive(l)
                      ? 'bg-gold-pale text-ink border-2 border-gold'
                      : 'text-ink-2 hover:bg-surface hover:text-ink'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <div className="p-3 pt-0">
              <button
                onClick={() => go({ scroll: 'contact' })}
                className="w-full rounded-lg bg-ink py-3.5 text-base font-bold text-bg flex items-center justify-center gap-2"
              >
                <Mail size={15} strokeWidth={2.5} />
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
