"use client"

import Link from 'next/link'  
import Image from 'next/image'
import { useState } from 'react'
export default function Services () {

  const cards = [
    {
      index: 1,
      id: 1,
      url: "/service1.webp",
      title: 'WEBDESIGN.',
      description: `i craft visually stunning and user-friendly websites tailored to your unique brand. From sleek aesthetics to seamless functionality, i'm dedicated to transforming your digital identity. Boost engagement and stand out in the digital landscape. Let's build your success together!`,
    },
    {
      index: 2,
      id: 2,
      url: "/service2.webp",
      title: "Webdevelopement",
      description: "I specialize in creating robust, custom websites that elevates your online presence using react and next js, i tailor solutions to amplify your brand. Stay ahead in the digital realm with our cutting-edge development expertise. Let's shape your online future!.",
    },
    {
      index: 3,
      id: 3,
      url: "/service3.webp",
      title: "e-commerce",
      description: "I offer e-commerce solutions aswell, from Simple shopify store designs or advanced shopify theme development to a fullstack webapplication with stripe integration, i got you covered. Let's build your online store!",
    },
    {
    index: 4,
    id: 4,
    url: "/service4.webp",
    title: "branding & logos",
    description: "I craft impactful visual identities that resonate with your audience. From unique logos to cohesive brand elements using Figma, If you want something to show off on social media or in a campaign, i got you covered. Let's build your brand!", 
  },
  ]

  
   
   

  return (
    <main id="services" className="bg-[#090909]  h-full  ">
      <section className="w-full h-full max-w-[1440px] mx-auto">
        <div className="py-20  md:px-10 px-4 flex flex-col gap-10 items-start justify-start">
          <h1 className="sm:text-6xl text-4xl uppercase">choose a service that <br /> works for you</h1>
           
            <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4">
            
              {cards.map((item) => {
                const [isOpen, setIsOpen] = useState(false);
                const Stylediv = {
                  backgroundImage: `url(${item.url})`, // Fix: Use item.url instead of cards.url
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "500px",
                  width: "100%",
                };
                const handleClick = () => {
                  setIsOpen(!isOpen);
                };

                return (
                  <div onClick={handleClick} key={item.id} className="relative w-full h-full">
                    
                    <div style={Stylediv} className={`rounded-lg cursor-pointer flex justify-start  flex-col h-min items-start relative py-4 ${isOpen ? 'justify-start' : ''}`}>
                      <div className={`z-10  absolute w-full h-full bg-black top-0 left-0  ${isOpen ? 'opacity-90' : 'opacity-10 md:hover:opacity-30'}`} >
                      </div>
                      <h1 className={` uppercase z-20 bg-black bg-opacity-80 text-white px-6 py-2 text-2xl ${isOpen ? 'ml-0' : 'ml-4'}`}>{item.title}</h1>
                      {isOpen ? (
                        <div className='flex flex-col gap-4 relative'>
                            <p key={item.id} className="px-6 text-xl z-20 duration-500 w-[80%] h-full mt-4">{item.description}</p>
                            <Link aria-label='contact me' className='uppercase z-20 ml-4 px-6 rounded-sm text-black text-lg  bg-white w-min py-2 mt-4' href="#contact">Contact</Link>
                        </div>
                    
                      ) : (
                        ''
                      )}
                      
                    </div>
                  </div>
                );
              })}
              
            </div>
            
        </div>
      </section>
    </main>
  )
};


