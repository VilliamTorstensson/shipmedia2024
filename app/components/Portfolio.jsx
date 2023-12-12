"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useTransform, useScroll } from 'framer-motion';
import {  useRef } from 'react';

export default function Portfolio () {
 
  const card = [
    {
      id: 1,
      url: "/fyran.webp",
    },
    {
      id: 2,
      url: "/sexan.webp",
    },
    {
      id: 3,
      url: "/sjuan.webp",
    },
    {
      id: 4,
      url: "/åttan.webp",
    },
    {
      id: 5,
      url: "/ettan.webp",
    },
    {
      id: 6,
      url: "/tian.webp",
    },
    {
      id: 7,
      url: "/tvåan.webp",
    },
    {
      id: 8,
      url: "/nian.webp",
    },
    {
      id: 9,
      url: "/trean.webp",
    },
    {
      id: 10,
      url: "/åttan.webp",
    },
    {
      id: 11,
      url: "/ettan.webp",
    },
    {
      id: 12,
      url: "/femman.webp",
    },
  ];
const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ['start end', 'end start'],
})

const y = useTransform(scrollYProgress, [0, 1], [1, 900])

  return (
    <main id="work" className="w-full h-full my-auto flex items-center justify-center overflow-y-hidden relative bg-[#2d2d2f] ">
      
      <div ref={container} className=' relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 z-0'>
        {card.map((item) => {
          return (
            <div style={{scrollBehavior: 'smooth'}}  y={0} key={item.id} className="scroll-smooth xl:top-[-45%] lg:top-[-75%] md:top-[-55%] sm:top-[-80%] xs:top-[-40%] top-[-100%] relative flex gap-4 w-full">
              <motion.div style={{y}} className='scroll-smooth'  >
              <Image
               
              
                src={item.url}
                alt="work"
                width={2160}
                height={3840}
                className="rounded-md"
              />
              </motion.div>
            
            </div>
          );
        })}
      </div>
      
    </main>
  )
}