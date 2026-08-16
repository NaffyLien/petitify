import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
import HeaderShow from '../_header'
const ProjectsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Projects */}
    {resume.projects.length > 0 && (
      <section className="show-section">
        <HeaderShow titre={"Projects"} children={
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{ src: plus, alt: "NewData" }}
          />
        }/>
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