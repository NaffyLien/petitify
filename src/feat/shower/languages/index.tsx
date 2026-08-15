import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'

const LanguagesShow = (props: ShowProps ) => {
  const { resume } = useResume()
  return <>
    {resume.languages.length > 0 && (
      <div>
        <strong>Languages:</strong>
        <button type="button" onClick={props.handleNewClick}>New language</button>
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