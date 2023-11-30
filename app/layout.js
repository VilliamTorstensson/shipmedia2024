import { Anton } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })
 

const anton = Anton({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Ship media',
  description: 'Digital products, brands and experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html className='scroll-smooth' 
    style={{scrollBehavior: 'smooth'}} lang="en">
      <body className={anton.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
