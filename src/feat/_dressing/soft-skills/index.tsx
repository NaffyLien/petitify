import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './SoftSkillsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

type SoftSkillsSectionProps = {
  editItem?: unknown
  onClose?: () => void
}

const SoftSkillsSection = ({ editItem, onClose }: SoftSkillsSectionProps) => {
  const { addSkill, updateSkillList } = useResume()
  const editData = editItem as { value: string; index: number } | null | undefined
  const isEditing = !!editData
  const [value, setValue] = useState(() => editData?.value ?? '')

  const handleSave = () => {
    if (!value.trim()) return
    if (isEditing && editData) {
      updateSkillList('softSkills', editData.index, value.trim())
    } else {
      addSkill('softSkills', value.trim())
    }
    setValue('')
    onClose?.()
  }

  return (
    <section className="section-card" id="soft-skills">
      <SectionHeader
        eyebrow="Soft skills"
        title="Work style"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add soft skill'}
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Soft skill">
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

export default SoftSkillsSection
