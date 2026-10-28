import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'

export default async function TrainingApplyPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Apply for Training</h1>
        <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Fill in the form below step by step.</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <div className="border border-[color:var(--color-line)] p-6">
          <div className="space-y-4">
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>1. Name</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>2. Phone or email</label>
              <input className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" />
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>3. Program</label>
              <select className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]">
                <option>To be confirmed</option>
              </select>
            </div>
            <div>
              <label className="block mb-1" style={{fontFamily: 'var(--font-body)'}}>4. Short motivation</label>
              <textarea className="w-full px-3 py-2 bg-[color:var(--color-surface)] border border-[color:var(--color-line)] rounded-[2px]" rows={4} placeholder="Tell us why you want to join..." />
            </div>
          </div>
          <div className="mt-6">
            <Button>Submit application</Button>
          </div>
          <p className="mt-4 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            <strong>Why we collect this data:</strong> to process your training application and respond. <strong>Who can see it:</strong> authorized reviewer and admin staff only. <strong>How long we keep it:</strong> for the period stated in our retention policy, then deleted or anonymized.
          </p>
          <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>
            No refugee status or disability information is requested here.
          </p>
        </div>
        <div className="mt-4">
          <TextLink href={`/${locale}/training`}>Back to training</TextLink>
        </div>
      </section>
    </div>
  )
}
