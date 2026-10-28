import Link from 'next/link'
import React from 'react'

type TextLinkProps = React.ComponentProps<typeof Link>

export function TextLink({ className = '', children, ...props }: TextLinkProps) {
  return (
    <Link 
      className={`text-[color:var(--color-sky-deep)] underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sky-deep)] ${className}`} 
      {...props}
    >
      {children}
    </Link>
  )
}
