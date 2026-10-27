import { FaFacebook } from 'react-icons/fa'

/**
 * SocialButton — renders a styled anchor link for a social platform.
 * Only renders when `url` is truthy.
 *
 * Props:
 *   platform  — 'facebook' | string
 *   label     — button text
 *   url       — href; component returns null if falsy
 *   variant   — 'primary' (default) | 'secondary'
 */
export default function SocialButton({ platform, label, url, variant = 'primary' }) {
  if (!url) return null

  const icon = platform === 'facebook' ? <FaFacebook aria-hidden="true" /> : null
  const cls = variant === 'secondary' ? 'btn btn-secondary' : 'btn btn-primary'

  return (
    <a
      href={url}
      className={cls}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
      {label}
    </a>
  )
}
