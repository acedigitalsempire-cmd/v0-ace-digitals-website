import Link from 'next/link'

const services = [
  { title: 'Website Development', description: 'Professional, high-converting websites' },
  { title: 'Google My Business', description: 'Optimize local presence and search ranking' },
  { title: 'Social Media Marketing', description: 'Strategic content and audience growth' },
  { title: 'Content Monetization', description: 'Turn your audience into revenue' },
  { title: 'AI Automation', description: 'Streamline operations with AI solutions' },
  { title: 'SaaS Development', description: 'Build scalable software products' },
  { title: 'Professional CV Services', description: 'Create compelling resumes' },
  { title: 'Tutorials & Courses', description: 'Comprehensive online training' },
]

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">We Run The Digital Streets</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">Empowering brands and creators to dominate online with AI, creativity, and smart digital tools.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">Get Started</Link>
            <a href="https://wa.me/2349079581937" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-brand-gold text-brand-gold font-bold rounded-xl hover:bg-brand-gold/10 transition-all transform hover:scale-105">Chat on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-brand-gold text-center mb-16">Our Core Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-brand-navy border border-brand-primary/20 rounded-xl p-6 hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300">
                <h3 className="text-lg font-black text-brand-gold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">View All Services</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-brand-gold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">Join hundreds of satisfied clients who are already dominating their markets.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/2349079581937" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">Chat on WhatsApp +234</a>
            <a href="https://wa.me/18733522008" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-gold text-brand-dark font-bold rounded-xl hover:bg-brand-gold-soft transition-all transform hover:scale-105">Chat on WhatsApp +1</a>
          </div>
        </div>
      </section>
    </div>
  )
}
