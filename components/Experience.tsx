'use client'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Cordelia Technology',
    location: 'Bengaluru',
    period: 'September 2025 – Present',
    achievements: [
      'Architected full-stack solutions using Laravel, React.js, and PostgreSQL, serving 10,000+ concurrent users with 99.9% uptime',
      'Boosted API response times by 40% through strategic Redis caching and PostgreSQL query optimization',
      'Orchestrated containerized deployments using Docker and Kubernetes on AWS EC2 infrastructure',
      'Accelerated sprint velocity by 20% by implementing Agile methodologies and leading cross-functional standups',
    ],
    tech: ['Laravel', 'React.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
    color: 'accent',
  },
  {
    role: 'Software Engineer',
    company: 'Silicon Techlab Pvt. Ltd.',
    location: 'Bhubaneswar',
    period: 'April 2024 – September 2025',
    achievements: [
      'Engineered responsive web portals using React.js with Laravel-powered RESTful backend services',
      'Shipped cross-platform mobile solutions using React Native, cutting time-to-market by 40%',
      'Streamlined application state management with Redux, improving render performance by 25%',
      'Established GitLab CI/CD workflows for continuous testing and zero-downtime deployments',
      'Mentored 3 junior developers on SOLID principles, design patterns, and code review best practices',
    ],
    tech: ['React.js', 'React Native', 'Laravel', 'Redux', 'GitLab CI/CD', 'Node.js'],
    color: 'gold',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-8 card-hover animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${exp.color === 'accent' ? 'text-accent' : 'text-gold'}`}>
                      {exp.role}
                    </h3>
                    <p className="text-xl text-white font-semibold">{exp.company}</p>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                  <div className={`mt-4 md:mt-0 inline-flex items-center px-4 py-2 rounded-full border ${
                    exp.color === 'accent' ? 'border-accent/30 bg-accent/10 text-accent' : 'border-gold/30 bg-gold/10 text-gold'
                  }`}>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {exp.period}
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 mt-1 flex-shrink-0 ${exp.color === 'accent' ? 'text-accent' : 'text-gold'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-300 leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full border ${
                        exp.color === 'accent' 
                          ? 'border-accent/30 bg-accent/5 text-accent' 
                          : 'border-gold/30 bg-gold/5 text-gold'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
