export const contactEmail = 'bysashii@outlook.com'

export const contactLimits = { name: 100, email: 254, message: 4000 } as const

export const siteSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'contact', label: 'Contact' },
] as const
