
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
      <head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-TDP379QD6K"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TDP379QD6K');
        `}</script>
      </head>
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


