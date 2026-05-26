import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-5xl font-light tracking-wide text-ink"
        >
          Ayush<span className="text-gold italic">.</span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 origin-left bg-gold"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 1.4, delay: 0.4, repeat: Infinity }}
          className="label text-ink-3"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  )
}
