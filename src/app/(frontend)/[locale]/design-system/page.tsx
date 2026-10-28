import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { FormField } from '@/components/ui/FormField'
import { Input } from '@/components/ui/Input'
import { StatusTag } from '@/components/ui/StatusTag'
import { DeadlineTag } from '@/components/ui/DeadlineTag'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ImageSlot } from '@/components/media/ImageSlot'
import { VideoSlot } from '@/components/media/VideoSlot'

export default function DesignSystemPage() {
  const future = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3).toISOString()
  return (
    <main style={{padding: '2rem', background: 'var(--color-paper)'}}>
      <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em'}}>Design System (dev only)</h1>
      <section>
        <h2 style={{fontFamily: 'var(--font-heading)'}}>Tokens</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '1rem'}}>
          <div style={{background: 'var(--color-paper)', border: '1px solid var(--color-line)', padding: '1rem'}}>paper #F4F5F2</div>
          <div style={{background: 'var(--color-surface)', border: '1px solid var(--color-line)', padding: '1rem'}}>surface #FFFFFF</div>
          <div style={{background: 'var(--color-ink)', color: 'white', padding: '1rem'}}>ink #0C1A2A</div>
          <div style={{background: 'var(--color-muted)', color: 'white', padding: '1rem'}}>muted #5A6877</div>
          <div style={{background: 'var(--color-line)', padding: '1rem'}}>line #D9DEE2</div>
          <div style={{background: 'var(--color-sky)', color: 'var(--color-ink)', padding: '1rem'}}>sky #4DB6F0</div>
          <div style={{background: 'var(--color-sky-deep)', color: 'white', padding: '1rem'}}>sky-deep #0B6EA8</div>
          <div style={{background: 'var(--color-urgent)', padding: '1rem'}}>urgent #FFC21A</div>
          <div style={{background: 'var(--color-wine)', color: 'white', padding: '1rem'}}>wine #7A1F2B</div>
        </div>
      </section>
      <section style={{marginTop: '2rem'}}>
        <h2 style={{fontFamily: 'var(--font-heading)'}}>Typography</h2>
        <p style={{fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: 1.6}}>Body: Public Sans 17–18px</p>
        <p style={{fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', letterSpacing: '+0.06em', textTransform: 'uppercase'}}>Mono label</p>
      </section>
      <section style={{marginTop: '2rem'}}>
        <h2 style={{fontFamily: 'var(--font-heading)'}}>Components</h2>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center'}}>
          <Button>Explore Our Programs</Button>
          <Button variant="outline">Explore Our Projects</Button>
          <TextLink href="#">Partner With Us</TextLink>
        </div>
        <div style={{marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap'}}>
          <StatusTag status="PLANNED" />
          <StatusTag status="BUILDING" />
          <StatusTag status="TESTED" />
          <StatusTag status="COMPLETED" />
          <DeadlineTag deadline={future} />
        </div>
        <div style={{marginTop: '1rem', maxWidth: '400px'}}>
          <FormField label="Name" htmlFor="name">
            <Input id="name" placeholder="Your name" />
          </FormField>
        </div>
        <div style={{marginTop: '2rem'}}>
          <SectionHeader index="01" title="What we work on" />
        </div>
        <div style={{marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '2rem'}}>
          <ImageSlot ratio="4/3" />
          <ImageSlot ratio="16/9" caption="Workshop bench" id="RT-0042" />
          <VideoSlot />
        </div>
      </section>
    </main>
  )
}
