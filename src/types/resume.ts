export type ProfileDetails = {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
}

export type EducationItem = {
  id: number
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  location: string
  description: string
}

export type CertificateItem = {
  id: number
  title: string
  issuer: string
  date: string
  credential: string
  description: string
}

export type ExperienceItem = {
  id: number
  role: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string
}

export type ProjectItem = {
  id: number
  name: string
  role: string
  link: string
  technologies: string
  description: string
}

export type ResumeState = {
  profile: ProfileDetails
  education: EducationItem[]
  certificates: CertificateItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  technicalSkills: string[]
  softSkills: string[]
  languages: string[]
  googleUser: {
    sub: string
    email: string
    name: string
    picture: string
    email_verified: boolean
  } | null
}

export const createEducation = (id: number): EducationItem => ({
  id,
  institution: '',
  degree: '',
  field: '',
  startDate: '',
  endDate: '',
  location: '',
  description: '',
})

export const createCertificate = (id: number): CertificateItem => ({
  id,
  title: '',
  issuer: '',
  date: '',
  credential: '',
  description: '',
})

export const createExperience = (id: number): ExperienceItem => ({
  id,
  role: '',
  company: '',
  location: '',
  startDate: '',
  endDate: '',
  description: '',
})

export const createProject = (id: number): ProjectItem => ({
  id,
  name: '',
  role: '',
  link: '',
  technologies: '',
  description: '',
})

export const initialResumeState: ResumeState = {
  profile: {
    name: 'Maya Johnson',
    title: 'Product Designer',
    email: 'maya@example.com',
    phone: '+1 (555) 245-0821',
    location: 'Paris, France',
    summary:
      'Product designer with 6+ years of experience building user-centered digital products for SaaS teams.',
  },
  education: [createEducation(1)],
  certificates: [createCertificate(1)],
  experience: [createExperience(1)],
  projects: [createProject(1)],
  technicalSkills: ['Figma', 'React', 'TypeScript', 'UX Research'],
  softSkills: ['Leadership', 'Communication', 'Teamwork'],
  languages: ['English', 'French', 'Spanish'],
  googleUser: null,
}
