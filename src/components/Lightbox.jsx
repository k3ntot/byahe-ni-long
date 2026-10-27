import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  // Close on Escape key
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button className="lightbox__close" onClick={onClose} aria-label="Close image">
        ✕
      </button>
      <div
        className="lightbox__img-wrap"
        onClick={(e) => e.stopPropagation()} // clicking the image itself doesn't close
      >
        <img src={src} alt={alt} className="lightbox__img" />
      </div>
    </div>
  )
}
