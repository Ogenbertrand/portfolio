import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Ogenbertrand',
      icon: FiGithub,
      color: 'hover:text-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/bertrand-ogen-2a9108264',
      icon: FiLinkedin,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ogenbertrand',
      icon: FiTwitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:ogenbertrand@gmail.com',
      icon: FiMail,
      color: 'hover:text-red-500'
    }
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BO</span>
              </div>
              <span className="font-display font-semibold text-gray-900">
                Bertrand Ogen
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full Stack Software Engineer & DevOps Engineer specializing in modern web technologies, 
              cloud infrastructure, and open-source development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-gray-900">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className={`text-gray-600 ${link.color} transition-colors duration-200`}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p>Location: Cameroon</p>
              <p>Email: ogenbertrand@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm text-center md:text-left">
              © {currentYear} Bertrand Ogen. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Built with React, TypeScript & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer