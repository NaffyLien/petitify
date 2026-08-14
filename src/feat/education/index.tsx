import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import type { EducationItem } from '../../types/resume'
import './EducationSection.css'

type EducationSectionProps = {
  items: EducationItem[]
  onChange: (id: number, field: keyof EducationItem, value: string) => void
  onAdd: () => void
  onRemove: (id: number) => void
}

export function EducationSection({ items, onChange, onAdd, onRemove }: EducationSectionProps) {
  return (
    <section className="section-card" id="education">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        action={
          <button type="button" className="ghost-button" onClick={onAdd}>
            + Add education
          </button>
        }
      />

      {items.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Education #{index + 1}</span>
            {items.length > 1 && (
              <button type="button" onClick={() => onRemove(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="School / University">
              <input
                value={entry.institution}
                onChange={(event) => onChange(entry.id, 'institution', event.target.value)}
              />
            </Field>

            <Field label="Degree">
              <input
                value={entry.degree}
                onChange={(event) => onChange(entry.id, 'degree', event.target.value)}
              />
            </Field>

            <Field label="Field of study">
              <input
                value={entry.field}
                onChange={(event) => onChange(entry.id, 'field', event.target.value)}
              />
            </Field>

            <Field label="Location">
              <input
                value={entry.location}
                onChange={(event) => onChange(entry.id, 'location', event.target.value)}
              />
            </Field>

            <Field label="Start date">
              <input
                type="month"
                value={entry.startDate}
                onChange={(event) => onChange(entry.id, 'startDate', event.target.value)}
              />
            </Field>

            <Field label="End date">
              <input
                type="month"
                value={entry.endDate}
                onChange={(event) => onChange(entry.id, 'endDate', event.target.value)}
              />
            </Field>

            <Field label="Details" fullWidth>
              <textarea
                rows={3}
                value={entry.description}
                onChange={(event) => onChange(entry.id, 'description', event.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
    </section>
  )
}
