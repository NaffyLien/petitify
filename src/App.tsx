import { useState } from 'react'
import './App.css'
import { ProfileSection } from './feat/profile/ProfileSection'
import { EducationSection } from './feat/education/EducationSection'
import { CertificatesSection } from './feat/certificates/CertificatesSection'
import { ExperienceSection } from './feat/experience/ExperienceSection'
import { ProjectsSection } from './feat/projects/ProjectsSection'
import { SkillsSection } from './feat/skills/SkillsSection'
import { SoftSkillsSection } from './feat/soft-skills/SoftSkillsSection'
import { LanguagesSection } from './feat/languages/LanguagesSection'
import {
  createCertificate,
  createEducation,
  createExperience,
  createProject,
  initialResumeState,
  type CertificateItem,
  type EducationItem,
  type ExperienceItem,
  type ProjectItem,
  type ProfileDetails,
  type ResumeState,
} from './types/resume'

function App() {
  const [resume, setResume] = useState<ResumeState>(initialResumeState)

  const updateProfile = (field: keyof ProfileDetails, value: string) => {
    setResume((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [field]: value,
      },
    }))
  }

  const updateEducation = (id: number, field: keyof EducationItem, value: string) => {
    setResume((current) => ({
      ...current,
      education: current.education.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const updateCertificate = (id: number, field: keyof CertificateItem, value: string) => {
    setResume((current) => ({
      ...current,
      certificates: current.certificates.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const updateExperience = (id: number, field: keyof ExperienceItem, value: string) => {
    setResume((current) => ({
      ...current,
      experience: current.experience.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const updateProject = (id: number, field: keyof ProjectItem, value: string) => {
    setResume((current) => ({
      ...current,
      projects: current.projects.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    }))
  }

  const addItem = (key: 'education' | 'certificates' | 'experience' | 'projects') => {
    setResume((current) => {
      const nextId = Date.now()

      if (key === 'education') {
        return {
          ...current,
          education: [...current.education, createEducation(nextId)],
        }
      }

      if (key === 'certificates') {
        return {
          ...current,
          certificates: [...current.certificates, createCertificate(nextId)],
        }
      }

      if (key === 'experience') {
        return {
          ...current,
          experience: [...current.experience, createExperience(nextId)],
        }
      }

      return {
        ...current,
        projects: [...current.projects, createProject(nextId)],
      }
    })
  }

  const removeItem = (
    key: 'education' | 'certificates' | 'experience' | 'projects',
    id: number,
  ) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].filter((entry) => entry.id !== id),
    }))
  }

  const updateSkillList = (
    key: 'technicalSkills' | 'softSkills' | 'languages',
    index: number,
    value: string,
  ) => {
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

  const removeSkill = (
    key: 'technicalSkills' | 'softSkills' | 'languages',
    index: number,
  ) => {
    setResume((current) => ({
      ...current,
      [key]: current[key].filter((_, itemIndex) => itemIndex !== index),
    }))
  }

  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Resume builder</p>
            <h1>Pocketify</h1>
          </div>
        </div>

        <nav className="nav-list" aria-label="Resume sections">
          <a href="#profile">Profile</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates & Training</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Key projects</a>
          <a href="#technical-skills">Technical skills</a>
          <a href="#soft-skills">Soft skills</a>
          <a href="#languages">Languages</a>
        </nav>
      </aside>

      <section className="content-panel">
        <ProfileSection profile={resume.profile} onChange={updateProfile} />
        <EducationSection
          items={resume.education}
          onChange={updateEducation}
          onAdd={() => addItem('education')}
          onRemove={(id) => removeItem('education', id)}
        />
        <CertificatesSection
          items={resume.certificates}
          onChange={updateCertificate}
          onAdd={() => addItem('certificates')}
          onRemove={(id) => removeItem('certificates', id)}
        />
        <ExperienceSection
          items={resume.experience}
          onChange={updateExperience}
          onAdd={() => addItem('experience')}
          onRemove={(id) => removeItem('experience', id)}
        />
        <ProjectsSection
          items={resume.projects}
          onChange={updateProject}
          onAdd={() => addItem('projects')}
          onRemove={(id) => removeItem('projects', id)}
        />
        <SkillsSection
          items={resume.technicalSkills}
          onChange={(index, value) => updateSkillList('technicalSkills', index, value)}
          onAdd={() => addSkill('technicalSkills')}
          onRemove={(index) => removeSkill('technicalSkills', index)}
        />
        <SoftSkillsSection
          items={resume.softSkills}
          onChange={(index, value) => updateSkillList('softSkills', index, value)}
          onAdd={() => addSkill('softSkills')}
          onRemove={(index) => removeSkill('softSkills', index)}
        />
        <LanguagesSection
          items={resume.languages}
          onChange={(index, value) => updateSkillList('languages', index, value)}
          onAdd={() => addSkill('languages')}
          onRemove={(index) => removeSkill('languages', index)}
        />
      </section>
    </main>
  )
}

export default App
