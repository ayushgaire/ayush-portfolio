import { motion } from 'framer-motion'
import { Clock, Calendar, ArrowUpRight } from 'lucide-react'
import { Section, SectionHeader } from './Section'
import { SOCIALS } from '../data/content'

const ARTICLES = [
  {
    title: 'Critical cPanel Security Flaw Puts Millions of Websites at Risk',
    category: 'Cybersecurity',
    date: 'May 1, 2026',
    readTime: '2 min read',
    link: 'https://medium.com/@aayushgairay/critical-cpanel-security-flaw-puts-millions-of-websites-at-risk-89dc1fdc72e9',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Is Nepal Really in 2083? The Doraemon Era Myth and the Reality of Time',
    category: 'Culture & Society',
    date: 'Apr 13, 2026',
    readTime: '4 min read',
    link: 'https://medium.com/@aayushgairay/is-nepal-really-in-2083-the-doraemon-era-myth-and-the-reality-of-time-2dcda627b9ae',
    image:
      'https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Will Artificial Intelligence Take Computer Science Jobs?',
    category: 'Artificial Intelligence',
    date: 'Apr 1, 2026',
    readTime: '3 min read',
    link: 'https://medium.com/@aayushgairay/will-artificial-intelligence-take-computer-science-jobs-e5c9f57a0070',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80',
  },
]

export default function Blog() {
  return (
    <Section id="blog" className="border-t border-border">
      <SectionHeader
        index="08."
        title="Writing"
        subtitle="Thoughts on cybersecurity, culture, and the future of technology — published on Medium."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {ARTICLES.map((a, i) => (
          <motion.a
            key={a.title}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group card card-hover flex flex-col overflow-hidden"
          >
            {/* Cover image */}
            <div className="h-44 overflow-hidden bg-surface">
              <img
                src={a.image}
                alt={a.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            <div className="flex flex-1 flex-col p-6">
              {/* Category */}
              <span className="label text-gold font-bold mb-3">{a.category}</span>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-ink leading-snug mb-4 group-hover:text-gold transition-colors duration-300">
                {a.title}
              </h3>

              {/* Meta */}
              <div className="mt-auto flex items-center gap-4 text-xs text-ink-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} />
                  {a.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} />
                  {a.readTime}
                </span>
              </div>

              {/* Read link */}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-ink-2 group-hover:text-gold transition-colors duration-300">
                Read Article
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Medium link */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 text-center"
      >
        <a
          href={SOCIALS.medium}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost inline-flex"
        >
          Read all articles on Medium
          <ArrowUpRight size={14} />
        </a>
      </motion.div>
    </Section>
  )
}
