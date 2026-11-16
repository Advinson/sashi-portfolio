import { projectPages } from './portfolio-projects'

export function ProjectHeader({ projectId }: { projectId: string }) {
  const index = projectPages.findIndex(({ id }) => id === projectId)
  if (index === -1) throw new Error(`Missing project page: ${projectId}`)

  const previous = projectPages[index - 1]
  const next = projectPages[index + 1]

  return (
    <header className="project-header" data-theme={projectId === 'gamezine' ? 'dark' : 'light'} lang="en">
      <nav aria-label="Project navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li>{previous
            ? <a href={previous.href} aria-label={`Previous: ${previous.title}`}>Previous</a>
            : <span role="link" aria-disabled="true">Previous</span>}</li>
          <li>{next
            ? <a href={next.href} aria-label={`Next: ${next.title}`}>Next</a>
            : <span role="link" aria-disabled="true">Next</span>}</li>
          <li><a href="/#portfolio">Back to portfolio</a></li>
        </ul>
      </nav>
    </header>
  )
}
