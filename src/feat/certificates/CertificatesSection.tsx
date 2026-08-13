import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import type { CertificateItem } from '../../types/resume'

type CertificatesSectionProps = {
  items: CertificateItem[]
  onChange: (id: number, field: keyof CertificateItem, value: string) => void
  onAdd: () => void
  onRemove: (id: number) => void
}

export function CertificatesSection({ items, onChange, onAdd, onRemove }: CertificatesSectionProps) {
  return (
    <section className="section-card" id="certificates">
      <SectionHeader
        eyebrow="Certificates & Training"
        title="Credentials"
        action={
          <button type="button" className="ghost-button" onClick={onAdd}>
            + Add certificate
          </button>
        }
      />

      {items.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Credential #{index + 1}</span>
            {items.length > 1 && (
              <button type="button" onClick={() => onRemove(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Certificate title">
              <input
                value={entry.title}
                onChange={(event) => onChange(entry.id, 'title', event.target.value)}
              />
            </Field>

            <Field label="Issuing organization">
              <input
                value={entry.issuer}
                onChange={(event) => onChange(entry.id, 'issuer', event.target.value)}
              />
            </Field>

            <Field label="Date earned">
              <input
                type="month"
                value={entry.date}
                onChange={(event) => onChange(entry.id, 'date', event.target.value)}
              />
            </Field>

            <Field label="Credential ID">
              <input
                value={entry.credential}
                onChange={(event) => onChange(entry.id, 'credential', event.target.value)}
              />
            </Field>

            <Field label="Description" fullWidth>
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
