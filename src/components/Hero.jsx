import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'

const FACEBOOK_URL = 'https://www.facebook.com/ByaheNiLong'

// banner.jpg is the brand identity image — used as both the circular logo/avatar
// in the hero section AND as the page favicon source.
// Place the crystal kayak photo as: public/images/banner.jpg
const BANNER_SRC = '/images/banner.jpg'

export default function Hero({ onExplore }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="hero-top">
      {/* Brand logo — circular avatar shown at the top of the page */}
      <div className="hero__profile-wrap">
        {imgError ? (
          <div className="hero__profile-placeholder" role="img" aria-label="Byahe ni Long logo">
            <span className="hero__profile-initials">BL</span>
          </div>
        ) : (
          <img
            src={BANNER_SRC}
            alt="Byahe ni Long — brand logo"
            className="hero__profile-img"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      <h1 className="hero__brand">Byahe ni Long</h1>
      <p className="hero__tagline">Mga Lakad, Tanawin, at Kwentong Baon.</p>

      <div className="hero__actions">
        <a
          href={FACEBOOK_URL}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Byahe ni Long on Facebook"
        >
          <FaFacebook aria-hidden="true" />
          Follow on Facebook
        </a>
        <a
          href="#gallery"
          className="btn btn-secondary"
          onClick={(e) => {
            e.preventDefault()
            onExplore?.()
          }}
        >
          Explore My Adventures
        </a>
      </div>
    </section>
  )
}
