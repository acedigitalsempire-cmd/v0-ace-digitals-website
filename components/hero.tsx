"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let animationId: number

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(5, 11, 24, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/nigerian-professionals-working-in-modern-office-wi.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-brand-dark/80 z-1" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 animate-glow text-balance text-brand-primary">
            We Run The Digital Streets
          </h1>
          <p className="text-xl text-brand-gold-soft inline-block">🚀</p>
        </div>

        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 text-balance leading-relaxed">
            Empowering brands and creators to dominate online with AI, creativity, and smart digital tools.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#services"
            className="btn-premium"
          >
            Get Started
          </Link>
          <a
            href="https://wa.me/2349079581937"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl font-semibold border-2 border-brand-glow text-brand-glow hover:bg-brand-glow/10 transition-all duration-300 transform hover:scale-105"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
