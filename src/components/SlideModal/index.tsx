import { useEffect } from 'react'
import './SlideModal.css'
import SlideCard from './SlideCard'
import SButton from '../../pieces/buttons/SButton'
import { xmark } from '../../assets'

type SlideModalProps = {
  open: boolean
  title?: string
  onClose: () => void
  editItem?: unknown
}

export default function SlideModal({ open, title, onClose, editItem }: SlideModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }

    if (open) {
      document.addEventListener('keydown', onKey)
    }

    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="modal-root">
      <div className="modal-overlay" onClick={onClose} />

      <aside className="slide-panel" role="dialog" aria-modal="true" aria-label={title}>
        <div className="slide-panel-header">
          <h3>{editItem ? 'Edit' : 'Add'} {title} informations</h3>
          <span className="ghost-button">
            <SButton
              handleClick={onClose}
              image={{ src: xmark, alt: "Close button" }}
            />
          </span>
        </div>

        <div className="slide-panel-body">
          {SlideCard(title ?? '', editItem, onClose)}
        </div>
      </aside>
    </div>
  )
}
