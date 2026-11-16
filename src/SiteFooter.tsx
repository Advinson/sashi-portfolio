import { useEffect, useState } from 'react'
import { siteSections } from './site-config'
import { SocialLinks } from './SocialLinks'

const timeZone = 'America/Tegucigalpa'
const dateFormat = new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone })
const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', hour12: true, timeZone })

function FooterTime() {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    const tick = () => setNow(new Date())
    tick()
    const clock = window.setInterval(tick, 15000)
    return () => window.clearInterval(clock)
  }, [])

  return (
    <div className="footer-time">
      <h2>Time and location</h2>
      {now && (
        <time dateTime={now.toISOString()}>
          <span>{dateFormat.format(now)}</span>
          {timeFormat.format(now).replace('AM', 'a.m.').replace('PM', 'p.m.')}
        </time>
      )}{' '}
      Tegucigalpa, Honduras.
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="content-frame">
        <div className="footer-layout">
          <div className="footer-credit">
            <img src="/art/brandboard/monochrome.webp" alt="" width="800" height="800" loading="lazy" decoding="async" />
            <div>
              <p><span className="copyright-symbol">©</span> 2025, <strong>ALL RIGHTS RESERVED</strong></p>
              <p>Site design bysashii</p>
              <p>website made by advinson</p>
            </div>
          </div>

          <FooterTime />

          <nav className="footer-site" aria-labelledby="footer-site-title">
            <h2 id="footer-site-title">Site</h2>
            <ul>
              {siteSections.filter(({ id }) => id !== 'contact').map(({ id, label }) => (
                <li key={id}><a href={`#${id}`}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-contacts">
            <h2>Contacts</h2>
            <SocialLinks inFooter />
          </div>

          <a className="footer-top" href="#home">
            <svg aria-hidden="true" viewBox="0 0 24 49" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 47V3M2 13 12 3l10 10" />
            </svg>
            To the top
          </a>
        </div>
      </div>
    </footer>
  )
}
