import '@/styles/tokens.css'
import '@/app/globals.css'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {routing} from '@/i18n/routing'
import {notFound} from 'next/navigation'
import type {Metadata} from 'next'
import {Familjen_Grotesk, Public_Sans, IBM_Plex_Mono} from 'next/font/google'
import {Header} from '@/components/layout/Header'
import {Footer} from '@/components/layout/Footer'
import RouteLoader from '@/components/loader/RouteLoader'

const siteHost = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
const siteUrl = siteHost
  ? new URL(siteHost.startsWith('http') ? siteHost : `https://${siteHost}`)
  : undefined
const socialPreviewImage = '/home/home-1.jpg'

const familjen = Familjen_Grotesk({ subsets: ['latin'], weight: ['600','700'], variable: '--font-heading' })
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400','500'], variable: '--font-body' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono' })

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
  const {locale} = await params
  const title = 'RTGroup | Learn by Doing. Innovate for the Future.'
  const description = 'Practical technology skills, hands-on learning, engineering, and opportunities for young people in Rwanda.'

  return {
    metadataBase: siteUrl,
    title,
    description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      type: 'website',
      locale,
      siteName: 'RTGroup',
      title,
      description,
      url: `/${locale}`,
      images: [{ url: socialPreviewImage, width: 810, height: 810, alt: 'RTGroup technology learning workshop' }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialPreviewImage],
    },
  }
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params
  if (!(routing.locales as readonly string[]).includes(locale)) notFound()
  const messages = await getMessages()
  return (
    <html lang={locale} className={`${familjen.variable} ${publicSans.variable} ${plexMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <RouteLoader />
          <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-[color:var(--color-sky)] focus:px-4 focus:py-2">Skip to content</a>
          <Header locale={locale} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
