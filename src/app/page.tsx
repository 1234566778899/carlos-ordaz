import Link from 'next/link'
import { AppIcon, External, Footer, StatusBadge, TopBar } from '@/components/ui'
import { projects, TIKTOK_PROFILE, tutorial } from '@/data/projects'

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="page">
        <section className="hero">
          <div className="hero-icons" aria-hidden>
            {projects.map((p) => <AppIcon key={p.slug} project={p} size={84} />)}
          </div>
          <h1>Una app nueva<br />en cada video.</h1>
          <p>Aquí están todas las apps que hago en TikTok. Descárgalas o revisa qué hace cada una.</p>
          <div className="row wrap" style={{ justifyContent: 'center' }}>
            <a className="btn" href="#proyectos">Ver proyectos</a>
            <External className="btn secondary" href={TIKTOK_PROFILE}>Ver los videos</External>
          </div>
        </section>

        <section id="proyectos" className="stack" style={{ scrollMarginTop: 72 }}>
          <h2 className="section-title">Proyectos</h2>
          <div className="projects">
            {projects.map((p) => (
              <div key={p.slug} className="card project">
                <Link href={`/apps/${p.slug}`} className="row" style={{ textDecoration: 'none', alignItems: 'flex-start' }}>
                  <AppIcon project={p} size={64} />
                  <div className="grow stack" style={{ gap: 6 }}>
                    <div className="row between" style={{ gap: 8 }}>
                      <h3>{p.name}</h3>
                      <span className="badge">Día {p.day}</span>
                    </div>
                    <p className="muted small">{p.tagline}</p>
                    <div><StatusBadge project={p} /></div>
                  </div>
                </Link>
                <div className="actions">
                  {p.appStore
                    ? <External className="btn small" href={p.appStore}>Descargar</External>
                    : <span className="btn small" aria-disabled="true">Muy pronto</span>}
                  <Link className="btn small secondary" href={`/apps/${p.slug}`}>Ver proyecto</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="stack" style={{ marginTop: 48 }}>
          <h2 className="section-title">Tutorial</h2>
          <div className="card tutorial">
            <img src="/apps/tutorial-portada.jpg" alt="Portada del tutorial" />
            <div className="stack">
              <span className="badge dark" style={{ alignSelf: 'flex-start' }}>Con IA</span>
              <h2>{tutorial.title}</h2>
              <p className="muted">{tutorial.description}</p>
              <div><External href={tutorial.tiktok}>Ver el tutorial</External></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
