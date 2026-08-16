import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus, pen_3, trash } from '../../../assets'
import HeaderShow from '../_header'
import ConfirmModal from '../../../components/ConfirmModal'
import { useState } from 'react'

const ProjectsShow = (props: ShowProps) => {
  const { resume, removeProject } = useResume()
  const [deleteId, setDeleteId] = useState<number | null>(null)

  return <>
    {/* Projects */}
    <section className="show-section">
      <HeaderShow titre={"Projects"} children={
        <SButton
          text='New project'
          handleClick={props.handleNewClick}
          image={{ src: plus, alt: "NewData" }}
        />
      } />
      <div className="show-section-content">
        {resume.projects.map((p) => {
          return (
            <div key={p.id} className={"show-entry"}>
              <div>
                <strong>{p.name}</strong> — <small className="show-meta">{p.link}</small>
                {p.description && <div className="show-desc">{p.description}</div>}
              </div>
              <div className="show-entry-actions">
                <button type="button" className="ghost-button" onClick={() => props.onEdit?.(p)}>
                  <img src={pen_3} alt="Edit" />
                </button>
                <button type="button" className="ghost-button" onClick={() => setDeleteId(p.id)}>
                  <img src={trash} alt="Delete" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <ConfirmModal
        open={deleteId !== null}
        title="Delete project"
        message="Are you sure you want to delete this project? This action cannot be undone."
        onConfirm={() => {
          if (deleteId !== null) {
            removeProject(deleteId)
          }
          setDeleteId(null)
        }}
        onCancel={() => setDeleteId(null)}
      />
    </section>
  </>
}

export default ProjectsShow
