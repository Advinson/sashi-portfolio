import { useEffect, useRef, useState } from 'react'
import { siteSections } from './site-config'
import { SocialLinks } from './SocialLinks'

type SectionId = (typeof siteSections)[number]['id']

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const header = useRef<HTMLElement>(null)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const siteBar = header.current
    if (!siteBar) return

    const targets = siteSections.map(({ id }) => ({ id, element: document.getElementById(id) })).reverse()

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
            <SocialLinks />
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
              {siteSections.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined} onClick={closeMenu}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
