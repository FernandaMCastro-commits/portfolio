import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import './App.css'

export default function App() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Contato />
      </main>
    </div>
  )
}
