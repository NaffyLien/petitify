import { createContext } from 'react'
import type { ResumeState } from '../types/resume'

export type ResumeContextValue = {
  resume: ResumeState
  updateProfile: (field: keyof ResumeState['profile'], value: string) => void
  updateEducation: (id: number, field: keyof import('../types/resume').EducationItem, value: string) => void
  addEducation: () => void
  removeEducation: (id: number) => void
  updateCertificate: (id: number, field: keyof import('../types/resume').CertificateItem, value: string) => void
  addCertificate: () => void
  removeCertificate: (id: number) => void
  updateExperience: (id: number, field: keyof import('../types/resume').ExperienceItem, value: string) => void
  addExperience: () => void
  removeExperience: (id: number) => void
  updateProject: (id: number, field: keyof import('../types/resume').ProjectItem, value: string) => void
  addProject: () => void
  removeProject: (id: number) => void
  updateSkillList: (key: 'technicalSkills' | 'softSkills' | 'languages', index: number, value: string) => void
  addSkill: (key: 'technicalSkills' | 'softSkills' | 'languages') => void
  removeSkill: (key: 'technicalSkills' | 'softSkills' | 'languages', index: number) => void
}

export const ResumeContext = createContext<ResumeContextValue | null>(null)
