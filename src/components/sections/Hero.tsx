import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaBolt,
  FaRocket,
  FaJava,
  FaPython
} from 'react-icons/fa'
import { FaRust } from 'react-icons/fa6'
import { SiTypescript } from 'react-icons/si'
import { Link } from 'react-router-dom'
import pic from '../../assets/pic.jpg'

const Hero = () => {
  const MotionLink = motion(Link)

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-float" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-65 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text">Bertrand Ogen</span>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-medium text-gray-700"
              >
                Full Stack Software Engineer & DevOps Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
                I build scalable web applications and contribute to open-source projects.
                Currently working with Java, React, and TypeScript while actively contributing
                to Keycloak identity management platform.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
            >
              <MotionLink
                to="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <FaArrowDown size={14} />
              </MotionLink>

              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaEnvelope size={14} />
              </MotionLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mt-8"
            >
              <motion.a
                href="https://github.com/Ogenbertrand"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/bertrand-ogen-2a9108264"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </motion.a>

              <motion.a
                href="mailto:ogenbertrand@gmail.com"
                whileHover={{ y: -2 }}
                className="text-gray-600 hover:text-accent-600 transition-colors duration-200"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 p-2">
                <div className="w-full h-full rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary-100 shadow-md">
                      <img
                        src={pic}
                        alt="Bertrand Ogen portrait"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                        <FaJava className="w-3 h-3" />
                        Java
                      </span>
                      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">
                        <FaRust className="w-3 h-3" />
                        Rust
                      </span>
                      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium">
                        <SiTypescript className="w-3 h-3" />
                        TypeScript
                      </span>
                      <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                        <FaPython className="w-3 h-3" />
                        Python
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md"
              >
                <FaBolt className="text-primary-700" size={18} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md"
              >
                <FaRocket className="text-accent-700" size={18} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <MotionLink
            to="/about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 hover:text-primary-700 transition-colors duration-200"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <FaArrowDown size={16} />
          </MotionLink>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
