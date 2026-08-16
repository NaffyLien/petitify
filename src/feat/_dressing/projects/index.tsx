import { Field } from '../../../components/Field'
import { SectionHeader } from '../../../components/SectionHeader'
import './ProjectsSection.css'
import { useResume } from '../../../contexts/useResume'

export function ProjectsSection() {
  const { resume, updateProject, addProject, removeProject } = useResume()

  return (
    <section className="section-card" id="projects">
      <SectionHeader
        eyebrow="Key projects"
        title="Featured work"
        action={
          <button type="button" className="ghost-button" onClick={addProject}>
            + Add project
          </button>
        }
      />

      {resume.projects.map((entry, index) => (
        <div className="entry-card" key={entry.id}>
          <div className="entry-actions">
            <span>Project #{index + 1}</span>
            {resume.projects.length > 1 && (
              <button type="button" onClick={() => removeProject(entry.id)}>
                Remove
              </button>
            )}
          </div>

          <div className="grid two-columns">
            <Field label="Project name">
              <input
                value={entry.name}
                onChange={(event) => updateProject(entry.id, 'name', event.target.value)}
              />
            </Field>

            <Field label="Your role">
              <input
                value={entry.role}
                onChange={(event) => updateProject(entry.id, 'role', event.target.value)}
              />
            </Field>

            <Field label="Project link">
              <input
                value={entry.link}
                onChange={(event) => updateProject(entry.id, 'link', event.target.value)}
              />
            </Field>

            <Field label="Technologies">
              <input
                value={entry.technologies}
                onChange={(event) => updateProject(entry.id, 'technologies', event.target.value)}
              />
            </Field>

            <Field label="Description" fullWidth>
              <textarea
                rows={4}
                value={entry.description}
                onChange={(event) => updateProject(entry.id, 'description', event.target.value)}
              />
            </Field>
          </div>
        </div>
      ))}
    </section>
  )
}
