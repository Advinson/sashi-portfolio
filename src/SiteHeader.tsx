import { useEffect, useRef, useState } from 'react'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/bysashiii/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/scarlethmassou/' },
  { name: 'Email', url: 'mailto:bysashii@outlook.com' },
] as const

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
] as const

type SectionId = (typeof sections)[number]['id']

const upcomingSections = ['Portfolio', 'Contact']

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

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const header = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const siteBar = header.current
    if (!siteBar) return

    const targets = sections.map(({ id }) => ({ id, element: document.getElementById(id) })).reverse()

    const onScroll = () => {
      const threshold = Math.max(siteBar.offsetHeight + 1, window.innerHeight * 0.35)
      const current = targets.find(({ element }) => element && element.getBoundingClientRect().top <= threshold)
      setActiveSection(current?.id ?? 'home')
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  function closeMenu() {
    setMenuOpen(false)
    if (menuOpen && menuButton.current?.getClientRects().length) menuButton.current.focus({ preventScroll: true })
  }

  return (
    <header ref={header} className="site-bar" onKeyDown={(event) => {
      if (event.key === 'Escape' && menuOpen) closeMenu()
    }}>
      <div className="content-frame">
        <div className="site-header">
          <div className="header-identity">
            <a className="brand" href="#home" aria-label="Sashi, home" onClick={() => setMenuOpen(false)}>
              <img src="/art/sashi-logo.webp" alt="" width="160" height="153" />
            </a>
            <ul className="social-links" aria-label="Social media and email">
              {socialLinks.map(({ name, url }) => (
                <li key={name}>
                  <a href={url} aria-label={name}>
                    <span className="social-icon"><SocialIcon name={name} /></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-controls="main-navigation"
            aria-expanded={menuOpen}
            ref={menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span aria-hidden="true" className="menu-icon"><i /><i /><i /></span>
          </button>

          <nav id="main-navigation" className="site-nav" aria-label="Main navigation" data-open={menuOpen}>
            <ul>
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>{label}</a>
                </li>
              ))}
              {upcomingSections.map((section) => (
                <li key={section}><span role="link" aria-disabled="true">{section}</span></li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
