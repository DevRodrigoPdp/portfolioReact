import './App.css'
import 'animate.css';
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience} from "./components/Experience"
import { Education } from './components/Education'
import { Hero } from './components/Hero'
import { Contacto } from './components/Contacto'

function App() {
  return (
    <main className="text-[#F5F5F5] bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] body-font">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <Hero/>
        <Experience/>
        <Education/>
        <Projects />
        <Skills />
        <Contacto/>
      </div>
      <Footer/>
    </main>
  )
}

export default App
