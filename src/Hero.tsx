import { AccentText } from './AccentText'

const figures = [
  { name: 'cat', width: 420, height: 268 },
  { name: 'scorpion', width: 420, height: 372 },
  { name: 'skull', width: 384, height: 433 },
] as const

export function LoadingIntro() {
  return (
    <div className="loading-intro" aria-hidden="true">
      <div className="loading-figures">
        {figures.map(({ name, width, height }) => (
          <img key={name} src={`/art/${name}.webp`} alt="" width={width} height={height} />
        ))}
      </div>
    </div>
  )
}

function HeroRibbons() {
  return (
    <div className="hero-ribbons" aria-hidden="true">
      <img className="ribbon ribbon-left" src="/art/ribbon.webp" alt="" width="676" height="285" />
      <img className="ribbon ribbon-right" src="/art/ribbon.webp" alt="" width="676" height="285" />
    </div>
  )
}

export function Hero() {
  return (
    <section id="home" className="showcase" aria-labelledby="hero-title">
      <HeroRibbons />
      <div className="content-frame hero">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-greeting">Hi! You can <AccentText>call me</AccentText></span>{' '}
            <strong className="hero-name">SASHI.</strong>
          </h1>
          <p>I’m a graphic designer based in Honduras with a deep love for editorial design, illustrations and personal brands.</p>
          <div className="hero-actions">
            <a className="hero-action" href="#services">Check what I<br />can do for you!</a>
            <span className="action-divider">or</span>
            <a className="hero-action" href="#portfolio">Take a look at<br />my portfolio!</a>
          </div>
        </div>

        <div className="hero-art">
          <img className="character" src="/art/sashi-character.webp" alt="Sashi’s illustrated mascot, a red-haired character with horns and a fox mask" width="573" height="1299" fetchPriority="high" />
          {figures.map(({ name, width, height }) => (
            <span className={`floating-figure figure-${name}`} key={name} aria-hidden="true">
              <img src={`/art/${name}.webp`} alt="" width={width} height={height} />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
