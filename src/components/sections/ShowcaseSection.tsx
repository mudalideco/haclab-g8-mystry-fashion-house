'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const galleryImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
  'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
]

export function ShowcaseSection() {
  return (
    <section id="gallery" className="py-24 bg-[var(--surface)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-4">
            Fashion Showcase
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            Recent creations from our Makindye atelier
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={img}
                alt={`Fashion design ${i + 1}`}
                width={400}
                height={400}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}