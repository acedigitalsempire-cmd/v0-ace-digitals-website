export default function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">About Us</h1>
          <p className="text-xl text-gray-300">We Run The Digital Streets</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-brand-gold mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Ace Digitals Global was founded with a mission to empower brands and creators to dominate the digital space. We believe that digital success shouldn't be complicated or expensive. Our team of experts is dedicated to helping businesses of all sizes achieve their online goals.
            </p>
            <p>
              From web development to AI automation, from social media strategy to SaaS product development, we provide comprehensive digital solutions that drive real results. We're not just service providers; we're your partners in digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-brand-navy">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-brand-gold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Excellence', description: 'We deliver quality in everything we do' },
              { title: 'Innovation', description: 'We stay ahead of digital trends' },
              { title: 'Integrity', description: 'We build lasting client relationships' },
            ].map((value, i) => (
              <div key={i} className="bg-brand-dark border border-brand-primary/20 rounded-xl p-6 text-center">
                <h3 className="text-2xl font-black text-brand-gold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-brand-gold mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Expert team with years of experience',
              'Proven track record of success',
              'Customized solutions for your needs',
              'Transparent communication',
              'Competitive pricing',
              '24/7 support availability',
            ].map((reason, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark font-black">✓</span>
                <p className="text-lg text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-brand-gold mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-300 mb-8">Ready to take your digital presence to the next level?</p>
          <a href="https://wa.me/2349079581937" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">
            Start Your Journey
          </a>
        </div>
      </section>
    </div>
  )
}
