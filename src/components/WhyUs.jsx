import './WhyUs.css'

const points = [
  {
    number: '01',
    title: 'Experiencia comprobada',
    desc: 'Años de trabajo en plantas industriales de primer nivel en Zona Oeste GBA.',
  },
  {
    number: '02',
    title: 'Clientes de primer nivel',
    desc: 'Toyota, AGCO, Pernod Ricard y más confían en nosotros para sus instalaciones.',
  },
  {
    number: '03',
    title: 'Llave en mano',
    desc: 'Nos hacemos cargo de todo: proyecto, ejecución y entrega. Sin intermediarios.',
  },
  {
    number: '04',
    title: 'Habilitados y asegurados',
    desc: 'Empresa formalmente habilitada con personal capacitado y seguros en regla.',
  },
]

export default function WhyUs() {
  return (
    <section className="why">
      <div className="why-header">
        <span className="why-label">Nuestra diferencia</span>
        <h2 className="why-title">Por qué elegirnos</h2>
      </div>
      <div className="why-grid">
        {points.map((p) => (
          <div key={p.number} className="why-card">
            <div className="why-number">{p.number}</div>
            <div className="why-card-title">{p.title}</div>
            <div className="why-card-desc">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}