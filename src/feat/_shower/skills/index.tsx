import { useResume } from '../../../contexts/useResume'
import type { ShowProps } from '../../../types/feat_props'
import '../shower.css'
import SButton from '../../../pieces/buttons/SButton'
import { plus, pen_3, trash } from '../../../assets'
import HeaderShow from '../_header'
import ConfirmModal from '../../../components/ConfirmModal'
import { useState } from 'react'

const SkillsShow = (props: ShowProps) => {
  const { resume, removeSkill } = useResume()
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)

  return <>
    <section className="show-section">
      <HeaderShow titre={"Technical Skills"} children={
        <SButton
          text='New skill'
          handleClick={props.handleNewClick}
          image={{ src: plus, alt: "NewData" }}
        />
      } />
      <div className="show-section-content">
        {resume.technicalSkills.map((skill: string, idx: number) => {
          return (
            <span
              key={idx}
              className={"show-entry show-skill-chip"}
            >
              {skill}
              <button type="button" className="ghost-button" onClick={() => props.onEdit?.({ value: skill, index: idx })}>
                <img src={pen_3} alt="Edit" />
              </button>
              <button type="button" className="ghost-button" onClick={() => setDeleteIndex(idx)}>
                <img src={trash} alt="Delete" />
              </button>
            </span>
          )
        })}
      </div>
      <ConfirmModal
        open={deleteIndex !== null}
        title="Delete skill"
        message="Are you sure you want to delete this skill? This action cannot be undone."
        onConfirm={() => {
          if (deleteIndex !== null) {
            removeSkill('technicalSkills', deleteIndex)
          }
          setDeleteIndex(null)
        }}
        onCancel={() => setDeleteIndex(null)}
      />
    </section>
  </>
}

export default SkillsShow
