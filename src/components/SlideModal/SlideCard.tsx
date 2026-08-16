import ProfileSection from '../../feat/_dressing/profile'
import EducationSection from '../../feat/_dressing/education'
import CertificatesSection from '../../feat/_dressing/certificates'
import ExperienceSection from '../../feat/_dressing/experience'
import ProjectsSection from '../../feat/_dressing/projects'
import SkillsSection from '../../feat/_dressing/skills'
import SoftSkillsSection from '../../feat/_dressing/soft-skills'
import LanguagesSection from '../../feat/_dressing/languages'


const SlideCard = (modalSection: string, editItem?: unknown, onClose?: () => void) => {
  const props = { editItem, onClose }
  const getKey = () => {
    if (!editItem) return modalSection
    if (typeof editItem === 'object' && editItem !== null && 'id' in editItem) {
      return `${modalSection}-${(editItem as { id: number }).id}`
    }
    if (typeof editItem === 'object' && editItem !== null && 'value' in editItem) {
      const item = editItem as unknown as { value: string; index: number }
      return `${modalSection}-${item.value}-${item.index}`
    }
    return modalSection
  }
  const key = getKey()
  return <>
    {modalSection === 'profile' && (
      <ProfileSection key={modalSection} />
    )}

    {modalSection === 'education' && (
      <EducationSection key={key} {...props} />
    )}

    {modalSection === 'certificates' && (
      <CertificatesSection key={key} {...props} />
    )}

    {modalSection === 'experience' && (
      <ExperienceSection key={key} {...props} />
    )}

    {modalSection === 'projects' && (
      <ProjectsSection key={key} {...props} />
    )}

    {modalSection === 'technical-skills' && (
      <SkillsSection key={key} {...props} />
    )}

    {modalSection === 'soft-skills' && (
      <SoftSkillsSection key={key} {...props} />
    )}

    {modalSection === 'languages' && (
      <LanguagesSection key={key} {...props} />
    )}</>
}

export default SlideCard