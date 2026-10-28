import { SectionHeader } from '@/components/ui/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import { Button } from '@/components/ui/Button'
import { RealImage } from '@/components/media/RealImage'
import Link from 'next/link'

const areas = [
  'Embedded systems and microcontrollers',
  'IoT',
  'Electronics design, repair, and troubleshooting',
  'Sensors, automation, and control',
  'AI and machine learning',
  'Data analysis and intelligent systems',
  'Multimedia: photography, video production, podcasting',
  'Prototyping, product development, and technical support',
]

const values = [
  { title: 'Learn by Doing', desc: 'Practical, hands-on learning that builds real skills through experimentation and problem-solving.' },
  { title: 'Pragmatic Innovation', desc: 'We focus on simple, effective technology solutions that address real needs in our community.' },
  { title: 'Equitable Access', desc: 'We work to open doors for students who are often excluded, with a focus on girls in technology.' },
  { title: 'Craftsmanship & Care', desc: 'We value precision, safety, and taking pride in the details of every build.' },
  { title: 'Collaboration', desc: 'We learn together with students, partners, and industry to grow stronger as a community.' },
  { title: 'Future-Focused', desc: 'We equip young people with relevant tech skills to create opportunities and drive change.' },
]

export default async function AboutPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>About RTGroup</h1>
        <p className="mt-3" style={{fontFamily: 'var(--font-body)', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '70ch'}}>
          RTGroup is a Rwanda-based technology company and hands-on innovation hub. <span style={{fontStyle: 'italic'}}>Learn by Doing. Innovate for the Future.</span>
        </p>
        <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>
          We build practical technology skills, develop engineering solutions, and connect people to opportunities through hands-on learning, innovation and industry collaboration.
        </p>
        <p className="mt-3 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>
          We serve students, graduates, businesses, institutions, investors and international development partners. Our inclusion commitment includes the RT Program for Girls in Technology.
        </p>
        <div className="mt-4">
          <TextLink href={`/${locale}/rt-program`}>Learn more about the RT Program</TextLink>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
        <div className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
          <SectionHeader index="01" title="Mission" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.7, maxWidth: '60ch'}}>
            To empower young people in Rwanda with practical, job-ready technology skills through hands-on learning, mentorship, and real engineering projects—so they can build solutions, create opportunities, and drive sustainable development in their communities.
          </p>
        </div>
        <div className="border border-[color:var(--color-line)] p-6" style={{background: 'rgba(255, 194, 26, 0.08)'}}>
          <SectionHeader index="02" title="Vision" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.7, maxWidth: '60ch'}}>
            A Rwanda where every motivated young person—especially those facing barriers—has access to practical tech education, the tools to innovate, and a clear path to meaningful opportunities in the digital economy.
          </p>
        </div>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="03" title="Our story" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '70ch'}}>
            RTGroup was born from a simple belief: skills are best learned by building. Through our hands-on workshop model, we bridge the gap between theory and practice—turning curiosity into capability and ideas into working prototypes.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="04" title="What we can do" />
        <ul className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
          {areas.map((area, i) => (
            <li key={i} className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{String(i+1).padStart(2,'0')}</span>
                <span style={{fontFamily: 'var(--font-body)'}}>{area}</span>
              </div>
              <Link href={`/${locale}/services`} className="text-[color:var(--color-sky-deep)]">→</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="05" title="Our Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <h3 style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>{v.title}</h3>
                <p className="mt-2 text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="06" title="Workshop" />
        <RealImage src="/about/MVI_1470.MOV" alt="RTGroup workshop" ratio="16/9" />
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 flex gap-4 flex-wrap">
        <Link href={`/${locale}/training`}><Button>Explore Programs</Button></Link>
        <Link href={`/${locale}/partners`}><Button variant="outline">Partner With Us</Button></Link>
      </section>
    </div>
  )
}
