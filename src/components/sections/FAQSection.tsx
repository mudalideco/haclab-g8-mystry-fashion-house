'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does custom tailoring take?',
    answer: 'Most garments are completed within 7-14 days. Wedding gowns may take 3-4 weeks for the full process including fittings.',
  },
  {
    question: 'Do you provide fabric options?',
    answer: 'Yes! We source premium fabrics locally and internationally. You can choose from our collection or bring your own material.',
  },
  {
    question: 'What is your alteration policy?',
    answer: 'We provide one free adjustment within 14 days of delivery. Additional alterations are charged at reasonable rates.',
  },
  {
    question: 'Do you do menswear?',
    answer: 'Absolutely! From suits and shirts to traditional wear, we craft garments for all genders and occasions.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[var(--surface)]">
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
              Frequently Asked
            </SplitReveal>
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Answers to common questions about our tailoring services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--background)] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <span className="font-serif font-semibold text-[var(--foreground)]">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--primary)] transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-[var(--muted)]">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}