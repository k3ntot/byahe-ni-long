import { FaFacebook } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

const FACEBOOK_URL = 'https://www.facebook.com/ByaheNiLong'
const PHONE_NUMBER = '0956 092 9225'
const PHONE_TEL = 'tel:09560929225'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">Byahe ni Long</p>
          <p className="footer__tagline">Mga Lakad, Tanawin, at Kwentong Baon.</p>
        </div>

        <div className="footer__links">
          <a
            href={FACEBOOK_URL}
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Byahe ni Long on Facebook"
          >
            <FaFacebook aria-hidden="true" />
            Facebook
          </a>
          <a href={PHONE_TEL} className="footer__link" aria-label={`Call ${PHONE_NUMBER}`}>
            <FiPhone aria-hidden="true" />
            {PHONE_NUMBER}
          </a>
        </div>

        <p className="footer__copyright">&copy; {new Date().getFullYear()} Byahe ni Long</p>
      </div>
    </footer>
  )
}
