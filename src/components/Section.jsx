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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16"
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.4em] text-electric">
          {index}
        </span>
        <span className="h-px flex-1 max-w-[80px] reveal-line" />
      </div>
      <h2 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
}
