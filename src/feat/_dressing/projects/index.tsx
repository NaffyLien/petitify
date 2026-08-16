import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './ProjectsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createProject, type ProjectItem } from '../../../types/resume'

const ProjectsSection = () => {
  const { addProject } = useResume()
  const [entry, setEntry] = useState<ProjectItem>(() => createProject(Date.now()))

  const handleAdd = () => {
    addProject(entry)
    setEntry(createProject(Date.now()))
  }

  return (
    <section className="section-card" id="projects">
      <SectionHeader
        eyebrow="Key projects"
        title="Featured work"
        action={
          <button type="button" className="ghost-button" onClick={handleAdd}>
            + Add project
          </button>
        }
      />

      <div className="grid two-columns">
        <Field label="Project name">
          <input
            value={entry.name}
            onChange={(event) => setEntry((prev) => ({ ...prev, name: event.target.value }))}
          />
        </Field>

        <Field label="Your role">
          <input
            value={entry.role}
            onChange={(event) => setEntry((prev) => ({ ...prev, role: event.target.value }))}
          />
        </Field>

        <Field label="Project link">
          <input
            value={entry.link}
            onChange={(event) => setEntry((prev) => ({ ...prev, link: event.target.value }))}
          />
        </Field>

        <Field label="Technologies">
          <input
            value={entry.technologies}
            onChange={(event) => setEntry((prev) => ({ ...prev, technologies: event.target.value }))}
          />
        </Field>

        <Field label="Description" fullWidth>
          <textarea
            rows={4}
            value={entry.description}
            onChange={(event) => setEntry((prev) => ({ ...prev, description: event.target.value }))}
          />
        </Field>
      </div>
    </section>
  )
}

export default ProjectsSection
