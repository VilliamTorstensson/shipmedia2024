"use client"
import Link from 'next/link'
import { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { TiArrowUpOutline } from "react-icons/ti";

export default function Navbar () {

  const [isOpen, setIsOpen] = useState(false)

const handleClick = () => {
  setIsOpen(!isOpen)
}
const closeMenu = () => {
  setIsOpen(false)
}

const [isOpen2, SetIsOpen2] = useState(false)
const handleClick2 = () => {
  SetIsOpen2(!isOpen2)
}


  return (
    <section id="nav" className="w-full h-full ">
      <nav className="  z-20 px-4 md:px-10 w-full h-20 max-w-[1540px] mx-auto flex justify-between  items-center">
        <h1 className='nav-animation hidden md:flex line-through decoration-black text-xl'>VILLIAM</h1>
        <Link aria-label='back to homepage' className='nav-animation w-full flex justify-start md:justify-center text-2xl  ' href="/">SHIP MEDIA</Link>
        <div onClick={handleClick} className=' flex flex-col justify-between  w-10 h-10
        '>
        {isOpen ? (
          <MdOutlineClose className='text-4xl' /> ) : (
        
          <HiMenuAlt4 className='nav-animation text-4xl' />
          
            )
          }
          </div>
          <div className={`z-10 duration-500 ease-in-out absolute w-full h-content py-5 px-4 bg-[#f5f5f5] top-20 left-0 ${isOpen ?  'top-20' : 'top-[-100%]'}`}>
            <ul className='flex flex-col h-full gap-5' onClick={closeMenu}>
            <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link href="#services">Services</Link></li>
              
              
              <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link aria-label='go to section' href="#work">Work</Link></li>
              <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link aria-label='go to section' href="#about">About</Link></li>
              <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link aria-label='go to section' href="#pricing">Pricing</Link></li>
              <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link aria-label='go to section' href="#faq">FAQs</Link></li>
              <li className='hover:text-[#323232] text-black border-b border-[#323232] inline-block'><Link aria-label='go to section' href="#contact">Contact</Link></li>
            </ul>
            </div>
      </nav>
          <nav className='z-40 hidden md:flex  w-[45rem] lg:w-[55rem]  mx-auto inset-x-0  rounded-full fixed bottom-[40px] h-[60px] bg-[#323232] justify-between px-2 max-w-[1440px] items-center'>
            <ul className='w-full h-full flex items-center justify-start'>
              <Link aria-label='back to top' href="#nav" className='px-8 py-3 rounded-full bg-[#606060] hover:bg-[#fff] hover:text-black '><TiArrowUpOutline className='text-2xl' /></Link>
            </ul>
            <ul className='text-sm flex  lg:text-lg justify-between items-center h-full w-full gap-5'>
            
              <Link aria-label='go to section' className='hover:bg-[#f5f5f5] text-white hover:text-[#151517]  font-semibold py-2 px-6  rounded-full  hidden md:inline-block' href="#services">Services</Link>

              <Link aria-label='go to section' className='hover:bg-[#f5f5f5] text-white hover:text-[#151517]  font-semibold py-2 px-6 rounded-full  hidden md:inline-block' href="#work">Work</Link>

              <Link aria-label='go to section' className='hover:bg-[#f5f5f5] text-white hover:text-[#151517]  font-semibold py-2 px-6  rounded-full  hidden md:inline-block' href="#about">About</Link>

              <Link aria-label='go to section' className='hover:bg-[#f5f5f5] text-white hover:text-[#151517]  font-semibold py-2 px-6  rounded-full  hidden md:inline-block' href="#pricing">Pricing</Link>

             <Link aria-label='go to section' className='hover:bg-[#f5f5f5] text-white hover:text-[#151517]  font-semibold py-2 px-6 rounded-full  hidden md:inline-block' href="#faq">FAQs</Link>
              
            </ul>
            <ul className='hidden lg:flex w-full h-full justify-end items-center'>
            <Link aria-label='contact' href="#contact" className='bg-[#606060] hover:bg-[#fff] hover:text-black rounded-full py-3 px-6 font-sans font-bold'>Contact</Link>
            </ul>
          </nav>
          



          <nav  className='md:hidden flex justify-center fixed bottom-[40px] inset-x-0 mx-auto z-40 w-full' >
              <div onClick={handleClick2} className={`bg-white shadow-sm px-5 py-3 rounded-full text-black font-sans text-2xl font-bold ${isOpen2 ? 'w-content mx-2' : 'w-content'}`}>
                <h1 className={`${isOpen2 ? 'hidden' : 'flex'}`} >
                N
                </h1>
                <ul className={`w-full justify-center gap-1 flex ${isOpen2 ? 'flex' : 'hidden'}`}>
                <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#nav">Top</Link>
                <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#services">Services</Link>

                <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#work">Work</Link>
                  <Link className='text-sm px-2 py-1 rounded-full bg-black text-white' href="#about">About</Link>
                  
                 
                  
                  <Link className=' text-sm px-2 py-1 rounded-full bg-black text-white' href="#contact">Contact</Link>
                </ul>
              </div>
             
          </nav>
    </section>
  )
}