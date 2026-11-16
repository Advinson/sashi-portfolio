import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { projectPages } from './src/portfolio-projects.ts'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  input: ['index.html', ...projectPages.map(({ template }) => template)],
  build: { copyPublicDir: !isSsrBuild },
}))
