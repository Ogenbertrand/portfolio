export interface Skill {
  name: string
  icon: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools'
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', level: 90, category: 'frontend' },
  { name: 'HTML5', icon: 'html5', level: 95, category: 'frontend' },
  { name: 'CSS3', icon: 'css3', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', level: 85, category: 'frontend' },
  
  // Backend
  { name: 'Java', icon: 'java', level: 95, category: 'backend' },
  { name: 'Spring Boot', icon: 'spring', level: 90, category: 'backend' },
  { name: 'Python', icon: 'python', level: 80, category: 'backend' },
  { name: 'Node.js', icon: 'nodedotjs', level: 85, category: 'backend' },
  { name: 'Express.js', icon: 'express', level: 80, category: 'backend' },
  { name: 'FastAPI', icon: 'fastapi', level: 75, category: 'backend' },
  
  // Database
  { name: 'PostgreSQL', icon: 'postgresql', level: 85, category: 'database' },
  { name: 'MongoDB', icon: 'mongodb', level: 80, category: 'database' },
  { name: 'Redis', icon: 'redis', level: 75, category: 'database' },
  
  // DevOps
  { name: 'Docker', icon: 'docker', level: 90, category: 'devops' },
  { name: 'Kubernetes', icon: 'kubernetes', level: 75, category: 'devops' },
  { name: 'AWS', icon: 'amazonaws', level: 80, category: 'devops' },
  { name: 'GitHub Actions', icon: 'githubactions', level: 85, category: 'devops' },
  { name: 'Jenkins', icon: 'jenkins', level: 70, category: 'devops' },
  
  // Tools & Technologies
  { name: 'Git', icon: 'git', level: 90, category: 'tools' },
  { name: 'Linux', icon: 'linux', level: 85, category: 'tools' },
  { name: 'Keycloak', icon: 'keycloak', level: 90, category: 'tools' },
  { name: 'JWT', icon: 'jwt', level: 85, category: 'tools' },
  { name: 'OAuth2', icon: 'oauth', level: 80, category: 'tools' },
  { name: 'GraphQL', icon: 'graphql', level: 75, category: 'tools' },
  { name: 'REST APIs', icon: 'restapi', level: 95, category: 'tools' }
]

export const skillCategories = [
  { id: 'frontend', name: 'Frontend Development', icon: 'frontend' },
  { id: 'backend', name: 'Backend Development', icon: 'backend' },
  { id: 'database', name: 'Database Systems', icon: 'database' },
  { id: 'devops', name: 'DevOps & Cloud', icon: 'devops' },
  { id: 'tools', name: 'Tools & Technologies', icon: 'tools' }
]