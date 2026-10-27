import { useState } from 'react'

// Use photo-01.jpg as the About portrait (same as gallery, whichever is placed first)
const PORTRAIT_SRC = '/images/photo-01.jpg'

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section className="about">
      <div className="about__inner">
        <div className="about__img-wrap">
          {imgError ? (
            <div className="about__img-placeholder" role="img" aria-label="Photo placeholder">
              🌿
            </div>
          ) : (
            <img
              src={PORTRAIT_SRC}
              alt="Long at a mountain viewpoint"
              className="about__img"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <div className="about__text">
          <h2 className="about__heading">About Byahe ni Long</h2>
          <p className="about__body">
            Hi, I&rsquo;m Long &mdash; a traveler from the Philippines who loves discovering new
            places, from hidden beaches and mountain ridges to city streets abroad. Byahe ni Long
            is my personal travel journal where I share the stories, scenery, and experiences from
            every trip.
          </p>
        </div>
      </div>
    </section>
  )
}
