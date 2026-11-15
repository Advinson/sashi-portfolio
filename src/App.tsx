import { Hero, LoadingIntro } from './Hero'
import { SiteHeader } from './SiteHeader'

export function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <LoadingIntro />
      <div className="showcase" id="home">
        <div className="scene">
          <SiteHeader />
          <main id="main-content" tabIndex={-1}>
            <Hero />
          </main>
        </div>
      </div>
    </>
  )
}
