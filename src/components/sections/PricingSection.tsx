'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import Link from 'next/link'

const packages = [
  {
    name: 'Basic Fit',
    price: '150,000 UGX',
    features: ['Standard alterations', 'One fitting', '7-day turnaround'],
  },
  {
    name: 'Premium Bespoke',
    price: '350,000 UGX',
    features: ['Custom measurements', 'Two fittings', 'Premium fabric selection', '14-day turnaround'],
    popular: true,
  },
  {
    name: 'Wedding Collection',
    price: 'From 800,000 UGX',
    features: ['Full design consultation', 'Three fittings', 'Exclusive fabrics', '3-4 weeks'],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[var(--surface)]">
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
              Pricing Packages
            </SplitReveal>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Transparent pricing for all your tailoring needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className={`bg-[var(--background)] rounded-xl p-8 text-center ${pkg.popular ? 'ring-2 ring-[var(--primary)]' : ''}`}
            >
              {pkg.popular && (
                <span className="inline-block px-3 py-1 bg-[var(--primary)] text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-serif font-bold text-[var(--foreground)] mb-2">
                {pkg.name}
              </h3>
              <p className="text-3xl font-bold text-[var(--primary)] mb-6">{pkg.price}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map(f => (
                  <li key={f} className="text-sm text-[var(--muted)]">&bull; {f}</li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className={`inline-flex h-12 items-center justify-center rounded-full px-8 font-medium transition-colors ${pkg.popular ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--background)]'}`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}