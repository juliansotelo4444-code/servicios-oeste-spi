import { useState } from 'react'
import './ProjectGallery.css'

const groups = [
  {
    label: 'Trabajos realizados',
    items: [
      { src: '/assets/obra-tinglado.jpg.jpeg', caption: 'Construcción de nave industrial' },
      { src: '/assets/demarcacion.jpg.jpeg', caption: 'Demarcación vial industrial' },
      { src: '/assets/piso-azul.jpg.jpeg', caption: 'Piso epóxico con demarcación' },
    ],
  },
  {
    label: 'El proceso',
    items: [
      { src: '/assets/piso-proceso.jfif', caption: 'Preparación de superficie' },
      { src: '/assets/piso-proceso2.jfif', caption: 'Aplicación de base' },
      { src: '/assets/piso-proceso3.jfif', caption: 'Pulido y nivelación' },
      { src: '/assets/piso-proceso4.jfif', caption: 'Acabado final' },
    ],
  },
  {
    label: 'Resultados',
    items: [
      { src: '/assets/piso-terminado.jfif', caption: 'Piso industrial terminado' },
      { src: '/assets/piso-terminado2.jfif', caption: 'Acabado espejo de alta durabilidad' },
      { src: '/assets/piso-terminado3.jfif', caption: 'Instalación en planta industrial' },
    ],
  },
]

export default function ProjectGallery() {
  const [lightbox, setLightbox] = useState(null)

  const allItems = groups.flatMap((g, gi) =>
    g.items.map((item, ii) => ({ ...item, groupIndex: gi, itemIndex: ii }))
  )

  const currentIndex = lightbox
    ? allItems.findIndex(
        (i) => i.groupIndex === lightbox.groupIndex && i.itemIndex === lightbox.itemIndex
      )
    : -1

  const navigate = (dir) => {
    const next = allItems[(currentIndex + dir + allItems.length) % allItems.length]
    setLightbox(next)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') navigate(1)
    if (e.key === 'ArrowLeft') navigate(-1)
    if (e.key === 'Escape') setLightbox(null)
  }

  return (
    <section className="gallery">
      <div className="galleryHeader">
        <span className="galleryLabel">Nuestro trabajo</span>
        <h2 className="galleryTitle">Proyectos</h2>
      </div>

      {groups.map((group, gi) => (
        <div key={gi} className="group">
          <div className="groupLabel">{group.label}</div>
          <div className="grid">
            {group.items.map((item, ii) => (
              <div
                key={ii}
                className="thumb"
                onClick={() => setLightbox({ ...item, groupIndex: gi, itemIndex: ii })}
              >
                <img src={item.src} alt={item.caption} />
                <div className="thumbOverlay">
                  <span className="thumbCaption">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox && (
        <div
          className="lightboxBackdrop"
          onClick={() => setLightbox(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          autoFocus
        >
          <div className="lightboxBox" onClick={(e) => e.stopPropagation()}>
            <button className="lightboxClose" onClick={() => setLightbox(null)}>✕</button>
            <button className="lightboxNav lightboxPrev" onClick={() => navigate(-1)}>‹</button>
            <img src={lightbox.src} alt={lightbox.caption} className="lightboxImg" />
            <button className="lightboxNav lightboxNext" onClick={() => navigate(1)}>›</button>
            <div className="lightboxCaption">{lightbox.caption}</div>
            <div className="lightboxCounter">{currentIndex + 1} / {allItems.length}</div>
          </div>
        </div>
      )}
    </section>
  )
}