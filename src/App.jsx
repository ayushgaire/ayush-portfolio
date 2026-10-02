import { Suspense, lazy, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'

const Recognition = lazy(() => import('./components/Recognition'))
const ExperienceSummary = lazy(() => import('./components/ExperienceSummary'))
const AboutSummary = lazy(() => import('./components/AboutSummary'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const CaseStudy = lazy(() => import('./pages/projects/CaseStudy'))
const EarlierWorkPage = lazy(() => import('./pages/EarlierWorkPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const ResumePage = lazy(() => import('./pages/ResumePage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// ─────────────────────────────────────────────
// HOME
// ─────────────────────────────────────────────

function Home() {
  useEffect(() => {
    document.title =
      'Ayush Gaire | Software Engineer & Computer Science Student'

    const meta = document.querySelector('meta[name="description"]')

    if (meta) {
      meta.setAttribute(
        'content',
        'Ayush Gaire is a Computer Science student and software engineer in Marshall, Minnesota, building full-stack systems, data-driven applications, and public-service technology.'
      )
    }
  }, [])

  return (
    <main id="home">
      <Hero />

      <SelectedWork />

      <Suspense fallback={null}>
        <Recognition />
        <ExperienceSummary />
        <AboutSummary />
        <Contact />
      </Suspense>
    </main>
  )
}

// ─────────────────────────────────────────────
// CONTACT PAGE
// ─────────────────────────────────────────────

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact Ayush Gaire'

    const meta = document.querySelector('meta[name="description"]')

    if (meta) {
      meta.setAttribute(
        'content',
        'Contact Ayush Gaire for software engineering opportunities, collaborations, or a 30-minute call.'
      )
    }
  }, [])

  return (
    <main className="min-h-screen pt-24">
      <Suspense fallback={<PageFallback />}>
        <Contact />
      </Suspense>
    </main>
  )
}

// ─────────────────────────────────────────────
// SCROLL TO TOP
// ─────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-ink focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Projects */}
        <Route
          path="/projects"
          element={
            <Suspense fallback={<PageFallback />}>
              <ProjectsPage />
            </Suspense>
          }
        />

        <Route
          path="/projects/:slug"
          element={
            <Suspense fallback={<PageFallback />}>
              <CaseStudy />
            </Suspense>
          }
        />

        {/* Experience */}
        <Route
          path="/experience"
          element={
            <Suspense fallback={<PageFallback />}>
              <ExperiencePage />
            </Suspense>
          }
        />

        {/* About */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <AboutPage />
            </Suspense>
          }
        />

        {/* Resume */}
        <Route
          path="/resume"
          element={
            <Suspense fallback={<PageFallback />}>
              <ResumePage />
            </Suspense>
          }
        />

        {/* Contact */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Earlier Work */}
        <Route
          path="/earlier-work"
          element={
            <Suspense fallback={<PageFallback />}>
              <EarlierWorkPage />
            </Suspense>
          }
        />

        {/* Legacy route */}
        <Route
          path="/client-work"
          element={<Navigate to="/earlier-work" replace />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

// ─────────────────────────────────────────────
// PAGE LOADING FALLBACK
// ─────────────────────────────────────────────

function PageFallback() {
  return <div className="min-h-[50vh]" aria-hidden="true" />
}