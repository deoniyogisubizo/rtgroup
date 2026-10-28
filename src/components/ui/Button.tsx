import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  const base = 'inline-block px-6 py-2 text-[color:var(--color-ink)] border-2 border-[color:var(--color-ink)] transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sky-deep)] rounded-md'
  const styles = variant === 'primary' 
    ? 'bg-[color:var(--color-sky)]' 
    : 'bg-transparent'
  return (
    <button className={`${base} ${styles} hover:translate-x-[2px] hover:translate-y-[2px] ${className}`} {...props}>
      {children}
    </button>
  )
}
