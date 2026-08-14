import type { ResumeState } from '../../types/resume'
import './ResumePreview.css'

type ResumePreviewProps = {
  resume: ResumeState
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <section className="section-card" aria-label="Resume preview">
      <div className="profile-header">
        <div>
          <h2 className="resume-preview-name">{resume.profile.name || 'Your name'}</h2>
          <div className="resume-preview-subtitle">{resume.profile.title}</div>
          <div className="resume-preview-subtitle">{resume.profile.location}</div>
        </div>

        <div className="resume-preview-contact-right">
          <div>{resume.profile.email}</div>
          <div>{resume.profile.phone}</div>
        </div>
      </div>

      {resume.profile.summary && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Summary</h3>
          <p className="resume-preview-section-text">{resume.profile.summary}</p>
        </div>
      )}

      {resume.education.length > 0 && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Education</h3>
          <ul className="resume-preview-list">
            {resume.education.map((e) => (
              <li key={e.id} className="resume-preview-item">
                <strong>{e.degree}</strong> — {e.institution} <br />
                <small className="resume-preview-meta">{e.startDate} — {e.endDate} • {e.location}</small>
                {e.description && <div className="resume-preview-desc">{e.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.experience.length > 0 && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Experience</h3>
          <ul className="resume-preview-list">
            {resume.experience.map((ex) => (
              <li key={ex.id} className="resume-preview-item">
                <strong>{ex.role}</strong> — {ex.company} <br />
                <small className="resume-preview-meta">{ex.startDate} — {ex.endDate} • {ex.location}</small>
                {ex.description && <div className="resume-preview-desc">{ex.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.projects.length > 0 && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Projects</h3>
          <ul className="resume-preview-list">
            {resume.projects.map((p) => (
              <li key={p.id} className="resume-preview-item">
                <strong>{p.name}</strong> — <small className="resume-preview-meta">{p.link}</small>
                {p.description && <div className="resume-preview-desc">{p.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.certificates.length > 0 && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Certificates</h3>
          <ul className="resume-preview-list">
            {resume.certificates.map((c) => (
              <li key={c.id} className="resume-preview-item">
                <strong>{c.title}</strong> — {c.issuer} <br />
                <small className="resume-preview-meta">{c.date}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(resume.technicalSkills.length > 0 || resume.softSkills.length > 0 || resume.languages.length > 0) && (
        <div className="resume-preview-section">
          <h3 className="resume-preview-section-title">Skills & Languages</h3>
          <div className="resume-preview-skills">
            {resume.technicalSkills.length > 0 && (
              <div>
                <strong>Technical</strong>
                <div className="resume-preview-skill-text">{resume.technicalSkills.join(', ')}</div>
              </div>
            )}

            {resume.softSkills.length > 0 && (
              <div>
                <strong>Soft</strong>
                <div className="resume-preview-skill-text">{resume.softSkills.join(', ')}</div>
              </div>
            )}

            {resume.languages.length > 0 && (
              <div>
                <strong>Languages</strong>
                <div className="resume-preview-skill-text">{resume.languages.join(', ')}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
