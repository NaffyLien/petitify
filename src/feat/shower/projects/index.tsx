import { useResume } from '../../../contexts/useResume'

const ProjectsShow = () => {
  const { resume } = useResume()
  return <>
    {/* Projects */}
    {resume.projects.length > 0 && (
      <section className="export-section">
        <h2 className="export-section-title">Projects</h2>
        <div className="export-section-content">
          {resume.projects.map((p) => {
            return (
              <div key={p.id} className={"export-entry"}>
                <div>
                  <strong>{p.name}</strong> — <small className="export-meta">{p.link}</small>
                  {p.description && <div className="export-desc">{p.description}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )}
  </>
}

export default ProjectsShow