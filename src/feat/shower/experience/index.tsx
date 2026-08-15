import { useResume } from '../../../contexts/useResume'

const ExperienceShow = () => {
  const { resume } = useResume()
  return <>
          {/* Experience */}
        {resume.experience.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Experience</h2>
            <div className="export-section-content">
              {resume.experience.map((ex) => {
                return (
                  <div key={ex.id} className={"export-entry"}>
                    <div>
                      <strong>{ex.role}</strong> — {ex.company}
                      <div className="export-meta">{ex.startDate} — {ex.endDate} • {ex.location}</div>
                      {ex.description && <div className="export-desc">{ex.description}</div>}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )}
</>
}

export default ExperienceShow