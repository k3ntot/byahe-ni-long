import { useState, useEffect, useRef } from 'react'
import { galleryPhotos } from '../config/gallery'
import useScrollReveal from '../hooks/useScrollReveal'

// Split photos into rows of 4
function chunkArray(arr, size) {
  const chunks = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

// A whole row of cards that animate in together when the row enters the viewport
function GalleryRow({ photos, rowIndex }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="gallery-row">
      {photos.map((photo, colIndex) => (
        <GalleryCard
          key={photo.src}
          photo={photo}
          visible={visible}
          delay={colIndex * 120}
        />
      ))}
    </div>
  )
}

function GalleryCard({ photo, visible, delay }) {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <div
      className={`gallery-card gallery-card--scroll${visible ? ' gallery-card--visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
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
  const rows = chunkArray(galleryPhotos, 4)

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
        <div className="gallery-rows">
          {rows.map((rowPhotos, rowIndex) => (
            <GalleryRow key={rowIndex} photos={rowPhotos} rowIndex={rowIndex} />
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
