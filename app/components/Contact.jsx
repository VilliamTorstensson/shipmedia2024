"use client"


import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useForm, ValidationError } from '@formspree/react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link'

export default function Contact () {
  const [state, handleSubmit] = useForm("mjvqznqk");
  if (state.succeeded) {
      return <div className='px-4 sm:px-10 max-w-[1440px] mx-auto'>
        <div className='md:w-[50%] w-full h-full flex flex-col gap-10'>
          <h1 className='px-4 py-2 w-min whitespace-nowrap bg-white text-black uppercase text-2xl'>villiam torstensson</h1>
          
        </div>
        <h1 className='text-4xl mt-10   font-sans font-bold'>Thank's for reaching out!</h1>
        <p className='mt-4'>I'll get back to you as soon as possible</p>
        <div className='flex gap-4 mt-5'>
          <Link href="mailto:villiam@shipmedia.se">
          <AiOutlineMail className='text-2xl' />
          </Link>
         <Link href="tel:+46722289195">
          <AiOutlinePhone className='text-2xl' />
          </Link>
        </div>
        </div>;
  }
 


    return (
      <main id="contact" className='py-10 w-full h-full  max-w-[1440px] mx-auto'>
        <section className='px-4 sm:px-10'>
        <div className='md:w-[50%] w-full h-full flex flex-col gap-10'>
          <h1 className='px-4 py-2 w-min whitespace-nowrap bg-white text-black uppercase text-2xl'>villiam torstensson</h1>
          <h1 className='text-4xl lg:text-6xl uppercase'>let's create something <br /> amazing together</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-20'>
              <form onSubmit={handleSubmit} className='flex flex-col gap-10 w-full '>
                <div className='flex flex-col gap-2'>
               
      <input className='w-full border-b bg-transparent text-xl py-2 font-sans'
        id="email"
        type="email" 
        name="email"
        placeholder='Email'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                </div>
  
  

      <input className='w-full border-b bg-transparent text-xl py-2 font-sans'
        id="name"
        type="text" 
        name="name"
        placeholder='Name'
        required
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
   
 
       

      <input className='w-full border-b bg-transparent text-xl py-2 font-sans'
        id="company"
        type="text" 
        name="company"
        placeholder='Company'
        optional
      />
      <ValidationError 
        prefix="company" 
        field="company"
        errors={state.errors}
      />
     
   
   
      <textarea className=' w-full border-b bg-transparent text-xl py-2 font-sans'
        id="message"
        name="message"
        placeholder='Message'
      />

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
 
      <button className='btn5 bg-[#42201F] py-3 text-2xl uppercase' type="submit" disabled={state.submitting}>
        send message
      </button>
     
    </form>
    <div className='w-full h-full flex flex-col gap-2'>
      <h1 className='text-lg lg:text-2xl px-4 py-2 uppercase bg-[#fff] text-[#090909]'>ship media sweden</h1>
      <h1 className='text-lg lg:text-2xl px-4 py-2 uppercase bg-[#fff] text-[#090909]'>Idrottsgatan 17 59350 västervik, sweden</h1>
      <Link className='hover:bg-gray-300 text-lg lg:text-2xl px-4 py-2 uppercase bg-[#fff] text-[#090909]' href="mailto:villiam@shipmedia.se">Villiam@shipmedia.se</Link>
      <Link className='hover:bg-gray-300 text-lg lg:text-2xl px-4 py-2 uppercase bg-[#fff] text-[#090909]' href="tel:+46722289195">Phone</Link>
      
      <h1 className='uppercase text-2xl mt-4'>Socials</h1>
      <div className='flex gap-5'>
        <Link href="https://www.facebook.com/profile.php?id=61553503710750">      <FaFacebookSquare className='text-2xl' />
        </Link>
        <Link href="https://www.instagram.com/villiamtorstensson">
      <FaInstagram className='text-2xl' />
      </Link>
      <Link href="https://www.linkedin.com/in/villiam-torstensson-47a0b625a/">
      <FaLinkedin className='text-2xl' />
      </Link>
      </div>
    </div>
    </div>

    {/**COL 2 */}

    </section>
    </main>
    );
        };