import { Field } from '../../../components/Field'
import { SectionHeader } from '../../../components/SectionHeader'
import './CertificatesSection.css'
import { useResume } from '../../../contexts/useResume'

export function CertificatesSection() {
  const { resume, updateCertificate, addCertificate, removeCertificate } = useResume()

  return (
    <section className="section-card" id="certificates">
      <SectionHeader
        eyebrow="Certificates & Training"
        title="Credentials"
        action={
          <button type="button" className="ghost-button" onClick={addCertificate}>
            + Add certificate
          </button>
        }
      />

      {resume.certificates.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Credential #{index + 1}</span>
            {resume.certificates.length > 1 && (
              <button type="button" onClick={() => removeCertificate(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Certificate title">
              <input
                value={entry.title}
                onChange={(event) => updateCertificate(entry.id, 'title', event.target.value)}
              />
            </Field>

            <Field label="Issuing organization">
              <input
                value={entry.issuer}
                onChange={(event) => updateCertificate(entry.id, 'issuer', event.target.value)}
              />
            </Field>

            <Field label="Date earned">
              <input
                type="month"
                value={entry.date}
                onChange={(event) => updateCertificate(entry.id, 'date', event.target.value)}
              />
            </Field>

            <Field label="Credential ID">
              <input
                value={entry.credential}
                onChange={(event) => updateCertificate(entry.id, 'credential', event.target.value)}
              />
            </Field>

            <Field label="Description" fullWidth>
              <textarea
                rows={3}
                value={entry.description}
                onChange={(event) => updateCertificate(entry.id, 'description', event.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
    </section>
  )
}
