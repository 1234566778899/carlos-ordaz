import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AppIcon, External, Footer, StatusBadge, TopBar } from '@/components/ui'
import { getProject, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<'/apps/[slug]'>): Promise<Metadata> {
  const p = getProject((await params).slug)
  if (!p) return {}
  return {
    title: p.name,
    description: p.tagline,
    openGraph: { title: p.name, description: p.tagline, images: [`/apps/${p.slug}-portada.jpg`] },
  }
}

export default async function ProjectPage({ params }: PageProps<'/apps/[slug]'>) {
  const p = getProject((await params).slug)
  if (!p) notFound()

  return (
    <>
      <TopBar back />
      <main className="page">
        <div className="detail">
          <div className="sticky">
            <img className="poster" src={`/apps/${p.slug}-portada.jpg`} alt={`Portada del video de ${p.name}`} />
          </div>

          <div className="stack-lg">
            <div className="row" style={{ gap: 16 }}>
              <AppIcon project={p} size={88} />
              <div className="stack" style={{ gap: 6 }}>
                <span className="muted small">Día {p.day} haciendo apps</span>
                <h1>{p.name}</h1>
                <div><StatusBadge project={p} /></div>
              </div>
            </div>

            <p style={{ fontSize: 19 }}>{p.description}</p>

            <div className="row wrap">
              {p.appStore && <External href={p.appStore}>Descargar en el App Store</External>}
              {p.website && <External className="btn secondary" href={p.website}>Sitio web</External>}
              <External className="btn secondary" href={p.tiktok}>Ver el video</External>
            </div>

            {p.status === 'review' && (
              <div className="notice">
                <span aria-hidden>⏳</span>
                <span>
                  Apple todavía está revisando esta app.
                  {p.keyword && <> Comenta <strong>{p.keyword}</strong> en el video y te aviso cuando salga.</>}
                </span>
              </div>
            )}

            <section className="stack">
              <h2 className="section-title">Qué hace</h2>
              <div className="card flush list">
                {p.features.map(([ico, title, detail]) => (
                  <div key={title} className="feature-row">
                    <span className="ico" aria-hidden>{ico}</span>
                    <div className="stack" style={{ gap: 2 }}>
                      <h3>{title}</h3>
                      <p className="muted small">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
