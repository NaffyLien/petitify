import { plus } from '../../../assets'
import { useResume } from '../../../contexts/useResume'
import SButton from '../../../pieces/buttons/SButton'
import type { ShowProps } from '../../../types/feat_props'
import HeaderShow from '../_header'

const SoftSkillsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {resume.softSkills.length > 0 && (
      <section className="show-section">
        <HeaderShow titre={"Soft Skills"} children={
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{ src: plus, alt: "NewData" }}
          />
        } />
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