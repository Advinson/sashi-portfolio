import { About } from './About'
import { Brandboard } from './Brandboard'
import { Hero, LoadingIntro } from './Hero'
import { Portfolio } from './Portfolio'
import { Services } from './Services'
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
        <Brandboard />
        <Services />
        <Portfolio />
      </main>
    </>
  )
}
