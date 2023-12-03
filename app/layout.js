import { Anton } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'







const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
 

const anton = Anton({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Ship media - vi skapar hemsidor som gör skillnad',
  description: 'hemsida till företag? Vi hjälper dig att skapa en hemsida som är anpassad för ditt företag. Vi skapar hemsidor som är anpassade för alla enheter, är du ute efter en hemsida som gör skillnad och gör jobbet åt dig så har du kommit rätt',
  
}

export default function RootLayout({ children }) {

  
  return (
    <html className='scroll-smooth' 
    style={{scrollBehavior: 'smooth'}} lang="en">
      
      <body className={anton.className}>
      
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<G-TDP379QD6K>"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

        <Navbar />
        {children}
        <Footer />
        

        </body>
    </html>
  )
}
