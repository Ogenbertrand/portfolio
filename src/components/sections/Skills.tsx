import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaCode,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaLeaf,
  FaServer,
  FaDatabase,
  FaDocker,
  FaCubes,
  FaAws,
  FaTools,
  FaGitAlt,
  FaLinux,
  FaShieldAlt,
  FaKey
} from 'react-icons/fa'
import { FaRust } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { skills, skillCategories } from '../../data/skills'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getIcon = (iconName: string): IconType => {
    const iconMap: Record<string, IconType> = {
      react: FaReact,
      typescript: FaCode,
      javascript: FaJs,
      html5: FaHtml5,
      css3: FaCss3Alt,
      tailwindcss: FaCode,
      java: FaJava,
      rust: FaRust,
      spring: FaLeaf,
      python: FaPython,
      nodedotjs: FaNodeJs,
      express: FaServer,
      fastapi: FaServer,
      postgresql: FaDatabase,
      mongodb: FaDatabase,
      redis: FaDatabase,
      docker: FaDocker,
      kubernetes: FaCubes,
      amazonaws: FaAws,
      githubactions: FaTools,
      jenkins: FaTools,
      git: FaGitAlt,
      linux: FaLinux,
      keycloak: FaShieldAlt,
      jwt: FaKey,
      oauth: FaShieldAlt,
      graphql: FaCode,
      restapi: FaServer
    }

    return iconMap[iconName] || FaCode
  }

  const filteredSkills = selectedCategory
    ? skills.filter(skill => skill.category === selectedCategory)
    : skills

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A comprehensive skill set spanning frontend, backend, databases, DevOps, and modern development tools
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-primary-700 text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Skills
          </motion.button>

          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-700 text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = getIcon(skill.icon)

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
                    {skill.name}
                  </h3>

                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-primary-700 to-accent-600 h-2 rounded-full"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>

                  <div className="mt-3 text-center">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      {skillCategories.find(cat => cat.id === skill.category)?.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-800 to-secondary-800 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">Frontend</div>
              <div className="text-gray-200">
                React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Backend</div>
              <div className="text-gray-200">
                Java, Spring Boot, Python, Node.js, Express, FastAPI
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">DevOps</div>
              <div className="text-gray-200">
                Docker, Kubernetes, AWS, GitHub Actions, Jenkins
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
