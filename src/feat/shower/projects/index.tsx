import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
const ProjectsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Projects */}
    {resume.projects.length > 0 && (
      <section className="show-section">
        <header>
          <h2 className="show-section-title">Projects</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />        </header>
        <div className="show-section-content">
          {resume.projects.map((p) => {
            return (
              <div key={p.id} className={"show-entry"}>
                <div>
                  <strong>{p.name}</strong> — <small className="show-meta">{p.link}</small>
                  {p.description && <div className="show-desc">{p.description}</div>}
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