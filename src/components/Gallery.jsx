import { useState } from 'react'
import { galleryPhotos } from '../config/gallery'

// Cards auto-hide if the image file is missing
function GalleryCard({ photo }) {
  const [hidden, setHidden] = useState(false)
  if (hidden) return null
  return (
    <div className="gallery-card">
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
  if (!visible) return null

  return (
    <section id="gallery" className="gallery gallery--reveal">
      <div className="container">
        <div className="gallery__header">
          <h2 className="gallery__heading">Travel Memories</h2>
        </div>
        <div className="gallery-grid">
          {galleryPhotos.map((photo) => (
            <GalleryCard key={photo.src} photo={photo} />
          ))}
        </div>
        {/* Close button at the bottom too for convenience */}
        <div className="gallery__footer">
          <button className="btn btn-secondary" onClick={onClose}>
            ✕ Close Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
