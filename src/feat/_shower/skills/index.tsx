import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
import HeaderShow from '../_header'
const SkillsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {resume.technicalSkills.length > 0 && (
      <section className="show-section">
        <HeaderShow titre={"Technical Skills"} children={
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{ src: plus, alt: "NewData" }}
          />
        } />
        <div className="show-section-content">
          {resume.technicalSkills.map((skill: string, idx: number) => {
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

export default SkillsShow