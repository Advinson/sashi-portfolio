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

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-ribbons" aria-hidden="true">
        <img className="ribbon ribbon-left" src="/art/ribbon.webp" alt="" width="676" height="285" />
        <img className="ribbon ribbon-right" src="/art/ribbon.webp" alt="" width="676" height="285" />
      </div>

      <div className="hero-copy">
        <h1 id="hero-title">
          <span className="hero-greeting">Hi! You can <span className="call-me">call me<span className="accent-lines" aria-hidden="true"><i /><i /><i /></span></span></span>{' '}
          <strong className="hero-name">SASHI.</strong>
        </h1>
        <p>I’m a graphic designer based in Honduras with a deep love for editorial design, illustrations and personal brands.</p>
        <div className="hero-actions">
          <span className="hero-action" role="link" aria-disabled="true">Check what I<br />can do for you!</span>
          <span className="action-divider">or</span>
          <span className="hero-action" role="link" aria-disabled="true">Take a look at<br />my portfolio!</span>
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
    </section>
  )
}
