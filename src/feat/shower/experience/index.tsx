import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
const ExperienceShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Experience */}
    {resume.experience.length > 0 && (
      <section className="show-section">
        <header>
          <h2 className="show-section-title">Experience</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />        </header>
        <div className="show-section-content">
          {resume.experience.map((ex) => {
            return (
              <div key={ex.id} className={"show-entry"}>
                <div>
                  <strong>{ex.role}</strong> — {ex.company}
                  <div className="show-meta">{ex.startDate} — {ex.endDate} • {ex.location}</div>
                  {ex.description && <div className="show-desc">{ex.description}</div>}
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