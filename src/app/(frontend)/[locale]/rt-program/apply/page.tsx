import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'

export default async function RTApplyPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Apply to Girls in Technology</h1>
        <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Apply as yourself. Take it one step at a time.</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="border border-[color:var(--color-line)] p-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>1. First name</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" autoComplete="given-name" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>2. Contact (phone or email)</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" inputMode="email" autoComplete="email" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>3. Age range</label>
              <select className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]">
                <option value="">Select</option>
                <option value="under18">Under 18</option>
                <option value="18plus">18+</option>
              </select>
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>4. District or town</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>5. Why do you want to join? (short motivation)</label>
              <textarea className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" rows={4} />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>6. Preferred language</label>
              <select className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]">
                <option>English</option>
                <option>Kinyarwanda</option>
                <option>French</option>
              </select>
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>Parent or guardian (if under 18)</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" placeholder="Guardian name" />
              <input className="w-full px-3 py-2 mt-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" placeholder="Guardian contact (phone or email)" />
              <label className="flex items-start gap-2 mt-2">
                <input type="checkbox" className="mt-1" />
                <span style={{fontFamily: 'var(--font-body)'}}>I confirm guardian consent</span>
              </label>
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>Support I may need (optional)</label>
              <textarea className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" rows={3} placeholder="So we can prepare access and materials. You don’t have to answer." />
              <p className="text-xs text-[color:var(--color-muted)] mt-1">We don’t ask for refugee status or disability. If you choose to share, it’s only used to help with access.</p>
            </div>
            <label className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span style={{fontFamily: 'var(--font-body)'}}>I consent to processing of this data for this application.</span>
            </label>
          </div>
          <div className="mt-6">
            <Button>Submit application</Button>
          </div>
          <p className="mt-4 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            <strong>Why we collect this data:</strong> to process your application and respond. <strong>Who can see it:</strong> authorized reviewer and admin staff only. <strong>How long we keep it:</strong> for the period stated in our retention policy, then deleted or anonymized.
          </p>
          <div className="mt-3 flex gap-4 flex-wrap text-sm">
            <a href="https://wa.me/" className="text-[color:var(--color-sky-deep)] underline">Apply by WhatsApp</a>
            <TextLink href={`/${locale}/contact`}>Someone can help me fill this in</TextLink>
          </div>
        </div>
        <div className="mt-4">
          <TextLink href={`/${locale}/rt-program`}>Back to RT Program</TextLink>
        </div>
      </section>
    </div>
  )
}
