import { About, AboutBrandboard } from './About'
import { Hero, LoadingIntro } from './Hero'
import { SiteHeader } from './SiteHeader'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <LoadingIntro />
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <AboutBrandboard />
      </main>
    </>
  )
}
