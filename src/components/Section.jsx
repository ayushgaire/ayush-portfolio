import { motion } from 'framer-motion'

export function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl px-6 py-28 md:py-36 ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionHeader({ index, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16 md:mb-20"
    >
      <span className="section-num font-semibold">{index}</span>
      <span className="section-rule" />
      <h2 className="font-display text-6xl font-semibold tracking-tight text-ink md:text-8xl leading-[0.95]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2 md:text-xl font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] },
  }),
}
