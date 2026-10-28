import { SectionHeader } from '@/components/ui/SectionHeader'
import { ImageSlot } from '@/components/media/ImageSlot'
import { VideoSlot } from '@/components/media/VideoSlot'
import { TextLink } from '@/components/ui/TextLink'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default async function ServiceDetailPage({ params }: { params: Promise<{locale: string, slug: string}> }) {
  const { locale, slug } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)', textTransform: 'capitalize'}}>{slug.replace(/-/g, ' ')}</h1>
        <p className="mt-3 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-mono)', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>Updated <span>[To be confirmed by RTGroup]</span></p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <SectionHeader index="01" title="What we do" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Practical engineering work tailored to your need. Details depend on scope and will be confirmed after review.</p>
          <div className="mt-6">
            <SectionHeader index="02" title="Who it’s for" />
            <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Students, businesses, and institutions looking for practical solutions or support.</p>
          </div>
          <div className="mt-6">
            <SectionHeader index="03" title="Typical work" />
            <ul className="list-disc ml-5 space-y-2" style={{fontFamily: 'var(--font-body)'}}>
              <li>Assessment and troubleshooting</li>
              <li>Design and prototyping</li>
              <li>Testing and basic documentation</li>
              <li>Practical training integration where relevant</li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <ImageSlot ratio="4/3" />
          <VideoSlot />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        <SectionHeader index="04" title="Related" />
        <p className="text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>Related projects and training programs will appear here if published in CMS.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="05" title="Request this service" />
        <div className="max-w-xl">
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Tell us your need. Fields: name, phone or email, service (pre-selected), short description.</p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <Link href={`/${locale}/contact`}><Button>Request this service</Button></Link>
            <TextLink href={`/${locale}/services`}>Back to services</TextLink>
          </div>
          <p className="mt-3 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>Why we collect this data: to respond to your request. Who sees it: authorized staff only. We keep it only as long as needed for this request.</p>
        </div>
      </section>
    </div>
  )
}
