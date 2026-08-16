import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import { plus, pen_3, trash } from '../../../assets'
import SButton from '../../../pieces/buttons/SButton'
import HeaderShow from '../_header'
import ConfirmModal from '../../../components/ConfirmModal'
import { useState } from 'react'

const CertificatesShow = (props: ShowProps) => {
  const { resume, removeCertificate } = useResume()
  const [deleteId, setDeleteId] = useState<number | null>(null)

  return <>
    {/* Certificates */}
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
              <div className="show-entry-actions">
                <button type="button" className="ghost-button" onClick={() => props.onEdit?.(c)}>
                  <img src={pen_3} alt="Edit" />
                </button>
                <button type="button" className="ghost-button" onClick={() => setDeleteId(c.id)}>
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <ConfirmModal
        open={deleteId !== null}
        title="Delete certificate"
        message="Are you sure you want to delete this certificate? This action cannot be undone."
        onConfirm={() => {
          if (deleteId !== null) {
            removeCertificate(deleteId)
          }
          setDeleteId(null)
        }}
        onCancel={() => setDeleteId(null)}
      />
    </section>
  </>
}

export default CertificatesShow
