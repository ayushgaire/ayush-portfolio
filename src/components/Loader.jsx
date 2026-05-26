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
          className="text-6xl font-extrabold tracking-tight text-ink"
        >
          Ayush<span className="text-gold">.</span>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 w-32 origin-left bg-gold rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          transition={{ duration: 1.4, delay: 0.4, repeat: Infinity }}
          className="label text-gold"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  )
}
