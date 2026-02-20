"use client"

import { useState } from "react"

const ChevronDown = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`w-7 h-7 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const CheckCircle = () => (
  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

const Zap = () => (
  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0110 2v5H6a1 1 0 00-.82 1.573l7 10A1 1 0 0017 16v-5h4a1 1 0 00.82-1.573l-7-10a1 1 0 00-1.48-.381z"
      clipRule="evenodd"
    />
  </svg>
)

const serviceDetails = {
  "website-development": {
    title: "Website Development",
    subtitle: "Professional, High-Converting Websites",
    description:
      "We build stunning, fast, and conversion-optimized websites that turn visitors into customers. From sleek portfolios to full e-commerce platforms, we create digital experiences that work.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Fast Loading Speeds",
      "Mobile-First Approach",
      "E-commerce Integration",
      "CMS Integration",
    ],
    benefits: [
      "Increase online visibility and reach",
      "Convert more visitors into customers",
      "Build trust with professional design",
      "Scale your business online",
      "Reduce bounce rates",
      "Improve user engagement",
    ],
    process: [
      "Discovery & Strategy",
      "Design & Prototyping",
      "Development & Testing",
      "Launch & Optimization",
      "Ongoing Support",
    ],
  },
  "google-my-business": {
    title: "Google My Business Setup",
    subtitle: "Dominate Local Search Results",
    description:
      "Get your business found by local customers. We optimize your Google My Business profile to rank higher in local searches and attract more foot traffic and inquiries.",
    features: [
      "Profile Optimization",
      "Local SEO Strategy",
      "Review Management",
      "Photo & Video Upload",
      "Business Information Accuracy",
      "Local Citation Building",
    ],
    benefits: [
      "Appear in local search results",
      "Increase customer inquiries",
      "Build credibility with reviews",
      "Drive foot traffic to your location",
      "Compete with larger businesses",
      "Improve local visibility",
    ],
    process: [
      "Audit Current Profile",
      "Optimize Business Information",
      "Implement Local SEO",
      "Review Strategy Setup",
      "Monthly Monitoring",
    ],
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    subtitle: "Build Your Online Community",
    description:
      "Grow your audience, increase engagement, and build a loyal community across Instagram, TikTok, Facebook, and LinkedIn. We create content that resonates and converts.",
    features: [
      "Content Strategy",
      "Daily Posting Schedule",
      "Community Management",
      "Influencer Collaboration",
      "Paid Ads Management",
      "Analytics & Reporting",
    ],
    benefits: [
      "Grow your follower base",
      "Increase brand awareness",
      "Drive website traffic",
      "Generate leads and sales",
      "Build customer loyalty",
      "Stay ahead of competitors",
    ],
    process: [
      "Audit & Strategy",
      "Content Calendar Creation",
      "Content Production",
      "Community Engagement",
      "Performance Analysis",
    ],
  },
  monetization: {
    title: "Monetization Strategy",
    subtitle: "Turn Your Audience Into Revenue",
    description:
      "We help creators and businesses monetize their content and audience through multiple revenue streams including ads, sponsorships, affiliate marketing, and digital products.",
    features: [
      "Revenue Stream Analysis",
      "Ad Network Setup",
      "Sponsorship Negotiation",
      "Affiliate Marketing",
      "Digital Product Creation",
      "Subscription Setup",
    ],
    benefits: [
      "Generate passive income",
      "Diversify revenue streams",
      "Maximize earnings potential",
      "Build sustainable business",
      "Reduce platform dependency",
      "Scale your income",
    ],
    process: ["Audience Analysis", "Monetization Planning", "Platform Setup", "Revenue Optimization", "Ongoing Growth"],
  },
  "ai-automation": {
    title: "AI Automation",
    subtitle: "Work Smarter, Not Harder",
    description:
      "Automate repetitive tasks, streamline workflows, and boost productivity with AI-powered solutions. From chatbots to email automation, we implement AI that saves time and money.",
    features: [
      "Chatbot Development",
      "Email Automation",
      "Task Automation",
      "Data Processing",
      "Customer Service AI",
      "Workflow Optimization",
    ],
    benefits: [
      "Save 20+ hours per week",
      "Reduce operational costs",
      "Improve response times",
      "Scale without hiring",
      "Increase accuracy",
      "Focus on growth",
    ],
    process: ["Process Audit", "AI Solution Design", "Implementation", "Training & Setup", "Continuous Optimization"],
  },
  "saas-development": {
    title: "SAAS Development",
    subtitle: "Build Your Digital Product",
    description:
      "We develop scalable, user-friendly SaaS products that solve real problems. From MVP to full-scale platform, we handle everything from design to deployment.",
    features: [
      "MVP Development",
      "Scalable Architecture",
      "User Authentication",
      "Payment Integration",
      "Analytics Dashboard",
      "API Development",
    ],
    benefits: [
      "Create recurring revenue",
      "Build a scalable business",
      "Reach global customers",
      "Reduce support costs",
      "Automate operations",
      "Grow exponentially",
    ],
    process: ["Ideation & Validation", "MVP Development", "Beta Testing", "Launch & Marketing", "Scaling & Growth"],
  },
  "cv-services": {
    title: "CV & Personal Branding",
    subtitle: "Land Your Dream Job",
    description:
      "We create professional CVs, cover letters, and personal brands that get you noticed by top employers. Stand out from the competition with a compelling professional profile.",
    features: [
      "Professional CV Writing",
      "Cover Letter Creation",
      "LinkedIn Optimization",
      "Portfolio Development",
      "Interview Coaching",
      "Personal Branding",
    ],
    benefits: [
      "Get more job interviews",
      "Stand out from competitors",
      "Increase salary negotiations",
      "Build professional credibility",
      "Create lasting impression",
      "Accelerate career growth",
    ],
    process: [
      "Career Consultation",
      "CV & Cover Letter Writing",
      "LinkedIn Profile Optimization",
      "Interview Preparation",
      "Follow-up Support",
    ],
  },
  "tutorials-courses": {
    title: "Tutorials & Courses",
    subtitle: "Learn Digital Skills from Experts",
    description:
      "Master in-demand digital skills through our comprehensive, hands-on courses and tutorials. From web development to digital marketing, we provide structured learning paths designed for beginners to advanced learners.",
    features: [
      "Live & Recorded Courses",
      "Hands-On Projects",
      "Expert Instructors",
      "Lifetime Access",
      "Certification Programs",
      "Community Support",
    ],
    benefits: [
      "Learn at your own pace",
      "Gain industry-recognized certifications",
      "Build a professional portfolio",
      "Access lifetime course materials",
      "Join a supportive community",
      "Advance your career",
    ],
    process: ["Course Selection", "Enrollment & Access", "Learning & Projects", "Certification Exam", "Career Support"],
  },
}

const serviceKeys = Object.keys(serviceDetails) as Array<keyof typeof serviceDetails>

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (slug: string) => {
    setExpandedService(expandedService === slug ? null : slug)
  }

  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/nigerian-professionals-working-in-modern-office-wi.jpg"
          alt="Services header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-brand-gold">Our Services</h1>
          <p className="text-xl text-gray-300">
            Click on any service to explore detailed information about what we offer
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {serviceKeys.map((slug) => {
            const service = serviceDetails[slug]
            const isExpanded = expandedService === slug

            return (
              <div
                key={slug}
                className="border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors"
              >
                {/* Service Header - Clickable */}
                <button
                  onClick={() => toggleService(slug)}
                  className="w-full px-6 py-6 bg-card/50 hover:bg-card transition-colors flex items-center justify-between group"
                >
                  <div className="text-left">
                    <h2 className="text-2xl font-black text-brand-gold group-hover:text-brand-gold-soft transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-400 mt-1">{service.subtitle}</p>
                  </div>
                  <div className="text-primary flex-shrink-0">
                    <ChevronDown isExpanded={isExpanded} />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 py-8 bg-background border-t border-primary/20 space-y-8 animate-in fade-in duration-300">
                    {/* Description */}
                    <div>
                      <p className="text-lg text-gray-300 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Features & Benefits Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Features */}
                      <div>
                        <h3 className="text-2xl font-black mb-6 text-brand-gold">What's Included</h3>
                        <div className="space-y-3">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h3 className="text-2xl font-black mb-6 text-brand-gold">Benefits</h3>
                        <div className="space-y-3">
                          {service.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <Zap />
                              <span className="text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="text-2xl font-black mb-6 text-brand-gold">Our Process</h3>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {service.process.map((step, index) => (
                          <div
                            key={index}
                            className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg p-4 text-center"
                          >
                            <div className="text-2xl font-black text-primary mb-2">{index + 1}</div>
                            <p className="text-sm text-foreground font-bold">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-6 flex items-center justify-end">
                      <a
                        href={`https://wa.me/2349079581937?text=${encodeURIComponent(`Hi! I'm interested in learning more about your ${service.title} service.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started on WhatsApp
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
