import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import type { ExperienceItem } from '../../types/resume'
import './ExperienceSection.css'

type ExperienceSectionProps = {
  items: ExperienceItem[]
  onChange: (id: number, field: keyof ExperienceItem, value: string) => void
  onAdd: () => void
  onRemove: (id: number) => void
}

export function ExperienceSection({ items, onChange, onAdd, onRemove }: ExperienceSectionProps) {
  return (
    <section className="section-card" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Work history"
        action={
          <button type="button" className="ghost-button" onClick={onAdd}>
            + Add experience
          </button>
        }
      />

      {items.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Experience #{index + 1}</span>
            {items.length > 1 && (
              <button type="button" onClick={() => onRemove(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Job title">
              <input
                value={entry.role}
                onChange={(event) => onChange(entry.id, 'role', event.target.value)}
              />
            </Field>

            <Field label="Company">
              <input
                value={entry.company}
                onChange={(event) => onChange(entry.id, 'company', event.target.value)}
              />
            </Field>

            <Field label="Location">
              <input
                value={entry.location}
                onChange={(event) => onChange(entry.id, 'location', event.target.value)}
              />
            </Field>

            <Field label="Country">
              <input value="" readOnly />
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

            <Field label="Role description" fullWidth>
              <textarea
                rows={4}
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
