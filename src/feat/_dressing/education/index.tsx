import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './EducationSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createEducation, type EducationItem } from '../../../types/resume'

type EducationSectionProps = {
  editItem?: unknown
  onClose?: () => void
}

const EducationSection = ({ editItem, onClose }: EducationSectionProps) => {
  const { addEducation, replaceEducation } = useResume()
  const isEditing = !!editItem
  const [entry, setEntry] = useState<EducationItem>(() =>
    (editItem as EducationItem | null) ? { ...(editItem as EducationItem) } : createEducation(Date.now()),
  )

  const handleSave = () => {
    if (isEditing && editItem) {
      replaceEducation((editItem as EducationItem).id, entry)
    } else {
      addEducation(entry)
    }
    onClose?.()
  }

  return (
    <section className="section-card" id="education">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add education'}
          </button>
        }
      />
      <div className="grid two-columns">
        <Field label="School / University">
          <input
            value={entry.institution}
            onChange={(event) => setEntry((prev) => ({ ...prev, institution: event.target.value }))}
          />
        </Field>

        <Field label="Degree">
          <input
            value={entry.degree}
            onChange={(event) => setEntry((prev) => ({ ...prev, degree: event.target.value }))}
          />
        </Field>

        <Field label="Field of study">
          <input
            value={entry.field}
            onChange={(event) => setEntry((prev) => ({ ...prev, field: event.target.value }))}
          />
        </Field>

        <Field label="Location">
          <input
            value={entry.location}
            onChange={(event) => setEntry((prev) => ({ ...prev, location: event.target.value }))}
          />
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

        <Field label="Details" fullWidth>
          <textarea
            rows={3}
            value={entry.description}
            onChange={(event) => setEntry((prev) => ({ ...prev, description: event.target.value }))}
          />
        </Field>
      </div>
    </section>
  )
}

export default EducationSection
