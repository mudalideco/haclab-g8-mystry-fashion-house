'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Heart, Award, Users, Clock } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Crafted with Love', description: 'Every stitch carries passion and dedication' },
  { icon: Award, title: 'Quality First', description: 'Premium fabrics and meticulous attention to detail' },
  { icon: Users, title: 'Personal Service', description: 'One-on-one consultations with our master tailors' },
  { icon: Clock, title: 'On Time Delivery', description: 'We respect your schedule and deadlines' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[var(--background)]">
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
              Our Story
            </SplitReveal>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Founded by Grace, G8 Mystry blends traditional African craftsmanship with contemporary style
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-[var(--foreground)] mb-4">
              Starting from a small workshop in Makindye, Grace built G8 Mystry with a vision to create 
              fashion that celebrates Ugandan heritage while embracing modern elegance. Eight years later, 
              we&apos;ve dressed over a thousand clients for their most precious moments.
            </p>
            <p className="text-[var(--muted)]">
              Our master tailors combine decades of experience with contemporary techniques, ensuring 
              every garment tells your unique story. From the first sketch to the final fitting, 
              we&apos;re with you every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                className="bg-[var(--surface)] rounded-lg p-4 text-center"
              >
                <v.icon className="w-8 h-8 text-[var(--primary)] mx-auto mb-2" />
                <h3 className="font-serif font-semibold text-[var(--foreground)] text-sm mb-1">
                  {v.title}
                </h3>
                <p className="text-xs text-[var(--muted)]">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}