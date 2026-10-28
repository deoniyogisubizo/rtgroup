import '@/styles/tokens.css'
import '@/app/globals.css'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'
import {routing} from '@/i18n/routing'
import {notFound} from 'next/navigation'
import {Familjen_Grotesk, Public_Sans, IBM_Plex_Mono} from 'next/font/google'
import {Header} from '@/components/layout/Header'
import {Footer} from '@/components/layout/Footer'
import RouteLoader from '@/components/loader/RouteLoader'

const familjen = Familjen_Grotesk({ subsets: ['latin'], weight: ['600','700'], variable: '--font-heading' })
const publicSans = Public_Sans({ subsets: ['latin'], weight: ['400','500'], variable: '--font-body' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400'], variable: '--font-mono' })

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
