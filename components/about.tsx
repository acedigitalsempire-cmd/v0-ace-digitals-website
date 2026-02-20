"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              About <span className="text-brand-gold">Ace Digitals Global</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Founded in 2018, Ace Digitals Global has evolved into a full-service digital powerhouse. We've worked with
              creators, small businesses, and startups across Africa, delivering innovative digital solutions using AI,
              automation, and creative storytelling.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our mission is simple: help you run the digital streets. Whether you're a solopreneur or a growing
              business, we have the tools, expertise, and passion to take your brand to the next level.
            </p>
            <div className="border-t border-brand-gold/20 pt-8">
              <h3 className="text-2xl font-bold text-brand-gold mb-4">Meet Our Founder</h3>
              <p className="text-gray-400 text-sm">
                Leading the charge in digital innovation across Africa, our CEO brings years of expertise in building
                digital empires and transforming businesses through cutting-edge technology and creative strategy.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-sm mx-auto rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-primary/20 rounded-xl" />
            <img
              src="/images/img-20251210-154930-976.jpg"
              alt="Ace Digitals CEO"
              className="w-full h-auto object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
