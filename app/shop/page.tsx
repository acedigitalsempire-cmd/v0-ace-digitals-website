"use client"

import { getProductWhatsAppLink } from "@/lib/whatsapp"
import { useRouter } from "next/navigation"

const ShoppingCart = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const Star = ({ filled }: { filled: boolean }) => (
  <svg className={`w-3.5 h-3.5 ${filled ? "fill-accent text-accent" : "text-gray-600"}`} viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const products = [
  {
    id: 1,
    name: "Professional Website Package",
    description: "Complete website development with SEO optimization",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 128,
    image: "/professional-website-design-portfolio.jpg",
  },
  {
    id: 2,
    name: "Social Media Growth Bundle",
    description: "3-month social media management and growth strategy",
    price: "Custom Quote",
    rating: 4.8,
    reviews: 95,
    image: "/social-media-marketing-bundle.jpg",
  },
  {
    id: 3,
    name: "AI Automation Setup",
    description: "Custom AI automation for your business workflows",
    price: "Custom Quote",
    rating: 4.9,
    reviews: 67,
    image: "/ai-automation-setup.jpg",
  },
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
