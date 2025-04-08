import './App.css'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience} from "./components/Experience"
import { Education } from './components/Education'

function App() {

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Experience/>
      <Education/>
      <Projects />
      <Skills />
      <Footer/>
    </main>
    
  )
}

export default App
