import React from 'react'

type FormFieldProps = {
  label: string
  hint?: string
  error?: string
  children: React.ReactNode
  htmlFor?: string
}

export function FormField({ label, hint, error, children, htmlFor }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>{label}</label>
      {children}
      {hint && !error && <p className="text-sm text-[color:var(--color-muted)] mt-1">{hint}</p>}
      {error && <p className="text-sm text-[color:var(--color-wine)] mt-1" role="alert">{error}</p>}
    </div>
  )
}
