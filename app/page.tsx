import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AwardsSection } from "@/components/awards-section"
import { ProcessSection } from "@/components/process-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <CapabilitiesSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
