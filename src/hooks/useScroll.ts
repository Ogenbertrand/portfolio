import { useState, useEffect } from 'react'

export const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, scrollY }
}

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const [node, setNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      threshold: 0.1,
      rootMargin: '0px',
      ...options,
    })

    observer.observe(node)

    return () => observer.disconnect()
  }, [node, options])

  return [setNode, entry] as const
}