import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Mission from './components/Mission.jsx'
import Pillars from './components/Pillars.jsx'
import Compare from './components/Compare.jsx'
import Pricing from './components/Pricing.jsx'
import Team from './components/Team.jsx'
import Waitlist from './components/Waitlist.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <a href="#top" className="skip-link">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <Mission />
        <Pillars />
        <Compare />
        <Pricing />
        <Team />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
