import type { ResumeState } from '../types/resume'

type ResumePreviewProps = {
  resume: ResumeState
}

export default function ResumePreview({ resume }: ResumePreviewProps) {
  return (
    <section className="section-card" aria-label="Resume preview">
      <div className="profile-header">
        <div>
          <h2 style={{ margin: 0 }}>{resume.profile.name || 'Your name'}</h2>
          <div style={{ color: '#475569', marginTop: 6 }}>{resume.profile.title}</div>
          <div style={{ color: '#475569', marginTop: 6 }}>{resume.profile.location}</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div>{resume.profile.email}</div>
          <div>{resume.profile.phone}</div>
        </div>
      </div>

      {resume.profile.summary && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Summary</h3>
          <p style={{ margin: 0, color: '#334155' }}>{resume.profile.summary}</p>
        </div>
      )}

      {resume.education.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Education</h3>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {resume.education.map((e) => (
              <li key={e.id} style={{ marginBottom: 8 }}>
                <strong>{e.degree}</strong> — {e.institution} <br />
                <small style={{ color: '#475569' }}>{e.startDate} — {e.endDate} • {e.location}</small>
                {e.description && <div style={{ color: '#334155' }}>{e.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.experience.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Experience</h3>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {resume.experience.map((ex) => (
              <li key={ex.id} style={{ marginBottom: 8 }}>
                <strong>{ex.role}</strong> — {ex.company} <br />
                <small style={{ color: '#475569' }}>{ex.startDate} — {ex.endDate} • {ex.location}</small>
                {ex.description && <div style={{ color: '#334155' }}>{ex.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.projects.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Projects</h3>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {resume.projects.map((p) => (
              <li key={p.id} style={{ marginBottom: 8 }}>
                <strong>{p.title}</strong> — <small style={{ color: '#475569' }}>{p.link}</small>
                {p.description && <div style={{ color: '#334155' }}>{p.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {resume.certificates.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Certificates</h3>
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {resume.certificates.map((c) => (
              <li key={c.id} style={{ marginBottom: 8 }}>
                <strong>{c.name}</strong> — {c.issuer} <br />
                <small style={{ color: '#475569' }}>{c.date}</small>
              </li>
            ))}
          </ul>
        </div>
      )}

      {(resume.technicalSkills.length > 0 || resume.softSkills.length > 0 || resume.languages.length > 0) && (
        <div style={{ marginTop: 16 }}>
          <h3 style={{ margin: '0 0 8px 0' }}>Skills & Languages</h3>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {resume.technicalSkills.length > 0 && (
              <div>
                <strong>Technical</strong>
                <div style={{ color: '#334155' }}>{resume.technicalSkills.join(', ')}</div>
              </div>
            )}

            {resume.softSkills.length > 0 && (
              <div>
                <strong>Soft</strong>
                <div style={{ color: '#334155' }}>{resume.softSkills.join(', ')}</div>
              </div>
            )}

            {resume.languages.length > 0 && (
              <div>
                <strong>Languages</strong>
                <div style={{ color: '#334155' }}>{resume.languages.join(', ')}</div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
