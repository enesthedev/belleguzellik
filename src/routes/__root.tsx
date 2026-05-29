import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import appCss from '../styles.css?url'

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
      { property: 'og:title', content: 'Belle Güzellik | Saç Tasarım & Kuaför' },
      {
        property: 'og:description',
        content:
          'Saç kesimi, boya, balyaj, keratin bakımı ve gelin saçı hizmetleri. Saçınızı uzman ellere bırakın.',
      },
      { property: 'og:image', content: '/belle-guzellik.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/logo192.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <HeadContent />
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
