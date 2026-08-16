import { Field } from '../../../components/Field'
import { SectionHeader } from '../../../components/SectionHeader'
import './ProfileSection.css'
import { useResume } from '../../../contexts/useResume'

export function ProfileSection() {
  const { resume, updateProfile } = useResume()

  return (
    <section className="profile-card" id="profile">
      <SectionHeader
        eyebrow="Candidate profile"
        title="Resume overview"
        action={<button type="button" className="primary-button">Save profile</button>}
      />

      <div className="grid two-columns">
        <Field label="Full name">
          <input
            value={resume.profile.name}
            onChange={(event) => updateProfile('name', event.target.value)}
          />
        </Field>

        <Field label="Professional title">
          <input
            value={resume.profile.title}
            onChange={(event) => updateProfile('title', event.target.value)}
          />
        </Field>

        <Field label="Email">
          <input
            value={resume.profile.email}
            onChange={(event) => updateProfile('email', event.target.value)}
          />
        </Field>

        <Field label="Phone">
          <input
            value={resume.profile.phone}
            onChange={(event) => updateProfile('phone', event.target.value)}
          />
        </Field>

        <Field label="Location" fullWidth>
          <input
            value={resume.profile.location}
            onChange={(event) => updateProfile('location', event.target.value)}
          />
        </Field>

        <Field label="Professional summary" fullWidth>
          <textarea
            rows={4}
            value={resume.profile.summary}
            onChange={(event) => updateProfile('summary', event.target.value)}
          />
        </Field>
      </div>
    </section>
  )
}
