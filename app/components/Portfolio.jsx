"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useTransform, useScroll } from 'framer-motion';
import {  useRef } from 'react';

export default function Portfolio () {
 
  const card = [
    {
      id: 1,
      url: "/work4.webp",
    },
    {
      id: 2,
      url: "/work6.webp",
    },
    {
      id: 3,
      url: "/work7.webp",
    },
    {
      id: 4,
      url: "/work8.webp",
    },
    {
      id: 5,
      url: "/work1.webp",
    },
    {
      id: 6,
      url: "/work10.webp",
    },
    {
      id: 7,
      url: "/work2.webp",
    },
    {
      id: 8,
      url: "/work9.webp",
    },
    {
      id: 9,
      url: "/work3.webp",
    },
    {
      id: 10,
      url: "/work8.webp",
    },
    {
      id: 11,
      url: "/work1.webp",
    },
    {
      id: 12,
      url: "/work5.webp",
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