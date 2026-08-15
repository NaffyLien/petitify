import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
const EducationShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Education */}
    {resume.education.length > 0 && (
      <section className="show-section">
        <header>
          <h2 className="show-section-title">Education</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />        </header>
        <div className="show-section-content">
          {resume.education.map((e) => {
            return (
              <div key={e.id} className={"show-entry"}>
                <div>
                  <strong>{e.degree}</strong> — {e.institution}
                  <div className="show-meta">{e.startDate} — {e.endDate} • {e.location}</div>
                  {e.description && <div className="show-desc">{e.description}</div>}
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