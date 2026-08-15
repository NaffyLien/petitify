import { ProfileSection } from '../../feat/profile'
import { EducationSection } from '../../feat/education'
import { CertificatesSection } from '../../feat/certificates'
import { ExperienceSection } from '../../feat/experience'
import { ProjectsSection } from '../../feat/projects'
import { SkillsSection } from '../../feat/skills'
import { SoftSkillsSection } from '../../feat/soft-skills'
import { LanguagesSection } from '../../feat/languages'


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