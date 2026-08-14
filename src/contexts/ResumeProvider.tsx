import type { ReactNode } from 'react'
import { useState } from 'react'
import { ResumeContext } from './ResumeContext'
import {
  createCertificate,
  createEducation,
  createExperience,
  createProject,
  initialResumeState,
} from '../types/resume'

type ResumeProviderProps = {
  children: ReactNode
}

export function ResumeProvider({ children }: ResumeProviderProps) {
  const [resume, setResume] = useState(initialResumeState)

  const updateProfile = (field: keyof typeof initialResumeState.profile, value: string) => {
    setResume((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }))
  }

  const updateEducation = (id: number, field: keyof typeof initialResumeState.education[number], value: string) => {
    setResume((current) => ({
      ...current,
      education: current.education.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const addEducation = () => {
    setResume((current) => ({
      ...current,
      education: [...current.education, createEducation(Date.now())],
    }))
  }

  const removeEducation = (id: number) => {
    setResume((current) => ({
      ...current,
      education: current.education.filter((entry) => entry.id !== id),
    }))
  }

  const updateCertificate = (id: number, field: keyof typeof initialResumeState.certificates[number], value: string) => {
    setResume((current) => ({
      ...current,
      certificates: current.certificates.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const addCertificate = () => {
    setResume((current) => ({
      ...current,
      certificates: [...current.certificates, createCertificate(Date.now())],
    }))
  }

  const removeCertificate = (id: number) => {
    setResume((current) => ({
      ...current,
      certificates: current.certificates.filter((entry) => entry.id !== id),
    }))
  }

  const updateExperience = (id: number, field: keyof typeof initialResumeState.experience[number], value: string) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const addExperience = () => {
    setResume((current) => ({
      ...current,
      experience: [...current.experience, createExperience(Date.now())],
    }))
  }

  const removeExperience = (id: number) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.filter((entry) => entry.id !== id),
    }))
  }

  const updateProject = (id: number, field: keyof typeof initialResumeState.projects[number], value: string) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const addProject = () => {
    setResume((current) => ({
      ...current,
      projects: [...current.projects, createProject(Date.now())],
    }))
  }

  const removeProject = (id: number) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.filter((entry) => entry.id !== id),
    }))
  }

  const updateSkillList = (key: 'technicalSkills' | 'softSkills' | 'languages', index: number, value: string) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].map((entry, itemIndex) =>
        itemIndex === index ? value : entry,
      ),
    }))
  }

  const addSkill = (key: 'technicalSkills' | 'softSkills' | 'languages') => {
    setResume((current) => ({
      ...current,
      [key]: [...current[key], ''],
    }))
  }

  const removeSkill = (key: 'technicalSkills' | 'softSkills' | 'languages', index: number) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].filter((_, itemIndex) => itemIndex !== index),
    }))
  }

  return (
    <ResumeContext.Provider
      value={{
        resume,
        updateProfile,
        updateEducation,
        addEducation,
        removeEducation,
        updateCertificate,
        addCertificate,
        removeCertificate,
        updateExperience,
        addExperience,
        removeExperience,
        updateProject,
        addProject,
        removeProject,
        updateSkillList,
        addSkill,
        removeSkill,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}
