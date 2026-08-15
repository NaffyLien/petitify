import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'

const EducationShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Education */}
    {resume.education.length > 0 && (
      <section className="export-section">
        <h2 className="export-section-title">Education</h2>
        <button type="button" onClick={props.handleNewClick}>New language</button>
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