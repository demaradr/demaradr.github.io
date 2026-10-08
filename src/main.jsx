import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Layout } from './components/Layout.jsx'
import { About } from './pages/About.jsx'
import { Experience } from './pages/Experience.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { ProjectDetail } from './pages/ProjectDetail.jsx'
import { Projects } from './pages/Projects.jsx'

// Each generated HTML file sets data-page (and data-slug for case studies) on <body>.
const pages = {
  home: Home,
  projects: Projects,
  project: ProjectDetail,
  experience: Experience,
  about: About,
  'not-found': NotFound,
}

const { page, slug } = document.body.dataset
const Page = pages[page] ?? NotFound

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Page slug={slug} />
    </Layout>
  </StrictMode>,
)
