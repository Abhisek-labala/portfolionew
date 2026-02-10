'use client'

const projects = [
  {
    title: 'Educational ERP System',
    subtitle: 'Comprehensive School & College Management',
    description: 'Architected a comprehensive ERP solution managing 5,000+ students across enrollment, attendance, grading, and academic workflows with integrated HRMS and payroll engine.',
    achievements: [
      'Reduced deployment time by 60% with GitLab CI/CD pipeline',
      'Optimized PostgreSQL queries, cutting report generation time by 35%',
      'Real-time synchronization across admissions, examinations, and fee modules',
    ],
    tech: ['Laravel', 'PostgreSQL', 'React.js', 'GitLab CI/CD', 'SVN'],
    icon: '🎓',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Hospital Management System (HMIS)',
    subtitle: 'ABDM-Integrated Healthcare Platform',
    description: 'Shipped a comprehensive HMIS synchronized with Ayushman Bharat Digital Mission (ABDM) achieving national health stack compliance with embedded payment processing.',
    achievements: [
      'Processing 1,000+ daily transactions with Razorpay integration',
      'Real-time synchronization with 15+ diagnostic equipment models',
      'Mobile access to patient registration, appointments, and lab reports',
    ],
    tech: ['Laravel', 'PostgreSQL', 'React.js', 'Razorpay', 'ABDM', 'RESTful APIs'],
    icon: '🏥',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Learners Quiz App',
    subtitle: 'Interactive Learning Platform',
    description: 'Launched a question-based quiz platform supporting 5,000+ monthly active learners with comprehensive admin dashboard for managing 10,000+ quiz questions.',
    achievements: [
      'Sub-200ms response times for question retrieval',
      'Real-time quiz delivery and instant score tracking',
      'Analytics and leaderboards for competitive learning',
    ],
    tech: ['PHP', 'React Native', 'MySQL', 'RESTful APIs'],
    icon: '📱',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'FlowTransact P2P Gateway',
    subtitle: 'Secure Payment Platform',
    description: 'Developed a peer-to-peer payment platform with AES-256 encrypted data storage, two-factor authentication, and real-time transaction processing.',
    achievements: [
      'Handling 500+ transactions per hour',
      'Real-time status updates and webhook notifications',
      'Reduced payment workflow completion time by 30%',
    ],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'RESTful APIs'],
    icon: '💳',
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Building scalable solutions that serve thousands of users across education, healthcare, and fintech domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden card-hover animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="text-5xl mb-4">{project.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 font-medium">{project.subtitle}</p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-accent font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-gold font-semibold mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full border border-accent/30 bg-accent/5 text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
