import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import Articles from './components/sections/Articles'
import Footer from './components/layout/Footer'
import './App.css'

const SectionPage = ({ children }: { children: ReactNode }) => (
  <div className="pt-16">
    {children}
  </div>
)

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="App">
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route
                  path="/about"
                  element={(
                    <SectionPage>
                      <About />
                    </SectionPage>
                  )}
                />
                <Route
                  path="/skills"
                  element={(
                    <SectionPage>
                      <Skills />
                    </SectionPage>
                  )}
                />
                <Route
                  path="/projects"
                  element={(
                    <SectionPage>
                      <Projects />
                    </SectionPage>
                  )}
                />
                <Route
                  path="/experience"
                  element={(
                    <SectionPage>
                      <Experience />
                    </SectionPage>
                  )}
                />
                <Route
                  path="/contact"
                  element={(
                    <SectionPage>
                      <Contact />
                    </SectionPage>
                  )}
                />
                <Route
                  path="/articles"
                  element={(
                    <SectionPage>
                      <Articles />
                    </SectionPage>
                  )}
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
