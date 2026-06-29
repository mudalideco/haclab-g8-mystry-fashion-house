'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { Ruler, Scissors, Palette, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: Ruler,
    title: 'Consultation',
    description: 'We discuss your vision, style preferences, and measurements',
  },
  {
    icon: Palette,
    title: 'Design & Fabric',
    description: 'Select fabrics and finalize design sketches together',
  },
  {
    icon: Scissors,
    title: 'Crafting',
    description: 'Our artisans create your garment with precision',
  },
  {
    icon: PackageCheck,
    title: 'Final Fitting',
    description: 'Perfect adjustments and delivery ready for you',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[var(--background)]">
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
              Our Process
            </SplitReveal>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            From first stitch to final fit
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-[var(--muted)] hidden lg:block" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-[var(--primary)]/10 border-2 border-[var(--primary)]/30 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-[var(--primary)]" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-[var(--foreground)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}