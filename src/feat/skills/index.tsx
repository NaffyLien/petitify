import { PillList } from '../../components/PillList'
import './SkillsSection.css'
import { useResume } from '../../contexts/useResume'

export function SkillsSection() {
  const { resume, updateSkillList, addSkill, removeSkill } = useResume()

  return (
    <PillList
      id="technical-skills"
      eyebrow="Technical skills"
      title="Tools and stacks"
      buttonLabel="Add skill"
      items={resume.technicalSkills}
      onAdd={addSkill.bind(null, 'technicalSkills')}
      onChange={(index, value) => updateSkillList('technicalSkills', index, value)}
      onRemove={(index) => removeSkill('technicalSkills', index)}
    />
  )
}
