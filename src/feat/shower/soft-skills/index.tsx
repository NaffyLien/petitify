import { useResume } from '../../../contexts/useResume'

const SoftSkillsShow = () => {
  const { resume } = useResume()
  return <>
    {resume.softSkills.length > 0 && (
      <div>
        <strong>Soft:</strong>
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