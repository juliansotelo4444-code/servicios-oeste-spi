import { clients } from '../data/spiData'
import './Clients.css'

export default function Clients() {
  return (
    <section className="section">
      <div className="sectionHeader">
        <span className="label">Confiaron en nosotros</span>
        <h2 className="sectionTitle">Nuestros clientes</h2>
      </div>
      <div className="grid">
        {clients.map((c, i) => (
          <div key={i} className="chip">
            <div className="dot" />
            <div>
              <div className="name">{c.name}</div>
              <div className="sector">{c.sector}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}