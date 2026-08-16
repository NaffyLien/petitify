import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './LanguagesSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

type LanguagesSectionProps = {
  editItem?: unknown
  editIndex?: number
  onClose?: () => void
}

const LanguagesSection = ({ editItem, editIndex, onClose }: LanguagesSectionProps) => {
  const { addSkill, updateSkillList } = useResume()
  const isEditing = (editItem as string | undefined) !== undefined && editIndex !== undefined
  const [value, setValue] = useState(() => (editItem as string | undefined) ?? '')

  const handleSave = () => {
    if (!value.trim()) return
    if (isEditing && editIndex !== undefined) {
      updateSkillList('languages', editIndex, value.trim())
    } else {
      addSkill('languages', value.trim())
    }
    setValue('')
    onClose?.()
  }

  return (
    <section className="section-card" id="languages">
      <SectionHeader
        eyebrow="Languages"
        title="Language proficiency"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add language'}
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Language">
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

export default LanguagesSection
