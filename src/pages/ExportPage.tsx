import { useMemo, useState } from 'react'
import type { ResumeState } from '../types/resume'

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
    <div style={{ padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button className="ghost-button" onClick={onBack}>Back</button>
          <h1 style={{ margin: 0 }}>Exported profile</h1>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          <button className="keyword-btn primary-button" onClick={downloadJSON}>Download JSON</button>
        </div>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <label style={{ fontWeight: 600 }}>Filter by keyword:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => { setFilter(e.target.value); setActiveKeyword(null) }}
          placeholder="e.g. Mobile development"
          style={{ padding: 8, borderRadius: 8, border: '1px solid #e2e8f0' }}
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

      <div style={{ marginTop: 18 }}>
        {/* Profile */}
        {(!filterText || matchesProfile(filterText)) && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Profile</h2>
            <div style={{ marginTop: 8 }}>
              <strong style={{ fontSize: 18 }}>{resume.profile.name || 'Your name'}</strong>
              <div style={{ color: '#475569' }}>{resume.profile.title} • {resume.profile.location}</div>
              <div style={{ color: '#475569' }}>{resume.profile.email} {resume.profile.phone}</div>
              {resume.profile.summary && <p style={{ color: '#334155' }}>{resume.profile.summary}</p>}
            </div>
          </section>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Education</h2>
            <div style={{ marginTop: 8 }}>
              {resume.education.map((e) => {
                const txt = [e.degree, e.institution, e.field, e.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={e.id} style={{ marginBottom: 10 }}>
                    <strong>{e.degree}</strong> — {e.institution}
                    <div style={{ color: '#475569' }}>{e.startDate} — {e.endDate} • {e.location}</div>
                    {e.description && <div style={{ color: '#334155' }}>{e.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Experience</h2>
            <div style={{ marginTop: 8 }}>
              {resume.experience.map((ex) => {
                const txt = [ex.role, ex.company, ex.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={ex.id} style={{ marginBottom: 10 }}>
                    <strong>{ex.role}</strong> — {ex.company}
                    <div style={{ color: '#475569' }}>{ex.startDate} — {ex.endDate} • {ex.location}</div>
                    {ex.description && <div style={{ color: '#334155' }}>{ex.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Projects</h2>
            <div style={{ marginTop: 8 }}>
              {resume.projects.map((p) => {
                const txt = [p.name, p.description, p.link].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={p.id} style={{ marginBottom: 10 }}>
                    <strong>{p.name}</strong> — <small style={{ color: '#475569' }}>{p.link}</small>
                    {p.description && <div style={{ color: '#334155' }}>{p.description}</div>}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Certificates */}
        {resume.certificates.length > 0 && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Certificates</h2>
            <div style={{ marginTop: 8 }}>
              {resume.certificates.map((c) => {
                const txt = [c.title, c.issuer, c.description].filter(Boolean).join(' ')
                if (filterText && !txt.toLowerCase().includes(filterText.toLowerCase())) return null
                return (
                  <div key={c.id} style={{ marginBottom: 10 }}>
                    <strong>{c.title}</strong> — {c.issuer}
                    <div style={{ color: '#475569' }}>{c.date}</div>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Skills & Languages */}
        {combinedSkills.length > 0 && (!filterText || combinedSkills.join(' ').toLowerCase().includes(filterText.toLowerCase())) && (
          <section style={{ background: 'white', padding: 16, borderRadius: 12, marginBottom: 12 }}>
            <h2 style={{ margin: 0 }}>Skills & Languages</h2>
            <div style={{ marginTop: 8 }}>
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

      <footer style={{ marginTop: 26, color: '#94a3b8' }}>Use the filter to show only sections matching the entered keyword.</footer>
    </div>
  )
}
