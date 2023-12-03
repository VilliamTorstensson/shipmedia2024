import Head from 'next/head';
import Hero from './components/Hero'

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
     
      <Benefits />
      <Portfolio />
      <About />
      <Pricing />
      <Faq />
      <Contact />
      </main>
    </div>
  )
};


