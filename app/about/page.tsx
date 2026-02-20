"use client"

import { CheckCircle, Users, Zap, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen pt-24">
      {/* Header with background image */}
      <section className="relative py-20 px-4 overflow-hidden">
        <img
          src="/diverse-nigerian-team-collaborating-in-modern-offi.jpg"
          alt="About header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-4 text-brand-gold">About Us</h1>
          <p className="text-xl text-gray-300">We Run The Digital Streets</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-primary/20 rounded-lg p-8 md:p-12">
            <h2 className="text-4xl font-black text-brand-gold mb-6">Our Story</h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Founded in 2018, Ace Digitals Global started with a simple mission: to help African creators and
                businesses dominate the digital space. What began as a small team of passionate digital enthusiasts has
                evolved into a full-service digital powerhouse serving clients across the continent.
              </p>
              <p>
                We've worked with solopreneurs, small businesses, startups, and established companies, delivering
                innovative digital solutions that combine cutting-edge technology with creative storytelling. Our
                approach is simple: understand your goals, leverage the latest tools and strategies, and deliver results
                that exceed expectations.
              </p>
              <p>
                Today, Ace Digitals Global is recognized as a leader in digital transformation, AI automation, and
                creative digital services. We're proud of the impact we've made on our clients' businesses and the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with images */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-colors">
              <img src="/nigerian-entrepreneur-working-on-laptop-with-visio.jpg" alt="Our mission" className="w-full h-48 object-cover" />
              <div className="p-8">
                <Target className="text-primary mb-4" size={40} />
                <h3 className="text-2xl font-black text-primary mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower African creators, entrepreneurs, and businesses with world-class digital solutions that
                  drive growth, innovation, and success in the digital economy.
                </p>
              </div>
            </div>
            <div className="bg-card border border-accent/20 rounded-lg overflow-hidden hover:border-accent/40 transition-colors">
              <img src="/african-tech-team-celebrating-success-with-digital.jpg" alt="Our vision" className="w-full h-48 object-cover" />
              <div className="p-8">
                <Zap className="text-accent mb-4" size={40} />
                <h3 className="text-2xl font-black text-accent mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the most trusted digital partner for African businesses, known for delivering exceptional
                  results, innovative solutions, and transformative impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Excellence", description: "We deliver nothing but the best in everything we do" },
              { title: "Innovation", description: "We stay ahead of trends and embrace cutting-edge technology" },
              { title: "Integrity", description: "We build trust through transparency and honest communication" },
              { title: "Impact", description: "We measure success by the real results we deliver for our clients" },
              { title: "Collaboration", description: "We work closely with our clients as true partners" },
              { title: "Growth", description: "We're committed to continuous learning and improvement" },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle className="text-accent flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-black text-primary mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section with image */}
      <section className="py-20 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <img src="/nigerian-diverse-team-of-professionals-in-modern-o.jpg" alt="Our team" className="w-full h-64 object-cover rounded-lg mb-8" />
          <div className="text-center">
            <h2 className="text-4xl font-black text-primary mb-6">Our Team</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              We're a diverse team of digital experts, designers, developers, strategists, and creative minds united by
              a passion for helping African businesses succeed in the digital space. Each team member brings unique
              expertise and a commitment to excellence.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center gap-3">
              <Users className="text-primary" size={32} />
              <div className="text-left">
                <p className="text-2xl font-black text-primary">50+ Team Members</p>
                <p className="text-gray-400">Across Africa, dedicated to your success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
