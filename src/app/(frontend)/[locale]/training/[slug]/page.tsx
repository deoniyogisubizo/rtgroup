import { SectionHeader } from '@/components/ui/SectionHeader'
import { ImageSlot } from '@/components/media/ImageSlot'
import { VideoSlot } from '@/components/media/VideoSlot'
import { TextLink } from '@/components/ui/TextLink'
import { Button } from '@/components/ui/Button'
import { StatusTag } from '@/components/ui/StatusTag'
import { DeadlineTag } from '@/components/ui/DeadlineTag'
import Link from 'next/link'

export default async function TrainingDetailPage({ params }: { params: Promise<{locale: string, slug: string}> }) {
  const { locale, slug } = await params
  const hasFee = false
  const hasDeadline = false
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)', textTransform: 'capitalize'}}>{slug.replace(/-/g, ' ')}</h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>Updated <span>[To be confirmed by RTGroup]</span></p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <SectionHeader index="01" title="Overview" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Description, duration, schedule and entry requirements will come from CMS.</p>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            {hasFee && <span style={{fontFamily: 'var(--font-body)'}}>Fee: [To be confirmed]</span>}
            {hasDeadline && <DeadlineTag deadline={new Date(Date.now()+86400000*3).toISOString()} />}
          </div>
          <div className="mt-6">
            <SectionHeader index="02" title="Skills you will practice" />
            <ul className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
              {['Work safely and measure carefully', 'Build and test a simple circuit', 'Program a microcontroller to read a sensor', 'Debug and document your work'].map((s, i) => (
                <li key={i} className="py-3 flex items-center gap-4">
                  <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{String(i+1).padStart(2,'0')}</span>
                  <span style={{fontFamily: 'var(--font-body)'}}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <ImageSlot ratio="4/3" />
          <VideoSlot />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <SectionHeader index="03" title="Real work from this program" />
        <p className="text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>Linked projects and gallery photos appear only if published with consent. Hidden when empty.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="border border-[color:var(--color-line)] p-4 opacity-60">
            <ImageSlot ratio="4/3" />
            <div className="mt-3 flex items-center gap-2">
              <StatusTag status="PLANNED" />
            </div>
            <p className="mt-2 text-sm" style={{fontFamily: 'var(--font-body)'}}>Project details from CMS</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 flex gap-4 flex-wrap items-center">
        <Link href={`/${locale}/training/apply`}><Button>Apply to this program</Button></Link>
        <TextLink href={`/${locale}/training`}>Back to training</TextLink>
      </section>
    </div>
  )
}
