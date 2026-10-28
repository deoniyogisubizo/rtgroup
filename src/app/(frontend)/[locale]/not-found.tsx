'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 'clamp(3rem, 10vw, 6rem)', lineHeight: 1}}>404</h1>
      <p className="mt-4" style={{fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: 1.6}}>Page not found</p>
      <p className="mt-2 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <div className="mt-8">
        <Link href="/" className="px-6 py-3 border-2 border-[color:var(--color-ink)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors">
          Go home
        </Link>
      </div>
    </div>
  )
}