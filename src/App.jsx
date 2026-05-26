import { Suspense, lazy } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
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
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="grain" />
      <Cursor />
      <Loader />

      <motion.div
        style={{ scaleX }}
        className="scroll-bar fixed inset-x-0 top-0 z-[60] h-[2px] origin-left"
      />

      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
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
