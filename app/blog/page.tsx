import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: 'How to Grow Your Social Media Following in 30 Days',
    category: 'Social Media',
    excerpt: 'Discover proven strategies to grow your audience quickly and authentically.',
    date: 'Mar 10, 2025'
  },
  {
    id: 2,
    title: 'The Future of AI Automation in Business',
    category: 'AI & Automation',
    excerpt: 'Explore how AI is transforming business operations and improving efficiency.',
    date: 'Mar 8, 2025'
  },
  {
    id: 3,
    title: 'Building Your First SaaS MVP: A Beginner\'s Guide',
    category: 'SaaS',
    excerpt: 'Step-by-step guide to launching your first software product successfully.',
    date: 'Mar 5, 2025'
  },
  {
    id: 4,
    title: 'Website Design Trends in 2025',
    category: 'Web Design',
    excerpt: 'Latest design trends that will make your website stand out.',
    date: 'Mar 1, 2025'
  },
  {
    id: 5,
    title: 'Content Monetization Strategies for Creators',
    category: 'Content',
    excerpt: 'Multiple ways to turn your content into a sustainable income stream.',
    date: 'Feb 27, 2025'
  },
  {
    id: 6,
    title: 'Mastering Google My Business for Local SEO',
    category: 'Local SEO',
    excerpt: 'Complete guide to optimizing your local business presence online.',
    date: 'Feb 24, 2025'
  },
]

export default function Blog() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 py-20 bg-gradient-to-b from-brand-navy to-brand-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-brand-gold">Our Blog</h1>
          <p className="text-xl text-gray-300">Insights, tips, and strategies for digital success</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <div className="bg-brand-navy border border-brand-primary/20 rounded-xl p-6 h-full hover:border-brand-gold/50 hover:shadow-lg hover:shadow-brand-gold/20 transition-all duration-300">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-gold text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-brand-gold mb-3 group-hover:text-brand-gold-soft transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                  <p className="text-gray-500 text-xs">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-navy via-brand-dark to-brand-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black text-brand-gold mb-6">Have Questions?</h2>
          <p className="text-lg text-gray-300 mb-8">Let's discuss how we can help your business grow</p>
          <a href="https://wa.me/2349079581937" className="inline-block px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-glow transition-all transform hover:scale-105">
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
    author: "Ace Digitals Team",
    category: "Monetization",
    image: "/african-creator-earning-money-from-content.jpg",
  },
  {
    id: 6,
    title: "Building a SaaS Product: From Idea to Launch",
    excerpt: "A complete roadmap for entrepreneurs looking to build and launch their own SaaS product successfully.",
    date: "December 15, 2024",
    author: "Ace Digitals Team",
    category: "SaaS",
    image: "/saas-product-development-team-working.jpg",
  },
  {
    id: 7,
    title: "Master Digital Skills: The Ultimate Guide to Online Learning in 2025",
    excerpt:
      "Discover how to accelerate your career with structured online courses and certifications in web development, digital marketing, and AI automation.",
    date: "January 20, 2025",
    author: "Ace Digitals Team",
    category: "Education",
    image: "/nigerian-student-learning-online-course.jpg",
  },
]

export default function BlogPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      {/* Header with background */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/nigerian-blogger-writing-content-at-desk.jpg"
          alt="Blog header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-brand-gold">Blog</h1>
          <p className="text-xl text-gray-300">Insights, strategies, and tips to help you dominate the digital space</p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 right-4 bg-primary text-black px-3 py-1 rounded-full text-sm font-bold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-black text-brand-gold mb-3 group-hover:text-brand-gold-soft transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                  <div className="flex flex-col gap-3 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-bold"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
