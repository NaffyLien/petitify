import { useMemo, useState } from 'react'
import type { ResumeState } from '../../types/resume'
import './ExportPage.css'

type ExportPageProps = {
  resume: ResumeState
  onBack: () => void
}

type ExcludedKeys = {
  education: Set<number>
  experience: Set<number>
  projects: Set<number>
  certificates: Set<number>
  technicalSkills: Set<number>
  softSkills: Set<number>
  languages: Set<number>
}

export default function ExportPage({ resume, onBack }: ExportPageProps) {
  const [filter, setFilter] = useState('')
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null)
  const [excluded, setExcluded] = useState<ExcludedKeys>({
    education: new Set(),
    experience: new Set(),
    projects: new Set(),
    certificates: new Set(),
    technicalSkills: new Set(),
    softSkills: new Set(),
    languages: new Set(),
  })

  const keywords = ['Mobile development', 'Web Development', 'Desktop App', 'Network']

  const combinedSkills = useMemo(() => {
    return [...(resume.technicalSkills || []), ...(resume.softSkills || []), ...(resume.languages || [])]
  }, [resume])

  function toggleExclusion(category: keyof ExcludedKeys, id: number) {
    setExcluded((current) => {
      const next = { ...current }
      next[category] = new Set(current[category])
      if (next[category].has(id)) {
        next[category].delete(id)
      } else {
        next[category].add(id)
      }
      return next
    })
  }

  function downloadJSON() {
    const data = {
      ...resume,
      education: resume.education.filter((e) => !excluded.education.has(e.id)),
      experience: resume.experience.filter((ex) => !excluded.experience.has(ex.id)),
      projects: resume.projects.filter((p) => !excluded.projects.has(p.id)),
      certificates: resume.certificates.filter((c) => !excluded.certificates.has(c.id)),
      technicalSkills: resume.technicalSkills.filter((_, idx) => !excluded.technicalSkills.has(idx)),
      softSkills: resume.softSkills.filter((_, idx) => !excluded.softSkills.has(idx)),
      languages: resume.languages.filter((_, idx) => !excluded.languages.has(idx)),
    }
    const json = JSON.stringify(data, null, 2)
    const blob = new Blob([json], { type: 'application/json' })
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
        <section className="export-section">
          <h2 className="export-section-title">Profile</h2>
          <div className="export-section-content">
            <strong className="export-profile-name">{resume.profile.name || 'Your name'}</strong>
            <div className="export-meta">{resume.profile.title} • {resume.profile.location}</div>
            <div className="export-meta">{resume.profile.email} {resume.profile.phone}</div>
            {resume.profile.summary && <p className="export-desc">{resume.profile.summary}</p>}
          </div>
        </section>

        {/* Education */}
        {resume.education.length > 0 && (
          <section className="export-section">
            <h2 className="export-section-title">Education</h2>
            <div className="export-section-content">
              {resume.education.map((e) => {
                const txt = [e.degree, e.institution, e.field, e.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                const isExcluded = excluded.education.has(e.id)
                return (
                  <div key={e.id} className={"export-entry" + (isExcluded ? ' export-entry-excluded' : '')}>
                    <div>
                      <strong>{e.degree}</strong> — {e.institution}
                      <div className="export-meta">{e.startDate} — {e.endDate} • {e.location}</div>
                      {e.description && <div className="export-desc">{e.description}</div>}
                    </div>
                    <button
                      className={"export-remove-btn" + (isExcluded ? ' export-remove-btn-active' : '')}
                      onClick={() => toggleExclusion('education', e.id)}
                      title={isExcluded ? 'Include in export' : 'Exclude from export'}
                    >
                      {isExcluded ? 'Include' : 'Remove'}
                    </button>
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
                const isExcluded = excluded.experience.has(ex.id)
                return (
                  <div key={ex.id} className={"export-entry" + (isExcluded ? ' export-entry-excluded' : '')}>
                    <div>
                      <strong>{ex.role}</strong> — {ex.company}
                      <div className="export-meta">{ex.startDate} — {ex.endDate} • {ex.location}</div>
                      {ex.description && <div className="export-desc">{ex.description}</div>}
                    </div>
                    <button
                      className={"export-remove-btn" + (isExcluded ? ' export-remove-btn-active' : '')}
                      onClick={() => toggleExclusion('experience', ex.id)}
                      title={isExcluded ? 'Include in export' : 'Exclude from export'}
                    >
                      {isExcluded ? 'Include' : 'Remove'}
                    </button>
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
                const isExcluded = excluded.projects.has(p.id)
                return (
                  <div key={p.id} className={"export-entry" + (isExcluded ? ' export-entry-excluded' : '')}>
                    <div>
                      <strong>{p.name}</strong> — <small className="export-meta">{p.link}</small>
                      {p.description && <div className="export-desc">{p.description}</div>}
                    </div>
                    <button
                      className={"export-remove-btn" + (isExcluded ? ' export-remove-btn-active' : '')}
                      onClick={() => toggleExclusion('projects', p.id)}
                      title={isExcluded ? 'Include in export' : 'Exclude from export'}
                    >
                      {isExcluded ? 'Include' : 'Remove'}
                    </button>
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
                const isExcluded = excluded.certificates.has(c.id)
                return (
                  <div key={c.id} className={"export-entry" + (isExcluded ? ' export-entry-excluded' : '')}>
                    <div>
                      <strong>{c.title}</strong> — {c.issuer}
                      <div className="export-meta">{c.date}</div>
                    </div>
                    <button
                      className={"export-remove-btn" + (isExcluded ? ' export-remove-btn-active' : '')}
                      onClick={() => toggleExclusion('certificates', c.id)}
                      title={isExcluded ? 'Include in export' : 'Exclude from export'}
                    >
                      {isExcluded ? 'Include' : 'Remove'}
                    </button>
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
                <div>
                  <strong>Technical:</strong>
                  <div>
                    {resume.technicalSkills.map((skill, idx) => {
                      const isExcluded = excluded.technicalSkills.has(idx)
                      if (filterText && !skill.toLowerCase().includes(filterText.toLowerCase())) return null
                      return (
                        <span
                          key={idx}
                          className={"export-skill-chip" + (isExcluded ? ' export-skill-chip-excluded' : '')}
                        >
                          {skill}
                          <button
                            className="export-skill-remove"
                            onClick={() => toggleExclusion('technicalSkills', idx)}
                            title={isExcluded ? 'Include in export' : 'Exclude from export'}
                          >
                            {isExcluded ? '+' : '×'}
                          </button>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              {resume.softSkills.length > 0 && (
                <div>
                  <strong>Soft:</strong>
                  <div>
                    {resume.softSkills.map((skill, idx) => {
                      const isExcluded = excluded.softSkills.has(idx)
                      if (filterText && !skill.toLowerCase().includes(filterText.toLowerCase())) return null
                      return (
                        <span
                          key={idx}
                          className={"export-skill-chip" + (isExcluded ? ' export-skill-chip-excluded' : '')}
                        >
                          {skill}
                          <button
                            className="export-skill-remove"
                            onClick={() => toggleExclusion('softSkills', idx)}
                            title={isExcluded ? 'Include in export' : 'Exclude from export'}
                          >
                            {isExcluded ? '+' : '×'}
                          </button>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
              {resume.languages.length > 0 && (
                <div>
                  <strong>Languages:</strong>
                  <div>
                    {resume.languages.map((lang, idx) => {
                      const isExcluded = excluded.languages.has(idx)
                      if (filterText && !lang.toLowerCase().includes(filterText.toLowerCase())) return null
                      return (
                        <span
                          key={idx}
                          className={"export-skill-chip" + (isExcluded ? ' export-skill-chip-excluded' : '')}
                        >
                          {lang}
                          <button
                            className="export-skill-remove"
                            onClick={() => toggleExclusion('languages', idx)}
                            title={isExcluded ? 'Include in export' : 'Exclude from export'}
                          >
                            {isExcluded ? '+' : '×'}
                          </button>
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>

      <footer className="export-footer">Use the filter to show only sections matching the entered keyword.</footer>
    </div>
  )
}
