import Link from 'next/link'
import type { ReactNode } from 'react'
import { BRAND, TIKTOK_PROFILE, type Project } from '@/data/projects'

export function TopBar({ back }: { back?: boolean }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        {back ? (
          <Link className="btn ghost small" href="/">‹ Proyectos</Link>
        ) : (
          <Link href="/" className="brand">
            <img src="/mascot.png" alt="" height={30} style={{ height: 30, width: 'auto' }} />
            <strong>Creo Apps</strong>
          </Link>
        )}
        <div className="grow" />
        <a className="btn small" href={TIKTOK_PROFILE} target="_blank" rel="noopener noreferrer">Sígueme en TikTok</a>
      </div>
    </header>
  )
}

export function AppIcon({ project, size = 56 }: { project: Project; size?: number }) {
  return (
    <div className="app-icon" style={{ width: size, height: size }}>
      <img src={`/apps/${project.slug}-icon.png`} alt={`Ícono de ${project.name}`} width={size} height={size} />
    </div>
  )
}

export function StatusBadge({ project }: { project: Project }) {
  return project.status === 'store'
    ? <span className="badge green">En el App Store</span>
    : <span className="badge orange">Muy pronto</span>
}

export function External({ href, className = 'btn', children }: { href: string; className?: string; children: ReactNode }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}

export function Footer() {
  return (
    <footer className="footer">
      {BRAND} · Una app nueva en cada video ·{' '}
      <a href={TIKTOK_PROFILE} target="_blank" rel="noopener noreferrer">TikTok</a>
    </footer>
  )
}
