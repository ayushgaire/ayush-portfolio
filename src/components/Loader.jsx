import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-ink"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="text-center">
        <motion.div
          className="relative mx-auto mb-8 h-24 w-24"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 360 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 rounded-2xl border border-electric/40 bg-glass-grad backdrop-blur-xl shadow-glow flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-gradient">C</span>
          </div>
        </motion.div>
        <motion.div
          className="font-mono text-xs tracking-[0.5em] text-electric-bright uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          Codyza
        </motion.div>
      </div>
    </motion.div>
  )
}
