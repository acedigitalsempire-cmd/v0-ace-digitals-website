"use client"

import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How to Build a Website That Converts in 2025",
    excerpt:
      "Learn the essential strategies for creating high-converting websites that turn visitors into paying customers.",
    date: "January 15, 2025",
    author: "Ace Digitals Team",
    category: "Web Development",
    image: "/project-grid/project-2.png",
  },
  {
    id: 2,
    title: "The Complete Guide to Google My Business Optimization",
    excerpt: "Master local SEO and dominate your local search results with our comprehensive GMB optimization guide.",
    date: "January 10, 2025",
    author: "Ace Digitals Team",
    category: "Local SEO",
    image: "/google-my-business-dashboard-on-computer.jpg",
  },
  {
    id: 3,
    title: "AI Automation: The Future of Business Efficiency",
    excerpt:
      "Discover how AI automation can save your business thousands of hours and reduce operational costs dramatically.",
    date: "January 5, 2025",
    author: "Ace Digitals Team",
    category: "AI & Automation",
    image: "/ai-automation-technology-interface.jpg",
  },
  {
    id: 4,
    title: "Social Media Marketing Trends That Will Dominate 2025",
    excerpt:
      "Stay ahead of the curve with the latest social media marketing strategies and trends for creators and businesses.",
    date: "December 28, 2024",
    author: "Ace Digitals Team",
    category: "Social Media",
    image: "/nigerian-content-creator-on-social-media.jpg",
  },
  {
    id: 5,
    title: "Monetizing Your Content: 5 Revenue Streams You're Missing",
    excerpt: "Learn multiple ways to monetize your audience and create sustainable passive income from your content.",
    date: "December 20, 2024",
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
