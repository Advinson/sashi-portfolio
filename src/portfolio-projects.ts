export const portfolioCategories = {
  editorial: 'Editorial design',
  identity: 'Brand identity',
  advertising: 'Social media and Advertising',
  illustration: 'Digital Illustrations',
} as const

export type PortfolioCategory = keyof typeof portfolioCategories

export type PortfolioProject = {
  id: string
  title: string
  categories: PortfolioCategory[]
  href: string | null
  thumbnail: string | null
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'laika',
    title: 'La odisea de Laika',
    categories: ['editorial'],
    href: '/Laika/laika.html',
    thumbnail: '/art/portfolio/laika.webp',
  },
  {
    id: 'gamezine',
    title: 'Gamezine',
    categories: ['editorial'],
    href: '/Gamezine/gamezine.html',
    thumbnail: '/art/portfolio/gamezine.webp',
  },
  {
    id: 'capixidil',
    title: 'Capixidil',
    categories: ['identity'],
    href: '/Capixidil/capixidil.html',
    thumbnail: '/art/portfolio/capixidil.webp',
  },
  {
    id: 'fancy-quality',
    title: 'Fancy Quality',
    categories: ['identity'],
    href: '/Fancy%20Quality/fancyQuality.html',
    thumbnail: '/art/portfolio/fancy-quality.webp',
  },
  {
    id: 'billete-1000-lempiras',
    title: 'Billete de 1000 lempiras',
    categories: ['illustration'],
    href: '/100-lempiras/lempira.html',
    thumbnail: '/art/portfolio/billete-1000-lempiras.webp',
  },
  {
    id: 'ediciones-ramses',
    title: 'Ediciones Ramsés',
    categories: ['advertising'],
    href: '/ediciones-ramses.html',
    thumbnail: '/art/portfolio/ediciones-ramses.webp',
  },
  {
    id: 'hospital-catolico',
    title: 'Hospital Católico Universitario',
    categories: ['identity', 'advertising'],
    href: '/hospital-catolico.html',
    thumbnail: '/art/portfolio/hospital-catolico.webp',
  },
  {
    id: 'fundacion-santa-maria',
    title: 'Fundación Santa María de la Salud',
    categories: ['identity'],
    href: '/fundacion-santa-maria.html',
    thumbnail: '/art/portfolio/fundacion-santa-maria.webp',
  },
]

export const projectPages = portfolioProjects.flatMap(({ id, title, href }) => (
  href?.startsWith('/') && href.endsWith('.html')
    ? [{ id, title, href, template: decodeURIComponent(href.slice(1)) }]
    : []
))
