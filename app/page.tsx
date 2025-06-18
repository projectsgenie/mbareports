import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { SampleReportsSection } from "@/components/sample-reports-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FeaturedBlogSection } from "@/components/featured-blog-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <SampleReportsSection />
        <TestimonialsSection />
        <FeaturedBlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
