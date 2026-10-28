import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RealImage } from '@/components/media/RealImage'
import { RealVideo } from '@/components/media/RealVideo'
import { Reveal } from '@/components/animations/Reveal'
import Link from 'next/link'

const areas = [
  'Embedded systems and microcontrollers',
  'IoT',
  'Electronics design, repair, and troubleshooting',
  'Sensors, automation, and control',
  'AI and machine learning',
  'Data analysis and intelligent systems',
  'Prototyping and product development',
  'Technical support',
]

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
        <Reveal direction="left">
          <div>
            <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2.25rem, 7vw, 4rem)', lineHeight: 1.05, textWrap: 'balance'}}>
              Learn by Doing. Innovate for the Future.
            </h1>
            <p className="mt-5" style={{fontFamily: 'var(--font-body)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '60ch'}}>
              RTGroup builds practical technology skills, develops innovative engineering solutions and connects people to opportunities through hands-on learning, innovation and industry collaboration.
            </p>
            <div className="mt-7 flex gap-4 flex-wrap">
              <Link href={`/${locale}/training`}><Button>Explore Our Programs</Button></Link>
              <Link href={`/${locale}/projects`}><Button variant="outline">Explore Our Projects</Button></Link>
            </div>
            <div className="mt-5 flex gap-6 flex-wrap">
              <TextLink href={`/${locale}/partners`}>Partner With Us</TextLink>
              <TextLink href={`/${locale}/rt-program`}>Support Girls in Technology</TextLink>
            </div>
          </div>
        </Reveal>
        <Reveal direction="right">
          <RealImage
            src="/home/home-1.jpg"
            alt="RTGroup workshop"
            ratio="4/3"
            priority
          />
        </Reveal>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Reveal>
            <SectionHeader index="01" title="What we work on" />
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
              {areas.map((area, i) => (
                <li key={i} className="py-4 flex items-center justify-between card-hover">
                  <div className="flex items-center gap-4">
                    <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{String(i+1).padStart(2,'0')}</span>
                    <span style={{fontFamily: 'var(--font-body)'}}>{area}</span>
                  </div>
                  <Link href={`/${locale}/services`} className="text-[color:var(--color-sky-deep)]">→</Link>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal><div className="mt-4"><TextLink href={`/${locale}/services`}>View all services</TextLink></div></Reveal>
        </div>
      </section>

      <section className="tech-photo-section">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Reveal>
            <SectionHeader index="02" title="RT Program" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal direction="left">
              <div>
                <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
                  The RT Program helps girls build practical technology skills, find mentors, and explore future careers through hands-on learning.
                </p>
                <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
                  Every girl belongs in technology. We welcome girls from all backgrounds and experiences, including girls with disabilities, and are committed to making learning accessible, supportive, and inclusive.
                </p>
                <div className="mt-5 flex gap-4 flex-wrap">
                  <Link href={`/${locale}/rt-program`}><Button>Apply to the Program</Button></Link>
                  <TextLink href={`/${locale}/rt-program`} className="!text-[color:var(--color-sky)]">Learn more</TextLink>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right">
              <RealImage src="/rt-program/rt-program-1.jpg" alt="Girls working together on a technology project" ratio="4/3" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Reveal><SectionHeader index="03" title="Inside the workshop" /></Reveal>
          <Reveal><RealVideo src="/video/workshop-action.mp4" poster="/video/workshop-action.webp" title="Inside the workshop" /></Reveal>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <Reveal><SectionHeader index="04" title="Featured work" /></Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[{src:'/gallery/gallery-1.jpg',title:'Workshop Builds',desc:'Hands-on engineering projects from the lab.',href:`/${locale}/projects`},{src:'/training/training-1.jpg',title:'Training Highlights',desc:'Practical skills developed through learning by doing.',href:`/${locale}/training`},{src:'/gallery/gallery-4.jpg',title:'From the Bench Wall',desc:'Moments captured in the workshop.',href:`/${locale}/gallery`}].map((card,i)=>(
            <Reveal key={i} className="h-full">
              <div className="border border-[color:var(--color-line)] p-4 h-full card-hover">
                <RealImage src={card.src} alt={card.title} ratio="4/3" />
                <h3 className="mt-3" style={{fontFamily: 'var(--font-heading)', fontWeight: 600}}>{card.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>{card.desc}</p>
                <div className="mt-3"><TextLink href={card.href}>View more</TextLink></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
