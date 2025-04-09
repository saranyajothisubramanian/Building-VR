import { HeroSection } from "@/components/hero-section"
import { Projects } from "@/components/projects"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <Projects />
      <ContactForm />
    </div>
  )
}
