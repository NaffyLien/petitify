import type { ReactNode } from 'react'
import { useState, useCallback } from 'react'
import { ResumeContext } from './ResumeContext'
import {
  createCertificate,
  createEducation,
  createExperience,
  createProject,
  initialResumeState,
} from '../types/resume'

const STORAGE_KEY = 'pocketify-resume'

function loadResume() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored) as typeof initialResumeState
    }
  } catch {
    return initialResumeState
  }
  return initialResumeState
}

type ResumeProviderProps = {
  children: ReactNode
}

export function ResumeProvider({ children }: ResumeProviderProps) {
  const [resume, setResume] = useState(loadResume)

  const persist = useCallback((current: typeof initialResumeState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(current))
    } catch {
      return
    }
  }, [])

  const updateProfile = (field: keyof typeof initialResumeState.profile, value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        profile: {
          ...current.profile,
          [field]: value,
        },
      }
      persist(next)
      return next
    })
  }

  const updateEducation = (id: number, field: keyof typeof initialResumeState.education[number], value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        education: current.education.map((entry) =>
          entry.id === id ? { ...entry, [field]: value } : entry,
        ),
      }
      persist(next)
      return next
    })
  }

  const addEducation = () => {
    setResume((current) => {
      const next = {
        ...current,
        education: [...current.education, createEducation(Date.now())],
      }
      persist(next)
      return next
    })
  }

  const removeEducation = (id: number) => {
    setResume((current) => {
      const next = {
        ...current,
        education: current.education.filter((entry) => entry.id !== id),
      }
      persist(next)
      return next
    })
  }

  const updateCertificate = (id: number, field: keyof typeof initialResumeState.certificates[number], value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        certificates: current.certificates.map((entry) =>
          entry.id === id ? { ...entry, [field]: value } : entry,
        ),
      }
      persist(next)
      return next
    })
  }

  const addCertificate = () => {
    setResume((current) => {
      const next = {
        ...current,
        certificates: [...current.certificates, createCertificate(Date.now())],
      }
      persist(next)
      return next
    })
  }

  const removeCertificate = (id: number) => {
    setResume((current) => {
      const next = {
        ...current,
        certificates: current.certificates.filter((entry) => entry.id !== id),
      }
      persist(next)
      return next
    })
  }

  const updateExperience = (id: number, field: keyof typeof initialResumeState.experience[number], value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        experience: current.experience.map((entry) =>
          entry.id === id ? { ...entry, [field]: value } : entry,
        ),
      }
      persist(next)
      return next
    })
  }

  const addExperience = () => {
    setResume((current) => {
      const next = {
        ...current,
        experience: [...current.experience, createExperience(Date.now())],
      }
      persist(next)
      return next
    })
  }

  const removeExperience = (id: number) => {
    setResume((current) => {
      const next = {
        ...current,
        experience: current.experience.filter((entry) => entry.id !== id),
      }
      persist(next)
      return next
    })
  }

  const updateProject = (id: number, field: keyof typeof initialResumeState.projects[number], value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        projects: current.projects.map((entry) =>
          entry.id === id ? { ...entry, [field]: value } : entry,
        ),
      }
      persist(next)
      return next
    })
  }

  const addProject = () => {
    setResume((current) => {
      const next = {
        ...current,
        projects: [...current.projects, createProject(Date.now())],
      }
      persist(next)
      return next
    })
  }

  const removeProject = (id: number) => {
    setResume((current) => {
      const next = {
        ...current,
        projects: current.projects.filter((entry) => entry.id !== id),
      }
      persist(next)
      return next
    })
  }

  const updateSkillList = (key: 'technicalSkills' | 'softSkills' | 'languages', index: number, value: string) => {
    setResume((current) => {
      const next = {
        ...current,
        [key]: current[key].map((entry, itemIndex) =>
          itemIndex === index ? value : entry,
        ),
      }
      persist(next)
      return next
    })
  }

  const addSkill = (key: 'technicalSkills' | 'softSkills' | 'languages') => {
    setResume((current) => {
      const next = {
        ...current,
        [key]: [...current[key], ''],
      }
      persist(next)
      return next
    })
  }

  const removeSkill = (key: 'technicalSkills' | 'softSkills' | 'languages', index: number) => {
    setResume((current) => {
      const next = {
        ...current,
        [key]: current[key].filter((_, itemIndex) => itemIndex !== index),
      }
      persist(next)
      return next
    })
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
