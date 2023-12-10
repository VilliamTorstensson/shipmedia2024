
import Hero from './components/Hero'
import Services from './components/Services'
import LogoSlider from './components/LogoSlider'
import Benefits from './components/Benefits'
import Portfolio from './components/Portfolio'
import About from './components/About'
import ServiceSlider from './components/ServiceSlider'
import Pricing from './components/Pricing'
import Faq from './components/Faq'


import Contact from './components/Contact'



export default function Home() {

  

  return (
    <div>
      
      <main>
      <Hero />
      <LogoSlider />
      <Services />
      <ServiceSlider />
      <Benefits />
      <Portfolio />
      <About />
      <ServiceSlider />
      <Pricing />
      <Faq />
      <Contact />
    
      </main>
    </div>
  )
};


