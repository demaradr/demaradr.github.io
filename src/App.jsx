import { About } from './components/About.jsx'
import { Education } from './components/Education.jsx'
import { FeaturedExperience } from './components/FeaturedExperience.jsx'
import { Footer } from './components/Footer.jsx'
import { Hero } from './components/Hero.jsx'
import { Nav } from './components/Nav.jsx'
import { OtherExperience } from './components/OtherExperience.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <FeaturedExperience />
        <OtherExperience />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  )
}
