'use client'

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Trident Academy of Creative Technology',
    location: 'Bhubaneswar',
    period: '2022 – 2024',
    icon: '🎓',
    color: 'accent',
  },
  {
    degree: 'Bachelor of Science in Chemistry',
    institution: 'Model Degree College',
    location: 'Rayagada',
    period: '2017 – 2021',
    icon: '🔬',
    color: 'gold',
  },
]

const certifications = [
  {
    name: 'Introduction to Industry 4.0 and Industrial IoT',
    icon: '🏭',
  },
  {
    name: 'Intellectual Property Rights and Competition Law',
    icon: '⚖️',
  },
  {
    name: 'Problem Solving through Programming in C',
    icon: '💻',
  },
  {
    name: 'Legacy JavaScript Algorithms and Data Structures',
    provider: 'freeCodeCamp',
    icon: '📜',
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-accent mb-8 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass rounded-xl p-6 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-lg flex-shrink-0 ${
                      edu.color === 'accent' ? 'bg-accent/20' : 'bg-gold/20'
                    }`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className={`text-xl md:text-2xl font-bold ${
                          edu.color === 'accent' ? 'text-accent' : 'text-gold'
                        }`}>
                          {edu.degree}
                        </h4>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm border mt-2 md:mt-0 ${
                          edu.color === 'accent' 
                            ? 'border-accent/30 bg-accent/10 text-accent' 
                            : 'border-gold/30 bg-gold/10 text-gold'
                        }`}>
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                          </svg>
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg text-white font-medium">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-8 flex items-center gap-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass rounded-lg p-4 flex items-start gap-3 card-hover animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl flex-shrink-0">{cert.icon}</div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                    {cert.provider && (
                      <p className="text-sm text-gray-400">{cert.provider}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
