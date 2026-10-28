import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { RealImage } from '@/components/media/RealImage'
import Link from 'next/link'

export default async function TrainingPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Training</h1>
          <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            At RTGroup, learning happens by doing. Our practical training is built around real projects in the workshop.
          </p>
          <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            We focus on hands-on practice, guided mentorship, and applying what you learn to real tasks.
          </p>
        </div>
        <RealImage src="/training/%23HSW2026 We are reading this in technlogies🔥🔥 (2).jpg.jpeg" alt="Training session" ratio="4/3" />
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="01" title="Programs" />
          <div className="border-t border-b border-[color:var(--color-line)] divide-y divide-[color:var(--color-line)]">
            <div className="py-4 flex items-center justify-between">
              <div>
                <div style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>Practical Technology Training</div>
                <div className="text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>Hands-on in the RTGroup workshop</div>
              </div>
              <TextLink href={`/${locale}/training/apply`}>Apply</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="02" title="How to apply" />
        <div className="relative">
          <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px bg-[color:var(--color-line)]" />
          <ol className="space-y-4">
            {[
              { step: '01', title: 'Choose a program', desc: 'Review and pick what fits your goals.' },
              { step: '02', title: 'Tell us about you', desc: 'Share your details and motivation.' },
              { step: '03', title: 'Submit and wait for review', desc: 'We review and get back with next steps.' },
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full border border-[color:var(--color-line)] bg-[color:var(--color-surface)] flex items-center justify-center z-10">
                  <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{item.step}</span>
                </div>
                <div className="flex-1 border border-[color:var(--color-line)] p-5">
                  <div style={{fontFamily: 'var(--font-body)', fontWeight: 500}}>{item.title}</div>
                  <div className="mt-1 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>{item.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-6">
          <Link href={`/${locale}/training/apply`}><Button>Apply now</Button></Link>
        </div>
      </section>
    </div>
  )
}
