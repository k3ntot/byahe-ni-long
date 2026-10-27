import { FiPhone } from 'react-icons/fi'
import { FaFacebook } from 'react-icons/fa'

const PHONE_NUMBER = '0956 092 9225'
const PHONE_TEL = 'tel:09560929225'
const PHONE_SMS = 'sms:09560929225'
const FACEBOOK_URL = 'https://www.facebook.com/ByaheNiLong'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2 className="contact__heading">Get in Touch</h2>
        <p className="contact__subtext">
          Want to ask about a destination or a trip? Reach out anytime.
        </p>

        <p className="contact__phone-display">{PHONE_NUMBER}</p>

        <div className="contact__actions">
          <a href={PHONE_TEL} className="btn btn-primary" aria-label="Call Long">
            <FiPhone aria-hidden="true" />
            Call Now
          </a>
          <a href={PHONE_SMS} className="btn btn-secondary" aria-label="Send SMS to Long">
            <FiPhone aria-hidden="true" />
            Send SMS
          </a>
        </div>

        <a
          href={FACEBOOK_URL}
          className="contact__facebook-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Byahe ni Long on Facebook"
        >
          <FaFacebook aria-hidden="true" />
          Follow on Facebook
        </a>
      </div>
    </section>
  )
}
