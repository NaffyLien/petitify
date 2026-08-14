import { Field } from '../../components/Field'
import { SectionHeader } from '../../components/SectionHeader'
import './EducationSection.css'
import { useResume } from '../../contexts/useResume'

export function EducationSection() {
  const { resume, updateEducation, addEducation, removeEducation } = useResume()

  return (
    <section className="section-card" id="education">
      <SectionHeader
        eyebrow="Education"
        title="Academic background"
        action={
          <button type="button" className="ghost-button" onClick={addEducation}>
            + Add education
          </button>
        }
      />

      {resume.education.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Education #{index + 1}</span>
            {resume.education.length > 1 && (
              <button type="button" onClick={() => removeEducation(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="School / University">
              <input
                value={entry.institution}
                onChange={(event) => updateEducation(entry.id, 'institution', event.target.value)}
              />
            </Field>

            <Field label="Degree">
              <input
                value={entry.degree}
                onChange={(event) => updateEducation(entry.id, 'degree', event.target.value)}
              />
            </Field>

            <Field label="Field of study">
              <input
                value={entry.field}
                onChange={(event) => updateEducation(entry.id, 'field', event.target.value)}
              />
            </Field>

            <Field label="Location">
              <input
                value={entry.location}
                onChange={(event) => updateEducation(entry.id, 'location', event.target.value)}
              />
            </Field>

            <Field label="Start date">
              <input
                type="month"
                value={entry.startDate}
                onChange={(event) => updateEducation(entry.id, 'startDate', event.target.value)}
              />
            </Field>

            <Field label="End date">
              <input
                type="month"
                value={entry.endDate}
                onChange={(event) => updateEducation(entry.id, 'endDate', event.target.value)}
              />
            </Field>

            <Field label="Details" fullWidth>
              <textarea
                rows={3}
                value={entry.description}
                onChange={(event) => updateEducation(entry.id, 'description', event.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
    </section>
  )
}
