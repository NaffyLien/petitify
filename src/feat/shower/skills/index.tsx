import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'

const SkillsShow = (props:ShowProps) => {
  const { resume } = useResume()
  return <>
    {resume.technicalSkills.length > 0 && (
      <div>
        <strong>Technical:</strong>
        <button type="button" onClick={props.handleNewClick}>New language</button>
        <div>
          {resume.technicalSkills.map((skill, idx) => {
            return (
              <span
                key={idx}
                className={"export-skill-chip"}
              >
                {skill}
              </span>
            )
          })}
        </div>
      </div>
    )}
  </>
}

export default SkillsShow