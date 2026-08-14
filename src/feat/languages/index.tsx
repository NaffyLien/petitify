import { PillList } from '../../components/PillList'
import './LanguagesSection.css'
import { useResume } from '../../contexts/useResume'

export function LanguagesSection() {
  const { resume, updateSkillList, addSkill, removeSkill } = useResume()

  return (
    <PillList
      id="languages"
      eyebrow="Languages"
      title="Language proficiency"
      buttonLabel="Add language"
      items={resume.languages}
      onAdd={addSkill.bind(null, 'languages')}
      onChange={(index, value) => updateSkillList('languages', index, value)}
      onRemove={(index) => removeSkill('languages', index)}
    />
  )
}
