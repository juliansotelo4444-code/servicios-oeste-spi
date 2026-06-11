import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import ProjectGallery from './components/ProjectGallery'
import Clients from './components/Clients'
import ContactBar from './components/ContactBar'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WhyUs />
      <section id="servicios"><Services /></section>
      <section id="proyectos"><ProjectGallery /></section>
      <section id="clientes"><Clients /></section>
      <section id="contacto"><ContactBar /></section>
      <WhatsAppButton />
    </div>
  )
}