import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus, pen_3, trash } from '../../../assets'
import HeaderShow from '../_header'
import ConfirmModal from '../../../components/ConfirmModal'
import { useState } from 'react'

const EducationShow = (props: ShowProps) => {
  const { resume, removeEducation } = useResume()
  const [deleteId, setDeleteId] = useState<number | null>(null)

  return <>
    {/* Education */}
    <section className="show-section">
      <HeaderShow titre={"Education"} children={
        <SButton
          text='New info'
          handleClick={props.handleNewClick}
          image={{ src: plus, alt: "NewData" }}
        />
      } />
      <div className="show-section-content">
        {resume.education.map((e) => {
          return (
            <div key={e.id} className={"show-entry"}>
              <div>
                <strong>{e.degree}</strong> — {e.institution}
                <div className="show-meta">{e.startDate} — {e.endDate} • {e.location}</div>
                {e.description && <div className="show-desc">{e.description}</div>}
              </div>
              <div className="show-entry-actions">
                <button type="button" className="ghost-button" onClick={() => props.onEdit?.(e)}>
                  <img src={pen_3} alt="Edit" />
                </button>
                <button type="button" className="ghost-button" onClick={() => setDeleteId(e.id)}>
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <ConfirmModal
        open={deleteId !== null}
        title="Delete education"
        message="Are you sure you want to delete this education entry? This action cannot be undone."
        onConfirm={() => {
          if (deleteId !== null) {
            removeEducation(deleteId)
          }
          setDeleteId(null)
        }}
        onCancel={() => setDeleteId(null)}
      />
    </section>
  </>
}

export default EducationShow
