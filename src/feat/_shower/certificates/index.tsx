import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import { plus } from '../../../assets'
import SButton from '../../../pieces/buttons/SButton'
import HeaderShow from '../_header'
const CertificatesShow = (props: ShowProps) => {
  const { resume } = useResume()
  return <>
    {/* Certificates */}
    {resume.certificates.length > 0 && (
      <section className="show-section">
        <HeaderShow titre={"Certificates"} children={
          <SButton
            text='New certificate'
            handleClick={props.handleNewClick}
            image={{ src: plus, alt: "NewData" }}
          />
        } />
        <div className="show-section-content">
          {resume.certificates.map((c) => {
            return (
              <div key={c.id} className={"show-entry"}>
                <div>
                  <strong>{c.title}</strong> — {c.issuer}
                  <div className="show-meta">{c.date}</div>
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