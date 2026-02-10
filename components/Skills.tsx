'use client'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: 'accent',
    skills: ['React.js', 'Redux', 'React Native', 'Material-UI', 'Bootstrap', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: 'gold',
    skills: ['Laravel', 'Node.js', 'CodeIgniter', 'RESTful APIs', 'PHP'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: 'accent',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁️',
    color: 'gold',
    skills: ['AWS (EC2, S3, RDS)', 'Docker', 'Kubernetes', 'CI/CD Pipelines', 'GitLab CI/CD', 'DigitalOcean'],
  },
  {
    title: 'Tools & Methods',
    icon: '🛠️',
    color: 'accent',
    skills: ['Git', 'GitHub', 'GitLab', 'SVN', 'Agile/Scrum', 'Test-Driven Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-lg ${
                    category.color === 'accent' ? 'bg-accent/20' : 'bg-gold/20'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    category.color === 'accent' ? 'text-accent' : 'text-gold'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 text-sm rounded-lg border transition-all duration-300 hover:scale-105 ${
                        category.color === 'accent'
                          ? 'border-accent/30 bg-accent/10 text-accent hover:bg-accent/20'
                          : 'border-gold/30 bg-gold/10 text-gold hover:bg-gold/20'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Highlights */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-xl font-bold text-accent mb-2">Performance</h4>
              <p className="text-gray-400">40% API optimization & 25% render improvement</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">📦</div>
              <h4 className="text-xl font-bold text-gold mb-2">Deployment</h4>
              <p className="text-gray-400">60% faster with CI/CD & containerization</p>
            </div>
            
            <div className="glass rounded-xl p-6 text-center card-hover">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-xl font-bold text-accent mb-2">Scalability</h4>
              <p className="text-gray-400">10,000+ concurrent users with 99.9% uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
