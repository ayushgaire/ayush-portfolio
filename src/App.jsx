import { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Snapshot from './components/Snapshot'
import ProjectsSummary from './components/ProjectsSummary'
import ClientWorkSummary from './components/ClientWorkSummary'

const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ClientWorkPage = lazy(() => import('./pages/ClientWorkPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))

// Homepage
// Hero → Snapshot → Projects → Client Work → Contact
function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Hero />
      <Snapshot />
      <ProjectsSummary />
      <ClientWorkSummary />
      <Suspense fallback={<div className="h-screen" />}>
        <Contact />
      </Suspense>
    </motion.main>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback={<div className="h-screen" />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <Suspense fallback={<div className="h-screen" />}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/client-work"
          element={
            <Suspense fallback={<div className="h-screen" />}>
              <ClientWorkPage />
            </Suspense>
          }
        />
        <Route
          path="/experience"
          element={
            <Suspense fallback={<div className="h-screen" />}>
              <ExperiencePage />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<div className="h-screen" />}>
              <BlogPage />
            </Suspense>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <BrowserRouter>
      <div className="grain" />
      <Cursor />
      <Loader />

      <motion.div
        style={{ scaleX }}
        className="scroll-bar fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      />

      <Navbar />

      <AnimatedRoutes />

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}
