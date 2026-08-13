import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import type { ProfileDetails } from '../../types/resume'

type ProfileSectionProps = {
  profile: ProfileDetails
  onChange: (field: keyof ProfileDetails, value: string) => void
}

export function ProfileSection({ profile, onChange }: ProfileSectionProps) {
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
            value={profile.name}
            onChange={(event) => onChange('name', event.target.value)}
          />
        </Field>

        <Field label="Professional title">
          <input
            value={profile.title}
            onChange={(event) => onChange('title', event.target.value)}
          />
        </Field>

        <Field label="Email">
          <input
            value={profile.email}
            onChange={(event) => onChange('email', event.target.value)}
          />
        </Field>

        <Field label="Phone">
          <input
            value={profile.phone}
            onChange={(event) => onChange('phone', event.target.value)}
          />
        </Field>

        <Field label="Location" fullWidth>
          <input
            value={profile.location}
            onChange={(event) => onChange('location', event.target.value)}
          />
        </Field>

        <Field label="Professional summary" fullWidth>
          <textarea
            rows={4}
            value={profile.summary}
            onChange={(event) => onChange('summary', event.target.value)}
          />
        </Field>
      </div>
    </section>
  )
}
