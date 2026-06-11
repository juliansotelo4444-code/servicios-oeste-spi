import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import ContactBar from './components/ContactBar'
import ProjectGallery from './components/ProjectGallery'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <ProjectGallery />
      <Clients />
      <ContactBar />
    </div>
  )
}