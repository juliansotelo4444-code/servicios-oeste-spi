import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <div className="nav-logo-box">
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
              <rect x="4" y="17" width="8" height="15" rx="1" fill="#0d0d0d" />
              <rect x="14" y="10" width="8" height="22" rx="1" fill="#0d0d0d" opacity="0.8" />
              <rect x="24" y="4" width="8" height="28" rx="1" fill="#0d0d0d" opacity="0.6" />
              <line x1="3" y1="33" x2="33" y2="33" stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="nav-logo-text">SPI</span>
        </a>

        <ul className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="nav-link" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contacto" className="nav-cta" onClick={() => setOpen(false)}>
              Presupuesto
            </a>
          </li>
        </ul>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}