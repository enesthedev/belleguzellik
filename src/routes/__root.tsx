import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'
import { site } from '#/data/site'

const SITE_URL = 'https://belleguzellik.com'

const FONTS_HREF =
  'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Manrope:wght@300;400;500;600;700&display=swap'

const splitTime = (t: string) => t.split(/\s*[–-]\s*/)
const [weekdayOpen, weekdayClose] = splitTime(site.hours[0].time)
const [sundayOpen, sundayClose] = splitTime(site.hours[1].time)

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: site.name,
  description:
    'Saç kesimi, boya, balyaj, keratin bakımı ve gelin saçında uzman stilist kadrosu.',
  url: SITE_URL,
  image: `${SITE_URL}/belle-guzellik.png`,
  telephone: site.phoneDisplay,
  email: site.email,
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line,
    addressLocality: site.address.district,
    addressCountry: 'TR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: weekdayOpen,
      closes: weekdayClose,
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: sundayOpen,
      closes: sundayClose,
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: 5000,
  },
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Belle Güzellik | Saç Tasarım & Kuaför' },
      {
        name: 'description',
        content:
          'Belle Güzellik; saç kesimi, boya, balyaj, keratin bakımı ve gelin saçında uzman stilist kadrosu ve hijyen anlayışıyla yanınızda. Hemen randevu alın.',
      },
      { name: 'theme-color', content: '#fbf6ef' },
      { name: 'author', content: 'Belle Güzellik' },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'tr_TR' },
      { property: 'og:site_name', content: 'Belle Güzellik' },
      {
        property: 'og:title',
        content: 'Belle Güzellik | Saç Tasarım & Kuaför',
      },
      {
        property: 'og:description',
        content:
          'Saç kesimi, boya, balyaj, keratin bakımı ve gelin saçı hizmetleri. Saçınızı uzman ellere bırakın.',
      },
      { property: 'og:image', content: `${SITE_URL}/belle-guzellik.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'canonical', href: `${SITE_URL}/` },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      { rel: 'stylesheet', href: FONTS_HREF },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <script
          // Mark JS as available so scroll-reveal only hides content when it can animate it back in.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
