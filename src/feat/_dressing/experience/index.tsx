import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './ExperienceSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createExperience, type ExperienceItem } from '../../../types/resume'

type ExperienceSectionProps = {
  editItem?: unknown
  onClose?: () => void
}

const ExperienceSection = ({ editItem, onClose }: ExperienceSectionProps) => {
  const { addExperience, replaceExperience } = useResume()
  const isEditing = !!editItem
  const [entry, setEntry] = useState<ExperienceItem>(() =>
    (editItem as ExperienceItem | null) ? { ...(editItem as ExperienceItem) } : createExperience(Date.now()),
  )

  const handleSave = () => {
    if (isEditing && editItem) {
      replaceExperience((editItem as ExperienceItem).id, entry)
    } else {
      addExperience(entry)
    }
    onClose?.()
  }

  return (
    <section className="section-card" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Work history"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add experience'}
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Job title">
          <input
            value={entry.role}
            onChange={(event) => setEntry((prev) => ({ ...prev, role: event.target.value }))}
          />
        </Field>

        <Field label="Company">
          <input
            value={entry.company}
            onChange={(event) => setEntry((prev) => ({ ...prev, company: event.target.value }))}
          />
        </Field>

        <Field label="Location">
          <input
            value={entry.location}
            onChange={(event) => setEntry((prev) => ({ ...prev, location: event.target.value }))}
          />
        </Field>

        <Field label="Country">
          <input value="" readOnly />
        </Field>

        <Field label="Start date">
          <input
            type="month"
            value={entry.startDate}
            onChange={(event) => setEntry((prev) => ({ ...prev, startDate: event.target.value }))}
          />
        </Field>

        <Field label="End date">
          <input
            type="month"
            value={entry.endDate}
            onChange={(event) => setEntry((prev) => ({ ...prev, endDate: event.target.value }))}
          />
        </Field>

        <Field label="Role description" fullWidth>
          <textarea
            rows={4}
            value={entry.description}
            onChange={(event) => setEntry((prev) => ({ ...prev, description: event.target.value }))}
          />
        </Field>
      </div>
    </section>
  )
}

export default ExperienceSection
