import { SectionHeader } from '../SectionHeader'
import './PillList.css'

type PillListProps = {
  id?: string
  eyebrow: string
  title: string
  buttonLabel: string
  items: string[]
  onAdd: () => void
  onChange: (index: number, value: string) => void
  onRemove: (index: number) => void
}

export function PillList({
  id,
  eyebrow,
  title,
  buttonLabel,
  items,
  onAdd,
  onChange,
  onRemove,
}: PillListProps) {
  return (
    <section className="section-card" id={id}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        action={
          <button type="button" className="ghost-button" onClick={onAdd}>
            + {buttonLabel}
          </button>
        }
      />

      <div className="pill-list">
        {items.map((item, index) => (
          <div className="pill-input" key={`${eyebrow}-${index}`}>
            <input
              value={item}
              onChange={(event) => onChange(index, event.target.value)}
            />
            <button type="button" onClick={() => onRemove(index)}>
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
