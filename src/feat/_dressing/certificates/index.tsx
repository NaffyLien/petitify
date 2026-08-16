import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './CertificatesSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createCertificate, type CertificateItem } from '../../../types/resume'

type CertificatesSectionProps = {
  editItem?: unknown
  onClose?: () => void
}

const CertificatesSection = ({ editItem, onClose }: CertificatesSectionProps) => {
  const { addCertificate, replaceCertificate } = useResume()
  const isEditing = !!editItem
  const [entry, setEntry] = useState<CertificateItem>(() =>
    (editItem as CertificateItem | null) ? { ...(editItem as CertificateItem) } : createCertificate(Date.now()),
  )

  const handleSave = () => {
    if (isEditing && editItem) {
      replaceCertificate((editItem as CertificateItem).id, entry)
    } else {
      addCertificate(entry)
    }
    onClose?.()
  }

  return (
    <section className="section-card" id="certificates">
      <SectionHeader
        eyebrow="Certificates & Training"
        title="Credentials"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add certificate'}
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
