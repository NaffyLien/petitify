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
import PButton from '../../pieces/buttons/PButton'
import { side_profile, book, certificate, suitcase, folder, bolt_fill, face_smile, language } from '../../assets'
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

        <aside className="nav-list" aria-label="Resume sections">
          <PButton handleClick={() => openModal('profile')} text='Profile' image={{ src: side_profile, alt: 'Profile' }}/>
          <PButton handleClick={() => openModal('education')} text='Education' image={{ src: book, alt: 'Education' }}/>
          <PButton handleClick={() => openModal('certificates')} text='Certificates & Training' image={{ src: certificate, alt: 'Certificates & Training' }}/>
          <PButton handleClick={() => openModal('experience')} text='Experience' image={{ src: suitcase, alt: 'Experience' }}/>
          <PButton handleClick={() => openModal('projects')} text='Key projects' image={{ src: folder, alt: 'Key projects' }}/>
          <PButton handleClick={() => openModal('technical-skills')} text='Technical skills' image={{ src: bolt_fill, alt: 'Technical skills' }}/>
          <PButton handleClick={() => openModal('soft-skills')} text='Soft skills' image={{ src: face_smile, alt: 'Soft skills' }}/>
          <PButton handleClick={() => openModal('languages')} text='Languages' image={{ src: language, alt: 'Languages' }}/>
        </aside>
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
            <button type="button" className="primary-button" onClick={() => navigate('/walk')}>Export profile</button>
          </div>
        </div>

        <ResumePreview resume={resume} />
      </section>
    </main>
  )
}

export default AppContent
