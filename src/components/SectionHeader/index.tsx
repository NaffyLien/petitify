import type { ReactNode } from 'react'
import './SectionHeader.css'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  action?: ReactNode
}

const SectionHeader = ({ eyebrow, title, action }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
      </div>
      {action}
    </div>
  )
}

export default SectionHeader
