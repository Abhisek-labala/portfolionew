'use client'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              About <span className="gradient-text animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}>Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent via-electric to-lime mx-auto rounded-full animate-gradient-shift" style={{ backgroundSize: '200% 200%' }} />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-in-left">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-accent font-semibold">Full Stack Developer</span> with over{' '}
                <span className="text-accent font-semibold">2 years of experience</span> building scalable web and mobile applications that make a real impact.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans the entire development stack, from crafting intuitive user interfaces with{' '}
                <span className="text-accent font-semibold">React.js</span> and{' '}
                <span className="text-accent font-semibold">React Native</span>, to architecting robust backend systems using{' '}
                <span className="text-accent font-semibold">Laravel</span> and{' '}
                <span className="text-accent font-semibold">Node.js</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building high-performance applications that serve thousands of users with{' '}
                <span className="text-gold font-semibold">99.9% uptime</span>. Through strategic optimization and cloud architecture, I've achieved{' '}
                <span className="text-gold font-semibold">40% performance gains</span> and significantly accelerated development cycles.
              </p>

              <div className="pt-4">
                <a
                  href="/abhisek_resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent via-electric to-lime text-white rounded-xl hover:shadow-glow-lg transition-all duration-500 font-bold text-lg group hover:scale-105"
                >
                  <svg className="w-6 h-6 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-4 animate-slide-in-right">
              <div className="glass-hover p-6 rounded-xl card-hover border-2 border-accent/20 hover:border-accent/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accentLight rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon-purple">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-accent">Performance Optimization</h3>
                    <p className="text-gray-300">Boosted API response times by 40% through Redis caching and PostgreSQL optimization</p>
                  </div>
                </div>
              </div>

              <div className="glass-hover p-6 rounded-xl card-hover border-2 border-electric/20 hover:border-electric/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-electric to-lime rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon-cyan">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-electric">Cross-Platform Development</h3>
                    <p className="text-gray-300">Accelerated mobile app development by 40% using React Native</p>
                  </div>
                </div>
              </div>

              <div className="glass-hover p-6 rounded-xl card-hover border-2 border-neon/20 hover:border-neon/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-neon to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-neon-pink">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-neon">Cloud Architecture</h3>
                    <p className="text-gray-300">Architected containerized deployments using Docker & Kubernetes on AWS</p>
                  </div>
                </div>
              </div>

              <div className="glass-hover p-6 rounded-xl card-hover border-2 border-gold/20 hover:border-gold/60 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-lime rounded-xl flex items-center justify-center flex-shrink-0" 
                       style={{ boxShadow: '0 0 20px rgba(255, 214, 10, 0.5)' }}>
                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gold">Team Leadership</h3>
                    <p className="text-gray-300">Mentored 3 junior developers and increased sprint velocity by 20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}