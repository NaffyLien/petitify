import { useEffect } from 'react'

type SlideModalProps = {
  open: boolean
  title?: string
  onClose: () => void
  children?: React.ReactNode
}

export default function SlideModal({ open, title, onClose, children }: SlideModalProps) {
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
          <h3>{title}</h3>
          <button className="ghost-button" onClick={onClose} aria-label="Close panel">Close</button>
        </div>

        <div className="slide-panel-body">{children}</div>
      </aside>
    </div>
  )
}
