import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ShowcaseSection } from '@/components/sections/ShowcaseSection'
import { WeddingSection } from '@/components/sections/WeddingSection'
import { AfricanWearSection } from '@/components/sections/AfricanWearSection'
import { ProcessSection } from '@/components/sections/ProcessSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { LocationSection } from '@/components/sections/LocationSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { GuaranteeSection } from '@/components/sections/GuaranteeSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Section 3 */}
        <ServicesSection />
        {/* Section 4 */}
        <ShowcaseSection />
        {/* Section 5 */}
        <WeddingSection />
        {/* Section 6 */}
        <AfricanWearSection />
        {/* Section 7 */}
        <ProcessSection />
        {/* Section 8 */}
        <TestimonialsSection />
        {/* Section 9 */}
        <StatsSection />
        {/* Section 10 */}
        <LocationSection />
        {/* Section 11 */}
        <AboutSection />
        {/* Section 12 */}
        <FAQSection />
        {/* Section 13 */}
        <GuaranteeSection />
        {/* Section 14 */}
        <PricingSection />
        {/* Section 15 */}
        <ContactSection />
        {/* Section 16 - Footer */}
        <Footer />
      </main>
    </>
  )
}