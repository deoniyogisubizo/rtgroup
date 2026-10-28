import { SectionHeader } from '@/components/ui/SectionHeader'
import { Button } from '@/components/ui/Button'
import { TextLink } from '@/components/ui/TextLink'
import { RealImage } from '@/components/media/RealImage'
import { RealVideo } from '@/components/media/RealVideo'
import Image from 'next/image'
import Link from 'next/link'

const learnerGroups = [
  {
    title: 'Girls with leg or mobility disabilities',
    description: 'First priority. Accessible venues, adjustable workstations, transport support, and tailored assistance are planned around each learner, subject to available resources.',
  },
  {
    title: 'Girls who missed formal education',
    description: 'A practical route to build skills and explore employment or small-business opportunities after leaving school early.',
  },
  {
    title: 'Girls from low-income families',
    description: 'Scholarships, learning materials, and participant support are planned so financial hardship is less likely to block access.',
  },
  {
    title: 'Boys as peer learners and allies',
    description: 'Around 30% of places are planned for boys to learn alongside girls, build teamwork, and support more inclusive technology workplaces.',
  },
]

const trainingAreas = [
  {
    title: 'Practical ICT and digital skills',
    description: 'Computer literacy, internet use, digital productivity, basic coding, and workplace-ready digital skills.',
  },
  {
    title: 'Multimedia and digital creativity',
    description: 'Graphic design, video editing, photography, content creation, and digital communication.',
  },
  {
    title: 'Hands-on technology',
    description: 'Electronics, basic troubleshooting and repair, embedded systems, IoT, and introductory AI where suitable.',
  },
  {
    title: 'Employability and entrepreneurship',
    description: 'CV preparation, communication, teamwork, business basics, portfolio development, and preparation for work or self-employment.',
  },
  {
    title: 'Inclusive learning and mentorship',
    description: 'Supportive learning spaces, mentorship, and guidance on future career opportunities.',
  },
  {
    title: 'Industry exposure',
    description: 'Visits, guest sessions, and projects with companies to help learners connect with workplace expectations.',
  },
]

const accessibilityPlans = [
  'Step-free training venues, ramps, and accessible restrooms where available.',
  'Adjustable desks, workbenches, and seating for comfortable practical work.',
  'Transport support, assistive equipment, and flexible pacing where resources allow.',
  'Mentors, including women working in technology, and coordination with disability organizations.',
  'Respect for each participant’s privacy, dignity, and individual accommodation needs.',
]

const outcomes = [
  ['Opens doors', 'Reduces barriers to technology education for girls who have been left out.'],
  ['Builds representation', 'Supports girls with disabilities to take their place in technical fields.'],
  ['Delivers real skills', 'Develops practical, market-relevant abilities and a portfolio to demonstrate them.'],
  ['Creates pathways', 'Connects learners with potential jobs, internships, and self-employment.'],
  ['Builds confidence', 'Encourages creativity, problem-solving, and self-belief.'],
  ['Inspires role models', 'Helps graduates become innovators and examples in their communities.'],
]

const timeline = [
  ['Months 1–2', 'Mobilization, partner engagement, participant selection, and accessibility planning.'],
  ['Months 3–4', 'Digital foundations, introduction to ICT, and practical learning.'],
  ['Months 5–9', 'Specialized hands-on training, projects, and mentorship.'],
  ['Months 10–11', 'Portfolio development, career preparation, and engagement with potential employers.'],
  ['Month 12', 'Final demonstrations, evaluation, reporting, and planning for the next phase.'],
]

const supportNeeds = [
  ['Training scholarships', 'Help girls and young women access training regardless of financial circumstances.'],
  ['Technology and equipment', 'Provide computers, electronics components, tools, software, and multimedia equipment.'],
  ['Disability inclusion', 'Support accessible venues, adjustable workstations, and assistive equipment.'],
  ['Participant support', 'Contribute to transport, learning materials, and meals where needed.'],
  ['Mentorship and jobs', 'Offer volunteer trainers, professional mentors, internships, and job connections.'],
  ['Program delivery', 'Help resource training personnel, coordination, monitoring, and evaluation.'],
]

export default async function RTProgramPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10 flex justify-center">
          <Image
            src="/hero/RT%20Program%20Girls%20in%20Tech%20Badge.png"
            alt="RT Program — Empowering girls with hands-on technology skills"
            width={1254}
            height={1254}
            priority
            className="w-full max-w-sm object-contain sm:max-w-md"
          />
        </div>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-wider text-[color:var(--color-sky-deep)]" style={{fontFamily: 'var(--font-mono)'}}>
              RT Program · A proposed RTGroup initiative
            </p>
            <h1 className="mt-2" style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.1, textWrap: 'balance'}}>
              Girls in Technology
            </h1>
            <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              RT Program is a proposed hands-on technology training initiative of RUZIMA Technology Group (RTGroup) in Kigali, Rwanda. It aims to give girls and young women facing educational, financial, disability-related, or social barriers a practical route into the digital economy.
            </p>
            <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              Learners would train on real equipment, build projects, and develop portfolios while being guided toward potential jobs, internships, and self-employment. Boys are planned to make up 30% of the cohort as peer learners and allies.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="#support"><Button>Partner With the Program</Button></Link>
              <Link href={`/${locale}/rt-program/apply`}><Button variant="outline">Register Your Interest</Button></Link>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
              The pilot, participant target, timeline, and support will depend on confirmed funding, accessibility arrangements, and training capacity.
            </p>
          </div>
          <div className="space-y-4">
            <RealImage src="/rt-program/rt-program-1.jpg" alt="Girls working together on a technology project" ratio="3/2" />
            <RealVideo src="/video/rt-program.mp4" poster="/video/rt-program.webp" title="RT Program" />
          </div>
        </div>
      </section>

      <nav aria-label="RT Program sections" className="sticky top-0 z-40 border-y border-[color:var(--color-line)] bg-[color:var(--color-paper)]">
        <div className="max-w-6xl mx-auto flex items-center gap-5 overflow-x-auto px-4 py-3 text-sm" style={{fontFamily: 'var(--font-body)'}}>
          <a href="#vision" className="shrink-0">Vision & mission</a>
          <a href="#who" className="shrink-0">Who will benefit</a>
          <a href="#approach" className="shrink-0">Our approach</a>
          <a href="#training" className="shrink-0">Training</a>
          <a href="#accessibility" className="shrink-0">Accessibility</a>
          <a href="#timeline" className="shrink-0">Pilot plan</a>
          <a href="#support" className="shrink-0">Partner with us</a>
        </div>
      </nav>

      <section id="vision" className="scroll-mt-24 max-w-6xl mx-auto grid gap-6 px-4 py-12 md:grid-cols-2">
        <div className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
          <SectionHeader index="01" title="Our vision" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
            A future where every girl, regardless of disability, financial situation, or educational background, can learn technology and build an independent life.
          </p>
        </div>
        <div className="border border-[color:var(--color-line)] p-6" style={{background: 'rgba(255, 194, 26, 0.08)'}}>
          <SectionHeader index="02" title="Our mission" />
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
            To empower girls and young women facing educational and social barriers—especially those with leg disabilities—through inclusive, hands-on ICT, multimedia, and technology training that opens pathways to employment, entrepreneurship, and innovation.
          </p>
        </div>
      </section>

      <section id="who" className="scroll-mt-24 section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="03" title="Who will benefit?" />
          <p className="max-w-3xl" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
            The proposed Kigali pilot aims to reach 30–50 learners, subject to funding, accessibility, and training capacity. Girls receive priority, especially girls with leg or mobility disabilities.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
              <p className="text-3xl font-bold text-[color:var(--color-sky-deep)]" style={{fontFamily: 'var(--font-heading)'}}>70%</p>
              <h3 className="mt-1 font-semibold">Girls</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Priority for girls with mobility disabilities, young women who missed formal education, and girls from low-income families.</p>
            </div>
            <div className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
              <p className="text-3xl font-bold text-[color:var(--color-sky-deep)]" style={{fontFamily: 'var(--font-heading)'}}>30%</p>
              <h3 className="mt-1 font-semibold">Boys as peer learners and allies</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>A mixed classroom promotes teamwork and models more inclusive technology workplaces.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            At the upper target of 50 learners, the proposed cohort would include 35 girls and 15 boys. Final numbers depend on available resources.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {learnerGroups.map((group) => (
              <article key={group.title} className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{group.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{group.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="04" title="Learn. Build. Innovate. Work." />
        <p className="max-w-3xl" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
          Every module is designed around learning by doing. Learners work with real equipment, solve practical problems, and build a portfolio they can share with employers and clients.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Learn', 'Build core ICT and digital skills.'],
            ['Build', 'Create projects with electronics, media, and code.'],
            ['Innovate', 'Develop solutions for local needs.'],
            ['Work', 'Prepare for internships, jobs, and self-employment.'],
          ].map(([title, description], index) => (
            <div key={title} className="border border-[color:var(--color-line)] p-5">
              <span className="text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-mono)'}}>0{index + 1}</span>
              <h3 className="mt-2 text-xl font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{title}</h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="scroll-mt-24 section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="05" title="What the program will provide" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trainingAreas.map((area) => (
              <article key={area.title} className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{area.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="accessibility" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="06" title="Inclusion and accessibility" />
        <p className="max-w-3xl" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
          Girls with leg disabilities are at the heart of RT Program. Accessibility will be planned from the start and finalized with each learner and disability organizations as resources allow.
        </p>
        <ul className="mt-5 grid gap-3 md:grid-cols-2">
          {accessibilityPlans.map((plan) => (
            <li key={plan} className="flex items-start gap-3 border border-[color:var(--color-line)] p-4">
              <span aria-hidden="true" className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--color-sky-deep)]" />
              <span style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{plan}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
          We will agree accommodation arrangements with participants while respecting their privacy and dignity.
        </p>
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="07" title="Why RT Program matters" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map(([title, description]) => (
              <article key={title} className="border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
                <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-24 max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="08" title="Proposed 12-month pilot" />
        <p className="mb-5 max-w-3xl text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
          The schedule and participant numbers will be confirmed once resources, partnerships, and accessibility arrangements are secured.
        </p>
        <ol className="divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
          {timeline.map(([period, activity]) => (
            <li key={period} className="grid gap-2 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <span className="font-semibold text-[color:var(--color-sky-deep)]" style={{fontFamily: 'var(--font-mono)'}}>{period}</span>
              <span style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{activity}</span>
            </li>
          ))}
        </ol>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="border border-[color:var(--color-line)] p-5">
            <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>Sustainability and long-term vision</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              RTGroup aims to grow the supported pilot through relationships with technology companies, employers, education institutions, disability organizations, and development partners. The long-term ambition is to bring practical technology education to more girls across Rwanda.
            </p>
          </article>
          <article className="border border-[color:var(--color-line)] p-5">
            <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>Accountability to partners</h3>
            <p className="mt-2 text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              With partners, RTGroup will agree on progress reports, participation records, project demonstrations, and impact updates while protecting participant privacy and dignity.
            </p>
          </article>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 tech-photo-section">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="09" title="Partner with RT Program" />
          <p className="max-w-3xl" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
            Sponsors, donors, foundations, employers, and community partners can help make accessible technology training possible. Partners may support the pilot as a whole, a specific training area, equipment, or individual participants.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportNeeds.map(([title, description]) => (
              <article key={title} className="border border-white/25 bg-black/20 p-5">
                <h3 className="font-semibold" style={{fontFamily: 'var(--font-heading)'}}>{title}</h3>
                <p className="mt-2 text-sm text-white/80" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 border-t border-white/25 pt-6">
            <h3 className="text-2xl font-semibold" style={{fontFamily: 'var(--font-heading)'}}>One opportunity can change a girl’s future.</h3>
            <p className="mt-2 max-w-2xl text-white/85" style={{fontFamily: 'var(--font-body)', lineHeight: 1.7}}>
              One practical skill can open a new door. Together, we can make technology more accessible to girls.
            </p>
            <div className="mt-5 flex flex-wrap gap-5">
              <a href="mailto:rtgrouprwanda@gmail.com" className="font-semibold text-[color:var(--color-sky)] underline underline-offset-4">rtgrouprwanda@gmail.com</a>
              <a href="tel:+250785866529" className="font-semibold text-[color:var(--color-sky)] underline underline-offset-4">+250 785 866 529</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href={`/${locale}/partners`}><Button>Become a Partner</Button></Link>
              <Link href={`/${locale}/rt-program/apply`}><Button variant="outline" className="!border-white !text-white !bg-transparent">Register Your Interest</Button></Link>
              <TextLink href={`/${locale}/contact`} className="!text-[color:var(--color-sky)]">Contact RTGroup</TextLink>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/70" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            RT Program is presented as an initiative operating under RUZIMA Technology Group (RTGroup), not as a separately registered foundation or NGO. Proposed targets and activities are subject to confirmed resources.
          </p>
        </div>
      </section>
    </div>
  )
}
