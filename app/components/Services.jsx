import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link'  

export default function Services () {
  return (
    <main id="services" className="  h-full  ">
      <section className="w-full h-full max-w-[1440px] mx-auto">
        <div className="py-20  sm:px-10 px-4 flex flex-col gap-10 items-start justify-start">
          <h1 className="sm:text-6xl text-4xl uppercase">choose a service that <br /> works for you</h1>
           
            <div className=" grid grid-cols-1 md:grid-cols-2 w-full h-full gap-4">
            
              {cards.map((item) => {
                return (
                  
                  <div
                 
                  key={item.id} className="shadow-lg shadow-black relative w-full h-full flex flex-col  gap-4 first:bg-[#42201F] first:text-white bg-white p-5 text-[#121212] ">
                      
                    <h3 className="font-sans font-bold text-xl uppercase ">{item.title}</h3>
                    <p className="text-sm  lg:text-lg">{item.description}</p>
                    <Link href="#contact">
                    <FaArrowRight className="" />
                    </Link>
                  </div>
                  
                );
              })}
              
            </div>
            
        </div>
      </section>
    </main>
  )
};


const cards = [
  {
id: 1,
title: 'WEBDESIGN.',
description: `i craft visually stunning and user-friendly websites tailored to your unique brand. From sleek aesthetics to seamless functionality, i'm dedicated to transforming your digital identity. Boost engagement and stand out in the digital landscape. Let's build your success together!`,
  },
  {
    id: 2,
    title: "Webdevelopement",
    description: "I specialize in creating robust, custom websites that elevate your online presence. From intricate coding to seamless functionality, i tailor solutions to amplify your brand. Stay ahead in the digital realm with our cutting-edge development expertise. Let's shape your online future!.",
  },
  {
  id: 3,
  title: "DIGITAL MARKETING",
  description: "I drive results through strategic campaigns, maximizing your brand visibility. From targeted social media strategies to data-driven SEO, I propel your digital presence to new heights. Let's amplify your reach, engage your audience, and boost your business growth in the dynamic digital landscape!.",
  },
  {
  id: 4,
  title: "Logo & Branding",
  description: "I craft impactful visual identities that resonate with your audience. From unique logos to cohesive brand elements, i ensure a memorable and professional image. Elevate your brand presence and make a lasting impression. Let's shape a brand that truly reflects your essence!",
  },
  
]