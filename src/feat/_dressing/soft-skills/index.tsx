import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './SoftSkillsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

const SoftSkillsSection = () => {
  const { addSkill } = useResume()
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (!value.trim()) return
    addSkill('softSkills', value.trim())
    setValue('')
  }

  return (
    <section className="section-card" id="soft-skills">
      <SectionHeader
        eyebrow="Soft skills"
        title="Work style"
        action={
          <button type="button" className="ghost-button" onClick={handleAdd}>
            + Add soft skill
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
                handleAdd()
              }
            }}
          />
        </Field>
      </div>
    </section>
  )
}

export default SoftSkillsSection