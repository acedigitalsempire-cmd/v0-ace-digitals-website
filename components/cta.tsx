"use client"

import { getHomepageWhatsAppLink } from "@/lib/whatsapp"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center animate-slide-up">
        <h2 className="text-5xl md:text-6xl font-black mb-6 animate-glow">Ready to Run the Digital Streets with Us?</h2>
        <p className="text-xl text-gray-300 mb-12">Let's build something extraordinary together</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={getHomepageWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-black font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
          >
            Chat on WhatsApp
          </a>
          <a
            href={getHomepageWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  )
}
