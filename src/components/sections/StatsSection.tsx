'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { value: 1000, label: 'Garments Crafted', suffix: '+' },
  { value: 8, label: 'Years Experience' },
  { value: 4.9, label: 'Client Rating', suffix: '★', decimals: 1 },
  { value: 1600, label: 'Facebook Followers', suffix: '+' },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-[var(--primary)]/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            >
              <span className="text-4xl md:text-5xl font-serif font-bold text-[var(--primary)] block mb-2">
                <CountUp
                  end={stat.value}
                  duration={2}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                />
              </span>
              <span className="text-sm text-[var(--muted)] uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}