import { useState } from 'react'
import { FaFacebook } from 'react-icons/fa'

const FACEBOOK_URL = 'https://www.facebook.com/ByaheNiLong'
const BANNER_SRC = '/images/banner.jpg'

export default function Hero({ onExplore }) {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="hero" id="hero-top">
      {/* Each child staggers in on page load via CSS animation */}
      <div className="hero__profile-wrap hero__animate hero__animate--1">
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

      <h1 className="hero__brand hero__animate hero__animate--2">Byahe ni Long</h1>
      <p className="hero__tagline hero__animate hero__animate--3">Mga Lakad, Tanawin, at Kwentong Baon.</p>

      <div className="hero__actions hero__animate hero__animate--4">
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
