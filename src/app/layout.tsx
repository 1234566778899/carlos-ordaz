import type { Metadata, Viewport } from 'next'
import './globals.css'

// En Vercel toma el dominio de producción automáticamente
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: 'Creo Apps · Todos mis proyectos', template: '%s · Creo Apps' },
  description: 'Las apps que hago en TikTok: descárgalas o revisa cómo funcionan.',
  openGraph: { title: 'Creo Apps · Todos mis proyectos', description: 'Las apps que hago en TikTok: descárgalas o revisa cómo funcionan.', images: ['/og.png'] },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f7' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
