import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { ProfileSection } from './feat/profile'
import { EducationSection } from './feat/education'
import { CertificatesSection } from './feat/certificates'
import { ExperienceSection } from './feat/experience'
import { ProjectsSection } from './feat/projects'
import { SkillsSection } from './feat/skills'
import { SoftSkillsSection } from './feat/soft-skills'
import { LanguagesSection } from './feat/languages'
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
import SlideModal from './components/SlideModal'
import ResumePreview from './components/ResumePreview'
import ExportPage from './pages/ExportPage'

const App = () => {
  const navigate = useNavigate()
  const [resume, setResume] = useState<ResumeState>(initialResumeState)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSection, setModalSection] = useState<string | null>(null)

  const openModal = (section: string) => {
    setModalSection(section)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalSection(null)
  }

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : ''
  }, [modalOpen])


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
    <Routes>
      <Route
        path="/pocketify/exp"
        element={<ExportPage resume={resume} onBack={() => navigate('/')} />}
      />
      <Route
        path="*"
        element={(
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
                <button type="button" onClick={() => openModal('profile')}>Profile</button>
                <button type="button" onClick={() => openModal('education')}>Education</button>
                <button type="button" onClick={() => openModal('certificates')}>Certificates & Training</button>
                <button type="button" onClick={() => openModal('experience')}>Experience</button>
                <button type="button" onClick={() => openModal('projects')}>Key projects</button>
                <button type="button" onClick={() => openModal('technical-skills')}>Technical skills</button>
                <button type="button" onClick={() => openModal('soft-skills')}>Soft skills</button>
                <button type="button" onClick={() => openModal('languages')}>Languages</button>
              </nav>
            </aside>

            <SlideModal open={modalOpen} onClose={closeModal} title={modalSection ?? ''}>
              {modalSection === 'profile' && (
                <ProfileSection profile={resume.profile} onChange={updateProfile} />
              )}

              {modalSection === 'education' && (
                <EducationSection
                  items={resume.education}
                  onChange={updateEducation}
                  onAdd={() => addItem('education')}
                  onRemove={(id) => removeItem('education', id)}
                />
              )}

              {modalSection === 'certificates' && (
                <CertificatesSection
                  items={resume.certificates}
                  onChange={updateCertificate}
                  onAdd={() => addItem('certificates')}
                  onRemove={(id) => removeItem('certificates', id)}
                />
              )}

              {modalSection === 'experience' && (
                <ExperienceSection
                  items={resume.experience}
                  onChange={updateExperience}
                  onAdd={() => addItem('experience')}
                  onRemove={(id) => removeItem('experience', id)}
                />
              )}

              {modalSection === 'projects' && (
                <ProjectsSection
                  items={resume.projects}
                  onChange={updateProject}
                  onAdd={() => addItem('projects')}
                  onRemove={(id) => removeItem('projects', id)}
                />
              )}

              {modalSection === 'technical-skills' && (
                <SkillsSection
                  items={resume.technicalSkills}
                  onChange={(index, value) => updateSkillList('technicalSkills', index, value)}
                  onAdd={() => addSkill('technicalSkills')}
                  onRemove={(index) => removeSkill('technicalSkills', index)}
                />
              )}

              {modalSection === 'soft-skills' && (
                <SoftSkillsSection
                  items={resume.softSkills}
                  onChange={(index, value) => updateSkillList('softSkills', index, value)}
                  onAdd={() => addSkill('softSkills')}
                  onRemove={(index) => removeSkill('softSkills', index)}
                />
              )}

              {modalSection === 'languages' && (
                <LanguagesSection
                  items={resume.languages}
                  onChange={(index, value) => updateSkillList('languages', index, value)}
                  onAdd={() => addSkill('languages')}
                  onRemove={(index) => removeSkill('languages', index)}
                />
              )}
            </SlideModal>

            <section className="content-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <h2 style={{ margin: 0 }}>Resume</h2>
                <div>
                  <button type="button" className="primary-button" onClick={() => navigate('/pocketify/exp')}>Export profile</button>
                </div>
              </div>

              <ResumePreview resume={resume} />
            </section>
          </main>
        )}
      />
    </Routes>
  )

}

export default App