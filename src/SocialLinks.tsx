import { contactEmail } from './site-config'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/bysashiii/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/scarlethmassou/' },
  { name: 'Email', url: `mailto:${contactEmail}` },
] as const

function SocialIcon({ name }: { name: (typeof socialLinks)[number]['name'] }) {
  const glyphs = {
    Instagram: (
      <g fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.7" cy="7.4" r="0.8" fill="currentColor" stroke="none" />
      </g>
    ),
    LinkedIn: (
      <path fill="currentColor" d="M4.5 9h3v10h-3zm1.5-4.7a1.65 1.65 0 1 1 0 3.3 1.65 1.65 0 0 1 0-3.3ZM10 9h2.9v1.3c.6-1 1.6-1.5 3-1.5 2.6 0 3.7 1.6 3.7 4.2v6h-3v-5.5c0-1.4-.5-2-1.6-2-1.2 0-2 .8-2 2.2V19h-3z" />
    ),
    Email: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
        <path d="m3.5 6.5 8.5 7 8.5-7M3.8 17.5l5.4-5.1m11 5.1-5.4-5.1" />
      </g>
    ),
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24">{glyphs[name]}</svg>
}

export function SocialLinks({ inFooter = false }: { inFooter?: boolean }) {
  return (
    <ul className={inFooter ? 'social-links footer-social-links' : 'social-links'} aria-label="Social media and email">
      {socialLinks.map(({ name, url }) => (
        <li key={name}>
          <a href={url} aria-label={name}>
            <span className="social-icon"><SocialIcon name={name} /></span>
          </a>
        </li>
      ))}
    </ul>
  )
}
