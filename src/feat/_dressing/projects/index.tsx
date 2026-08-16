import Field from '../../../components/Field'
import SectionHeader from '../../../components/SectionHeader'
import './ProjectsSection.css'
import { useResume } from '../../../contexts/useResume'
import { useState } from 'react'
import { createProject, type ProjectItem } from '../../../types/resume'

type ProjectsSectionProps = {
  editItem?: unknown
  onClose?: () => void
}

const ProjectsSection = ({ editItem, onClose }: ProjectsSectionProps) => {
  const { addProject, replaceProject } = useResume()
  const isEditing = !!editItem
  const [entry, setEntry] = useState<ProjectItem>(() =>
    (editItem as ProjectItem | null) ? { ...(editItem as ProjectItem) } : createProject(Date.now()),
  )

  const handleSave = () => {
    if (isEditing && editItem) {
      replaceProject((editItem as ProjectItem).id, entry)
    } else {
      addProject(entry)
    }
    onClose?.()
  }

  return (
    <section className="section-card" id="projects">
      <SectionHeader
        eyebrow="Key projects"
        title="Featured work"
        action={
          <button type="button" className="ghost-button" onClick={handleSave}>
            {isEditing ? 'Save' : '+ Add project'}
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
