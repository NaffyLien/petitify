import { useMemo, useState } from 'react'
import type { ResumeState } from '../../types/resume'
import './ExportPage.css'

type ExportPageProps = {
  resume: ResumeState
  onBack: () => void
}

export default function ExportPage({ resume, onBack }: ExportPageProps) {
  const [filter, setFilter] = useState('')
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null)

  const keywords = ['Mobile development', 'Web Development', 'Desktop App', 'Network']

  const combinedSkills = useMemo(() => {
    return [...(resume.technicalSkills || []), ...(resume.softSkills || []), ...(resume.languages || [])]
  }, [resume])

  function containsKeyword(text: string | undefined | null, kw: string) {
    if (!text) return false
    return text.toLowerCase().includes(kw.toLowerCase())
  }

  function matchesProfile(kw: string) {
    return (
      containsKeyword(resume.profile.name, kw) ||
      containsKeyword(resume.profile.title, kw) ||
      containsKeyword(resume.profile.summary, kw)
    )
  }

  function downloadJSON() {
    const data = JSON.stringify(resume, null, 2)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = (resume.profile.name || 'export') + '-resume.json'
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const filterText = filter.trim()

  return (
    <div className="export-page">
      <div className="export-page-header">
        <div className="export-page-header-left">
          <button className="ghost-button" onClick={onBack}>Back</button>
          <h1 className="export-page-title">Exported profile</h1>
        </div>

        <div className="export-page-header-right">
          <button className="keyword-btn primary-button" onClick={downloadJSON}>Download JSON</button>
        </div>
      </div>

      <div className="export-page-filters">
        <label className="export-page-filter-label">Filter by keyword:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setActiveKeyword(null) }}
          placeholder="e.g. Mobile development"
          className="export-page-filter-input"
        />

        {keywords.map((k) => (
          <button
            key={k}
            onClick={() => { setFilter(k); setActiveKeyword(k) }}
            className={"keyword-btn" + (activeKeyword === k ? ' active' : '')}
            type="button"
          >
            {k}
          </button>
        ))}

        <button className="keyword-btn" onClick={() => { setFilter(''); setActiveKeyword(null) }}>Clear</button>
      </div>

      <div className="export-page-sections">
        {/* Profile */}
        {(!filterText || matchesProfile(filterText)) && (
          <section className="export-section">
            <h2 className="export-section-title">Profile</h2>
            <div className="export-section-content">
              <strong className="export-profile-name">{resume.profile.name || 'Your name'}</strong>
              <div className="export-meta">{resume.profile.title} • {resume.profile.location}</div>
              <div className="export-meta">{resume.profile.email} {resume.profile.phone}</div>
              {resume.profile.summary && <p className="export-desc">{resume.profile.summary}</p>}
            </div>
          </section>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Education</h2>
            <div className="export-section-content">
              {resume.education.map((e) => {
                const txt = [e.degree, e.institution, e.field, e.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={e.id} className="export-entry">
                    <strong>{e.degree}</strong> — {e.institution}
                    <div className="export-meta">{e.startDate} — {e.endDate} • {e.location}</div>
                    {e.description && <div className="export-desc">{e.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Experience</h2>
            <div className="export-section-content">
              {resume.experience.map((ex) => {
                const txt = [ex.role, ex.company, ex.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={ex.id} className="export-entry">
                    <strong>{ex.role}</strong> — {ex.company}
                    <div className="export-meta">{ex.startDate} — {ex.endDate} • {ex.location}</div>
                    {ex.description && <div className="export-desc">{ex.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Projects</h2>
            <div className="export-section-content">
              {resume.projects.map((p) => {
                const txt = [p.name, p.description, p.link].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={p.id} className="export-entry">
                    <strong>{p.name}</strong> — <small className="export-meta">{p.link}</small>
                    {p.description && <div className="export-desc">{p.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Certificates */}
        {resume.certificates.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Certificates</h2>
            <div className="export-section-content">
              {resume.certificates.map((c) => {
                const txt = [c.title, c.issuer, c.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={c.id} className="export-entry">
                    <strong>{c.title}</strong> — {c.issuer}
                    <div className="export-meta">{c.date}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Skills & Languages */}
        {combinedSkills.length > 0 && (!filterText || combinedSkills.join(' ').toLowerCase().includes(filterText.toLowerCase())) && (
          <section className="export-section">
            <h2 className="export-section-title">Skills & Languages</h2>
            <div className="export-section-content">
              {resume.technicalSkills.length > 0 && (
                <div><strong>Technical:</strong> {resume.technicalSkills.join(', ')}</div>
              )}
              {resume.softSkills.length > 0 && (
                <div><strong>Soft:</strong> {resume.softSkills.join(', ')}</div>
              )}
              {resume.languages.length > 0 && (
                <div><strong>Languages:</strong> {resume.languages.join(', ')}</div>
              )}
            </div>
          </section>
        )}
      </div>

      <footer className="export-footer">Use the filter to show only sections matching the entered keyword.</footer>
    </div>
  )
}
