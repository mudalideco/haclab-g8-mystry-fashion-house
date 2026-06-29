'use client'
import { motion } from 'framer-motion'
import { Shirt, Crown, Users, Scissors, Baby, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Shirt,
    title: 'Custom Tailoring',
    description: 'Precision-fitted garments crafted to your exact measurements. From boardroom to weekend elegance.',
  },
  {
    icon: Crown,
    title: 'Wedding & Gown Design',
    description: 'Bridal couture that tells your love story. Custom gowns, bridesmaid dresses, and groom styling.',
  },
  {
    icon: Users,
    title: 'Menswear Collection',
    description: 'Sharp suits, traditional wear, and modern mens fashion tailored for the Ugandan gentleman.',
  },
  {
    icon: Scissors,
    title: 'Alterations & Repairs',
    description: 'Perfect fit guaranteed. We alter, repair, and refresh your existing wardrobe.',
  },
  {
    icon: Baby,
    title: 'Baby & Kids Wear',
    description: 'Adorable custom outfits for your little ones. Special occasions or everyday charm.',
  },
  {
    icon: GraduationCap,
    title: 'School Uniforms',
    description: 'Durable, comfortable uniforms for educational institutions across Kampala.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[var(--background)]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--foreground)] mb-4">
            Our Services
          </h2>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto">
            From concept to creation, we offer comprehensive fashion solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="bg-[var(--surface)] border border-[var(--muted)] rounded-xl p-6 hover:border-[var(--primary)]/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--primary)]/20 transition-colors">
                <service.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[var(--foreground)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--muted)]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}