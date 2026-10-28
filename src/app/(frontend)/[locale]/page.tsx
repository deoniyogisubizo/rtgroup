import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { RealImage } from '@/components/media/RealImage'
import { RealVideo } from '@/components/media/RealVideo'
import { Reveal } from '@/components/animations/Reveal'
import Image from 'next/image'
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

const partnerSupport = [
  ['Scholarships', 'Cover training costs for girls who cannot afford to participate, including refugee girls and girls from low-income families.'],
  ['Technology and equipment', 'Donate or fund computers, electronics components, tools, software, and multimedia equipment.'],
  ['Accessibility and inclusion', 'Help provide accessible facilities, suitable workstations, assistive equipment, and other agreed adjustments.'],
  ['Learner support', 'Contribute to transport, learning materials, and meals for learners who need assistance.'],
  ['Mentors and trainers', 'Share professional expertise, lead guest sessions, mentor learners, or support practical projects.'],
  ['Internships and job links', 'Offer workplace visits, internships, job-shadowing, project feedback, or employer introductions.'],
  ['Program delivery', 'Support trainers, coordination, learning materials, monitoring, and reporting.'],
]

export default async function HomePage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-[color:var(--color-ink)]">
        <Image
          src="/home/home-1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-32 text-white md:grid-cols-2 md:py-28">
          <Reveal direction="left">
            <div>
              <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2.25rem, 7vw, 4rem)', lineHeight: 1.05, textWrap: 'balance'}}>
                Learn by Doing. Innovate for the Future.
              </h1>
              <p className="mt-5 text-white/90" style={{fontFamily: 'var(--font-body)', fontSize: '1.08rem', lineHeight: 1.7, maxWidth: '60ch'}}>
                RTGroup builds practical technology skills, develops innovative engineering solutions and connects people to opportunities through hands-on learning, innovation and industry collaboration.
              </p>
              <div className="mt-7 flex gap-4 flex-wrap">
                <Link href={`/${locale}/rt-program`}><Button>Empowering Girls in Technology</Button></Link>
                <Link href={`/${locale}/partners`}><Button variant="outline" className="!border-white !text-white !bg-transparent">Partner With Us</Button></Link>
              </div>
              <div className="mt-5 flex gap-6 flex-wrap">
                <TextLink href={`/${locale}/projects`} className="!text-[color:var(--color-sky)]">Explore Our Projects</TextLink>
                <TextLink href={`/${locale}/training`} className="!text-[color:var(--color-sky)]">Explore Our Programs</TextLink>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" className="flex justify-center md:justify-end">
            <Image
              src="/hero/RT%20Program%20Girls%20in%20Tech%20Badge.png"
              alt="RT Program — Empowering girls with hands-on technology skills"
              width={1254}
              height={1254}
              priority
              className="w-full max-w-sm rounded-2xl object-contain shadow-2xl sm:max-w-md"
            />
          </Reveal>
        </div>
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
                  RT Program is a proposed hands-on technology initiative from RTGroup in Kigali. It aims to help girls and young women facing educational, financial, and social barriers build practical skills and pathways toward work, internships, and self-employment.
                </p>
                <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
                  Girls with leg or mobility disabilities receive first priority. The planned pilot also welcomes young women who missed formal education and girls from low-income families; boys are planned to join as 30% of places as peer learners and allies.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="border border-white/25 bg-black/20 p-4">
                    <p className="text-2xl font-bold" style={{fontFamily: 'var(--font-heading)'}}>70%</p>
                    <p className="mt-1 text-sm text-white/80" style={{fontFamily: 'var(--font-body)'}}>Girls in the planned cohort</p>
                  </div>
                  <div className="border border-white/25 bg-black/20 p-4">
                    <p className="text-2xl font-bold" style={{fontFamily: 'var(--font-heading)'}}>30–50</p>
                    <p className="mt-1 text-sm text-white/80" style={{fontFamily: 'var(--font-body)'}}>Proposed Kigali pilot learners</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-white/70" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
                  Pilot targets and accessibility support depend on confirmed funding, arrangements, and training capacity.
                </p>
                <div className="mt-5 flex gap-4 flex-wrap">
                  <Link href={`/${locale}/rt-program`}><Button>Explore RT Program</Button></Link>
                  <Link href={`/${locale}/partners`}><Button variant="outline" className="!border-white !text-white !bg-transparent">Partner With Us</Button></Link>
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
        <div className="max-w-6xl mx-auto grid items-center gap-8 px-4 py-14 md:grid-cols-[1.7fr_1fr] md:gap-10">
          <Reveal direction="left">
            <div className="overflow-hidden border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-2 shadow-lg">
              <RealVideo src="/video/workshop-action.mp4" poster="/video/workshop-action.webp" title="Inside the RTGroup workshop" />
            </div>
          </Reveal>
          <Reveal direction="right">
            <div>
              <SectionHeader index="03" title="Inside the workshop" />
              <p className="text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
                Practical skills grow through making, testing, and solving real problems. In the workshop, learners focus on:
              </p>
              <ul className="mt-5 divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
                {[
                  'Electronics, circuits, and microcontrollers',
                  'IoT, sensors, and automation',
                  'Prototyping, troubleshooting, and repair',
                  'Coding, data, and introductory AI',
                  'Multimedia, photography, and video',
                  'Teamwork and real-world problem-solving',
                ].map((focus, index) => (
                  <li key={focus} className="flex items-start gap-3 py-3" style={{fontFamily: 'var(--font-body)'}}>
                    <span className="mt-0.5 text-xs text-[color:var(--color-sky-deep)]" style={{fontFamily: 'var(--font-mono)'}}>{String(index + 1).padStart(2, '0')}</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <TextLink href={`/${locale}/services`}>Explore our technical work</TextLink>
              </div>
            </div>
          </Reveal>
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

      <section id="support-rt-program" className="section-wash scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Reveal>
            <SectionHeader index="05" title="How sponsors and partners can help" />
          </Reveal>
          <Reveal>
            <p className="mb-6 max-w-3xl text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              Support the full pilot or choose an area that matters to you. Contributions can be financial, in-kind, or through professional time and partnerships.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {partnerSupport.map(([title, description]) => (
                <article key={title} className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5 card-hover">
                  <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.65}}>{description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tech-photo-section">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <Reveal>
            <SectionHeader index="06" title="Growing opportunity across Rwanda" />
          </Reveal>
          <div className="grid items-start gap-8 md:grid-cols-[1.4fr_1fr]">
            <Reveal direction="left">
              <div>
                <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.75}}>
                  RT Program aims to grow from a supported pilot into a lasting skills-development initiative. RTGroup will build relationships with technology companies, employers, education providers, refugee-support groups, disability organizations, and development partners.
                </p>
                <p className="mt-4 text-white/85" style={{fontFamily: 'var(--font-body)', lineHeight: 1.75}}>
                  These partnerships can help learners continue learning, meet role models, access internships, find work, or explore self-employment. Over time, RTGroup hopes to bring practical technology learning to more girls across Rwanda.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="border border-white/25 bg-black/20 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-wider text-[color:var(--color-sky)]" style={{fontFamily: 'var(--font-mono)'}}>Let’s build that opportunity together</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl" style={{fontFamily: 'var(--font-heading)', lineHeight: 1.2}}>
                  One opportunity can change a girl’s future. One practical skill can open a new door.
                </h3>
                <p className="mt-4 text-white/85" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
                  Let’s discuss how your organization can help make accessible technology training possible.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a className="font-semibold text-[color:var(--color-sky)] underline underline-offset-4" href="mailto:rtgrouprwanda@gmail.com">rtgrouprwanda@gmail.com</a>
                  <a className="font-semibold text-[color:var(--color-sky)] underline underline-offset-4" href="tel:+250785866529">+250 785 866 529</a>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href={`/${locale}/partners`}><Button>Discuss a Partnership</Button></Link>
                  <Link href={`/${locale}/rt-program`}><Button variant="outline" className="!border-white !text-white !bg-transparent">Learn About RT Program</Button></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
