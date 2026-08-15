import { plus } from '../../../assets'
import { useResume } from '../../../contexts/useResume'
import SButton from '../../../pieces/buttons/SButton'
import type { ShowProps } from '../../../types/feat_props'

const SoftSkillsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
  {resume.softSkills.length > 0 && (
    <section className="show-section">
        <header>
          <h2 className="show-section-title">Soft Skills</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />
        </header>
        <div className="show-section-content">
          {resume.softSkills.map((skill, idx) => {
            return (
              <span
                key={idx}
                className={"show-entry show-skill-chip"}
              >
                {skill}
              </span>
            )
          })}
        </div>
      </section>
    )}
  </>
}

export default SoftSkillsShow