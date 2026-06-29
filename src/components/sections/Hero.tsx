'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SplitReveal } from '@/components/primitives/SplitReveal'
import { MagneticButton } from '@/components/primitives/MagneticButton'
import { ParallaxLayer } from '@/components/primitives/ParallaxLayer'
import { GrainOverlay } from '@/components/primitives/GrainOverlay'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--background)]">
      <GrainOverlay opacity={0.035} />

      {/* Background layer with parallax */}
      <div className="absolute inset-0 z-0">
        <ParallaxLayer depth={0.2}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop"
            alt="Fashion atelier workspace with fabrics and sewing tools"
            fill
            className="object-cover opacity-20"
            priority
          />
        </ParallaxLayer>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[var(--foreground)] mb-6 leading-tight">
            <SplitReveal type="words" stagger={0.08} duration={1.2} ease="power4.out">
              G8 Mystry Fashion House
            </SplitReveal>
          </h1>

          <p className="text-xl md:text-2xl text-[var(--muted)] mb-10 font-body max-w-2xl mx-auto">
            Your vision, perfectly crafted. From custom tailoring to bridal couture,
            we create garments that celebrate your unique style in the heart of Kampala.
          </p>

          <MagneticButton>
            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--primary)] px-10 text-base font-medium text-white shadow-2xl transition-all hover:bg-[var(--primary)]/90 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
            >
              Book Your Consultation
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-[var(--surface)]/80 backdrop-blur-sm border-t border-[var(--muted)] py-6">
        <div className="container mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <span className="text-3xl font-serif font-bold text-[var(--primary)] block">1000+</span>
            <span className="text-sm text-[var(--muted)] uppercase tracking-wider">Garments Crafted</span>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-[var(--primary)] block">8+</span>
            <span className="text-sm text-[var(--muted)] uppercase tracking-wider">Years Experience</span>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-[var(--primary)] block">4.9★</span>
            <span className="text-sm text-[var(--muted)] uppercase tracking-wider">Client Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}