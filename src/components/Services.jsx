import { services } from '../data/spiData'
import './Services.css'

export default function Services() {
  return (
    <section className="section">
      <div className="sectionHeader">
        <span className="label">Lo que hacemos</span>
        <h2 className="sectionTitle">Nuestros servicios</h2>
      </div>
      <div className="grid">
        {services.map((srv, i) => (
          <div key={i} className="card">
            <span className="icon">{srv.icon}</span>
            <div className="name">{srv.title}</div>
            <div className="desc">{srv.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

