'use client'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export function LocationSection() {
  return (
    <section id="location" className="py-24 bg-[var(--background)]">
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
              Visit Our Atelier
            </SplitReveal>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-[var(--foreground)] mb-1">Address</h3>
                <p className="text-[var(--muted)]">Makindye, Kampala, Uganda</p>
                <p className="text-sm text-[var(--muted)] mt-1">Opposite Makindye Military Hospital</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-[var(--foreground)] mb-1">Opening Hours</h3>
                <p className="text-[var(--muted)]">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-[var(--muted)]">Sat: 9:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[var(--primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif font-semibold text-[var(--foreground)] mb-1">Contact</h3>
                <Link
                  href="tel:+256755101840"
                  className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors block"
                >
                  +256 755 101 840
                </Link>
                <Link
                  href="https://wa.me/256755101840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--primary)] hover:underline mt-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-[var(--surface)] border border-[var(--muted)] rounded-xl p-6"
          >
            <h3 className="font-serif font-semibold text-[var(--foreground)] mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--muted)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--muted)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <textarea
                placeholder="What can we help you with?"
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-[var(--background)] border border-[var(--muted)] text-[var(--foreground)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
              />
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary)]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}