import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ValueSection from './components/ValueSection'
import Workflow from './components/Workflow'
import Trust from './components/Trust'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ValueSection />
        <Workflow />
        <Trust />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
