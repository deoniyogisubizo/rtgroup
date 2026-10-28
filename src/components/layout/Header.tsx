'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Header({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 40)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)]">
      <div className={`relative max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 transition-[padding] duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
        <Link href={`/${locale}`} className="flex shrink-0 items-center" aria-label="RT Group home">
          <Image
            src="/logo/RT%20Group%20Tech%20Logo.png"
            alt="RT Group — In technology we hatch"
            width={1774}
            height={887}
            priority
            className={`object-contain transition-[width,height] duration-300 ${isScrolled ? 'h-10 w-20 sm:h-12 sm:w-24' : 'h-[3.9rem] w-[7.8rem] sm:h-[4.55rem] sm:w-[9.1rem]'}`}
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex" style={{fontFamily: 'var(--font-body)'}}>
          <Link href={`/${locale}`}>Home</Link>
          <Link href={`/${locale}/about`}>About</Link>
          <Link href={`/${locale}/rt-program`} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><span className="w-2 h-2 rounded-full bg-[color:var(--color-wine)]" />RT Program</Link>
          <Link href={`/${locale}/services`}>Services</Link>
          <Link href={`/${locale}/training`}>Training</Link>
          <Link href={`/${locale}/gallery`}>Gallery</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <div className="text-xs" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em'}}>
            <Link href="/en">EN</Link>
          </div>
          <Button>Apply</Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[color:var(--color-line)] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-surface)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-sky-deep)] lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            {isMenuOpen ? (
              <path d="M6.7 5.3 12 10.6l5.3-5.3 2.1 2.1-5.3 5.3 5.3 5.3-2.1 2.1-5.3-5.3-5.3 5.3-2.1-2.1 5.3-5.3-5.3-5.3z" />
            ) : (
              <>
                <rect x="3" y="5" width="18" height="2.5" rx="1.25" />
                <rect x="3" y="10.75" width="18" height="2.5" rx="1.25" />
                <rect x="3" y="16.5" width="18" height="2.5" rx="1.25" />
              </>
            )}
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)] px-4 pb-5 pt-2 shadow-lg lg:hidden"
          style={{fontFamily: 'var(--font-body)'}}
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            <Link href={`/${locale}`} onClick={closeMenu} className="border-b border-[color:var(--color-line)] py-3">Home</Link>
            <Link href={`/${locale}/about`} onClick={closeMenu} className="border-b border-[color:var(--color-line)] py-3">About</Link>
            <Link href={`/${locale}/rt-program`} onClick={closeMenu} className="flex items-center gap-2 border-b border-[color:var(--color-line)] py-3">
              <span className="h-2 w-2 rounded-full bg-[color:var(--color-wine)]" />
              RT Program
            </Link>
            <Link href={`/${locale}/services`} onClick={closeMenu} className="border-b border-[color:var(--color-line)] py-3">Services</Link>
            <Link href={`/${locale}/training`} onClick={closeMenu} className="border-b border-[color:var(--color-line)] py-3">Training</Link>
            <Link href={`/${locale}/gallery`} onClick={closeMenu} className="border-b border-[color:var(--color-line)] py-3">Gallery</Link>
            <Link href={`/${locale}/contact`} onClick={closeMenu} className="py-3">Contact</Link>
            <div className="mt-3 flex items-center justify-between">
              <Link href="/en" onClick={closeMenu} className="text-xs" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em'}}>EN</Link>
              <Link href={`/${locale}/rt-program/apply`} onClick={closeMenu}>
                <Button>Apply</Button>
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
