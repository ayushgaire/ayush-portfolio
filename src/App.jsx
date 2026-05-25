import { Suspense, lazy } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Particles from './components/Particles'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfessionalWork from './components/ProfessionalWork'

const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Experience = lazy(() => import('./components/Experience'))
const Leadership = lazy(() => import('./components/Leadership'))
const Achievements = lazy(() => import('./components/Achievements'))
const Blog = lazy(() => import('./components/Blog'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="mesh-bg" />
      <div className="grid-overlay" />
      <div className="grain" />
      <Particles />
      <Cursor />
      <Loader />

      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-electric-grad shadow-glow"
      />

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <About />
          <Education />
          <Skills />
          <Projects />
          <ProfessionalWork />
          <Experience />
          <Leadership />
          <Achievements />
          <Blog />
          <Contact />
          <Footer />
        </Suspense>
      </motion.main>
      
    </>
  )
}
