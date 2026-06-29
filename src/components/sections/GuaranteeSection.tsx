'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { ShieldCheck, RefreshCw, Clock, MessageCircle } from 'lucide-react'

const guarantees = [
  {
    icon: ShieldCheck,
    title: 'Perfect Fit Guarantee',
    description: 'Free adjustments until you love how it fits',
  },
  {
    icon: RefreshCw,
    title: 'Satisfaction Promise',
    description: 'Full refund or remake if not delighted',
  },
  {
    icon: Clock,
    title: 'On-Time Commitment',
    description: 'We meet every deadline or work is free',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description: 'Talk directly with your tailor anytime',
  },
]

export function GuaranteeSection() {
  return (
    <section id="guarantee" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-4">
            <SplitReveal type="words" stagger={0.05} duration={1}>
              Our Promise
            </SplitReveal>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Your trust is earned, not given
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="text-center bg-[var(--surface)] rounded-xl p-6"
            >
              <g.icon className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-[var(--foreground)] mb-2">
                {g.title}
              </h3>
              <p className="text-sm text-[var(--muted)]">{g.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}