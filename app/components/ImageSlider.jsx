"use client"
import Image from 'next/image'
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
export default function ImageSlider () {
  const card = [
    {
      url: "/slide3.webp",
      id: 1,
    },
    {
      url: "/slide1.webp",
      id: 2,
    },
    {
      url: "/slide2.webp",
      id: 3,
    },
    {
      url: "/slide4.webp",
      id: 4,
    },
    {
      url: "/slide5.webp",
      id: 5,
    },
   
  ];
  
    
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ['-1px', '-6000px']);
  
  return (
    <section useRef={targetRef} className='relative h-full py-10 w-full overflow-x-hidden '>
      <motion.div style={{ x }} className="w-full h-content sticky  top-0 flex 2xl:gap-60 md:gap-20 gap-4 py-5 ">
      {card.map((item) => {
        return (
          <div  key={item.id} className="min-w-[200px] sm:min-w-[280px] md:min-w-[350] lg:min-w-[400px]  2xl:min-w-[500px]  flex gap-4 w-full">
            
            <Image
              src={item.url}
              alt="work"
              width={1080}
              height={1080}
              className="rounded-md"
            />
          
         
          </div>
        );
      })}
    </motion.div>
    </section>
    
  )
    }

