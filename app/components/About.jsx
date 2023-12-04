import Image from 'next/image'
import Link from 'next/link'
import { IoMdStar } from "react-icons/io";
export default function About () {
  return (
    <main id="about" className=" w-full h-full bg-[#090909] border-t ">
      <section className="py-20 flex flex-col gap-10 max-w-[1440px] px-4 sm:px-10 mx-auto">
        <h1 className="uppercase xl:leading-[120px] xl:text-[120px] text-6xl md:text-8xl">villiam torstensson</h1>
        <div className="grid xl:grid-cols-3 gap-10 sm:gap-5 md:grid-cols-2 grid-cols-1 xl:pb-0 pb-4 border-b border-[#575757]">
          <div className="h-full w-full flex flex-col gap-10 xl:gap-20 order-2 xl:order-1">
            <h1 className=" text-lg leading-none">VILLAIM TORSTENSSON <span className="font-sans text-sm leading-none">I'm a webdeveloper and graphic designer based in Sweden. I specialize in building cutting-edge websites using React with Next.js as my trusted framework, with my attention for details i create seamless, responsive, and user-friendly web solutions that not only meet but exceed expectations. Let's collaborate and turn your online vision into reality.</span></h1>
            <div className="flex flex-col gap-10">
              <div><h1 className="uppercase text-2xl border-b border-[#575757]">web design</h1>
              <div className='flex'>
              <p className='mt-2'>As a web designer, I create digital designs. I offer visually appealing and user-friendly websites, crafting online experiences that meet the unique needs of clients and users.</p>
              </div>
              
              </div>
              <div><h1 className="uppercase text-2xl border-b border-[#575757]">development</h1>
              <div className='flex'>
              <p className='mt-2'>I specialize in creating and selling digital solutions. I offer web applications that are not only visually appealing but also enhancing online experiences for clients and users.</p>
              </div>
              
              </div>
              <div><h1 className="uppercase text-2xl border-b border-[#575757]">figma design</h1>
              <div className='flex'>
              <p className='mt-2'>I specialize in creating digital designs. I offer visually appealing and functional designs that cater to various needs, enhancing online experiences for clients and users.</p>
              </div>
              
              </div>
            </div>
          </div>
          <div className="h-full w-full order-1">
            <Image src="/mig.jpg" alt="me" width={500} height={500}   className="rounded-sm" />
          </div>
          <div className="h-[95%] w-full flex flex-col justify-between lg:items-center items-start order-3 xl:order-3">
            <div className='hidden xl:flex justify-between w-[80%]'>
              <h1 className='uppercase'>web designer</h1>
              <h1 className='uppercase'>developer</h1>
              <h1 className='uppercase'>ui ui designer</h1>
            </div>
            <Link aria-label='contact me' href="#contact" class="relative">
        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full  bg-gray-200">
          </span>
        <span class="fold-bold relative inline-block h-full w-full   bg-[#42201F] md:px-16 md:py-4 py-2 px-10 text-xl  md:text-2xl font-bold text-white transition duration-100 hover:bg-[#424242] uppercase ">contact</span>
    </Link>
          </div>
          
        </div>
      </section>
    </main>
  )
}