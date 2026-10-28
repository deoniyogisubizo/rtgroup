import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function ContactPage() {
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Contact</h1>
        <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Get in touch with RTGroup.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12 grid md:grid-cols-2 gap-8">
        <div>
          <SectionHeader index="01" title="Reach us" />
          <div className="space-y-3" style={{fontFamily: 'var(--font-body)'}}>
            <div>
              <div className="text-[color:var(--color-muted)]">Phone</div>
              <div>+250 785 866 529</div>
            </div>
            <div>
              <div className="text-[color:var(--color-muted)]">Email</div>
              <div>ruzimatechnologygroup@gmail.com</div>
            </div>
            <div>
              <div className="text-[color:var(--color-muted)]">WhatsApp</div>
              <div>+250 785 866 529</div>
            </div>
          </div>
        </div>
        <div className="border border-[color:var(--color-line)] p-6" style={{background: 'rgba(77, 182, 240, 0.08)'}}>
          <SectionHeader index="02" title="Request more info / Talk to us" />
          <p className="mb-4 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>Tell us your idea and how to reach you.</p>
          <div className="space-y-4">
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>Name</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>WhatsApp number</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" inputMode="tel" placeholder="+250..." />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>Your idea</label>
              <textarea className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" rows={4} placeholder="Tell us what you'd like to talk about" />
            </div>
          </div>
          <div className="mt-4">
            <Button>Send request</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
