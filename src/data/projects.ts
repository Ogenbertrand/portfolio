export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  category: 'web' | 'mobile' | 'backend' | 'devops'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Springboot API with PostgreSQL',
    description: 'A robust REST API built with Spring Boot and PostgreSQL, featuring authentication, data validation, and comprehensive error handling.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Docker'],
    githubUrl: 'https://github.com/Ogenbertrand/Springboot-API-PostgresSQL',
    category: 'backend',
    featured: true
  },
  {
    id: 2,
    title: 'React Calculator',
    description: 'A modern, responsive calculator application built with React and TypeScript, featuring advanced calculations and a clean UI.',
    technologies: ['React', 'TypeScript', 'CSS3', 'Jest'],
    githubUrl: 'https://github.com/Ogenbertrand/React-Calculator',
    liveUrl: 'https://ogenbertrand.github.io/React-Calculator',
    category: 'web',
    featured: true
  },
  {
    id: 3,
    title: 'TrackMe Backend',
    description: 'A Python-based backend application for tracking and monitoring systems, with real-time data processing capabilities.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/Ogenbertrand/trackme-backend',
    category: 'backend',
    featured: false
  },
  {
    id: 4,
    title: 'Monitoring Tool',
    description: 'A comprehensive monitoring solution built with JavaScript, providing real-time system metrics and alerting capabilities.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'React'],
    githubUrl: 'https://github.com/Ogenbertrand/monitoring-tool',
    category: 'web',
    featured: false
  },
  {
    id: 5,
    title: 'SD-JWT Library',
    description: 'Contributed to the SD-JWT library for selective disclosure JWT documents, enhancing security and privacy in digital credentials.',
    technologies: ['Java', 'JWT', 'Cryptography', 'Security'],
    githubUrl: 'https://github.com/Ogenbertrand/sd-jwt',
    category: 'backend',
    featured: true
  },
  {
    id: 6,
    title: 'E2E Banking App',
    description: 'A comprehensive banking application with end-to-end testing, featuring secure transactions and user management.',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/Ogenbertrand/e2e-banking-app',
    category: 'web',
    featured: false
  },
  {
    id: 7,
    title: 'Docker Compose Setup',
    description: 'Production-ready Docker Compose configuration for Spring Boot applications with monitoring and logging.',
    technologies: ['Docker', 'Docker Compose', 'Spring Boot', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/Ogenbertrand/docker-compose-spring-boot',
    category: 'devops',
    featured: false
  },
  {
    id: 8,
    title: 'Keycloak Contributions',
    description: 'Active contributor to Keycloak open-source identity and access management platform, implementing security enhancements and bug fixes.',
    technologies: ['Java', 'Keycloak', 'OAuth2', 'OIDC', 'Security'],
    githubUrl: 'https://github.com/keycloak/keycloak',
    category: 'backend',
    featured: true
  }
]