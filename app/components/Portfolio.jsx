"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useTransform, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Portfolio () {
 
  const card = [
    {
      id: 1,
      url: "/work5.jpg",
    },
    {
      id: 2,
      url: "/work6.jpg",
    },
    {
      id: 3,
      url: "/work7.jpg",
    },
    {
      id: 4,
      url: "/work8.jpg",
    },
    {
      id: 5,
      url: "/work1.jpg",
    },
    {
      id: 6,
      url: "/work9.jpg",
    },
    {
      id: 7,
      url: "/work2.jpg",
    },
    {
      id: 8,
      url: "/work4.jpg",
    },
    {
      id: 9,
      url: "/work3.jpg",
    },
    {
      id: 10,
      url: "/work8.jpg",
    },
    {
      id: 11,
      url: "/work1.jpg",
    },
    {
      id: 12,
      url: "/work5.jpg",
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
              <motion.div style={{y}} >
              <Image
               
              y={y}
                src={item.url}
                alt="work"
                width={1080}
                height={1920}
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