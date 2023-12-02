import Link from 'next/link'

export default function Hero () {
  return (
    <main id="hero" className="w-full  h-full bg-gradient-to-b from-[#090909] via-[#151517]  ">
      <section className="pt-20 sm:pt-40 pb-10 w-full h-full">
      
        
        
        <div className="h-full w-full flex flex-col items-center justify-center gap-[2rem] md:gap-[4rem] text-center">
        
        <h1 className="text-[50px] leading-[50px] xs:text-[60px] xs:leading-[60px] sm:text-[90px] sm:leading-[90px] md:text-[100px] md:leading-[100px] lg:text-[120px] lg:leading-[120px] xl:text-[140px] xl:leading-[140px] 2xl:text-[160px] 2xl:leading-[160px] uppercase
        ">i offer design & <br /> webdevelopment</h1>
        <p className="capitalize text-xl lg:text-2xl text-gray-300">building digital products, <br className="flex md:hidden" />brands and experiences.</p>
        <div class="flex flex-wrap justify-center gap-6">

    <Link aria-label='explore my work' href="#work" class="relative">
        <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-200"></span>
        <span class="fold-bold relative inline-block h-full w-full rounded  bg-[#42201F] px-10 py-3 text-lg sm:text-2xl font-bold text-white transition duration-100 hover:bg-[#424242] uppercase ">explore</span>
    </Link>
</div>
        </div>
      </section>
    </main>
  )
}