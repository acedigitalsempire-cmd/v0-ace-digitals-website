"use client"

import { useState, useEffect } from "react"

const testimonialsData = [
  {
    name: "Oluwaseun A.",
    country: "Nigeria",
    feedback: "Ace Digitals built my business website in 7 days and I've doubled my clients!",
  },
  {
    name: "Tunde O.",
    country: "Nigeria",
    feedback: "They helped me monetize my Instagram with over 10,000 real followers. 100% legit!",
  },
  {
    name: "Amanda K.",
    country: "Kenya",
    feedback: "I got 5,000 YouTube subscribers in less than a week. Amazing results!",
  },
  {
    name: "Sarah L.",
    country: "Ghana",
    feedback: "My CV revamp gave me interviews within 3 days. They know their stuff.",
  },
  {
    name: "Victor O.",
    country: "Nigeria",
    feedback: "Ace Digitals automated my sales process using N8N — now my business runs itself.",
  },
  {
    name: "Blessing A.",
    country: "Nigeria",
    feedback: "Their website design is elite. Modern, bold, and full of life.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            What <span className="text-brand-gold">Our Clients</span> Say
          </h2>
        </div>

        <div
          className="relative bg-card border border-brand-gold/20 rounded-xl p-8 md:p-12 min-h-64 flex flex-col justify-between hover:border-brand-gold/50 transition-colors duration-300"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
              "{testimonialsData[currentIndex].feedback}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center text-foreground font-bold">
                {testimonialsData[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-brand-gold-soft">{testimonialsData[currentIndex].name}</p>
                <p className="text-gray-400">{testimonialsData[currentIndex].country}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 justify-center">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-brand-gold w-8" : "bg-gray-600 hover:bg-brand-gold/60"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
