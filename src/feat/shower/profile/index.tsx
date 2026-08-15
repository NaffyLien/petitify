import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'

const ProfileShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
          <section className="export-section">
          <h2 className="export-section-title">Profile</h2>
        <button type="button" onClick={props.handleNewClick}>New language</button>
          <div className="export-section-content">
            <strong className="export-profile-name">{resume.profile.name || 'Your name'}</strong>
            <div className="export-meta">{resume.profile.title} • {resume.profile.location}</div>
            <div className="export-meta">{resume.profile.email} {resume.profile.phone}</div>
            {resume.profile.summary && <p className="export-desc">{resume.profile.summary}</p>}
          </div>
        </section>
</>
}

export default ProfileShow