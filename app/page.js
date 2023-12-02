
import Hero from './components/Hero'
import ImageSlider from './components/ImageSlider'
import Services from './components/Services'
import LogoSlider from './components/LogoSlider'
import Benefits from './components/Benefits'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Pricing from './components/Pricing'
import Faq from './components/Faq'

import Contact from './components/Contact'
export default function Home() {
  return (
    <main>
      
      <Hero />
      <ImageSlider />
      <Services />
      <LogoSlider />
      <Benefits />
      <Portfolio />
      <About />
      <Pricing />
      <Faq />
      <Contact />
    </main>
  )
}

