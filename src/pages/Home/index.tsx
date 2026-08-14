import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import { ProfileSection } from '../../feat/profile'
import { EducationSection } from '../../feat/education'
import { CertificatesSection } from '../../feat/certificates'
import { ExperienceSection } from '../../feat/experience'
import { ProjectsSection } from '../../feat/projects'
import { SkillsSection } from '../../feat/skills'
import { SoftSkillsSection } from '../../feat/soft-skills'
import { LanguagesSection } from '../../feat/languages'
import SlideModal from '../../components/SlideModal'
import ResumePreview from '../../components/ResumePreview'
import { useResume } from '../../contexts/useResume'

function AppContent() {
  const navigate = useNavigate()
  const { resume } = useResume()

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

  return (
    <main className="page-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <span className="brand-mark">P</span>
          <div>
            <p className="eyebrow">Resume builder</p>
            <h1>Petitify</h1>
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
          <ProfileSection />
        )}

        {modalSection === 'education' && (
          <EducationSection />
        )}

        {modalSection === 'certificates' && (
          <CertificatesSection />
        )}

        {modalSection === 'experience' && (
          <ExperienceSection />
        )}

        {modalSection === 'projects' && (
          <ProjectsSection />
        )}

        {modalSection === 'technical-skills' && (
          <SkillsSection />
        )}

        {modalSection === 'soft-skills' && (
          <SoftSkillsSection />
        )}

        {modalSection === 'languages' && (
          <LanguagesSection />
        )}
      </SlideModal>

      <section className="content-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <h2 style={{ margin: 0 }}>Resume</h2>
          <div>
            <button type="button" className="primary-button" onClick={() => navigate('/petitify/walk')}>Export profile</button>
          </div>
        </div>

        <ResumePreview resume={resume} />
      </section>
    </main>
  )
}

export default AppContent
