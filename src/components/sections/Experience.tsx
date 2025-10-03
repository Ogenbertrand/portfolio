import { motion } from 'framer-motion'
import { FiBriefcase, FiAward, FiBook, FiCode } from 'react-icons/fi'
import { experiences } from '../../data/experience'

const Experience = () => {
  const getIcon = (type: string) => {
    const icons = {
      'work': FiBriefcase,
      'opensource': FiCode,
      'education': FiBook
    }
    return icons[type as keyof typeof icons] || FiAward
  }

  const getTypeColor = (type: string) => {
    const colors = {
      'work': 'bg-blue-100 text-blue-800',
      'opensource': 'bg-green-100 text-green-800',
      'education': 'bg-purple-100 text-purple-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <section id="experience" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Experience & Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            My professional journey through various roles, open-source contributions, and continuous learning
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

            {experiences.map((experience, index) => {
              const Icon = getIcon(experience.type)
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  {/* Experience Card */}
                  <div className="ml-16 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg ${getTypeColor(experience.type)}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {experience.title}
                          </h3>
                          <p className="text-lg text-gray-700 font-medium">
                            {experience.company}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-600">
                              📍 {experience.location}
                            </span>
                            <span className="text-sm text-gray-600">
                              📅 {experience.duration}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                              {experience.type === 'opensource' ? 'Open Source' : experience.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {experience.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                            <span className="text-gray-700 leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {experiences.filter(e => e.type === 'work').length}+
              </div>
              <div className="text-blue-100">Years Professional Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {experiences.filter(e => e.type === 'opensource').length}
              </div>
              <div className="text-blue-100">Open Source Contributions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">
                {experiences.filter(e => e.type === 'education').length}
              </div>
              <div className="text-blue-100">Educational Milestones</div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-blue-100 leading-relaxed">
              My journey is characterized by continuous learning, active open-source participation, 
              and a commitment to delivering high-quality software solutions that make a positive impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience