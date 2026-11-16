import { createRoot, hydrateRoot } from 'react-dom/client'
import { App } from './App'
import './styles.css'
import './brandboard.css'
import './services.css'
import './portfolio.css'
import './contact.css'

const root = document.getElementById('root')!

if (root.firstElementChild) {
  hydrateRoot(root, <App />)
} else {
  createRoot(root).render(<App />)
}
