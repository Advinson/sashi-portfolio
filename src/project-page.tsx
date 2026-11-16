import type { ReactNode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { ProjectHeader } from './ProjectHeader'
import { SiteFooter } from './SiteFooter'
import './shared.css'
import './footer.css'
import './project-page.css'

function renderInto(root: HTMLElement, content: ReactNode) {
  if (root.firstElementChild) {
    hydrateRoot(root, content)
  } else {
    createRoot(root).render(content)
  }
}

const header = document.getElementById('project-header')
const footer = document.getElementById('project-footer')
const projectId = header?.dataset.project

if (header && footer && projectId) {
  renderInto(header, <ProjectHeader projectId={projectId} />)
  renderInto(footer, <SiteFooter projectPage />)
}
