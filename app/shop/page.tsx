import Link from 'next/link'

const products = [
  {
    id: 1,
    title: 'Professional Website Package',
    description: 'Complete website design and development',
    price: 'Custom Quote',
    features: ['5-page website', 'Mobile responsive', 'SEO optimized']
  },
  {
    id: 2,
    title: 'Social Media Strategy',
    description: '3-month social media growth plan',
    price: 'Custom Quote',
    features: ['Content calendar', 'Daily posting', 'Analytics']
  },
  {
    id: 3,
    title: 'AI Automation Setup',
    description: 'Custom AI solutions for your business',
    price: 'Custom Quote',
    features: ['Chatbot setup', 'Email automation', 'Integration']
  },
  {
    id: 4,
    title: 'Content Monetization Program',
    description: 'Turn your content into revenue',
    price: 'Custom Quote',
    features: ['Revenue setup', 'Platform integration', 'Optimization']
  },
  {
    id: 5,
    title: 'SaaS MVP Development',
    description: 'Build your software product MVP',
    price: 'Custom Quote',
    features: ['MVP build', 'Cloud deployment', 'Documentation']
  },
  {
    id: 6,
    title: 'Professional CV Service',
    description: 'Create a compelling professional profile',
    price: 'Custom Quote',
    features: ['CV writing', 'LinkedIn optimization', 'Cover letter']
  },
]

export default function Shop() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">Our Shop</h1>
          <p className="text-xl text-gray-300">Premium packages and services</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-brand-navy border border-brand-primary/20 rounded-xl overflow-hidden hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300 group">
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-black text-brand-gold mb-2 group-hover:text-brand-gold-soft transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {product.features.map((feature, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-brand-gold/20 pt-4">
                    <p className="text-brand-gold font-bold mb-4 text-center text-lg">{product.price}</p>
                    <a href="https://wa.me/2349079581937" className="block w-full text-center px-4 py-2 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-colors">
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-brand-gold mb-6">Custom Solutions Available</h2>
          <p className="text-lg text-gray-300 mb-8">Don't see what you need? Let's discuss custom packages</p>
          <a href="https://wa.me/2349079581937" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  {
    id: 4,
    name: "Google My Business Optimization",
    description: "Complete GMB setup and local SEO optimization",
    price: "Custom Quote",
    rating: 4.7,
    reviews: 112,
    image: "/google-my-business-optimization.jpg",
  },
  {
    id: 5,
    name: "Content Monetization Strategy",
    description: "Comprehensive plan to monetize your audience",
    price: "Custom Quote",
    rating: 4.8,
    reviews: 84,
    image: "/content-monetization-strategy.jpg",
  },
  {
    id: 6,
    name: "SaaS MVP Development",
    description: "Build your minimum viable product with our expert team",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 56,
    image: "/saas-mvp-development.jpg",
  },
  {
    id: 7,
    name: "Professional CV & Branding",
    description: "CV writing, LinkedIn optimization, and personal branding",
    price: "Custom Quote",
    rating: 4.8,
    reviews: 203,
    image: "/professional-cv-branding.jpg",
  },
  {
    id: 8,
    name: "Digital Marketing Consultation",
    description: "1-on-1 consultation with our digital marketing experts",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 145,
    image: "/digital-marketing-consultation.jpg",
  },
  {
    id: 9,
    name: "Web Development Masterclass",
    description: "Complete course from HTML/CSS to advanced React and Next.js",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 234,
    image: "/web-development-masterclass.jpg",
  },
  {
    id: 10,
    name: "Digital Marketing Bootcamp",
    description: "Learn SEO, social media, email marketing, and paid advertising",
    price: "Custom Quote",
    rating: 4.8,
    reviews: 189,
    image: "/digital-marketing-bootcamp.jpg",
  },
  {
    id: 11,
    name: "AI & Automation Certification",
    description: "Master AI tools and automation for business efficiency",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 156,
    image: "/ai-automation-certification.jpg",
  },
  {
    id: 12,
    name: "Entrepreneurship & SaaS Launch",
    description: "Build, launch, and scale your own SaaS product",
    price: "Custom Quote",
    rating: 4.8,
    reviews: 127,
    image: "/entrepreneurship-saas-launch.jpg",
  },
]

export default function ShopPage() {
  const router = useRouter()

  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/nigerian-professionals-working-in-modern-office-wi.jpg"
          alt="Shop header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-brand-gold">Our Shop</h1>
          <p className="text-xl text-gray-300">Premium digital services and packages tailored for your success</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => router.push(`/shop/${product.id}`)}
                className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden bg-gray-800">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "/nigerian-professionals-working-in-modern-office-wi.jpg"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-black text-brand-gold mb-2 group-hover:text-brand-gold-soft transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} filled={i < Math.floor(product.rating)} />
                    ))}
                    <span className="text-xs text-gray-400 ml-2">({product.reviews})</span>
                  </div>

                  <div className="border-t border-primary/20 pt-4">
                    <p className="text-primary font-black mb-3">{product.price}</p>
                    <a
                      href={getProductWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-black font-bold py-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    >
                      <ShoppingCart />
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
