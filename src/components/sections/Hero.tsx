import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
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
    <section className="min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50 pt-24 pb-12 sm:pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 w-0 h-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-65 -translate-x-[18rem] sm:-translate-x-[28rem] -translate-y-[9rem] sm:-translate-y-[12rem]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 w-0 h-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-65 translate-x-[11rem] sm:translate-x-[18rem] translate-y-[8rem] sm:translate-y-[10rem]" />
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute left-1/2 top-1/2 w-0 h-0"
        >
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 translate-x-[1rem] sm:translate-x-[2rem] -translate-y-[2rem] sm:-translate-y-[3rem]" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I&apos;m</span>
                <br />
                <span className="gradient-text">Bertrand Ogen</span>
              </h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700"
              >
                Full Stack Software Engineer & DevOps Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed"
              >
              A Software and DevOps Engineer who enjoys building systems that are reliable, scalable, and meaningful.

              My work spans modern software development, cloud infrastructure, and automation, and I have strong knowledge of AI technologies and AI agents. 
              I’m always motivated by challenging problems and the opportunity to build technology that truly helps people.
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
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <FaArrowDown size={14} />
              </MotionLink>

              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <FaEnvelope size={14} />
              </MotionLink>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex items-center justify-center lg:justify-start space-x-5 sm:space-x-6 mt-8"
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
            <div className="relative w-fit">
              <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary-600 to-secondary-700 p-2">
                <div className="w-full h-full rounded-full bg-white border-4 border-white shadow-xl flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden border-4 border-primary-100 shadow-md">
                    <img
                      src={pic}
                      alt="Bertrand Ogen portrait"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 left-4 sm:left-2 lg:left-0">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full bg-emerald-100 text-emerald-900 text-[11px] sm:text-xs lg:text-sm font-semibold shadow-md font-mono whitespace-nowrap">
                  <FaJava className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Java
                </span>
              </div>

              <div className="absolute top-1/2 -right-6 sm:-right-10 lg:-right-14 -translate-y-1/2">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full bg-amber-100 text-amber-900 text-[11px] sm:text-xs lg:text-sm font-semibold shadow-md font-mono whitespace-nowrap">
                  <FaRust className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Rust
                </span>
              </div>

              <div className="absolute -bottom-3 left-2 sm:left-0 lg:-left-5">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full bg-sky-100 text-sky-900 text-[11px] sm:text-xs lg:text-sm font-semibold shadow-md font-mono whitespace-nowrap">
                  <SiTypescript className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  TypeScript
                </span>
              </div>

              <div className="absolute bottom-4 -right-3 sm:-right-5 lg:-right-8">
                <span className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full bg-violet-100 text-violet-900 text-[11px] sm:text-xs lg:text-sm font-semibold shadow-md font-mono whitespace-nowrap">
                  <FaPython className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  Python
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
