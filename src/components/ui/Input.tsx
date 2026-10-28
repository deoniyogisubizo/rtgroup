import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = '', ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sky-deep)] ${className}`}
      {...props}
    />
  )
})
Input.displayName = 'Input'
