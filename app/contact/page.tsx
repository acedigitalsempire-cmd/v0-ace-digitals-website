"use client"

const Mail = () => (
  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const Phone = () => (
  <svg className="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502.756l2.048 1.029a11.042 11.042 0 005.516 5.516l1.029 2.048a1 1 0 00.756.502l4.493 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const MapPin = () => (
  <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/nigerian-professionals-working-in-modern-office-wi.jpg"
          alt="Contact header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-brand-gold">Get In Touch</h1>
          <p className="text-xl text-gray-300">We're here to help. Reach out to us today</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div className="bg-card border border-brand-primary/20 rounded-lg p-8 text-center hover:border-brand-primary/40 transition-colors">
              <div className="flex justify-center mb-4">
                <Mail />
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-4">Email</h3>
              <div className="space-y-2">
                <a
                  href="mailto:acedigitalsglobal@gmail.com"
                  className="text-gray-300 hover:text-brand-gold transition-colors break-all block"
                >
                  acedigitalsglobal@gmail.com
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-3">We'll respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-card border border-brand-glow/20 rounded-lg p-8 text-center hover:border-brand-glow/40 transition-colors">
              <div className="flex justify-center mb-4">
                <Phone />
              </div>
              <h3 className="text-xl font-black text-brand-glow mb-4">Phone & WhatsApp</h3>
              <div className="space-y-2">
                <div>
                  <a href="tel:+2349079581937" className="text-gray-300 hover:text-brand-gold transition-colors block">
                    +234 907 958 1937
                  </a>
                  <a href="https://wa.me/2349079581937" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                    (Call or WhatsApp)
                  </a>
                </div>
                <div className="border-t border-brand-glow/20 pt-2 mt-2">
                  <a href="tel:+18733522008" className="text-gray-300 hover:text-brand-gold transition-colors block">
                    +1 873 352 2008
                  </a>
                  <a href="https://wa.me/18733522008" className="text-sm text-gray-400 hover:text-brand-gold transition-colors">
                    (Call or WhatsApp)
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3">Monday - Friday, 9AM - 6PM WAT</p>
            </div>

            {/* Location */}
            <div className="bg-card border border-brand-primary/20 rounded-lg p-8 text-center hover:border-brand-primary/40 transition-colors">
              <div className="flex justify-center mb-4">
                <MapPin />
              </div>
              <h3 className="text-xl font-black text-brand-primary mb-4">Location</h3>
              <p className="text-gray-300">Lagos, Nigeria</p>
              <p className="text-gray-400 text-sm mt-2">Serving clients worldwide from anywhere in the world</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-brand-primary/10 to-brand-glow/10 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-black text-brand-primary mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Connect with us on WhatsApp for instant support and to discuss your project needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2349079581937"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                WhatsApp +234 907 958 1937
              </a>
              <a
                href="https://wa.me/18733522008"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-brand-glow text-brand-dark font-bold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                WhatsApp +1 873 352 2008
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
