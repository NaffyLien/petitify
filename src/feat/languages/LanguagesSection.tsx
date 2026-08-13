import { PillList } from '../../components/PillList'

type LanguagesSectionProps = {
  items: string[]
  onChange: (index: number, value: string) => void
  onAdd: () => void
  onRemove: (index: number) => void
}

export function LanguagesSection({ items, onChange, onAdd, onRemove }: LanguagesSectionProps) {
  return (
    <PillList
      id="languages"
      eyebrow="Languages"
      title="Language proficiency"
      buttonLabel="Add language"
      items={items}
      onAdd={onAdd}
      onChange={onChange}
      onRemove={onRemove}
    />
  )
}
