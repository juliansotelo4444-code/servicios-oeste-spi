import './Hero.css'

const badges = ['Zona Oeste GBA', 'Habilitados', 'Sector industrial']

export default function Hero() {
  return (
    <header className="hero">
      <div className="logoRow">
        <div className="logoBox">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <rect x="4" y="17" width="8" height="15" rx="1" fill="#0d0d0d" opacity="0.9" />
            <rect x="14" y="10" width="8" height="22" rx="1" fill="#0d0d0d" opacity="0.8" />
            <rect x="24" y="4" width="8" height="28" rx="1" fill="#0d0d0d" opacity="0.7" />
            <line x1="3" y1="33" x2="33" y2="33" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="brandName">Servicios Oeste SPI</div>
          <div className="brandSub">Servicios Integrales · Zona Oeste</div>
        </div>
      </div>

      <h1 className="title">
        Soluciones
        <span className="accent">industriales</span>
      </h1>

      <p className="desc">
        Especialistas en construcción, instalaciones y mantenimiento industrial.
        Calidad, cumplimiento y compromiso en cada proyecto.
      </p>

      <div className="badgeRow">
        {badges.map((b) => (
          <span key={b} className="badge">{b}</span>
        ))}
      </div>
    </header>
  )
}