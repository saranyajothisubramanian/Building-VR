"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[#3A5199] text-white py-24 text-center">
      <h1 className="text-5xl font-bold mb-4">Saranya JS</h1>
      <p className="text-2xl mb-8">Backend Developer & Designer</p>
      <Button
        size="lg"
        variant="secondary"
        onClick={() => {
          document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Contact Me
      </Button>
    </section>
  )
}
