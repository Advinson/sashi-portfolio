const artwork = '/art/brandboard'

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={light ? 'brandboard-wordmark wordmark-light' : 'brandboard-wordmark'} role="img" aria-label="by SaShii, Graphic Design">
      <span className="wordmark-art">
        <img src={`${artwork}/wordmark-source.webp`} alt="" width="1024" height="768" loading="lazy" decoding="async" />
      </span>
      <span className="wordmark-tagline" aria-hidden="true">Graphic Design</span>
    </span>
  )
}

export function Brandboard() {
  return (
    <section id="about-2" className="brandboard" aria-labelledby="brandboard-title">
      <div className="content-frame brandboard-frame">
        <div className="brandboard-intro">
          <h2 id="brandboard-title" className="brandboard-title">
            <span>Meet</span>
            <span className="brandboard-signature">
              <img className="brandboard-mascot" src={`${artwork}/mascot.webp`} alt="" width="316" height="303" loading="lazy" decoding="async" />
              <Wordmark />
            </span>
          </h2>

          <div className="brandboard-grid">
            <div className="brandboard-item">
              <h3>Brand Construction</h3>
              <div className="brandboard-graphic brand-construction" role="img" aria-label="A mask and scorpion combine to form the SaShii mascot">
                <img className="construction-mask" src={`${artwork}/mask.webp`} alt="" width="198" height="237" loading="lazy" decoding="async" />
                <span aria-hidden="true">+</span>
                <img className="construction-scorpion" src={`${artwork}/scorpion.webp`} alt="" width="303" height="241" loading="lazy" decoding="async" />
                <span aria-hidden="true">=</span>
                <img className="construction-mascot" src={`${artwork}/silhouette.webp`} alt="" width="200" height="177" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="brandboard-item">
              <h3>Color palette</h3>
              <div className="brandboard-graphic">
                <img className="brandboard-palette" src={`${artwork}/palette.webp`} alt="Black (#000000), burgundy (#b8143d), and bright red (#ff0040)" width="1000" height="288" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="brandboard-item">
              <h3>Variations</h3>
              <div className="brandboard-graphic brand-variations">
                <div className="brandboard-variant">
                  <img className="brandboard-monochrome" src={`${artwork}/monochrome.webp`} alt="Black-and-white mascot" width="800" height="800" loading="lazy" decoding="async" />
                </div>
                <div className="brandboard-variant">
                  <img className="brandboard-outline" src={`${artwork}/outline.webp`} alt="Red mascot outline" width="494" height="424" loading="lazy" decoding="async" />
                </div>
                <div className="brandboard-variant">
                  <span className="brandboard-outline brandboard-outline-burgundy" role="img" aria-label="Burgundy mascot outline" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brandboard-dark">
        <div className="content-frame">
          <div className="brandboard-grid brandboard-details">
            <div className="brandboard-item">
              <h3>Typography</h3>
              <div className="brandboard-graphic">
                <p className="brandboard-type"><span>Caldina</span><span>More Sugar</span></p>
              </div>
            </div>
            <div className="brandboard-item">
              <h3>Logo</h3>
              <div className="brandboard-graphic"><Wordmark light /></div>
            </div>
            <div className="brandboard-item">
              <h3>Pattern</h3>
              <div className="brandboard-graphic">
                <img className="brandboard-pattern" src={`${artwork}/pattern.webp`} alt="White illustrated pattern with a cat, scorpion, skull, and small doodles" width="800" height="303" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
