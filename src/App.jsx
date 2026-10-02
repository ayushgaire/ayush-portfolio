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

// Homepage: Hero → Selected Work → Recognition → Experience → About → Contact
function Home() {
  useEffect(() => {
    document.title = 'Ayush Gaire | Software Engineer & Computer Science Student'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Ayush Gaire is a Computer Science student and software engineer in Marshall, Minnesota, building full-stack systems, data-driven applications, and public-service technology.'
      )
    }
  }, [])

  return (
    <main>
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

// Scroll to top on route change so case-study navigation doesn't preserve scroll.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

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
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Suspense fallback={<PageFallback />}><ProjectsPage /></Suspense>} />
        <Route path="/projects/:slug" element={<Suspense fallback={<PageFallback />}><CaseStudy /></Suspense>} />
        <Route path="/experience" element={<Suspense fallback={<PageFallback />}><ExperiencePage /></Suspense>} />
        <Route path="/about" element={<Suspense fallback={<PageFallback />}><AboutPage /></Suspense>} />
        <Route path="/resume" element={<Suspense fallback={<PageFallback />}><ResumePage /></Suspense>} />
        <Route path="/earlier-work" element={<Suspense fallback={<PageFallback />}><EarlierWorkPage /></Suspense>} />
        {/* Redirect legacy client-work URL to earlier-work */}
        <Route path="/client-work" element={<Navigate to="/earlier-work" replace />} />
        <Route path="*" element={<Suspense fallback={<PageFallback />}><NotFound /></Suspense>} />
      </Routes>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

function PageFallback() {
  return <div className="min-h-[50vh]" aria-hidden="true" />
}
