import { PillList } from '../../components/PillList'
import './SoftSkillsSection.css'
import { useResume } from '../../contexts/useResume'

export function SoftSkillsSection() {
  const { resume, updateSkillList, addSkill, removeSkill } = useResume()

  return (
    <PillList
      id="soft-skills"
      eyebrow="Soft skills"
      title="Work style"
      buttonLabel="Add soft skill"
      items={resume.softSkills}
      onAdd={addSkill.bind(null, 'softSkills')}
      onChange={(index, value) => updateSkillList('softSkills', index, value)}
      onRemove={(index) => removeSkill('softSkills', index)}
    />
  )
}
