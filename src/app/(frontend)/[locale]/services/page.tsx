import { SectionHeader } from '@/components/ui/SectionHeader'
import { TextLink } from '@/components/ui/TextLink'
import { Button } from '@/components/ui/Button'
import { RealImage } from '@/components/media/RealImage'
import Link from 'next/link'

const services = [
  { slug: 'embedded-systems', num: '01', title: 'Embedded systems and microcontrollers', summary: 'Designing and programming microcontroller-based devices.' },
  { slug: 'iot', num: '02', title: 'Internet of Things (IoT)', summary: 'Connecting sensors and devices so they send, receive and act on data.' },
  { slug: 'electronics', num: '03', title: 'Electronics design, repair and troubleshooting', summary: 'Circuit design, repair and fault-finding on electronic equipment.' },
  { slug: 'sensors-automation', num: '04', title: 'Sensors, automation and control systems', summary: 'Measuring conditions and controlling machines or processes automatically.' },
  { slug: 'ai-ml', num: '05', title: 'Artificial intelligence and machine learning', summary: 'Building models that learn from data for practical tasks.' },
  { slug: 'data-intelligent-systems', num: '06', title: 'Data analysis and intelligent systems', summary: 'Collecting, analyzing and using data to support decisions.' },
  { slug: 'multimedia', num: '07', title: 'Multimedia, photography, video production and podcasting', summary: 'Practical media services and training-linked work.' },
  { slug: 'prototyping-technical-support', num: '08', title: 'Prototyping, product development and technical support', summary: 'Turning ideas into working prototypes and supporting them after delivery.' },
]

export default async function ServicesPage({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params
  return (
    <div>
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 style={{fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '-0.02em', fontSize: 'clamp(2rem, 5vw, 3rem)'}}>Technology and Engineering Services</h1>
          <p className="mt-4" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            RTGroup builds practical technology solutions and helps fix real problems through hands-on engineering.
          </p>
          <p className="mt-3" style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>
            From embedded systems and IoT to prototyping and technical support.
          </p>
        </div>
        <RealImage src="/services/456.jpg.jpeg" alt="Electronics work" ratio="4/3" />
      </section>

      <section className="section-wash">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionHeader index="01" title="Our Services" />
          <ul className="divide-y divide-[color:var(--color-line)] border-t border-b border-[color:var(--color-line)]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${locale}/services/${s.slug}`} className="py-4 flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <span style={{fontFamily: 'var(--font-mono)', fontSize: '12px'}}>{s.num}</span>
                    <div>
                      <div style={{fontFamily: 'var(--font-body)'}}>{s.title}</div>
                      <div className="text-sm text-[color:var(--color-muted)]" style={{fontFamily: 'var(--font-body)'}}>{s.summary}</div>
                    </div>
                  </div>
                  <span className="text-[color:var(--color-sky-deep)] group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <TextLink href={`/${locale}/multimedia`}>Multimedia services — see our Multimedia page</TextLink>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionHeader index="02" title="Request a service" />
        <div className="max-w-xl">
          <p style={{fontFamily: 'var(--font-body)', lineHeight: 1.6}}>Tell us about your need. We’ll review and get back to you with next steps.</p>
          <div className="mt-4 flex gap-4 flex-wrap">
            <Link href={`/${locale}/contact`}><Button>Request a service</Button></Link>
            <a href="https://wa.me/250785866529" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border-2 border-[color:var(--color-ink)]">WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
