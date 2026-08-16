import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './CertificatesSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createCertificate, type CertificateItem } from '../../../types/resume'

const CertificatesSection = () => {
  const { addCertificate } = useResume()
  const [entry, setEntry] = useState<CertificateItem>(() => createCertificate(Date.now()))

  const handleAdd = () => {
    addCertificate(entry)
    setEntry(createCertificate(Date.now()))
  }

  return (
    <section className="section-card" id="certificates">
      <SectionHeader
        eyebrow="Certificates & Training"
        title="Credentials"
        action={
          <button type="button" className="ghost-button" onClick={handleAdd}>
            + Add certificate
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Certificate title">
          <input
            value={entry.title}
            onChange={(event) => setEntry((prev) => ({ ...prev, title: event.target.value }))}
          />
        </Field>

        <Field label="Issuing organization">
          <input
            value={entry.issuer}
            onChange={(event) => setEntry((prev) => ({ ...prev, issuer: event.target.value }))}
          />
        </Field>

        <Field label="Date earned">
          <input
            type="month"
            value={entry.date}
            onChange={(event) => setEntry((prev) => ({ ...prev, date: event.target.value }))}
          />
        </Field>

        <Field label="Credential ID">
          <input
            value={entry.credential}
            onChange={(event) => setEntry((prev) => ({ ...prev, credential: event.target.value }))}
          />
        </Field>

        <Field label="Description" fullWidth>
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

export default CertificatesSection
