import { useState } from 'react'
import { galleryPhotos } from '../config/gallery'
import useScrollReveal from '../hooks/useScrollReveal'

// Cards auto-hide if the image file is missing
// Each card fades + slides up as it enters the viewport
function GalleryCard({ photo }) {
  const [hidden, setHidden] = useState(false)
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 })

  if (hidden) return null
  return (
    <div
      ref={ref}
      className={`gallery-card reveal${isVisible ? ' is-visible' : ''}`}
    >
      <img
        src={`/images/${photo.src}`}
        alt={photo.alt}
        loading="lazy"
        onError={() => setHidden(true)}
      />
    </div>
  )
}

export default function Gallery({ visible, onClose }) {
  const [headingRef, headingVisible] = useScrollReveal()

  if (!visible) return null

  return (
    <section id="gallery" className="gallery gallery--reveal">
      <div className="container">
        <div className="gallery__header">
          <h2
            ref={headingRef}
            className={`gallery__heading reveal${headingVisible ? ' is-visible' : ''}`}
          >
            Travel Memories
          </h2>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <GalleryCard key={photo.src} photo={photo} />
          ))}
        </div>
        <div className="gallery__footer">
          <button className="btn btn-secondary" onClick={onClose}>
            ✕ Close Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
