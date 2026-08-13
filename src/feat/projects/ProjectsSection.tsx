import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import type { ProjectItem } from '../../types/resume'

type ProjectsSectionProps = {
  items: ProjectItem[]
  onChange: (id: number, field: keyof ProjectItem, value: string) => void
  onAdd: () => void
  onRemove: (id: number) => void
}

export function ProjectsSection({ items, onChange, onAdd, onRemove }: ProjectsSectionProps) {
  return (
    <section className="section-card" id="projects">
      <SectionHeader
        eyebrow="Key projects"
        title="Featured work"
        action={
          <button type="button" className="ghost-button" onClick={onAdd}>
            + Add project
          </button>
        }
      />

      {items.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Project #{index + 1}</span>
            {items.length > 1 && (
              <button type="button" onClick={() => onRemove(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Project name">
              <input
                value={entry.name}
                onChange={(event) => onChange(entry.id, 'name', event.target.value)}
              />
            </Field>

            <Field label="Your role">
              <input
                value={entry.role}
                onChange={(event) => onChange(entry.id, 'role', event.target.value)}
              />
            </Field>

            <Field label="Project link">
              <input
                value={entry.link}
                onChange={(event) => onChange(entry.id, 'link', event.target.value)}
              />
            </Field>

            <Field label="Technologies">
              <input
                value={entry.technologies}
                onChange={(event) => onChange(entry.id, 'technologies', event.target.value)}
              />
            </Field>

            <Field label="Description" fullWidth>
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
