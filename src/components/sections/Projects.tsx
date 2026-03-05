import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaGlobe,
  FaServer,
  FaCloud,
  FaMobileAlt,
  FaLaptopCode
} from 'react-icons/fa'
import type { IconType } from 'react-icons'
import { projects } from '../../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'backend', name: 'Backend' },
    { id: 'devops', name: 'DevOps' }
  ]

  const filteredProjects = selectedCategory && selectedCategory !== 'all'
    ? projects.filter(project => project.category === selectedCategory)
    : projects

  const getCategoryIcon = (category: string): IconType => {
    const icons: Record<string, IconType> = {
      web: FaGlobe,
      backend: FaServer,
      devops: FaCloud,
      mobile: FaMobileAlt
    }

    return icons[category] || FaLaptopCode
  }

  return (
    <section id="projects" className="section bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            A showcase of my recent work, including open-source contributions and personal projects
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id || (selectedCategory === null && category.id === 'all')
                  ? 'bg-primary-700 text-white shadow-md'
                  : 'bg-gray-100 border border-gray-300 text-gray-700 hover:bg-gray-200'
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                          <CategoryIcon size={16} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {project.title}
                          </h3>
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mt-1 capitalize">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      {project.featured && (
                        <div className="flex items-center text-accent-600">
                          <FaStar className="w-4 h-4" />
                        </div>
                      )}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span className="text-sm">Code</span>
                        </motion.a>

                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center space-x-2 text-primary-700 hover:text-primary-800 transition-colors duration-200"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            <span className="text-sm">Live Demo</span>
                          </motion.a>
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedProject(project.id)}
                        className="text-primary-700 hover:text-primary-800 text-sm font-medium transition-colors duration-200"
                      >
                        View Details
                      </motion.button>
                    </div>
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
          className="mt-16 bg-gradient-to-br from-gray-900 to-secondary-900 rounded-2xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">{projects.length}</div>
              <div className="text-gray-300">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {projects.filter(p => p.category === 'web').length}
              </div>
              <div className="text-gray-300">Web Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {projects.filter(p => p.category === 'backend').length}
              </div>
              <div className="text-gray-300">Backend APIs</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                {projects.filter(p => p.featured).length}
              </div>
              <div className="text-gray-300">Featured</div>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject)
                if (!project) return null

                return (
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full capitalize">
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="inline-flex items-center px-3 py-1 bg-accent-100 text-accent-800 text-sm rounded-full">
                              <FaStar className="w-4 h-4 mr-1" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedProject(null)}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        aria-label="Close modal"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Description</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                          <FaGithub className="w-5 h-5" />
                          <span>View Code</span>
                        </motion.a>

                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-800 transition-colors duration-200"
                          >
                            <FaExternalLinkAlt className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
