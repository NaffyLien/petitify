import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './LanguagesSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

const LanguagesSection = () => {
  const { addSkill } = useResume()
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (!value.trim()) return
    addSkill('languages', value.trim())
    setValue('')
  }

  return (
    <section className="section-card" id="languages">
      <SectionHeader
        eyebrow="Languages"
        title="Language proficiency"
        action={
          <button type="button" className="ghost-button" onClick={handleAdd}>
            + Add language
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
                handleAdd()
              }
            }}
          />
        </Field>
      </div>
    </section>
  )
}

export default LanguagesSection