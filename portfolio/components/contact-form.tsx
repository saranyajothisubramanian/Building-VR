import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <section id="contact-section" className="bg-[#3A5199] text-white py-24">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <Input placeholder="Your Name" className="bg-white text-black" />
          <Input placeholder="Your Email" type="email" className="bg-white text-black" />
          <Textarea placeholder="Your Message" className="bg-white text-black" />
          <Button type="submit" size="lg" variant="secondary" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
