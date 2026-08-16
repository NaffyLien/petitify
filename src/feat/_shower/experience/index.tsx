import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus, pen_3, trash } from '../../../assets'
import HeaderShow from '../_header'
import ConfirmModal from '../../../components/ConfirmModal'
import { useState } from 'react'

const ExperienceShow = (props: ShowProps) => {
  const { resume, removeExperience } = useResume()
  const [deleteId, setDeleteId] = useState<number | null>(null)

  return <>
    {/* Experience */}
    <section className="show-section">
      <HeaderShow titre={"Experience"} children={
        <SButton
          text='New experience'
          handleClick={props.handleNewClick}
          image={{ src: plus, alt: "NewData" }}
        />
      } />
      <div className="show-section-content">
        {resume.experience.map((ex) => {
          return (
            <div key={ex.id} className={"show-entry"}>
              <div>
                <strong>{ex.role}</strong> — {ex.company}
                <div className="show-meta">{ex.startDate} — {ex.endDate} • {ex.location}</div>
                {ex.description && <div className="show-desc">{ex.description}</div>}
              </div>
              <div className="show-entry-actions">
                <button type="button" className="ghost-button" onClick={() => props.onEdit?.(ex)}>
                  <img src={pen_3} alt="Edit" />
                </button>
                <button type="button" className="ghost-button" onClick={() => setDeleteId(ex.id)}>
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <ConfirmModal
        open={deleteId !== null}
        title="Delete experience"
        message="Are you sure you want to delete this experience entry? This action cannot be undone."
        onConfirm={() => {
          if (deleteId !== null) {
            removeExperience(deleteId)
          }
          setDeleteId(null)
        }}
        onCancel={() => setDeleteId(null)}
      />
    </section>
  </>
}

export default ExperienceShow
