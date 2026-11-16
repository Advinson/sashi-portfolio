import { renderToString } from 'react-dom/server'
import { App } from './App'
import { ProjectHeader } from './ProjectHeader'
import { SiteFooter } from './SiteFooter'

export { projectPages } from './portfolio-projects'

export function render() {
  return renderToString(<App />)
}

export function renderProjectChrome(projectId: string) {
  return {
    header: renderToString(<ProjectHeader projectId={projectId} />),
    footer: renderToString(<SiteFooter projectPage />),
  }
}
