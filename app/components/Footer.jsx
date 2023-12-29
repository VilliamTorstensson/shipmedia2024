"use client"
import Link from 'next/link';

import { useState } from 'react';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {

  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    setIsSent(true);
    
    // Add code to submit email to newsletter service
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
   
  }

  return (
    <main className="w-full font-sans">
      <footer className="w-full bg-[#151517]  ">
        <div className=" max-w-[1340px] mx-auto flex flex-col lg:flex-row items-start justify-center gap-[3.5rem] md:gap-10  w-full h-full py-20 sm:px-10 px-6">
            <div className=" flex items-start w-full h-full">
              <h1 className="sm:text-4xl text-[2.2rem] leading-[2.9rem] md:text-4xl lg:text-4xl font-bold h-full ">Transform your ideas into digital realities</h1>
            </div>
            <div className="flex flex-col justify-start gap-2 w-full ">
              <h1 className="uppercase font-bold text-2xl mb-4">Västervik.</h1>
              <a href="mailto: Villiam@shipmedia.se"><p className='hover:underline'> Villiam@shipmedia.se</p></a>
              <a href="tel:+46722289195"><p className='hover:underline'>+46 722289195</p></a>
              
              <p>Idrottsgatan 17 59350 Västervik, Sverige</p>
              <p>Ship-media Sweden</p>
            </div>
            <div>
              <h1 className='font-bold text-lg uppercase mb-5'>Socials</h1>
              <div className='flex w-full justify-start gap-10 text-2xl'>
                <Link aria-label='check my profiles' className='bg-[#323232] hover:bg-[#252525] p-2 rounded-full' href="https://instagram.com/villiamtorstensson" name="instagram"><AiOutlineInstagram /></Link>
                <Link aria-label='check my profiles' className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://facebook.com/villiamtorstensson" name="facebook"><AiOutlineFacebook /></Link>
                <Link aria-label='check my profiles' className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://www.linkedin.com/in/villiam-torstensson-47a0b625a/?originalSubdomain=se" name="linkedin"><AiOutlineLinkedin /></Link>
                <Link aria-label='check my profiles' className='bg-[#323232] hover:bg-[#252525] p-2  rounded-full' href="https://github.com/VilliamTorstensson" name="github"><AiOutlineGithub /></Link>
                  
                </div>
              
            </div>
           
        </div>
        <div className='pb-[110px] w-full flex justify-center items-center gap-2 flex-col text-gray-300 '>
          <Link aria-label='my privacy policy' href="/Privacy" className=' hover:text-gray-400'>Privacy Policy</Link>
          <h1>© 2023 all rights reserved</h1></div>
         
      </footer>
    </main>
  )
}