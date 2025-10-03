export interface Experience {
  id: number
  title: string
  company: string
  location: string
  duration: string
  description: string[]
  technologies: string[]
  type: 'work' | 'opensource' | 'education'
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full Stack Software Engineer',
    company: 'Adorsys',
    location: 'Cameroon',
    duration: '2023 - Present',
    description: [
      'Developing and maintaining enterprise-level applications using Java Spring Boot and React',
      'Implementing secure authentication and authorization systems using Keycloak and OAuth2',
      'Contributing to open-source projects including Keycloak identity management platform',
      'Building RESTful APIs and microservices architecture for scalable applications',
      'Collaborating with cross-functional teams in Agile/Scrum environment'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'Keycloak', 'PostgreSQL', 'Docker', 'Kubernetes'],
    type: 'work'
  },
  {
    id: 2,
    title: 'Active Open Source Contributor',
    company: 'Keycloak Project',
    location: 'Global',
    duration: '2023 - Present',
    description: [
      'Successfully contributed to Keycloak identity and access management platform',
      'Implemented enhanced validation checks for missing disclosures in JWT processing',
      'Developed robust error handling for invalid disclosure data',
      'Collaborated with international development team on security enhancements',
      'Recognized contributor in Keycloak 26.1.0 release notes'
    ],
    technologies: ['Java', 'Keycloak', 'OAuth2', 'OIDC', 'JWT', 'Security'],
    type: 'opensource'
  },
  {
    id: 3,
    title: 'Systems Administrator & IT Project Manager',
    company: 'Previous Role',
    location: 'Cameroon',
    duration: '2021 - 2023',
    description: [
      'Managed IT infrastructure and system administration for enterprise clients',
      'Led technical projects from conception to deployment',
      'Implemented DevOps practices and automation solutions',
      'Maintained server environments and ensured system reliability',
      'Provided technical leadership and mentorship to junior developers'
    ],
    technologies: ['Linux', 'Docker', 'AWS', 'Jenkins', 'Git', 'Bash'],
    type: 'work'
  },
  {
    id: 4,
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Buea',
    location: 'Cameroon',
    duration: '2017 - 2021',
    description: [
      'Comprehensive education in computer science fundamentals',
      'Specialized in software engineering and system architecture',
      'Participated in various programming competitions and hackathons',
      'Built strong foundation in algorithms, data structures, and software design',
      'Graduated with honors and technical excellence'
    ],
    technologies: ['Java', 'C++', 'Python', 'Data Structures', 'Algorithms', 'Software Engineering'],
    type: 'education'
  }
]