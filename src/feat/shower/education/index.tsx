import { useResume } from '../../../contexts/useResume'

const EducationShow = () => {
  const { resume } = useResume()
  return <>
    {/* Education */}
    {resume.education.length > 0 && (
      <section className="export-section">
        <h2 className="export-section-title">Education</h2>
        <div className="export-section-content">
          {resume.education.map((e) => {
            return (
              <div key={e.id} className={"export-entry"}>
                <div>
                  <strong>{e.degree}</strong> — {e.institution}
                  <div className="export-meta">{e.startDate} — {e.endDate} • {e.location}</div>
                  {e.description && <div className="export-desc">{e.description}</div>}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )}
  </>
}

export default EducationShow