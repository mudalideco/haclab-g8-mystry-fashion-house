'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "G8 Mystry crafted my wedding gown perfectly. The attention to detail was incredible!",
    author: "Sarah K.",
    role: "Bride, Kampala"
  },
  {
    quote: "Best tailoring in Makindye. My suits have never fit better.",
    author: "James M.",
    role: "Business Professional"
  },
  {
    quote: "African wear that truly celebrates our culture. Will definitely return!",
    author: "Grace N.",
    role: "Cultural Event"
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[var(--surface)]">
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
              What Our Clients Say
            </SplitReveal>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--background)] border border-[var(--muted)] rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[var(--primary)]/20" />
              <p className="text-[var(--foreground)] mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif font-semibold text-[var(--primary)]">
                  {t.author}
                </p>
                <p className="text-sm text-[var(--muted)]">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}