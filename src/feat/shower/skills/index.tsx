import { useResume } from '../../../contexts/useResume'

const SkillsShow = () => {
  const { resume } = useResume()
  return <>
    {resume.technicalSkills.length > 0 && (
      <div>
        <strong>Technical:</strong>
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