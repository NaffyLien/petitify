import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './SkillsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

type SkillsSectionProps = {
  editItem?: unknown
  editIndex?: number
  onClose?: () => void
}

const SkillsSection = ({ editItem, editIndex, onClose }: SkillsSectionProps) => {
  const { addSkill, updateSkillList } = useResume()
  const isEditing = (editItem as string | undefined) !== undefined && editIndex !== undefined
  const [value, setValue] = useState(() => (editItem as string | undefined) ?? '')

  const handleSave = () => {
    if (!value.trim()) return
    if (isEditing && editIndex !== undefined) {
      updateSkillList('technicalSkills', editIndex, value.trim())
    } else {
      addSkill('technicalSkills', value.trim())
    }
    setValue('')
    onClose?.()
  }

  return (
    <section className="section-card" id="technical-skills">
      <SectionHeader
        eyebrow="Technical skills"
        title="Tools and stacks"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add skill'}
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Skill">
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                handleSave()
              }
            }}
          />
        </Field>
      </div>
    </section>
  )
}

export default SkillsSection
