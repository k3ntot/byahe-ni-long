import { useState, useEffect, useRef } from 'react'
import { galleryPhotos } from '../config/gallery'
import useScrollReveal from '../hooks/useScrollReveal'

// Each card uses its own Intersection Observer so it only animates
// when it actually scrolls into view — not all at once on open.
function GalleryCard({ photo, index }) {
  const [hidden, setHidden] = useState(false)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small extra stagger for cards that appear in the same row
          const rowDelay = (index % 4) * 80
          setTimeout(() => setVisible(true), rowDelay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  if (hidden) return null

  return (
    <div
      ref={ref}
      className={`gallery-card gallery-card--scroll${visible ? ' gallery-card--visible' : ''}`}
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
