import { contact } from '../data/spiData'
import './ContactBar.css'

const items = [
  { label: 'Teléfono', value: contact.phone },
  { label: 'Email', value: contact.email },
  { label: 'Dirección', value: contact.address },
]

export default function ContactBar() {
  return (
    <footer className="cb-footer">
      <div className="cb-inner">
        <div className="cb-left">
          <div className="cb-pretitle">¿Necesitás un presupuesto?</div>
          <div className="cb-callout">Hablemos hoy</div>
        </div>
        <div className="cb-grid">
          {items.map((item) => (
            <div key={item.label} className="cb-item">
              <div className="cb-item-label">{item.label}</div>
              <div className="cb-item-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}