'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const servicesData = [
  {
    title: 'Website Development',
    description: 'Professional, high-converting websites built with latest tech',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Mobile-First'],
    price: 'Custom'
  },
  {
    title: 'Google My Business',
    description: 'Dominate local search and attract more customers',
    features: ['Profile Setup', 'Local SEO', 'Review Management', 'Analytics'],
    price: 'Custom'
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow audience across all major platforms strategically',
    features: ['Content Strategy', 'Community Management', 'Engagement', 'Analytics'],
    price: 'Custom'
  },
  {
    title: 'AI Automation',
    description: 'Streamline workflows and boost productivity with AI',
    features: ['Chatbots', 'Email Automation', 'Task Automation', 'Optimization'],
    price: 'Custom'
  },
  {
    title: 'SaaS Development',
    description: 'Build scalable software products from concept to launch',
    features: ['MVP Development', 'Cloud Deployment', 'Scalability', 'Maintenance'],
    price: 'Custom'
  },
  {
    title: 'Content Monetization',
    description: 'Turn your audience into sustainable revenue streams',
    features: ['Revenue Strategy', 'Platform Setup', 'Growth Tools', 'Optimization'],
    price: 'Custom'
  },
]

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">Our Services</h1>
          <p className="text-xl text-gray-300">Premium digital solutions tailored to your success</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-brand-navy border border-brand-primary/20 rounded-xl overflow-hidden hover:border-brand-gold/50 transition-all duration-300">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-primary/10 transition-colors"
                >
                  <div className="text-left">
                    <h3 className="text-xl font-black text-brand-gold">{service.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-brand-gold transition-transform duration-300 flex-shrink-0 ml-4 ${expandedIndex === index ? 'rotate-180' : ''}`} />
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-4 border-t border-brand-gold/20 bg-brand-dark/50">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-brand-gold font-bold mb-4">What's Included</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="text-gray-300 flex items-center">
                              <span className="w-2 h-2 bg-brand-gold rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="text-center">
                          <p className="text-gray-400 mb-4">Pricing</p>
                          <p className="text-3xl font-black text-brand-gold mb-6">{service.price}</p>
                          <a href="https://wa.me/2349079581937" className="inline-block px-6 py-2 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-colors">
                            Get Quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-brand-gold mb-6">Ready to Get Started?</h2>
          <a href="https://wa.me/2349079581937" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
