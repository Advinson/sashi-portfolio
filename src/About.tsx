import { AccentText } from './AccentText'

const cvDownload = 'https://drive.google.com/uc?export=download&id=1TIUzDr93d-2_hr6ftGEWNV9_0mRLEvDw'

function AboutArtwork() {
  return (
    <div className="about-artwork">
      <svg className="about-ribbons" viewBox="0 0 550 487" aria-hidden="true">
        <path className="about-ribbon-red" d="M 152 246 C 84 254 76 291 105 340 C 124 372 148 379 146 358 C 145 336 107 306 68 301 C 30 297 4 322 9 369 C 14 415 47 463 77 492 S 153 554 177 608 S 194 676 200 725" />
        <path className="about-ribbon-black" d="M 340 218 C 401 258 470 262 506 224 C 557 170 516 28 462 17 C 391 2 431 104 547 130 C 615 144 663 104 723 112 S 791 143 915 140 H 1800" />
        <path d="M 199 289 H 266 C 260 300 246 310 246 321 C 246 332 254 337 260 343 H 205 C 212 334 221 330 221 321 C 221 311 208 298 199 289 Z" />
      </svg>
      <div className="about-portrait">
        <img src="/art/sarahi-portrait-source.webp" alt="Black-and-white portrait of Sarahi" width="1024" height="768" loading="lazy" decoding="async" />
      </div>
      <svg className="about-tagline" viewBox="0 0 550 487" role="img" aria-label="Designing from the emotions">
        <path id="about-tagline-arc" d="M 89 202 A 148 148 0 0 1 271 25" fill="none" />
        <text><textPath href="#about-tagline-arc">Designing from the emotions</textPath></text>
      </svg>
      <a className="about-cv" href={cvDownload}>Download CV</a>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="content-frame">
        <div className="about-layout">
          <div className="about-copy">
            <h2 id="about-title">
              <span className="about-greeting">Behind the <AccentText>lines</AccentText></span>{' '}
              <strong className="about-name">SARAHI.</strong>
            </h2>
            <p>I hold a degree in Graphic Design and, since 2023, have developed visual identities, editorial projects and content for print and digital media. I find inspiration in video games, books and the visual experiences around me. I listen to what each brand needs and explore how to translate it into design, from a logo to a campaign, from illustrations to book or from diagrams to website. I enjoy finding new ways to approach each project, while working in an organized way.</p>
            <dl className="about-details">
              <div>
                <dt>Disciplines:</dt>
                <dd>Branding, digital and social media content, editorial design, illustrations, web design.</dd>
              </div>
              <div>
                <dt>Software:</dt>
                <dd>Adobe Illustrator, Adobe Photoshop, Adobe Indesign, Canva, Procreate and Capcut.</dd>
              </div>
            </dl>
            <a className="about-brandboard" href="#about-2">
              Brandboard
              <svg aria-hidden="true" viewBox="0 0 18 36" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 9 2 V 34 M 2 27 L 9 34 L 16 27" />
              </svg>
            </a>
          </div>
          <AboutArtwork />
        </div>
      </div>
    </section>
  )
}
