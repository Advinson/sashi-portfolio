import { AccentText } from './AccentText'

const services = [
  {
    title: 'Editorial Design',
    description: 'I bring text and images together to create engaging, easy-to-read publications.',
    deliverables: [
      'Design for books, magazines, catalogs, manuals, etc.',
      'Create covers and interior pages.',
      'Adaptation to digital formats.',
      'Conceptualization for editorial collections.',
    ],
  },
  {
    title: 'Brand identity',
    description: 'I shape your brand’s visual identity to create a consistent and recognizable presence.',
    deliverables: [
      'Design logos and their variations or rebrandings.',
      'Define color palettes and typography.',
      'Develop visual identity guidelines.',
      'Graphic elements and resources.',
      'Design stationery, and corporate documents.',
    ],
  },
  {
    title: 'Digital illustrations',
    description: 'I turn ideas into illustrations that bring personality to your brand or project.',
    deliverables: [
      'Create illustrations for publications and digital content.',
      'Custom illustrations for brands and small businesses.',
      'Design stickers, labels, and personalized graphic elements, medical / educational content or for streaming profiles.',
    ],
  },
  {
    title: 'Social media and advertising',
    description: 'I create visuals that communicate your products, services, and messages across different channels.',
    deliverables: [
      'Design social media posts, carousels, and stories.',
      'Create banners and graphics for advertising campaigns.',
      'Design posters, outdoor advertising displays, and promotional materials.',
      'Adapt designs to different sizes and platforms.',
    ],
  },
]

function ServicesArtwork() {
  return (
    <div className="services-art" aria-hidden="true">
      <div className="services-red-line">
        <span className="services-squiggle" />
      </div>
      <div className="services-mascot">
        <img src="/art/services-mascot.webp" alt="" width="1080" height="1350" loading="lazy" decoding="async" />
      </div>
      <div className="service-figure service-figure-scorpion">
        <img src="/art/scorpion.webp" alt="" width="420" height="372" loading="lazy" decoding="async" />
      </div>
      <div className="service-figure service-figure-skull">
        <img src="/art/skull.webp" alt="" width="384" height="433" loading="lazy" decoding="async" />
      </div>
      <div className="service-figure service-figure-cat">
        <img src="/art/cat.webp" alt="" width="420" height="268" loading="lazy" decoding="async" />
      </div>
    </div>
  )
}

export function Services() {
  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <span className="services-squiggle services-ink-line" aria-hidden="true" />
      <div className="content-frame">
        <div className="services-layout">
          <div className="services-copy">
            <h2 id="services-title">
              <span className="services-greeting">Some of <AccentText>my</AccentText></span>{' '}
              <strong className="services-title">Services</strong>
            </h2>
            <p className="services-intro">I do not limit myself, if you have an idea, a visual project, or just want to bring something from your head into the real world, you can count on me.</p>

            <ol className="service-list" role="list">
              {services.map(({ title, description, deliverables }, index) => (
                <li key={title} className="service-item">
                  <span className="service-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <ul>{deliverables.map((deliverable) => <li key={deliverable}>{deliverable}</li>)}</ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <ServicesArtwork />
        </div>
      </div>
    </section>
  )
}
