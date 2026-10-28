import Image from 'next/image'
import Link from 'next/link'

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="mt-16 border-t border-[color:var(--color-line)]">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <Image
            src="/logo/RT%20Group%20Tech%20Logo.png"
            alt="RT Group — In technology we hatch"
            width={1774}
            height={887}
            className="h-20 w-40 object-contain"
          />
          <p className="mt-2 text-sm text-[color:var(--color-muted)]">Learn by Doing. Innovate for the Future.</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href={`/${locale}/careers`}>Internships & Careers</Link>
          <Link href={`/${locale}/multimedia`}>Multimedia & Media</Link>
          <Link href={`/${locale}/privacy`}>Privacy</Link>
          <Link href={`/${locale}/terms`}>Terms</Link>
          <Link href={`/${locale}/accessibility`}>Accessibility</Link>
        </div>
      </div>
    </footer>
  )
}
