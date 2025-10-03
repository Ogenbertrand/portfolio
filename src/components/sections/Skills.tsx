import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaReact, 
  FaJava, 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaLinux,
  FaAws,
  FaNodeJs
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiSpringboot, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si'
import { FaKey } from 'react-icons/fa'
import { skills, skillCategories } from '../../data/skills'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'react': <FaReact className="text-blue-500" />,
      'typescript': <SiTypescript className="text-blue-600" />,
      'javascript': <SiJavascript className="text-yellow-500" />,
      'html5': <SiHtml5 className="text-orange-500" />,
      'css3': <SiCss3 className="text-blue-500" />,
      'tailwindcss': <SiTailwindcss className="text-cyan-500" />,
      'java': <FaJava className="text-red-500" />,
      'spring': <SiSpringboot className="text-green-500" />,
      'python': <FaPython className="text-blue-400" />,
      'nodedotjs': <FaNodeJs className="text-green-600" />,
      'express': <SiExpress className="text-gray-600" />,
      'fastapi': <SiFastapi className="text-teal-500" />,
      'postgresql': <SiPostgresql className="text-blue-700" />,
      'mongodb': <SiMongodb className="text-green-600" />,
      'redis': <SiRedis className="text-red-500" />,
      'docker': <FaDocker className="text-blue-400" />,
      'kubernetes': <SiKubernetes className="text-blue-600" />,
      'amazonaws': <FaAws className="text-orange-500" />,
      'githubactions': <SiGithubactions className="text-gray-700" />,
      'jenkins': <SiJenkins className="text-gray-700" />,
      'git': <FaGitAlt className="text-red-500" />,
      'linux': <FaLinux className="text-black" />,
      'keycloak': <FaKey className="text-blue-600" />,
      'jwt': <span className="text-purple-500 font-bold">JWT</span>,
      'oauth': <span className="text-blue-500 font-bold">OAuth2</span>,
      'graphql': <SiGraphql className="text-pink-500" />,
      'restapi': <span className="text-green-500 font-bold">REST</span>
    }
    return iconMap[iconName] || <span className="text-gray-500">⚡</span>
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

        {/* Category Filter */}
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
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
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
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">
                    {getIcon(skill.icon)}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-3">
                  {skill.name}
                </h3>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                  />
                </div>
                
                <div className="text-center">
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                
                {/* Category Badge */}
                <div className="mt-3 text-center">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {skillCategories.find(cat => cat.id === skill.category)?.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">Frontend</div>
              <div className="text-blue-100">
                React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Backend</div>
              <div className="text-blue-100">
                Java, Spring Boot, Python, Node.js, Express, FastAPI
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">DevOps</div>
              <div className="text-blue-100">
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