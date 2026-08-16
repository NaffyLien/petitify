import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './SkillsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'

const SkillsSection = () => {
  const { addSkill } = useResume()
  const [value, setValue] = useState('')

  const handleAdd = () => {
    if (!value.trim()) return
    addSkill('technicalSkills', value.trim())
    setValue('')
  }

  return (
    <section className="section-card" id="technical-skills">
      <SectionHeader
        eyebrow="Technical skills"
        title="Tools and stacks"
        action={
          <button type="button" className="ghost-button" onClick={handleAdd}>
            + Add skill
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
                handleAdd()
              }
            }}
          />
        </Field>
      </div>
    </section>
  )
}

export default SkillsSection