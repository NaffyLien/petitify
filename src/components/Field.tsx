import type { ReactNode } from 'react'

type FieldProps = {
  label: string
  children: ReactNode
  fullWidth?: boolean
}

export function Field({ label, children, fullWidth = false }: FieldProps) {
  return (
    <label className={fullWidth ? 'field full-width' : 'field'}>
      <span>{label}</span>
      {children}
    </label>
  )
}
