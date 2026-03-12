export default function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">Get In Touch</h1>
          <p className="text-xl text-gray-300">We're here to help your business succeed</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-navy border border-brand-primary/20 rounded-xl p-8 text-center hover:border-brand-gold/50 transition-all duration-300">
              <h3 className="text-xl font-black text-brand-gold mb-4">WhatsApp & Call</h3>
              <a href="https://wa.me/2349079581937" className="text-gray-300 hover:text-brand-gold transition-colors text-lg font-semibold block mb-2">
                +234 907 958 1937
              </a>
              <a href="https://wa.me/18733522008" className="text-gray-300 hover:text-brand-gold transition-colors text-lg font-semibold">
                +1 873 352 2008
              </a>
              <p className="text-gray-400 text-sm mt-4">(Call or WhatsApp)</p>
            </div>

            <div className="bg-brand-navy border border-brand-primary/20 rounded-xl p-8 text-center hover:border-brand-gold/50 transition-all duration-300">
              <h3 className="text-xl font-black text-brand-gold mb-4">Email</h3>
              <a href="mailto:acedigitalsglobal@gmail.com" className="text-gray-300 hover:text-brand-gold transition-colors text-lg font-semibold">
                acedigitalsglobal@gmail.com
              </a>
              <p className="text-gray-400 text-sm mt-4">We respond within 24 hours</p>
            </div>

            <div className="bg-brand-navy border border-brand-primary/20 rounded-xl p-8 text-center hover:border-brand-gold/50 transition-all duration-300">
              <h3 className="text-xl font-black text-brand-gold mb-4">Location</h3>
              <p className="text-gray-300 text-lg font-semibold">Lagos, Nigeria</p>
              <p className="text-gray-400 text-sm mt-4">Serving clients worldwide</p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-brand-navy border border-brand-primary/20 rounded-xl p-8">
            <h2 className="text-3xl font-black text-brand-gold mb-6">Quick Contact</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-brand-dark border border-brand-primary/20 rounded-lg text-white placeholder-gray-500 focus:border-brand-gold outline-none transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-brand-dark border border-brand-primary/20 rounded-lg text-white placeholder-gray-500 focus:border-brand-gold outline-none transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-brand-dark border border-brand-primary/20 rounded-lg text-white placeholder-gray-500 focus:border-brand-gold outline-none transition-colors"
              ></textarea>
              <a href="https://wa.me/2349079581937" className="block w-full px-6 py-3 bg-brand-primary text-white font-bold rounded-lg hover:bg-brand-glow transition-colors text-center">
                Send Message via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-brand-gold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8">Connect with us on WhatsApp for instant support</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/2349079581937" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">
              WhatsApp +234
            </a>
            <a href="https://wa.me/18733522008" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-brand-gold-soft transition-all transform hover:scale-105">
              WhatsApp +1
            </a>
          </div>
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
