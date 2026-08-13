import { PillList } from '../../components/PillList'

type SoftSkillsSectionProps = {
  items: string[]
  onChange: (index: number, value: string) => void
  onAdd: () => void
  onRemove: (index: number) => void
}

export function SoftSkillsSection({ items, onChange, onAdd, onRemove }: SoftSkillsSectionProps) {
  return (
    <PillList
      id="soft-skills"
      eyebrow="Soft skills"
      title="Work style"
      buttonLabel="Add soft skill"
      items={items}
      onAdd={onAdd}
      onChange={onChange}
      onRemove={onRemove}
    />
  )
}
