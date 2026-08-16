import { ProfileSection } from '../../feat/_dressing/profile'
import { EducationSection } from '../../feat/_dressing/education'
import { CertificatesSection } from '../../feat/_dressing/certificates'
import { ExperienceSection } from '../../feat/_dressing/experience'
import { ProjectsSection } from '../../feat/_dressing/projects'
import { SkillsSection } from '../../feat/_dressing/skills'
import { SoftSkillsSection } from '../../feat/_dressing/soft-skills'
import { LanguagesSection } from '../../feat/_dressing/languages'


const SlideCard = (modalSection: string) => {
  return <>
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
    )}</>
}

export default SlideCard