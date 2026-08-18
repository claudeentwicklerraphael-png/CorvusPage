import Header from './components/Header'
import Hero from './components/Hero'
import WasCorvusMacht from './components/WasCorvusMacht'
import EinAnruf from './components/EinAnruf'
import FotoVomSchaden from './components/FotoVomSchaden'
import TechnikDatenschutz from './components/TechnikDatenschutz'
import FAQ from './components/FAQ'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <WasCorvusMacht />
        <EinAnruf />
        <FotoVomSchaden />
        <TechnikDatenschutz />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </div>
  )
}
