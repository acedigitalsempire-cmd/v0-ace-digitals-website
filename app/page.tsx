"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Testimonials from "@/components/testimonials"
import CTA from "@/components/cta"
import FloatingNotifications from "@/components/floating-notifications"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="bg-background text-foreground overflow-hidden pt-16">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <CTA />
      <FloatingNotifications />
    </main>
  )
}
