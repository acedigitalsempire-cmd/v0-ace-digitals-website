"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/90 backdrop-blur-md border-b border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Ace Digitals Global" 
            width={120} 
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-brand-gold font-medium">Home</Link>
          <Link href="/services" className="text-white hover:text-brand-gold font-medium">Services</Link>
          <Link href="/blog" className="text-white hover:text-brand-gold font-medium">Blog</Link>
          <Link href="/shop" className="text-white hover:text-brand-gold font-medium">Shop</Link>
          <Link href="/about" className="text-white hover:text-brand-gold font-medium">About</Link>
          <Link href="/contact" className="text-white hover:text-brand-gold font-medium">Contact</Link>
          <a
            href="https://wa.me/2349079581937"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-brand-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-brand-gold/20 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className="text-white hover:text-brand-gold font-medium">Home</Link>
            <Link href="/services" className="text-white hover:text-brand-gold font-medium">Services</Link>
            <Link href="/blog" className="text-white hover:text-brand-gold font-medium">Blog</Link>
            <Link href="/shop" className="text-white hover:text-brand-gold font-medium">Shop</Link>
            <Link href="/about" className="text-white hover:text-brand-gold font-medium">About</Link>
            <Link href="/contact" className="text-white hover:text-brand-gold font-medium">Contact</Link>
            <a
              href="https://wa.me/2349079581937"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium w-full text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
