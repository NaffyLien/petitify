import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import './ExperienceSection.css'
import { useResume } from '../../contexts/useResume'

export function ExperienceSection() {
  const { resume, updateExperience, addExperience, removeExperience } = useResume()

  return (
    <section className="section-card" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Work history"
        action={
          <button type="button" className="ghost-button" onClick={addExperience}>
            + Add experience
          </button>
        }
      />

      {resume.experience.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Experience #{index + 1}</span>
            {resume.experience.length > 1 && (
              <button type="button" onClick={() => removeExperience(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Job title">
              <input
                value={entry.role}
                onChange={(event) => updateExperience(entry.id, 'role', event.target.value)}
              />
            </Field>

            <Field label="Company">
              <input
                value={entry.company}
                onChange={(event) => updateExperience(entry.id, 'company', event.target.value)}
              />
            </Field>

            <Field label="Location">
              <input
                value={entry.location}
                onChange={(event) => updateExperience(entry.id, 'location', event.target.value)}
              />
            </Field>

            <Field label="Country">
              <input value="" readOnly />
            </Field>

            <Field label="Start date">
              <input
                type="month"
                value={entry.startDate}
                onChange={(event) => updateExperience(entry.id, 'startDate', event.target.value)}
              />
            </Field>

            <Field label="End date">
              <input
                type="month"
                value={entry.endDate}
                onChange={(event) => updateExperience(entry.id, 'endDate', event.target.value)}
              />
            </Field>

            <Field label="Role description" fullWidth>
              <textarea
                rows={4}
                value={entry.description}
                onChange={(event) => updateExperience(entry.id, 'description', event.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
    </section>
  )
}
