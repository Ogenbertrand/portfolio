import { motion } from 'framer-motion'
import {
  FaAward,
  FaCode,
  FaUsers,
  FaGlobe,
  FaShieldAlt,
  FaLaptopCode,
  FaCogs,
  FaHandshake
} from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: FaCode, value: '5+', label: 'Years Experience' },
    { icon: FaAward, value: '50+', label: 'Projects Completed' },
    { icon: FaUsers, value: '10+', label: 'Open Source Contributions' },
    { icon: FaGlobe, value: '3+', label: 'Countries Worked With' }
  ]

  const achievements = [
    {
      title: 'Keycloak Contributor',
      description: 'Active contributor to the Keycloak open-source identity and access management platform with merged PRs in version 26.1.0',
      icon: FaShieldAlt
    },
    {
      title: 'Full Stack Expertise',
      description: 'Comprehensive experience in both frontend and backend development with modern technologies and best practices',
      icon: FaLaptopCode
    },
    {
      title: 'DevOps Practitioner',
      description: 'Skilled in implementing CI/CD pipelines, containerization, and cloud infrastructure management',
      icon: FaCogs
    },
    {
      title: 'Open Source Advocate',
      description: 'Passionate about open source development and community collaboration across multiple projects',
      icon: FaHandshake
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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-100 to-secondary-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I&apos;m a passionate Full Stack Software Engineer based in Cameroon, with over 5 years
                  of experience in building robust, scalable applications. My journey in technology
                  began with a deep curiosity about how things work, which evolved into a career
                  dedicated to creating innovative solutions.
                </p>
                <p>
                  Currently, I work at Adorsys where I specialize in enterprise-level applications
                  using Java Spring Boot and React. I&apos;m particularly proud of my contributions to
                  the Keycloak open-source project, where I&apos;ve helped enhance security and improve
                  user experience for thousands of developers worldwide.
                </p>
                <p>
                  My expertise spans across the full development stack, from designing intuitive
                  user interfaces to building robust backend systems and implementing DevOps
                  practices. I believe in writing clean, maintainable code and staying current
                  with the latest industry trends and best practices.
                </p>
                <p>
                  When I&apos;m not coding, you can find me contributing to open-source projects,
                  learning new technologies, or sharing knowledge with the developer community.
                  I&apos;m always excited about new challenges and opportunities to grow both personally
                  and professionally.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
                className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                  <achievement.icon className="w-5 h-5" />
                </div>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-secondary-900 rounded-2xl p-8 text-white"
            >
              <h4 className="text-xl font-bold mb-4">My Philosophy</h4>
              <blockquote className="text-lg italic leading-relaxed text-gray-100">
                &quot;Great software is not just about writing code, it&apos;s about solving real problems,
                building sustainable solutions, and continuously learning and improving. I believe
                in the power of collaboration, open-source principles, and staying curious about
                emerging technologies.&quot;
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
