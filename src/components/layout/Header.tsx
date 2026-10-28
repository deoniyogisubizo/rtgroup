'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function Header({ locale }: { locale: string }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 40)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-[color:var(--color-paper)]">
      <div className={`max-w-6xl mx-auto px-4 flex items-center justify-between gap-4 flex-wrap transition-[padding] duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`}>
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
        <nav className="flex items-center gap-6 flex-wrap text-sm" style={{fontFamily: 'var(--font-body)'}}>
          <Link href={`/${locale}`}>Home</Link>
          <Link href={`/${locale}/about`}>About</Link>
          <Link href={`/${locale}/rt-program`} style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}><span className="w-2 h-2 rounded-full bg-[color:var(--color-wine)]" />RT Program</Link>
          <Link href={`/${locale}/services`}>Services</Link>
          <Link href={`/${locale}/training`}>Training</Link>
          <Link href={`/${locale}/gallery`}>Gallery</Link>
          <Link href={`/${locale}/contact`}>Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="text-xs" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em'}}>
            <Link href="/en">EN</Link>
          </div>
          <Button>Apply</Button>
        </div>
      </div>
    </header>
  )
}
