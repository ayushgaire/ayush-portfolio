import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const activate = (link) => {
    if (link.to) {
      if (location.pathname !== link.to) navigate(link.to)
      else window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    if (link.scroll) {
      if (!onHome) {
        navigate('/')
        setTimeout(() => {
          document.getElementById(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
        }, 240)
      } else {
        document.getElementById(link.scroll)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const isActive = (link) => (link.to ? location.pathname === link.to : false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || !onHome ? 'nav-surface' : ''
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 py-4"
        aria-label="Primary"
      >
        <Link
          to="/"
          onClick={(e) => {
            if (onHome) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className="font-bold tracking-tight text-ink text-base sm:text-lg hover:text-ink-2 transition-colors"
          aria-label="Home — Ayush Gaire"
        >
          AYUSH GAIRE
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <button
                onClick={() => activate(l)}
                className={`text-sm font-medium transition-colors ${
                  isActive(l)
                    ? 'text-ink underline underline-offset-[6px] decoration-1'
                    : 'text-ink-2 hover:text-ink'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-5 mb-4 overflow-hidden rounded-lg border border-border bg-surface">
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  onClick={() => activate(l)}
                  className={`w-full text-left rounded-md px-4 py-3 text-base font-medium transition-colors ${
                    isActive(l)
                      ? 'bg-bg-deep text-ink'
                      : 'text-ink-2 hover:bg-bg-deep hover:text-ink'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
