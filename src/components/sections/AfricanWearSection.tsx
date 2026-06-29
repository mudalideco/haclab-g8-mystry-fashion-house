'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import Link from 'next/link'

export function AfricanWearSection() {
  return (
    <section id="african-wear" className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-[var(--accent)]/30 to-[var(--primary)]/20 flex items-center justify-center">
                <span className="text-8xl text-[var(--accent)]/40">✦</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-6">
              <SplitReveal type="words" stagger={0.06} duration={1}>
                African Wear Collection
              </SplitReveal>
            </h2>
            <p className="text-lg text-[var(--muted)] mb-6">
              Celebrating heritage through fashion. Our Afrocentric designs blend traditional
              Ugandan and African textiles with contemporary silhouettes, perfect for
              cultural celebrations and everyday pride.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                Modern African prints & traditional gomesi
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                Custom kanzus & cultural attire
              </li>
              <li className="flex items-center gap-3 text-[var(--foreground)]">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                Traditional fabrics sourced locally
              </li>
            </ul>
            <MagneticButton>
              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--accent)] px-8 font-medium text-[var(--background)]">
                Design Your Cultural Look
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}