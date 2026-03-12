"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-brand-gold/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Ace Digitals Global" 
                width={120} 
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">We Run The Digital Streets</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/about" className="hover:text-brand-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-brand-gold transition-colors">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services" className="hover:text-brand-gold transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-brand-gold transition-colors">
                  All Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-brand-gold">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://wa.me/2349079581937" className="hover:text-brand-gold transition-colors">
                  +234 907 958 1937
                </a>
                <a href="https://wa.me/2349079581937" className="text-xs text-gray-500 hover:text-brand-gold transition-colors block">
                  (Call/WhatsApp)
                </a>
              </li>
              <li>
                <a href="https://wa.me/18733522008" className="hover:text-brand-gold transition-colors">
                  +1 873 352 2008
                </a>
                <a href="https://wa.me/18733522008" className="text-xs text-gray-500 hover:text-brand-gold transition-colors block">
                  (Call/WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:acedigitalsglobal@gmail.com" className="hover:text-brand-gold transition-colors text-sm">
                  acedigitalsglobal@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gold/20 pt-8 text-center text-gray-500">
          <p>© 2025 Ace Digitals Global — We Run The Digital Streets.</p>
        </div>
      </div>
    </footer>
  )
}
