import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import SlideModal from '../../components/SlideModal'
import PButton from '../../pieces/buttons/PButton'
import { side_profile, book, certificate, suitcase, folder, bolt_fill, face_smile, language } from '../../assets'
import ProfileShow from '../../feat/_shower/profile'
import EducationShow from '../../feat/_shower/education'
import CertificatesShow from '../../feat/_shower/certificates'
import ExperienceShow from '../../feat/_shower/experience'
import ProjectsShow from '../../feat/_shower/projects'
import SkillsShow from '../../feat/_shower/skills'
import SoftSkillsShow from '../../feat/_shower/soft-skills'
import LanguagesShow from '../../feat/_shower/languages'
import type { EducationItem, CertificateItem, ExperienceItem, ProjectItem } from '../../types/resume'

type EditingState = {
  section: string
  item: EducationItem | CertificateItem | ExperienceItem | ProjectItem | { value: string; index: number } | null
}

const Home = () => {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSection, setModalSection] = useState<string | null>('profile')
  const [modalArticle, setModalArticle] = useState<string | null>('profile')
  const [editing, setEditing] = useState<EditingState>({ section: '', item: null })

  const openModal = (section: string) => {
    setModalSection(section)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalSection(null)
    setEditing({ section: '', item: null })
  }

  const handleEdit = (section: string, item: EditingState['item']) => {
    setEditing({ section, item })
    setModalSection(section)
    setModalOpen(true)
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

        <SlideModal
          open={modalOpen}
          onClose={closeModal}
          title={modalSection ?? ''}
          editItem={editing.section === modalSection ? editing.item : undefined}
        />

        <article className="content-panel">
          {modalArticle === 'profile' && (<ProfileShow handleNewClick={()=>openModal('profile')}/>)}
          {modalArticle === 'education' && (
            <EducationShow
              handleNewClick={() => openModal('education')}
              onEdit={(item) => handleEdit('education', item as EducationItem)}
            />
          )}
          {modalArticle === 'certificates' && (
            <CertificatesShow
              handleNewClick={() => openModal('certificates')}
              onEdit={(item) => handleEdit('certificates', item as CertificateItem)}
            />
          )}
          {modalArticle === 'experience' && (
            <ExperienceShow
              handleNewClick={() => openModal('experience')}
              onEdit={(item) => handleEdit('experience', item as ExperienceItem)}
            />
          )}
          {modalArticle === 'projects' && (
            <ProjectsShow
              handleNewClick={() => openModal('projects')}
              onEdit={(item) => handleEdit('projects', item as ProjectItem)}
            />
          )}
          {modalArticle === 'technical-skills' && (
            <SkillsShow
              handleNewClick={() => openModal('technical-skills')}
              onEdit={(item) => handleEdit('technical-skills', item as { value: string; index: number })}
            />
          )}
          {modalArticle === 'soft-skills' && (
            <SoftSkillsShow
              handleNewClick={() => openModal('soft-skills')}
              onEdit={(item) => handleEdit('soft-skills', item as { value: string; index: number })}
            />
          )}
          {modalArticle === 'languages' && (
            <LanguagesShow
              handleNewClick={() => openModal('languages')}
              onEdit={(item) => handleEdit('languages', item as { value: string; index: number })}
            />
          )}
        </article>
      </main>
    </>
  )
}

export default Home
