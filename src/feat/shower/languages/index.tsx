import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
const LanguagesShow = (props: ShowProps ) => {
  const { resume } = useResume()
  return <>
    {resume.languages.length > 0 && (
      <section className="show-section">
        <header>
          <h2 className="show-section-title">Languages</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />        </header>
        <div className="show-section-content">
          {resume.languages.map((lang, idx) => {
          return (
              <span
                key={idx}
                className={"show-entry show-skill-chip"}
              >
                {lang}
              </span>
            )
          })}
        </div>
      </section>
    )}
  </>
}

export default LanguagesShow