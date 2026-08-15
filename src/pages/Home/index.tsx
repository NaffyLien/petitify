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
import ProfileShow from '../../feat/shower/profile'
import EducationShow from '../../feat/shower/education'
import CertificatesShow from '../../feat/shower/certificates'
import ExperienceShow from '../../feat/shower/experience'
import ProjectsShow from '../../feat/shower/projects'
import SkillsShow from '../../feat/shower/skills'
import SoftSkillsShow from '../../feat/shower/soft-skills'
import LanguagesShow from '../../feat/shower/languages'

const Home = () => {
  const navigate = useNavigate()
  const { resume } = useResume()

  const [modalOpen, setModalOpen] = useState(false)
  const [modalSection, setModalSection] = useState<string | null>('profile')
  const [modalArticle, setModalArticle] = useState<string | null>('profile')

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
    <>
      <header>
        <div className="brand-block">
          <h1>Petitify</h1>
        </div>
      </header>
      <main className="page-shell">
        {/* <aside className="sidebar"> */}
        <aside className="sidebar nav-list" aria-label="Resume sections">
          <PButton handleClick={() => setModalArticle('profile')} text='Profile' image={{ src: side_profile, alt: 'Profile' }} />
          <PButton handleClick={() => setModalArticle('education')} text='Education' image={{ src: book, alt: 'Education' }} />
          <PButton handleClick={() => setModalArticle('certificates')} text='Certificates & Training' image={{ src: certificate, alt: 'Certificates & Training' }} />
          <PButton handleClick={() => setModalArticle('experience')} text='Experience' image={{ src: suitcase, alt: 'Experience' }} />
          <PButton handleClick={() => setModalArticle('projects')} text='Key projects' image={{ src: folder, alt: 'Key projects' }} />
          <PButton handleClick={() => setModalArticle('technical-skills')} text='Technical skills' image={{ src: bolt_fill, alt: 'Technical skills' }} />
          <PButton handleClick={() => setModalArticle('soft-skills')} text='Soft skills' image={{ src: face_smile, alt: 'Soft skills' }} />
          <PButton handleClick={() => setModalArticle('languages')} text='Languages' image={{ src: language, alt: 'Languages' }} />
          <button type="button" className="primary-button" onClick={() => navigate('/walk')}>Export profile</button>
        </aside>
        {/* </aside> */}

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

        <article className="content-panel">
          {modalArticle === 'profile' && (<ProfileShow />)}

          {modalArticle === 'education' && (<EducationShow />)}

          {modalArticle === 'certificates' && (<CertificatesShow />)}

          {modalArticle === 'experience' && (<ExperienceShow />)}

          {modalArticle === 'projects' && (<ProjectsShow />)}

          {modalArticle === 'technical-skills' && (<SkillsShow />)}

          {modalArticle === 'soft-skills' && (<SoftSkillsShow />)}

          {modalArticle === 'languages' && (<LanguagesShow />)}
        </article>
      </main>
    </>
  )
}

export default Home
