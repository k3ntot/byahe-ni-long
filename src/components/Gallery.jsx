import { useState } from 'react'
import { galleryPhotos } from '../config/gallery'
import useScrollReveal from '../hooks/useScrollReveal'

// Each card fades + slides up with a staggered delay based on its index
function GalleryCard({ photo, index }) {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  // Stagger: each card delays by 60ms × its position, capped at 720ms
  const delay = Math.min(index * 60, 720)

  return (
    <div
      className="gallery-card gallery-card--animate"
      style={{ animationDelay: `${delay}ms` }}
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
          {galleryPhotos.map((photo, index) => (
            <GalleryCard key={photo.src} photo={photo} index={index} />
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
