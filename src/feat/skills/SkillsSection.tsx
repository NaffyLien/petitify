import { PillList } from '../../components/PillList'

type SkillsSectionProps = {
  items: string[]
  onChange: (index: number, value: string) => void
  onAdd: () => void
  onRemove: (index: number) => void
}

export function SkillsSection({ items, onChange, onAdd, onRemove }: SkillsSectionProps) {
  return (
    <PillList
      id="technical-skills"
      eyebrow="Technical skills"
      title="Tools and stacks"
      buttonLabel="Add skill"
      items={items}
      onAdd={onAdd}
      onChange={onChange}
      onRemove={onRemove}
    />
  )
}
