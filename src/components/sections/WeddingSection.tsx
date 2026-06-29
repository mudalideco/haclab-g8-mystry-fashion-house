'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import Link from 'next/link'

export function WeddingSection() {
  return (
    <section className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-6">
              <SplitReveal type="words" stagger={0.06} duration={1}>
                Bridal Couture & Wedding Design
              </SplitReveal>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-6">
              Your special day deserves a dress that tells your story. Our wedding gowns blend
              contemporary elegance with traditional African aesthetics, creating unforgettable
              moments for brides across Uganda.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Custom bridal gowns & reception dresses
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Bridesmaid & groomsman styling packages
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Fabric selection & fittings included
              </li>
            </ul>
            <MagneticButton>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--primary)] px-8 font-medium text-white">
                Plan Your Wedding Look
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20 flex items-center justify-center">
                <span className="text-8xl text-[var(--primary)]/30">✧</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}