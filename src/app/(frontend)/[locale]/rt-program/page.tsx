import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { StatusTag } from '@/components/ui/StatusTag'
import { RealImage } from '@/components/media/RealImage'
import { RealVideo } from '@/components/media/RealVideo'
import Link from 'next/link'

const activities = [
  'Electronics and circuit basics',
  'Microcontrollers and programming',
  'Sensors, IoT and data',
  'Prototyping and testing',
  'Multimedia: photography and video',
]

export default async function RTProgramPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <div className="bg-[color:var(--color-urgent)] text-[color:var(--color-ink)] text-center py-2 text-sm" style={{fontFamily: 'var(--font-body)'}}>
        <Link href="#accommodation">Need an accommodation? Request one</Link>
      </div>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, textWrap: 'balance'}}>Girls in Technology. Learn by doing.</h1>
            <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
              The RT Program for Girls in Technology gives girls a safe, hands-on space to learn practical tech skills, build real projects, and explore career pathways through mentorship.
            </p>
            <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
              We focus on learning by doing, with attention to access and inclusion.
            </p>
            <div className="mt-6 flex gap-4 flex-wrap">
              <Link href={`/${locale}/rt-program/apply`}><Button>Apply to the Program</Button></Link>
            </div>
            <div className="mt-4 flex gap-6 flex-wrap">
              <TextLink href="#sponsor">Sponsor a Participant</TextLink>
              <TextLink href="#partner">Become a Partner</TextLink>
              <TextLink href="#volunteer">Volunteer or Mentor</TextLink>
            </div>
          </div>
          <div className="space-y-4">
            <RealImage src="/rt-program/FG_6ELVypestdo4Qwqu9Seu-eqdiBzFmZpRpdpevuDenjBLZNjWkrdMBEas64Su8LG93XIp32Nr0u2zpEXTT6rnlJ_f1wVwu29TWQQsDWhxXiW5aJqOuFJa1_zgz7crZRCJqmg1Gq1E0K7hRufXyX293LUaPCjNge9eHs_wXWWzubr39_tVEALZ6cQjWrCDa.jfif.jpeg" alt="Girls in Technology" ratio="3/2" />
            <RealVideo src="/rt-program/MVI_1472.MOV" title="RT Program" />
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-40 bg-[color:var(--color-paper)] border-t border-b border-[color:var(--color-line)]">
        <nav className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-4 overflow-x-auto text-sm" style={{fontFamily: 'var(--font-body)'}}>
          <a href="#purpose">Purpose</a>
          <a href="#who">Who it’s for</a>
          <a href="#activities">What you’ll do</a>
          <a href="#support">Support</a>
          <a href="#apply">Apply</a>
          <a href="#sponsor">Sponsor</a>
          <a href="#safeguarding">Safeguarding</a>
          <a href="#faq">FAQ</a>
          <div className="ml-auto hidden md:block">
            <Link href={`/${locale}/rt-program/apply`}><Button>Apply</Button></Link>
          </div>
        </nav>
      </div>

      <section id="purpose" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="01" title="Purpose" />
        <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>To equip girls with practical technology skills through hands-on learning, mentorship, and real projects—opening pathways to further training and opportunities.</p>
      </section>

      <section id="who" className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="02" title="Who it’s for" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>Girls interested in technology. Priority goes to refugee girls and girls with physical disabilities, including mobility-related needs.</p>
          <p className="mt-2 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>Applying does not require sharing refugee status or disability.</p>
        </div>
      </section>

      <section id="activities" className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="03" title="What you’ll do" />
        <ul className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
          {activities.map((a, i) => (
            <li key={i} className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{String(i+1).padStart(2,'0')}</span>
                <span style={{fontFamily: 'var(--font-body)'}}>{a}</span>
              </div>
              <StatusTag status="PLANNED" />
            </li>
          ))}
        </ul>
      </section>

      <section id="apply" className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="04" title="Apply" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Apply as yourself. If you’re under 18, we’ll ask for a parent or guardian’s details and consent.</p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <Link href={`/${locale}/rt-program/apply`}><Button>Start your application</Button></Link>
            <a href="https://wa.me/250785866529" className="px-6 py-2 border-2 border-[color:var(--color-ink)]">Apply by WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
