'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-6">
            Ready to Create Something Beautiful?
          </h2>
          <p className="text-xl text-[var(--muted)] mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation. Let&apos;s bring your fashion vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="https://wa.me/256755101840"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--primary)] px-10 font-medium text-white shadow-2xl hover:bg-[var(--primary)]/90 transition-colors"
            >
              WhatsApp: +256 755 101 840
            </Link>
            <Link
              href="tel:+256755101840"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--accent)] px-10 font-medium text-[var(--background)] hover:bg-[var(--accent)]/90 transition-colors"
            >
              Call Us Directly
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}