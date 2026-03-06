import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Articles', to: '/articles' },
    { name: 'Experience', to: '/experience' },
    { name: 'Contact', to: '/contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center space-x-2"
          >
            <Link to="/" className="inline-flex items-center space-x-2">
              <img
                src={logo}
                alt="Bertrand Ogen logo"
                className="w-9 h-9 rounded-lg object-cover border border-gray-200 shadow-sm"
              />
              <span className="font-display font-semibold text-gray-900 hidden sm:block">
                Bertrand Ogen
              </span>
            </Link>
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `font-medium transition-colors duration-200 ${
                      isActive ? 'text-primary-700' : 'text-gray-700 hover:text-primary-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-4">
            <motion.a
              href="https://github.com/Ogenbertrand"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/bertrand-ogen-2a9108264"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:ogenbertrand@gmail.com"
              whileHover={{ y: -2 }}
              className="text-gray-600 hover:text-accent-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={18} />
            </motion.a>
          </div>

          <button
            className="lg:hidden text-gray-700 hover:text-primary-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <nav className="py-4 space-y-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-700 hover:bg-gray-100'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              <div className="flex items-center justify-center space-x-6 py-4 border-t border-gray-200">
                <a
                  href="https://github.com/Ogenbertrand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/bertrand-ogen-2a9108264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-700 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:ogenbertrand@gmail.com"
                  className="text-gray-600 hover:text-accent-600 transition-colors duration-200"
                  aria-label="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
