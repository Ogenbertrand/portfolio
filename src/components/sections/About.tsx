import { motion } from 'framer-motion'
import { FiAward, FiCode, FiUsers, FiGlobe } from 'react-icons/fi'

const About = () => {
  const stats = [
    { icon: FiCode, value: '5+', label: 'Years Experience' },
    { icon: FiAward, value: '50+', label: 'Projects Completed' },
    { icon: FiUsers, value: '10+', label: 'Open Source Contributions' },
    { icon: FiGlobe, value: '3+', label: 'Countries Worked With' }
  ]

  const achievements = [
    {
      title: 'Keycloak Contributor',
      description: 'Active contributor to the Keycloak open-source identity and access management platform with merged PRs in version 26.1.0',
      icon: '🔐'
    },
    {
      title: 'Full Stack Expertise',
      description: 'Comprehensive experience in both frontend and backend development with modern technologies and best practices',
      icon: '💻'
    },
    {
      title: 'DevOps Practitioner',
      description: 'Skilled in implementing CI/CD pipelines, containerization, and cloud infrastructure management',
      icon: '⚙️'
    },
    {
      title: 'Open Source Advocate',
      description: 'Passionate about open source development and community collaboration across multiple projects',
      icon: '🌟'
    }
  ]

  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Passionate Full Stack Software Engineer with expertise in building scalable applications 
            and contributing to open-source projects that make a difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Software Engineer based in Cameroon, with over 5 years 
                  of experience in building robust, scalable applications. My journey in technology 
                  began with a deep curiosity about how things work, which evolved into a career 
                  dedicated to creating innovative solutions.
                </p>
                <p>
                  Currently, I work at Adorsys where I specialize in enterprise-level applications 
                  using Java Spring Boot and React. I'm particularly proud of my contributions to 
                  the Keycloak open-source project, where I've helped enhance security and improve 
                  user experience for thousands of developers worldwide.
                </p>
                <p>
                  My expertise spans across the full development stack, from designing intuitive 
                  user interfaces to building robust backend systems and implementing DevOps 
                  practices. I believe in writing clean, maintainable code and staying current 
                  with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, 
                  learning new technologies, or sharing knowledge with the developer community. 
                  I'm always excited about new challenges and opportunities to grow both personally 
                  and professionally.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Achievements</h3>
            
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex-shrink-0 text-3xl">{achievement.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Technical Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">My Philosophy</h4>
              <blockquote className="text-lg italic leading-relaxed">
                "Great software is not just about writing code—it's about solving real problems, 
                building sustainable solutions, and continuously learning and improving. I believe 
                in the power of collaboration, open-source principles, and staying curious about 
                emerging technologies."
              </blockquote>
              <div className="mt-6 text-sm text-gray-300">
                — Bertrand Ogen
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About