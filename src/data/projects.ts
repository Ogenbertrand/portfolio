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
    id: 8,
    title: 'Keycloak Contributions',
    description: 'Active contributor to Keycloak open-source identity and access management platform, implementing security enhancements and bug fixes.',
    technologies: ['Java', 'Keycloak', 'OAuth2', 'OIDC', 'Security'],
    githubUrl: 'https://github.com/keycloak/keycloak',
    category: 'backend',
    featured: true
  },
  {
    id: 9,
    title: 'CodeMentor AI',
    description: 'An LLM-powered code review tool that provides expert-level code reviews on GitHub Pull Requests with seamless VS Code integration.',
    technologies: ['TypeScript', 'React', 'AI', 'Web App'],
    githubUrl: 'https://github.com/Ogenbertrand/codementor-ai',
    category: 'web',
    featured: true
  }
]
