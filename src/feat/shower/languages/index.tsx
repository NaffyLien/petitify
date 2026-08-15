import { useResume } from '../../../contexts/useResume'

const LanguagesShow = () => {
  const { resume } = useResume()
  return <>
    {resume.languages.length > 0 && (
      <div>
        <strong>Languages:</strong>
        <div>
          {resume.languages.map((lang, idx) => {
            return (
              <span
                key={idx}
                className={"export-skill-chip"}
              >
                {lang}
              </span>
            )
          })}
        </div>
      </div>
    )}
  </>
}

export default LanguagesShow