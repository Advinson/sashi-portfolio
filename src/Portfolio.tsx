import { useState } from 'react'
import { portfolioCategories, portfolioProjects, type PortfolioCategory, type PortfolioProject } from './portfolio-projects'

type Filter = 'all' | PortfolioCategory

const filters: { id: Filter, label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'editorial', label: portfolioCategories.editorial },
  { id: 'identity', label: portfolioCategories.identity },
  { id: 'advertising', label: portfolioCategories.advertising },
  { id: 'illustration', label: portfolioCategories.illustration },
]

function ProjectCard({ project }: { project: PortfolioProject }) {
  const cover = project.thumbnail
    ? <img src={project.thumbnail} alt={project.href ? '' : project.title} loading="lazy" decoding="async" />
    : <span className="portfolio-card-name">{project.title}</span>

  return (
    <li className="portfolio-card" data-project={project.id}>
      {project.href ? (
        <a href={project.href} target="_blank" rel="noopener" aria-label={`${project.title} (opens in a new tab)`}>
          {cover}
        </a>
      ) : (
        <div>{cover}</div>
      )}
    </li>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const projects = portfolioProjects.filter((project) => filter === 'all' || project.categories.includes(filter))

  return (
    <section id="portfolio" className="portfolio" aria-labelledby="portfolio-title">
      <div className="content-frame">
        <div className="portfolio-layout">
          <h2 id="portfolio-title" aria-label="Welcome to my @bySashii portfolio">
            <span className="portfolio-greeting">Welcome to my <span className="portfolio-handle accent-pill">@bySashii</span></span>
            <strong className="portfolio-title" aria-hidden="true">
              PORTF<img className="portfolio-title-mark" src="/art/portfolio/letter-o.webp" alt="" width="276" height="340" />LIO
            </strong>
          </h2>

          <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
            {filters.map(({ id, label }) => (
              <button key={id} type="button" aria-pressed={filter === id} aria-controls="portfolio-projects" onClick={() => setFilter(id)}>
                {label}
              </button>
            ))}
          </div>

          <p className="portfolio-status" role="status">{projects.length} {projects.length === 1 ? 'project' : 'projects'}</p>
          <ul id="portfolio-projects" className="portfolio-grid" role="list">
            {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </ul>
        </div>
      </div>
    </section>
  )
}
