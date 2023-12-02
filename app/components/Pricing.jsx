import Link from 'next/link'
import { FaCircleCheck } from "react-icons/fa6";

export default function Pricing () {
  return (
    <main id="pricing"  className="max-w-[1440px] mx-auto w-full h-full py-20 px-6 sm:px-10">
      <h1 className='w-full  text-center mb-10 uppercase text-4xl md:text-6xl'>My webdevelopment packages</h1>
      <div  className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 ">
        <div className='relative'>
      <span class="absolute top-0 left-0 mt-2 ml-2 h-full w-full  bg-[#676767]"></span>
        <span class="fold-bold relative h-full w-full   bg-[#fff] px-4  text-lg sm:text-2xl font-bold text-white  uppercase flex flex-col items-center gap-5 ">
          <div className='font-sans bg-[#323232] w-min whitespace-nowrap text-sm px-2 py-2 mb-2'>starter</div>
          <h1 className='text-black text-4xl uppercase'>BASIC</h1>
          <p className='text-black text-4xl'>4999kr-</p>
          <Link href="#contact" className='font-sans bg-[#696969] hover:bg-[#845251] shadow-sm text-sm px-4 py-2 rounded-full relative'>
           
            Contact

              </Link>
          <ul className='flex flex-col gap-2 w-[90%] mx-auto justify-start mt-5 pb-10'>
            <h1 className='text-black mb-2 text-[20px]'>includes:</h1>

            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Figma design</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>1-4 days delivery</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Shopify store design</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Full customization</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>User-friendly</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Fast and responsive</p>

            </li>
          </ul>
        </span>
        </div>


        <div className='relative'>
      <span class="absolute top-0 left-0 mt-2 ml-2 h-full w-full  bg-[#676767]"></span>
        <span class="fold-bold relative  h-full w-full   bg-[#fff] px-4  text-lg sm:text-2xl font-bold text-white  uppercase flex flex-col items-center gap-5 ">
          <div className='font-sans bg-[#225e96] w-min whitespace-nowrap text-sm px-2 py-2 mb-2 '>Most common</div>
          <h1 className='text-black text-4xl uppercase'>standard</h1>
          <p className='text-black text-4xl'>14999kr-</p>
          <Link href="#contact" className='font-sans bg-[#696969] hover:bg-[#845251] shadow-sm text-sm px-4 py-2 rounded-full relative'>
           
            Contact

              </Link>
          <ul className='flex flex-col gap-2 w-[90%] mx-auto  justify-start mt-5 pb-10'>
            <h1 className='text-black mb-2 text-[20px]'>includes:</h1>

            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Figma demos</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>1-2 weeks delivery</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>E-commerce options</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Full customization</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>User-friendly</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Fast and responsive</p>

            </li>
          </ul>
        </span>
        </div>




        <div className='relative'>
      <span class="absolute top-0 left-0 mt-2 ml-2 h-full w-full  bg-[#676767]"></span>
        <span class="fold-bold relative  h-full w-full   bg-[#fff] px-4  text-lg sm:text-2xl font-bold text-white  uppercase flex flex-col items-center gap-5 ">
          <div className='font-sans bg-[#323232] mb-2 w-min whitespace-nowrap text-sm px-2 py-2 '>recommended</div>
          <h1 className='text-black text-4xl uppercase'>Pro</h1>
          <p className='text-black text-4xl'>49999kr-</p>
          <Link href="#contact" className='font-sans bg-[#696969] hover:bg-[#845251] shadow-sm text-sm px-4 py-2 rounded-full relative'>
           
            Contact

              </Link>
          <ul className='flex flex-col gap-2 w-[90%] mx-auto  justify-start mt-5 pb-10'>
            <h1 className='text-black mb-2 text-[20px]'>includes:</h1>

            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Multiple Figma demos</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>1 month delivery</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>E-commerce options</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Full customization</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>All-inclusive</p>

            </li>
            <li className='list-disc flex gap-5 items-center'>
            <FaCircleCheck  className='text-[#323232] text-[16px] inline-block'/>
            <p className='text-black text-[20px] lowercase font-normal'>Fast and responsive</p>

            </li>
          </ul>
        </span>
        </div>
       
      </div>
    </main>
  )
}