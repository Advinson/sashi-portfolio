import { readFile, writeFile } from 'node:fs/promises'
import { projectPages, render, renderProjectChrome } from '../.prerender/entry-server.js'

const indexFile = new URL('../dist/index.html', import.meta.url)
const template = await readFile(indexFile, 'utf8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('The HTML template is missing the React prerender marker.')
}

let urlMetadata = ''
if (process.env.SITE_URL) {
  const siteUrl = new URL(process.env.SITE_URL)
  if (
    siteUrl.protocol !== 'https:' || siteUrl.username || siteUrl.password ||
    siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash
  ) {
    throw new Error('SITE_URL must be the public HTTPS origin of the portfolio.')
  }

  const homepage = `${siteUrl.origin}/`
  urlMetadata = `<link rel="canonical" href="${homepage}" />\n    <meta property="og:url" content="${homepage}" />`
}

const html = template
  .replace('<!--site-url-->', () => urlMetadata)
  .replace('<!--app-html-->', () => render())

await writeFile(indexFile, html)

await Promise.all(projectPages.map(async ({ id, href }) => {
  const file = new URL(`../dist${href}`, import.meta.url)
  const template = await readFile(file, 'utf8')
  if (!template.includes('<!--project-header-->') || !template.includes('<!--project-footer-->')) {
    throw new Error(`Missing prerender markers in ${href}`)
  }

  const { header, footer } = renderProjectChrome(id)
  await writeFile(file, template
    .replace('<!--project-header-->', () => header)
    .replace('<!--project-footer-->', () => footer))
}))
