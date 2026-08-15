import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus } from '../../../assets'
const ProfileShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    <section className="show-section">
      <header>
        <h2 className="show-section-title">Profile</h2>
          <SButton
            text='New skill'
            handleClick={props.handleNewClick}
            image={{src:plus, alt:"NewData"}}
          />      </header>
      <article className="show-section-content">
        <strong className="show-profile-name">{resume.profile.name || 'Your name'}</strong>
        <div className="show-meta">{resume.profile.title} • {resume.profile.location}</div>
        <div className="show-meta">{resume.profile.email} {resume.profile.phone}</div>
        {resume.profile.summary && <p className="show-desc">{resume.profile.summary}</p>}
      </article>
    </section>
  </>
}

export default ProfileShow