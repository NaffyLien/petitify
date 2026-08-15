import { useResume } from '../../../contexts/useResume'

const CertificatesShow = () => {
  const { resume } = useResume()
  return <>
    {/* Certificates */}
    {resume.certificates.length > 0 && (
      <section className="export-section">
        <h2 className="export-section-title">Certificates</h2>
        <div className="export-section-content">
          {resume.certificates.map((c) => {
            return (
              <div key={c.id} className={"export-entry"}>
                <div>
                  <strong>{c.title}</strong> — {c.issuer}
                  <div className="export-meta">{c.date}</div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )}
  </>
}

export default CertificatesShow