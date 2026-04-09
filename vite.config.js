import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User/organization Pages (username.github.io) serves from repo root — keep base '/'.
// If you ever deploy as a project site, set base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
