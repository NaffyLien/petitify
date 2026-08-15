import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'

const SoftSkillsShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {resume.softSkills.length > 0 && (
      <div>
        <strong>Soft:</strong>
        <button type="button" onClick={props.handleNewClick}>New language</button>

        <div>
          {resume.softSkills.map((skill, idx) => {
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

export default SoftSkillsShow