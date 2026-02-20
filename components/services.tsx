"use client"

import { useState } from "react"

const servicesData = [
  {
    title: "Website Development",
    description: "Modern, fast, and SEO-optimized websites built to convert and dominate search results.",
    icon: "🌐",
  },
  {
    title: "Google My Business Setup",
    description: "Rank your business locally and attract customers on Google Maps and Search.",
    icon: "📍",
  },
  {
    title: "Social Media Marketing",
    description: "Grow your brand organically and through targeted paid campaigns.",
    icon: "📱",
  },
  {
    title: "Social Media Monetization",
    description:
      "Get real followers, likes, comments, views, and watch hours across Instagram, TikTok, YouTube, and more.",
    icon: "💰",
  },
  {
    title: "AI Automation (N8N, Make.com)",
    description: "Let automation run your business while you sleep. We connect your tools with AI flows.",
    icon: "⚙️",
  },
  {
    title: "SAAS Tools Development",
    description: "We help you build custom AI-powered tools that solve real problems and scale globally.",
    icon: "🛠️",
  },
  {
    title: "CV Revamp Service",
    description: "Professional and ATS-friendly CVs that help you get hired faster.",
    icon: "📄",
  },
  {
    title: "Tutorials & Courses",
    description: "Master digital skills with our comprehensive online courses and tutorials.",
    icon: "📚",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span className="text-brand-primary animate-glow">Our Core</span> <span className="text-brand-gold">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to dominate the digital space</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 rounded-xl border border-brand-primary/20 bg-card hover:border-brand-gold/60 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-lg hover:shadow-brand-gold/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-gold/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-gold group-hover:text-brand-gold-soft transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{service.description}</p>
              </div>

              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
